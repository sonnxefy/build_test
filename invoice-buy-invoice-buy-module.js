(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-buy-invoice-buy-module"],{

/***/ "./node_modules/ng2-split-pane/lib/horizontal-split-pane-separator.component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/horizontal-split-pane-separator.component.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var split_pane_separator_component_1 = __webpack_require__(/*! ./split-pane-separator.component */ "./node_modules/ng2-split-pane/lib/split-pane-separator.component.js");
var HorizontalSplitSeparatorComponent = (function (_super) {
    __extends(HorizontalSplitSeparatorComponent, _super);
    function HorizontalSplitSeparatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalSplitSeparatorComponent.prototype.ngAfterViewInit = function () {
        this.invisibleExtension.nativeElement.style.top =
            -(7 - this.thickness) / 2 + "px";
    };
    return HorizontalSplitSeparatorComponent;
}(split_pane_separator_component_1.SplitSeparatorComponent));
HorizontalSplitSeparatorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'horizontal-split-separator',
                styles: ["\n    :host {\n      background-color: #fff;\n      border-top: 1px solid #ddd;\n      cursor: ns-resize;\n      position: relative;\n    }\n    :host:hover {\n      background-color: #fafafa;\n    }\n\n    .invisible-extension {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      min-height: 7px;\n    }\n\n    .handle {\n      width: 35px;\n      height: 100%;\n      background-color: #eee;\n      margin: auto;\n    }\n  "],
                template: "\n    <!-- Used to extend the 'draggable' area in case the separator is too thin,\n    so it's not too hard to drag. -->\n    <div\n      #invisibleExtension\n      [hidden]=\"thickness >= 7\"\n      class=\"invisible-extension\"></div>\n\n    <div class=\"handle\"></div>\n  ",
                host: {
                    '[style.height.px]': 'thickness'
                }
            },] },
];
HorizontalSplitSeparatorComponent.ctorParameters = function () { return []; };
exports.HorizontalSplitSeparatorComponent = HorizontalSplitSeparatorComponent;
//# sourceMappingURL=horizontal-split-pane-separator.component.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/horizontal-split-pane.component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/horizontal-split-pane.component.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var split_pane_component_1 = __webpack_require__(/*! ./split-pane.component */ "./node_modules/ng2-split-pane/lib/split-pane.component.js");
var position_service_1 = __webpack_require__(/*! ./position.service */ "./node_modules/ng2-split-pane/lib/position.service.js");
var HorizontalSplitPaneComponent = (function (_super) {
    __extends(HorizontalSplitPaneComponent, _super);
    function HorizontalSplitPaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalSplitPaneComponent.prototype.getTotalSize = function () {
        return this.outerContainer.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.getPrimarySize = function () {
        return this.primaryComponent.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.getSecondarySize = function () {
        return this.secondaryComponent.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.dividerPosition = function (size) {
        var sizePct = (size / this.getTotalSize()) * 100.0;
        this.primaryComponent.nativeElement.style.height = sizePct + "%";
        this.secondaryComponent.nativeElement.style.height =
            "calc(" + (100 - sizePct) + "% - " + this.separatorThickness + "px)";
    };
    HorizontalSplitPaneComponent.prototype.onMousemove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.pageY - coords.top);
            return false;
        }
    };
    return HorizontalSplitPaneComponent;
}(split_pane_component_1.SplitPaneComponent));
HorizontalSplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'horizontal-split-pane',
                styles: ["\n    .h-outer {\n      height: 100%;\n      width: 100%;\n      display: flex;\n      flex-flow: column;\n    }\n\n    .upper-component {\n      height: calc(50% - 4px);\n    }\n\n    .lower-component {\n      height: calc(50% - 4px);\n    }\n  "],
                template: "\n  <div #outer class=\"h-outer\">\n    <div\n      #primaryComponent\n      [hidden]=\"primaryToggledOff\"\n      class=\"upper-component\">\n      <ng-content select=\".split-pane-content-primary\"></ng-content>\n    </div>\n    <horizontal-split-separator\n      #separator\n      [hidden]=\"primaryToggledOff ||\u00A0secondaryToggledOff\"\n      [thickness]=\"separatorThickness\"\n      (notifyWillChangeSize)=\"notifyWillChangeSize($event)\">\n    </horizontal-split-separator>\n    <div\n      #secondaryComponent\n      [hidden]=\"secondaryToggledOff\"\n      class=\"lower-component\">\n      <ng-content select=\".split-pane-content-secondary\"></ng-content>\n    </div>\n  </div>\n  ",
            },] },
];
HorizontalSplitPaneComponent.ctorParameters = function () { return []; };
HorizontalSplitPaneComponent.propDecorators = {
    'outerContainer': [{ type: core_1.ViewChild, args: ['outer',] },],
    'test': [{ type: core_1.Input },],
    'onMousemove': [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
};
exports.HorizontalSplitPaneComponent = HorizontalSplitPaneComponent;
//# sourceMappingURL=horizontal-split-pane.component.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/ng2-split-pane.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/ng2-split-pane.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var horizontal_split_pane_separator_component_1 = __webpack_require__(/*! ./horizontal-split-pane-separator.component */ "./node_modules/ng2-split-pane/lib/horizontal-split-pane-separator.component.js");
var vertical_split_pane_separator_component_1 = __webpack_require__(/*! ./vertical-split-pane-separator.component */ "./node_modules/ng2-split-pane/lib/vertical-split-pane-separator.component.js");
var horizontal_split_pane_component_1 = __webpack_require__(/*! ./horizontal-split-pane.component */ "./node_modules/ng2-split-pane/lib/horizontal-split-pane.component.js");
var vertical_split_pane_component_1 = __webpack_require__(/*! ./vertical-split-pane.component */ "./node_modules/ng2-split-pane/lib/vertical-split-pane.component.js");
var split_pane_separator_component_1 = __webpack_require__(/*! ./split-pane-separator.component */ "./node_modules/ng2-split-pane/lib/split-pane-separator.component.js");
var split_pane_component_1 = __webpack_require__(/*! ./split-pane.component */ "./node_modules/ng2-split-pane/lib/split-pane.component.js");
function delayedInit() {
    return {
        ngModule: SplitPaneModule,
        providers: []
    };
}
exports.delayedInit = delayedInit;
var SplitPaneModule = (function () {
    function SplitPaneModule() {
    }
    return SplitPaneModule;
}());
SplitPaneModule.forRoot = delayedInit();
SplitPaneModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [
                    horizontal_split_pane_component_1.HorizontalSplitPaneComponent,
                    vertical_split_pane_component_1.VerticalSplitPaneComponent,
                    horizontal_split_pane_separator_component_1.HorizontalSplitSeparatorComponent,
                    vertical_split_pane_separator_component_1.VerticalSplitSeparatorComponent,
                    split_pane_separator_component_1.SplitSeparatorComponent,
                    split_pane_component_1.SplitPaneComponent
                ],
                exports: [horizontal_split_pane_component_1.HorizontalSplitPaneComponent, vertical_split_pane_component_1.VerticalSplitPaneComponent]
            },] },
];
SplitPaneModule.ctorParameters = function () { return []; };
exports.SplitPaneModule = SplitPaneModule;
//# sourceMappingURL=ng2-split-pane.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/position.service.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/position.service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PositionService = (function () {
    function PositionService() {
    }
    PositionService.position = function (element) {
        var nativeEl = element.nativeElement;
        var elBCR = this.offset(nativeEl);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== this.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PositionService.offset = function (element) {
        var nativeEl = element.nativeElement;
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
            left: boundingClientRect.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft)
        };
    };
    PositionService.positionElements = function (host, target, positionStr, appendToBody) {
        var hostEl = host.nativeElement;
        var targetEl = target.nativeElement;
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ?
            this.offset(hostEl) :
            this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    Object.defineProperty(PositionService, "window", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositionService, "document", {
        get: function () {
            return window.document;
        },
        enumerable: true,
        configurable: true
    });
    PositionService.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) {
            return nativeEl.currentStyle[cssProp];
        }
        if (this.window.getComputedStyle) {
            return this.window.getComputedStyle(nativeEl)[cssProp];
        }
        return nativeEl.style[cssProp];
    };
    PositionService.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PositionService.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || this.document;
        while (offsetParent && offsetParent !== this.document &&
            this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || this.document;
    };
    ;
    return PositionService;
}());
exports.PositionService = PositionService;
//# sourceMappingURL=position.service.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/split-pane-separator.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/split-pane-separator.component.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SplitSeparatorComponent = (function () {
    function SplitSeparatorComponent() {
        this.notifyWillChangeSize = new core_1.EventEmitter();
    }
    SplitSeparatorComponent.prototype.ngOnInit = function () {
    };
    SplitSeparatorComponent.prototype.onMousedown = function (event) {
        this.notifyWillChangeSize.emit(true);
        return false;
    };
    return SplitSeparatorComponent;
}());
SplitSeparatorComponent.decorators = [
    { type: core_1.Component, args: [{
                template: ''
            },] },
];
SplitSeparatorComponent.ctorParameters = function () { return []; };
SplitSeparatorComponent.propDecorators = {
    'thickness': [{ type: core_1.Input },],
    'notifyWillChangeSize': [{ type: core_1.Output },],
    'invisibleExtension': [{ type: core_1.ViewChild, args: ['invisibleExtension',] },],
    'onMousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
};
exports.SplitSeparatorComponent = SplitSeparatorComponent;
//# sourceMappingURL=split-pane-separator.component.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/split-pane.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/split-pane.component.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SplitPaneComponent = (function () {
    function SplitPaneComponent() {
        this.initialRatio = 0.5;
        this.primaryMinSize = 0;
        this.secondaryMinSize = 0;
        this.separatorThickness = 7;
        this.primaryToggledOff = false;
        this.secondaryToggledOff = false;
        this.localStorageKey = null;
        this.notifySizeDidChange = new core_1.EventEmitter();
        this.notifyBeginResizing = new core_1.EventEmitter();
        this.notifyEndedResizing = new core_1.EventEmitter();
        this.dividerSize = 8.0;
        this.isResizing = false;
    }
    SplitPaneComponent.prototype.ngAfterViewInit = function () {
        this.checkBothToggledOff();
        if (!this.primaryToggledOff && !this.secondaryToggledOff) {
            var ratio = this.initialRatio;
            if (this.localStorageKey != null) {
                var ratioStr = localStorage.getItem(this.localStorageKey);
                if (ratioStr != null) {
                    ratio = JSON.parse(ratioStr);
                }
            }
            var size = ratio * this.getTotalSize();
            this.applySizeChange(size);
        }
    };
    SplitPaneComponent.prototype.ngOnChanges = function (changes) {
        this.checkBothToggledOff();
        if (changes['primaryToggledOff']) {
            if (changes['primaryToggledOff'].currentValue === true) {
                this.primarySizeBeforeTogglingOff = this.getPrimarySize();
                this.applySizeChange(0);
            }
            else {
                this.applySizeChange(this.primarySizeBeforeTogglingOff);
            }
        }
        else if (changes['secondaryToggledOff']) {
            if (changes['secondaryToggledOff'].currentValue === true) {
                this.primarySizeBeforeTogglingOff = this.getPrimarySize();
                this.applySizeChange(this.getTotalSize());
            }
            else {
                this.applySizeChange(this.primarySizeBeforeTogglingOff);
            }
        }
    };
    SplitPaneComponent.prototype.getTotalSize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getPrimarySize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getSecondarySize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.dividerPosition = function (size) {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getAvailableSize = function () {
        return this.getTotalSize() - this.dividerSize;
    };
    SplitPaneComponent.prototype.applySizeChange = function (size) {
        var primarySize = this.checkValidBounds(size, this.primaryMinSize, this.getAvailableSize() - this.secondaryMinSize);
        if (this.primaryToggledOff) {
            primarySize = 0;
        }
        else if (this.secondaryToggledOff) {
            primarySize = this.getTotalSize();
        }
        this.dividerPosition(primarySize);
        this.notifySizeDidChange.emit({ 'primary': this.getPrimarySize(), 'secondary': this.getSecondarySize() });
    };
    SplitPaneComponent.prototype.notifyWillChangeSize = function (resizing) {
        this.isResizing = resizing;
        this.notifyBeginResizing.emit();
    };
    SplitPaneComponent.prototype.checkValidBounds = function (newSize, minSize, maxSize) {
        return newSize >= minSize
            ? (newSize <= maxSize)
                ? newSize
                : maxSize
            : minSize;
    };
    SplitPaneComponent.prototype.checkBothToggledOff = function () {
        if (this.primaryToggledOff && this.secondaryToggledOff) {
            throw ('You cannot toggle off both the primary and secondary component');
        }
    };
    SplitPaneComponent.prototype.stopResizing = function () {
        this.isResizing = false;
        this.primaryComponent.nativeElement.style.cursor = "auto";
        this.secondaryComponent.nativeElement.style.cursor = "auto";
        if (this.localStorageKey != null) {
            var ratio = this.getPrimarySize() / (this.getTotalSize());
            localStorage.setItem(this.localStorageKey, JSON.stringify(ratio));
        }
        this.notifyEndedResizing.emit();
    };
    SplitPaneComponent.prototype.onMouseup = function (event) {
        if (this.isResizing) {
            this.stopResizing();
            return false;
        }
    };
    return SplitPaneComponent;
}());
SplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'split-pane',
                template: '',
                host: { 'style': 'height: 100%' }
            },] },
];
SplitPaneComponent.ctorParameters = function () { return []; };
SplitPaneComponent.propDecorators = {
    'primaryComponent': [{ type: core_1.ViewChild, args: ['primaryComponent',] },],
    'secondaryComponent': [{ type: core_1.ViewChild, args: ['secondaryComponent',] },],
    'initialRatio': [{ type: core_1.Input, args: ['primary-component-initialratio',] },],
    'primaryMinSize': [{ type: core_1.Input, args: ['primary-component-minsize',] },],
    'secondaryMinSize': [{ type: core_1.Input, args: ['secondary-component-minsize',] },],
    'separatorThickness': [{ type: core_1.Input, args: ['separator-thickness',] },],
    'primaryToggledOff': [{ type: core_1.Input, args: ['primary-component-toggled-off',] },],
    'secondaryToggledOff': [{ type: core_1.Input, args: ['secondary-component-toggled-off',] },],
    'localStorageKey': [{ type: core_1.Input, args: ['local-storage-key',] },],
    'notifySizeDidChange': [{ type: core_1.Output, args: ['on-change',] },],
    'notifyBeginResizing': [{ type: core_1.Output, args: ['on-begin-resizing',] },],
    'notifyEndedResizing': [{ type: core_1.Output, args: ['on-ended-resizing',] },],
    'onMouseup': [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] },],
};
exports.SplitPaneComponent = SplitPaneComponent;
//# sourceMappingURL=split-pane.component.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/vertical-split-pane-separator.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/vertical-split-pane-separator.component.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var split_pane_separator_component_1 = __webpack_require__(/*! ./split-pane-separator.component */ "./node_modules/ng2-split-pane/lib/split-pane-separator.component.js");
var VerticalSplitSeparatorComponent = (function (_super) {
    __extends(VerticalSplitSeparatorComponent, _super);
    function VerticalSplitSeparatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalSplitSeparatorComponent.prototype.ngAfterViewInit = function () {
        this.invisibleExtension.nativeElement.style.left =
            -(7 - this.thickness) / 2 + "px";
    };
    return VerticalSplitSeparatorComponent;
}(split_pane_separator_component_1.SplitSeparatorComponent));
VerticalSplitSeparatorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'vertical-split-separator',
                styles: ["\n    :host {\n      background-color: #fff;\n      border-left: 1px solid #ddd;\n      cursor: ew-resize;\n      position: relative;\n    }\n    :host:hover {\n      background-color: #fafafa;\n    }\n\n    .invisible-extension {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      min-width: 7px;\n    }\n\n    .handle {\n      width: 100%;\n      height: 35px;\n      background-color: #eee;\n      position: absolute;\n      top: calc(50% - 17px);\n    }\n  "],
                template: "\n    <!-- Used to extend the 'draggable' area in case the separator is too thin,\n    so it's not too hard to drag. -->\n    <div\n      #invisibleExtension\n      [hidden]=\"thickness >= 7\"\n      class=\"invisible-extension\"></div>\n\n    <div class=\"handle\"></div>\n  ",
                host: {
                    '[style.width.px]': 'thickness'
                }
            },] },
];
VerticalSplitSeparatorComponent.ctorParameters = function () { return []; };
exports.VerticalSplitSeparatorComponent = VerticalSplitSeparatorComponent;
//# sourceMappingURL=vertical-split-pane-separator.component.js.map

/***/ }),

/***/ "./node_modules/ng2-split-pane/lib/vertical-split-pane.component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-split-pane/lib/vertical-split-pane.component.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var split_pane_component_1 = __webpack_require__(/*! ./split-pane.component */ "./node_modules/ng2-split-pane/lib/split-pane.component.js");
var position_service_1 = __webpack_require__(/*! ./position.service */ "./node_modules/ng2-split-pane/lib/position.service.js");
var VerticalSplitPaneComponent = (function (_super) {
    __extends(VerticalSplitPaneComponent, _super);
    function VerticalSplitPaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalSplitPaneComponent.prototype.getTotalSize = function () {
        return this.outerContainer.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.getPrimarySize = function () {
        return this.primaryComponent.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.getSecondarySize = function () {
        return this.secondaryComponent.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.dividerPosition = function (size) {
        var sizePct = (size / this.getTotalSize()) * 100;
        this.primaryComponent.nativeElement.style.width = sizePct + "%";
        this.secondaryComponent.nativeElement.style.width =
            "calc(" + (100 - sizePct) + "% - " + this.separatorThickness + "px)";
    };
    VerticalSplitPaneComponent.prototype.onMousemove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.pageX - coords.left);
            return false;
        }
    };
    return VerticalSplitPaneComponent;
}(split_pane_component_1.SplitPaneComponent));
VerticalSplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'vertical-split-pane',
                styles: ["\n    .v-outer {\n      height: 100%;\n      width: 100%;\n      display: flex;\n    }\n\n    .left-component {\n      width: calc(50% - 4px);\n    }\n\n    .right-component {\n      width: calc(50% - 4px);\n    }\n  "],
                template: "\n  <div #outer class=\"v-outer\">\n    <div\n      #primaryComponent\n      [hidden]=\"primaryToggledOff\"\n      class=\"left-component\">\n      <ng-content select=\".split-pane-content-primary\"></ng-content>\n    </div>\n    <vertical-split-separator\n      #separator\n      [hidden]=\"primaryToggledOff ||\u00A0secondaryToggledOff\"\n      [thickness]=\"separatorThickness\"\n      (notifyWillChangeSize)=\"notifyWillChangeSize($event)\">\n    </vertical-split-separator>\n    <div\n      #secondaryComponent\n      [hidden]=\"secondaryToggledOff\"\n      class=\"right-component\">\n      <ng-content select=\".split-pane-content-secondary\"></ng-content>\n    </div>\n  </div>\n  ",
            },] },
];
VerticalSplitPaneComponent.ctorParameters = function () { return []; };
VerticalSplitPaneComponent.propDecorators = {
    'outerContainer': [{ type: core_1.ViewChild, args: ['outer',] },],
    'onMousemove': [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
};
exports.VerticalSplitPaneComponent = VerticalSplitPaneComponent;
//# sourceMappingURL=vertical-split-pane.component.js.map

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div>\r\n    <h4 class=\"modal-title pull-left\">thông tin - tài khoản kết nối</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container\" *ngIf=\"is_expired\">\r\n    <dx-form id=\"isInvoiceBuyFromMail\" [formData]=\"captcha\" validationGroup=\"cfData\" [showColonAfterLabel]=\"false\">\r\n      <dxi-item itemType=\"group\" cssClass=\"captcha\">\r\n        <dxi-item [label]=\"{ text: _translate.CONFIGS.captcha_code}\">\r\n          <div class=\"captcha-container\">\r\n            <img [src]=\"captchaContent\" class=\"captcha-img\">\r\n            <button type=\"button\" class=\"reset-captcha\"><i class=\"anticon\" (click)=\"getCaptcha()\"><svg\r\n                  xmlns=\"http://www.w3.org/2000/svg\" width=\"24.195\" height=\"24.22\" viewBox=\"0 0 24.195 24.22\">\r\n                  <g id=\"cap_cha_btn\" transform=\"translate(-775.977 -774.928)\">\r\n                    <path id=\"Path_4177\" data-name=\"Path 4177\"\r\n                      d=\"M788.332,777.993v-3.065l-5.571,5.571,5.571,5.57V783c6.515-.544,10.72,3.789,11.78,9.487C800.8,784.211,795.486,779.318,788.332,777.993Z\"\r\n                      fill=\"#333\"></path>\r\n                    <path id=\"Path_4178\" data-name=\"Path 4178\"\r\n                      d=\"M787.942,796.05v3.1l5.63-5.63-5.63-5.629v3.1c-5.228.437-10.525-2.174-11.905-9.587C775.342,789.785,780.737,794.716,787.942,796.05Z\"\r\n                      fill=\"#333\"></path>\r\n                  </g>\r\n                </svg></i></button>\r\n          </div>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"captcha_code\" cssClass=\"invoice-captcha\"\r\n          [label]=\"{ text: _translate.CONFIGS.enter_captcha_code}\" [colSpan]=\"2\">\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONFIGS.enter_captcha_code}} {{_translate.VALIDATION.required}}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <h1 *ngIf=\"!is_expired\">Vui lòng kết nối tài khoản thuế <a (click)=\"goToConfig()\" href=\"javascript:void(0)\">Tại đây</a></h1>\r\n</div>\r\n<div style=\"padding: 1rem; border-top: 1px solid #e9ecef\">\r\n  <div class=\"row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"button-box\" style=\"display: flex; justify-content: flex-end; align-items: center\">\r\n        <dx-button text=\"Kết nối\" type=\"default\" (click)=\"udateCaptcha()\" *ngIf=\"is_expired\">\r\n        </dx-button>\r\n        <dx-button text=\"Quay lại\" type=\"default\" (click)=\"close()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".captcha-container{display:flex;align-items:center;margin-left:10px}.captcha-container .captcha-img{background:#e5e5e5;border:1px solid;border-right:none;height:30px}.captcha-container .reset-captcha{height:30px;border-left:none;background:#e5e5e5;outline:none;border-bottom:1px solid;border-right:1px solid;border-top:1px solid}::ng-deep .captcha{align-items:center}::ng-deep .invoice-captcha .dx-texteditor{margin-left:10px}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CaptchaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaUpdateComponent", function() { return CaptchaUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaptchaUpdateComponent = /** @class */ (function () {
    function CaptchaUpdateComponent(authService, bsModalRef, coreService, router, configsService, domSanitizer) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.configsService = configsService;
        this.domSanitizer = domSanitizer;
        this.captcha = {};
        this.isCheck = false;
        this.arrCookie = [];
        this._translate = this.authService.getTranslate();
    }
    CaptchaUpdateComponent.prototype.ngOnInit = function () {
        this.getCaptcha();
    };
    CaptchaUpdateComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    CaptchaUpdateComponent.prototype.dongy = function () {
        this.bsModalRef.content.successSaveItem = 'SuccessHomePage';
        this.bsModalRef.hide();
    };
    CaptchaUpdateComponent.prototype.goToConfig = function () {
        this.router.navigate(['/system/configs', { type: 'tct' }]);
        this.bsModalRef.hide();
    };
    CaptchaUpdateComponent.prototype.getCaptcha = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.configsService.getCaptcha().subscribe(function (res) {
            if (res.status == 'success') {
                _this.captchaContent = _this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + res.data.content);
                _this.captcha_code = res.data.key;
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Hệ thống của tổng cục thuế đang lỗi, vui lòng thử lại', 'error', 5000);
            }
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    CaptchaUpdateComponent.prototype.udateCaptcha = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var data = {
            config_search: {
                captcha_key: this.captcha_code,
                captcha_code: this.captcha.captcha_code
            }
        };
        this.configsService.updateCaptcha(data).subscribe(function (res) {
            if (res.status == 'success') {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                _this.bsModalRef.hide();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                _this.getCaptcha();
            }
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    CaptchaUpdateComponent.prototype.onChangeCheck = function () {
        this.isCheck = !this.isCheck;
    };
    CaptchaUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captcha-update',
            template: __webpack_require__(/*! ./captcha-update.component.html */ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.html"),
            styles: [__webpack_require__(/*! ./captcha-update.component.scss */ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__["ConfigsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], CaptchaUpdateComponent);
    return CaptchaUpdateComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-12\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"3\" cssClass='vat layout_input group-input-button'>\r\n          <dxi-item\r\n            [editorOptions]=\"{placeholder: 'Nhấn icon để tải file (chỉ ghi nhận file có định dạng XML)', disabled: true}\"\r\n            dataField=\"invoice_type_name\"\r\n            name=\"invoice_release_id\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.load_XML_invoice }}\"></dxo-label>\r\n          </dxi-item>\r\n\r\n          <dxi-item cssClass='btn-small'>\r\n            <input placeholder=\"Nhấn icon để tải file (chỉ ghi nhận file có định dạng XML)\"\r\n                   #myInput type=\"file\"\r\n                   class=\"d-none\" id=\"file-id\"\r\n                   name=\"file-id\" accept='text/xml'\r\n                   (change)=\"fileChanged($event)\">\r\n            <button type=\"button\" (click)=\"openFile()\" class=\"text-primary border-0 bg-transparent\">\r\n              <i class=\"dx-icon fa fa-upload icon-size\"></i>\r\n            </button>\r\n          </dxi-item>\r\n\r\n          <dxi-item cssClass='btn-small'>\r\n            <button type=\"button\" (click)=\"clearDataFrm()\" class=\"text-danger border-0 bg-transparent\">\r\n              <i class=\"dx-icon fa fa-trash icon-size\"></i>\r\n            </button>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"seller_legal_name\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.name_seller_unit }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{ _translate.CONTROLL.LABEL.name_seller_unit }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"template_code\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n                                 message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n\r\n          <dxi-item dataField=\"invoice_series\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_series }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n                                 message=\"{{ _translate.CONTROLL.LABEL.invoice_series }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"seller_address\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{ _translate.CONTROLL.LABEL.address }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"invoice_date\" editorType=\"dxDateBox\"\r\n                    [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n                                 message=\"{{ _translate.CONTROLL.LABEL.invoice_date }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat layout_input group-input-button'>\r\n            <dxi-item dataField=\"invoice_number\" cssClass=\"style_data_filed_invoice_buy\" name=\"search-mst\">\r\n              <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                                   message=\"{{ _translate.GRID.INVOICE.invoice_number }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item cssClass='btn-small'>\r\n              <button (click)=\"checkNumberInvoice()\" type=\"button\" class=\"border-0 bg-transparent\">\r\n                <i class=\"dx-icon fa fa-file-pdf-o icon-size\"></i>\r\n              </button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat layout_input group-input-button'>\r\n            <dxi-item dataField=\"seller_tax_code\" cssClass=\"style_data_filed_invoice_buy\" name=\"search-mst\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-autocomplete\r\n                  valueExpr=\"tax_code\"\r\n                  placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\"\r\n                  [dataSource]=\"tax_codes\"\r\n                  [(value)]=\"frmData.seller_tax_code\"\r\n                  [readOnly]=\"readOnlyCacTruongConLai\"\r\n                  (onItemClick)=\"taxCodeChoose($event)\"\r\n                >\r\n                  <div *dxTemplate=\"let item of 'item'\">\r\n                    <span>{{item.tax_code}}: {{ item.name }}</span>\r\n                  </div>\r\n                </dx-autocomplete>\r\n              </div>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"button\" [buttonOptions]=\"mst_btn_options\" cssClass='btn-small'>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <dxi-item dataField=\"seller_mobile\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.mobile }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"currency_code\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"currency_rate\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item [label]=\"{text: 'Email'}\">\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [typePlacehoderValue]=\"false\" [variableName]=\"this.emails\"\r\n                                     (numberGenerated)=\"renderDataEmail($event)\"\r\n                ></app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"payment_method_view_name\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"adjustment_type\" editorType=\"dxSelectBox\"\r\n                    [editorOptions]=\"{items: select.invoice_type, displayExpr: 'name', valueExpr: 'code'}\">\r\n            <dxo-label text=\"{{ _translate.GRID.TEMPLATE.invoice_type }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n                                 message=\"{{ _translate.GRID.TEMPLATE.invoice_type }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"seller_bank_account\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.account_bank }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item cssClass=\"vat invoice-note\" dataField=\"note\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.note }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <dx-form style=\"margin-top:7px\">\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup\r\n  [width]=\"350\"\r\n  [height]=\"175\"\r\n  [showTitle]=\"true\"\r\n  title=\"Thông báo\"\r\n  [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .style_data_filed_invoice_buy .dx-field-item-label .dx-field-item-label-content{width:138px !important}.icon-size{font-size:24px !important}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FormHeaderInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeaderInvoiceComponent", function() { return FormHeaderInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_invoice_buy_shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component */ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.ts");
/* harmony import */ var _modules_invoice_buy_shared_modal_check_invoice_number_check_invoice_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component */ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.ts");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/invoice-buy/shared/class/invoice.model */ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/library/public/v-string.service */ "./src/app/core/library/public/v-string.service.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var FormHeaderInvoiceComponent = /** @class */ (function () {
    function FormHeaderInvoiceComponent(authService, route, modalService, bsModalRef, translate, invoiceBuyService, vatService, customersService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.translate = translate;
        this.invoiceBuyService = invoiceBuyService;
        this.vatService = vatService;
        this.customersService = customersService;
        this.showPopup = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.mst_btn_options = {
            text: '',
            icon: 'fa fa-search',
            type: 'default',
            onClick: function () {
                _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].showloading();
                _this.customersService.getInfoCompany(_this.frmData.seller_tax_code).subscribe(function (res) {
                    if (res.status === 'success') {
                        if (res.data.customer.active_status === 1) {
                            var initialState = {
                                data: res.data.customer,
                                isShow: false,
                            };
                            _this.bsModalRef = _this.modalService.show(_modules_invoice_buy_shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_5__["NotifyTaxCodeComponent"], {
                                class: 'modal-md', initialState: initialState, backdrop: 'static',
                                keyboard: false
                            });
                        }
                        else {
                            var initialState = {
                                isShow: true,
                                message: _this._translate.NOTIFY.system_not_found
                            };
                            _this.bsModalRef = _this.modalService.show(_modules_invoice_buy_shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_5__["NotifyTaxCodeComponent"], {
                                class: 'modal-md', initialState: initialState, backdrop: 'static',
                                keyboard: false
                            });
                        }
                    }
                    else {
                        // Library.notify(res.message, 'error');
                        var initialState = {
                            isShow: true,
                            message: _this._translate.NOTIFY.system_not_found
                        };
                        _this.bsModalRef = _this.modalService.show(_modules_invoice_buy_shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_5__["NotifyTaxCodeComponent"], {
                            class: 'modal-md', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                    }
                }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].hideloading(); });
            }
        };
        this.emails = [];
        this.customer_codes = [];
        this.fileReader = new FileReader();
        this.htXuatOptions = [];
        this.tax_code_local = null;
        this.tax_codes = [];
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormHeaderInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tax_code_local = dataUser.account.tax_code;
        this.route.data
            .map(function (value) { return value.FormResolverService; })
            .subscribe(function (data) {
            _this.setDataConfig(data[0]);
            if (_this.frmData.seller_email) {
                _this.emails = [];
                var stringDataEmailGet = _this.frmData.seller_email.split(';');
                for (var i = 0; i < stringDataEmailGet.length; i++) {
                    _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                }
            }
        });
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_12___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
    };
    FormHeaderInvoiceComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        this.frmData.seller_legal_name = customer.name;
        this.frmData.seller_address = customer.business_address;
        this.frmData.seller_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.seller_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.seller_email = customer.email;
            this.emails = [];
        }
        if (customer.bank_account_number) {
            this.frmData.seller_bank_account = customer.bank_account_number + ' - ' + customer.bank_name;
        }
        else {
            this.frmData.seller_bank_account = customer.bank_name;
        }
        this.onFieldDataChanged();
    };
    FormHeaderInvoiceComponent.prototype.setDataConfig = function (data) {
        this.select.payment_method_names = data.DM_HINH_THUC_THANH_TOAN;
        this.select.currency_codes = data.DM_LOAI_TIEN;
        this.select.invoice_type = [
            { code: '1', name: 'Hóa đơn gốc' },
            { code: '2', name: this._translate.GRID.GENERAL.invoice_replaced },
            { code: '3', name: 'Hóa đơn thay thế' },
            { code: '4', name: this._translate.GRID.GENERAL.invoice_adjusted },
            { code: '5', name: this._translate.GRID.GENERAL.adjustment_invoice },
            { code: '6', name: this._translate.GRID.GENERAL.invoice_deleted },
            { code: '7', name: this._translate.GRID.GENERAL.invoice_removed },
        ];
    };
    FormHeaderInvoiceComponent.prototype.renderDataEmail = function ($event) {
        var arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    arrEmail.push(this.emails[i]);
            }
            var emailToString = arrEmail.toString();
        }
        else {
        }
    };
    FormHeaderInvoiceComponent.prototype.fileChanged = function ($event) {
        var _this = this;
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_11__["Invoice"]('1');
        this.emails = [];
        this.onFieldDataChanged();
        this.frmData.version_xml = "1";
        var fileContent = $event.target.files[0];
        var nameFile;
        if (fileContent.name) {
            nameFile = fileContent.name;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function (x) {
            _this.parseXMLtoObject(fileReader.result, nameFile);
        };
        fileReader.readAsText(fileContent);
    };
    FormHeaderInvoiceComponent.prototype.parseXMLtoObject = function (data, nameFile) {
        var _this = this;
        var dataBase64Code = window.btoa(unescape(encodeURIComponent(data)));
        // paser to base64 to a string
        // const b = decodeURIComponent(escape(window.atob(a)));
        xml2js__WEBPACK_IMPORTED_MODULE_7___default.a.parseString(data, function (err, result) {
            if (result) {
                if (result.hasOwnProperty('Invoice')) {
                    var X509Certificate = '';
                    if (result['Invoice']['Signature'])
                        X509Certificate = result['Invoice']['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    _this.getValueToObject('dreamSoft', result['Invoice']['Content'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty('inv:invoice')) {
                    var X509Certificate = '';
                    if (result['inv:invoice']['Signature'])
                        X509Certificate = result['inv:invoice']['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    _this.getValueToObject('all', result['inv:invoice']['inv:invoiceData'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty('inv:transaction')) {
                    var X509Certificate = '';
                    if (result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['Signature'])
                        X509Certificate = result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    _this.getValueToObject('all', result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['inv:invoiceData'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty("HDon")) {
                    _this.readDataFromXmlTCT(result, nameFile, dataBase64Code);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify('File dữ liệu không phải file hóa đơn!', 'error');
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify('File dữ liệu không đúng!', 'error');
            }
        });
    };
    FormHeaderInvoiceComponent.prototype.getValueToObject = function (type, value, nameFile, dataBase64Code, signature) {
        var object = {};
        for (var property in value) {
            if (value.hasOwnProperty(property)) {
                if (typeof value[property][0] === 'string') {
                    object[property] = value[property][0].trim();
                }
                else {
                    object[property] = value[property][0];
                }
            }
        }
        if (type === 'dreamSoft') {
            if (object['CusTaxCode']) {
                if (object['CusTaxCode'] === this.tax_code_local) {
                    this.addValueToFormFormat1(object, nameFile, dataBase64Code, signature);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.NOTIFY.tax_code_diffirent_error, 'error');
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify('Chưa hỗ trợ đọc định dạng file hóa đơn này', 'error');
            }
        }
        else if (type === 'all') {
            if (object['inv:buyerTaxCode']) {
                if (object['inv:buyerTaxCode'] === this.tax_code_local) {
                    this.addValueToFormFormat2(object, nameFile, dataBase64Code, signature);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.NOTIFY.tax_code_diffirent_error, 'error');
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify('Chưa hỗ trợ đọc định dạng file hóa đơn này', 'error');
            }
        }
    };
    FormHeaderInvoiceComponent.prototype.addValueToFormFormat1 = function (object, nameFile, dataBase64Code, signature) {
        this.frmData.invoice_type_name = nameFile;
        this.frmData.signature_content = signature;
        if (object['ArisingDate'])
            this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['ArisingDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        if (object['SignDate'])
            this.frmData.sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['SignDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        this.frmData.template_code = object['InvoicePattern'];
        if (object.hasOwnProperty('Kind_of_Payment')) {
            this.frmData.payment_method_view_name = object['Kind_of_Payment'];
        }
        else {
            this.frmData.payment_method_view_name = object['PaymentMethod'];
        }
        this.frmData.invoice_series = object['SerialNo'];
        this.frmData.seller_legal_name = object['ComName'];
        this.frmData.invoice_number = object['InvoiceNo'];
        this.frmData.currency_code = object['CurrencyUnit'];
        if (object['ExchangeRate']) {
            this.frmData.currency_rate = object['ExchangeRate'].replace(',', '.');
        }
        this.frmData.adjustment_type = '1';
        this.frmData.seller_tax_code = object['ComTaxCode'];
        this.frmData.seller_address = object['ComAddress'];
        this.frmData.seller_mobile = object['ComPhone'];
        if (object['ComEmail']) {
            if (object['ComEmail'] !== '.') {
                this.frmData.seller_email = object['ComEmail'];
                this.emails = [];
                var stringDataEmailGet = object['ComEmail'].split(';');
                for (var i = 0; i < stringDataEmailGet.length; i++) {
                    this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                }
            }
            else {
                this.frmData.seller_email = null;
                this.emails = [];
            }
        }
        else {
            this.frmData.seller_email = null;
            this.emails = [];
        }
        if (object.hasOwnProperty('ComFaxCode')) {
            this.frmData.seller_fax_number = object['ComFaxCode'];
        }
        this.frmData.buyer_legal_name = object['CusName'];
        this.frmData.buyer_tax_code = object['CusTaxCode'];
        this.frmData.buyer_mobile = object['CusPhone'];
        this.frmData.buyer_address = object['CusPhone'];
        this.frmData.buyer_email = object['CusEmail'];
        this.frmData.xml_type = "2";
        if (object.hasOwnProperty('ComBankNo')) {
            if (object['ComBankName']) {
                this.frmData.seller_bank_account = object['ComBankNo'] + ' - ' + object['ComBankName'];
            }
            else {
                this.frmData.seller_bank_account = object['ComBankName'];
            }
        }
        this.frmData.amount = parseInt(object['Total'].replace(',', '.'), 10);
        if (object.hasOwnProperty('VATAmount')) {
            this.frmData.total_amount_vat = parseInt(object['VATAmount'].replace(',', '.'), 10);
        }
        else {
            this.frmData.total_amount_vat = parseInt(object['VAT_Amount'].replace(',', '.'), 10);
        }
        this.frmData.total_payment = parseInt(object['Amount'].replace(',', '.'), 10);
        if (object.hasOwnProperty('Amount_words')) {
            this.frmData.total_payment_in_word = object['Amount_words'];
        }
        else {
            this.frmData.total_payment_in_word = object['AmountInWords'];
        }
        this.frmData.input_invoice_files = [{
                order: 'DK',
                file_name: nameFile,
                file_content: dataBase64Code,
                is_file_import: true
            }];
        if (object['Products']) {
            var arrItem = object['Products']['Product'];
            for (var i = 0; i < arrItem.length; i++) {
                for (var keyItem in arrItem[i]) {
                    if (arrItem[i].hasOwnProperty(keyItem)) {
                        arrItem[i][keyItem] = arrItem[i][keyItem][0].trim();
                    }
                }
            }
            var arrItemFormat = this.invoiceBuyService.formatArrayItem(arrItem);
            arrItemFormat.forEach(function (value, index) {
                if (value.quantity) {
                    value.quantity = parseInt(value.quantity.replace(',', '.'), 10);
                }
                else {
                    value.quantity = null;
                }
                if (!value.product_code) {
                    value.product_code = null;
                }
                if (value.price) {
                    value.price = parseInt(value.price.replace(',', '.'), 10);
                }
                else {
                    value.price = null;
                }
                if (value.amount) {
                    value.amount = parseInt(value.amount.replace(',', '.'), 10);
                }
                else {
                    value.amount = null;
                }
                if (value.vat) {
                    value.vat = parseInt(value.vat.replace(',', '.'), 10);
                }
                else {
                    value.vat = null;
                }
                if (!value.unit_name) {
                    value.unit_name = null;
                }
                if (value.amount_vat) {
                    value.amount_vat = parseInt(value.amount_vat.replace(',', '.'), 10);
                }
                else {
                    value.amount_vat = null;
                }
                if (value.unit_code === undefined) {
                    value.unit_code = null;
                }
                if (value.amount && value.amount_vat) {
                    value.amount_after_vat = value.amount + value.amount_vat;
                }
                else if (value.amount && !value.amount_vat) {
                    value.amount_after_vat = value.amount;
                }
                else {
                    value.amount_after_vat = null;
                }
                value.order = index + 1;
            });
            this.frmData.input_invoice_products = arrItemFormat;
        }
        this.onFieldDataChanged();
    };
    /* Đọc file xml từ Tổng Cục Thuế */
    FormHeaderInvoiceComponent.prototype.readDataFromXmlTCT = function (content, nameFile, dataBase64Code) {
        var _this = this;
        var TTChung = content['HDon']['DLHDon'][0]['TTChung'][0];
        var NBan = content['HDon']['DLHDon'][0]['NDHDon'][0]['NBan'][0];
        var NMua = content['HDon']['DLHDon'][0]['NDHDon'][0]['NMua'][0];
        var DSHHDVu = content['HDon']['DLHDon'][0]['NDHDon'][0]['DSHHDVu'][0]['HHDVu'];
        var TToan = content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0];
        var X509Certificate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
        var THTTLTSuat = [];
        if (content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0]['THTTLTSuat'])
            THTTLTSuat = content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0]['THTTLTSuat'][0]['LTSuat'];
        var MST_BENMUA = content['HDon']['DLHDon'][0]['NDHDon'][0]['NMua'][0]["MST"];
        var signDate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['Object'][0]['SignatureProperties'][0]['SignatureProperty'][0]['SigningTime'][0]._;
        var TTHDLQuan = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"];
        if (TTHDLQuan) {
            var TCHDon = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"][0]["TCHDon"];
            if (TCHDon) {
                TCHDon = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"][0]["TCHDon"][0];
                if (TCHDon == "1")
                    this.frmData.adjustment_type = "3";
                else if (TCHDon == "2")
                    this.frmData.adjustment_type = "5";
            }
            else
                this.frmData.adjustment_type = "1";
        }
        else
            this.frmData.adjustment_type = "1";
        if (!signDate)
            signDate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['Object'][0]['SignatureProperties'][0]['SignatureProperty'][0]['SigningTime'][0];
        var MaCQT = "";
        if (content['HDon']['MCCQT'])
            MaCQT = content['HDon']['MCCQT'][0]._;
        if (MST_BENMUA) {
            MST_BENMUA = content['HDon']['DLHDon'][0]['NDHDon'][0]['NMua'][0]["MST"][0];
            MST_BENMUA = MST_BENMUA.trim();
            if (MST_BENMUA === this.tax_code_local) {
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify("Mã số thuế người mua trên hóa đơn không trùng với Mã số thuế của đơn vị", 'error');
                return;
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify('Mã số thuế người mua trên hóa đơn không trùng với Mã số thuế của đơn vị', 'error');
            return;
        }
        this.frmData.invoice_type_name = nameFile;
        this.frmData.tax_authority_code = MaCQT;
        this.frmData.xml_type = "3";
        /* Thông tin chung */
        for (var property in TTChung) {
            var valueI = TTChung[property][0];
            switch (property) {
                case "KHMSHDon":
                    this.frmData.template_code = valueI;
                    break;
                case "KHHDon":
                    this.frmData.invoice_series = valueI;
                    break;
                case "SHDon":
                    this.frmData.invoice_number = valueI;
                    break;
                case "NLap":
                    var date = new Date(valueI);
                    if (date.toString() === 'Invalid Date') {
                        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(valueI, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
                    }
                    else {
                        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(valueI).format('YYYY-MM-DD hh:mm:ss');
                    }
                    break;
                case "DVTTe":
                    this.frmData.currency_code = valueI;
                    break;
                case "HTTToan":
                    this.frmData.payment_method_view_name = valueI;
                    break;
            }
        }
        /* Thông tin bên bán */
        for (var property in NBan) {
            var valueI = NBan[property][0];
            switch (property) {
                case "Ten":
                    this.frmData.seller_legal_name = valueI;
                    break;
                case "MST":
                    this.frmData.seller_tax_code = valueI;
                    break;
                case "DChi":
                    this.frmData.seller_address = valueI;
                    break;
                case "SDThoai":
                    this.frmData.seller_mobile = valueI;
                    break;
            }
        }
        /* Thông tin bên mua */
        for (var property in NMua) {
            var valueI = NMua[property][0];
            switch (property) {
                case "Ten":
                    this.frmData.buyer_legal_name = valueI;
                    break;
                case "MST":
                    this.frmData.buyer_tax_code = valueI;
                    break;
                case "DChi":
                    this.frmData.buyer_address = valueI;
                    break;
                case "SDThoai":
                    this.frmData.buyer_mobile = valueI;
                    break;
                case "MKHang":
                    this.frmData.customer_code = valueI;
                    break;
                case "DCTDTu":
                    this.frmData.buyer_email = valueI;
                    break;
                case "HVTNMHang":
                    this.frmData.buyer_name = valueI;
                    break;
            }
        }
        /* Thông tin Số tiền trên hóa đơn */
        for (var property in TToan) {
            var valueI = TToan[property][0];
            switch (property) {
                case "TgTCThue":
                    this.frmData.amount = valueI;
                    break;
                case "TgTThue":
                    this.frmData.total_amount_vat = valueI;
                    break;
                case "TgTTTBSo":
                    this.frmData.total_payment = valueI;
                    break;
                case "TgTTTBChu":
                    this.frmData.total_payment_in_word = valueI;
                    break;
            }
        }
        if (THTTLTSuat && THTTLTSuat.length > 0) {
            var lstTThue = [];
            for (var i = 0; i < THTTLTSuat.length; i++) {
                var object = {};
                for (var property in THTTLTSuat[i]) {
                    var valueI = THTTLTSuat[i][property][0];
                    object[property] = valueI;
                }
                lstTThue.push(object);
            }
            if (lstTThue.length > 0) {
                lstTThue.forEach(function (itemT) {
                    switch (itemT.TSuat) {
                        case "0%":
                            _this.frmData.total_amount_product_vat0 = itemT.ThTien;
                            break;
                        case "5%":
                            _this.frmData.total_amount_product_vat5 = itemT.ThTien;
                            _this.frmData.amount_vat5 = itemT.TThue;
                            break;
                        case "8%":
                            _this.frmData.total_amount_product_vat8 = itemT.ThTien;
                            _this.frmData.amount_vat8 = itemT.TThue;
                            break;
                        case "10%":
                            _this.frmData.total_amount_product_vat10 = itemT.ThTien;
                            _this.frmData.amount_vat10 = itemT.TThue;
                            break;
                        case "KCT":
                            _this.frmData.total_amount_product_vatx = itemT.ThTien;
                            break;
                        case "KKKNT":
                            _this.frmData.total_amount_product_vat_kkknt = itemT.ThTien;
                            break;
                    }
                });
            }
        }
        /* Danh sách hàng hóa, dịch vụ */
        if (DSHHDVu && DSHHDVu.length > 0) {
            var lstHangHoa = [];
            for (var i = 0; i < DSHHDVu.length; i++) {
                var object = {};
                for (var property in DSHHDVu[i]) {
                    var valueI = DSHHDVu[i][property][0];
                    object[property] = valueI;
                }
                lstHangHoa.push(object);
            }
            if (lstHangHoa.length > 0) {
                this.frmData.input_invoice_products = [];
                lstHangHoa.forEach(function (itemHH) {
                    var oHangHoa = {};
                    oHangHoa["order"] = itemHH.STT ? itemHH.STT : null;
                    oHangHoa["product_code"] = itemHH.MHHDVu ? itemHH.MHHDVu : null;
                    oHangHoa["product_name"] = itemHH.THHDVu ? itemHH.THHDVu : null;
                    oHangHoa["unit_name"] = itemHH.DVTinh ? itemHH.DVTinh : null;
                    oHangHoa["quantity"] = itemHH.SLuong;
                    oHangHoa["price"] = itemHH.DGia;
                    oHangHoa["amount"] = itemHH.ThTien;
                    oHangHoa["product_group"] = "1";
                    oHangHoa["unit_code"] = null;
                    oHangHoa["is_promotion"] = null;
                    // oHangHoa["view_order"] = oHangHoa["order"];
                    switch (itemHH.TSuat) {
                        case "0%":
                            oHangHoa["vat"] = 0;
                            break;
                        case "5%":
                            oHangHoa["vat"] = 5;
                            break;
                        case "10%":
                            oHangHoa["vat"] = 10;
                            break;
                        case "8%":
                            oHangHoa["vat"] = 8;
                            break;
                        case "KCT":
                            oHangHoa["vat"] = -1;
                            break;
                        case "KKKNT":
                            oHangHoa["vat"] = -2;
                            break;
                        default:
                            oHangHoa["vat"] = null;
                            break;
                    }
                    /* Cấu hình thập phân */
                    //->Số lượng
                    if (oHangHoa["quantity"]) {
                        var arr = oHangHoa["quantity"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Đơn giá
                    if (oHangHoa["price"]) {
                        var arr = oHangHoa["price"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Thành tiền
                    if (oHangHoa["amount"]) {
                        var arr = oHangHoa["amount"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Tiền thuế
                    if (_this.frmData.total_amount_vat) {
                        var arr = _this.frmData.total_amount_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Tổng tiền
                    if (_this.frmData.total_payment) {
                        var arr = _this.frmData.total_payment.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (oHangHoa["quantity"])
                        oHangHoa["quantity"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(oHangHoa["quantity"]), _this.formatter.so_luong);
                    else
                        oHangHoa["quantity"] = null;
                    if (oHangHoa["price"])
                        oHangHoa["price"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(oHangHoa["price"]), _this.formatter.don_gia);
                    else
                        oHangHoa["price"] = null;
                    if (oHangHoa["amount"])
                        oHangHoa["amount"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(oHangHoa["amount"]), _this.formatter.thanh_tien);
                    else
                        oHangHoa["amount"] = null;
                    /* Tính tiền thuế */
                    if (oHangHoa["amount"] != null && oHangHoa["vat"] != null) {
                        if (oHangHoa["vat"] > 0) {
                            oHangHoa["amount_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber((oHangHoa["amount"] * oHangHoa["vat"]) / 100, _this.formatter.tien_thue);
                        }
                        else if (oHangHoa["vat"] == 0)
                            oHangHoa["amount_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(0, _this.formatter.tien_thue);
                        else
                            oHangHoa["amount_vat"] = null;
                    }
                    else if (oHangHoa["vat"] == null || (oHangHoa["vat"] != null && oHangHoa["amount"] == null))
                        oHangHoa["amount_vat"] = null;
                    /* Tính tổng tiền hàng hóa */
                    if (oHangHoa["amount_vat"] != null && oHangHoa["amount"] != null)
                        oHangHoa["amount_after_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(oHangHoa["amount"] + oHangHoa["amount_vat"], _this.formatter.tong_tien);
                    else if (oHangHoa["amount"] != null)
                        oHangHoa["amount_after_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(oHangHoa["amount"], _this.formatter.tong_tien);
                    else
                        oHangHoa["amount_after_vat"] = null;
                    _this.frmData.input_invoice_products.push(oHangHoa);
                });
            }
        }
        /* Cấu hình thập phân cho số tiền */
        if (this.frmData.total_amount_product_vat0)
            this.frmData.total_amount_product_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vat0), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat0 = null;
        if (this.frmData.total_amount_product_vat5)
            this.frmData.total_amount_product_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vat5), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat5 = null;
        if (this.frmData.total_amount_product_vat8)
            this.frmData.total_amount_product_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vat8), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat8 = null;
        if (this.frmData.total_amount_product_vat10)
            this.frmData.total_amount_product_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vat10), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat10 = null;
        if (this.frmData.total_amount_product_vatx)
            this.frmData.total_amount_product_vatx = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vatx), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vatx = null;
        if (this.frmData.total_amount_product_vat_kkknt)
            this.frmData.total_amount_product_vat_kkknt = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_product_vat_kkknt), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat_kkknt = null;
        if (this.frmData.amount)
            this.frmData.amount = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.amount), this.formatter.thanh_tien);
        else
            this.frmData.amount = null;
        if (this.frmData.total_amount_vat)
            this.frmData.total_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_amount_vat), this.formatter.tien_thue);
        else
            this.frmData.total_amount_vat = null;
        if (this.frmData.total_payment)
            this.frmData.total_payment = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.total_payment), this.formatter.tong_tien);
        else
            this.frmData.total_payment = null;
        if (this.frmData.amount_vat5)
            this.frmData.amount_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.amount_vat5), this.formatter.tien_thue);
        else
            this.frmData.amount_vat5 = null;
        if (this.frmData.amount_vat8)
            this.frmData.amount_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.amount_vat8), this.formatter.tien_thue);
        else
            this.frmData.amount_vat8 = null;
        if (this.frmData.amount_vat10)
            this.frmData.amount_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_17__["VChanggeMoneyService"].roundNumber(_core_index__WEBPACK_IMPORTED_MODULE_17__["Helper"].toNumber(this.frmData.amount_vat10), this.formatter.tien_thue);
        else
            this.frmData.amount_vat10 = null;
        this.frmData.input_invoice_products = this.frmData.input_invoice_products.filter(function (item) {
            if (item.product_name !== 'Tổng tiền hàng' && item.product_name !== 'Tổng tiền chiết khấu' && item.product_name !== 'Chiết khấu') {
                return item;
            }
        });
        this.frmData.signature_content = X509Certificate;
        if (signDate)
            this.frmData.sign_date = signDate.replace("T", " ");
        this.frmData.input_invoice_files = [{
                order: 'DK',
                file_name: nameFile,
                file_content: dataBase64Code,
                is_file_import: true
            }];
        this.onFieldDataChanged();
    };
    FormHeaderInvoiceComponent.prototype.addValueToFormFormat2 = function (object, nameFile, dataBase64Code, signature) {
        this.frmData.invoice_type_name = nameFile;
        this.frmData.signature_content = signature;
        this.frmData.template_code = object['inv:templateCode'];
        if (object['inv:adjustmentType']) {
            if (object['inv:adjustmentType'].trim() === '') {
                this.frmData.adjustment_type = '1';
            }
            else {
                this.frmData.adjustment_type = object['inv:adjustmentType'];
            }
        }
        else {
            this.frmData.adjustment_type = '1';
        }
        this.frmData.invoice_number = object['inv:invoiceNumber'];
        this.frmData.invoice_series = object['inv:invoiceSeries'];
        this.frmData.currency_code = object['inv:currencyCode'];
        this.frmData.xml_type = "2";
        if (object['inv:signedDate']) {
            var date = new Date(object['inv:signedDate']);
            if (date.toString() === 'Invalid Date') {
                this.frmData.sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['inv:signedDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
            }
            else {
                this.frmData.sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['inv:signedDate']).format('YYYY-MM-DD hh:mm:ss');
            }
        }
        if (object['inv:invoiceIssuedDate']) {
            var date = new Date(object['inv:invoiceIssuedDate']);
            if (date.toString() === 'Invalid Date') {
                this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['inv:invoiceIssuedDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
            }
            else {
                this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(object['inv:invoiceIssuedDate']).format('YYYY-MM-DD hh:mm:ss');
            }
        }
        this.frmData.seller_tax_code = object['inv:sellerTaxCode'];
        this.frmData.seller_fax_number = object['inv:sellerFaxNumber'];
        this.frmData.seller_contact_name = object['inv:sellerContactPersonName'];
        this.frmData.seller_address = object['inv:sellerAddressLine'];
        this.frmData.seller_mobile = object['inv:sellerPhoneNumber'];
        this.frmData.seller_legal_name = object['inv:sellerLegalName'];
        this.frmData.buyer_legal_name = object['inv:buyerLegalName'];
        this.frmData.buyer_tax_code = object['inv:buyerTaxCode'];
        this.frmData.buyer_mobile = object['inv:buyerPhoneNumber'];
        this.frmData.buyer_email = object['inv:buyerEmail'];
        if (object.hasOwnProperty('inv:exchangeRate') || object.hasOwnProperty('inv:exchangeRate')) {
            if (object['inv:exchangeRate']) {
                this.frmData.currency_rate = object['inv:exchangeRate'].replace(',', '.');
            }
            else if (object['inv:ExchangeRate']) {
                this.frmData.currency_rate = object['inv:ExchangeRate'].replace(',', '.');
            }
        }
        if (object.hasOwnProperty('inv:sellerBankAccount')) {
            if (object['inv:sellerBankAccount']) {
                this.frmData.seller_bank_account = object['inv:sellerBankAccount'] + ' - ' + object['inv:sellerBankName'];
            }
            else {
                this.frmData.seller_bank_account = object['inv:sellerBankName'];
            }
        }
        else {
            this.frmData.seller_bank_account = object['inv:sellerBankName'];
        }
        var payments = object['inv:payments']['inv:payment'][0];
        if (payments.hasOwnProperty('inv:paymentMethodName')) {
            this.frmData.payment_method_view_name = payments['inv:paymentMethodName'][0];
        }
        else {
            this.frmData.payment_method_view_name = payments['inv:paymentMethodNameExt'][0];
        }
        if (object['inv:sellerEmail']) {
            if (object['inv:sellerEmail'] !== '.') {
                this.frmData.seller_email = object['inv:sellerEmail'];
                this.emails = [];
                var stringDataEmailGet = object['inv:sellerEmail'].split(';');
                for (var i = 0; i < stringDataEmailGet.length; i++) {
                    this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                }
            }
            else {
                this.frmData.seller_email = null;
                this.emails = [];
            }
        }
        else {
            this.frmData.seller_email = null;
            this.emails = [];
        }
        if (object['inv:items']) {
            var arrItem = object['inv:items']['inv:item'];
            for (var i = 0; i < arrItem.length; i++) {
                for (var keyItem in arrItem[i]) {
                    if (arrItem[i].hasOwnProperty(keyItem)) {
                        arrItem[i][keyItem] = arrItem[i][keyItem][0].trim();
                    }
                }
            }
            var arrItemFormat = this.invoiceBuyService.formatArrayItem1(arrItem);
            arrItemFormat.forEach(function (value, index) {
                if (value.quantity) {
                    value.quantity = parseInt(value.quantity.replace(',', '.'), 10);
                }
                else {
                    value.quantity = null;
                }
                if (!value.product_code) {
                    value.product_code = null;
                }
                if (value.price) {
                    value.price = parseInt(value.price.replace(',', '.'), 10);
                }
                else {
                    value.price = null;
                }
                if (value.amount_after_vat) {
                    value.amount_after_vat = parseInt(value.amount_after_vat.replace(',', '.'), 10);
                }
                else {
                    value.amount_after_vat = null;
                }
                if (!value.unit_name) {
                    value.unit_name = null;
                }
                if (value.amount) {
                    value.amount = parseInt(value.amount.replace(',', '.'), 10);
                }
                else {
                    value.amount = null;
                }
                if (value.vat) {
                    value.vat = parseInt(value.vat.replace(',', '.'), 10);
                }
                else {
                    value.vat = null;
                }
                if (value.amount_vat) {
                    value.amount_vat = parseInt(value.amount_vat.replace(',', '.'), 10);
                }
                else {
                    value.amount_vat = null;
                }
                if (value.unit_code === undefined) {
                    value.unit_code = null;
                }
                if (value.amount && value.amount_vat) {
                    value.amount_after_vat = value.amount + value.amount_vat;
                }
                else if (value.amount && !value.amount_vat) {
                    value.amount_after_vat = value.amount;
                }
                else {
                    value.amount_after_vat = null;
                }
                value.order = index + 1;
            });
            this.frmData.input_invoice_products = arrItemFormat.filter(function (item) {
                if (item.product_name !== 'Tổng tiền hàng' && item.product_name !== 'Tổng tiền chiết khấu' && item.product_name !== 'Chiết khấu') {
                    return item;
                }
            });
        }
        this.frmData.amount = parseInt(object['inv:totalAmountWithoutVAT'].replace(',', '.'), 10);
        this.frmData.total_amount_vat = parseInt(object['inv:totalVATAmount'].replace(',', '.'), 10);
        this.frmData.total_payment = parseInt(object['inv:totalAmountWithVAT'].replace(',', '.'), 10);
        this.frmData.total_payment_in_word = object['inv:totalAmountWithVATInWords'];
        this.frmData.input_invoice_files = [{
                order: 'DK',
                file_name: nameFile,
                file_content: dataBase64Code,
                is_file_import: true
            }];
        this.onFieldDataChanged();
    };
    FormHeaderInvoiceComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    FormHeaderInvoiceComponent.prototype.openFile = function () {
        document.getElementById('file-id').click();
    };
    FormHeaderInvoiceComponent.prototype.checkNumberInvoice = function () {
        var _this = this;
        if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_14__["VStringService"]._getValueToString(this.frmData.template_code) == '') {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.CONTROLL.LABEL.invoice_form + ' ' + this._translate.VALIDATION.required, 'error');
        }
        else if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_14__["VStringService"]._getValueToString(this.frmData.invoice_series) == '') {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.GRID.INVOICE.invoice_series + ' ' + this._translate.VALIDATION.required, 'error');
        }
        else if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_14__["VStringService"]._getValueToString(this.frmData.invoice_date) == '') {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.GRID.INVOICE.invoice_date + ' ' + this._translate.VALIDATION.required, 'error');
        }
        else if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_14__["VStringService"]._getValueToString(this.frmData.invoice_number) == '') {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(this._translate.GRID.INVOICE.invoice_number + ' ' + this._translate.VALIDATION.required, 'error');
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].showloading();
            var _data = {
                input_invoice: {
                    template_code: this.frmData.template_code,
                    invoice_number: this.frmData.invoice_number,
                    invoice_series: this.frmData.invoice_series,
                    tax_code: this.frmData.seller_tax_code,
                    invoice_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.frmData.invoice_date).format('YYYY-MM-DD'),
                }
            };
            this.invoiceBuyService.apiCheckNumberInvocie(_data).subscribe(function (res) {
                var initialState = {
                    isError: res.message.status === 'success' ? false : true,
                    message: res.message.content
                };
                _this.modalService.show(_modules_invoice_buy_shared_modal_check_invoice_number_check_invoice_number_component__WEBPACK_IMPORTED_MODULE_6__["CheckInvoiceNumberComponent"], {
                    class: 'modal-md', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_10__["Library"].hideloading(); });
        }
    };
    FormHeaderInvoiceComponent.prototype.clearDataFrm = function () {
        this.myFile.nativeElement.value = '';
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_11__["Invoice"]('1');
        this.emails = [];
        this.onFieldDataChanged();
        this.frmData.version_xml = "1";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxFormComponent"])
    ], FormHeaderInvoiceComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormHeaderInvoiceComponent.prototype, "myFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderInvoiceComponent.prototype, "extentionGrid", void 0);
    FormHeaderInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-header-invoice',
            template: __webpack_require__(/*! ./form-header-invoice.component.html */ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.html"),
            styles: [__webpack_require__(/*! ./form-header-invoice.component.scss */ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceBuyService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_13__["VatService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_15__["CustomersService"]])
    ], FormHeaderInvoiceComponent);
    return FormHeaderInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/index/index.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/index/index.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-12\">\r\n    <div id=\"tab-invoice\">\r\n      <dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"selectedIndex\" (onItemClick)=\"selectTab($event)\">\r\n      </dx-tabs>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Hiển thị danh sách hộp thư đến -->\r\n<div *ngIf=\"isTabHopThuDen\">\r\n  <app-list-mail-received [isMailReceived]='isMailReceived' (currentMail)=\"getCurrentMail($event)\"\r\n    [isHasPackage]=\"isHasPackage\">\r\n  </app-list-mail-received>\r\n</div>\r\n<!-- Hiển thị danh sách hóa đơn đầu vào -->\r\n<div *ngIf=\"isTabHoaDonDauVao\">\r\n  <app-list-invoice [isHasPackage]=\"isHasPackage\">\r\n  </app-list-invoice>\r\n</div>\r\n<!-- Hiển thị danh sách tổng hóa đơn từ tct -->\r\n<div *ngIf=\"isTabHoaDonTCT\">\r\n  <app-list-invoice-tct (currentMail)=\"getCurrentMail($event)\">\r\n  </app-list-invoice-tct>\r\n</div>\r\n<!-- Hiển thị danh sách thư đã xóa -->\r\n<div *ngIf=\"isTabThuDaXoa\">\r\n  <app-list-mail-received [isMailReceived]='isMailReceived' (currentMail)=\"getCurrentMail($event)\">\r\n  </app-list-mail-received>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/index/index.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/index/index.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab-invoice{width:100%;border-bottom:1px solid #ddd}#tab-invoice .dx-tabs{width:56%;border-bottom:0}::ng-deep .dx-tab.dx-tab-selected{color:#2680eb !important}::ng-deep #tab-invoice .dx-tab{padding:4px}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/index/index.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/index/index.component.ts ***!
  \************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
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
    function IndexComponent(authService, bsModalDocumentCancel, translate, invoiceBuyService) {
        this.authService = authService;
        this.bsModalDocumentCancel = bsModalDocumentCancel;
        this.translate = translate;
        this.invoiceBuyService = invoiceBuyService;
        this.tabs = [];
        this.isTabHopThuDen = false;
        this.isTabHoaDonDauVao = false;
        this.isTabThuDaXoa = false;
        this.isTabHoaDonTCT = false;
        this.isHasPackage = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.configs = this.authService.getConfigs();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.configs.system_parameter.is_use_mail_get_invoice || this.configs.system_parameter.is_use_mail_get_invoice == undefined) {
            this.tabs = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"].tabsInvoiceBuyEmail(this._translate);
            this.selectedIndex = this.tabs.length - 1;
        }
        else {
            this.tabs = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"].tabsInvoiceBuyTCT(this._translate);
            this.selectedIndex = this.tabs.length - 1;
        }
        this.isTabHoaDonDauVao = true;
        this.invoiceBuyService.getPackage().subscribe(function (res) {
            if (res.data.meta.total > 0) {
                _this.isHasPackage = true;
            }
            else {
                _this.isHasPackage = false;
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
    };
    IndexComponent.prototype.getCurrentMail = function (e) {
        this.currentMailId = e;
    };
    IndexComponent.prototype.selectTab = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, tab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonmuavao)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        tab = e.itemData.code;
                        switch (tab) {
                            case 'HOP_THU_DEN':
                                this.isTabHopThuDen = true;
                                this.isTabHoaDonDauVao = false;
                                this.isTabThuDaXoa = false;
                                this.isTabHoaDonTCT = false;
                                this.isMailReceived = { listDelete: true, id: this.currentMailId };
                                break;
                            case 'HOA_DON_DAU_VAO':
                                this.isTabHopThuDen = false;
                                this.isTabHoaDonDauVao = true;
                                this.isTabThuDaXoa = false;
                                this.isTabHoaDonTCT = false;
                                break;
                            case 'THU_DA_XOA':
                                this.isTabHopThuDen = false;
                                this.isTabHoaDonDauVao = false;
                                this.isTabThuDaXoa = true;
                                this.isTabHoaDonTCT = false;
                                this.isMailReceived = { listDelete: false, id: this.currentMailId };
                                break;
                            case 'HOA_DON_DAU_VAO_TCT':
                                this.isTabHopThuDen = false;
                                this.isTabHoaDonDauVao = false;
                                this.isTabThuDaXoa = false;
                                this.isTabHoaDonTCT = true;
                                this.isMailReceived = { listDelete: false, id: this.currentMailId };
                                break;
                            default:
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/invoice-buy/component/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/invoice-buy/component/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_4__["InvoiceBuyService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/invoice/invoice.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/invoice/invoice.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <app-form-header-invoice [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\" [formatter]=\"formatter\"\r\n                             [frmData]=\"frmData\" [_objTemplateSelect]=\"_objTemplateSelect\"\r\n                             [extentionGrid]=\"extentionGrid\"\r\n                             (onFormChange)=\"getDataInChildForm($event)\"\r\n                             (onTemplateChange)=\"onTemplateChange($event)\"\r\n                             (onTemplateTypeChange)=\"onTemplateTypeChange($event)\">\r\n    </app-form-header-invoice>\r\n    <app-product-grip #child [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\"\r\n                      [formDataInInvoice]=\"frmData\" [formatter]=\"formatter\" [isHdGTGT]=\"isHdGTGT\"\r\n                      [_objTemplateSelect]=\"_objTemplateSelect\" [extentionGrid]=\"extentionGrid\">\r\n    </app-product-grip>\r\n\r\n    <div class=\"table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [value]=\"frmData.total_payment\" step=\"0\" [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-footer-2\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.total_amount_vat\" step=\"0\" [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row after-table\">\r\n      <div class=\"col-md-4\">\r\n        <app-file-upload-invoice-buy [frmData]=\"frmData\" [fileData]=\"fileData\" [invoiceExp] = \"invoiceExp\"\r\n                                     (fileChange)=\"getFileData($event)\"></app-file-upload-invoice-buy>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Link tra cứu hóa đơn</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-text-box [(value)]=\"frmData.lookup_link\" [readOnly]=\"isReadOnly\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Mã tra cứu</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-text-box [(value)]=\"frmData.lookup_code\" [readOnly]=\"isReadOnly\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Mã cơ quan thuế</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-text-box [(value)]=\"frmData.tax_authority_code\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n        <div class=\"dx-field loai-hoa-don\">\r\n          <div class=\"dx-field-label\">Loại hóa đơn</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-select-box class=\"sl-hoa-don\"\r\n               [dataSource]=\"typeInvoices\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"frmData.xml_type\" (onItemClick)=\"changedTypeInvoice($event)\">\r\n               <div *dxTemplate=\"let data of 'item'\">\r\n                <div style=\"padding-bottom: 17px;\">{{data.name}}</div>\r\n            </div>\r\n            </dx-select-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_discount\"\r\n                             tabIndex=\"-1\"\r\n                             step=\"0\"\r\n                             [format]=\"formatter.tien_chiet_khau\"\r\n                             (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount\" tabIndex=\"-1\"\r\n                             [format]=\"formatter.thanh_tien\"\r\n                             step=\"0\"\r\n                             (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_amount_vat\"\r\n                             tabIndex=\"-1\"\r\n                             [format]=\"formatter.tien_thue\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"\r\n                             (onValueChanged)=\"totalPaymentChange($event)\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box\r\n                [(value)]=\"frmData.total_payment\"\r\n                tabIndex=\"-1\" [format]=\"formatter.tong_tien\"\r\n                step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\"\r\n                (onValueChanged)=\"totalPaymentChange($event)\">\r\n              </dx-number-box>\r\n              <!--            [disabled]=\"!!this.frmData.invoice_type_name\"-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 so-tien-chu\">\r\n        <div class=\"vat total-payment-in-word\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-text-box [(value)]=\"frmData.total_payment_in_word\"></dx-text-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5 khung-vien\">\r\n        <div class=\"tieu-de\">\r\n         <span>Kiểm tra Thông tin người bán </span> \r\n         <img class =\"refresh\" src=\"assets/img/icons/Refresh-02.png\" alt=\"refresh\" (click)=\"onClickBenBan()\">\r\n        </div>\r\n        <div [innerHTML]=\"noiDungNguoiBan\">\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n      </div>\r\n      <div class=\"col-md-5 khung-vien\">\r\n        <div class=\"tieu-de\">\r\n          <span>Kiểm tra file hóa đơn (Đáp ứng với hóa đơn điện tử) </span> \r\n          <img class =\"refresh\" src=\"assets/img/icons/Refresh-02.png\" alt=\"refresh\" (click)=\"onClickChungThuSo()\">\r\n        </div>\r\n        <div [innerHTML]=\"noiDungFileHoaDon\">\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <dx-button *ngIf=\"isView\" [icon]=\"this._translate.ICONS.save\" (onClick)=\"eSubmit($event)\"\r\n                     text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" type=\"default\"\r\n                     validationGroup=\"listData\" [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <dx-button appBackButton type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/invoice/invoice.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/invoice/invoice.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}::ng-deep .loai-hoa-don .dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:30px}.pr-0.dx-selectbox .dx-texteditor-input:-moz-read-only{padding-bottom:17px}.pr-0.dx-selectbox .dx-texteditor-input:read-only{padding-bottom:17px}.sl-hoa-don{height:28px}.khung-vien{border-width:1px;border-color:#2f2d7e;border-style:solid;margin-top:20px}.refresh{cursor:pointer}.tieu-de{margin-top:10px;margin-bottom:10px;font-weight:bold;color:#324878}.so-tien-chu{margin-top:5px}.font-error{color:red;margin-bottom:8px}.linkTaiDay{color:#0E76BC !important;cursor:pointer;font-weight:600}.font-success{color:#2ebd1d;margin-bottom:8px}.chi-tiet{font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/invoice/invoice.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/invoice/invoice.component.ts ***!
  \****************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library/invoice/v-changge-money.service */ "./src/app/core/library/invoice/v-changge-money.service.ts");
/* harmony import */ var _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/invoice-buy/shared/class/invoice.model */ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_invoice_buy_component_form_header_invoice_form_header_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/invoice-buy/component/form-header-invoice/form-header-invoice.component */ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.ts");
/* harmony import */ var _modules_invoice_buy_component_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/invoice-buy/component/product-grip/product-grip.component */ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, router, modalService, vatService, socketService, authService, cdRef, translate, customersService, invoiceBuyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.customersService = customersService;
        this.invoiceBuyService = invoiceBuyService;
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_11__["Invoice"]('1');
        this.frmTraLai = {
            reason: ''
        };
        this.isHdGTGT = true;
        this.formatter = {};
        this.extentionGrid = {};
        this.idInvoice = null;
        this._objTemplateSelect = {};
        this.system_parameter = {};
        this.fileData = [];
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.isAccessExportInv = false;
        this.isView = true;
        this._isValid = false;
        this.invoiceExp = "MO_RONG_FILE";
        this.typeInvoices = [];
        this.isReadOnly = false;
        // // sự kiện form
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            var currency_code = _this.frmData.currency_code;
            if (_this.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            //  this.frmData.total_payment_in_word = Helper.tienBangChu(e.value, VChanggeMoneyService.getFormatterToNumber(this.formatter.tong_tien), currency_code, this.configs.system_parameter.display_read_money_english);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
    };
    InvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataValue = this.frmData;
        if (this.route.snapshot.routeConfig.path === 'view-invoice/:id') {
            this.isView = false;
        }
        this.configs = this.authService.getConfigs();
        this.typeInvoices = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_17__["VSelectBoxService"].loaiHD();
        this.connectWebsocket();
        this.route.data
            .map(function (value) { return value.FormResolverService; })
            .subscribe(function (data) {
            _this.setConfig(data[1]);
            if (data.length > 3) {
                _this.idInvoice = _this.route.snapshot.params['id'];
                dataValue = data[3].input_invoice;
                dataValue.input_invoice_products = data[3].input_invoice.input_invoice_products;
                dataValue.input_invoice_files = data[3].input_invoice.input_invoice_files;
                _this.fileData = data[3].input_invoice.input_invoice_files;
                _this.frmData = dataValue;
                if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._attemptConvertBool(_this.frmData.export_from_ihd)) {
                    _this.isReadOnly = true;
                    _this.frmData.lookup_link = "https://ihoadon.vn/kiem-tra/";
                }
                if (dataValue.decimal_places_json)
                    _this.formatter = _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(dataValue.decimal_places_json));
                _this.createValueDataSource(dataValue.input_invoice_products);
                if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(_this.frmData.version_xml) == "1") {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._attemptConvertBool(_this.frmData.is_import_from_zip)) {
                        _this.thongtinBenBan(false);
                        _this.verifySignature();
                    }
                    else {
                        _this.viewThongTinBenBan(_this.frmData.json_data);
                        _this.fillDataToForm(_this.frmData.json_data);
                    }
                }
                else {
                    _this.thongtinBenBan(false);
                    _this.verifySignature();
                }
            }
            else {
                _this.khoiTaoKhiThemMoi();
            }
        });
    };
    InvoiceComponent.prototype.createValueDataSource = function (value) {
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
            key: 'id',
            data: this.createDataSource(value)
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default.a({
            store: this.invoice_products
        });
    };
    InvoiceComponent.prototype.createDataSource = function (value) {
        var arr = [];
        value.forEach(function (item) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].makeid(),
                order: parseInt(item.order, 10),
                product_code: item.product_code,
                product_name: item.product_name,
                unit_code: item.unit_code,
                unit_name: item.unit_name,
                quantity: item.quantity,
                price: item.price,
                vat: item.vat,
                amount_vat: item.amount_vat,
                amount: item.amount,
                product_group: item.product_group,
                amount_after_vat: item.amount_after_vat
            });
        });
        var order1 = arr.length;
        for (var i = 0; i < 2; i++) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].makeid(),
                order: order1 + 1,
                product_code: '',
                product_name: '',
                unit_code: null,
                unit_name: '',
                quantity: null,
                price: null,
                vat: null,
                amount_vat: null,
                amount: null,
                product_group: null,
                amount_after_vat: null
            });
            order1++;
        }
        return arr;
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        // khởi tạo mới lưới
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
            key: 'id',
            data: this.add_invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default.a({
            store: this.invoice_products
        });
        this.frmData.version_xml = "1";
    };
    InvoiceComponent.prototype.add_invoice_products_data = function () {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].makeid(),
                order: i + 1,
                product_code: '',
                product_name: '',
                unit_code: null,
                unit_name: '',
                quantity: null,
                price: null,
                vat: null,
                amount_vat: null,
                amount: null,
                product_group: null,
                amount_after_vat: null
            });
        }
        return arr;
    };
    InvoiceComponent.prototype.setConfig = function (value) {
        var _this = this;
        value.configs.forEach(function (item) {
            if (item.name === 'decimal_places_json') {
                _this.formatter = _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(item.value));
            }
        });
        var obj1 = value.configs.filter(function (p) { return p.name === 'system_parameter'; })[0];
        if (obj1) {
            this.formatter.display_int = this.system_parameter.display_int;
        }
    };
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"]._changeMoney(this.frmData);
    };
    InvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        this.frmTraLai.reason = e.lido;
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
            key: 'id',
            data: this.createDataSource(this.frmData.input_invoice_products)
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default.a({
            store: this.invoice_products
        });
        this.fileData = this.frmData.input_invoice_files;
        if (this.frmData.version_xml == '1') {
            this.thongtinBenBan(false);
            this.verifySignature();
        }
        else {
            this.noiDungFileHoaDon = "";
            this.noiDungNguoiBan = "";
        }
    };
    InvoiceComponent.prototype.onTemplateChange = function (e) {
        this.is_multi_vat = e;
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        // this.ioSignature.unsubscribe();
        // this.routeSub.unsubscribe();
        // this.socketService.close();
    };
    // canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    //   if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
    //     if (confirm(this._translate.CONFIRM.waring_save_data)) {
    //       return this.subData('GHI_TAM', this.frmData).then(value => value);
    //     }
    //     return true;
    //   }
    //   return true;
    // }
    InvoiceComponent.prototype._validForm = function () {
        var _lst = this.dataSource.items().filter(function (p) { return p.product_name; });
        if (_lst.length > 0) {
            var sttItem = _lst.filter(function (item) {
                if (!item.product_group) {
                    return item;
                }
            });
            if (sttItem.length > 0) {
                _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(this._translate.NOTIFY.no_product, 'error');
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(_lst.indexOf(sttItem[0]), 'product_group'));
                return false;
            }
        }
        return true;
    };
    InvoiceComponent.prototype.eSubmit = function (e) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        if (!this._validForm()) {
            return;
        }
        var valueDataSource = this.dataSource.items().filter(function (item) {
            if (item.product_name && item.product_group) {
                return item;
            }
        });
        if (this.formatter)
            this.frmData.decimal_places_json = JSON.stringify(_core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
        this.frmData.is_import_from_zip = false;
        var dataForm = {
            input_invoice: this.frmData,
            input_invoice_products: valueDataSource,
            input_invoice_files: this.fileData,
        };
        for (var _i = 0, _a = Object.entries(dataForm.input_invoice); _i < _a.length; _i++) {
            var key = _a[_i][0];
            if (key === 'id') {
                delete dataForm.input_invoice[key];
            }
            if (key === 'input_invoice_products') {
                delete dataForm.input_invoice[key];
            }
            if (key === 'input_invoice_files') {
                delete dataForm.input_invoice[key];
            }
        }
        dataForm.input_invoice_products.forEach(function (value) {
            for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
                var key = _a[_i][0];
                if (key === 'id') {
                    delete value[key];
                }
            }
        });
        _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].showloading();
        if (this.idInvoice !== null) {
            this.invoiceBuyService.apiUpdateInvoice(this.idInvoice, dataForm).subscribe(function (value1) {
                if (value1.status === 'success') {
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(value1.message, 'error');
                }
            }, function (valueError) { return _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(valueError, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading(); });
        }
        else {
            this.invoiceBuyService.apiInvoice(dataForm).subscribe(function (value1) {
                if (value1.status === 'success') {
                    if (value1.data && value1.data.result)
                        _this.idInvoice = value1.data.result.id;
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(value1.message, 'error');
                }
            }, function (valueError) { return _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(valueError, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading(); });
        }
    };
    InvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        // this.invoicereleaseTempt = e;
    };
    InvoiceComponent.prototype.keyDown = function (e) {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    InvoiceComponent.prototype.verifySignature = function () {
        var _this = this;
        var fileContent = "";
        if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(this.frmData.version_xml) == "1") {
            var oFile = this.fileData.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._attemptConvertBool(p.is_file_import); })[0];
            if (oFile)
                fileContent = oFile.file_content;
        }
        else {
            if (!this.frmData.json_data) {
                this.frmData.json_data =
                    {
                        statusCert: null,
                        signDateCompareCert: null,
                        signDateCompareInv: null,
                        statusFileXml: null,
                        capBoi: null,
                        kyBoi: null,
                        thoiHanChungThu: null,
                        thoiGianKyHoaDon: null,
                        tax_code: null,
                        name: null,
                        business_address: null,
                        status: null,
                        mstNB: null
                    };
            }
            // 1. Hóa đơn tự động đọc từ efy
            if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._attemptConvertBool(this.frmData.export_from_ihd)) {
                if (this.frmData.xml_string)
                    fileContent = this.frmData.xml_string;
            }
            else if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._attemptConvertBool(this.frmData.export_from_tct)) {
                if (this.frmData.xml_string) {
                    fileContent = this.frmData.xml_string;
                }
            }
            else {
                var oFile = this.fileData.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(p.file_name) != "" && p.file_name == _this.frmData.invoice_type_name; })[0];
                if (oFile)
                    fileContent = oFile.file_content;
            }
        }
        this.socketService.kiemtraCKS(function () { return _this.connectWebsocket(); }, fileContent, this.frmData.signature_content, this.frmData.sign_date, this.frmData.invoice_date, this.frmData.seller_legal_name);
    };
    /* Kết nối đến socket */
    InvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_verifySignature') {
                if (data.Status == "success") {
                    _this.frmData.json_data.statusCert = data.Data.statusCert;
                    _this.frmData.json_data.signDateCompareCert = data.Data.signDateCompareCert;
                    _this.frmData.json_data.signDateCompareInv = data.Data.signDateCompareInv;
                    _this.frmData.json_data.statusFileXml = data.Data.statusFileXml;
                    _this.frmData.json_data.capBoi = data.Data.capBoi;
                    _this.frmData.json_data.kyBoi = data.Data.kyBoi;
                    _this.frmData.json_data.thoiHanChungThu = data.Data.thoiHanChungThu;
                    _this.frmData.json_data.thoiGianKyHoaDon = data.Data.thoiGianKyHoaDon;
                    _this.frmData.signature_content = data.Data.SignatureSeller;
                    _this.fillDataToForm(data.Data);
                }
                else if (data.Status == "error") {
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(data.Description, 'error');
                }
            }
        });
    };
    InvoiceComponent.prototype.fillDataToForm = function (data) {
        var CTS_HopLe = "";
        var CTS_KhongHopLe = "";
        var NgayKyCTS_HopLe = "";
        var NgayKyCTS_KhongHopLe = "";
        var NgayKyNgayHoaDon_HopLe = "";
        var NgayKyNgayHoaDon_KhongHopLe = "";
        var KhongTonTaiNgayKy = "";
        var FileXML_HopLe = "";
        var FileXML_KhongHopLe = "";
        var TieuDeChiTiet = "";
        var CapBoi = "";
        var KyBoi = "";
        var thoiHanChungThu = "";
        var thoiGianKyHoaDon = "";
        /* Chữ ký số */
        if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.statusCert) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.HopLe)
            CTS_HopLe = "<div class=\"font-success\"><span>Chứng thư số hợp lệ</span></div>";
        else if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.statusCert) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.KhongHopLe)
            CTS_KhongHopLe = "<div class=\"font-error\"><span>Chứng thư số không hợp lệ</span></div>";
        /* Kiểm tra Ngày ký có tồn tại k? */
        if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.signDateCompareCert) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.KhongTonTai) {
            KhongTonTaiNgayKy = "<div class=\"font-error\"><span>Không kiểm tra được thông tin ngày ký</span></div>";
        }
        else {
            /* Ngày ký nằm trong thời hạn hiệu lực của chứng thư số */
            if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.signDateCompareCert) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.HopLe)
                NgayKyCTS_HopLe = "<div class=\"font-success\"><span>Ngày ký nằm trong thời hạn hiệu lực của chứng thư số</span></div>";
            else if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.signDateCompareCert) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.KhongHopLe)
                NgayKyCTS_KhongHopLe = "<div class=\"font-error\"><span>Ngày ký không nằm trong thời hạn hiệu lực của chứng thư số</span></div>";
            /* Ngày ký trùng với ngày hóa đơn  */
            if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.signDateCompareInv) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.HopLe)
                NgayKyNgayHoaDon_HopLe = "<div class=\"font-success\"><span>Ngày ký trùng với ngày hóa đơn</span></div>";
            else if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.signDateCompareInv) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.KhongHopLe)
                NgayKyNgayHoaDon_KhongHopLe = "<div class=\"font-error\"><span>Ngày ký không trùng với ngày hóa đơn </span></div>";
        }
        /* File Xml */
        if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.statusFileXml) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.HopLe)
            FileXML_HopLe = "<div class=\"font-success\"><span>File XML hóa đơn còn nguyên vẹn</span></div>";
        else if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(data.statusFileXml) == _core_index__WEBPACK_IMPORTED_MODULE_16__["sEnum"].notify.KhongHopLe)
            FileXML_KhongHopLe = "<div class=\"font-error\"><span>File XML hóa đơn đã bị chỉnh sửa sau khi ký</span></div>";
        if (data.kyBoi)
            TieuDeChiTiet = "<div class=\"font-success chi-tiet\"><span>Thông tin chi tiết:</span></div>";
        if (data.capBoi)
            CapBoi = "<div class=\"font-success\"><span>CTS cấp bởi: </span><span>" + data.capBoi + "</span></div>";
        if (data.kyBoi)
            KyBoi = "<div class=\"font-success\"><span>Ký bởi: </span><span>" + data.kyBoi + "</span></div>";
        if (data.thoiHanChungThu)
            thoiHanChungThu = "<div class=\"font-success\"><span>Thời hạn CTS: </span><span>" + data.thoiHanChungThu + "</span></div>";
        if (data.thoiGianKyHoaDon)
            thoiGianKyHoaDon = "<div class=\"font-success\"><span>Thời gian ký hóa đơn: </span><span>" + data.thoiGianKyHoaDon + "</span></div>";
        this.noiDungFileHoaDon = CTS_HopLe + CTS_KhongHopLe + NgayKyCTS_HopLe + NgayKyCTS_KhongHopLe + NgayKyNgayHoaDon_HopLe + NgayKyNgayHoaDon_KhongHopLe +
            KhongTonTaiNgayKy + FileXML_HopLe + FileXML_KhongHopLe + TieuDeChiTiet + CapBoi + KyBoi + thoiHanChungThu + thoiGianKyHoaDon;
    };
    InvoiceComponent.prototype.thongtinBenBan = function (isClickButton) {
        var _this = this;
        this.noiDungNguoiBan = "";
        if (_core_index__WEBPACK_IMPORTED_MODULE_16__["VStringService"]._getValueToString(this.frmData.seller_tax_code) != "") {
            if (isClickButton)
                _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].showloading();
            //  this.customersService.getInfoCompany("0102519041").subscribe(
            this.customersService.getInfoCompany(this.frmData.seller_tax_code).subscribe(function (res) {
                var isErr = false;
                if (res.status === 'success') {
                    if (res.data && res.data.customer) {
                        if (res.data.customer.name) {
                            var trangthaihoatdong = "";
                            switch (res.data.customer.status) {
                                case "00":
                                    trangthaihoatdong = "NNT đang hoạt động";
                                    break;
                                case "01":
                                    trangthaihoatdong = "NNT ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST";
                                    break;
                                case "02":
                                    trangthaihoatdong = "NNT đã chuyển cơ quan thuế quản lý";
                                    break;
                                case "03":
                                    trangthaihoatdong = "NNT ngừng HĐ nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST";
                                    break;
                                case "04":
                                    trangthaihoatdong = "NNT đang hoạt động (chưa đầy đủ thủ tục cấp MST)";
                                    break;
                                case "05":
                                    trangthaihoatdong = "NNT tạm ngừng KD có thời hạn";
                                    break;
                                case "06":
                                    trangthaihoatdong = "NNT không hoạt động tại địa chỉ đã đăng ký";
                                    break;
                            }
                            res.data.customer.status = trangthaihoatdong;
                            _this.frmData.json_data.tax_code = res.data.customer.tax_code;
                            _this.frmData.json_data.name = res.data.customer.name;
                            _this.frmData.json_data.business_address = res.data.customer.business_address;
                            _this.frmData.json_data.status = trangthaihoatdong;
                            _this.frmData.json_data.mstNB = "success";
                            _this.viewThongTinBenBan(res.data.customer);
                        }
                        else
                            isErr = true;
                    }
                    else
                        isErr = true;
                }
                else
                    isErr = true;
                if (isErr) {
                    _this.frmData.json_data.mstNB = "error";
                    var line1 = "<div><p><span class=\"font-error\">Hệ thống không tìm thấy dữ liệu. Kiểm tra lại </span><a target=\"_blank\" class=\"linkTaiDay\" href=\"http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp\">Tại đây</a></p></div>";
                    _this.noiDungNguoiBan = line1;
                }
                if (isClickButton)
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading();
            }, function (error) {
                _this.frmData.json_data.mstNB = "error";
                var line1 = "<div><p><span class=\"font-error\">Hệ thống không tìm thấy dữ liệu. Kiểm tra lại </span><a target=\"_blank\" class=\"linkTaiDay\" href=\"http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp\">Tại đây</a></p></div>";
                _this.noiDungNguoiBan = line1;
                if (isClickButton)
                    _core_library__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading();
            });
        }
        else {
            var line1 = "<div class=\"font-error\"><p>Mã số thuế không được để trống</p></div>";
            this.noiDungNguoiBan = line1;
        }
    };
    InvoiceComponent.prototype.viewThongTinBenBan = function (data) {
        var mst = "";
        var tendonvi = "";
        var diachi = "";
        var trangthai = "";
        var khongtimthayNB = "";
        if (data.tax_code)
            mst = "<div class=\"font-success\"><span>Mã số thuế: </span><span>" + data.tax_code + "</span></div>";
        if (data.name)
            tendonvi = "<div class=\"font-success\"><span>Tên đơn vị: </span><span>" + data.name + "</span></div>";
        if (data.business_address)
            diachi = "<div class=\"font-success\"><span>Địa chỉ: </span><span>" + data.business_address + "</span></div>";
        if (data.status)
            trangthai = "<div class=\"font-success\"><span>Trạng thái: </span><span>" + data.status + "</span></div>";
        if (data.mstNB == "error")
            khongtimthayNB = "<div><p><span class=\"font-error\">Hệ thống không tìm thấy dữ liệu. Kiểm tra lại </span><a target=\"_blank\" class=\"linkTaiDay\" href=\"http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp\">Tại đây</a></p></div>";
        this.noiDungNguoiBan = mst + tendonvi + diachi + trangthai + khongtimthayNB;
    };
    InvoiceComponent.prototype.onClickBenBan = function () {
        this.thongtinBenBan(true);
    };
    InvoiceComponent.prototype.onClickChungThuSo = function () {
        this.verifySignature();
    };
    /* Thay đổi loại hóa đơn */
    InvoiceComponent.prototype.changedTypeInvoice = function (data) {
        this.frmData.xml_type = data.itemData.code;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_invoice_buy_component_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_15__["ProductGripComponent"]),
        __metadata("design:type", _modules_invoice_buy_component_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_15__["ProductGripComponent"])
    ], InvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_invoice_buy_component_form_header_invoice_form_header_invoice_component__WEBPACK_IMPORTED_MODULE_14__["FormHeaderInvoiceComponent"]),
        __metadata("design:type", _modules_invoice_buy_component_form_header_invoice_form_header_invoice_component__WEBPACK_IMPORTED_MODULE_14__["FormHeaderInvoiceComponent"])
    ], InvoiceComponent.prototype, "formInvoice", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/invoice-buy/component/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/invoice-buy/component/invoice/invoice.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__["VatService"],
            _core_services__WEBPACK_IMPORTED_MODULE_7__["SocketService"],
            _core_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__["CustomersService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceBuyService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-9\" style=\"padding-right: 0px\">\r\n    <div class=\"search-date-tct\">\r\n      <div class=\"column\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.export_period}}</div>\r\n          <div class=\"value\">\r\n            <dx-select-box [items]=\"exportSchedulesTCT\" displayExpr=\"name\" valueExpr=\"code\"\r\n              (onValueChanged)=\"onExportSchedules($event)\" [value]=\"objSearch.exportSchedulesDefault\">\r\n            </dx-select-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.from_date}}</div>\r\n          <div class=\"value\">\r\n            <dx-date-box [(value)]=\"objSearch.startDate\" type=\"date\" [useMaskBehavior]=\"true\" [max]=\"maxDate\"\r\n              [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onStartDateTCT($event)\">\r\n            </dx-date-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.to_date}}</div>\r\n          <div class=\"value\">\r\n            <dx-date-box [(value)]=\"objSearch.endDate\" [useMaskBehavior]=\"true\" type=\"date\"\r\n              [max]=\"maxDate\" [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onEndDateTCT($event)\">\r\n            </dx-date-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"search-panel\">\r\n      <div class=\"column\">\r\n        <div class=\"field\">\r\n          <div class=\"label\" style=\"width: 100px !important;\">{{_translate.CONTROLL.LABEL.search}}</div>\r\n          <div class=\"value1\">\r\n            <dx-text-box placeholder=\"{{placeholder}}\" [(value)]='objSearch.contentSearch'\r\n              (onValueChanged)=\"onContentSearchChange($event)\"></dx-text-box>\r\n            <dx-button hint=\"{{_translate.CONTROLL.LABEL.search}}\" id=\"searchBtn\" [(icon)]=\"_translate.ICONS.search\"\r\n              type=\"default\" (click)=\"loadList(false)\"></dx-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column day\" style=\"width: 32%;\">\r\n        <div class=\"field\">\r\n          <div class=\"label\" style=\"width: 105px !important; margin-right: 0px;\">{{_translate.CONTROLL.LABEL._results}}\r\n          </div>\r\n          <div class=\"trang-thai-hd\" style=\"width: 60% !important;\">\r\n            <dx-select-box [dataSource]=\"testResults\" (onValueChanged)=\"onTestResultsChanged($event)\"\r\n              [value]=\"testResults[0].code\" displayExpr=\"name\" valueExpr=\"code\"></dx-select-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-button text=\"{{ 'CONTROLL.LABEL.search' | translate }}\" type=\"default\" (click)=\"loadList(false)\">\r\n          </dx-button>\r\n          <dx-button text=\"Nhận HĐ\" type=\"default\" (click)=\"receiveInvoice()\">\r\n          </dx-button>\r\n          <dx-button text=\"{{ 'CONTROLL.LABEL.export_data' | translate }}\" type=\"default\" (click)=\"exportExcel()\">\r\n          </dx-button>\r\n          <!-- <dx-button text=\"123123\" type=\"default\" (click)=\"open()\">\r\n          </dx-button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h1 style=\"margin-bottom: 15px;\">Đã chọn {{selectedItems.length}}/{{totalInvoice}} hóa đơn</h1>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-load-panel [enabled]=\"true\"></dxo-load-panel> -->\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <!-- <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Số hóa đơn -->\r\n  <dxi-column dataField=\"shdon\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.so_hoa_don}}\" alignment=\"center\" [filterOperations]=\"['=']\"\r\n    [fixed]=\"true\">\r\n  </dxi-column>\r\n  <!-- Mẫu số kí hiệu -->\r\n  <dxi-column dataField=\"khhdon\" cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\" [filterOperations]=\"['=']\" [fixed]=\"true\">\r\n  </dxi-column>\r\n  <!-- Ngày hóa đơn -->\r\n  <dxi-column dataField=\"tdlap\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" alignment=\"center\" [fixed]=\"true\" [filterOperations]=\"['=']\"> </dxi-column>\r\n  <!-- MST người bán -->\r\n  <dxi-column dataField=\"nbmst\" caption=\"{{ 'GRID.INVOICE.MST_saller' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.hanh_dong_4}}\" alignment=\"left\" [filterOperations]=\"['=']\" [fixed]=\"true\">\r\n  </dxi-column>\r\n  <!-- Tên người bán -->\r\n  <dxi-column dataField=\"nbten\" caption=\"{{ 'GRID.INVOICE.saller_name' | translate }}\" alignment=\"left\"\r\n   [allowFiltering]=\"false\" width=\"{{_translate.GRID_WIDTH.ten_hang}}\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền chưa thuế -->\r\n  <dxi-column caption=\"Tổng tiền chưa thuế\" dataType=\"number\" alignment=\"right\" dataField=\"tgtcthue\" format=\"0,###.##\"\r\n    [allowFiltering]=\"false\" width=\"120\"></dxi-column>\r\n  <!-- Tổng tiền thuế -->\r\n  <dxi-column caption=\"Tổng tiền thuế\" dataType=\"number\" alignment=\"right\" format=\"0,###.##\" dataField=\"tgtthue\"\r\n    [allowFiltering]=\"false\" width=\"120\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền chiết khấu thương mại -->\r\n  <dxi-column caption=\"Tổng tiền chiết khấu thương mại\" dataType=\"number\" alignment=\"right\" [allowFiltering]=\"false\"\r\n    dataField=\"ttcktmai\" format=\"0,###.##\" width=\"120\"></dxi-column>\r\n  <!-- Tổng tiền phí -->\r\n  <dxi-column caption=\"Tổng tiền phí\" dataType=\"number\" alignment=\"right\" format=\"0,###.##\" [allowFiltering]=\"false\"\r\n    dataField=\"tgtphi\" width=\"120\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền thanh toán -->\r\n  <dxi-column caption=\"Tổng tiền thanh toán\" dataType=\"number\" alignment=\"right\" [allowFiltering]=\"false\"\r\n    dataField=\"tgtttbso\" format=\"0,###.##\" width=\"120\"></dxi-column>\r\n  <!-- Đơn vị tiền tệ -->\r\n  <dxi-column dataField=\"dvtte\" caption=\"Đơn vị tiền tệ\" alignment=\"center\" format=\"0,###.##\" [allowFiltering]=\"false\"\r\n    width=\"120\">\r\n  </dxi-column>\r\n  <!-- Trạng thái hóa đơn -->\r\n  <dxi-column dataField=\"tthai\" caption=\"Trạng thái hóa đơn\" alignment=\"center\" width=\"120\">\r\n    <dxo-lookup [dataSource]=\"adjustmentTypes\" valueExpr=\"code\" displayExpr=\"name\" width=\"120\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Kết quả kiểm tra -->\r\n  <dxi-column dataField=\"ttxly\" cellTemplate=\"testResults\" caption=\"Kết quả kiểm tra\" alignment=\"center\" width=\"120\"\r\n    [allowFiltering]=\"false\">\r\n    <!-- <dxo-lookup [dataSource]=\"testResults\" valueExpr=\"code\" displayExpr=\"name\" width=\"120\"></dxo-lookup> -->\r\n  </dxi-column>\r\n  <!-- Trạn thái nhận HĐ -->\r\n  <dxi-column dataField=\"receiving_status\" caption=\"Trạng thái nhận HĐ\" alignment=\"center\" width=\"120\"\r\n    [allowFiltering]=\"false\">\r\n    <!-- <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup> -->\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"actionIcon\" alignment=\"center\" width=\"50\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.khmshdon }}</p>\r\n    <p>{{ d.data.khhdon }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'testResults'\">\r\n    <p *ngIf=\"d.data.ttxly == '5'\">Đã cấp mã hóa đơn</p>\r\n    <p *ngIf=\"d.data.ttxly == '6'\">Tổng cục thuế đã nhận không mã</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'status'\">\r\n    <a href=\"javascript:void(0)\" (click)=\"checkStatusIhd(d.data)\" *ngIf=\"this.statusInvoice.id != d.data.id\">Kiểm tra\r\n      trạng thái</a>\r\n    <p *ngIf=\"this.statusInvoice.status == 'CHUA_NHAN' && this.statusInvoice.id == d.data.id\">HĐ\r\n      chưa nhận</p>\r\n    <p *ngIf=\"this.statusInvoice.status == 'DA_NHAN' && this.statusInvoice.id == d.data.id\">HĐ\r\n      đã nhận</p>\r\n    <p *ngIf=\"this.statusInvoice.status == 'TRUNG' && this.statusInvoice.id == d.data.id\">HĐ\r\n      trùng</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <!--    <p>{{ d.data.seller_legal_name || d.data.seller_legal_name }}</p>-->\r\n    <p>{{ d.data.seller_legal_name || d.data.seller_legal_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionStatus'\">\r\n    <p *ngIf=\"d.data.adjustment_type === '1'\">{{_translate.CONTROLL.BUTTON.invoice_origin}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '3'\">{{_translate.CONTROLL.BUTTON.report_replace}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '7'\">{{_translate.GRID.GENERAL.invoice_removed}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '5'\">{{_translate.GRID.GENERAL.adjustment_invoice}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '4'\">{{_translate.GRID.GENERAL.invoice_adjusted}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '2'\">{{_translate.GRID.GENERAL.invoice_replaced}}</p>\r\n    <p *ngIf=\"d.data.adjustment_type === '6'\">{{_translate.GRID.GENERAL.invoice_deleted}}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" [customizeText]=\"customizeText\" showInColumn=\"tgtttbso\">\r\n    </dxi-total-item>\r\n    <!-- <dxi-total-item summaryType=\"custom\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n    </dxi-total-item> -->\r\n    <!-- <dxi-total-item\r\nsummaryType=\"custom\"\r\n[customizeText]=\"customizeText1\"\r\nshowInColumn=\"customerName\">\r\n</dxi-total-item> -->\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"objSearch.page\"></dxo-paging>\r\n  <dxo-pager [visible]=\"false\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<div class=\"pagination\">\r\n  <h1>Tổng số hóa đơn {{totalInvoice}}</h1>\r\n  <div class=\"pagination-btn\">\r\n    <button class=\"back-btn\" (click)=\"prev()\" id=\"prev\" disabled><i class=\"fa fa-chevron-left\"\r\n        aria-hidden=\"true\"></i></button>\r\n    <div class=\"pagination-number\">\r\n      {{currentPageNumber}}/{{pageNumber}}\r\n    </div>\r\n    <button class=\"next-btn\" (click)=\"next()\" id=\"next\" disabled><i class=\"fa fa-chevron-right\"\r\n        aria-hidden=\"true\"></i></button>\r\n  </div>\r\n  <div class=\"pagination-select\">\r\n    <dx-select-box [items]=\"pagination\" displayExpr=\"name\" valueExpr=\"name\" (onValueChanged)=\"paginationChange($event)\"\r\n      [value]=\"objSearch.limit\">\r\n    </dx-select-box>\r\n  </div>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}.timkiemIcon{background-image:url('link_sign.png');background-position-x:1px;background-position-y:6px;background-repeat:no-repeat;text-decoration:underline}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .search-section .search-date-tct{width:100%}::ng-deep .search-section .search-date-tct .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}.search-panel{width:100%}.search-panel .dx-texteditor{border-radius:0}.search-panel .column{width:68%}.search-panel .label{margin:0}.search-panel .value{width:76% !important}.search-panel .value .dx-textbox{width:83%;display:inline-flex}.search-panel .value .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .value .dx-button-content{padding-right:0 !important}.search-panel .value .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value #advBtn{margin-top:0;width:5%}.search-panel .value #searchBtn{margin-top:0;width:9%}.search-panel .value1{width:82% !important}.search-panel .value1 .dx-textbox{width:83%;display:inline-flex}.search-panel .value1 .dx-button{position:relative;top:-7px;border-left:0;height:27px}.search-panel .value1 .dx-button-content{padding-right:0 !important}.search-panel .value1 .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value1 #advBtn{margin-top:0;width:5%}.search-panel .value1 #searchBtn{margin-top:0;width:9%}.search-panel .valueProcess{width:63%}.search-panel .valueProcess .dx-textbox{width:94%;display:inline-flex}.search-panel .valueProcess .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .valueProcess .dx-button-content{padding-right:0 !important}.search-panel .valueProcess .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .valueProcess #advBtn{margin-top:0;width:5%}.search-panel .valueProcess #searchBtn{margin-top:0;width:9%}.search-panel .trang-thai-hd{width:63%}.search-panel .trang-thai-hd .dx-textbox{margin-left:14px}.search-panel .trang-thai-hd .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .trang-thai-hd .dx-button-content{padding-right:0 !important}.search-panel .trang-thai-hd .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .trang-thai-hd #advBtn{margin-top:0;width:5%}.search-panel .trang-thai-hd #searchBtn{margin-top:0;width:9%}.advanced,.advanced-invoice-buy{margin:0 -15px;transition:all .3s linear 0s;width:145%}.advanced .dx-texteditor,.advanced-invoice-buy .dx-texteditor{border-radius:0}.advanced .column,.advanced-invoice-buy .column{width:24%}.advanced .column .value,.advanced-invoice-buy .column .value{width:47%}.advanced .name-customer,.advanced-invoice-buy .name-customer{width:48% !important}.advanced .name-customer .value,.advanced-invoice-buy .name-customer .value{width:73.4% !important}.advanced .name-customer-buy,.advanced-invoice-buy .name-customer-buy{width:35.07% !important}.advanced .name-customer-buy .value,.advanced-invoice-buy .name-customer-buy .value{width:63.5% !important}.advanced :host .dx-fieldset,.advanced-invoice-buy :host .dx-fieldset{width:100px}.button-ok{height:30px;padding-bottom:10px !important;padding-left:20px}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-popup-content{padding-top:5px !important;padding-left:5px !important;padding-right:5px !important;padding-bottom:0 !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-treeview{height:80% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .processing_status-search.dx-treeview,::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .exporter-search.dx-treeview{height:75% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search{border-radius:12px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search .dx-button-content .dx-icon{font-size:13px !important}.pagination{justify-content:flex-end;align-items:center;margin-top:10px}.pagination .pagination-btn{display:flex;align-items:center;height:100%}.pagination .pagination-btn .pagination-number{height:32px;padding:0px 5px;box-sizing:border-box;border:1px solid #d9d9d9;border-radius:4px;color:rgba(0,0,0,0.85);display:flex;justify-content:center;align-items:center;margin:0px 4px}.pagination .pagination-btn .back-btn{border:none;outline:none;border-radius:4px;height:32px;padding:0px 5px;margin:0px 6px;background-color:#f0f2f5}.pagination .pagination-btn .back-btn:disabled{cursor:not-allowed}.pagination .pagination-btn .next-btn{border:none;outline:none;border-radius:4px;height:32px;padding:0px 5px;margin:0px 6px;background-color:#f0f2f5}.pagination .pagination-btn .next-btn:disabled{cursor:not-allowed}.pagination .pagination-btn .next-enable{background-color:#337ab7}.pagination .pagination-btn .next-enable i{color:white}.pagination .pagination-btn .prev-enable{background-color:#337ab7}.pagination .pagination-btn .prev-enable i{color:white}.pagination .pagination-select{width:62px}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListInvoiceTCTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInvoiceTCTComponent", function() { return ListInvoiceTCTComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_library_invoice_v_preview_inv_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/library/invoice/v-preview-inv.service */ "./src/app/core/library/invoice/v-preview-inv.service.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _modules_invoice_buy_shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component */ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/invoice-buy/shared/class/invoice.model */ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../captcha-update/captcha-update.component */ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ListInvoiceTCTComponent = /** @class */ (function () {
    function ListInvoiceTCTComponent(authService, vatService, modalService, modalImportService, bsModalDocumentCancel, router, route, translate, invoiceBuyService, socketService, configsService) {
        var _this = this;
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.bsModalDocumentCancel = bsModalDocumentCancel;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.invoiceBuyService = invoiceBuyService;
        this.socketService = socketService;
        this.configsService = configsService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isReceiveInvoice = false;
        this.statusInvoice = {};
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.paramSearch = null;
        this.extras = [];
        this.data_extras_invoice_buy = [];
        this.extend = [];
        this.select = {};
        this.adjustmentTypes = [];
        this.testResults = [];
        this.disEditMulti = true;
        this.system_parameter = {};
        this.clickCurent = '';
        this.showStatus = false;
        this.isSearchUI = true;
        this.dataAddInvoiceBuy = [];
        this.paramsExportData = null;
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_14__["Invoice"]('1');
        this.exportSchedulesTCT = [];
        this.currentPageNumber = 1;
        this.pageNumber = 1;
        this.listState = [];
        this.isPagination = false;
        this.totalInvoice = 0;
        this.objSearch = {
            endDate: '',
            contentSearch: '',
            test_results: '5',
            startDate: '',
            exportSchedulesDefault: 'THANG_NAY',
            limit: 15,
            page: 1,
            state: null,
        };
        this.pagination = [
            { name: 15 },
            { name: 30 },
            { name: 50 },
        ];
        this.customizeText = function (e) {
            if (_this.invoiceBuyService && _this.invoiceBuyService.handleConnect()) {
                var error = _this.invoiceBuyService.handleConnect();
                if (error.status == "error") {
                    if (error.message == 'Phiên đăng nhập TCT đã hết hạn') {
                        var initialState = {
                            is_expired: true,
                        };
                        _this.bsModalSignRef = _this.modalService.show(_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_16__["CaptchaUpdateComponent"], { class: 'modal-md', backdrop: 'static', keyboard: false, initialState: initialState });
                        _this.modalService.onHide.subscribe(function () {
                        });
                    }
                    else {
                        if (error.code == 'IWE285') {
                            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error.message, 'error', 5000);
                        }
                        else {
                            var initialState = {
                                is_expired: false,
                            };
                            _this.bsModalSignRef = _this.modalService.show(_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_16__["CaptchaUpdateComponent"], { class: 'modal-md', backdrop: 'static', keyboard: false, initialState: initialState });
                            _this.modalService.onHide.subscribe(function () {
                            });
                        }
                    }
                }
                else {
                    _this.pageNumber = Math.ceil(error.total / _this.objSearch.limit);
                    _this.objSearch.state = error.state;
                    _this.totalInvoice = error.total;
                    if (error.changeFilters) {
                        _this.currentPageNumber = 1;
                        _this.listState = [];
                        _this.objSearch.page = 1;
                        _this.loadList(false);
                    }
                    if (_this.currentPageNumber < _this.pageNumber) {
                        document.getElementById('next').classList.add('next-enable');
                        document.getElementById('next').removeAttribute('disabled');
                    }
                    else {
                        document.getElementById('next').classList.remove('next-enable');
                        document.getElementById('next').setAttribute('disabled', '');
                    }
                    if (_this.currentPageNumber > 1) {
                        document.getElementById('prev').classList.add('prev-enable');
                        document.getElementById('prev').removeAttribute('disabled');
                    }
                    else {
                        document.getElementById('prev').classList.remove('prev-enable');
                        document.getElementById('prev').setAttribute('disabled', '');
                    }
                }
            }
            return null;
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.adjustmentTypes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_15__["VSelectBoxService"]._adjustmentTypesTCT(this._translate);
        this.testResults = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_15__["VSelectBoxService"]._results(this._translate);
        this.exportSchedulesTCT = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].getExportScheduleTCT(this._translate).schedule;
        translate.use(this._language);
        this.data_extras_invoice_buy = [{
                id: '1',
                name: this._translate.CONTROLL.LABEL.export_data,
                items: [
                    {
                        id: 'LIST_INVOICE_BUY',
                        name: this._translate.CONTROLL.LABEL.list_invoice_buy,
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'DETAILS_OF_EACH_GOODS_AND_SERVICE',
                        name: this._translate.CONTROLL.LABEL.details_of_each_goods_and_service,
                        icon: this._translate.ICONS.edit
                    },
                ]
            }];
        this.dataAddInvoiceBuy = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.add,
                items: [
                    {
                        id: 'ADD_ONE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_one_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                    {
                        id: 'ADD_MULTIPLE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_multiple_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                ]
            }];
        this.placeholder =
            this._translate.CONTROLL.LABEL.input +
                " " +
                this._translate.GRID.INVOICE.invoice_number +
                ", " +
                this._translate.CONTROLL.LABEL.tax_code;
    }
    ListInvoiceTCTComponent.prototype.ngOnInit = function () {
        this.connectWebsocket();
        var oKyXuat = this.exportSchedulesTCT.filter(function (p) { return p.code == "THANG_NAY"; })[0];
        if (oKyXuat) {
            this.objSearch.startDate = oKyXuat.startDate;
            this.objSearch.endDate = oKyXuat.endDate;
            this.minDate = oKyXuat.startDate;
            this.maxDate = oKyXuat.endDate;
        }
    };
    ListInvoiceTCTComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.isSearchUI = false;
    };
    ListInvoiceTCTComponent.prototype.connectWebsocket = function () {
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
        });
    };
    ListInvoiceTCTComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        // this.loadList(e);
    };
    ListInvoiceTCTComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'ADD_ONE_INVOICE') {
            if (this.isHasPackage) {
                this.router.navigate(['/system/invoice-buy/create']);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng mua gói hóa đơn đầu vào để sử dụng chức năng này", "error");
            }
        }
        else if (e.itemData.id === 'ADD_MULTIPLE_INVOICE') {
            if (this.isHasPackage) {
                this.importMultipleFile();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng mua gói hóa đơn đầu vào để sử dụng chức năng này", "error");
            }
        }
        else if (e.itemData.id === 'LIST_INVOICE_BUY') {
            this.exportXLXS();
        }
        else if (e.itemData.id === 'DETAILS_OF_EACH_GOODS_AND_SERVICE') {
            this.exportDetails();
        }
    };
    // xu ly cho export XML chua xong
    ListInvoiceTCTComponent.prototype.setParameExport = function () {
        var dataValue;
        var sort = '&sort[0][key]=invoice_date&sort[0][direction]=DESC';
        var period = this.route.snapshot.queryParams.exportSchedulesDefault;
        if (period === 'TAT_CA') {
            dataValue = period + this.paramsExportData + sort;
        }
        else {
            var from_date = this.route.snapshot.queryParams.startDate;
            var to_date = this.route.snapshot.queryParams.endDate;
            dataValue = period + "&options[from_date]=" + from_date + "&options[to_date]=" + to_date + this.paramsExportData + sort;
        }
        return dataValue;
    };
    ListInvoiceTCTComponent.prototype.exportXLXS = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.invoiceBuyService.apiExportListInvoicebuy(this.setParameExport())
            .subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.report;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading(); });
    };
    ListInvoiceTCTComponent.prototype.exportDetails = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.invoiceBuyService.apiExportDetailInvoicebuy(this.setParameExport())
            .subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.report;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Xuất file thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading(); });
    };
    ListInvoiceTCTComponent.prototype.importMultipleFile = function () {
        var _this = this;
        this.bsModalDocumentCancel = this.modalService.show(_modules_invoice_buy_shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_11__["UploadFileZipComponent"], {
            class: 'modal-lg full-modal', backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalDocumentCancel.content.LoadList === 'LoadList') {
                // this.loadList();
                delete _this.bsModalDocumentCancel.content.LoadList;
            }
        });
    };
    ListInvoiceTCTComponent.prototype.edit = function (data) {
        var row = data ? data : this.selectedItems[0];
        this.router.navigate(["/system/invoice-buy/edit-invoice/" + row.id]);
    };
    ListInvoiceTCTComponent.prototype.inChuyenDoi = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.selectedItems.length || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    if (data.status === 'DA_XUAT') {
                        ids.push(data.id);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
                        return;
                    }
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                var w_1 = 1920, h_1 = 900;
                w_1 = window.screen.availWidth * 100 / 100;
                h_1 = window.screen.availHeight * 93 / 100;
                var win_1 = window.open('about:blank', 'name', 'width=200, height=100');
                win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
                win_1.blur();
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                var sub_1 = this.vatService.inChuyenDoiInvoiceImport(ids, false).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        var pdf_file = rs.data.invoice.pdf_file;
                        var objectUrl = _core_library_invoice_v_preview_inv_service__WEBPACK_IMPORTED_MODULE_9__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        win_1.resizeTo(screen.availWidth, screen.availHeight);
                        win_1.focus();
                        win_1.open(objectUrl, 'name', 'width=' + w_1 + ', height=' + h_1);
                    }
                    else {
                        win_1.close();
                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ListInvoiceTCTComponent.prototype.delete = function (data) {
        var _this = this;
        if (this.selectedItems.length || data) {
            var objData_1 = {};
            var ids_1 = [];
            var idsEmail_1 = [];
            var isInvoiveInMail_1 = this.selectedItems.filter(function (item) { return item.input_invoice_mail_id !== null; });
            if (data) {
                ids_1.push(data.id);
                objData_1 = {
                    ids: data.input_invoice_mail_id,
                    error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                };
            }
            else {
                this.selectedItems.map(function (item) {
                    if (item.export_from_ihd !== '1') {
                        ids_1.push(item.id);
                        if (item.input_invoice_mail_id) {
                            idsEmail_1.push(item.input_invoice_mail_id);
                        }
                    }
                });
            }
            if (Array.isArray(ids_1) && ids_1.length) {
                var result = _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                        _this.invoiceBuyService.deleteInvoiceId(ids_1).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (data) {
                                    if (data.input_invoice_mail_id) {
                                        var ids_2 = [];
                                        ids_2.push(data.input_invoice_mail_id);
                                        objData_1 = {
                                            ids: ids_2,
                                            error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                                        };
                                        _this.invoiceBuyService.notReceived(objData_1).subscribe();
                                    }
                                }
                                if (isInvoiveInMail_1.length > 0) {
                                    objData_1 = {
                                        ids: idsEmail_1,
                                        error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                                    };
                                    _this.invoiceBuyService.notReceived(objData_1).subscribe();
                                }
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                // this.loadList();
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                        });
                    }
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Không được xóa hóa đơn từ phần mềm ihoadon', 'error');
            }
        }
    };
    ListInvoiceTCTComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 0) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            var checkDaXuat = this.selectedItems.filter(function (item) {
                return item.status === 'DA_XUAT';
            });
            if (checks.length === this.selectedItems.length && checkDaXuat.length === 0) {
                this.disEditMulti = false;
            }
        }
    };
    ListInvoiceTCTComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.invoice_number) {
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
    ListInvoiceTCTComponent.prototype.loadList = function (e) {
        if (e) {
            if (this.isReceiveInvoice) {
                this.objSearch.state = this.listState[this.listState.length - 1];
                this.isReceiveInvoice = false;
            }
            else {
                this.objSearch.state = this.listState[this.listState.length - 1];
                this.objSearch.page = this.currentPageNumber;
            }
            this.dataSource = {};
            this.dataSource.store = this.invoiceBuyService.searchInvoiceTCT(this.objSearch);
        }
        else {
            this.objSearch.state = null;
            this.currentPageNumber = 1;
            this.dataSource = {};
            this.dataSource.store = this.invoiceBuyService.searchInvoiceTCT(this.objSearch);
        }
        this.dataGrid.instance.clearSelection();
    };
    ListInvoiceTCTComponent.prototype.view = function (data) {
        var row = data ? data : this.selectedItems[0];
        var dataInvoice = {
            khhdon: row.khhdon,
            khmshdon: row.khmshdon,
            nbmst: row.nbmst,
            shdon: row.shdon,
            type: 'html'
        };
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var initialState = {
            typeAction: 'HOA_DON_TCT',
            dataInvoiceTCT: dataInvoice
        };
        this.bsModalRef = this.modalImportService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceMultipageComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl view-invoice',
            initialState: initialState
        });
        var subModal = this.modalImportService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
    };
    ListInvoiceTCTComponent.prototype.setUrlNavigate = function () {
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
    ListInvoiceTCTComponent.prototype.search = function (data) {
        if (data.export_from_ihd == '1') {
            var win = window.open('https://ihoadon.vn/kiem-tra/?shd=' + data.invoice_number + "&mtc=" + data.lookup_code, '_blank');
            win.focus();
        }
        else {
            if (data.lookup_link) {
                var win = window.open(data.lookup_link, '_blank');
                win.focus();
            }
            else
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Hóa đơn chưa nhập link tra cứu. Vui lòng kiểm tra lại", 'error');
        }
    };
    ListInvoiceTCTComponent.prototype.receiveInvoice = function () {
        var _this = this;
        if (this.selectedItems.length > 0) {
            this.configsService.getConfigSearch().subscribe(function (res) {
                if (res.status == 'success') {
                    var result = _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].confirm("Bạn đã nhận hóa đơn " + res.data.sync_number + "/3" + " lần trong ngày. Bạn có muốn nhận hóa đơn này?", _this._translate.NOTIFY.notify);
                    var data_1 = {
                        datas: _this.selectedItems
                    };
                    result.then(function (dialogResult) {
                        if (dialogResult) {
                            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                            _this.invoiceBuyService.receiveInvoice(data_1).subscribe(function (res) {
                                if (res.status === 'success') {
                                    _this.pagereceiveInvoice = _this.objSearch.state;
                                    _this.isReceiveInvoice = true;
                                    _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Nhận hóa đơn thành công', 'success');
                                    _this.loadList(true);
                                }
                                else {
                                    _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
                                }
                            }, function (error) {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error');
                            }, function () {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                            });
                        }
                    });
                }
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(" Vui lòng chọn hóa đơn", 'error');
        }
    };
    ListInvoiceTCTComponent.prototype.exportExcel = function () {
        var data = this.invoiceBuyService.getDataExportExcel();
        this.invoiceBuyService.exportExcel(data).subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    ListInvoiceTCTComponent.prototype.checkStatusIhd = function (data) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var dataInvoice = {
            datas: [
                {
                    nbmst: data.nbmst,
                    khmshdon: data.khmshdon,
                    khhdon: data.khhdon,
                    shdon: data.shdon,
                    id: data.id
                }
            ]
        };
        this.invoiceBuyService.checkInputInvoice(dataInvoice).subscribe(function (res) {
            if (res.status == 'success') {
                _this.showStatus = true;
                _this.statusInvoice = res.data.invoices[0];
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error');
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    ListInvoiceTCTComponent.prototype.open = function () {
        this.bsModalSignRef = this.modalService.show(_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_16__["CaptchaUpdateComponent"], { class: 'modal-md', backdrop: 'static', keyboard: false });
    };
    ListInvoiceTCTComponent.prototype.onExportSchedules = function (e) {
        var selectedItem = e.component.option("selectedItem");
        this.objSearch.exportSchedulesDefault = selectedItem.code;
        this.objSearch.startDate = selectedItem.startDate;
        this.objSearch.endDate = selectedItem.endDate;
    };
    ListInvoiceTCTComponent.prototype.onEndDateTCT = function (e) {
        if (e.event) {
            var date = new Date(e.value);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            this.objSearch.endDate = e.value;
            var startDate = new Date(this.objSearch.startDate);
            var countDate = (date.getTime() - startDate.getTime()) / (24 * 3600 * 1000);
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if (countDate > 31 || countDate < 0) {
                    this.minDate = date.getTime() - (24 * 3600 * 1000 * 30);
                    this.objSearch.startDate = date.getTime() - (24 * 3600 * 1000 * 30);
                }
            }
            else if (month == 2) {
                if (year % 100 == 0 && year % 400 == 0) {
                    if (countDate > 29 || countDate < 0) {
                        this.minDate = date.getTime() - (24 * 3600 * 1000 * 28);
                        this.objSearch.startDate = date.getTime() - (24 * 3600 * 1000 * 28);
                    }
                }
                else if (year % 4 == 0) {
                    if (countDate > 29 || countDate < 0) {
                        this.minDate = date.getTime() - (24 * 3600 * 1000 * 28);
                        this.objSearch.startDate = date.getTime() - (24 * 3600 * 1000 * 28);
                    }
                }
                else {
                    if (countDate > 28 || countDate < 0) {
                        this.minDate = date.getTime() - (24 * 3600 * 1000 * 27);
                        this.objSearch.startDate = date.getTime() - (24 * 3600 * 1000 * 27);
                    }
                }
            }
            else {
                if (countDate > 30 || countDate < 0) {
                    this.minDate = date.getTime() - (24 * 3600 * 1000 * 29);
                    this.objSearch.startDate = date.getTime() - (24 * 3600 * 1000 * 29);
                }
            }
        }
    };
    ListInvoiceTCTComponent.prototype.onStartDateTCT = function (e) {
        if (e.event) {
            var date = new Date(e.value);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var today = new Date(moment__WEBPACK_IMPORTED_MODULE_18__().endOf('day').format('YYYY-MM-DD HH:mm:ss'));
            var endDate = new Date(this.objSearch.endDate);
            this.objSearch.startDate = e.value;
            var countDate = (endDate.getTime() - date.getTime()) / (24 * 3600 * 1000);
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if (countDate > 31 || countDate < 0) {
                    this.minDate = e.value;
                    this.objSearch.endDate = date.getTime() + (24 * 3600 * 1000 * 30);
                }
                else {
                    this.minDate = e.value;
                }
            }
            else if (month == 2) {
                if (year % 100 == 0 && year % 400 == 0) {
                    if (countDate > 29 || countDate < 0) {
                        this.minDate = e.value;
                        this.objSearch.endDate = date.getTime() + (24 * 3600 * 1000 * 28);
                    }
                    else {
                        this.minDate = e.value;
                    }
                }
                else if (year % 4 == 0) {
                    if (countDate > 29 || countDate < 0) {
                        this.minDate = e.value;
                        this.objSearch.endDate = date.getTime() + (24 * 3600 * 1000 * 28);
                    }
                    else {
                        this.minDate = e.value;
                    }
                }
                else {
                    if (countDate > 28 || countDate < 0) {
                        this.minDate = e.value;
                        this.objSearch.endDate = date.getTime() + (24 * 3600 * 1000 * 27);
                    }
                    else {
                        this.minDate = e.value;
                    }
                }
            }
            else {
                if (countDate > 30 || countDate < 0) {
                    this.minDate = e.value;
                    this.objSearch.endDate = date.getTime() + (24 * 3600 * 1000 * 29);
                }
                else {
                    this.minDate = e.value;
                }
            }
        }
    };
    ListInvoiceTCTComponent.prototype.onTestResultsChanged = function (e) {
        this.objSearch.test_results = e.value;
    };
    ListInvoiceTCTComponent.prototype.onContentSearchChange = function (e) {
        if (e.event) {
            this.objSearch.contentSearch = e.value;
        }
    };
    ListInvoiceTCTComponent.prototype.paginationChange = function (e) {
        this.objSearch.limit = e.value;
        this.loadList(false);
    };
    ListInvoiceTCTComponent.prototype.next = function () {
        document.getElementById('next').classList.remove('next-enable');
        document.getElementById('next').setAttribute('disabled', '');
        document.getElementById('prev').classList.remove('prev-enable');
        document.getElementById('prev').setAttribute('disabled', '');
        this.listState.push(this.objSearch.state);
        if (this.currentPageNumber <= this.pageNumber) {
            this.currentPageNumber++;
        }
        this.loadList(true);
    };
    ListInvoiceTCTComponent.prototype.prev = function () {
        document.getElementById('next').classList.remove('next-enable');
        document.getElementById('next').setAttribute('disabled', '');
        document.getElementById('prev').classList.remove('prev-enable');
        document.getElementById('prev').setAttribute('disabled', '');
        this.objSearch.state = this.listState[this.listState.length - 2];
        this.listState.pop();
        if (this.currentPageNumber >= 1) {
            this.currentPageNumber--;
        }
        this.loadList(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuComponent"])
    ], ListInvoiceTCTComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListInvoiceTCTComponent.prototype, "isHasPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], ListInvoiceTCTComponent.prototype, "expandMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], ListInvoiceTCTComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFilterBuilderComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFilterBuilderComponent"])
    ], ListInvoiceTCTComponent.prototype, "filterBuilder", void 0);
    ListInvoiceTCTComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-invoice-tct',
            template: __webpack_require__(/*! ./list-invoice-tct.component.html */ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.html"),
            styles: [__webpack_require__(/*! ./list-invoice-tct.component.scss */ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceBuyService"],
            _core_index__WEBPACK_IMPORTED_MODULE_12__["SocketService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_17__["ConfigsService"]])
    ], ListInvoiceTCTComponent);
    return ListInvoiceTCTComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-advanced (searchContentChange)=\"getSearch($event)\" [variableName]=\"this.isSearchUI\"\r\n      [isInvoiceBuy]=\"this.isInvoiceBuy\">\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-menu style=\"margin-right: 8px!important;\" [dataSource]=\"dataAddInvoiceBuy\" displayExpr=\"name\"\r\n            orientation=\"horizontal\" submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n          <dx-menu [dataSource]=\"data_extras_invoice_buy\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            style=\"margin-right: 8px!important;\" submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n          <dx-menu [dataSource]=\"extendInvoiceBuy\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n            (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\"></dxo-selection>\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" width=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\"></dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"templateCode\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n\r\n  <!-- <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"79\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column> -->\r\n  <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" sortOrder=\"desc\" alignment=\"center\" [sortIndex]=\"0\"></dxi-column>\r\n\r\n  <dxi-column dataField=\"seller_tax_code\" caption=\"{{ 'GRID.INVOICE.MST_sales_unit' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.hanh_dong_4}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"customerName\" dataField=\"seller_legal_name\"\r\n    caption=\"{{ 'CONTROLL.LABEL.seller_unit' | translate }}\" alignment=\"left\" [filterOperations]=\"['=']\"\r\n    [allowFiltering]=\"true\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\"\r\n    alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\" format=\"0,###.##\"\r\n    width=\"{{_translate.GRID_WIDTH.tong_tien}}\"></dxi-column>\r\n  <dxi-column caption=\"{{ 'GRID.INVOICE.status_invoice' | translate }}\" alignment=\"center\" dataField=\"adjustment_type\">\r\n    <dxo-lookup [dataSource]=\"adjustmentTypes\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n  </dxi-column>\r\n  <dxi-column dataField=\"status_tct\" caption=\"Hệ thống TCT\" alignment=\"center\">\r\n    <dxo-lookup [dataSource]=\"testResults\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n  </dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"{{'GRID.GENERAL.note' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.tong_tien_sau_thue}}\" alignment=\"center\"></dxi-column>\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" width=\"149\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <!--    <p>{{ d.data.seller_legal_name || d.data.seller_legal_name }}</p>-->\r\n    <p>{{ d.data.seller_legal_name || d.data.seller_legal_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"Link tra cứu\" class=\"timkiemIcon actionIcon\" (click)=\"search(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}.timkiemIcon{background-image:url('link_sign.png');background-position-x:1px;background-position-y:6px;background-repeat:no-repeat;text-decoration:underline}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .button-extend .dx-menu-base .dx-menu-item .dx-menu-item-content .dx-icon{margin-right:7px}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInvoiceComponent", function() { return ListInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _modules_invoice_buy_shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component */ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/invoice-buy/shared/class/invoice.model */ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
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
















var ListInvoiceComponent = /** @class */ (function () {
    function ListInvoiceComponent(authService, vatService, modalService, modalImportService, bsModalDocumentCancel, router, route, translate, invoiceBuyService, socketService) {
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.bsModalDocumentCancel = bsModalDocumentCancel;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.invoiceBuyService = invoiceBuyService;
        this.socketService = socketService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.paramSearch = null;
        this.extras = [];
        this.extendInvoiceBuy = [];
        this.data_extras_invoice_buy = [];
        this.extend = [];
        this.select = {};
        this.disEditMulti = true;
        this.system_parameter = {};
        this.clickCurent = '';
        this.isInvoiceBuy = true;
        this.dataAddInvoiceBuy = [];
        this.paramsExportData = null;
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_14__["Invoice"]('1');
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.adjustmentTypes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_15__["VSelectBoxService"]._adjustmentTypes(this._translate);
        this.testResults = [
            { name: 'Chưa có', code: 'CHUA_CO' },
            { name: 'Đã có', code: 'DA_CO' },
            { name: 'Chưa kiểm tra', code: 'CHUA_KIEM_TRA' }
        ];
        this.data_extras_invoice_buy = [{
                id: '1',
                name: this._translate.CONTROLL.LABEL.export_data,
                items: [
                    {
                        id: 'LIST_INVOICE_BUY',
                        name: this._translate.CONTROLL.LABEL.list_invoice_buy,
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'DETAILS_OF_EACH_GOODS_AND_SERVICE',
                        name: this._translate.CONTROLL.LABEL.details_of_each_goods_and_service,
                        icon: this._translate.ICONS.edit
                    },
                ]
            }];
        this.dataAddInvoiceBuy = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.add,
                items: [
                    {
                        id: 'ADD_ONE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_one_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                    {
                        id: 'ADD_MULTIPLE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_multiple_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                ]
            }];
        this.extendInvoiceBuy = [{
                id: '1',
                name: 'Mở rộng',
                items: [
                    {
                        id: 'DELETE_MULTIPLE_INVOICE',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'CHECK_MULTIPLE_INVOICE',
                        name: this._translate.CONTROLL.BUTTON.check_mutiple_invoice,
                        icon: this._translate.ICONS.tct_icon
                    },
                ]
            }];
    }
    ListInvoiceComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.connectWebsocket();
        this.loadList();
    };
    ListInvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.isInvoiceBuy = false;
    };
    ListInvoiceComponent.prototype.connectWebsocket = function () {
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
        });
    };
    ListInvoiceComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    ListInvoiceComponent.prototype.itemExtrasClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].initial_fee.hoadonmuavao)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (e.itemData.id === 'ADD_ONE_INVOICE') {
                            if (this.isHasPackage) {
                                this.router.navigate(['/system/invoice-buy/create']);
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng mua gói hóa đơn đầu vào để sử dụng chức năng này", "error");
                            }
                        }
                        else if (e.itemData.id === 'ADD_MULTIPLE_INVOICE') {
                            if (this.isHasPackage) {
                                this.importMultipleFile();
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng mua gói hóa đơn đầu vào để sử dụng chức năng này", "error");
                            }
                        }
                        else if (e.itemData.id === 'LIST_INVOICE_BUY') {
                            this.exportXLXS();
                        }
                        else if (e.itemData.id === 'DETAILS_OF_EACH_GOODS_AND_SERVICE') {
                            this.exportDetails();
                        }
                        else if (e.itemData.id === 'DELETE_MULTIPLE_INVOICE') {
                            this.delete();
                        }
                        else if (e.itemData.id === 'CHECK_MULTIPLE_INVOICE') {
                            this.checkInvoiceTCT();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // xu ly cho export XML chua xong
    ListInvoiceComponent.prototype.setParameExport = function () {
        var dataValue;
        var sort = '&sort[0][key]=invoice_date&sort[0][direction]=DESC';
        var period = this.route.snapshot.queryParams.exportSchedulesDefault;
        if (period === 'TAT_CA') {
            dataValue = period + this.paramsExportData + sort;
        }
        else {
            var from_date = this.route.snapshot.queryParams.startDate;
            var to_date = this.route.snapshot.queryParams.endDate;
            dataValue = period + "&options[from_date]=" + from_date + "&options[to_date]=" + to_date + this.paramsExportData + sort;
        }
        return dataValue;
    };
    ListInvoiceComponent.prototype.exportXLXS = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.invoiceBuyService.apiExportListInvoicebuy(this.setParameExport())
            .subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.report;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading(); });
    };
    ListInvoiceComponent.prototype.exportDetails = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.invoiceBuyService.apiExportDetailInvoicebuy(this.setParameExport())
            .subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.report;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Xuất file thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error'); }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading(); });
    };
    ListInvoiceComponent.prototype.importMultipleFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].initial_fee.hoadonmuavao)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.bsModalDocumentCancel = this.modalService.show(_modules_invoice_buy_shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_10__["UploadFileZipComponent"], {
                            class: 'modal-lg full-modal', backdrop: 'static',
                            keyboard: false
                        });
                        this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalDocumentCancel.content.LoadList === 'LoadList') {
                                _this.loadList();
                                delete _this.bsModalDocumentCancel.content.LoadList;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListInvoiceComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].initial_fee.hoadonmuavao)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        this.router.navigate(["/system/invoice-buy/edit-invoice/" + row.id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListInvoiceComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, objData_1, ids_1, idsEmail_1, isInvoiveInMail_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].initial_fee.hoadonmuavao)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
                            objData_1 = {};
                            ids_1 = [];
                            idsEmail_1 = [];
                            isInvoiveInMail_1 = this.selectedItems.filter(function (item) { return item.input_invoice_mail_id !== null; });
                            if (data) {
                                ids_1.push(data.id);
                                objData_1 = {
                                    ids: data.input_invoice_mail_id,
                                    error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                                };
                            }
                            else {
                                this.selectedItems.map(function (item) {
                                    ids_1.push(item.id);
                                    if (item.input_invoice_mail_id) {
                                        idsEmail_1.push(item.input_invoice_mail_id);
                                    }
                                });
                            }
                            if (Array.isArray(ids_1) && ids_1.length) {
                                result = _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                                result.then(function (dialogResult) {
                                    if (dialogResult) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                                        _this.invoiceBuyService.deleteInvoiceId(ids_1).subscribe(function (rs) {
                                            if (rs.status === 'success') {
                                                if (data) {
                                                    if (data.input_invoice_mail_id) {
                                                        var ids_2 = [];
                                                        ids_2.push(data.input_invoice_mail_id);
                                                        objData_1 = {
                                                            ids: ids_2,
                                                            error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                                                        };
                                                        _this.invoiceBuyService.notReceived(objData_1).subscribe();
                                                    }
                                                }
                                                if (isInvoiveInMail_1.length > 0) {
                                                    objData_1 = {
                                                        ids: idsEmail_1,
                                                        error_reason: "Người dùng đã xóa hóa đơn từ danh sách hóa đơn đầu vào",
                                                    };
                                                    _this.invoiceBuyService.notReceived(objData_1).subscribe();
                                                }
                                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                                _this.loadList();
                                            }
                                            else {
                                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                                            }
                                        }, function (err) {
                                        }, function () {
                                            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                                        });
                                    }
                                });
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Không được xóa hóa đơn từ phần mềm ihoadon', 'error');
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ListInvoiceComponent.prototype.customizeText = function (e) {
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = '0';
        if (e && e.value) {
            var _arr = e.value.split('&');
            if (_arr.length > 1) {
                // totalMoney = "TTHĐ bán ra:" + '\n' + formatter.format(parseFloat(_arr[0] || "0"));
                totalMoney = formatter.format(parseFloat(_arr[0] || '0'));
                // if (_arr[1] != "")
                //   totalMoney += '\n' + "TTHĐ giảm trừ:" + '\n' + formatter.format(parseFloat(_arr[1] || "0"));
            }
        }
        return totalMoney;
    };
    ListInvoiceComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 0) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            var checkDaXuat = this.selectedItems.filter(function (item) {
                return item.status === 'DA_XUAT';
            });
            if (checks.length === this.selectedItems.length && checkDaXuat.length === 0) {
                this.disEditMulti = false;
            }
        }
    };
    ListInvoiceComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.invoice_number) {
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
    ListInvoiceComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        var ref = {};
        if (params) {
            var data = params;
            if (data.search('search_date') !== -1) {
                data = data.replace(/search_date/gi, 'invoice_date');
            }
            if (data.search('customer_name') !== -1) {
                data = data.replace(/customer_name/gi, 'seller_legal_name');
            }
            if (data.search('buyer_tax_code') !== -1) {
                data = data.replace(/buyer_tax_code/gi, 'seller_tax_code');
            }
            if (data.search('invoice_products.product_name') !== -1) {
                data = data.replace(/invoice_products.product_name/gi, 'input_invoice_products.product_name');
            }
            if (data.search('approve_status') !== -1) {
                data = data.replace(/approve_status/gi, 'export_from_ihd');
            }
            var valueParam = data;
            this.paramsExportData = valueParam;
            this.dataSource.store = this.invoiceBuyService.getAll(valueParam);
        }
        else {
            this.dataSource.store = this.invoiceBuyService.getAll();
        }
    };
    ListInvoiceComponent.prototype.view = function (data) {
        var _this = this;
        var row = data ? data : this.selectedItems[0];
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var sub = this.invoiceBuyService.getInvoiceBuy(row.id).subscribe(function (res) {
            if (res.status === 'success') {
                var fileData_1 = [];
                var obj = new Object;
                obj["id"] = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid();
                obj["file_name"] = "ihoadon_efyvietnam_9710";
                obj["file_server_id"] = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid();
                obj["input_invoice_id"] = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid();
                fileData_1.push(obj);
                _this.frmData = res.data.input_invoice;
                var lstFile = res.data.input_invoice.input_invoice_files;
                if (lstFile != null && lstFile.length > 0) {
                    lstFile.forEach(function (item) {
                        if (!item.file_name.includes('.xml'))
                            fileData_1.push(item);
                    });
                }
                var ids = [];
                ids.push(row.id);
                var initialState = {
                    items: fileData_1,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].typeCode.hoa_don_mua_vao_khac,
                    frmData: _this.frmData,
                    fileData: lstFile
                };
                if (row.export_from_ihd == "1") {
                    initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].typeCode.hoa_don_mua_vao_efy,
                        frmData: _this.frmData,
                        fileData: fileData_1
                    };
                }
                if (data.export_from_tct == '1') {
                    initialState = {
                        items: fileData_1,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_12__["sEnum"].typeCode.hoa_don_mua_vao_khac,
                        frmData: _this.frmData,
                        fileData: lstFile,
                    };
                }
                _this.bsModalRef = _this.modalImportService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceMultipageComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-xl view-invoice',
                    initialState: initialState
                });
                var subModal_1 = _this.modalImportService.onHide.subscribe(function () {
                    subModal_1.unsubscribe();
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error');
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    ListInvoiceComponent.prototype.setUrlNavigate = function () {
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
    ListInvoiceComponent.prototype.search = function (data) {
        if (data.export_from_ihd == '1') {
            var win = window.open('https://ihoadon.vn/kiem-tra/?shd=' + data.invoice_number + "&mtc=" + data.lookup_code, '_blank');
            win.focus();
        }
        else {
            if (data.lookup_link) {
                var win = window.open(data.lookup_link, '_blank');
                win.focus();
            }
            else
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Hóa đơn chưa nhập link tra cứu. Vui lòng kiểm tra lại", 'error');
        }
    };
    ListInvoiceComponent.prototype.checkInvoiceTCT = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var data = {};
        if (this.selectedItems.length > 0) {
            var data_1 = [];
            this.selectedItems.forEach(function (item) {
                data_1.push(_this.invoiceBuyService.checkInputInvoiceTct({ id: item.id ? item.id : null }));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])(data_1).subscribe(function (result) {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Kiểm tra thành công", 'success');
                _this.loadList(_this.paramSearch);
                _this.dataGrid.instance.clearSelection();
            }, function (error) {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error');
            }, function () {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng chọn hóa đơn", 'error');
        }
    };
    ListInvoiceComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains"; //Helper.multilfilterColumn;
        return [["invoice_series", selectedFilterOperation || '=', filterValue], 'or', ["template_code", selectedFilterOperation || '=', filterValue]];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuComponent"])
    ], ListInvoiceComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], ListInvoiceComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListInvoiceComponent.prototype, "isHasPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], ListInvoiceComponent.prototype, "expandMenu", void 0);
    ListInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-invoice',
            template: __webpack_require__(/*! ./list-invoice.component.html */ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.html"),
            styles: [__webpack_require__(/*! ./list-invoice.component.scss */ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceBuyService"],
            _core_index__WEBPACK_IMPORTED_MODULE_12__["SocketService"]])
    ], ListInvoiceComponent);
    return ListInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vertical-split-pane primary-component-minsize=\"580\" secondary-component-minsize=\"500\"\r\n    primary-component-initialratio=\"0.45\">\r\n    <div class=\"split-pane-content-primary\">\r\n        <div style=\"display: flex; justify-content: space-between; align-items: center; padding-bottom: 5px;\">\r\n            <dx-check-box class=\"check-box\" (onOptionChanged)=\"handlePropertyChange($event)\"></dx-check-box>\r\n            <app-search-mail style=\"flex: 1;\" (searchContentChange)=\"getSearch($event)\" (selectMail)=\"getMail($event)\"\r\n                [isMailReceived]=\"isMailReceived\" (isMail)=\"isMail($event)\" [isSelected]=\"isSelected\"></app-search-mail>\r\n            <div style=\"display: flex; align-items: center;\" *ngIf=\"this.isMailReceived.listDelete\">\r\n                <button class=\"blue-btn\" *ngIf=\"!isSelected\" (click)=\"convertToPullMail()\"> <img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/get_email.svg\" alt=\"\">Lấy email</button>\r\n                <button class=\"blue-btn\" *ngIf=\"isSelected\" (click)=\"nhanHoaDon()\" [ngClass]=\"this.receivedBtn\"><img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/yes.svg\" alt=\"\"> Nhận\r\n                    HĐ</button>\r\n                <button class=\"blue-btn\" *ngIf=\"isSelected\" (click)=\"noReceived()\" [ngClass]=\"this.noReceivedBtn\"> <img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/no.svg\" alt=\"\">Không\r\n                    nhận HĐ</button>\r\n                <button class=\"red-btn\" *ngIf=\"isSelected\" [ngClass] = \"deleteBtn\"> <img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/delete.svg\" alt=\"\"\r\n                        (click)=\"deleteMail()\"></button>\r\n            </div>\r\n            <div style=\"display: flex; align-items: center;\" *ngIf=\"!this.isMailReceived.listDelete\">\r\n                <button class=\"blue-btn\" *ngIf=\"isSelected\" (click)=\"restore()\"> <img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/restore.svg\" alt=\"\">Khôi phục</button>\r\n                <button class=\"red-btn\" *ngIf=\"isSelected\"> <img\r\n                        src=\"../../../../../assets/img/icons/invoice-buy/delete.svg\" alt=\"\"\r\n                        (click)=\"deleteMail()\" [ngClass] = \"deleteBtn\"></button>\r\n            </div>\r\n        </div>\r\n        <dx-data-grid id=\"gridContainerVat\" [dataSource]=\"dataSource\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n            [showBorders]=\"true\" [showRowLines]=\"true\" [showColumnLines]=\"false\" [allowColumnResizing]=\"true\"\r\n            (onSelectionChanged)=\"selectionChanged($event)\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n            [showColumnHeaders]=\"false\" [(selectedRowKeys)]=\"selectedRows\">\r\n            <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n            <dxo-sorting mode=\"single\"></dxo-sorting>\r\n            <dxo-selection mode=\"multiple\"></dxo-selection>\r\n            <dxi-column cellTemplate=\"content-mail\" dataField=\"invoice_number\"></dxi-column>\r\n            <div *dxTemplate=\"let d of 'content-mail'\">\r\n                <div class=\"content-table\">\r\n                    <div class=\"content-email\">\r\n                        <div style=\"display:flex; align-items: center;\">\r\n                            <span class=\"name\">{{d.data.sender_name}}</span>\r\n                            <span title=\"{{d.data.subject}}\" class=\"title\">{{d.data.subject}}</span>\r\n                        </div>\r\n                        <div class=\"btn-container\">\r\n                            <button class=\"btn-action\" [ngClass]=\"d.data.status\"><a title=\"{{d.data.error_reason}}\"\r\n                                    style=\"text-decoration: none; color: black;\">{{d.data.status |\r\n                                    diaryType}}</a></button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"action-container\">\r\n                        <div class=\"action-icon\" *ngIf=\"this.isMailReceived.listDelete\">\r\n                            <a title=\"{{_translate.CONTROLL.BUTTON.receive_bill}}\" href=\"javascript:void(0)\"\r\n                                (click)=\"nhanHoaDon(d.data)\" *ngIf=\"d.data.status !== 'HOP_LE'\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/nhan_hd.svg\" alt=\"\">\r\n                            </a>\r\n                            <a title=\"{{_translate.CONTROLL.BUTTON.no_receipt}}\" href=\"javascript:void(0)\"\r\n                                *ngIf=\"d.data.status !== 'KHONG_HOP_LE'\" (click)=\"noReceived(d.data.id)\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/khong_nhan_hd.svg\" alt=\"\">\r\n                            </a>\r\n                            <!-- <a title=\"{{_translate.CONTROLL.BUTTON.forward}}\" href=\"javascript:void(0)\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/share.svg\" alt=\"\">\r\n                            </a> -->\r\n                            <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" href=\"javascript:void(0)\"\r\n                                (click)=\"deleteMail(d.data.id)\" *ngIf=\"d.data.status !== 'HOP_LE'\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/delete-1.svg\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"action-icon\" *ngIf=\"!this.isMailReceived.listDelete\">\r\n                            <a title=\"{{_translate.CONTROLL.BUTTON.restore}}\" href=\"javascript:void(0)\"\r\n                                (click)=\"restore(d.data.id)\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/restore-1.svg\" alt=\"\">\r\n                            </a>\r\n                            <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" href=\"javascript:void(0)\"\r\n                                (click)=\"deleteMail(d.data.id)\">\r\n                                <img src=\"../../../../../assets/img/icons/invoice-buy/delete-1.svg\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <span>{{d.data.send_date | date: 'dd/MM/yyyy'}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\">\r\n            </dxo-remote-operations>\r\n            <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n            <dxo-pager [visible]=\"true\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n                [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page_strong}}\" displayMode=\"compact\">\r\n            </dxo-pager>\r\n        </dx-data-grid>\r\n        <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n            <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n        </ngx-spinner>\r\n\r\n    </div>\r\n    <div class=\"split-pane-content-secondary\">\r\n        <div class=\"right\">\r\n            <div class=\"email-review-none\" *ngIf=\"!is_preview\">\r\n                <img src=\"../../../../../assets/img/icons/invoice-buy/empty_box.png\" alt=\"\">\r\n                <span>Không có nội dung</span>\r\n            </div>\r\n            <app-preview-mail *ngIf=\"is_preview\" class=\"email-preview\" [previewEmmail]=\"previewEmmail\"\r\n                [isMailReceived]=\"isMailReceived\" (myDropdown)=\"myDropdown($event)\">\r\n            </app-preview-mail>\r\n        </div>\r\n    </div>\r\n</vertical-split-pane>\r\n<dx-popup class=\"popup\" [width]=\"550\" [height]=\"195\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n    [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n    [(visible)]=\"isShowProgressBar\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <div style=\"height: 30px;\">\r\n            <dx-progress-bar (onContentReady)=\"styleProgressBar($event)\" [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\"\r\n                [statusFormat]=\"formata\">\r\n            </dx-progress-bar>\r\n        </div>\r\n    </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check-box{margin-left:14px}.blue-btn{background-color:#2680eb;color:white;padding:7px 13px;border-radius:3px;border:none;outline:none;font-weight:500;display:flex;align-items:center;font-size:13px;font-family:'Roboto';margin-left:10px}.blue-btn img{padding-right:8px}.disabled-btn{cursor:not-allowed;pointer-events:none;background-color:#AFD3FB}.none-delete{background-color:#fd9e9e !important;cursor:not-allowed;pointer-events:none}.red-btn{background-color:red;color:white;border-radius:5px;padding:7px;border:none;display:flex;align-items:center;font-weight:500;font-size:13px;font-family:'Roboto';margin-left:10px}.split-pane-content-secondary{height:100%}.right{height:100%;width:100%;display:flex}.right .email-review-none{display:flex;flex:1;align-items:center;justify-content:center;flex-direction:column;width:100vh}.right .email-review-none img{width:174px}.right .email-review-none span{font-size:13px;padding-top:15px;color:gray}.right .email-preview{width:100%}#gridContainerVat{width:100%;height:calc(100vh - 229px)}.content-table{display:flex;justify-content:space-between;height:100%}.content-table .content-email{display:flex;flex-direction:column;justify-content:space-between;flex:1;height:100%;width:77%}.content-table .content-email .btn-container .btn-action{padding:3px 9px;font-size:12px;border:none;border-radius:5px;font-weight:600;border-radius:10px;margin-top:9px}.content-table .content-email .name{font-size:13px;font-weight:bold;margin-right:10px}.content-table .content-email .title{width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:black;text-decoration:none}.content-table .action-container{display:flex;justify-content:space-between;flex-direction:column;height:auto;align-items:flex-end;min-width:100px}.content-table .action-container .action-icon{display:flex}.content-table .action-container .action-icon img{padding-left:10px}.KHONG_HOP_LE{background:#ffab91}.CHUA_NHAN{background:#ffe082}.HOP_LE{background:#a5d6a7}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListMailReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMailReceivedComponent", function() { return ListMailReceivedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListMailReceivedComponent = /** @class */ (function () {
    function ListMailReceivedComponent(authService, translate, invoiceBuyService, spinner, router) {
        this.authService = authService;
        this.translate = translate;
        this.invoiceBuyService = invoiceBuyService;
        this.spinner = spinner;
        this.router = router;
        this.dataSource = {};
        this.isSelected = false;
        this.showPopupImport = false;
        this.valueProgress = 0;
        this.selectedRows = [];
        this.isShowButtonPanel = false;
        this.checkBoxValue = false;
        this.isShowProgressBar = false;
        this.listMailCount = 0;
        this.countInvoice = 0;
        this.is_preview = false;
        this.listMail = [];
        this.selectedItems = [];
        this.currentMail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageN = 'compact';
        this.formata = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ListMailReceivedComponent.prototype.ngOnInit = function () {
    };
    ListMailReceivedComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        this.dataSource.store = this.invoiceBuyService.getALlEmail(params);
    };
    ListMailReceivedComponent.prototype.getSearch = function (e) {
        this.loadList(e);
        this.search = e;
    };
    ListMailReceivedComponent.prototype.isMail = function (e) {
        this.isMails = e;
    };
    ListMailReceivedComponent.prototype.onRowPrepared = function (e) {
    };
    ListMailReceivedComponent.prototype.styleProgressBar = function (e) {
    };
    ListMailReceivedComponent.prototype.myDropdown = function (e) {
        var _this = this;
        if (e.isTrue) {
            this.loadList(this.search);
            this.loadPreviewMail(e.idMail);
            setTimeout(function () {
                _this.newData = _this.dataGrid.instance.getSelectedRowsData();
            }, 1000);
            setTimeout(function () {
                switch (e.action) {
                    case "khong_nhan_hd":
                        _this.noReceivedBtn = "disabled-btn";
                        _this.receivedBtn = "";
                        _this.deleteBtn = "";
                        break;
                    case "nhan_hd":
                        if (_this.newData[0].status === 'KHONG_HOP_LE') {
                            _this.noReceivedBtn = "disabled-btn";
                            _this.receivedBtn = "";
                            _this.deleteBtn = "";
                        }
                        else {
                            _this.noReceivedBtn = "";
                            _this.receivedBtn = "disabled-btn";
                            _this.deleteBtn = "none-delete";
                        }
                        break;
                    case "":
                        break;
                    case "":
                        break;
                }
            }, 1100);
        }
    };
    ListMailReceivedComponent.prototype.loadPreviewMail = function (id) {
        var _this = this;
        var filter = "&filter_groups[1][filters][0][key]=id\n    &filter_groups[1][filters][0][value]=" + id + "\n    &filter_groups[1][filters][0][operator]=eq&";
        this.invoiceBuyService.getEmailPreview(filter).subscribe(function (res) {
            if (res.status == "success") {
                _this.previewEmmail = res.data.input_invoice_mails[0];
                _this.is_preview = true;
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
        });
    };
    ListMailReceivedComponent.prototype.handlePropertyChange = function (e) {
        if (e.value) {
            this.dataGrid.instance.selectAll();
        }
        else {
            this.dataGrid.instance.clearSelection();
        }
    };
    ListMailReceivedComponent.prototype.selectionChanged = function (e) {
        this.selectedItems = e.selectedRowsData;
        if (e.selectedRowsData.length > 0) {
            this.isSelected = true;
            var KHONG_HOP_LE = this.selectedItems.filter(function (item) { return item.status == 'KHONG_HOP_LE'; });
            var HOP_LE = this.selectedItems.filter(function (item) { return item.status == 'HOP_LE'; });
            if (e.selectedRowsData.length === 1) {
                var id = e.selectedRowsData[0].id;
                this.loadPreviewMail(id);
                if (KHONG_HOP_LE.length > 0) {
                    this.noReceivedBtn = "disabled-btn";
                }
                else {
                    this.noReceivedBtn = "";
                }
                if (HOP_LE.length > 0) {
                    this.receivedBtn = "disabled-btn";
                    this.deleteBtn = "none-delete";
                }
                else {
                    this.receivedBtn = "";
                    this.deleteBtn = "";
                }
            }
            else {
                this.is_preview = false;
                if (KHONG_HOP_LE.length > 0) {
                    this.noReceivedBtn = "disabled-btn";
                }
                else {
                    this.noReceivedBtn = "";
                }
                if (HOP_LE.length > 0) {
                    this.receivedBtn = "disabled-btn";
                    this.deleteBtn = "none-delete";
                }
                else {
                    this.receivedBtn = "";
                    this.deleteBtn = "";
                }
            }
        }
        else {
            this.is_preview = false;
            this.isSelected = false;
        }
    };
    ListMailReceivedComponent.prototype.getMail = function (e) {
        var _this = this;
        this.mailID = e;
        var filter = "&filter_groups[1][filters][0][key]=id\n      &filter_groups[1][filters][0][value]=" + this.mailID + "\n      &filter_groups[1][filters][0][operator]=eq&";
        this.invoiceBuyService.getEmailAccount(filter).subscribe(function (res) {
            _this.mailStatus = res.data.config_mails[0].status;
        });
        this.currentMail.emit(e);
    };
    ListMailReceivedComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ListMailReceivedComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100) {
            r = confirm("Cảnh báo: Quá trình nạp dữ liệu sẽ dừng lại nếu bạn đóng cửa sổ này");
        }
        if (r) {
            if (this.subPullMail) {
                this.subPullMail.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    ListMailReceivedComponent.prototype.pullMail = function () {
        var _this = this;
        this.isShowProgressBar = true;
        var percentComplete = 100 / this.valueProgressMax;
        this.subPullMail = this.invoiceBuyService.pullMailByUid(this.listMail[this.countInvoice]).subscribe(function (res) {
            if (res.status == 'success') {
                _this.valueProgress += percentComplete;
                if (_this.countInvoice < _this.valueProgressMax - 1) {
                    _this.countInvoice++;
                    _this.pullMail();
                }
                else if (_this.countInvoice == _this.valueProgressMax - 1) {
                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tải thành công", "success");
                    _this.isShowProgressBar = false;
                    _this.loadList(_this.search);
                }
            }
            else {
                _this.isShowProgressBar = false;
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, "error");
            }
            // else {
            //   this.valueProgress = this.countInvoice;
            //   Library.notify(res.message, 'error')
            //   if (this.countInvoice < this.listMailCount) {
            //     this.isShowButtonPanel = true;
            //     this.countInvoice++;
            //   } else if (this.countInvoice == this.listMailCount) {
            //     this.isShowButtonPanel = false;
            //     Library.notify("Quá trình tải hoàn tất", "success");
            //     this.subPullMail.unsubscribe();
            //   }
            // }
        });
    };
    ListMailReceivedComponent.prototype.convertToPullMail = function () {
        var _this = this;
        if (this.isMails) {
            if (this.mailStatus == '1') {
                var mail = {
                    config_mail_id: this.mailID
                };
                this.spinner.show();
                this.invoiceBuyService.getUidMail(mail).subscribe(function (res) {
                    if (res.status == "success") {
                        var listMailArray_1 = [];
                        var isEmpty = Object.keys(res.data);
                        if (isEmpty.length > 0) {
                            _this.data = res.data;
                            var arrData = Object.keys(_this.data);
                            arrData.forEach(function (element) {
                                var fieldName = element;
                                var arrUid = _this.data[fieldName];
                                arrUid.forEach(function (item) {
                                    var ojb = {
                                        config_mail_id: _this.mailID,
                                        uid: item,
                                        folder: fieldName
                                    };
                                    listMailArray_1.push(ojb);
                                });
                            });
                            _this.listMail = listMailArray_1;
                            _this.valueProgressMax = listMailArray_1.length;
                            _this.spinner.hide();
                            _this.pullMail();
                        }
                        else {
                            _this.spinner.hide();
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Không có thư mới', 'error');
                        }
                    }
                    else {
                        _this.spinner.hide();
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, "error");
                    }
                });
            }
            else {
                this.spinner.hide();
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.email_notify, "error");
            }
        }
        else {
            var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.email_config, this._translate.NOTIFY.email_config);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                    _this.router.navigate(['system/configs', { type: 'mail' }]);
                }
            });
        }
    };
    ListMailReceivedComponent.prototype.deleteMail = function (id) {
        var _this = this;
        var deleteItem = this.dataGrid.instance.getSelectedRowsData();
        var arrId = [];
        var ojb = {};
        if (id) {
            arrId.push(id);
            if (this.isMailReceived.listDelete) {
                ojb = {
                    "soft_del": true,
                    "ids": arrId
                };
            }
            else {
                ojb = {
                    "soft_del": false,
                    "ids": arrId
                };
            }
            var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                    _this.invoiceBuyService.deleteMailId(ojb).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                            _this.loadList(_this.search);
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                    });
                }
            });
        }
        else {
            for (var i = 0; i < deleteItem.length; i++) {
                arrId.push(deleteItem[i].id);
            }
            if (this.isMailReceived.listDelete) {
                ojb = {
                    "soft_del": true,
                    "ids": arrId
                };
            }
            else {
                ojb = {
                    "soft_del": false,
                    "ids": arrId
                };
            }
            if (deleteItem.length === 0) {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
            else {
                var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                        _this.invoiceBuyService.deleteMailId(ojb).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.loadList(_this.search);
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                        });
                    }
                });
            }
        }
    };
    ListMailReceivedComponent.prototype.noReceived = function (id) {
        var _this = this;
        if (id) {
            var arrId_1 = [];
            arrId_1.push(id);
            var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.definitely_do_not_receive, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                    var obj = {
                        ids: arrId_1,
                        error_reason: "Người dùng đã chuyển trạng thái email thành không hợp lệ",
                    };
                    _this.invoiceBuyService.notReceived(obj).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.finish, 'success');
                            _this.noReceivedBtn = "disabled-btn";
                            _this.receivedBtn = "";
                            _this.deleteBtn = "";
                            _this.loadList(_this.search);
                            _this.loadPreviewMail(arrId_1[0]);
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                    });
                }
            });
        }
        else {
            var deleteItem = this.dataGrid.instance.getSelectedRowsData();
            var arrId_2 = [];
            for (var i = 0; i < deleteItem.length; i++) {
                arrId_2.push(deleteItem[i].id);
            }
            if (deleteItem.length === 0) {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Chưa bản ghi nào được chọn', 'error');
            }
            else {
                var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.definitely_do_not_receive, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                        var obj = {
                            ids: arrId_2,
                            error_reason: "Người dùng đã chuyển trạng thái email thành không hợp lệ",
                        };
                        _this.invoiceBuyService.notReceived(obj).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.finish, 'success');
                                _this.loadList(_this.search);
                                if (arrId_2.length === 1) {
                                    _this.noReceivedBtn = "disabled-btn";
                                    _this.receivedBtn = "";
                                    _this.deleteBtn = "";
                                    _this.loadPreviewMail(arrId_2[0]);
                                }
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                        });
                    }
                });
            }
        }
    };
    ListMailReceivedComponent.prototype.restore = function (id) {
        var _this = this;
        if (id) {
            var arrId_3 = [];
            arrId_3.push(id);
            var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.restore, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                    _this.invoiceBuyService.restore(arrId_3).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.restore, 'success');
                            _this.loadList(_this.search);
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                    });
                }
            });
        }
        else {
            var deleteItem = this.dataGrid.instance.getSelectedRowsData();
            var arrId_4 = [];
            for (var i = 0; i < deleteItem.length; i++) {
                arrId_4.push(deleteItem[i].id);
            }
            if (deleteItem.length === 0) {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
            else {
                var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.restore, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                        _this.invoiceBuyService.restore(arrId_4).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.restore, 'success');
                                _this.loadList(_this.search);
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                        });
                    }
                });
            }
        }
    };
    ListMailReceivedComponent.prototype.nhanHoaDon = function (data) {
        var _this = this;
        if (this.isHasPackage) {
            this.selectedItems = this.dataGrid.instance.getSelectedRowsData();
            if (this.selectedItems.length || data) {
                var result = _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].confirm(this._translate.CONFIRM.would_you_like_to_receive_this_invoice, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        var ids_1 = [];
                        var isKhongNhan = false;
                        if (data) {
                            if (data.status == 'HOP_LE')
                                isKhongNhan = true;
                            else
                                ids_1.push(data.id);
                        }
                        else {
                            var lstThuHopLe = _this.selectedItems.filter(function (p) { return p.status == 'HOP_LE'; });
                            if (lstThuHopLe.length == _this.selectedItems.length)
                                isKhongNhan = true;
                            else {
                                var lstThuKhac = _this.selectedItems.filter(function (p) { return p.status != 'HOP_LE'; });
                                ids_1 = lstThuKhac.map(function (e) { return e.id; });
                            }
                        }
                        if (isKhongNhan) {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.you_cannot_do_this_for_valid_email, 'error');
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                            _this.invoiceBuyService.nhanHoaDon(ids_1).subscribe(function (res) {
                                if (res.status == 'success') {
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.receive_invoice_success, 'success');
                                    _this.loadList(_this.search);
                                    if (ids_1.length === 1) {
                                        setTimeout(function () {
                                            _this.newData = _this.dataGrid.instance.getSelectedRowsData();
                                        }, 1000);
                                        setTimeout(function () {
                                            if (_this.newData[0].status === 'KHONG_HOP_LE') {
                                                _this.noReceivedBtn = "disabled-btn";
                                                _this.receivedBtn = "";
                                                _this.deleteBtn = "";
                                            }
                                            else {
                                                _this.noReceivedBtn = "";
                                                _this.receivedBtn = "disabled-btn";
                                                _this.deleteBtn = "none-delete";
                                            }
                                        }, 1100);
                                        _this.loadPreviewMail(ids_1[0]);
                                    }
                                }
                                else {
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
                                }
                            }, function (err) {
                            }, function () {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                            });
                        }
                    }
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Vui lòng mua gói hóa đơn đầu vào để sử dụng chức năng này", "error");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListMailReceivedComponent.prototype, "isMailReceived", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListMailReceivedComponent.prototype, "isHasPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], ListMailReceivedComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("currentMail"),
        __metadata("design:type", Object)
    ], ListMailReceivedComponent.prototype, "currentMail", void 0);
    ListMailReceivedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-mail-received',
            template: __webpack_require__(/*! ./list-mail-received.component.html */ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.html"),
            styles: [__webpack_require__(/*! ./list-mail-received.component.scss */ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceBuyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ListMailReceivedComponent);
    return ListMailReceivedComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preview-container\">\r\n  <div style=\"display: flex; align-items: center; padding-bottom: 16px;\">\r\n    <h1>{{previewEmmail.subject}}</h1>\r\n    <button\r\n      style=\" padding: 3px 9px;font-size: 12px;border: none;border-radius: 5px;font-weight: 600;border-radius: 10px;\"\r\n      [ngClass]=\"previewEmmail.status\">{{previewEmmail.status | diaryType}}</button>\r\n  </div>\r\n  <div class=\"unit-name\">\r\n    <span class=\"name\">{{previewEmmail.sender_name}}</span>\r\n    <div style=\"display: flex; align-items: center; width: 31%;\">\r\n      <span class=\"time\">{{previewEmmail.send_date | date: 'dd/MM/yyyy hh:mm:ss a'}}</span>\r\n      <div class=\"dropdown\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction()\"\r\n          href=\"javascript:void(0)\" #toggleButton></a>\r\n        <div class=\"dropdown-content\" id=\"myDropdown\" [ngClass]=\"isShow\" *ngIf=\"this.isMailReceived.listDelete\" #menu\r\n          style=\"min-width: 180px !important;box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 20%) !important;\">\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.receive_bill}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\"\r\n            (click)=\"nhanHoaDon()\" *ngIf=\"previewEmmail.status !== 'HOP_LE'\">\r\n            <span>{{_translate.CONTROLL.BUTTON.receive_bill}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/nhan_hd.svg\" alt=\"\">\r\n          </a>\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.no_receipt}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\"\r\n            *ngIf=\"previewEmmail.status !== 'KHONG_HOP_LE'\" (click)=\"noReceived()\">\r\n            <span>{{_translate.CONTROLL.BUTTON.no_receipt}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/khong_nhan_hd.svg\" alt=\"\">\r\n          </a>\r\n          <!-- <a title=\"{{_translate.CONTROLL.BUTTON.forward}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\">\r\n            <span>{{_translate.CONTROLL.BUTTON.forward}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/share.svg\" alt=\"\">\r\n          </a> -->\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\"\r\n            (click)=\"deleteMail()\" *ngIf=\"previewEmmail.status !== 'HOP_LE'\">\r\n            <span>{{_translate.CONTROLL.BUTTON.delete}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/delete-1.svg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n        <div class=\"dropdown-content\" id=\"myDropdown\" *ngIf=\"!this.isMailReceived.listDelete\" [ngClass]=\"isShow\"\r\n          style=\"min-width: 180px !important;box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 20%) !important;\" #menuDelete>\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\"\r\n            (click)=\"restore()\">\r\n            <span>{{_translate.CONTROLL.BUTTON.restore}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/restore-1.svg\" alt=\"\">\r\n          </a>\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" href=\"javascript:void(0)\"\r\n            style=\"display:flex; align-items: center; justify-content: space-between; text-decoration: none; color: black;\"\r\n            (click)=\"deleteMail()\" *ngIf=\"previewEmmail.status !== 'HOP_LE'\">\r\n            <span>{{_translate.CONTROLL.BUTTON.delete}}</span>\r\n            <img src=\"../../../../../assets/img/icons/invoice-buy/delete-1.svg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"file-grid\">\r\n    <div class=\"file\" *ngFor=\"let item of this.file; let i = index\" (click)=\"getInforFile(i)\">\r\n      <div [ngClass]=\"item.classImg\" class=\"img-class\"></div>\r\n      <div class=\"infor\">\r\n        <a title=\"{{item.file_name}}\" class=\"file-name\">{{item.file_name}}</a>\r\n        <span class=\"size\">{{item.size}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"height: calc(100vh - 354px); display: flex; overflow: auto;\">\r\n    <div [innerHTML]=\"htmlResult |safeHtml\">\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-container{display:flex;flex-direction:column;padding:15px;background:white}.preview-container h1{font-size:16px;padding-right:10px;word-wrap:break-word;max-width:80%}.preview-container .unit-name{display:flex;justify-content:space-between;padding-bottom:13px}.preview-container .unit-name .name{font-size:13px;font-weight:bold}.preview-container .unit-name .time{font-size:12px;font-weight:lighter;color:#7f8588}.preview-container .file-grid{display:-ms-grid;display:grid;-ms-grid-columns:auto auto auto;grid-template-columns:auto auto auto;border-top:1px solid #dadce0;border-bottom:1px solid #dadce0;padding:7px;gap:10px;justify-content:flex-start;text-decoration:none;color:black}.preview-container .file-grid .file{display:flex;border:1px solid #dadce0;height:36px;width:154px;margin-left:10px;padding:3px;cursor:pointer}.preview-container .file-grid .file .img-class{width:19px;height:24px}.preview-container .file-grid .file .pdf{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2219.946%22 height%3D%2225.977%22 viewBox%3D%220 0 19.946 25.977%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23e9e9e0%3B%7D.b%7Bfill%3A%23d9d7ca%3B%7D.c%7Bfill%3A%23cc4b4c%3B%7D.d%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg transform%3D%22translate(-6.5)%22%3E%3Cpath class%3D%22a%22 d%3D%22M20.641%2C0H7.179C6.8%2C0%2C6.5.3%2C6.5.893V25.513a.7.7%2C0%2C0%2C0%2C.679.464H25.768a.7.7%2C0%2C0%2C0%2C.679-.464V6.02c0-.323-.043-.427-.119-.5l-5.4-5.4A.41.41%2C0%2C0%2C0%2C20.641%2C0Z%22%2F%3E%3Cpath class%3D%22b%22 d%3D%22M37.5.151v5.5H43Z%22 transform%3D%22translate(-16.62 -0.081)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M18.39%2C19.162h0a.745.745%2C0%2C0%2C1-.449-.151%2C1.112%2C1.112%2C0%2C0%2C1-.517-1.04c.084-.755%2C1.018-1.546%2C2.776-2.351a31.138%2C31.138%2C0%2C0%2C0%2C1.757-4.987c-.463-1.008-.913-2.315-.585-3.081a.89.89%2C0%2C0%2C1%2C.526-.564%2C2.277%2C2.277%2C0%2C0%2C1%2C.471-.08c.234%2C0%2C.439.3.585.487s.447.544-.173%2C3.155a14.822%2C14.822%2C0%2C0%2C0%2C2.36%2C3.508%2C9.024%2C9.024%2C0%2C0%2C1%2C1.558-.166c.726%2C0%2C1.167.169%2C1.346.518a.939.939%2C0%2C0%2C1-.181%2C1%2C1.233%2C1.233%2C0%2C0%2C1-1.03.552%2C3.084%2C3.084%2C0%2C0%2C1-1.953-1.06%2C22.226%2C22.226%2C0%2C0%2C0-4.1%2C1.309%2C13.161%2C13.161%2C0%2C0%2C1-1.105%2C1.972C19.206%2C18.851%2C18.8%2C19.162%2C18.39%2C19.162Zm1.235-2.378c-.991.557-1.4%2C1.015-1.425%2C1.273%2C0%2C.043-.017.155.2.321C18.47%2C18.356%2C18.873%2C18.172%2C19.625%2C16.784Zm6.326-2.06c.378.291.47.438.718.438a.7.7%2C0%2C0%2C0%2C.561-.2.734.734%2C0%2C0%2C0%2C.107-.193c-.057-.03-.133-.091-.545-.091A6.783%2C6.783%2C0%2C0%2C0%2C25.951%2C14.723ZM22.486%2C11.67a33.071%2C33.071%2C0%2C0%2C1-1.24%2C3.509%2C23.177%2C23.177%2C0%2C0%2C1%2C3.013-.937A15.879%2C15.879%2C0%2C0%2C1%2C22.486%2C11.67ZM22.2%2C7.745a1.112%2C1.112%2C0%2C0%2C0%2C.045%2C1.492C22.689%2C8.256%2C22.224%2C7.738%2C22.2%2C7.745Z%22 transform%3D%22translate(-5.854 -3.704)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M25.768%2C46.886H7.179a.679.679%2C0%2C0%2C1-.679-.679V39H26.446v7.207A.679.679%2C0%2C0%2C1%2C25.768%2C46.886Z%22 transform%3D%22translate(0 -20.909)%22%2F%3E%3Cg transform%3D%22translate(10.788 19.911)%22%3E%3Cpath class%3D%22d%22 d%3D%22M16.505%2C47.6h-.761V42.924h1.344a1.887%2C1.887%2C0%2C0%2C1%2C.59.1%2C1.6%2C1.6%2C0%2C0%2C1%2C.523.285%2C1.49%2C1.49%2C0%2C0%2C1%2C.374.46%2C1.274%2C1.274%2C0%2C0%2C1%2C.143.606%2C1.657%2C1.657%2C0%2C0%2C1-.121.644%2C1.345%2C1.345%2C0%2C0%2C1-.336.485%2C1.515%2C1.515%2C0%2C0%2C1-.52.3%2C2%2C2%2C0%2C0%2C1-.672.108H16.5V47.6Zm0-4.1v1.852h.7a.829.829%2C0%2C0%2C0%2C.276-.048.7.7%2C0%2C0%2C0%2C.25-.155.76.76%2C0%2C0%2C0%2C.184-.3%2C1.426%2C1.426%2C0%2C0%2C0%2C.07-.479%2C1.3%2C1.3%2C0%2C0%2C0-.032-.263.759.759%2C0%2C0%2C0-.13-.285.769.769%2C0%2C0%2C0-.276-.228%2C1.025%2C1.025%2C0%2C0%2C0-.469-.092h-.571Z%22 transform%3D%22translate(-15.744 -42.924)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M27.858%2C45.131a3.434%2C3.434%2C0%2C0%2C1-.124.986%2C2.452%2C2.452%2C0%2C0%2C1-.314.685%2C1.613%2C1.613%2C0%2C0%2C1-.428.435%2C2.148%2C2.148%2C0%2C0%2C1-.46.238%2C1.9%2C1.9%2C0%2C0%2C1-.406.1%2C2.7%2C2.7%2C0%2C0%2C1-.273.021H24.084V42.924h1.408a2.675%2C2.675%2C0%2C0%2C1%2C1.037.187%2C2.153%2C2.153%2C0%2C0%2C1%2C.742.5%2C2.043%2C2.043%2C0%2C0%2C1%2C.441.707A2.341%2C2.341%2C0%2C0%2C1%2C27.858%2C45.131ZM25.6%2C47.04a1.26%2C1.26%2C0%2C0%2C0%2C1.116-.494%2C2.51%2C2.51%2C0%2C0%2C0%2C.342-1.433%2C2.427%2C2.427%2C0%2C0%2C0-.07-.577%2C1.235%2C1.235%2C0%2C0%2C0-.27-.517%2C1.422%2C1.422%2C0%2C0%2C0-.542-.374%2C2.335%2C2.335%2C0%2C0%2C0-.888-.143h-.444V47.04Z%22 transform%3D%22translate(-20.215 -42.924)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M35.372%2C43.5v1.471h1.953v.52H35.372V47.6H34.6V42.924h2.923V43.5Z%22 transform%3D%22translate(-25.852 -42.924)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .docx{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2219.95%22 height%3D%2225.982%22 viewBox%3D%220 0 19.95 25.982%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23e9e9e0%3Bopacity%3A0.55%3B%7D.b%7Bfill%3A%23d9d7ca%3Bopacity%3A0.5%3B%7D.c%7Bfill%3A%232b579a%3B%7D.d%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg transform%3D%22translate(-475 -295)%22%3E%3Cpath class%3D%22a%22 d%3D%22M20.644%2C0H7.179C6.8%2C0%2C6.5.3%2C6.5.894V25.517a.7.7%2C0%2C0%2C0%2C.679.464H25.771a.7.7%2C0%2C0%2C0%2C.679-.464V6.021c0-.323-.043-.427-.119-.5l-5.4-5.4A.41.41%2C0%2C0%2C0%2C20.644%2C0Z%22 transform%3D%22translate(468.5 295)%22%2F%3E%3Cpath class%3D%22b%22 d%3D%22M37.5.151v5.5H43Z%22 transform%3D%22translate(451.882 294.919)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M14.748%2C11.928H11.964a.464.464%2C0%2C0%2C1%2C0-.928h2.784a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(465.82 289.104)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M16.14%2C16.928H11.964a.464.464%2C0%2C0%2C1%2C0-.928H16.14a.464.464%2C0%2C0%2C1%2C0%2C.928Z%22 transform%3D%22translate(465.82 286.423)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M24.964%2C16.935a.459.459%2C0%2C1%2C1%2C.329-.135A.488.488%2C0%2C0%2C1%2C24.964%2C16.935Z%22 transform%3D%22translate(458.851 286.416)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M32.676%2C16.928H28.964a.464.464%2C0%2C0%2C1%2C0-.928h3.712a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(456.707 286.423)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M11.964%2C31.935a.465.465%2C0%2C1%2C1%2C.329-.793.479.479%2C0%2C0%2C1%2C.135.329.459.459%2C0%2C0%2C1-.464.464Z%22 transform%3D%22translate(465.82 278.377)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M19.676%2C31.928H15.964a.464.464%2C0%2C0%2C1%2C0-.928h3.712a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(463.676 278.382)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M41.892%2C16.928h-.928a.464.464%2C0%2C0%2C1%2C0-.928h.928a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(450.274 286.423)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M22.171%2C21.928H11.964a.464.464%2C0%2C0%2C1%2C0-.928H22.171a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(465.82 283.743)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M39.748%2C21.928H36.964a.464.464%2C0%2C0%2C1%2C0-.928h2.784a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(452.419 283.743)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M13.82%2C26.928H11.964a.464.464%2C0%2C0%2C1%2C0-.928H13.82a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(465.82 281.063)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M24.6%2C26.928h-4.64a.464.464%2C0%2C1%2C1%2C0-.928H24.6a.464.464%2C0%2C1%2C1%2C0%2C.928Z%22 transform%3D%22translate(461.531 281.063)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M38.14%2C26.928H33.964a.464.464%2C0%2C1%2C1%2C0-.928H38.14a.464.464%2C0%2C0%2C1%2C0%2C.928Z%22 transform%3D%22translate(454.027 281.063)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M25.771%2C46.887H7.179a.679.679%2C0%2C0%2C1-.679-.679V39H26.45v7.208A.679.679%2C0%2C0%2C1%2C25.771%2C46.887Z%22 transform%3D%22translate(468.5 274.095)%22%2F%3E%3Cg transform%3D%22translate(476.744 314.839)%22%3E%3Cpath class%3D%22d%22 d%3D%22M19.14%2C45.131a3.434%2C3.434%2C0%2C0%2C1-.124.986%2C2.452%2C2.452%2C0%2C0%2C1-.314.685%2C1.613%2C1.613%2C0%2C0%2C1-.428.435%2C2.148%2C2.148%2C0%2C0%2C1-.46.238%2C1.9%2C1.9%2C0%2C0%2C1-.406.1%2C2.707%2C2.707%2C0%2C0%2C1-.272.021h-1.77V42.924h1.408a2.675%2C2.675%2C0%2C0%2C1%2C1.037.187%2C2.153%2C2.153%2C0%2C0%2C1%2C.742.5%2C2.043%2C2.043%2C0%2C0%2C1%2C.441.707A2.342%2C2.342%2C0%2C0%2C1%2C19.14%2C45.131Zm-2.258%2C1.909A1.26%2C1.26%2C0%2C0%2C0%2C18%2C46.546a2.511%2C2.511%2C0%2C0%2C0%2C.342-1.434%2C2.428%2C2.428%2C0%2C0%2C0-.07-.577%2C1.235%2C1.235%2C0%2C0%2C0-.27-.517%2C1.423%2C1.423%2C0%2C0%2C0-.542-.374%2C2.335%2C2.335%2C0%2C0%2C0-.888-.143h-.444v3.539h.755Z%22 transform%3D%22translate(-15.366 -42.848)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M28.975%2C45.151a3.312%2C3.312%2C0%2C0%2C1-.149%2C1.04%2C2.121%2C2.121%2C0%2C0%2C1-.412.748%2C1.726%2C1.726%2C0%2C0%2C1-.615.451%2C2.027%2C2.027%2C0%2C0%2C1-1.541%2C0%2C1.726%2C1.726%2C0%2C0%2C1-.615-.451%2C2.125%2C2.125%2C0%2C0%2C1-.412-.748%2C3.7%2C3.7%2C0%2C0%2C1%2C0-2.077%2C2.115%2C2.115%2C0%2C0%2C1%2C.412-.745%2C1.763%2C1.763%2C0%2C0%2C1%2C.615-.454%2C1.988%2C1.988%2C0%2C0%2C1%2C1.541%2C0%2C1.763%2C1.763%2C0%2C0%2C1%2C.615.454%2C2.138%2C2.138%2C0%2C0%2C1%2C.412.745A3.294%2C3.294%2C0%2C0%2C1%2C28.975%2C45.151Zm-1.967%2C1.77a1.117%2C1.117%2C0%2C0%2C0%2C.447-.092%2C1%2C1%2C0%2C0%2C0%2C.38-.3%2C1.524%2C1.524%2C0%2C0%2C0%2C.263-.549%2C3.3%2C3.3%2C0%2C0%2C0%2C.1-.828%2C3.236%2C3.236%2C0%2C0%2C0-.1-.809%2C1.623%2C1.623%2C0%2C0%2C0-.254-.549.978.978%2C0%2C0%2C0-.368-.311%2C1.022%2C1.022%2C0%2C0%2C0-.435-.1%2C1.145%2C1.145%2C0%2C0%2C0-.447.089.958.958%2C0%2C0%2C0-.38.3%2C1.551%2C1.551%2C0%2C0%2C0-.263.549%2C3.237%2C3.237%2C0%2C0%2C0-.1.824%2C3.278%2C3.278%2C0%2C0%2C0%2C.1.812%2C1.59%2C1.59%2C0%2C0%2C0%2C.254.549%2C1.017%2C1.017%2C0%2C0%2C0%2C.368.311A1%2C1%2C0%2C0%2C0%2C27.009%2C46.921Z%22 transform%3D%22translate(-20.574 -42.76)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M38.855%2C47.035a1.73%2C1.73%2C0%2C0%2C1-.59.38%2C1.954%2C1.954%2C0%2C0%2C1-.71.127%2C1.918%2C1.918%2C0%2C0%2C1-.771-.152%2C1.726%2C1.726%2C0%2C0%2C1-.615-.451%2C2.125%2C2.125%2C0%2C0%2C1-.412-.748%2C3.7%2C3.7%2C0%2C0%2C1%2C0-2.077%2C2.115%2C2.115%2C0%2C0%2C1%2C.412-.745%2C1.754%2C1.754%2C0%2C0%2C1%2C.618-.454%2C1.888%2C1.888%2C0%2C0%2C1%2C.767-.155%2C1.964%2C1.964%2C0%2C0%2C1%2C.71.127%2C1.733%2C1.733%2C0%2C0%2C1%2C.59.38l-.527.47a.962.962%2C0%2C0%2C0-.352-.266%2C1.021%2C1.021%2C0%2C0%2C0-.4-.083%2C1.145%2C1.145%2C0%2C0%2C0-.447.089.958.958%2C0%2C0%2C0-.38.3%2C1.551%2C1.551%2C0%2C0%2C0-.263.549%2C3.237%2C3.237%2C0%2C0%2C0-.1.824%2C3.278%2C3.278%2C0%2C0%2C0%2C.1.812%2C1.59%2C1.59%2C0%2C0%2C0%2C.254.549%2C1.017%2C1.017%2C0%2C0%2C0%2C.368.311.992.992%2C0%2C0%2C0%2C.435.1%2C1.114%2C1.114%2C0%2C0%2C0%2C.428-.083%2C1.006%2C1.006%2C0%2C0%2C0%2C.365-.266Z%22 transform%3D%22translate(-26.217 -42.76)%22%2F%3E%3C%2Fg%3E%3Cpath class%3D%22d%22 d%3D%22M45.3%2C21.547l1.516-2.336-1.5-2.3h.98l1.057%2C1.7H47.4l1.073-1.7h.932l-1.555%2C2.32%2C1.528%2C2.316h-.957l-1.075-1.665H47.29L46.2%2C21.547Z%22 transform%3D%22translate(444.782 298.076)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .html{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2219.95%22 height%3D%2226.023%22 viewBox%3D%220 0 19.95 26.023%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3B%7D.b%7Bclip-path%3Aurl(%23a)%3B%7D.c%7Bfill%3A%23f4f4ef%3B%7D.d%7Bfill%3A%23e75022%3B%7D.e%7Bfill%3A%23e6e5dc%3B%7D.f%7Bfill%3A%23e75023%3B%7D.g%7Bfill%3A%23e75224%3B%7D.h%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3CclipPath id%3D%22a%22%3E%3Crect class%3D%22a%22 width%3D%2219.95%22 height%3D%2226.023%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg class%3D%22b%22%3E%3Cpath class%3D%22c%22 d%3D%22M19.99%2C5.593c.126.1.1.243.1.376q0%2C6.071-.008%2C12.142H.178q0-8.65-.007-17.3A.737.737%2C0%2C0%2C1%2C.987.006q6.545%2C0%2C13.091%2C0c.147%2C0%2C.31-.042.423.1%2C0%2C1.669.011%2C3.338-.007%2C5.007%2C0%2C.382.115.488.49.484%2C1.669-.018%2C3.338-.008%2C5.008-.008M8.014%2C13.478c.018-.222-.143-.356-.286-.5-.658-.658-1.3-1.329-1.979-1.969-.257-.243-.267-.384-.006-.632C6.454%2C9.7%2C7.139%2C9%2C7.829%2C8.3a.466.466%2C0%2C0%2C0%2C.055-.717c-.243-.247-.493-.152-.709.064Q5.862%2C8.956%2C4.552%2C10.267a.516.516%2C0%2C0%2C0-.011.834c.265.262.526.527.79.79l1.831%2C1.83a.5.5%2C0%2C0%2C0%2C.589.169.419.419%2C0%2C0%2C0%2C.262-.411m7.206-2.752c-.082.089-.17.189-.264.284-.693.7-1.39%2C1.388-2.079%2C2.088a.463.463%2C0%2C1%2C0%2C.648.652q1.349-1.346%2C2.695-2.694a.465.465%2C0%2C0%2C0%2C.014-.72Q14.877%2C8.962%2C13.5%2C7.606a.432.432%2C0%2C0%2C0-.673-.015.443.443%2C0%2C0%2C0%2C.031.675c.08.087.165.17.249.254q.934.934%2C1.867%2C1.869c.092.093.22.165.243.337%22 transform%3D%22translate(-0.154 0)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M.025%2C178.1h19.9q.012%2C3.6.023%2C7.209a.649.649%2C0%2C0%2C1-.655.695%2C2.953%2C2.953%2C0%2C0%2C1-.355%2C0H1.011c-.838%2C0-1.014-.172-1.012-1q.01-3.452.025-6.9%22 transform%3D%22translate(0 -159.994)%22%2F%3E%3Cpath class%3D%22e%22 d%3D%22M146.506%2C6.562c-1.669%2C0-3.339-.01-5.008.008-.375%2C0-.494-.1-.49-.484.019-1.669.008-3.338.007-5.007a10.076%2C10.076%2C0%2C0%2C1%2C1.207%2C1.154c1.434%2C1.437%2C2.856%2C2.885%2C4.283%2C4.329%22 transform%3D%22translate(-126.669 -0.969)%22%2F%3E%3Cpath class%3D%22f%22 d%3D%22M44.8%2C79.18a.418.418%2C0%2C0%2C1-.262.411.5.5%2C0%2C0%2C1-.589-.169l-1.831-1.83c-.263-.263-.525-.528-.79-.79a.516.516%2C0%2C0%2C1%2C.011-.834q1.313-1.307%2C2.622-2.619c.216-.216.467-.311.709-.064a.466.466%2C0%2C0%2C1-.055.716c-.69.7-1.376%2C1.4-2.087%2C2.077-.261.248-.252.389.006.632.676.639%2C1.322%2C1.31%2C1.98%2C1.969.143.143.3.278.286.5%22 transform%3D%22translate(-36.935 -65.702)%22%2F%3E%3Cpath class%3D%22g%22 d%3D%22M125.766%2C76.422c-.023-.172-.151-.244-.243-.337q-.93-.938-1.867-1.869c-.084-.084-.169-.166-.249-.254a.443.443%2C0%2C0%2C1-.031-.675.432.432%2C0%2C0%2C1%2C.673.015q1.372%2C1.359%2C2.73%2C2.731a.465.465%2C0%2C0%2C1-.014.72q-1.344%2C1.35-2.695%2C2.694a.463.463%2C0%2C1%2C1-.648-.652c.689-.7%2C1.386-1.392%2C2.079-2.088.094-.094.182-.2.264-.284%22 transform%3D%22translate(-110.7 -65.696)%22%2F%3E%3Cpath class%3D%22h%22 d%3D%22M20.754%2C196.49v1.773h1.871V196.49h.808v4.425h-.808v-1.95H20.754v1.95h-.807V196.49Z%22 transform%3D%22translate(-17.919 -176.51)%22%2F%3E%3Cpath class%3D%22h%22 d%3D%22M60.522%2C197.167H59.261v-.676H62.6v.676H61.329v3.749h-.807Z%22 transform%3D%22translate(-53.235 -176.51)%22%2F%3E%3Cpath class%3D%22h%22 d%3D%22M99.778%2C199.11c-.026-.571-.059-1.261-.053-1.858h-.02c-.144.538-.328%2C1.136-.525%2C1.694l-.643%2C1.917h-.624l-.591-1.891c-.171-.565-.328-1.169-.446-1.72h-.013c-.02.578-.046%2C1.28-.079%2C1.884l-.1%2C1.779h-.755l.3-4.425H97.29l.578%2C1.779c.158.519.3%2C1.044.407%2C1.536h.02c.118-.479.269-1.024.44-1.543l.611-1.773h1.05l.256%2C4.425h-.788Z%22 transform%3D%22translate(-86.176 -176.51)%22%2F%3E%3Cpath class%3D%22h%22 d%3D%22M150.418%2C196.49h.807v3.749h1.819v.676h-2.626Z%22 transform%3D%22translate(-135.123 -176.51)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .xml{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2219.95%22 height%3D%2226.025%22 viewBox%3D%220 0 19.95 26.025%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3B%7D.b%7Bclip-path%3Aurl(%23a)%3B%7D.c%7Bfill%3A%23f4f4ef%3B%7D.d%7Bfill%3A%23364e9c%3B%7D.e%7Bfill%3A%23e6e5dc%3B%7D.f%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3CclipPath id%3D%22a%22%3E%3Crect class%3D%22a%22 width%3D%2219.95%22 height%3D%2226.025%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg class%3D%22b%22%3E%3Cpath class%3D%22c%22 d%3D%22M20.008%2C5.6c.141.117.1.279.1.426q0%2C6.045-.006%2C12.089H.2Q.2%2C9.475.193.837A.743.743%2C0%2C0%2C1%2C1.04.009q6.5%2C0%2C13.006%2C0c.162%2C0%2C.344-.057.474.1%2C0%2C1.669.011%2C3.338-.007%2C5.007%2C0%2C.382.115.488.49.484%2C1.669-.018%2C3.338-.008%2C5.007-.008m-8.238%2C1a.47.47%2C0%2C0%2C0-.342-.523.419.419%2C0%2C0%2C0-.513.219%2C2.055%2C2.055%2C0%2C0%2C0-.155.372Q10%2C8.809%2C9.243%2C10.955c-.353%2C1-.7%2C2-1.057%2C3-.117.33-.263.693.176.861s.575-.174.7-.52q1.3-3.7%2C2.612-7.389c.039-.111.073-.224.1-.315m4.174%2C4.083a.394.394%2C0%2C0%2C0-.129-.32Q14.435%2C8.973%2C13.048%2C7.6a.422.422%2C0%2C0%2C0-.636-.031.461.461%2C0%2C0%2C0-.022.681%2C3.247%2C3.247%2C0%2C0%2C0%2C.28.294c.622.623%2C1.235%2C1.257%2C1.874%2C1.862.248.235.226.376-.008.6-.7.669-1.369%2C1.362-2.052%2C2.043-.231.23-.345.489-.085.751s.523.132.749-.093q1.294-1.293%2C2.588-2.586a.525.525%2C0%2C0%2C0%2C.21-.439M7.1%2C13.934a.452.452%2C0%2C0%2C0%2C.437-.256c.138-.266-.007-.457-.178-.63-.69-.7-1.377-1.4-2.085-2.079-.229-.219-.224-.344%2C0-.561.708-.68%2C1.393-1.383%2C2.087-2.077.23-.229.346-.484.077-.748s-.522-.133-.748.094Q5.385%2C8.989%2C4.074%2C10.3a.486.486%2C0%2C0%2C0%2C.005.788Q5.41%2C12.411%2C6.737%2C13.74a.5.5%2C0%2C0%2C0%2C.366.194%22 transform%3D%22translate(-0.173 0)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M.026%2C178.122h19.9q.012%2C3.606.022%2C7.213a.647.647%2C0%2C0%2C1-.7.7c-.1.006-.2%2C0-.3%2C0H1.011c-.842%2C0-1.012-.166-1.01-1q.01-3.454.025-6.908%22 transform%3D%22translate(-0.001 -160.01)%22%2F%3E%3Cpath class%3D%22e%22 d%3D%22M146.5%2C6.6c-1.669%2C0-3.338-.01-5.007.008-.375%2C0-.494-.1-.49-.484.019-1.669.008-3.338.007-5.007a10.072%2C10.072%2C0%2C0%2C1%2C1.207%2C1.154C143.656%2C3.7%2C145.078%2C5.153%2C146.5%2C6.6%22 transform%3D%22translate(-126.669 -1)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M81.316%2C60.056c-.029.091-.062.2-.1.315q-1.307%2C3.694-2.612%2C7.389c-.121.346-.262.686-.7.52s-.293-.531-.176-.861c.356-1%2C.7-2%2C1.057-3q.757-2.145%2C1.519-4.29a2.046%2C2.046%2C0%2C0%2C1%2C.155-.372.419.419%2C0%2C0%2C1%2C.513-.219.47.47%2C0%2C0%2C1%2C.342.523%22 transform%3D%22translate(-69.719 -53.459)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M122.455%2C76.347a.526.526%2C0%2C0%2C1-.21.439q-1.3%2C1.292-2.588%2C2.586c-.226.225-.484.361-.749.093s-.145-.521.085-.751c.683-.682%2C1.356-1.374%2C2.052-2.043.234-.225.256-.366.008-.6-.639-.606-1.251-1.239-1.874-1.862a3.273%2C3.273%2C0%2C0%2C1-.28-.294.462.462%2C0%2C0%2C1%2C.022-.681.422.422%2C0%2C0%2C1%2C.636.031q1.392%2C1.374%2C2.768%2C2.764a.394.394%2C0%2C0%2C1%2C.129.32%22 transform%3D%22translate(-106.683 -65.668)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M39.626%2C79.636a.5.5%2C0%2C0%2C1-.366-.194q-1.329-1.327-2.659-2.654A.486.486%2C0%2C0%2C1%2C36.6%2C76q1.313-1.307%2C2.621-2.62c.227-.227.478-.359.748-.094s.153.519-.077.748c-.694.694-1.379%2C1.4-2.087%2C2.077-.226.217-.231.342%2C0%2C.561.708.679%2C1.395%2C1.381%2C2.085%2C2.079.171.172.316.364.178.63a.452.452%2C0%2C0%2C1-.437.256%22 transform%3D%22translate(-32.697 -65.703)%22%2F%3E%3Cpath class%3D%22f%22 d%3D%22M40.374%2C202.454l-.479-.88c-.19-.341-.315-.578-.44-.834h-.02c-.105.256-.223.492-.4.834l-.44.88h-.926l1.313-2.239-1.26-2.186h.926l.479.912c.144.276.25.492.368.742h.013c.118-.276.21-.473.348-.742l.473-.912h.926l-1.293%2C2.16%2C1.346%2C2.265Z%22 transform%3D%22translate(-33.839 -177.892)%22%2F%3E%3Cpath class%3D%22f%22 d%3D%22M82.06%2C200.648c-.026-.571-.059-1.26-.053-1.858h-.02c-.144.538-.328%2C1.136-.525%2C1.694l-.643%2C1.917H80.2L79.6%2C200.51c-.171-.565-.328-1.169-.446-1.72h-.013c-.02.578-.046%2C1.28-.079%2C1.884l-.1%2C1.779h-.755l.3-4.425h1.064l.578%2C1.779c.158.519.3%2C1.044.407%2C1.536h.02c.118-.479.269-1.024.44-1.543l.611-1.772h1.05l.256%2C4.425h-.788Z%22 transform%3D%22translate(-70.26 -177.892)%22%2F%3E%3Cpath class%3D%22f%22 d%3D%22M132.7%2C198.028h.807v3.748h1.819v.676H132.7Z%22 transform%3D%22translate(-119.205 -177.892)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .img{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2219.95%22 height%3D%2225.973%22 viewBox%3D%220 0 19.95 25.973%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23f4f4ef%3B%7D.b%7Bfill%3A%23e6e5dc%3B%7D.c%7Bfill%3A%23f6712e%3B%7D.d%7Bfill%3A%23f29c1f%3B%7D.e%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg transform%3D%22translate(-285.897 -419.257)%22%3E%3Cpath class%3D%22a%22 d%3D%22M-2705.993-466.975h-13.459c-.376%2C0-.68.3-.68.894v24.506a.809.809%2C0%2C0%2C0%2C.68.573h18.585c.3.008.577-.366.678-.651v-19.3c0-.323-.043-.426-.117-.5l-5.4-5.4A.412.412%2C0%2C0%2C0-2705.993-466.975Z%22 transform%3D%22translate(3006.03 886.233)%22%2F%3E%3Cpath class%3D%22b%22 d%3D%22M-2708.1-466.916v5.495h5.495Z%22 transform%3D%22translate(3008.371 886.244)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M-2700.868-443.948h-18.585a.68.68%2C0%2C0%2C1-.68-.68v-7.206h19.943v7.2a.678.678%2C0%2C0%2C1-.674.683Z%22 transform%3D%22translate(3006.03 889.178)%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M-2700.187-455.427c.012%2C1.318%2C0%2C5.024%2C0%2C5.13h-19.534c-.135%2C0-.269-.006-.409-.006.006-.018.012-.029.018-.047.7-.589%2C1.4-1.171%2C2.1-1.766q2.789-2.369%2C5.57-4.742c.146-.135.222-.105.35.023.723.735%2C1.462%2C1.456%2C2.185%2C2.2.164.168.233.146.385-.012%2C1.492-1.654%2C3-3.292%2C4.493-4.947.151-.17.239-.18.413-.018%2C1.416%2C1.364%2C2.843%2C2.715%2C4.266%2C4.067C-2700.309-455.506-2700.187-455.427-2700.187-455.427Z%22 transform%3D%22translate(3006.03 887.642)%22%2F%3E%3Cpath class%3D%22c%22 d%3D%22M-2712.819-461.037a2.1%2C2.1%2C0%2C0%2C1-2.118%2C2.1%2C2.059%2C2.059%2C0%2C0%2C1-2.1-2.1%2C2.074%2C2.074%2C0%2C0%2C1%2C2.12-2.114A2.126%2C2.126%2C0%2C0%2C1-2712.819-461.037Z%22 transform%3D%22translate(3006.631 886.976)%22%2F%3E%3Cg transform%3D%22translate(290.441 438.848)%22%3E%3Cpath class%3D%22e%22 d%3D%22M-2715.475-450.534v4.68h-.854v-4.68Z%22 transform%3D%22translate(2716.329 450.583)%22%2F%3E%3Cpath class%3D%22e%22 d%3D%22M-2710.821-447.763c-.029-.6-.063-1.334-.056-1.966h-.021c-.153.57-.347%2C1.2-.555%2C1.792l-.681%2C2.028h-.659l-.626-2c-.181-.6-.347-1.238-.472-1.82h-.013c-.021.612-.049%2C1.355-.084%2C1.994l-.1%2C1.881h-.8l.313-4.68h1.125l.61%2C1.881c.166.548.312%2C1.1.43%2C1.626h.021c.126-.507.284-1.083.465-1.632l.646-1.875h1.111l.271%2C4.68h-.834Z%22 transform%3D%22translate(2716.608 450.583)%22%2F%3E%3Cpath class%3D%22e%22 d%3D%22M-2706.189-446.061a4.635%2C4.635%2C0%2C0%2C1-1.508.264%2C2.524%2C2.524%2C0%2C0%2C1-1.832-.625%2C2.323%2C2.323%2C0%2C0%2C1-.653-1.723%2C2.379%2C2.379%2C0%2C0%2C1%2C2.6-2.431%2C3.11%2C3.11%2C0%2C0%2C1%2C1.243.222l-.187.688a2.519%2C2.519%2C0%2C0%2C0-1.062-.2%2C1.566%2C1.566%2C0%2C0%2C0-1.7%2C1.681%2C1.548%2C1.548%2C0%2C0%2C0%2C1.625%2C1.7%2C1.62%2C1.62%2C0%2C0%2C0%2C.645-.1v-1.166h-.826v-.674h1.653Z%22 transform%3D%22translate(2717.523 450.575)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .rar{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2219.951%22 height%3D%2226.023%22 viewBox%3D%220 0 19.951 26.023%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3B%7D.b%7Bclip-path%3Aurl(%23a)%3B%7D.c%7Bfill%3A%23f2f2ec%3B%7D.d%7Bfill%3A%23248332%3B%7D.e%7Bfill%3A%23e1ded3%3B%7D.f%7Bclip-path%3Aurl(%23b)%3B%7D.g%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3CclipPath id%3D%22a%22%3E%3Crect class%3D%22a%22 width%3D%2219.95%22 height%3D%2226.023%22 transform%3D%22translate(0.001 0)%22%2F%3E%3C%2FclipPath%3E%3CclipPath id%3D%22b%22%3E%3Crect class%3D%22a%22 width%3D%2219.951%22 height%3D%2226.023%22 transform%3D%22translate(0 0)%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg class%3D%22b%22%3E%3Cpath class%3D%22c%22 d%3D%22M19.837%2C5.593c.126.1.1.243.1.376q0%2C6.07-.008%2C12.142H.025Q.025%2C9.46.018.811a.737.737%2C0%2C0%2C1%2C.816-.8H13.925c.147%2C0%2C.31-.042.423.1%2C0%2C1.669.011%2C3.338-.007%2C5.007%2C0%2C.382.115.488.49.484%2C1.669-.018%2C3.338-.008%2C5.008-.008%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M.026%2C18.106h19.9q.012%2C3.6.023%2C7.209a.648.648%2C0%2C0%2C1-.6.693.487.487%2C0%2C0%2C1-.054%2C0%2C3%2C3%2C0%2C0%2C1-.355%2C0H1.012c-.838%2C0-1.014-.172-1.012-1q.011-3.452.025-6.9%22%2F%3E%3Cpath class%3D%22e%22 d%3D%22M19.838%2C5.593c-1.669%2C0-3.339-.01-5.008.008-.375%2C0-.494-.1-.49-.484.019-1.669.008-3.338.007-5.007a10.128%2C10.128%2C0%2C0%2C1%2C1.207%2C1.154C16.988%2C2.7%2C18.41%2C4.149%2C19.837%2C5.593%22%2F%3E%3C%2Fg%3E%3Cg class%3D%22f%22%3E%3Cpath class%3D%22d%22 d%3D%22M7.426%2C3.481a.326.326%2C0%2C0%2C0%2C.326-.326V2.374a.326.326%2C0%2C0%2C0-.326-.326H6.176V.616H3.986A.326.326%2C0%2C0%2C0%2C3.66.942v.781a.325.325%2C0%2C0%2C0%2C.326.325h1.25V3.481H3.986a.326.326%2C0%2C0%2C0-.326.326v.781a.326.326%2C0%2C0%2C0%2C.326.326h1.25V6.346H3.986a.326.326%2C0%2C0%2C0-.326.326v.781a.326.326%2C0%2C0%2C0%2C.326.326h1.25V9.211h2.19a.326.326%2C0%2C0%2C0%2C.326-.325V8.1a.325.325%2C0%2C0%2C0-.326-.325H6.176V6.346h1.25a.326.326%2C0%2C0%2C0%2C.326-.326V5.239a.325.325%2C0%2C0%2C0-.326-.325H6.176V3.481Z%22%2F%3E%3Cpath class%3D%22d%22 d%3D%22M7.116%2C13.774h0l-.494-1.36V10.587a.433.433%2C0%2C0%2C0-.433-.433H5.351a.433.433%2C0%2C0%2C0-.433.433v1.827l-.5%2C1.454c0%2C.011-.008.021-.011.032v0a1.441%2C1.441%2C0%2C1%2C0%2C2.712-.13m-.592.541a.741.741%2C0%2C1%2C1-1.482%2C0%2C.752.752%2C0%2C0%2C1%2C.021-.173h0l.006-.018c0-.018.01-.035.015-.051l.176-.578H6.3L6.455%2C14a.774.774%2C0%2C0%2C1%2C.059.2l.01.032H6.519a.755.755%2C0%2C0%2C1%2C.005.083%22%2F%3E%3Cpath class%3D%22g%22 d%3D%22M3.5%2C19.618a10.215%2C10.215%2C0%2C0%2C1%2C1.56-.108%2C2.646%2C2.646%2C0%2C0%2C1%2C1.677.407A1.316%2C1.316%2C0%2C0%2C1%2C7.213%2C21%2C1.377%2C1.377%2C0%2C0%2C1%2C6.3%2C22.279V22.3a1.308%2C1.308%2C0%2C0%2C1%2C.692.969c.161.584.323%2C1.261.423%2C1.461h-1.2a6.47%2C6.47%2C0%2C0%2C1-.362-1.208c-.138-.646-.362-.822-.838-.83H4.66v2.038H3.5Zm1.161%2C2.23h.461c.585%2C0%2C.931-.292.931-.746%2C0-.477-.323-.715-.862-.723a2.98%2C2.98%2C0%2C0%2C0-.53.038Z%22%2F%3E%3Cpath class%3D%22g%22 d%3D%22M9.333%2C23.4l-.369%2C1.331H7.75l1.583-5.184h1.539l1.607%2C5.184H11.217l-.4-1.331Zm1.316-.876-.324-1.1c-.092-.307-.184-.692-.261-1h-.017c-.075.308-.153.7-.238%2C1l-.307%2C1.1Z%22%2F%3E%3Cpath class%3D%22g%22 d%3D%22M13.169%2C19.618a10.215%2C10.215%2C0%2C0%2C1%2C1.56-.108%2C2.646%2C2.646%2C0%2C0%2C1%2C1.677.407A1.316%2C1.316%2C0%2C0%2C1%2C16.883%2C21a1.377%2C1.377%2C0%2C0%2C1-.915%2C1.277V22.3a1.308%2C1.308%2C0%2C0%2C1%2C.692.969c.161.584.323%2C1.261.423%2C1.461h-1.2a6.47%2C6.47%2C0%2C0%2C1-.362-1.208c-.138-.646-.362-.822-.838-.83H14.33v2.038H13.169Zm1.161%2C2.23h.461c.585%2C0%2C.931-.292.931-.746%2C0-.477-.323-.715-.862-.723a2.98%2C2.98%2C0%2C0%2C0-.53.038Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .zip{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2219.951%22 height%3D%2226.023%22 viewBox%3D%220 0 19.951 26.023%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3B%7D.b%7Bclip-path%3Aurl(%23a)%3B%7D.c%7Bfill%3A%23f6f8f4%3B%7D.d%7Bfill%3A%23ffad34%3B%7D.e%7Bfill%3A%23e7e9e0%3B%7D.f%7Bclip-path%3Aurl(%23b)%3B%7D.g%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3CclipPath id%3D%22a%22%3E%3Cpath class%3D%22a%22 d%3D%22M0%2C0h19.95V-26.023H0Z%22%2F%3E%3C%2FclipPath%3E%3CclipPath id%3D%22b%22%3E%3Cpath class%3D%22a%22 d%3D%22M0-26.023H19.951V0H0Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg transform%3D%22translate(0 26.023)%22%3E%3Cg class%3D%22b%22%3E%3Cg transform%3D%22translate(19.837 -20.43)%22%3E%3Cpath class%3D%22c%22 d%3D%22M0%2C0C.126.1.1.243.1.376q0%2C6.07-.008%2C12.142h-19.9q0-8.65-.007-17.3a.737.737%2C0%2C0%2C1%2C.661-.806.731.731%2C0%2C0%2C1%2C.155%2C0H-5.912c.147%2C0%2C.31-.042.423.1%2C0%2C1.669.011%2C3.338-.007%2C5.007%2C0%2C.382.115.488.49.484C-3.337-.014-1.668%2C0%2C0%2C0%22%2F%3E%3C%2Fg%3E%3Cg transform%3D%22translate(0.026 -7.917)%22%3E%3Cpath class%3D%22d%22 d%3D%22M0%2C0H19.9q.012%2C3.6.023%2C7.209a.648.648%2C0%2C0%2C1-.6.693.487.487%2C0%2C0%2C1-.054%2C0%2C3%2C3%2C0%2C0%2C1-.355%2C0H.986c-.838%2C0-1.014-.172-1.012-1Q-.015%2C3.453%2C0%2C0%22%2F%3E%3C%2Fg%3E%3Cg transform%3D%22translate(19.838 -20.43)%22%3E%3Cpath class%3D%22e%22 d%3D%22M0%2C0C-1.669%2C0-3.339-.01-5.008.008c-.375%2C0-.494-.1-.49-.484.019-1.669.008-3.338.007-5.007A10.128%2C10.128%2C0%2C0%2C1-4.284-4.329C-2.85-2.892-1.428-1.444%2C0%2C0%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg class%3D%22f%22%3E%3Cg transform%3D%22translate(7.426 -22.542)%22%3E%3Cpath class%3D%22d%22 d%3D%22M0%2C0A.326.326%2C0%2C0%2C0%2C.326-.326v-.781A.326.326%2C0%2C0%2C0%2C0-1.433H-1.25V-2.865H-3.44a.326.326%2C0%2C0%2C0-.326.326v.781a.325.325%2C0%2C0%2C0%2C.326.325h1.25V0H-3.44a.326.326%2C0%2C0%2C0-.326.326v.781a.326.326%2C0%2C0%2C0%2C.326.326h1.25V2.865H-3.44a.326.326%2C0%2C0%2C0-.326.326v.781A.326.326%2C0%2C0%2C0-3.44%2C4.3h1.25V5.73H0a.326.326%2C0%2C0%2C0%2C.326-.325V4.623A.325.325%2C0%2C0%2C0%2C0%2C4.3H-1.25V2.865H0a.326.326%2C0%2C0%2C0%2C.326-.326V1.758A.325.325%2C0%2C0%2C0%2C0%2C1.433H-1.25V0Z%22%2F%3E%3C%2Fg%3E%3Cg transform%3D%22translate(6.524 -11.708)%22%3E%3Cpath class%3D%22d%22 d%3D%22M0%2C0A.741.741%2C0%2C0%2C1-.741.741.741.741%2C0%2C0%2C1-1.482%2C0a.752.752%2C0%2C0%2C1%2C.021-.173h0l.006-.018c0-.018.01-.035.015-.051l.176-.578H-.223l.154.508a.774.774%2C0%2C0%2C1%2C.059.2L0-.083H0A.755.755%2C0%2C0%2C1%2C0%2C0M.592-.541h0L.1-1.9V-3.728a.433.433%2C0%2C0%2C0-.433-.433h-.838a.433.433%2C0%2C0%2C0-.433.433V-1.9l-.5%2C1.454c0%2C.011-.008.021-.011.032v0h0a1.443%2C1.443%2C0%2C0%2C0-.062.418A1.442%2C1.442%2C0%2C0%2C0-.741%2C1.449%2C1.442%2C1.442%2C0%2C0%2C0%2C.7.007%2C1.447%2C1.447%2C0%2C0%2C0%2C.592-.541%22%2F%3E%3C%2Fg%3E%3Cg transform%3D%22translate(5.169 -1.922)%22%3E%3Cpath class%3D%22g%22 d%3D%22M0%2C0%2C2.469-3.553v-.03H.23v-.97H3.991v.677L1.577-.369v.031H4.03V.631H0Z%22%2F%3E%3C%2Fg%3E%3Cpath class%3D%22g%22 d%3D%22M11.112-1.291H9.935V-6.475h1.177Z%22%2F%3E%3Cg transform%3D%22translate(13.287 -4.052)%22%3E%3Cpath class%3D%22g%22 d%3D%22M0%2C0A1.8%2C1.8%2C0%2C0%2C0%2C.393.031C1.015.031%2C1.4-.285%2C1.4-.815c0-.477-.331-.762-.915-.762A1.931%2C1.931%2C0%2C0%2C0%2C0-1.53ZM-1.161-2.354A9.664%2C9.664%2C0%2C0%2C1%2C.423-2.461a2.485%2C2.485%2C0%2C0%2C1%2C1.584.415%2C1.515%2C1.515%2C0%2C0%2C1%2C.554%2C1.2A1.653%2C1.653%2C0%2C0%2C1%2C2.084.384%2C2.4%2C2.4%2C0%2C0%2C1%2C.4.931%2C2.826%2C2.826%2C0%2C0%2C1%2C0%2C.907V2.761H-1.161Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.preview-container .file-grid .file .infor{display:flex;flex-direction:column;justify-content:space-between;padding-left:8px}.preview-container .file-grid .file .infor .file-name{font-size:12px;font-weight:400;width:100px;color:black;text-decoration:none;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.preview-container .file-grid .file .infor .size{font-size:10px;font-weight:lighter}.KHONG_HOP_LE{background:#ffab91}.CHUA_NHAN{background:#ffe082}.HOP_LE{background:#a5d6a7}.dropdown-content{position:absolute;background-color:white;min-width:160px;overflow:auto;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);right:0;z-index:1}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PreviewMailComponent, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewMailComponent", function() { return PreviewMailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PreviewMailComponent = /** @class */ (function () {
    function PreviewMailComponent(authService, invoiceBuyService, translate, modalService, modalImportService, renderer, domSanitizer) {
        this.authService = authService;
        this.invoiceBuyService = invoiceBuyService;
        this.translate = translate;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.renderer = renderer;
        this.domSanitizer = domSanitizer;
        this.opened = false;
        this.html111 = "";
        this.isMenuOpen = false;
        this.myDropdown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    PreviewMailComponent.prototype.ngOnInit = function () {
    };
    PreviewMailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.previewEmmail.attachments !== null) {
            this.file = JSON.parse(this.previewEmmail.attachments);
            this.handleFileImg();
        }
        else {
            this.file = [];
        }
        this.html = this.b64DecodeUnicode(this.previewEmmail.html_body);
        var text = this.html.split('body {width:795px;');
        var text2 = this.html.split('{width:795px;');
        if (text.length > 1) {
            var html = this.html.replace('body {width:795px;font-family:\'Times New Roman\', Times, serif;', 'body {width:100%;');
            var html2 = html.replace('serif;color: #000;', '');
            var html3 = html2.replace('margin-left: 29px;', 'margin-left: 0px;');
            var html4 = html3.replace('margin-left: 40px;', 'margin-left: 0px;');
            var html5 = html4.replace('font-family:Times New Roman,Times,serif;', '');
            this.htmlResult = html5;
        }
        else if (text2.length > 1) {
            var html = this.html.replace('{margin-left:29px}', '');
            var html2 = html.replace('color:#000}', '');
            var html3 = html2.replace('{margin-left:40px}', '');
            var html4 = html3.replace('{width:795px;', '');
            var html5 = html4.replace('font-family:Times New Roman,Times,serif;', '');
            this.htmlResult = html5;
        }
        else {
            this.htmlResult = this.html;
        }
        this.renderer.listen('window', 'click', function (e) {
            if (_this.isMailReceived.listDelete) {
                if (!_this.toggleButton.nativeElement.contains(e.target) && !_this.menu.nativeElement.contains(e.target)) {
                    _this.isShow = '';
                }
            }
            else {
                if (!_this.toggleButton.nativeElement.contains(e.target) && !_this.menuDelete.nativeElement.contains(e.target)) {
                    _this.isShow = '';
                }
            }
        });
    };
    PreviewMailComponent.prototype.handleFileImg = function () {
        for (var i = 0; i < this.file.length; i++) {
            var fileNameArray = this.file[i].file_name.split('.');
            var fileType = fileNameArray[fileNameArray.length - 1];
            if (fileType == 'pdf') {
                this.file[i].classImg = fileType;
            }
            else if (fileType == "docx") {
                this.file[i].classImg = fileType;
            }
            else if (fileType == "html") {
                this.file[i].classImg = fileType;
            }
            else if (fileType == "xml") {
                this.file[i].classImg = fileType;
            }
            else if (fileType == "rar") {
                this.file[i].classImg = fileType;
            }
            else if (fileType == "zip") {
                this.file[i].classImg = fileType;
            }
            else {
                this.file[i].classImg = 'img';
            }
        }
    };
    PreviewMailComponent.prototype.onExportSchedules = function () {
    };
    PreviewMailComponent.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    PreviewMailComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    PreviewMailComponent.prototype.myFunction = function () {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            this.isShow = 'show';
        }
        else {
            this.isShow = '';
        }
    };
    PreviewMailComponent.prototype.deleteMail = function () {
        var _this = this;
        this.isShow = '';
        var id = this.previewEmmail.id;
        var arrId = [];
        var ojb = {};
        arrId.push(id);
        if (this.isMailReceived.listDelete) {
            ojb = {
                "soft_del": true,
                "ids": arrId
            };
        }
        else {
            ojb = {
                "soft_del": false,
                "ids": arrId
            };
        }
        var result = _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.invoiceBuyService.deleteMailId(ojb).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                        var emitData = { idMail: id, isTrue: true, action: 'xoa_mail' };
                        _this.myDropdown.emit(emitData);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
        });
    };
    PreviewMailComponent.prototype.noReceived = function () {
        var _this = this;
        this.isShow = '';
        var id = this.previewEmmail.id;
        var arrId = [];
        arrId.push(id);
        var obj = {
            ids: arrId,
            error_reason: "Người dùng đã chuyển trạng thái email thành không hợp lệ",
        };
        var result = _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.definitely_do_not_receive, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.invoiceBuyService.notReceived(obj).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.finish, 'success');
                        var emitData = { idMail: id, isTrue: true, action: 'khong_nhan_hd' };
                        _this.myDropdown.emit(emitData);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
        });
    };
    PreviewMailComponent.prototype.restore = function () {
        var _this = this;
        this.isShow = '';
        var id = this.previewEmmail.id;
        var arrId = [];
        arrId.push(id);
        var result = _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.restore, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.invoiceBuyService.restore(arrId).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.restore, 'success');
                        var emitData = { idMail: id, isTrue: true, action: 'khoi_phuc' };
                        _this.myDropdown.emit(emitData);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
        });
    };
    PreviewMailComponent.prototype.nhanHoaDon = function () {
        var _this = this;
        this.isShow = '';
        var result = _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.would_you_like_to_receive_this_invoice, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                var ids = [];
                ids.push(_this.previewEmmail.id);
                var isKhongNhan = false;
                var lstThuHopLe = _this.previewEmmail.status;
                if (lstThuHopLe == 'HOP_LE')
                    isKhongNhan = true;
                if (isKhongNhan) {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_cannot_do_this_for_valid_email, 'error');
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                    _this.invoiceBuyService.nhanHoaDon(ids).subscribe(function (res) {
                        if (res.status == 'success') {
                            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.receive_invoice_success, 'success');
                            var emitData = { idMail: _this.previewEmmail.id, isTrue: true, action: 'nhan_hd' };
                            _this.myDropdown.emit(emitData);
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    });
                }
            }
        });
    };
    PreviewMailComponent.prototype.getInforAccount = function () {
        var dataAcount = JSON.parse(window.localStorage.getItem('currentUser'));
        this.datasAccount = dataAcount.account;
    };
    PreviewMailComponent.prototype.getInforFile = function (index) {
        var _this = this;
        var id = this.file[index].file_id;
        var fileArray = this.file[index].file_name.split(".");
        var fileType = fileArray[fileArray.length - 1];
        var fileName = '';
        for (var i = 0; i < fileArray.length - 1; i++) {
            fileName += fileArray[i];
        }
        this.invoiceBuyService.getInfoFile(id).subscribe(function (res) {
            if (res.status == 'success') {
                if (fileType == "xml") {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].showFileXml(fileName, fileType, res.data.file_content);
                }
                else if (fileType == "html" || fileType == "pdf" || fileType == "png" || fileType == "jpeg" || fileType == "jpg") {
                    var initialState = {
                        fileName: fileName,
                        fileType: fileType,
                        fileContent: res.data.file_content,
                        typeAction: 'XEM_FILE'
                    };
                    _this.bsModalRef = _this.modalImportService.show(_shared_components__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceMultipageComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_1 = _this.modalImportService.onHide.subscribe(function () {
                        subModal_1.unsubscribe();
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].dowloadFile(fileName, fileType, res.data.file_content, true);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewMailComponent.prototype, "isMailReceived", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewMailComponent.prototype, "previewEmmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("myDropdown"),
        __metadata("design:type", Object)
    ], PreviewMailComponent.prototype, "myDropdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toggleButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PreviewMailComponent.prototype, "toggleButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PreviewMailComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuDelete'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PreviewMailComponent.prototype, "menuDelete", void 0);
    PreviewMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-mail',
            template: __webpack_require__(/*! ./preview-mail.component.html */ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.html"),
            styles: [__webpack_require__(/*! ./preview-mail.component.scss */ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceBuyService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PreviewMailComponent);
    return PreviewMailComponent;
}());

var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "safeHtml" }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/product-grip/product-grip.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\"\r\n                   (onClick)=\"addRow()\"></dx-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--phần table hiển thị-->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource1\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n                  [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n                  (onKeyDown)=\"onGripKeyDown($event)\"\r\n                  (onEditorPrepared)=\"onEditorPrepared($event)\"\r\n                  (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n                  (onRowPrepared)=\"onRowPrepared($event)\"\r\n    >\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\"\r\n                  [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.stt }}\"\r\n                  alignment=\"center\" sortOrder=\"asc\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"product_code\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_code }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n                  alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"{showClearButton: true}\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"product_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\"\r\n                  alignment=\"left\" fixedPosition=\"left\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"unit_name\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\"\r\n                  alignment=\"center\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n                  [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\" [format]=\"formatter.so_luong\"\r\n                  dataType=\"number\"\r\n                  alignment=\"center\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n                  [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\" [format]=\"formatter.don_gia\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountVatHeader1\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n                  [editorOptions]=\"{ format: formatter.don_gia, step:'0'}\" [format]=\"formatter.don_gia\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\"></dxi-column>\r\n\r\n      <!--      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"vat\" headerCellTemplate=\"vatHeader\"-->\r\n      <!--                  minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\"-->\r\n      <!--                  [editorOptions]=\"{showClearButton: true ,step: '0'}\">-->\r\n      <!--      </dxi-column>-->\r\n\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"vat\" headerCellTemplate=\"vatHeader\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" alignment=\"center\"\r\n                  [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_vat\"\r\n                  headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n                  [editorOptions]=\"{ format: formatter.tong_tien, step:'0'}\" [format]=\"formatter.tong_tien\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\"\r\n                  [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\" [format]=\"formatter.tien_thue\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"product_group\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.group_HHDV_buy }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\"\r\n                  alignment=\"right\">\r\n        <dxo-lookup [dataSource]=\"select.dataHDMV\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <!-- config column header -->\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.price }} <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'price_nteHeader'\">\r\n        <p (click)=\"configDecimal('don_gia_nte')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.price_nte }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\"\r\n           style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount_vat }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountNoDiscountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien_chua_ck')\"\r\n           style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount_without_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discountHeader'\">\r\n        <p (click)=\"configDecimal('ty_le_chiet_khau')\"\r\n           style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amount_discountHeader'\">\r\n        <p (click)=\"configDecimal('tien_chiet_khau')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT (%)</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader1'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount }} <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n\r\n      <!--      <div *dxTemplate=\"let d of 'amountHDMV'\">-->\r\n      <!--        <p style=\"cursor: pointer;\">-->\r\n      <!--          {{ _translate.GRID.INVOICE_DETAILS.group_HHDV_buy }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>-->\r\n      <!--      </div>-->\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/product-grip/product-grip.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:75px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/product-grip/product-grip.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGripComponent", function() { return ProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _shared_modules_vat_shared_components_config_decimal_config_decimal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/modules/vat-shared/components/config-decimal/config-decimal.component */ "./src/app/shared/modules/vat-shared/components/config-decimal/config-decimal.component.ts");
/* harmony import */ var _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library/invoice/v-changge-money.service */ "./src/app/core/library/invoice/v-changge-money.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductGripComponent = /** @class */ (function () {
    function ProductGripComponent(route, router, modalService, vatService, productsService, authService, translate) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.select = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["InvoiceModel"](1);
        this.showPopup = false; // Popup
        this.ttDaXuatHoaDon = false;
        this.amount_after_vat = 0;
        this.system_parameter = {};
        this.rowData = 1;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    Object.defineProperty(ProductGripComponent.prototype, "dataSource", {
        set: function (value) {
            this.dataSource1 = value;
            this.createUpdateEvent();
        },
        enumerable: true,
        configurable: true
    });
    ProductGripComponent.prototype.ngAfterViewInit = function () {
    };
    ProductGripComponent.prototype.ngOnInit = function () {
        this.select.dataHDMV = [
            { code: '1', name: 'HHDV dùng riêng' },
            { code: '2', name: 'HHDV dùng chung' },
            { code: '3', name: 'HHDV dùng cho dự án đầu tư' },
            { code: '4', name: 'HHDV không đủ điều kiện' },
        ];
        this.select.vats = [
            { name: 'Không chịu thuế', code: -1 },
            { name: 'Không kê khai tính thuế', code: -2 },
            { name: '0%', code: 0 },
            { name: '5%', code: 5 },
            { name: '8%', code: 8 },
            { name: '10%', code: 10 },
        ];
        this.configs = this.authService.getConfigs();
    };
    ProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                if (value.product_code !== 'add') {
                    _this.invoice_products.byKey(key).then(function (row) {
                        switch (column) {
                            case 'quantity':
                            case 'price':
                            case 'vat':
                            case 'amount':
                            case 'amount_vat':
                                _this._tinhGiaTri(key, row, value);
                                break;
                            default:
                                break;
                        }
                    }, function (error) {
                        alert(error);
                    });
                }
                else {
                    _this.invoice_products.remove(key);
                    _this.addRow();
                }
            });
        }, 200);
    };
    ProductGripComponent.prototype._tinhGiaTri = function (key, row, value) {
        var _this = this;
        if (row.product_name) {
            if (row.quantity && row.price) {
                row.amount = row.quantity * row.price;
            }
            if (row.amount) {
                if (row.vat && row.vat !== 0 && row.vat !== -1 && row.vat !== -2) {
                    row.amount_vat = (row.amount * row.vat) / 100;
                }
                else if (row.vat === 0 || row.vat === -1 || row.vat === -2) {
                    row.amount_vat = 0;
                }
                row.amount_after_vat = row.amount + row.amount_vat;
            }
            this.formDataInInvoice.total_payment = 0;
            this.formDataInInvoice.amount = 0;
            this.formDataInInvoice.total_amount_vat = 0;
            this.invoice_products.load().done(function (item) {
                item.forEach(function (valueItem) {
                    _this.formDataInInvoice.total_payment += valueItem.amount_after_vat;
                    _this.formDataInInvoice.amount += valueItem.amount;
                    _this.formDataInInvoice.total_amount_vat += valueItem.amount_vat;
                });
            });
            var currency_code = this.formDataInInvoice.currency_code;
            if (this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            var number_money = Math.abs(this.formDataInInvoice.total_payment);
            var c_money = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].tienBangChu(number_money, _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), currency_code, this.configs.system_parameter.display_read_money_english);
            this.formDataInInvoice.total_payment_in_word = c_money;
            if (this.formDataInInvoice.adjustment_type == "5") {
                if (this.formDataInInvoice.total_payment < 0) {
                    this.formDataInInvoice.total_payment_in_word = "Giảm " + c_money;
                }
                else if (this.formDataInInvoice.total_payment > 0) {
                    this.formDataInInvoice.total_payment_in_word = "Tăng " + c_money;
                }
            }
            return row;
        }
    };
    ProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    ProductGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
            var eles = e.rowElement.getElementsByTagName('td');
            if (e.data.error) {
                var ele = eles[eles.length - 1];
                ele.style.background = 'red url(\'assets/img/icons/fa-remove.png\') no-repeat 2% center';
                ele.title = e.data.error;
            }
        }
    };
    ProductGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'product_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                };
            }
            if (e.dataField === 'product_name') {
                e.editorName = 'dxTextArea';
            }
        }
    };
    ProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    ProductGripComponent.prototype.addRow = function () {
        var len, order, orderLast;
        len = this.dataSource1.items().length;
        orderLast = this.dataSource1.items()[len - 1].order;
        for (var i = 0; i < this.rowData; i++) {
            if (this.dataSource1.items().length >= 1) {
                order = ++orderLast;
            }
            else {
                order = 1;
            }
            var data = this.add_invoice_products_data(order);
            this.invoice_products.insert(data);
        }
        this.dataSource1.reload();
    };
    ProductGripComponent.prototype.add_invoice_products_data = function (order) {
        return {
            id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid(),
            order: order,
            product_code: '',
            product_name: '',
            unit_code: null,
            unit_name: '',
            quantity: null,
            price: null,
            vat: null,
            amount_vat: null,
            amount: null,
            product_group: null,
            amount_after_vat: null
        };
    };
    ProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    ProductGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.system_parameter.view_price_nte,
        };
        this.bsModalRef = this.modalService.show(_shared_modules_vat_shared_components_config_decimal_config_decimal_component__WEBPACK_IMPORTED_MODULE_9__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                // this.formatter[data.column] = data.character;
            }
            subModal.unsubscribe();
        });
    };
    // Xóa hàng
    ProductGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        if (confirm(this._translate.CONFIRM.delete)) {
            this.invoice_products.remove(item.id);
            this.formDataInInvoice.total_payment = 0;
            this.formDataInInvoice.total_amount_vat = 0;
            this.formDataInInvoice.amount = 0;
            this.invoice_products.load().done(function (data) {
                var _index = 0;
                data.forEach(function (value) {
                    value.order = ++_index;
                    if (value.amount) {
                        _this.formDataInInvoice.amount += value.amount;
                    }
                    if (value.amount_after_vat) {
                        _this.formDataInInvoice.total_payment += value.amount_after_vat;
                    }
                    if (value.amount_vat) {
                        _this.formDataInInvoice.total_amount_vat += value.amount_vat;
                    }
                });
            });
            this.dataSource1.reload();
        }
    };
    // Nạp dữ liệu bảng kê
    ProductGripComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById('file-bang-ke').click();
    };
    ProductGripComponent.prototype.taxCodeChoose = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProductGripComponent.prototype, "dataSource", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "extentionGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formDataInInvoice", void 0);
    ProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/search-mail/search-mail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\" [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\" [ngClass]=\"nonSearch\">\r\n  <dx-select-box [items]=\"mailAccount\" displayExpr=\"email\" valueExpr=\"id\" (onValueChanged)=\"onEmailChanged($event)\"\r\n    [value]=\"objSelect.email\" formControlName=\"emailName\" itemTemplate=\"item\">\r\n    <div *dxTemplate=\"let i of 'item'\">\r\n      <span [ngClass]=\"i.status=='0'?'khong-hoat-dong': ''\">{{i.email}}</span>\r\n    </div>\r\n  </dx-select-box>\r\n  <dx-select-box [items]=\"status\" displayExpr=\"name\" valueExpr=\"code\" (onValueChanged)=\"onStatusChanged($event)\"\r\n    [value]=\"objSelect.status\" formControlName=\"status\">\r\n  </dx-select-box>\r\n  <dx-text-box placeholder=\"Tìm kiếm trong cuộc trò chuyện\" (onValueChanged)=\"valueChanged($event)\"\r\n    formControlName=\"subject\">\r\n  </dx-text-box>\r\n  <button class=\"filter-btn\" #toggleSearch (click)=\"open()\">\r\n    <img src=\"../../../../../assets/img/icons/invoice-buy/filter.svg\" alt=\"\"  >\r\n  </button>\r\n  <div class=\"search-extend\" *ngIf=\"opened\" #menuSearch>\r\n    <h1 style=\"font-weight: bold;padding-left: 60px;padding-bottom: 19px;padding-top: 19px;\">TÌM KIẾM NÂNG CAO</h1>\r\n    <div class=\"dx-field\">\r\n      <div class=\"dx-field-label\">Email người gửi</div>\r\n      <div class=\"dx-field-value\">\r\n        <dx-text-box displayExpr=\"name\" valueExpr=\"code\" style=\"width:100%\" formControlName=\"send_from\"\r\n          (onValueChanged)=\"onEmailNameChange($event)\"></dx-text-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n      <div class=\"dx-field-label\">Từ ngày</div>\r\n      <div class=\"dx-field-value\">\r\n        <dx-date-box [value]=\"\" type=\"date\" formControlName=\"startDate\" [useMaskBehavior]=\"true\"\r\n          [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onStartDate($event)\"> </dx-date-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n      <div class=\"dx-field-label\">Đến ngày</div>\r\n      <div class=\"dx-field-value\">\r\n        <dx-date-box [value]=\"\" type=\"date\" formControlName=\"endDate\" [useMaskBehavior]=\"true\"\r\n          [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onEndDate($event)\"> </dx-date-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"dx-field\" style=\"display: flex;justify-content: end;\">\r\n      <button class=\"search-btn\" (click)=\"search()\">Tìm kiếm</button>\r\n      <button class=\"cancel-btn\" (click)=\"open()\">Quay lại</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/search-mail/search-mail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".none-search{display:none !important}.search-container{display:flex;align-items:center;position:relative}.search-container .search-extend{position:absolute;width:100%;height:235px;top:37px;z-index:1;right:0;background:white;box-shadow:rgba(0,0,0,0.16) 0px 1px 4px}.search-container .search-extend .dx-field{width:80%}.search-container .search-extend .dx-field .search-btn{padding:6px 29px;background:#2680eb;color:white;border:none;outline:none;margin-right:15px;border-radius:3px}.search-container .search-extend .dx-field .cancel-btn{padding:6px 16px;background-color:white;color:#2680eb;border-radius:3px;border:1px solid #2680eb;outline:none}.search-container .filter-btn{background-color:#dadce0;border:none;padding:6px;margin-left:10px}.dx-texteditor.dx-editor-outlined{width:31%;height:30px;margin-left:10px}.khong-hoat-dong{color:red;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/component/search-mail/search-mail.component.ts ***!
  \************************************************************************************/
/*! exports provided: SearchMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMailComponent", function() { return SearchMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchMailComponent = /** @class */ (function () {
    function SearchMailComponent(invoiceBuyService, authService, translate, fb, renderer) {
        this.invoiceBuyService = invoiceBuyService;
        this.authService = authService;
        this.translate = translate;
        this.fb = fb;
        this.renderer = renderer;
        this.opened = false;
        this.objSelect = {};
        this.arrSelected = [];
        this.isEndDateChange = false;
        this.isStartDateChange = false;
        this.isEmailNameChange = false;
        this.isSearch = false;
        this.isSubject = false;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            send_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('') // <== default value
        });
        this.searchContentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectMail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.status = _core_index__WEBPACK_IMPORTED_MODULE_2__["VSelectBoxService"].statusEmail(this._translate);
        this.defaultStatus = null;
        this.curentUser = this.authService.getCurrentUser();
        this.curentMail = this.curentUser.user.permission_mails;
    }
    SearchMailComponent.prototype.ngOnChanges = function () {
        if (this.isSelected) {
            this.nonSearch = 'none-search';
        }
        else {
            this.nonSearch = '';
        }
    };
    SearchMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isMailReceived.id == null) {
            var filter = '';
            if (this.curentMail !== "" && this.curentMail !== null) {
                var permission_mails = this.curentMail.split(',');
                filter += "&filter_groups[1][filters][0][key]=email";
                for (var i = 0; i < permission_mails.length; i++) {
                    filter += "&filter_groups[1][filters][0][value][" + i + "]=" + permission_mails[i];
                }
                filter += "&filter_groups[1][filters][0][operator]=in&";
            }
            else {
            }
            this.invoiceBuyService.getEmailAccount(filter).subscribe(function (res) {
                _this.mailAccount = res.data.config_mails;
                if (_this.mailAccount.length > 0) {
                    _this.isMail.emit(true);
                }
                else {
                    _this.isMail.emit(false);
                }
                _this.emailForm = _this.fb.group({
                    emailName: res.data.config_mails[0].id,
                    status: 'TAT_CA',
                    send_from: '',
                    endDate: '',
                    startDate: '',
                    subject: ''
                });
                _this.onSubmit();
            });
        }
        else {
            var filter = '';
            if (this.curentMail !== "" && this.curentMail !== null) {
                var permission_mails = this.curentMail.split(',');
                filter += "&filter_groups[1][filters][0][key]=email";
                for (var i = 0; i < permission_mails.length; i++) {
                    filter += "&filter_groups[1][filters][0][value][" + i + "]=" + permission_mails[i];
                }
                filter += "&filter_groups[1][filters][0][operator]=in&";
            }
            else {
            }
            this.invoiceBuyService.getEmailAccount(filter).subscribe(function (res) {
                _this.mailAccount = res.data.config_mails;
                if (_this.mailAccount.length > 0) {
                    _this.isMail.emit(true);
                }
                else {
                    _this.isMail.emit(false);
                }
                _this.emailForm = _this.fb.group({
                    emailName: _this.isMailReceived.id,
                    status: 'TAT_CA',
                    send_from: '',
                    endDate: '',
                    startDate: '',
                    subject: ''
                });
                _this.onSubmit();
            });
        }
        setTimeout(function () {
            _this.renderer.listen('window', 'click', function (e) {
                if (!_this.toggleSearch.nativeElement.contains(e.target) && !_this.menuSearch.nativeElement.contains(e.target)) {
                    _this.opened = false;
                }
            });
        }, 500);
    };
    SearchMailComponent.prototype.ngAfterViewInit = function () {
    };
    SearchMailComponent.prototype.onEmailChanged = function (e) {
        if (e.event) {
            this.onSubmit();
        }
    };
    SearchMailComponent.prototype.onEndDate = function (e) {
        if (e.event) {
            this.isEndDateChange = true;
        }
    };
    SearchMailComponent.prototype.onStartDate = function (e) {
        if (e.event) {
            this.isStartDateChange = true;
        }
    };
    SearchMailComponent.prototype.onEmailNameChange = function (e) {
        if (e.event) {
            this.isEmailNameChange = true;
        }
    };
    SearchMailComponent.prototype.valueChanged = function (e) {
        if (e.event) {
            this.onSubmit();
        }
    };
    SearchMailComponent.prototype.onStatusChanged = function (e) {
        if (e.event) {
            this.onSubmit();
        }
    };
    SearchMailComponent.prototype.onSubmit = function () {
        if (this.isMailReceived.listDelete) {
            if (this.emailForm.get('status').value == "TAT_CA") {
                var selectString = "filter_groups[1][filters][0][key]=config_mail_id\n        &filter_groups[1][filters][0][value]=" + this.emailForm.get('emailName').value + "\n        &filter_groups[1][filters][0][operator]=eq&\n        &filter_groups[2][filters][1][key]=soft_del\n        &filter_groups[2][filters][1][value]=null\n        &filter_groups[2][filters][1][operator]=eq&\n        ";
                if (this.emailForm.get('subject').value !== '') {
                    selectString += "filter_groups[3][filters][0][key]=subject\n          &filter_groups[3][filters][0][value]=" + this.emailForm.get('subject').value + "\n          &filter_groups[3][filters][0][operator]=ct&";
                }
                if (this.emailForm.get('startDate').value !== '' && this.emailForm.get('startDate').value !== null) {
                    selectString += "&filter_groups[4][filters][1][key]=send_date\n            &filter_groups[4][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('startDate').value).format("YYYY-MM-DD 00:00:00") + "\n            &filter_groups[4][filters][1][operator]=gte&";
                }
                if (this.emailForm.get('endDate').value !== '' && this.emailForm.get('endDate').value !== null) {
                    selectString += "&filter_groups[5][filters][1][key]=send_date\n            &filter_groups[5][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('endDate').value).format("YYYY-MM-DD 23:59:59") + "\n            &filter_groups[5][filters][1][operator]=lt&";
                }
                if (this.emailForm.get('send_from').value !== '') {
                    var emailName = this.emailForm.get('send_from').value;
                    var valueSearch = emailName.split(';');
                    if (valueSearch.length === 1) {
                        selectString += "&filter_groups[6][filters][1][key]=send_from\n              &filter_groups[6][filters][1][value]=" + this.emailForm.get('send_from').value + "\n              &filter_groups[6][filters][1][operator]=eq&";
                    }
                    else {
                        selectString += "&filter_groups[6][filters][1][key]=send_from";
                        for (var i = 0; i < valueSearch.length; i++) {
                            selectString += " &filter_groups[6][filters][1][value][" + i + "]=" + valueSearch[i];
                        }
                        selectString += " &filter_groups[6][filters][1][operator]=in&";
                    }
                }
                this.searchContentChange.emit(selectString);
                var id = this.emailForm.get("emailName").value;
                this.selectMail.emit(id);
            }
            else {
                var selectString = "filter_groups[1][filters][0][key]=config_mail_id\n        &filter_groups[1][filters][0][value]=" + this.emailForm.get('emailName').value + "\n        &filter_groups[1][filters][0][operator]=eq&\n        filter_groups[8][filters][0][key]=status\n        &filter_groups[8][filters][0][value]=" + this.emailForm.get('status').value + "\n        &filter_groups[8][filters][0][operator]=eq&\n        &filter_groups[2][filters][1][key]=soft_del\n        &filter_groups[2][filters][1][value]=null\n        &filter_groups[2][filters][1][operator]=eq&\n        ";
                if (this.emailForm.get('subject').value !== '') {
                    selectString += "filter_groups[3][filters][0][key]=subject\n          &filter_groups[3][filters][0][value]=" + this.emailForm.get('subject').value + "\n          &filter_groups[3][filters][0][operator]=ct&";
                }
                if (this.emailForm.get('startDate').value !== '' && this.emailForm.get('startDate').value !== null) {
                    selectString += "&filter_groups[4][filters][1][key]=send_date\n            &filter_groups[4][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('startDate').value).format("YYYY-MM-DD 00:00:00") + "\n            &filter_groups[4][filters][1][operator]=gte&";
                }
                if (this.emailForm.get('endDate').value !== '' && this.emailForm.get('endDate').value !== null) {
                    selectString += "&filter_groups[5][filters][1][key]=send_date\n            &filter_groups[5][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('endDate').value).format("YYYY-MM-DD 23:59:59") + "\n            &filter_groups[5][filters][1][operator]=lt&";
                }
                if (this.emailForm.get('send_from').value !== '') {
                    selectString += "&filter_groups[6][filters][1][key]=send_from\n            &filter_groups[6][filters][1][value]=" + this.emailForm.get('send_from').value + "\n            &filter_groups[6][filters][1][operator]=eq&";
                }
                this.searchContentChange.emit(selectString);
                var id = this.emailForm.get("emailName").value;
                this.selectMail.emit(id);
            }
        }
        else {
            if (this.emailForm.get('status').value == "TAT_CA") {
                var selectString = "filter_groups[1][filters][0][key]=config_mail_id\n        &filter_groups[1][filters][0][value]=" + this.emailForm.get('emailName').value + "\n        &filter_groups[1][filters][0][operator]=eq&\n        &filter_groups[2][filters][1][key]=soft_del\n        &filter_groups[2][filters][1][value]=1\n        &filter_groups[2][filters][1][operator]=eq&\n        ";
                if (this.emailForm.get('subject').value !== '') {
                    selectString += "filter_groups[3][filters][0][key]=subject\n          &filter_groups[3][filters][0][value]=" + this.emailForm.get('subject').value + "\n          &filter_groups[3][filters][0][operator]=ct&";
                }
                if (this.emailForm.get('startDate').value !== '' && this.emailForm.get('startDate').value !== null) {
                    selectString += "&filter_groups[4][filters][1][key]=send_date\n            &filter_groups[4][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('startDate').value).format("YYYY-MM-DD 00:00:00") + "\n            &filter_groups[4][filters][1][operator]=gte&";
                }
                if (this.emailForm.get('endDate').value !== '' && this.emailForm.get('endDate').value !== null) {
                    selectString += "&filter_groups[5][filters][1][key]=send_date\n            &filter_groups[5][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('endDate').value).format("YYYY-MM-DD 23:59:59") + "\n            &filter_groups[5][filters][1][operator]=lt&";
                }
                if (this.emailForm.get('send_from').value !== '') {
                    selectString += "&filter_groups[6][filters][1][key]=send_from\n            &filter_groups[6][filters][1][value]=" + this.emailForm.get('send_from').value + "\n            &filter_groups[6][filters][1][operator]=eq&";
                }
                this.searchContentChange.emit(selectString);
                var id = this.emailForm.get("emailName").value;
                this.selectMail.emit(id);
            }
            else {
                var selectString = "filter_groups[1][filters][0][key]=config_mail_id\n        &filter_groups[1][filters][0][value]=" + this.emailForm.get('emailName').value + "\n        &filter_groups[1][filters][0][operator]=eq&\n        filter_groups[8][filters][0][key]=status\n        &filter_groups[8][filters][0][value]=" + this.emailForm.get('status').value + "\n        &filter_groups[8][filters][0][operator]=eq&\n        &filter_groups[2][filters][1][key]=soft_del\n        &filter_groups[2][filters][1][value]=1\n        &filter_groups[2][filters][1][operator]=eq&\n        ";
                if (this.emailForm.get('subject').value !== '') {
                    selectString += "filter_groups[3][filters][0][key]=subject\n          &filter_groups[3][filters][0][value]=" + this.emailForm.get('subject').value + "\n          &filter_groups[3][filters][0][operator]=ct&";
                }
                if (this.emailForm.get('startDate').value !== '' && this.emailForm.get('startDate').value !== null) {
                    selectString += "&filter_groups[4][filters][1][key]=send_date\n            &filter_groups[4][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('startDate').value).format("YYYY-MM-DD 00:00:00") + "\n            &filter_groups[4][filters][1][operator]=gte&";
                }
                if (this.emailForm.get('endDate').value !== '' && this.emailForm.get('endDate').value !== null) {
                    selectString += "&filter_groups[5][filters][1][key]=send_date\n            &filter_groups[5][filters][1][value]=" + moment__WEBPACK_IMPORTED_MODULE_6__(this.emailForm.get('endDate').value).format("YYYY-MM-DD 23:59:59") + "\n            &filter_groups[5][filters][1][operator]=lt&";
                }
                if (this.emailForm.get('send_from').value !== '') {
                    selectString += "&filter_groups[6][filters][1][key]=send_from\n            &filter_groups[6][filters][1][value]=" + this.emailForm.get('send_from').value + "\n            &filter_groups[6][filters][1][operator]=eq&";
                }
                this.searchContentChange.emit(selectString);
                var id = this.emailForm.get("emailName").value;
                this.selectMail.emit(id);
            }
        }
    };
    SearchMailComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    SearchMailComponent.prototype.search = function () {
        this.onSubmit();
        this.opened = false;
        this.isEndDateChange = false;
        this.isEmailNameChange = false;
        this.isStartDateChange = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchMailComponent.prototype, "isSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchMailComponent.prototype, "isMailReceived", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("searchContentChange"),
        __metadata("design:type", Object)
    ], SearchMailComponent.prototype, "searchContentChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("selectMail"),
        __metadata("design:type", Object)
    ], SearchMailComponent.prototype, "selectMail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("isMail"),
        __metadata("design:type", Object)
    ], SearchMailComponent.prototype, "isMail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toggleSearch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchMailComponent.prototype, "toggleSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuSearch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchMailComponent.prototype, "menuSearch", void 0);
    SearchMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-mail',
            template: __webpack_require__(/*! ./search-mail.component.html */ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.html"),
            styles: [__webpack_require__(/*! ./search-mail.component.scss */ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_4__["InvoiceBuyService"], _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SearchMailComponent);
    return SearchMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/invoice-buy.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/invoice-buy/invoice-buy.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceBuyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBuyModule", function() { return InvoiceBuyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_invoice_buy_invoice_buy_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.routing */ "./src/app/modules/invoice-buy/invoice-buy.routing.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _component_form_header_invoice_form_header_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/form-header-invoice/form-header-invoice.component */ "./src/app/modules/invoice-buy/component/form-header-invoice/form-header-invoice.component.ts");
/* harmony import */ var _component_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/product-grip/product-grip.component */ "./src/app/modules/invoice-buy/component/product-grip/product-grip.component.ts");
/* harmony import */ var _component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/invoice/invoice.component */ "./src/app/modules/invoice-buy/component/invoice/invoice.component.ts");
/* harmony import */ var _modules_vat_vat_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/vat/vat.module */ "./src/app/modules/vat/vat.module.ts");
/* harmony import */ var _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/modules/vat-shared/vat-shared.module */ "./src/app/shared/modules/vat-shared/vat-shared.module.ts");
/* harmony import */ var _shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/modal/notify-tax-code/notify-tax-code.component */ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.ts");
/* harmony import */ var _component_index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/index/index.component */ "./src/app/modules/invoice-buy/component/index/index.component.ts");
/* harmony import */ var _shared_file_file_upload_invoice_buy_file_upload_invoice_buy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component */ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.ts");
/* harmony import */ var _shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/modal/upload-file-zip/upload-file-zip.component */ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.ts");
/* harmony import */ var _shared_modal_check_invoice_number_check_invoice_number_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/modal/check-invoice-number/check-invoice-number.component */ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _component_list_invoice_list_invoice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/list-invoice/list-invoice.component */ "./src/app/modules/invoice-buy/component/list-invoice/list-invoice.component.ts");
/* harmony import */ var _component_list_mail_received_list_mail_received_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/list-mail-received/list-mail-received.component */ "./src/app/modules/invoice-buy/component/list-mail-received/list-mail-received.component.ts");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-split-pane/lib/ng2-split-pane */ "./node_modules/ng2-split-pane/lib/ng2-split-pane.js");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _component_search_mail_search_mail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/search-mail/search-mail.component */ "./src/app/modules/invoice-buy/component/search-mail/search-mail.component.ts");
/* harmony import */ var _component_preview_mail_preview_mail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/preview-mail/preview-mail.component */ "./src/app/modules/invoice-buy/component/preview-mail/preview-mail.component.ts");
/* harmony import */ var _shared_invoice_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/invoice.pipe */ "./src/app/modules/invoice-buy/shared/invoice.pipe.ts");
/* harmony import */ var _component_list_invoice_tct_list_invoice_tct_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/list-invoice-tct/list-invoice-tct.component */ "./src/app/modules/invoice-buy/component/list-invoice-tct/list-invoice-tct.component.ts");
/* harmony import */ var _component_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/captcha-update/captcha-update.component */ "./src/app/modules/invoice-buy/component/captcha-update/captcha-update.component.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var InvoiceBuyModule = /** @class */ (function () {
    function InvoiceBuyModule() {
    }
    InvoiceBuyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_invoice_buy_invoice_buy_routing__WEBPACK_IMPORTED_MODULE_2__["InvoiceBuyRouting"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_3__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDateBoxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_7__["devextremeModule"],
                _modules_vat_vat_module__WEBPACK_IMPORTED_MODULE_14__["VatModule"],
                _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_15__["VatSharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_26__["SplitPaneModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridModule"]
            ],
            declarations: [
                _component_form_header_invoice_form_header_invoice_component__WEBPACK_IMPORTED_MODULE_11__["FormHeaderInvoiceComponent"],
                _component_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_12__["ProductGripComponent"],
                _component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_13__["InvoiceComponent"],
                _shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_16__["NotifyTaxCodeComponent"],
                _component_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
                _shared_file_file_upload_invoice_buy_file_upload_invoice_buy_component__WEBPACK_IMPORTED_MODULE_18__["FileUploadInvoiceBuyComponent"],
                _shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_19__["UploadFileZipComponent"],
                _shared_modal_check_invoice_number_check_invoice_number_component__WEBPACK_IMPORTED_MODULE_20__["CheckInvoiceNumberComponent"],
                _component_list_invoice_list_invoice_component__WEBPACK_IMPORTED_MODULE_24__["ListInvoiceComponent"],
                _component_list_mail_received_list_mail_received_component__WEBPACK_IMPORTED_MODULE_25__["ListMailReceivedComponent"],
                _component_search_mail_search_mail_component__WEBPACK_IMPORTED_MODULE_27__["SearchMailComponent"],
                _component_preview_mail_preview_mail_component__WEBPACK_IMPORTED_MODULE_28__["PreviewMailComponent"],
                _shared_invoice_pipe__WEBPACK_IMPORTED_MODULE_29__["InvoicePipe"],
                _component_preview_mail_preview_mail_component__WEBPACK_IMPORTED_MODULE_28__["SafeHtmlPipe"],
                _component_list_invoice_tct_list_invoice_tct_component__WEBPACK_IMPORTED_MODULE_30__["ListInvoiceTCTComponent"],
                _component_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_31__["CaptchaUpdateComponent"]
            ],
            entryComponents: [
                _shared_modal_notify_tax_code_notify_tax_code_component__WEBPACK_IMPORTED_MODULE_16__["NotifyTaxCodeComponent"],
                _shared_file_file_upload_invoice_buy_file_upload_invoice_buy_component__WEBPACK_IMPORTED_MODULE_18__["FileUploadInvoiceBuyComponent"],
                _shared_modal_upload_file_zip_upload_file_zip_component__WEBPACK_IMPORTED_MODULE_19__["UploadFileZipComponent"],
                _shared_modal_check_invoice_number_check_invoice_number_component__WEBPACK_IMPORTED_MODULE_20__["CheckInvoiceNumberComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_21__["ViewInvoiceMultipageComponent"],
                _component_captcha_update_captcha_update_component__WEBPACK_IMPORTED_MODULE_31__["CaptchaUpdateComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_33__["PreviewInvoiceComponent"]
            ],
            providers: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
                _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceBuyService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__["VatService"],
                _modules_configs_shared__WEBPACK_IMPORTED_MODULE_32__["ConfigsService"]
            ]
        })
    ], InvoiceBuyModule);
    return InvoiceBuyModule;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/invoice-buy.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/invoice-buy/invoice-buy.routing.ts ***!
  \************************************************************/
/*! exports provided: InvoiceBuyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBuyRouting", function() { return InvoiceBuyRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_invoice_buy_component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/invoice-buy/component/invoice/invoice.component */ "./src/app/modules/invoice-buy/component/invoice/invoice.component.ts");
/* harmony import */ var _modules_invoice_buy_shared_resolve_form_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/invoice-buy/shared/resolve/form-resolver.service */ "./src/app/modules/invoice-buy/shared/resolve/form-resolver.service.ts");
/* harmony import */ var _modules_invoice_buy_component_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/invoice-buy/component/index/index.component */ "./src/app/modules/invoice-buy/component/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _modules_invoice_buy_component_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'edit-invoice/:id', component: _modules_invoice_buy_component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"], data: { brec: 'Cập nhật hóa đơn' }, resolve: { FormResolverService: _modules_invoice_buy_shared_resolve_form_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FormResolverService"] } },
    { path: 'view-invoice/:id', component: _modules_invoice_buy_component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"], data: { brec: 'Xem hóa đơn' }, resolve: { FormResolverService: _modules_invoice_buy_shared_resolve_form_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FormResolverService"] } },
    { path: 'create', component: _modules_invoice_buy_component_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"], data: { brec: 'Thêm hóa đơn' }, resolve: { FormResolverService: _modules_invoice_buy_shared_resolve_form_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FormResolverService"] } },
    { path: '**', redirectTo: '/' },
];
var InvoiceBuyRouting = /** @class */ (function () {
    function InvoiceBuyRouting() {
    }
    InvoiceBuyRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceBuyRouting);
    return InvoiceBuyRouting;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/class/invoice.model.ts ***!
  \*******************************************************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
var Invoice = /** @class */ (function () {
    function Invoice(adjustment_type) {
        this.id = null;
        this.origin_id = null;
        this.invoice_type = null;
        this.invoice_type_name = null;
        this.template_code = null;
        this.invoice_series = null;
        this.invoice_number = null;
        this.invoice_date = null;
        this.sign_date = null;
        this.currency_code = null;
        this.currency_rate = null;
        this.note = null;
        this.adjustment_type = null;
        this.seller_legal_name = null;
        this.seller_tax_code = null;
        this.seller_address = null;
        this.seller_mobile = null;
        this.seller_fax_number = null;
        this.seller_email = null;
        this.seller_bank_account = null;
        this.seller_contact_name = null;
        this.seller_surrogate_name = null;
        this.seller_tax_department = null;
        this.buyer_name = null;
        this.buyer_legal_name = null;
        this.buyer_tax_code = null;
        this.buyer_address = null;
        this.buyer_mobile = null;
        this.buyer_email = null;
        this.payment_method_view_name = null;
        this.auto_value = false;
        this.auto_value_price = false;
        this.amount_vat5 = null;
        this.amount_vat10 = null;
        this.export_from_ihd = 0;
        this.export_from_tct = 0;
        this.amount_vatx = null;
        this.amount_vat0 = null;
        this.total_amount_product_vat5 = null;
        this.total_amount_product_vat10 = null;
        this.total_amount_product_vatx = null;
        this.total_amount_product_vat0 = null;
        this.amount = null;
        this.total_amount_vat = null;
        this.total_payment = null;
        this.total_payment_in_word = null;
        this.amount_discount = null;
        this.system_code = null;
        this.input_invoice_products = [];
        this.input_invoice_files = [];
        this.customer_code = ""; //Mã khách hàng
        this.decimal_places_json = "";
        /* Các trường thêm mới */
        this.total_amount_product_vat8 = null;
        this.amount_vat8 = null;
        this.total_amount_product_vat_kkknt = null;
        this.signature_content = null;
        this.version_xml = null;
        this.is_import_from_zip = false;
        this.lookup_link = null;
        this.lookup_code = null;
        this.tax_authority_code = null;
        this.xml_type = null;
        this.xml_string = null;
        this.json_data = {
            statusCert: null,
            signDateCompareCert: null,
            signDateCompareInv: null,
            statusFileXml: null,
            capBoi: null,
            kyBoi: null,
            thoiHanChungThu: null,
            thoiGianKyHoaDon: null,
            tax_code: null,
            name: null,
            business_address: null,
            status: null,
            mstNB: null
        };
        this.adjustment_type = adjustment_type;
    }
    return Invoice;
}());

// {
//   product_code: string,
//   order: string,
//   product_name: string,
//   unit_code: string,
//   unit_name: string,
//   price: string,
//   quantity: string,
//   vat: string,
//   amount: string,
//   amount_vat: string,
//   is_promotion: string,
//   product_group: string,
// }
// {
//   order: string,
//   file_name: string,
//   file_content: string,
// }


/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"va-file-upload\">\r\n  <ng-container *ngIf=\"fileData.length; else noFilechosed\">\r\n    <ul id=\"list-file\">\r\n      <li *ngFor=\"let file of fileData; index as i\">\r\n        <span>{{ i + 1 }}. {{ file.file_name }}</span>\r\n        <a *ngIf=\"file.file_name !== this.frmData.invoice_type_name\" href=\"javascript:void(0)\" (click)=\"removeFile(i, file.file_name)\" class=\"remove-file\"><i\r\n          class=\"fa fa-times\"></i></a>\r\n        <a href=\"javascript:void(0)\" (click)=\"view(file)\" class=\"remove-file\" style=\"margin-right: 5px;\"><i\r\n          class=\"fa fa-eye\"></i></a>\r\n      </li>\r\n      <div style=\"clear: both;\"></div>\r\n    </ul>\r\n    <div class=\"img-upload-second\">\r\n      <i [class]=\"_translate.ICONS.upload_3x\" style=\"color: #007BFF\" (click)=\"choseFile1()\"></i>\r\n      <!-- <img src=\"assets/img/TaiTepDinhKem.png\" (click)=\"choseFile()\"> -->\r\n      <p>{{_translate.CONTROLL.LABEL.note_upload_file}}</p>\r\n      <input id=\"file-input1\" type=\"file\" accept=\"{{extFile}}\" (change)=\"fileChanged($event)\" class=\"d-none\"/>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noFilechosed>\r\n    <div class=\"img-upload-first\">\r\n      <i [class]=\"_translate.ICONS.upload_3x\" style=\"color: #007BFF\" (click)=\"choseFile()\"></i>\r\n      <!-- <img src=\"assets/img/TaiTepDinhKem.png\" (click)=\"choseFile()\"> -->\r\n      <p>{{_translate.CONTROLL.LABEL.note_upload_file}}</p>\r\n      <input id=\"file-input\" class=\"d-none\" type=\"file\" accept=\"{{extFile}}\" (change)=\"fileChanged($event)\"/>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".va-file-upload{background:#fff;width:100%;height:160px;border:1px dashed grey}.va-file-upload .img-upload-first{text-align:center}.va-file-upload .img-upload-first img{margin-top:45px;cursor:pointer}.va-file-upload .img-upload-first i{margin-top:45px;cursor:pointer}.va-file-upload .img-upload-first p{margin-top:10px}.va-file-upload ul#list-file{list-style-type:none;height:80px;overflow-y:scroll;padding:0px 20px}.va-file-upload ul#list-file li{padding:5px 0px;width:100%}.va-file-upload ul#list-file li+li{border-top:1px solid #E3E3E3}.va-file-upload ul#list-file .remove-file{border:1px solid #0E77BB;float:right;padding-left:3px;padding-top:1px;padding-bottom:1px}.va-file-upload ul#list-file .remove-file i{width:15px}.va-file-upload .img-upload-second{text-align:center}.va-file-upload .img-upload-second img{margin-top:10px;width:40px;height:auto;cursor:pointer}.va-file-upload .img-upload-second p{margin-top:10px}.is-dragover{background:lavender}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FileUploadInvoiceBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadInvoiceBuyComponent", function() { return FileUploadInvoiceBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileUploadInvoiceBuyComponent = /** @class */ (function () {
    function FileUploadInvoiceBuyComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.extFile = ".xlsx,.docx,.pdf,.xml";
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FileUploadInvoiceBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.invoiceExp == "MO_RONG_FILE")
            this.extFile = ".xlsx,.docx,.pdf,.xml,.html";
        $('.va-file-upload').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .on('dragover dragenter', function (e) {
            $('.va-file-upload').addClass('is-dragover');
        })
            .on('dragleave dragend drop', function (e) {
            $('.va-file-upload').removeClass('is-dragover');
        })
            .on('drop', function (e) {
            var file = e.originalEvent.dataTransfer.files;
            _this.dropFileChanged(file[0]);
        });
    };
    FileUploadInvoiceBuyComponent.prototype.removeFile = function (i, fileName) {
        if (this.frmData.invoice_type_name === fileName) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Error', 'error');
            return;
        }
        else {
            this.fileData.splice(i, 1);
            this.fileChange.emit(this.fileData);
        }
    };
    FileUploadInvoiceBuyComponent.prototype.view = function (file) {
        var arrFile = file.file_name.split('.');
        _core_helper_Helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, arrFile[arrFile.length], file.file_content);
    };
    FileUploadInvoiceBuyComponent.prototype.choseFile = function () {
        document.getElementById('file-input').click();
    };
    FileUploadInvoiceBuyComponent.prototype.choseFile1 = function () {
        document.getElementById('file-input1').click();
    };
    FileUploadInvoiceBuyComponent.prototype.fileChanged = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (e.target.files[0].size <= 2000000) {
            var extension = file.name.split('.').pop();
            if (extension === 'docx' || extension === 'xlsx' || extension === 'pdf' || extension === 'xml' || extension === 'html') {
                var fileReader_1 = new FileReader();
                fileReader_1.readAsDataURL(file);
                fileReader_1.onload = function (e) {
                    var base64result = fileReader_1.result.toString().split(',')[1];
                    _this.fileData.unshift({
                        order: 'BK',
                        file_name: file.name,
                        file_content: base64result,
                    });
                    if (document.getElementById('list-file')) {
                        document.getElementById('list-file').scrollTop = 0;
                    }
                    _this.fileChange.emit(_this.fileData);
                };
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.file_upload_no_access + ", html", 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Yêu cầu file nhỏ hơn 2MB', 'error');
        }
    };
    FileUploadInvoiceBuyComponent.prototype.dropFileChanged = function (file) {
        var _this = this;
        var extension = file.name.split('.').pop();
        if (extension === 'docx' || extension === 'xlsx' || extension === 'pdf' || extension === 'xml' || extension === 'html') {
            var fileReader_2 = new FileReader();
            fileReader_2.readAsDataURL(file);
            fileReader_2.onload = function (e) {
                var base64result = fileReader_2.result.toString().split(',')[1];
                _this.fileData.unshift({
                    type: 'BK',
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.fileChange.emit(_this.fileData);
            };
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.file_upload_no_access + ", html", 'error');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('fileChange'),
        __metadata("design:type", Object)
    ], FileUploadInvoiceBuyComponent.prototype, "fileChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileUploadInvoiceBuyComponent.prototype, "fileData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadInvoiceBuyComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadInvoiceBuyComponent.prototype, "invoiceExp", void 0);
    FileUploadInvoiceBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload-invoice-buy',
            template: __webpack_require__(/*! ./file-upload-invoice-buy.component.html */ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.html"),
            styles: [__webpack_require__(/*! ./file-upload-invoice-buy.component.scss */ "./src/app/modules/invoice-buy/shared/file/file-upload-invoice-buy/file-upload-invoice-buy.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FileUploadInvoiceBuyComponent);
    return FileUploadInvoiceBuyComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/invoice.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/invoice.pipe.ts ***!
  \************************************************************/
/*! exports provided: InvoicePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePipe", function() { return InvoicePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoicePipe = /** @class */ (function () {
    function InvoicePipe() {
    }
    InvoicePipe.prototype.transform = function (type_code) {
        switch (type_code) {
            case "HOP_LE":
                return "Hợp lệ";
            case "KHONG_HOP_LE":
                return "Không hợp lệ";
            case "CHUA_NHAN":
                return "Chưa nhận";
            default:
                break;
        }
    };
    InvoicePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'diaryType' })
    ], InvoicePipe);
    return InvoicePipe;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">{{_translate.CONTROLL.LABEL.inv_number_info}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row content\">\r\n      <div class=\"col-md-12\">\r\n        <form>\r\n          <div class=\"row pt-1 pb-1\">\r\n            <!-- <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.tax_code}} :</label> -->\r\n            <div class=\"col-md-12\">\r\n              <span class=\"font-weight-bold\">{{message}}</span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 13px\">\r\n      <div  class=\"col-md-8\">\r\n        <h3 *ngIf=\"isError\">{{_translate.CONTROLL.LABEL.check_inv_number_tct}} <button class=\"button-open\" (click)=\"demo()\" type=\"button\">{{_translate.CONTROLL.LABEL.click_here}}</button></h3>\r\n      </div>\r\n      <div class=\"col-md-4 text-right\">\r\n        <button type=\"button\" class=\"button-content-style\" (click)=\"close()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.button-open{background:transparent;border:none;color:#1a0dab;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CheckInvoiceNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInvoiceNumberComponent", function() { return CheckInvoiceNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckInvoiceNumberComponent = /** @class */ (function () {
    function CheckInvoiceNumberComponent(authService, bsModalRef, translate) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.translate = translate;
        this.data = {};
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    CheckInvoiceNumberComponent.prototype.ngOnInit = function () {
    };
    CheckInvoiceNumberComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    CheckInvoiceNumberComponent.prototype.demo = function () {
        var win = window.open('http://tracuuhoadon.gdt.gov.vn/tbphtc.html', '_blank');
        win.focus();
    };
    CheckInvoiceNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-invoice-number',
            template: __webpack_require__(/*! ./check-invoice-number.component.html */ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.html"),
            styles: [__webpack_require__(/*! ./check-invoice-number.component.scss */ "./src/app/modules/invoice-buy/shared/modal/check-invoice-number/check-invoice-number.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CheckInvoiceNumberComponent);
    return CheckInvoiceNumberComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">{{_translate.GRID.INVOICE.infor_buyer}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row content\">\r\n      <div class=\"col-md-12\">\r\n        <form *ngIf=\"!isShow\">\r\n          <div class=\"row pt-1 pb-1\">\r\n            <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.tax_code}} :</label>\r\n            <div class=\"col-md-7\">\r\n              <span class=\"font-weight-bold\">{{data.tax_code}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-1 pb-1\">\r\n            <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.customer_name}} :</label>\r\n            <div class=\"col-md-7\">\r\n              <span>{{data.name}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-1 pb-1\">\r\n            <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.address}} :</label>\r\n            <div class=\"col-md-7\">\r\n              <span>{{data.business_address}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-1 pb-1\">\r\n            <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.status_active}} :</label>\r\n            <div class=\"col-sm-7\">\r\n              <span class=\"font-weight-bold\">{{trangthai}}</span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <form *ngIf=\"isShow\">\r\n          <div class=\"row pt-1 pb-1\">\r\n            <!-- <label class=\"col-md-5 text-right\">{{_translate.CONTROLL.LABEL.tax_code}} :</label> -->\r\n            <div class=\"col-md-12\">\r\n              <span class=\"font-weight-bold\">{{message}}</span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 13px\">\r\n      <div class=\"col-md-8\">\r\n        <h3 *ngIf=\"isShow\">{{_translate.CONTROLL.LABEL.check_tct}} <button class=\"button-open\" (click)=\"demo()\" type=\"button\">{{_translate.CONTROLL.LABEL.click_here}}</button></h3>\r\n      </div>\r\n      <div class=\"col-md-4 text-right\">\r\n        <button type=\"button\" class=\"button-content-style\" (click)=\"close()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.button-open{background:transparent;border:none;color:#1a0dab;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotifyTaxCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyTaxCodeComponent", function() { return NotifyTaxCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotifyTaxCodeComponent = /** @class */ (function () {
    function NotifyTaxCodeComponent(authService, bsModalRef, translate) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.translate = translate;
        this.data = {};
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    NotifyTaxCodeComponent.prototype.ngOnInit = function () {
        switch (this.data.status) {
            case "00":
                this.trangthai = "NNT đang hoạt động";
                break;
            case "01":
                this.trangthai = "NNT ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST";
                break;
            case "02":
                this.trangthai = "NNT đã chuyển cơ quan thuế quản lý";
                break;
            case "03":
                this.trangthai = "NNT ngừng HĐ nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST";
                break;
            case "04":
                this.trangthai = "NNT đang hoạt động (chưa đầy đủ thủ tục cấp MST)";
                break;
            case "05":
                this.trangthai = "NNT tạm ngừng KD có thời hạn";
                break;
            case "06":
                this.trangthai = "NNT không hoạt động tại địa chỉ đã đăng ký";
                break;
        }
    };
    NotifyTaxCodeComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    NotifyTaxCodeComponent.prototype.demo = function () {
        var win = window.open('http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp', '_blank');
        win.focus();
    };
    NotifyTaxCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notify-tax-code',
            template: __webpack_require__(/*! ./notify-tax-code.component.html */ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.html"),
            styles: [__webpack_require__(/*! ./notify-tax-code.component.scss */ "./src/app/modules/invoice-buy/shared/modal/notify-tax-code/notify-tax-code.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], NotifyTaxCodeComponent);
    return NotifyTaxCodeComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title text-uppercase\">{{_translate.GRID.INVOICE.add_multiple_invoice_buy}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"container\">\r\n    <div class=\"row mb-2\" style=\"position: relative\">\r\n      <label class=\"col-md-3 text-right label-text-item pt-2\">\r\n        {{_translate.GRID.INVOICE.file_invoice}}\r\n      </label>\r\n      <div class=\"col-md-9 pl-0\">\r\n        <input style=\"position: relative\" type=\"text\"\r\n               class=\"file-upload\" id=\"email\"\r\n               placeholder=\"Nhấn để tải lên(chỉ hỗ trợ file .xml;)\"\r\n               [value]=\"totalArray\"\r\n               name=\"email\">\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"clickChooseFile()\"\r\n          class=\"text-primary button-upload border-0 bg-transparent\">\r\n          <i class=\"icon-button fa fa-upload icon-size\"></i>\r\n        </button>\r\n        <input type=\"file\" multiple=\"multiple\" accept='text/xml' id=\"id-upload-file\" class=\"d-none\"\r\n               (change)=\"fileChanged($event)\">\r\n        <span style=\"font-size: 12px\"\r\n              class=\"text-color-blue\">{{_translate.CONTROLL.LABEL.file_must_be_XML_format}}</span>\r\n\r\n        <div *ngIf=\"isShowPrecent\" class=\"pt-2\">\r\n          <div class=\"progress\" style=\"height: 10px;\">\r\n            <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\r\n                 role=\"progressbar\"\r\n                 [ngStyle]=\"{'width':+ widthPrecent +'%'}\"\r\n                 aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n            </div>\r\n          </div>\r\n          <div class=\"pt-1\">\r\n            <span>Đã nạp: {{showWidthPrecent}}%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isShowAllResult\" class=\"row mt-4\">\r\n      <div class=\"col-md-3 text-right\">\r\n        <h3>{{_translate.GRID.INVOICE.result}} :</h3>\r\n      </div>\r\n      <div class=\"col-md-9 pl-0\">\r\n                <span\r\n                  *ngIf=\"arrDataError.length > 0\"> {{(arrDataDone.length).toString() + '/' + (totalArrayFile.length).toString()}}\r\n                  hóa đơn thành công ({{(arrDataError.length).toString()}} thất bại)</span>\r\n        <span\r\n          *ngIf=\"arrDataError.length === 0\"> {{(arrDataDone.length).toString() + '/' + (totalArrayFile.length).toString()}}\r\n          hóa đơn thành công</span>\r\n        <div *ngIf=\"arrDataError.length > 0\">\r\n          <button type=\"button\" (click)=\"setCollap()\"\r\n                  class=\"text-priramy button-file\">Chi tiết kết quả lỗi\r\n          </button>\r\n          <button type=\"button\" (click)=\"exportExcel()\"\r\n                  class=\"text-priramy button-file ml-2\">Tải về file chi tiết lỗi\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"arrDataError.length > 0\" class=\"col-md-12 mt-4\">\r\n        <div [ngClass]=\"!isCollapsed ? 'hidden': 'box'\">\r\n          <div class=\"table-responsive-lg\">\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">{{_translate.CONTROLL.LABEL.file_name}}</th>\r\n                <th scope=\"col\">{{_translate.GRID.INVOICE.invoice_number}}</th>\r\n                <th class=\"text-center\" scope=\"col\">{{_translate.GRID.INVOICE.template_code}}</th>\r\n                <th scope=\"col\">{{_translate.GRID.INVOICE.invoice_series}}</th>\r\n                <th class=\"text-center\" scope=\"col\">{{_translate.CONTROLL.LABEL.error_name}}</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let item of arrDataError; let i = index\">\r\n                <th scope=\"row\">{{i + 1}}</th>\r\n                <td>{{item.name}}</td>\r\n                <td style=\"width:100px\">{{item.invoice_number}}</td>\r\n                <td>{{item.template_code}}</td>\r\n                <td>{{item.invoice_series}}</td>\r\n                <td>{{item.errorMess}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <button type=\"button\" [disabled]=\"checkSubmitBtn\" [ngClass]=\"checkSubmitBtn ? 'styleDisable':''\"\r\n                class=\"button-content-style\" (click)=\"submit()\">\r\n          <span> {{_translate.CONTROLL.BUTTON.import_data}}</span>\r\n        </button>\r\n        <button type=\"button\" class=\"button-content-style\" [disabled]=\"checkSubmit\" (click)=\"close()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.close}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.demo .modal-content{margin-top:20% !important}.file-upload{width:100%;height:30px;font-size:14px}.text-color-blue{color:#337ab7}.styleDisable{opacity:0.8}.icon-button{font-size:25px}.button-upload{position:absolute;right:15px;top:3px}.box{height:280px;transition:all 1s linear;overflow:scroll;display:block}.hidden{height:0;opacity:0;overflow:hidden;transition:all 0.5s linear}.button-file{border:none;background-color:transparent;color:#0C11FF;-webkit-text-decoration:#0C11FF;text-decoration:#0C11FF}\n"

/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UploadFileZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileZipComponent", function() { return UploadFileZipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/invoice-buy/shared/class/invoice.model */ "./src/app/modules/invoice-buy/shared/class/invoice.model.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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











var UploadFileZipComponent = /** @class */ (function () {
    function UploadFileZipComponent(authService, translate, bsModalRef, invoiceBuyService) {
        this.authService = authService;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.invoiceBuyService = invoiceBuyService;
        this.checkSubmit = false;
        this.checkSubmitBtn = false;
        this.arrData = [];
        this.arrDataBeforeSubmit = [];
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_6__["Invoice"]('1');
        this.totalArray = '';
        this.checkUpdateLoadList = false;
        this.widthPrecent = '0';
        this.showWidthPrecent = '0';
        this.arrDataDone = [];
        this.arrDataError = [];
        this.isShowPrecent = false;
        this.isShowAllResult = false;
        this.tax_code_local = null;
        this.isCollapsed = false;
        this.totalArrayFile = [];
        this.system_parameter = {};
        this.lstFileDinhKem = [];
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    UploadFileZipComponent.prototype.ngOnInit = function () {
        var dataUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tax_code_local = dataUser.account.tax_code;
        this.configs = this.authService.getConfigs();
    };
    UploadFileZipComponent.prototype.submit = function () {
        if (!this.arrData.length) {
            _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(this._translate.VALIDATION.file_invoice_empty, 'error');
            return;
        }
        for (var i = 0; i < this.arrData.length; i++) {
            this.arrDataBeforeSubmit.push(this.parseXMLtoObject(this.arrData[i].data, this.arrData[i].name));
        }
        this.checkObjectNull(this.arrDataBeforeSubmit);
    };
    UploadFileZipComponent.prototype.close = function () {
        if (this.checkUpdateLoadList) {
            this.bsModalRef.content.LoadList = 'LoadList';
        }
        this.bsModalRef.hide();
    };
    UploadFileZipComponent.prototype.clickChooseFile = function () {
        document.getElementById('id-upload-file').click();
    };
    UploadFileZipComponent.prototype.fileChanged = function ($event) {
        var _this = this;
        var promises = [];
        var arrXML = $event.target.files;
        this.arrData = [];
        this.lstFileDinhKem = [];
        _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        var _loop_1 = function (i) {
            var filePromise = new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsText(arrXML[i]);
                reader.onload = function () { return resolve({ name: arrXML[i].name, data: reader.result }); };
            });
            promises.push(filePromise);
        };
        for (var i = 0; i < arrXML.length; i++) {
            _loop_1(i);
        }
        Promise.all(promises).then(function (fileContents) {
            _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
            if (fileContents && fileContents.length > 0) {
                _this.arrData = fileContents.filter(function (p) { return p.name.includes('.xml'); });
                _this.lstFileDinhKem = fileContents.filter(function (p) { return !p.name.includes('.xml'); });
                _this.totalArrayFile = _this.arrData;
                _this.totalArray = (_this.arrData.length).toString() + ' files được tải lên!';
                _this.isShowAllResult = false;
                _this.checkSubmitBtn = false;
                _this.arrDataError = [];
                _this.arrDataBeforeSubmit = [];
            }
        });
    };
    UploadFileZipComponent.prototype.checkObjectNull = function (value) {
        var arrData = [];
        var arrDataErr = [];
        for (var i = 0; i < value.length; i++) {
            if (value[i].input_invoice_files) {
                arrData.push(value[i]);
            }
            else {
                arrDataErr.push({
                    invoice_series: null,
                    template_code: null,
                    invoice_number: null,
                    name: value[i].name,
                    errorMess: 'File hóa đơn không tồn tại',
                });
            }
        }
        this.checkDuplicate(arrData, arrDataErr);
        // this.handleDataSubmit(arrData, arrDataErr);
    };
    UploadFileZipComponent.prototype.checkDuplicate = function (value, arrDataErr) {
        var arrData = value.reduce(function (accumulator, current) {
            if (checkIfAlreadyExist(current)) {
                arrDataErr.push({
                    invoice_series: current.input_invoice.invoice_series,
                    template_code: current.input_invoice.template_code,
                    invoice_number: current.input_invoice.invoice_number,
                    name: current.input_invoice_files[0].file_name,
                    errorMess: 'File hóa đơn bị trùng',
                });
                return accumulator;
            }
            else {
                // add item to array
                return accumulator.concat([current]);
            }
            function checkIfAlreadyExist(currentVal) {
                return accumulator.some(function (item) {
                    return (item.input_invoice.invoice_series === currentVal.input_invoice.invoice_series &&
                        item.input_invoice.invoice_number === currentVal.input_invoice.invoice_number &&
                        item.input_invoice.template_code === currentVal.input_invoice.template_code);
                });
            }
        }, []);
        this.handleDataSubmit(arrData, arrDataErr);
    };
    UploadFileZipComponent.prototype.handleDataSubmit = function (value, arrDataErr) {
        value.map(function (item) {
            if (!item.input_invoice.decimal_places_json) {
                if (item.input_invoice.currency_rate) {
                    item.input_invoice.currency_rate = item.input_invoice.currency_rate.replace(',', '.');
                }
                item.input_invoice_products.map(function (valueOfItem) {
                    if (valueOfItem.quantity) {
                        valueOfItem.quantity = parseInt(valueOfItem.quantity.replace(',', '.'), 10);
                    }
                    else {
                        valueOfItem.quantity = null;
                    }
                    if (valueOfItem.price) {
                        valueOfItem.price = parseInt(valueOfItem.price.replace(',', '.'), 10);
                    }
                    else {
                        valueOfItem.price = null;
                    }
                    if (valueOfItem.amount) {
                        valueOfItem.amount = parseInt(valueOfItem.amount.replace(',', '.'), 10);
                    }
                    else {
                        valueOfItem.amount = null;
                    }
                    if (valueOfItem.vat) {
                        valueOfItem.vat = parseInt(valueOfItem.vat.replace(',', '.'), 10);
                    }
                    else {
                        valueOfItem.vat = null;
                    }
                    if (valueOfItem.amount_vat) {
                        valueOfItem.amount_vat = parseInt(valueOfItem.amount_vat.replace(',', '.'), 10);
                    }
                    else {
                        valueOfItem.amount_vat = null;
                    }
                    if (valueOfItem.amount && valueOfItem.amount_vat) {
                        valueOfItem.amount_after_vat = valueOfItem.amount + valueOfItem.amount_vat;
                    }
                    else if (valueOfItem.amount && !valueOfItem.amount_vat) {
                        valueOfItem.amount_after_vat = valueOfItem.amount;
                    }
                    else {
                        valueOfItem.amount_after_vat = null;
                    }
                    if (valueOfItem.unit_code === undefined) {
                        valueOfItem.unit_code = null;
                    }
                });
            }
        });
        // validate
        this.validArrItem(value, arrDataErr);
    };
    UploadFileZipComponent.prototype.validArrItem = function (value, arrDataErr) {
        var _this = this;
        var arrData = [];
        if (Array.isArray(value)) {
            value.forEach(function (item) {
                if (item.input_invoice.seller_tax_code && item.input_invoice.invoice_number && item.input_invoice.template_code && item.input_invoice.invoice_date && item.input_invoice.invoice_series) {
                    arrData.push(item);
                }
                else {
                    arrDataErr.push({
                        invoice_series: item.input_invoice.invoice_series,
                        template_code: item.input_invoice.template_code,
                        invoice_number: item.input_invoice.invoice_number,
                        name: item.input_invoice_files[0].file_name,
                        errorMess: _this._translate.VALIDATION.some_information_empty
                    });
                }
            });
            this.checkTaxCodeFile(arrData, arrDataErr);
        }
    };
    UploadFileZipComponent.prototype.checkTaxCodeFile = function (value, arrDataErr) {
        var _this = this;
        var arrData = [];
        if (Array.isArray(value)) {
            value.forEach(function (item) {
                if (item.input_invoice.buyer_tax_code === _this.tax_code_local) {
                    arrData.push(item);
                }
                else {
                    arrDataErr.push({
                        invoice_series: item.input_invoice.invoice_series,
                        template_code: item.input_invoice.template_code,
                        invoice_number: item.input_invoice.invoice_number,
                        name: item.input_invoice_files[0].file_name,
                        errorMess: _this._translate.VALIDATION.do_not_tax_code_unit
                    });
                }
            });
            if (arrData.length > 0) {
                // this.submitData(arrData, arrDataErr);
                this.handleDataPostPromiseAll(arrData, arrDataErr);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Tất cả hóa đơn không đúng mã số thuế của đơn vị!', 'error');
            }
        }
    };
    UploadFileZipComponent.prototype.handleDataPostPromiseAll = function (value, arrDataErr) {
        var arrDataPostAPi = [];
        while (value.length > 0) {
            arrDataPostAPi.push(value.splice(0, 3));
        }
        this.submitDataProMise(arrDataPostAPi, arrDataErr);
    };
    UploadFileZipComponent.prototype.submitDataProMise = function (value, arrDataErr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arrDone, i, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrDone = [];
                        _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
                        this.checkSubmit = true;
                        this.checkSubmitBtn = true;
                        this.isShowPrecent = true;
                        this.totalPrecent = 100 / value.length;
                        this.totalArraySubmit = value.length;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < value.length)) return [3 /*break*/, 4];
                        j = i + 1;
                        this.widthPrecent = (this.totalPrecent * j).toString();
                        this.showWidthPrecent = ((this.totalPrecent * j).toFixed(0)).toString();
                        return [4 /*yield*/, Promise.all(value[i].map(function (item) { return _this.invoiceBuyService.apiInvoice(item).toPromise().then(function (dataItem) {
                                return {
                                    status: dataItem.status,
                                    message: dataItem.message,
                                    invoice_series: item.input_invoice.invoice_series,
                                    template_code: item.input_invoice.template_code,
                                    invoice_number: item.input_invoice.invoice_number,
                                    name: item.input_invoice_files[0].file_name,
                                };
                            }); }))
                                .then(function (result) {
                                result.forEach(function (valueItem) {
                                    if (valueItem.status === 'success') {
                                        arrDone.push(valueItem.name);
                                    }
                                    else {
                                        arrDataErr.push({
                                            invoice_series: valueItem.invoice_series,
                                            template_code: valueItem.template_code,
                                            invoice_number: valueItem.invoice_number,
                                            name: valueItem.name,
                                            errorMess: valueItem.message
                                        });
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                        _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(this._translate.NOTIFY.add_invoice_complete, 'success');
                        this.arrDataDone = arrDone;
                        this.arrDataError = arrDataErr;
                        this.isShowPrecent = false;
                        this.checkUpdateLoadList = true;
                        this.checkSubmit = false;
                        this.widthPrecent = '0';
                        this.showWidthPrecent = '0';
                        this.isShowAllResult = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadFileZipComponent.prototype.parseXMLtoObject = function (value, nameFile) {
        var _this = this;
        var a;
        var dataBase64Code = window.btoa(unescape(encodeURIComponent(value)));
        // paser to base64 to a string
        // const b = decodeURIComponent(escape(window.atob(a)));
        xml2js__WEBPACK_IMPORTED_MODULE_4___default.a.parseString(value, function (err, result) {
            if (result) {
                if (result.hasOwnProperty('Invoice')) {
                    var X509Certificate = '';
                    if (result['Invoice']['Signature'])
                        X509Certificate = result['Invoice']['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    a = _this.getValueToObject('dreamSoft', result['Invoice']['Content'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty('inv:invoice')) {
                    var X509Certificate = '';
                    if (result['inv:invoice']['Signature'])
                        X509Certificate = result['inv:invoice']['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    a = _this.getValueToObject('all', result['inv:invoice']['inv:invoiceData'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty('inv:transaction')) {
                    var X509Certificate = '';
                    if (result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['Signature'])
                        X509Certificate = result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
                    a = _this.getValueToObject('all', result['inv:transaction']['inv:invoices'][0]['inv:invoice'][0]['inv:invoiceData'][0], nameFile, dataBase64Code, X509Certificate);
                }
                else if (result.hasOwnProperty("HDon")) {
                    a = _this.readDataFromXmlTCT(result, nameFile, dataBase64Code);
                }
                else {
                    a = _this.returnObjectError(nameFile);
                }
            }
            else {
                a = _this.returnObjectError(nameFile);
            }
        });
        return a;
    };
    UploadFileZipComponent.prototype.returnObjectError = function (fileName) {
        return {
            name: fileName,
            input_invoice_files: null
        };
    };
    UploadFileZipComponent.prototype.getValueToObject = function (type, value, nameFile, dataBase64Code, signature) {
        var object = {};
        for (var property in value) {
            if (value.hasOwnProperty(property)) {
                if (typeof value[property][0] === 'string') {
                    object[property] = value[property][0].trim();
                }
                else {
                    object[property] = value[property][0];
                }
            }
        }
        if (type === 'dreamSoft') {
            return this.addValueToFormFormat1(object, nameFile, dataBase64Code, signature);
        }
        else if (type === 'all') {
            return this.addValueToFormFormat2(object, nameFile, dataBase64Code, signature);
        }
    };
    // done
    UploadFileZipComponent.prototype.addValueToFormFormat1 = function (object, nameFile, dataBase64Code, signature) {
        var invoice_type_name = nameFile;
        var signature_content = signature;
        var invoice_date = "";
        var sign_date = "";
        if (object['ArisingDate'])
            invoice_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['ArisingDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        if (object['SignDate'])
            sign_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['SignDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        var template_code = object['InvoicePattern'];
        var payment_method_view_name;
        if (object.hasOwnProperty('Kind_of_Payment')) {
            payment_method_view_name = object['Kind_of_Payment'];
        }
        else {
            payment_method_view_name = object['PaymentMethod'];
        }
        var invoice_series = object['SerialNo'];
        var seller_legal_name = object['ComName'];
        var invoice_number = object['InvoiceNo'];
        var currency_code = object['CurrencyUnit'];
        var currency_rate = object['ExchangeRate'];
        var adjustment_type = '1';
        var seller_tax_code = object['ComTaxCode'];
        var seller_address = object['ComAddress'];
        var seller_mobile = object['ComPhone'];
        var seller_email;
        if (object['ComEmail']) {
            if (object['ComEmail'] !== '.') {
                seller_email = object['ComEmail'];
            }
            else {
                seller_email = null;
            }
        }
        else {
            seller_email = null;
        }
        var seller_fax_number;
        if (object.hasOwnProperty('ComFaxCode')) {
            seller_fax_number = object['ComFaxCode'];
        }
        var buyer_legal_name = object['CusName'];
        var buyer_tax_code = object['CusTaxCode'];
        var buyer_mobile = object['CusPhone'];
        var buyer_address = object['CusPhone'];
        var buyer_email = object['CusEmail'];
        var seller_bank_account;
        if (object.hasOwnProperty('ComBankNo')) {
            if (object['ComBankName']) {
                seller_bank_account = object['ComBankNo'] + ' - ' + object['ComBankName'];
            }
            else {
                seller_bank_account = object['ComBankName'];
            }
        }
        else {
            seller_bank_account = object['ComBankName'];
        }
        var amount = parseInt(object['Total'].replace(',', '.'), 10);
        var total_amount_vat;
        if (object.hasOwnProperty('VATAmount')) {
            total_amount_vat = parseInt(object['VATAmount'].replace(',', '.'), 10);
        }
        else {
            total_amount_vat = parseInt(object['VAT_Amount'].replace(',', '.'), 10);
        }
        var total_payment = parseInt(object['Amount'].replace(',', '.'), 10);
        var total_payment_in_word;
        if (object.hasOwnProperty('Amount_words')) {
            total_payment_in_word = object['Amount_words'];
        }
        else {
            total_payment_in_word = object['AmountInWords'];
        }
        var lstFile = [];
        lstFile.push({
            order: 'DK',
            file_name: nameFile,
            file_content: dataBase64Code,
            is_file_import: true
        });
        if (this.lstFileDinhKem && this.lstFileDinhKem.length > 0) {
            var tenFileHD_1 = nameFile.split('.')[0];
            this.lstFileDinhKem.forEach(function (file) {
                var tenFileDK = file.name.split('.')[0];
                if (tenFileDK == tenFileHD_1) {
                    var endCodeDK = window.btoa(unescape(encodeURIComponent(file.data)));
                    var fileDK = {
                        order: 'BK',
                        file_name: file.name,
                        file_content: endCodeDK,
                    };
                    lstFile.push(fileDK);
                }
            });
        }
        var input_invoice_files = lstFile;
        var input_invoice_products;
        if (object['Products']) {
            var arrItem = object['Products']['Product'];
            for (var i = 0; i < arrItem.length; i++) {
                for (var keyItem in arrItem[i]) {
                    if (arrItem[i].hasOwnProperty(keyItem)) {
                        arrItem[i][keyItem] = arrItem[i][keyItem][0].trim();
                    }
                }
            }
            input_invoice_products = this.invoiceBuyService.formatArrayItem(arrItem);
        }
        return {
            input_invoice: {
                total_payment_in_word: total_payment_in_word,
                total_payment: total_payment,
                total_amount_vat: total_amount_vat,
                amount: amount,
                seller_bank_account: seller_bank_account,
                buyer_email: buyer_email,
                buyer_address: buyer_address,
                buyer_mobile: buyer_mobile,
                buyer_tax_code: buyer_tax_code,
                buyer_legal_name: buyer_legal_name,
                seller_fax_number: seller_fax_number,
                seller_mobile: seller_mobile,
                seller_email: seller_email,
                invoice_series: invoice_series,
                seller_legal_name: seller_legal_name,
                invoice_number: invoice_number,
                currency_code: currency_code,
                currency_rate: currency_rate,
                adjustment_type: adjustment_type,
                seller_tax_code: seller_tax_code,
                seller_address: seller_address,
                payment_method_view_name: payment_method_view_name,
                template_code: template_code,
                invoice_type_name: invoice_type_name,
                invoice_date: invoice_date,
                origin_id: null,
                note: null,
                seller_contact_name: null,
                seller_surrogate_name: null,
                seller_tax_department: null,
                buyer_name: null,
                auto_value: false,
                auto_value_price: false,
                amount_vat5: null,
                amount_vat10: null,
                amount_vatx: null,
                amount_vat0: null,
                total_amount_product_vat5: null,
                total_amount_product_vat10: null,
                total_amount_product_vatx: null,
                total_amount_product_vat0: null,
                amount_discount: null,
                system_code: null,
                export_from_ihd: 0,
                sign_date: sign_date,
                signature_content: signature_content,
                version_xml: "1",
                xml_type: "2",
                is_import_from_zip: true,
                json_data: {
                    statusCert: null,
                    signDateCompareCert: null,
                    signDateCompareInv: null,
                    statusFileXml: null,
                    capBoi: null,
                    kyBoi: null,
                    thoiHanChungThu: null,
                    thoiGianKyHoaDon: null,
                    tax_code: null,
                    name: null,
                    business_address: null,
                    status: null,
                    mstNB: null
                }
            },
            input_invoice_products: input_invoice_products,
            input_invoice_files: input_invoice_files
        };
    };
    /* Đọc file xml từ Tổng Cục Thuế */
    UploadFileZipComponent.prototype.readDataFromXmlTCT = function (content, nameFile, dataBase64Code) {
        var _this = this;
        this.frmData = new _modules_invoice_buy_shared_class_invoice_model__WEBPACK_IMPORTED_MODULE_6__["Invoice"]('1');
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var TTChung = content['HDon']['DLHDon'][0]['TTChung'][0];
        var NBan = content['HDon']['DLHDon'][0]['NDHDon'][0]['NBan'][0];
        var NMua = content['HDon']['DLHDon'][0]['NDHDon'][0]['NMua'][0];
        var DSHHDVu = content['HDon']['DLHDon'][0]['NDHDon'][0]['DSHHDVu'][0]['HHDVu'];
        var TToan = content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0];
        var X509Certificate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['KeyInfo'][0]['X509Data'][0]['X509Certificate'][0];
        var THTTLTSuat = [];
        if (content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0]['THTTLTSuat'])
            THTTLTSuat = content['HDon']['DLHDon'][0]['NDHDon'][0]['TToan'][0]['THTTLTSuat'][0]['LTSuat'];
        var signDate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['Object'][0]['SignatureProperties'][0]['SignatureProperty'][0]['SigningTime'][0]._;
        var TTHDLQuan = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"];
        if (TTHDLQuan) {
            var TCHDon = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"][0]["TCHDon"];
            if (TCHDon) {
                TCHDon = content['HDon']['DLHDon'][0]['TTChung'][0]["TTHDLQuan"][0]["TCHDon"][0];
                if (TCHDon == "1")
                    this.frmData.adjustment_type = "3";
                else if (TCHDon == "2")
                    this.frmData.adjustment_type = "5";
            }
            else
                this.frmData.adjustment_type = "1";
        }
        else
            this.frmData.adjustment_type = "1";
        if (!signDate)
            signDate = content['HDon']['DSCKS'][0]['NBan'][0]['Signature'][0]['Object'][0]['SignatureProperties'][0]['SignatureProperty'][0]['SigningTime'][0];
        var MaCQT = "";
        if (content['HDon']['MCCQT'])
            MaCQT = content['HDon']['MCCQT'][0]._;
        this.frmData.tax_authority_code = MaCQT;
        this.frmData.invoice_type_name = nameFile;
        this.frmData.xml_type = "3";
        /* Thông tin chung */
        for (var property in TTChung) {
            var valueI = TTChung[property][0];
            switch (property) {
                case "KHMSHDon":
                    this.frmData.template_code = valueI;
                    break;
                case "KHHDon":
                    this.frmData.invoice_series = valueI;
                    break;
                case "SHDon":
                    this.frmData.invoice_number = valueI;
                    break;
                case "NLap":
                    var date = new Date(valueI);
                    if (date.toString() === 'Invalid Date') {
                        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_5__(valueI, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
                    }
                    else {
                        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_5__(valueI).format('YYYY-MM-DD hh:mm:ss');
                    }
                    break;
                case "DVTTe":
                    this.frmData.currency_code = valueI;
                    break;
                case "HTTToan":
                    this.frmData.payment_method_view_name = valueI;
                    break;
            }
        }
        /* Thông tin bên bán */
        for (var property in NBan) {
            var valueI = NBan[property][0];
            switch (property) {
                case "Ten":
                    this.frmData.seller_legal_name = valueI;
                    break;
                case "MST":
                    this.frmData.seller_tax_code = valueI;
                    break;
                case "DChi":
                    this.frmData.seller_address = valueI;
                    break;
                case "SDThoai":
                    this.frmData.seller_mobile = valueI;
                    break;
            }
        }
        /* Thông tin bên mua */
        for (var property in NMua) {
            var valueI = NMua[property][0];
            switch (property) {
                case "Ten":
                    this.frmData.buyer_legal_name = valueI;
                    break;
                case "MST":
                    this.frmData.buyer_tax_code = valueI;
                    break;
                case "DChi":
                    this.frmData.buyer_address = valueI;
                    break;
                case "SDThoai":
                    this.frmData.buyer_mobile = valueI;
                    break;
                case "MKHang":
                    this.frmData.customer_code = valueI;
                    break;
                case "DCTDTu":
                    this.frmData.buyer_email = valueI;
                    break;
                case "HVTNMHang":
                    this.frmData.buyer_name = valueI;
                    break;
            }
        }
        /* Thông tin Số tiền trên hóa đơn */
        for (var property in TToan) {
            var valueI = TToan[property][0];
            switch (property) {
                case "TgTCThue":
                    this.frmData.amount = valueI;
                    break;
                case "TgTThue":
                    this.frmData.total_amount_vat = valueI;
                    break;
                case "TgTTTBSo":
                    this.frmData.total_payment = valueI;
                    break;
                case "TgTTTBChu":
                    this.frmData.total_payment_in_word = valueI;
                    break;
            }
        }
        if (THTTLTSuat && THTTLTSuat.length > 0) {
            var lstTThue = [];
            for (var i = 0; i < THTTLTSuat.length; i++) {
                var object = {};
                for (var property in THTTLTSuat[i]) {
                    var valueI = THTTLTSuat[i][property][0];
                    object[property] = valueI;
                }
                lstTThue.push(object);
            }
            if (lstTThue.length > 0) {
                lstTThue.forEach(function (itemT) {
                    switch (itemT.TSuat) {
                        case "0%":
                            _this.frmData.total_amount_product_vat0 = itemT.ThTien;
                            break;
                        case "5%":
                            _this.frmData.total_amount_product_vat5 = itemT.ThTien;
                            _this.frmData.amount_vat5 = itemT.TThue;
                            break;
                        case "8%":
                            _this.frmData.total_amount_product_vat8 = itemT.ThTien;
                            _this.frmData.amount_vat8 = itemT.TThue;
                            break;
                        case "10%":
                            _this.frmData.total_amount_product_vat10 = itemT.ThTien;
                            _this.frmData.amount_vat10 = itemT.TThue;
                            break;
                        case "KCT":
                            _this.frmData.total_amount_product_vatx = itemT.ThTien;
                            break;
                        case "KKKNT":
                            _this.frmData.total_amount_product_vat_kkknt = itemT.ThTien;
                            break;
                    }
                });
            }
        }
        /* Danh sách hàng hóa, dịch vụ */
        if (DSHHDVu && DSHHDVu.length > 0) {
            var lstHangHoa = [];
            for (var i = 0; i < DSHHDVu.length; i++) {
                var object = {};
                for (var property in DSHHDVu[i]) {
                    var valueI = DSHHDVu[i][property][0];
                    object[property] = valueI;
                }
                lstHangHoa.push(object);
            }
            if (lstHangHoa.length > 0) {
                this.frmData.input_invoice_products = [];
                lstHangHoa.forEach(function (itemHH) {
                    var oHangHoa = {};
                    oHangHoa["order"] = itemHH.STT ? itemHH.STT : null;
                    oHangHoa["product_code"] = itemHH.MHHDVu ? itemHH.MHHDVu : null;
                    oHangHoa["product_name"] = itemHH.THHDVu ? itemHH.THHDVu : null;
                    oHangHoa["unit_name"] = itemHH.DVTinh ? itemHH.DVTinh : null;
                    oHangHoa["quantity"] = itemHH.SLuong;
                    oHangHoa["price"] = itemHH.DGia;
                    oHangHoa["amount"] = itemHH.ThTien;
                    oHangHoa["product_group"] = "1";
                    oHangHoa["unit_code"] = null;
                    oHangHoa["is_promotion"] = null;
                    switch (itemHH.TSuat) {
                        case "0%":
                            oHangHoa["vat"] = 0;
                            break;
                        case "5%":
                            oHangHoa["vat"] = 5;
                            break;
                        case "10%":
                            oHangHoa["vat"] = 10;
                            break;
                        case "8%":
                            oHangHoa["vat"] = 8;
                            break;
                        case "KCT":
                            oHangHoa["vat"] = -1;
                            break;
                        case "KKKNT":
                            oHangHoa["vat"] = -2;
                            break;
                        default:
                            oHangHoa["vat"] = null;
                            break;
                    }
                    /* Cấu hình thập phân */
                    //->Số lượng
                    if (oHangHoa["quantity"]) {
                        var arr = oHangHoa["quantity"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Đơn giá
                    if (oHangHoa["price"]) {
                        var arr = oHangHoa["price"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Thành tiền
                    if (oHangHoa["amount"]) {
                        var arr = oHangHoa["amount"].split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Tiền thuế
                    if (_this.frmData.total_amount_vat) {
                        var arr = _this.frmData.total_amount_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    //-> Tổng tiền
                    if (_this.frmData.total_payment) {
                        var arr = _this.frmData.total_payment.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (oHangHoa["quantity"])
                        oHangHoa["quantity"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(oHangHoa["quantity"]), _this.formatter.so_luong);
                    else
                        oHangHoa["quantity"] = null;
                    if (oHangHoa["price"])
                        oHangHoa["price"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(oHangHoa["price"]), _this.formatter.don_gia);
                    else
                        oHangHoa["price"] = null;
                    if (oHangHoa["amount"])
                        oHangHoa["amount"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(oHangHoa["amount"]), _this.formatter.thanh_tien);
                    else
                        oHangHoa["amount"] = null;
                    /* Tính tiền thuế */
                    if (oHangHoa["amount"] != null && oHangHoa["vat"] != null) {
                        if (oHangHoa["vat"] > 0) {
                            oHangHoa["amount_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber((oHangHoa["amount"] * oHangHoa["vat"]) / 100, _this.formatter.tien_thue);
                        }
                        else if (oHangHoa["vat"] == 0)
                            oHangHoa["amount_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(0, _this.formatter.tien_thue);
                        else
                            oHangHoa["amount_vat"] = null;
                    }
                    else if (oHangHoa["vat"] == null || (oHangHoa["vat"] != null && oHangHoa["amount"] == null))
                        oHangHoa["amount_vat"] = null;
                    /* Tính tổng tiền hàng hóa */
                    if (oHangHoa["amount_vat"] != null && oHangHoa["amount"] != null)
                        oHangHoa["amount_after_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(oHangHoa["amount"] + oHangHoa["amount_vat"], _this.formatter.tong_tien);
                    else if (oHangHoa["amount"] != null)
                        oHangHoa["amount_after_vat"] = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(oHangHoa["amount"], _this.formatter.tong_tien);
                    else
                        oHangHoa["amount_after_vat"] = null;
                    _this.frmData.input_invoice_products.push(oHangHoa);
                });
            }
        }
        /* Cấu hình thập phân cho số tiền */
        if (this.frmData.total_amount_product_vat0)
            this.frmData.total_amount_product_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vat0), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat0 = null;
        if (this.frmData.total_amount_product_vat5)
            this.frmData.total_amount_product_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vat5), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat5 = null;
        if (this.frmData.total_amount_product_vat8)
            this.frmData.total_amount_product_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vat8), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat8 = null;
        if (this.frmData.total_amount_product_vat10)
            this.frmData.total_amount_product_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vat10), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat10 = null;
        if (this.frmData.total_amount_product_vatx)
            this.frmData.total_amount_product_vatx = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vatx), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vatx = null;
        if (this.frmData.total_amount_product_vat_kkknt)
            this.frmData.total_amount_product_vat_kkknt = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_product_vat_kkknt), this.formatter.thanh_tien);
        else
            this.frmData.total_amount_product_vat_kkknt = null;
        if (this.frmData.amount)
            this.frmData.amount = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.amount), this.formatter.thanh_tien);
        else
            this.frmData.amount = null;
        if (this.frmData.total_amount_vat)
            this.frmData.total_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_amount_vat), this.formatter.tien_thue);
        else
            this.frmData.total_amount_vat = null;
        if (this.frmData.total_payment)
            this.frmData.total_payment = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.total_payment), this.formatter.tong_tien);
        else
            this.frmData.total_payment = null;
        if (this.frmData.amount_vat5)
            this.frmData.amount_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.amount_vat5), this.formatter.tien_thue);
        else
            this.frmData.amount_vat5 = null;
        if (this.frmData.amount_vat8)
            this.frmData.amount_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.amount_vat8), this.formatter.tien_thue);
        else
            this.frmData.amount_vat8 = null;
        if (this.frmData.amount_vat10)
            this.frmData.amount_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].roundNumber(_core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].toNumber(this.frmData.amount_vat10), this.formatter.tien_thue);
        else
            this.frmData.amount_vat10 = null;
        this.frmData.input_invoice_products = this.frmData.input_invoice_products.filter(function (item) {
            if (item.product_name !== 'Tổng tiền hàng' && item.product_name !== 'Tổng tiền chiết khấu' && item.product_name !== 'Chiết khấu') {
                return item;
            }
        });
        this.frmData.version_xml = "1";
        this.frmData.is_import_from_zip = true;
        this.frmData.signature_content = X509Certificate;
        if (signDate)
            this.frmData.sign_date = signDate.replace("T", " ");
        var lstFile = [];
        lstFile.push({
            order: 'DK',
            file_name: nameFile,
            file_content: dataBase64Code,
            is_file_import: true
        });
        if (this.lstFileDinhKem && this.lstFileDinhKem.length > 0) {
            var tenFileHD_2 = nameFile.split('.')[0];
            this.lstFileDinhKem.forEach(function (file) {
                var tenFileDK = file.name.split('.')[0];
                if (tenFileDK == tenFileHD_2) {
                    var endCodeDK = window.btoa(unescape(encodeURIComponent(file.data)));
                    var fileDK = {
                        order: 'BK',
                        file_name: file.name,
                        file_content: endCodeDK,
                    };
                    lstFile.push(fileDK);
                }
            });
        }
        this.frmData.input_invoice_files = lstFile;
        var valueDataSource = this.frmData.input_invoice_products.filter(function (item) {
            if (item.product_name && item.product_group) {
                return item;
            }
        });
        if (this.formatter)
            this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
        var dataForm = {
            input_invoice: this.frmData,
            input_invoice_products: valueDataSource,
            input_invoice_files: this.frmData.input_invoice_files,
        };
        for (var _i = 0, _a = Object.entries(dataForm.input_invoice); _i < _a.length; _i++) {
            var key = _a[_i][0];
            if (key === 'id') {
                delete dataForm.input_invoice[key];
            }
            if (key === 'input_invoice_products') {
                delete dataForm.input_invoice[key];
            }
            if (key === 'input_invoice_files') {
                delete dataForm.input_invoice[key];
            }
        }
        dataForm.input_invoice_products.forEach(function (value) {
            for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
                var key = _a[_i][0];
                if (key === 'id') {
                    delete value[key];
                }
            }
        });
        return dataForm;
    };
    // done
    UploadFileZipComponent.prototype.addValueToFormFormat2 = function (object, nameFile, dataBase64Code, signature) {
        var invoice_type_name = nameFile;
        var signature_content = signature;
        var template_code = object['inv:templateCode'];
        var adjustment_type;
        if (object['inv:adjustmentType']) {
            if (object['inv:adjustmentType'].trim() === '') {
                adjustment_type = '1';
            }
            else {
                adjustment_type = object['inv:adjustmentType'];
            }
        }
        else {
            adjustment_type = '1';
        }
        var invoice_number = object['inv:invoiceNumber'];
        var invoice_series = object['inv:invoiceSeries'];
        var currency_code = object['inv:currencyCode'];
        var invoice_date;
        var sign_date;
        if (object['inv:signedDate']) {
            var date = new Date(object['inv:signedDate']);
            if (date.toString() === 'Invalid Date') {
                sign_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['inv:signedDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
            }
            else {
                sign_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['inv:signedDate']).format('YYYY-MM-DD hh:mm:ss');
            }
        }
        if (object['inv:invoiceIssuedDate']) {
            var date = new Date(object['inv:invoiceIssuedDate']);
            if (date.toString() === 'Invalid Date') {
                invoice_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['inv:invoiceIssuedDate'], 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
            }
            else {
                invoice_date = moment__WEBPACK_IMPORTED_MODULE_5__(object['inv:invoiceIssuedDate']).format('YYYY-MM-DD hh:mm:ss');
            }
        }
        var seller_tax_code = object['inv:sellerTaxCode'];
        var seller_fax_number = object['inv:sellerFaxNumber'];
        var seller_contact_name = object['inv:sellerContactPersonName'];
        var seller_address = object['inv:sellerAddressLine'];
        var seller_mobile = object['inv:sellerPhoneNumber'];
        var seller_legal_name = object['inv:sellerLegalName'];
        var buyer_legal_name = object['inv:buyerLegalName'];
        var buyer_tax_code = object['inv:buyerTaxCode'];
        var buyer_mobile = object['inv:buyerPhoneNumber'];
        var buyer_email = object['inv:buyerEmail'];
        var currency_rate = object['inv:exchangeRate'] ? object['inv:exchangeRate'] : object['inv:ExchangeRate'];
        var seller_bank_account;
        if (object.hasOwnProperty('inv:sellerBankAccount')) {
            if (object['inv:sellerBankAccount']) {
                seller_bank_account = object['inv:sellerBankAccount'] + ' - ' + object['inv:sellerBankName'];
            }
            else {
                seller_bank_account = object['inv:sellerBankName'];
            }
        }
        else {
            seller_bank_account = object['inv:sellerBankName'];
        }
        var payments = object['inv:payments']['inv:payment'][0];
        var payment_method_view_name;
        if (payments.hasOwnProperty('inv:paymentMethodName')) {
            payment_method_view_name = payments['inv:paymentMethodName'][0];
        }
        else {
            payment_method_view_name = payments['inv:paymentMethodNameExt'][0];
        }
        var seller_email;
        if (object['inv:sellerEmail'] === '.') {
            seller_email = null;
        }
        else {
            seller_email = object['inv:sellerEmail'];
        }
        var input_invoice_products;
        if (object['inv:items']) {
            var arrItem = object['inv:items']['inv:item'];
            for (var i = 0; i < arrItem.length; i++) {
                for (var keyItem in arrItem[i]) {
                    if (arrItem[i].hasOwnProperty(keyItem)) {
                        arrItem[i][keyItem] = arrItem[i][keyItem][0].trim();
                    }
                }
            }
            var arrItemFormat = this.invoiceBuyService.formatArrayItem1(arrItem);
            input_invoice_products = arrItemFormat.filter(function (item) {
                if (item.product_name !== 'Tổng tiền hàng' && item.product_name !== 'Tổng tiền chiết khấu' && item.product_name !== 'Chiết khấu') {
                    return item;
                }
            });
        }
        var amount = parseInt(object['inv:totalAmountWithoutVAT'].replace(',', '.'), 10);
        var total_amount_vat = parseInt(object['inv:totalVATAmount'].replace(',', '.'), 10);
        var total_payment = parseInt(object['inv:totalAmountWithVAT'].replace(',', '.'), 10);
        var total_payment_in_word = object['inv:totalAmountWithVATInWords'];
        var lstFile = [];
        lstFile.push({
            order: 'DK',
            file_name: nameFile,
            file_content: dataBase64Code,
            is_file_import: true
        });
        if (this.lstFileDinhKem && this.lstFileDinhKem.length > 0) {
            var tenFileHD_3 = nameFile.split('.')[0];
            this.lstFileDinhKem.forEach(function (file) {
                var tenFileDK = file.name.split('.')[0];
                if (tenFileDK == tenFileHD_3) {
                    var endCodeDK = window.btoa(unescape(encodeURIComponent(file.data)));
                    var fileDK = {
                        order: 'BK',
                        file_name: file.name,
                        file_content: endCodeDK,
                    };
                    lstFile.push(fileDK);
                }
            });
        }
        var input_invoice_files = lstFile;
        return {
            input_invoice: {
                total_payment_in_word: total_payment_in_word,
                total_payment: total_payment,
                total_amount_vat: total_amount_vat,
                amount: amount,
                seller_bank_account: seller_bank_account,
                buyer_email: buyer_email,
                buyer_mobile: buyer_mobile,
                buyer_tax_code: buyer_tax_code,
                buyer_legal_name: buyer_legal_name,
                seller_fax_number: seller_fax_number,
                seller_mobile: seller_mobile,
                invoice_series: invoice_series,
                seller_legal_name: seller_legal_name,
                invoice_number: invoice_number,
                currency_code: currency_code,
                currency_rate: currency_rate,
                adjustment_type: adjustment_type,
                seller_tax_code: seller_tax_code,
                seller_address: seller_address,
                payment_method_view_name: payment_method_view_name,
                template_code: template_code,
                invoice_type_name: invoice_type_name,
                invoice_date: invoice_date,
                seller_email: seller_email,
                seller_contact_name: seller_contact_name,
                origin_id: null,
                note: null,
                seller_surrogate_name: null,
                seller_tax_department: null,
                buyer_name: null,
                auto_value: false,
                auto_value_price: false,
                amount_vat5: null,
                amount_vat10: null,
                amount_vatx: null,
                amount_vat0: null,
                total_amount_product_vat5: null,
                total_amount_product_vat10: null,
                total_amount_product_vatx: null,
                total_amount_product_vat0: null,
                amount_discount: null,
                system_code: null,
                export_from_ihd: 0,
                signature_content: signature_content,
                sign_date: sign_date,
                version_xml: "1",
                xml_type: "2",
                is_import_from_zip: true,
                json_data: {
                    statusCert: null,
                    signDateCompareCert: null,
                    signDateCompareInv: null,
                    statusFileXml: null,
                    capBoi: null,
                    kyBoi: null,
                    thoiHanChungThu: null,
                    thoiGianKyHoaDon: null,
                    tax_code: null,
                    name: null,
                    business_address: null,
                    status: null,
                    mstNB: null
                }
            },
            input_invoice_products: input_invoice_products,
            input_invoice_files: input_invoice_files
        };
    };
    UploadFileZipComponent.prototype.setCollap = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    UploadFileZipComponent.prototype.exportExcel = function () {
        for (var i = 0; i < this.arrDataError.length; i++) {
            for (var _i = 0, _a = Object.entries(this.arrDataError[i]); _i < _a.length; _i++) {
                var key = _a[_i][0];
                if (key === 'invoice_number') {
                    delete this.arrDataError[i][key];
                }
                if (key === 'template_code') {
                    delete this.arrDataError[i][key];
                }
                if (key === 'invoice_series') {
                    delete this.arrDataError[i][key];
                }
            }
        }
        _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        this.invoiceBuyService.apiExportFileExcel(this.arrDataError)
            .subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.report;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(error, 'error');
        }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading(); });
    };
    UploadFileZipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file-zip',
            template: __webpack_require__(/*! ./upload-file-zip.component.html */ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.html"),
            styles: [__webpack_require__(/*! ./upload-file-zip.component.scss */ "./src/app/modules/invoice-buy/shared/modal/upload-file-zip/upload-file-zip.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceBuyService"]])
    ], UploadFileZipComponent);
    return UploadFileZipComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-buy/shared/resolve/form-resolver.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/invoice-buy/shared/resolve/form-resolver.service.ts ***!
  \*****************************************************************************/
/*! exports provided: FormResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormResolverService", function() { return FormResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/invoice-buy/invoice-buy.service */ "./src/app/modules/invoice-buy/invoice-buy.service.ts");
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





var FormResolverService = /** @class */ (function () {
    function FormResolverService(invoiceBuyService, router) {
        this.invoiceBuyService = invoiceBuyService;
        this.router = router;
        this.idInvoice = null;
    }
    FormResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        this.idInvoice = route.paramMap.get('id');
        _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        return this.invoiceBuyService.formResolveApi(this.idInvoice)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            //
            if (value.length > 3) {
                if (value[3].status === 'success') {
                    return [
                        value[0].data,
                        value[1].data,
                        value[2].data.products,
                        value[3].data,
                    ];
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
            else {
                return [
                    value[0].data,
                    value[1].data,
                    value[2].data.products,
                ];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading(); }));
    };
    FormResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_modules_invoice_buy_invoice_buy_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceBuyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FormResolverService);
    return FormResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-buy-invoice-buy-module.js.map