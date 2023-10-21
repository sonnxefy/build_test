(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-transport-internal-transport-module"],{

/***/ "./node_modules/devextreme/data/odata/mixins.js":
/*!******************************************************!*\
  !*** ./node_modules/devextreme/data/odata/mixins.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (data/odata/mixins.js)
 * Version: 19.2.6
 * Build date: Thu Jan 30 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var stringUtils = __webpack_require__(/*! ../../core/utils/string */ "./node_modules/devextreme/core/utils/string.js");
var iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js");
var odataUtils = __webpack_require__(/*! ./utils */ "./node_modules/devextreme/data/odata/utils.js");
__webpack_require__(/*! ./query_adapter */ "./node_modules/devextreme/data/odata/query_adapter.js");
var DEFAULT_PROTOCOL_VERSION = 2;
var formatFunctionInvocationUrl = function(baseUrl, args) {
    return stringUtils.format("{0}({1})", baseUrl, iteratorUtils.map(args || {}, function(value, key) {
        return stringUtils.format("{0}={1}", key, value)
    }).join(","))
};
var escapeServiceOperationParams = function(params, version) {
    if (!params) {
        return params
    }
    var result = {};
    iteratorUtils.each(params, function(k, v) {
        result[k] = odataUtils.serializeValue(v, version)
    });
    return result
};
var SharedMethods = {
    _extractServiceOptions: function(options) {
        options = options || {};
        this._url = String(options.url).replace(/\/+$/, "");
        this._beforeSend = options.beforeSend;
        this._jsonp = options.jsonp;
        this._version = options.version || DEFAULT_PROTOCOL_VERSION;
        this._withCredentials = options.withCredentials;
        this._deserializeDates = options.deserializeDates;
        this._filterToLower = options.filterToLower
    },
    _sendRequest: function(url, method, params, payload) {
        return odataUtils.sendRequest(this.version(), {
            url: url,
            method: method,
            params: params || {},
            payload: payload
        }, {
            beforeSend: this._beforeSend,
            jsonp: this._jsonp,
            withCredentials: this._withCredentials,
            deserializeDates: this._deserializeDates
        })
    },
    version: function() {
        return this._version
    }
};
exports.SharedMethods = SharedMethods;
exports.escapeServiceOperationParams = escapeServiceOperationParams;
exports.formatFunctionInvocationUrl = formatFunctionInvocationUrl;


/***/ }),

/***/ "./node_modules/devextreme/data/odata/query_adapter.js":
/*!*************************************************************!*\
  !*** ./node_modules/devextreme/data/odata/query_adapter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (data/odata/query_adapter.js)
 * Version: 19.2.6
 * Build date: Thu Jan 30 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js");
var iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js");
var config = __webpack_require__(/*! ../../core/config */ "./node_modules/devextreme/core/config.js");
var extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend;
var queryAdapters = __webpack_require__(/*! ../query_adapters */ "./node_modules/devextreme/data/query_adapters.js");
var odataUtils = __webpack_require__(/*! ./utils */ "./node_modules/devextreme/data/odata/utils.js");
var serializePropName = odataUtils.serializePropName;
var errors = __webpack_require__(/*! ../errors */ "./node_modules/devextreme/data/errors.js").errors;
var dataUtils = __webpack_require__(/*! ../utils */ "./node_modules/devextreme/data/utils.js");
var isFunction = typeUtils.isFunction;
var DEFAULT_PROTOCOL_VERSION = 2;
var STRING_FUNCTIONS = ["contains", "notcontains", "startswith", "endswith"];
var compileCriteria = function() {
    var protocolVersion;
    var forceLowerCase;
    var fieldTypes;
    var createBinaryOperationFormatter = function(op) {
        return function(prop, val) {
            return prop + " " + op + " " + val
        }
    };
    var createStringFuncFormatter = function(op, reverse) {
        return function(prop, val) {
            var bag = [op, "("];
            if (forceLowerCase) {
                prop = prop.indexOf("tolower(") === -1 ? "tolower(" + prop + ")" : prop;
                val = val.toLowerCase()
            }
            if (reverse) {
                bag.push(val, ",", prop)
            } else {
                bag.push(prop, ",", val)
            }
            bag.push(")");
            return bag.join("")
        }
    };
    var isStringFunction = function(name) {
        return STRING_FUNCTIONS.some(function(funcName) {
            return funcName === name
        })
    };
    var formatters = {
        "=": createBinaryOperationFormatter("eq"),
        "<>": createBinaryOperationFormatter("ne"),
        ">": createBinaryOperationFormatter("gt"),
        ">=": createBinaryOperationFormatter("ge"),
        "<": createBinaryOperationFormatter("lt"),
        "<=": createBinaryOperationFormatter("le"),
        startswith: createStringFuncFormatter("startswith"),
        endswith: createStringFuncFormatter("endswith")
    };
    var formattersV2 = extend({}, formatters, {
        contains: createStringFuncFormatter("substringof", true),
        notcontains: createStringFuncFormatter("not substringof", true)
    });
    var formattersV4 = extend({}, formatters, {
        contains: createStringFuncFormatter("contains"),
        notcontains: createStringFuncFormatter("not contains")
    });
    var compileBinary = function(criteria) {
        criteria = dataUtils.normalizeBinaryCriterion(criteria);
        var op = criteria[1];
        var fieldName = criteria[0];
        var fieldType = fieldTypes && fieldTypes[fieldName];
        if (fieldType && isStringFunction(op) && "String" !== fieldType) {
            throw new errors.Error("E4024", op, fieldName, fieldType)
        }
        var formatters = 4 === protocolVersion ? formattersV4 : formattersV2;
        var formatter = formatters[op.toLowerCase()];
        if (!formatter) {
            throw errors.Error("E4003", op)
        }
        var value = criteria[2];
        if (fieldTypes && fieldTypes[fieldName]) {
            value = odataUtils.convertPrimitiveValue(fieldTypes[fieldName], value)
        }
        return formatter(serializePropName(fieldName), odataUtils.serializeValue(value, protocolVersion))
    };
    var compileUnary = function(criteria) {
        var op = criteria[0];
        var crit = compileCore(criteria[1]);
        if ("!" === op) {
            return "not (" + crit + ")"
        }
        throw errors.Error("E4003", op)
    };
    var compileGroup = function(criteria) {
        var bag = [];
        var groupOperator;
        var nextGroupOperator;
        iteratorUtils.each(criteria, function(index, criterion) {
            if (Array.isArray(criterion)) {
                if (bag.length > 1 && groupOperator !== nextGroupOperator) {
                    throw new errors.Error("E4019")
                }
                bag.push("(" + compileCore(criterion) + ")");
                groupOperator = nextGroupOperator;
                nextGroupOperator = "and"
            } else {
                nextGroupOperator = dataUtils.isConjunctiveOperator(this) ? "and" : "or"
            }
        });
        return bag.join(" " + groupOperator + " ")
    };
    var compileCore = function(criteria) {
        if (Array.isArray(criteria[0])) {
            return compileGroup(criteria)
        }
        if (dataUtils.isUnaryOperation(criteria)) {
            return compileUnary(criteria)
        }
        return compileBinary(criteria)
    };
    return function(criteria, version, types, filterToLower) {
        fieldTypes = types;
        forceLowerCase = typeUtils.isDefined(filterToLower) ? filterToLower : config().oDataFilterToLower;
        protocolVersion = version;
        return compileCore(criteria)
    }
}();
var createODataQueryAdapter = function(queryOptions) {
    var _sorting = [];
    var _criteria = [];
    var _expand = queryOptions.expand;
    var _select;
    var _skip;
    var _take;
    var _countQuery;
    var _oDataVersion = queryOptions.version || DEFAULT_PROTOCOL_VERSION;
    var hasSlice = function() {
        return _skip || void 0 !== _take
    };
    var hasFunction = function hasFunction(criterion) {
        for (var i = 0; i < criterion.length; i++) {
            if (isFunction(criterion[i])) {
                return true
            }
            if (Array.isArray(criterion[i]) && hasFunction(criterion[i])) {
                return true
            }
        }
        return false
    };
    var requestData = function() {
        var result = {};
        if (!_countQuery) {
            if (_sorting.length) {
                result.$orderby = _sorting.join(",")
            }
            if (_skip) {
                result.$skip = _skip
            }
            if (void 0 !== _take) {
                result.$top = _take
            }
            result.$select = odataUtils.generateSelect(_oDataVersion, _select) || void 0;
            result.$expand = odataUtils.generateExpand(_oDataVersion, _expand, _select) || void 0
        }
        if (_criteria.length) {
            var criteria = _criteria.length < 2 ? _criteria[0] : _criteria;
            var fieldTypes = queryOptions && queryOptions.fieldTypes;
            var filterToLower = queryOptions && queryOptions.filterToLower;
            result.$filter = compileCriteria(criteria, _oDataVersion, fieldTypes, filterToLower)
        }
        if (_countQuery) {
            result.$top = 0
        }
        if (queryOptions.requireTotalCount || _countQuery) {
            if (4 !== _oDataVersion) {
                result.$inlinecount = "allpages"
            } else {
                result.$count = "true"
            }
        }
        return result
    };

    function tryLiftSelect(tasks) {
        var selectIndex = -1;
        for (var i = 0; i < tasks.length; i++) {
            if ("select" === tasks[i].name) {
                selectIndex = i;
                break
            }
        }
        if (selectIndex < 0 || !isFunction(tasks[selectIndex].args[0])) {
            return
        }
        var nextTask = tasks[1 + selectIndex];
        if (!nextTask || "slice" !== nextTask.name) {
            return
        }
        tasks[1 + selectIndex] = tasks[selectIndex];
        tasks[selectIndex] = nextTask
    }
    return {
        optimize: function(tasks) {
            tryLiftSelect(tasks)
        },
        exec: function(url) {
            return odataUtils.sendRequest(_oDataVersion, {
                url: url,
                params: extend(requestData(), queryOptions && queryOptions.params)
            }, {
                beforeSend: queryOptions.beforeSend,
                jsonp: queryOptions.jsonp,
                withCredentials: queryOptions.withCredentials,
                countOnly: _countQuery,
                deserializeDates: queryOptions.deserializeDates,
                fieldTypes: queryOptions.fieldTypes,
                isPaged: isFinite(_take)
            })
        },
        multiSort: function(args) {
            var rules;
            if (hasSlice()) {
                return false
            }
            for (var i = 0; i < args.length; i++) {
                var getter = args[i][0];
                var desc = !!args[i][1];
                var rule;
                if ("string" !== typeof getter) {
                    return false
                }
                rule = serializePropName(getter);
                if (desc) {
                    rule += " desc"
                }
                rules = rules || [];
                rules.push(rule)
            }
            _sorting = rules
        },
        slice: function(skipCount, takeCount) {
            if (hasSlice()) {
                return false
            }
            _skip = skipCount;
            _take = takeCount
        },
        filter: function(criterion) {
            if (hasSlice()) {
                return false
            }
            if (!Array.isArray(criterion)) {
                criterion = [].slice.call(arguments)
            }
            if (hasFunction(criterion)) {
                return false
            }
            if (_criteria.length) {
                _criteria.push("and")
            }
            _criteria.push(criterion)
        },
        select: function(expr) {
            if (_select || isFunction(expr)) {
                return false
            }
            if (!Array.isArray(expr)) {
                expr = [].slice.call(arguments)
            }
            _select = expr
        },
        count: function() {
            _countQuery = true
        }
    }
};
queryAdapters.odata = createODataQueryAdapter;
exports.odata = createODataQueryAdapter;


/***/ }),

/***/ "./node_modules/devextreme/data/odata/store.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme/data/odata/store.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (data/odata/store.js)
 * Version: 19.2.6
 * Build date: Thu Jan 30 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined;
var config = __webpack_require__(/*! ../../core/config */ "./node_modules/devextreme/core/config.js");
var odataUtils = __webpack_require__(/*! ./utils */ "./node_modules/devextreme/data/odata/utils.js");
var proxyUrlFormatter = __webpack_require__(/*! ../proxy_url_formatter */ "./node_modules/devextreme/data/proxy_url_formatter.js");
var errors = __webpack_require__(/*! ../errors */ "./node_modules/devextreme/data/errors.js").errors;
var query = __webpack_require__(/*! ../query */ "./node_modules/devextreme/data/query.js");
var Store = __webpack_require__(/*! ../abstract_store */ "./node_modules/devextreme/data/abstract_store.js");
var mixins = __webpack_require__(/*! ./mixins */ "./node_modules/devextreme/data/odata/mixins.js");
var deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js");
var when = deferredUtils.when;
var Deferred = deferredUtils.Deferred;
__webpack_require__(/*! ./query_adapter */ "./node_modules/devextreme/data/odata/query_adapter.js");
var ANONYMOUS_KEY_NAME = "5d46402c-7899-4ea9-bd81-8b73c47c7683";

function expandKeyType(key, keyType) {
    var result = {};
    result[key] = keyType;
    return result
}

function mergeFieldTypesWithKeyType(fieldTypes, keyType) {
    var result = {};
    for (var field in fieldTypes) {
        result[field] = fieldTypes[field]
    }
    for (var keyName in keyType) {
        if (keyName in result) {
            if (result[keyName] !== keyType[keyName]) {
                errors.log("W4001", keyName)
            }
        } else {
            result[keyName] = keyType[keyName]
        }
    }
    return result
}
var ODataStore = Store.inherit({
    ctor: function(options) {
        this.callBase(options);
        this._extractServiceOptions(options);
        var key = this.key();
        var fieldTypes = options.fieldTypes;
        var keyType = options.keyType;
        if (keyType) {
            var keyTypeIsString = "string" === typeof keyType;
            if (!key) {
                key = keyTypeIsString ? ANONYMOUS_KEY_NAME : Object.keys(keyType);
                this._legacyAnonymousKey = key
            }
            if (keyTypeIsString) {
                keyType = expandKeyType(key, keyType)
            }
            fieldTypes = mergeFieldTypesWithKeyType(fieldTypes, keyType)
        }
        this._fieldTypes = fieldTypes || {};
        if (2 === this.version()) {
            this._updateMethod = "MERGE"
        } else {
            this._updateMethod = "PATCH"
        }
    },
    _customLoadOptions: function() {
        return ["expand", "customQueryParams"]
    },
    _byKeyImpl: function(key, extraOptions) {
        var params = {};
        if (extraOptions) {
            params.$expand = odataUtils.generateExpand(this._version, extraOptions.expand, extraOptions.select) || void 0;
            params.$select = odataUtils.generateSelect(this._version, extraOptions.select) || void 0
        }
        return this._sendRequest(this._byKeyUrl(key), "GET", params)
    },
    createQuery: function(loadOptions) {
        var url;
        var queryOptions;
        loadOptions = loadOptions || {};
        queryOptions = {
            adapter: "odata",
            beforeSend: this._beforeSend,
            errorHandler: this._errorHandler,
            jsonp: this._jsonp,
            version: this._version,
            withCredentials: this._withCredentials,
            expand: loadOptions.expand,
            requireTotalCount: loadOptions.requireTotalCount,
            deserializeDates: this._deserializeDates,
            fieldTypes: this._fieldTypes
        };
        if (isDefined(loadOptions.urlOverride)) {
            url = loadOptions.urlOverride
        } else {
            url = this._url
        }
        if (isDefined(this._filterToLower)) {
            queryOptions.filterToLower = this._filterToLower
        }
        if (loadOptions.customQueryParams) {
            var params = mixins.escapeServiceOperationParams(loadOptions.customQueryParams, this.version());
            if (4 === this.version()) {
                url = mixins.formatFunctionInvocationUrl(url, params)
            } else {
                queryOptions.params = params
            }
        }
        return query(url, queryOptions)
    },
    _insertImpl: function(values) {
        this._requireKey();
        var that = this;
        var d = new Deferred;
        when(this._sendRequest(this._url, "POST", null, values)).done(function(serverResponse) {
            d.resolve(config().useLegacyStoreResult ? values : serverResponse || values, that.keyOf(serverResponse))
        }).fail(d.reject);
        return d.promise()
    },
    _updateImpl: function(key, values) {
        var d = new Deferred;
        when(this._sendRequest(this._byKeyUrl(key), this._updateMethod, null, values)).done(function(serverResponse) {
            if (config().useLegacyStoreResult) {
                d.resolve(key, values)
            } else {
                d.resolve(serverResponse || values, key)
            }
        }).fail(d.reject);
        return d.promise()
    },
    _removeImpl: function(key) {
        var d = new Deferred;
        when(this._sendRequest(this._byKeyUrl(key), "DELETE")).done(function() {
            d.resolve(key)
        }).fail(d.reject);
        return d.promise()
    },
    _convertKey: function(value) {
        var result = value;
        var fieldTypes = this._fieldTypes;
        var key = this.key() || this._legacyAnonymousKey;
        if (Array.isArray(key)) {
            result = {};
            for (var i = 0; i < key.length; i++) {
                var keyName = key[i];
                result[keyName] = odataUtils.convertPrimitiveValue(fieldTypes[keyName], value[keyName])
            }
        } else {
            if (fieldTypes[key]) {
                result = odataUtils.convertPrimitiveValue(fieldTypes[key], value)
            }
        }
        return result
    },
    _byKeyUrl: function(value, useOriginalHost) {
        var baseUrl = useOriginalHost ? proxyUrlFormatter.formatLocalUrl(this._url) : this._url;
        var convertedKey = this._convertKey(value);
        return baseUrl + "(" + encodeURIComponent(odataUtils.serializeKey(convertedKey, this._version)) + ")"
    }
}, "odata").include(mixins.SharedMethods);
module.exports = ODataStore;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/data/odata/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme/data/odata/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (data/odata/utils.js)
 * Version: 19.2.6
 * Build date: Thu Jan 30 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


function _typeof(obj) {
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js");
var extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend;
var typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js");
var iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js");
var each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each;
var ajax = __webpack_require__(/*! ../../core/utils/ajax */ "./node_modules/devextreme/core/utils/ajax.js");
var _Guid = __webpack_require__(/*! ../../core/guid */ "./node_modules/devextreme/core/guid.js");
var isDefined = typeUtils.isDefined;
var isPlainObject = typeUtils.isPlainObject;
var grep = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").grep;
var Deferred = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js").Deferred;
var errors = __webpack_require__(/*! ../errors */ "./node_modules/devextreme/data/errors.js").errors;
var dataUtils = __webpack_require__(/*! ../utils */ "./node_modules/devextreme/data/utils.js");
var GUID_REGEX = /^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$/;
var VERBOSE_DATE_REGEX = /^\/Date\((-?\d+)((\+|-)?(\d+)?)\)\/$/;
var ISO8601_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[-+]{1}\d{2}(:?)(\d{2})?)?$/;
var JSON_VERBOSE_MIME_TYPE = "application/json;odata=verbose";
var makeArray = function(value) {
    return "string" === typeUtils.type(value) ? value.split() : value
};
var hasDot = function(x) {
    return /\./.test(x)
};
var pad = function(text, length, right) {
    text = String(text);
    while (text.length < length) {
        text = right ? text + "0" : "0" + text
    }
    return text
};

function formatISO8601(date, skipZeroTime, skipTimezone) {
    var bag = [];
    var isZeroTime = function() {
        return date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() < 1
    };
    var padLeft2 = function(text) {
        return pad(text, 2)
    };
    bag.push(date.getFullYear());
    bag.push("-");
    bag.push(padLeft2(date.getMonth() + 1));
    bag.push("-");
    bag.push(padLeft2(date.getDate()));
    if (!(skipZeroTime && isZeroTime())) {
        bag.push("T");
        bag.push(padLeft2(date.getHours()));
        bag.push(":");
        bag.push(padLeft2(date.getMinutes()));
        bag.push(":");
        bag.push(padLeft2(date.getSeconds()));
        if (date.getMilliseconds()) {
            bag.push(".");
            bag.push(pad(date.getMilliseconds(), 3))
        }
        if (!skipTimezone) {
            bag.push("Z")
        }
    }
    return bag.join("")
}

function parseISO8601(isoString) {
    var result = new Date(60 * new Date(0).getTimezoneOffset() * 1e3);
    var chunks = isoString.replace("Z", "").split("T");
    var date = /(\d{4})-(\d{2})-(\d{2})/.exec(chunks[0]);
    var time = /(\d{2}):(\d{2}):(\d{2})\.?(\d{0,7})?/.exec(chunks[1]);
    result.setFullYear(Number(date[1]));
    result.setMonth(Number(date[2]) - 1);
    result.setDate(Number(date[3]));
    if (Array.isArray(time) && time.length) {
        result.setHours(Number(time[1]));
        result.setMinutes(Number(time[2]));
        result.setSeconds(Number(time[3]));
        var fractional = (time[4] || "").slice(0, 3);
        fractional = pad(fractional, 3, true);
        result.setMilliseconds(Number(fractional))
    }
    return result
}

function isAbsoluteUrl(url) {
    return /^(?:[a-z]+:)?\/\//i.test(url)
}

function toAbsoluteUrl(basePath, relativePath) {
    var part;
    var baseParts = stripParams(basePath).split("/");
    var relativeParts = relativePath.split("/");

    function stripParams(url) {
        var index = url.indexOf("?");
        if (index > -1) {
            return url.substr(0, index)
        }
        return url
    }
    baseParts.pop();
    while (relativeParts.length) {
        part = relativeParts.shift();
        if (".." === part) {
            baseParts.pop()
        } else {
            baseParts.push(part)
        }
    }
    return baseParts.join("/")
}
var param = function(params) {
    var result = [];
    for (var name in params) {
        result.push(name + "=" + params[name])
    }
    return result.join("&")
};
var ajaxOptionsForRequest = function(protocolVersion, request, options) {
    request = extend({
        async: true,
        method: "get",
        url: "",
        params: {},
        payload: null,
        headers: {},
        timeout: 3e4
    }, request);
    options = options || {};
    var beforeSend = options.beforeSend;
    if (beforeSend) {
        beforeSend(request)
    }
    var method = (request.method || "get").toLowerCase();
    var isGet = "get" === method;
    var useJsonp = isGet && options.jsonp;
    var params = extend({}, request.params);
    var ajaxData = isGet ? params : formatPayload(request.payload);
    var qs = !isGet && param(params);
    var url = request.url;
    var contentType = !isGet && JSON_VERBOSE_MIME_TYPE;
    if (qs) {
        url += (url.indexOf("?") > -1 ? "&" : "?") + qs
    }
    if (useJsonp) {
        ajaxData.$format = "json"
    }
    return {
        url: url,
        data: ajaxData,
        dataType: useJsonp ? "jsonp" : "json",
        jsonp: useJsonp && "$callback",
        method: method,
        async: request.async,
        timeout: request.timeout,
        headers: request.headers,
        contentType: contentType,
        accepts: {
            json: [JSON_VERBOSE_MIME_TYPE, "text/plain"].join()
        },
        xhrFields: {
            withCredentials: options.withCredentials
        }
    };

    function formatPayload(payload) {
        return JSON.stringify(payload, function(key, value) {
            if (!(this[key] instanceof Date)) {
                return value
            }
            value = formatISO8601(this[key]);
            switch (protocolVersion) {
                case 2:
                    return value.substr(0, value.length - 1);
                case 3:
                case 4:
                    return value;
                default:
                    throw errors.Error("E4002")
            }
        })
    }
};
var sendRequest = function sendRequest(protocolVersion, request, options) {
    var d = new Deferred;
    var ajaxOptions = ajaxOptionsForRequest(protocolVersion, request, options);
    ajax.sendRequest(ajaxOptions).always(function(obj, textStatus) {
        var transformOptions = {
            deserializeDates: options.deserializeDates,
            fieldTypes: options.fieldTypes
        };
        var tuple = interpretJsonFormat(obj, textStatus, transformOptions, ajaxOptions);
        var error = tuple.error;
        var data = tuple.data;
        var nextUrl = tuple.nextUrl;
        var extra;
        if (error) {
            if (error.message !== dataUtils.XHR_ERROR_UNLOAD) {
                d.reject(error)
            }
        } else {
            if (options.countOnly) {
                if (isFinite(tuple.count)) {
                    d.resolve(tuple.count)
                } else {
                    d.reject(new errors.Error("E4018"))
                }
            } else {
                if (nextUrl && !options.isPaged) {
                    if (!isAbsoluteUrl(nextUrl)) {
                        nextUrl = toAbsoluteUrl(ajaxOptions.url, nextUrl)
                    }
                    sendRequest(protocolVersion, {
                        url: nextUrl
                    }, options).fail(d.reject).done(function(nextData) {
                        d.resolve(data.concat(nextData))
                    })
                } else {
                    if (isFinite(tuple.count)) {
                        extra = {
                            totalCount: tuple.count
                        }
                    }
                    d.resolve(data, extra)
                }
            }
        }
    });
    return d.promise()
};
var formatDotNetError = function(errorObj) {
    var message;
    var currentError = errorObj;
    if ("message" in errorObj) {
        if (errorObj.message.value) {
            message = errorObj.message.value
        } else {
            message = errorObj.message
        }
    }
    while (currentError = currentError.innererror || currentError.internalexception) {
        message = currentError.message;
        if (currentError.internalexception && message.indexOf("inner exception") === -1) {
            break
        }
    }
    return message
};
var errorFromResponse = function(obj, textStatus, ajaxOptions) {
    if ("nocontent" === textStatus) {
        return null
    }
    var message = "Unknown error";
    var response = obj;
    var httpStatus = 200;
    var errorData = {
        requestOptions: ajaxOptions
    };
    if ("success" !== textStatus) {
        httpStatus = obj.status;
        message = dataUtils.errorMessageFromXhr(obj, textStatus);
        try {
            response = JSON.parse(obj.responseText)
        } catch (x) {}
    }
    var errorObj = response && (response.then && response || response.error || response["odata.error"] || response["@odata.error"]);
    if (errorObj) {
        message = formatDotNetError(errorObj) || message;
        errorData.errorDetails = errorObj;
        if (200 === httpStatus) {
            httpStatus = 500
        }
        var customCode = Number(errorObj.code);
        if (isFinite(customCode) && customCode >= 400) {
            httpStatus = customCode
        }
    }
    if (httpStatus >= 400 || 0 === httpStatus) {
        errorData.httpStatus = httpStatus;
        return extend(Error(message), errorData)
    }
    return null
};
var interpretJsonFormat = function(obj, textStatus, transformOptions, ajaxOptions) {
    var error = errorFromResponse(obj, textStatus, ajaxOptions);
    var value;
    if (error) {
        return {
            error: error
        }
    }
    if (!isPlainObject(obj)) {
        return {
            data: obj
        }
    }
    if ("d" in obj && (Array.isArray(obj.d) || typeUtils.isObject(obj.d))) {
        value = interpretVerboseJsonFormat(obj, textStatus)
    } else {
        value = interpretLightJsonFormat(obj, textStatus)
    }
    transformTypes(value, transformOptions);
    return value
};
var interpretVerboseJsonFormat = function(obj) {
    var data = obj.d;
    if (!isDefined(data)) {
        return {
            error: Error("Malformed or unsupported JSON response received")
        }
    }
    if (isDefined(data.results)) {
        data = data.results
    }
    return {
        data: data,
        nextUrl: obj.d.__next,
        count: parseInt(obj.d.__count, 10)
    }
};
var interpretLightJsonFormat = function(obj) {
    var data = obj;
    if (isDefined(data.value)) {
        data = data.value
    }
    return {
        data: data,
        nextUrl: obj["@odata.nextLink"],
        count: parseInt(obj["@odata.count"], 10)
    }
};
var EdmLiteral = Class.inherit({
    ctor: function(value) {
        this._value = value
    },
    valueOf: function() {
        return this._value
    }
});
var transformTypes = function transformTypes(obj, options) {
    options = options || {};
    each(obj, function(key, value) {
        if (null !== value && "object" === _typeof(value)) {
            if ("results" in value) {
                obj[key] = value.results
            }
            transformTypes(obj[key], options)
        } else {
            if ("string" === typeof value) {
                var fieldTypes = options.fieldTypes;
                var canBeGuid = !fieldTypes || "String" !== fieldTypes[key];
                if (canBeGuid && GUID_REGEX.test(value)) {
                    obj[key] = new _Guid(value)
                }
                if (false !== options.deserializeDates) {
                    if (value.match(VERBOSE_DATE_REGEX)) {
                        var date = new Date(Number(RegExp.$1) + 60 * RegExp.$2 * 1e3);
                        obj[key] = new Date(date.valueOf() + 60 * date.getTimezoneOffset() * 1e3)
                    } else {
                        if (ISO8601_DATE_REGEX.test(value)) {
                            obj[key] = new Date(parseISO8601(obj[key]).valueOf())
                        }
                    }
                }
            }
        }
    })
};
var serializeDate = function(date) {
    return "datetime'" + formatISO8601(date, true, true) + "'"
};
var serializeString = function(value) {
    return "'" + value.replace(/'/g, "''") + "'"
};
var serializePropName = function(propName) {
    if (propName instanceof EdmLiteral) {
        return propName.valueOf()
    }
    return propName.replace(/\./g, "/")
};
var serializeValueV4 = function serializeValueV4(value) {
    if (value instanceof Date) {
        return formatISO8601(value, false, false)
    }
    if (value instanceof _Guid) {
        return value.valueOf()
    }
    if (Array.isArray(value)) {
        return "[" + value.map(function(item) {
            return serializeValueV4(item)
        }).join(",") + "]"
    }
    return serializeValueV2(value)
};
var serializeValueV2 = function(value) {
    if (value instanceof Date) {
        return serializeDate(value)
    }
    if (value instanceof _Guid) {
        return "guid'" + value + "'"
    }
    if (value instanceof EdmLiteral) {
        return value.valueOf()
    }
    if ("string" === typeof value) {
        return serializeString(value)
    }
    return String(value)
};
var serializeValue = function(value, protocolVersion) {
    switch (protocolVersion) {
        case 2:
        case 3:
            return serializeValueV2(value);
        case 4:
            return serializeValueV4(value);
        default:
            throw errors.Error("E4002")
    }
};
var serializeKey = function(key, protocolVersion) {
    if (isPlainObject(key)) {
        var parts = [];
        each(key, function(k, v) {
            parts.push(serializePropName(k) + "=" + serializeValue(v, protocolVersion))
        });
        return parts.join()
    }
    return serializeValue(key, protocolVersion)
};
var keyConverters = {
    String: function(value) {
        return value + ""
    },
    Int32: function(value) {
        return Math.floor(value)
    },
    Int64: function(value) {
        if (value instanceof EdmLiteral) {
            return value
        }
        return new EdmLiteral(value + "L")
    },
    Guid: function(value) {
        if (value instanceof _Guid) {
            return value
        }
        return new _Guid(value)
    },
    Boolean: function(value) {
        return !!value
    },
    Single: function(value) {
        if (value instanceof EdmLiteral) {
            return value
        }
        return new EdmLiteral(value + "f")
    },
    Decimal: function(value) {
        if (value instanceof EdmLiteral) {
            return value
        }
        return new EdmLiteral(value + "m")
    }
};
var convertPrimitiveValue = function(type, value) {
    if (null === value) {
        return null
    }
    var converter = keyConverters[type];
    if (!converter) {
        throw errors.Error("E4014", type)
    }
    return converter(value)
};
var generateSelect = function(oDataVersion, select) {
    if (!select) {
        return
    }
    if (oDataVersion < 4) {
        return serializePropName(select.join())
    }
    return grep(select, hasDot, true).join()
};
var generateExpand = function(oDataVersion, expand, select) {
    var generatorV2 = function() {
        var hash = {};
        if (expand) {
            iteratorUtils.each(makeArray(expand), function() {
                hash[serializePropName(this)] = 1
            })
        }
        if (select) {
            iteratorUtils.each(makeArray(select), function() {
                var path = this.split(".");
                if (path.length < 2) {
                    return
                }
                path.pop();
                hash[serializePropName(path.join("."))] = 1
            })
        }
        return iteratorUtils.map(hash, function(k, v) {
            return v
        }).join()
    };
    var generatorV4 = function() {
        var format = function(hash) {
            var formatCore = function formatCore(hash) {
                var result = "";
                var selectValue = [];
                var expandValue = [];
                iteratorUtils.each(hash, function(key, value) {
                    if (Array.isArray(value)) {
                        [].push.apply(selectValue, value)
                    }
                    if (isPlainObject(value)) {
                        expandValue.push(key + formatCore(value))
                    }
                });
                if (selectValue.length || expandValue.length) {
                    result += "(";
                    if (selectValue.length) {
                        result += "$select=" + iteratorUtils.map(selectValue, serializePropName).join()
                    }
                    if (expandValue.length) {
                        if (selectValue.length) {
                            result += ";"
                        }
                        result += "$expand=" + iteratorUtils.map(expandValue, serializePropName).join()
                    }
                    result += ")"
                }
                return result
            };
            var result = [];
            iteratorUtils.each(hash, function(key, value) {
                result.push(key + formatCore(value))
            });
            return result.join()
        };
        var parseTree = function(exprs, root, stepper) {
            var parseCore = function parseCore(exprParts, root, stepper) {
                var result = stepper(root, exprParts.shift(), exprParts);
                if (false === result) {
                    return
                }
                parseCore(exprParts, result, stepper)
            };
            iteratorUtils.each(exprs, function(_, x) {
                parseCore(x.split("."), root, stepper)
            })
        };
        var hash = {};
        if (expand || select) {
            if (expand) {
                parseTree(makeArray(expand), hash, function(node, key, path) {
                    node[key] = node[key] || {};
                    if (!path.length) {
                        return false
                    }
                    return node[key]
                })
            }
            if (select) {
                parseTree(grep(makeArray(select), hasDot), hash, function(node, key, path) {
                    if (!path.length) {
                        node[key] = node[key] || [];
                        node[key].push(key);
                        return false
                    }
                    return node[key] = node[key] || {}
                })
            }
            return format(hash)
        }
    };
    if (oDataVersion < 4) {
        return generatorV2()
    }
    return generatorV4()
};
exports.sendRequest = sendRequest;
exports.serializePropName = serializePropName;
exports.serializeValue = serializeValue;
exports.serializeKey = serializeKey;
exports.keyConverters = keyConverters;
exports.convertPrimitiveValue = convertPrimitiveValue;
exports.generateExpand = generateExpand;
exports.generateSelect = generateSelect;
exports.EdmLiteral = EdmLiteral;


/***/ }),

/***/ "./node_modules/devextreme/data/proxy_url_formatter.js":
/*!*************************************************************!*\
  !*** ./node_modules/devextreme/data/proxy_url_formatter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (data/proxy_url_formatter.js)
 * Version: 19.2.6
 * Build date: Thu Jan 30 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var each = __webpack_require__(/*! ../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each;
var domAdapter = __webpack_require__(/*! ../core/dom_adapter */ "./node_modules/devextreme/core/dom_adapter.js");
var window = __webpack_require__(/*! ../core/utils/window */ "./node_modules/devextreme/core/utils/window.js").getWindow();
var callOnce = __webpack_require__(/*! ../core/utils/call_once */ "./node_modules/devextreme/core/utils/call_once.js");
var DXPROXY_HOST = "dxproxy.devexpress.com:8000";
var urlMapping = {};
var getUrlParser = callOnce(function() {
    var a = domAdapter.createElement("a");
    var props = ["protocol", "hostname", "port", "pathname", "search", "hash"];
    var normalizePath = function(value) {
        if ("/" !== value.charAt(0)) {
            value = "/" + value
        }
        return value
    };
    return function(url) {
        a.href = url;
        var result = {};
        each(props, function() {
            result[this] = a[this]
        });
        result.pathname = normalizePath(result.pathname);
        return result
    }
});
var parseUrl = function(url) {
    var urlParser = getUrlParser();
    return urlParser(url)
};
var extractProxyAppId = function() {
    return window.location.pathname.split("/")[1]
};
module.exports = {
    parseUrl: parseUrl,
    isProxyUsed: function() {
        return window.location.host === DXPROXY_HOST
    },
    formatProxyUrl: function(localUrl) {
        var urlData = parseUrl(localUrl);
        if (!/^(localhost$|127\.)/i.test(urlData.hostname)) {
            return localUrl
        }
        var proxyUrlPart = DXPROXY_HOST + "/" + extractProxyAppId() + "_" + urlData.port;
        urlMapping[proxyUrlPart] = urlData.hostname + ":" + urlData.port;
        var resultUrl = "http://" + proxyUrlPart + urlData.pathname + urlData.search;
        return resultUrl
    },
    formatLocalUrl: function(proxyUrl) {
        if (proxyUrl.indexOf(DXPROXY_HOST) < 0) {
            return proxyUrl
        }
        var resultUrl = proxyUrl;
        for (var proxyUrlPart in urlMapping) {
            if (Object.prototype.hasOwnProperty.call(urlMapping, proxyUrlPart)) {
                if (proxyUrl.indexOf(proxyUrlPart) >= 0) {
                    resultUrl = proxyUrl.replace(proxyUrlPart, urlMapping[proxyUrlPart]);
                    break
                }
            }
        }
        return resultUrl
    }
};


/***/ }),

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

/***/ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-12\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item *ngIf=\"!isTT78\"  dataField=\"invoice_release_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: select.invoice_releases, onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.invoice_form }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"isTT78\" dataField=\"template_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n        <!-- Hợp đồng kinh tế số, ngày -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [cssClass]=\"'max_left'\"  dataField=\"delivery_order_number\" >\r\n              <dxo-label text=\"{{strTextHDKT}}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{strTextHDKT}} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item  dataField=\"delivery_order_date\" [cssClass]=\"'max_right'\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'}\">\r\n              <dxo-label text=\"{{strtextHDKTNgay}}\"></dxo-label>\r\n              <dxi-validation-rule *ngIf=\"isPXKDaiLy\" type=\"required\" message=\"{{ strtextHDKTNgay }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Ngày hóa đơn, số hóa đơn -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [cssClass]=\"'max_left'\" dataField=\"invoice_date\"  editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate , onValueChanged: changeDateTime}\">\r\n            <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item [cssClass]=\"'max_right'\" cssClass=\"vat invoice-number-create-invoice\" dataField=\"invoice_number\"   editorType=\"dxNumberBox\" [editorOptions]=\"{ disabled: true}\">\r\n              <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Của -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"delivery_order_by\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.of }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Loại tiền, tỷ giá -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item   dataField=\"currency_code\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{_translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.currency_code }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"currency_rate\"   editorType=\"dxNumberBox\" [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: '0,###.##'}\">\r\n              <dxo-label text=\"{{_translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Với -->\r\n        <dxi-item *ngIf=\"isPXKDaiLy\" itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item  name=\"search-mkh\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.with }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n                <dx-autocomplete\r\n                    valueExpr=\"code\"\r\n                    placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\"\r\n                    [dataSource]=\"customer_codes\"\r\n                    [(value)]=\"frmData.customer_name\"\r\n                    (onItemClick)=\"customerCodeChoose($event)\"\r\n                    (onFocusOut)=\"updateCustomerInfo($event)\"\r\n                    >\r\n                    <div *dxTemplate=\"let item of 'item'\">\r\n                        <span>{{item.code}}: {{ item.name }}</span>\r\n                    </div>\r\n                </dx-autocomplete>\r\n            </div>\r\n            <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.with }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"add_customer\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n       \r\n         <!-- Email -->\r\n         <dxi-item *ngIf=\"!isPXKDaiLy\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item [label]=\"{text: 'Email'}\" [ngClass]=\"configs.system_parameter.view_bank_account_seller? 'vat layout_input' : ''\">\r\n            <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n              <div\r\n                class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                  <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\"\r\n                  ></app-tag-input-email>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- <dxi-item *ngIf=\"!isPXKDaiLy\"  itemType=\"group\" [colCount]=\"1\">\r\n         \r\n        </dxi-item> -->\r\n        \r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Hình thức xuất -->\r\n          <dxi-item name=\"ht-xuat\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.export_form }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-select-box \r\n                [(value)]=\"frmData.status\"\r\n                displayExpr=\"name\"\r\n                valueExpr=\"code\"\r\n                [items]=\"htXuatOptions\"\r\n                [disabled] = \"!configs.system_parameter.allow_keep_invoice_number\"\r\n              ></dx-select-box>\r\n            </div>\r\n          </dxi-item>\r\n          <!-- MST kho nhận -->\r\n          <dxi-item *ngIf=\"isTT78 && !isPXKDaiLy\" dataField=\"buyer_tax_code\">\r\n            <dxo-label text=\"MST kho nhận\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Về việc -->\r\n        <dxi-item *ngIf=\"!isPXKDaiLy\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"delivery_order_content\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.delivery_order_content }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Mã số thuế -->\r\n        <dxi-item *ngIf=\"isPXKDaiLy\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"buyer_tax_code\" >\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n        </dxi-item>\r\n        </dxi-item>\r\n        <!-- Người vận chuyển, hợp đồng -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item   dataField=\"delivery_by\" >\r\n              <dxo-label text=\"{{_translate.CONTROLL.LABEL.delivery_by }}\"></dxo-label>\r\n              <dxi-validation-rule *ngIf=\"isPXKDaiLy\" type=\"required\" message=\"{{_translate.CONTROLL.LABEL.delivery_by }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"transportation_contract\" >\r\n              <dxo-label text=\"{{_translate.CONTROLL.LABEL.contract_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n       <!-- Phương thức vận chuyển -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n           <dxi-item   dataField=\"transportation_method\">\r\n             <dxo-label text=\"{{_translate.CONTROLL.LABEL.transportation_method }}\"></dxo-label>\r\n             <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.transportation_method }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n           </dxi-item>\r\n        </dxi-item>\r\n       <!-- Xuất tại kho -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item name=\"search-mst\"   dataField=\"from_warehouse\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: wavehourses, onValueChanged: from_warehouseChange, displayExpr: 'name', valueExpr: 'id',searchEnabled:true}\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.from_warehouse }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.from_warehouse }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"from_warehouse_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Nhập tại kho -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item   dataField=\"to_warehouse\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: wavehourses, onValueChanged: to_warehouseChange, displayExpr: 'name', valueExpr: 'id',searchEnabled:true}\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.to_warehouse }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\" message=\"{{_translate.CONTROLL.LABEL.to_warehouse }} {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"to_warehouse_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n         <!-- Địa chỉ kho xuất -->\r\n         <dxi-item *ngIf=\"isTT78  && !isPXKDaiLy\" itemType=\"group\">\r\n          <dxi-item dataField=\"shiping_point\">\r\n            <dxo-label text=\"Địa chỉ kho xuất\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\" message=\"Địa chỉ kho xuất {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        </dxi-item>\r\n        <!-- Địa chỉ kho nhập -->\r\n        <dxi-item *ngIf=\"isTT78  && !isPXKDaiLy\" itemType=\"group\">\r\n          <dxi-item  dataField=\"place_of_delivery\">\r\n            <dxo-label text=\"Địa chỉ kho nhập\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\" message=\"Địa chỉ kho nhập {{_translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"isTT78\" itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Số bảng kê -->\r\n          <dxi-item [cssClass]=\"'max_left'\" dataField=\"list_number\">\r\n              <dxo-label text=\"Số bảng kê\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Ngày bảng kê -->\r\n          <dxi-item [cssClass]=\"'max_right'\" dataField=\"list_date\" [template]=\"'notifydate'\">\r\n              <dxo-label text=\"Ngày bảng kê\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"configs.integrate_parameter.integrate_econtract && configs.integrate_parameter.integrate_econtract.is_delivery\">\r\n          <!-- Số điện thoại người vận chuyển -->\r\n           <dxi-item dataField=\"carrier_mobile\" [editorOptions]=\"{ readOnly: isHoaDonDaXuat }\">\r\n               <dxo-label text=\"{{_translate.CONTROLL.LABEL.carrier_mobile }}\"></dxo-label>\r\n               <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\" message=\"{{_translate.CONTROLL.LABEL.carrier_mobile }} {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule>\r\n           </dxi-item>\r\n          <!-- Email người vận chuyển -->\r\n           <dxi-item dataField=\"carrier_email\" [editorOptions]=\"{ readOnly: isHoaDonDaXuat }\">\r\n               <dxo-label text=\"{{_translate.CONTROLL.LABEL.carrier_email }}\"></dxo-label>\r\n               <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"{{_translate.CONTROLL.LABEL.carrier_email }} {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule>\r\n           </dxi-item>\r\n         </dxi-item>\r\n        <!-- Ghi chú -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item cssClass=\"vat invoice-note\"  dataField=\"note\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.note }}\"></dxo-label>\r\n        </dxi-item>\r\n        </dxi-item>\r\n        <!-- Email -->\r\n        <dxi-item *ngIf=\"isPXKDaiLy\" itemType=\"group\" [colCount]=\"1\" [editorOptions]=\"{ readOnly: isHoaDonDaXuat }\">\r\n          <dxi-item [label]=\"{text: 'Email'}\" [ngClass]=\"configs.system_parameter.view_bank_account_seller? 'vat layout_input' : ''\">\r\n            <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n              <div\r\n                class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                  <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\"\r\n                  ></app-tag-input-email>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        \r\n      </dxi-item>\r\n      <div *dxTemplate = \"let d of 'notifydate'\">\r\n        <dx-date-box [(value)]=\"frmData.list_date\" type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\" [dateSerializationFormat]=\"'yyyy-MM-dd HH:mm:ss'\">\r\n        </dx-date-box>\r\n      </div>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <app-form-extend [disableForm]=\"ttDaXuatHoaDon\"  [formData]=\"frmData\"  [customerTempt]=\"customerTempt\" [formItems]=\"formItems\" [typeOptions]=\"'invoice_options'\"></app-form-extend>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}::ng-deep .vat.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .vat.layout_input span.dx-field-item-label-content{width:117px !important}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}.name-customer{width:100% !important}.name-customer .label{width:25%}.name-customer .value{width:73.4% !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align .dx-field-item-label .dx-field-item-label-content{min-width:171px !important}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FormInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvoiceComponent", function() { return FormInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/odata/store */ "./node_modules/devextreme/data/odata/store.js");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/modules/some/components/add-wavehourse/add-wavehourse.component */ "./src/app/shared/modules/some/components/add-wavehourse/add-wavehourse.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var FormInvoiceComponent = /** @class */ (function () {
    function FormInvoiceComponent(authService, route, modalService, vatService, productsService, translate, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.translate = translate;
        this.invoiceService = invoiceService;
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_11__["pattern"];
        this.tax_codes = [];
        this.customer_codes = [];
        this.showTraLai = false;
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuatOptions = [];
        this.selectedWavehourse = '';
        this.isPXKDaiLy = false;
        this.isHoaDonDaXuat = false;
        //thay đổi disable của 3 input customer_name, buyer_name, buyer_address
        this.tod = {};
        this.emails = [];
        this.arrEmail = [];
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.from_warehouse_btn_options = {
            text: "",
            icon: "assets/img/icons/Them.png",
            type: "default",
            onClick: function () {
                _this.wavehourse = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__["Wavehourse"]();
                _this.wavehourse.order = _this.wavehourses.length + 1;
                var initialState = {
                    wavehourse: _this.wavehourse,
                    onSave: function (wavehourse) {
                        _this.wavehourse = wavehourse;
                        _this.wavehourses.unshift(_this.wavehourse);
                        _this.frmData.from_warehouse = _this.wavehourse.id;
                        _this.frmData.from_warehouse_name = _this.wavehourse.name;
                    }
                };
                _this.bsModalRef = _this.modalService.show(_shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_12__["AddWavehourseComponent"], {
                    class: 'second child-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
        };
        this.to_warehouse_btn_options = {
            text: "",
            icon: "assets/img/icons/Them.png",
            type: "default",
            onClick: function () {
                _this.wavehourse = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__["Wavehourse"]();
                _this.wavehourse.order = _this.wavehourses.length + 1;
                var initialState = {
                    wavehourse: _this.wavehourse,
                    onSave: function (wavehourse) {
                        _this.wavehourse = wavehourse;
                        _this.wavehourses.unshift(_this.wavehourse);
                        _this.frmData.to_warehouse = _this.wavehourse.id;
                        _this.frmData.to_warehouse_name = _this.wavehourse.name;
                    }
                };
                _this.bsModalRef = _this.modalService.show(_shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_12__["AddWavehourseComponent"], {
                    class: 'second child-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
        };
        this.add_customer = {
            text: "",
            icon: "assets/img/icons/Them.png",
            type: "default",
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false,
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["AddCustomerComponent"], {
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
        //sự kiện
        this.taxCodeKeyUp = function (e) {
            var str = _this.frmData.buyer_tax_code;
            var len = str.length;
            if (len >= 3) {
                _this.vatService.searchMST(str).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        var arr_1 = [];
                        rs.data.customers.forEach(function (item) {
                            arr_1.push(item);
                        });
                        _this.tax_codes = arr_1;
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
                    _this.onTemplateChange.emit(item.is_multi_vat);
                    // Nếu là mẫu html
                    _this.formDuLieuMoRong(item);
                }
            });
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.invoice_release_id = "";
                    _this.frmData.template_id = item.value;
                    _this.frmData.invoice_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateChange.emit(item.is_multi_vat);
                    _this.onTemplateTT78TypeChange.emit(item);
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._oTemplateTT78[key] = value;
                        }
                    }
                    // Nếu là mẫu html
                    _this.formDuLieuMoRong(item);
                }
            });
        };
        this.from_warehouseChange = function (e) {
            var _obj = _this.wavehourses.filter(function (p) { return p.id == e.value; })[0];
            if (_obj) {
                _this.frmData.from_warehouse_name = _obj.name;
                _this.frmData.shiping_point = _obj.address;
            }
        };
        this.to_warehouseChange = function (e) {
            var _obj = _this.wavehourses.filter(function (p) { return p.id == e.value; })[0];
            if (_obj) {
                _this.frmData.to_warehouse_name = _obj.name;
                _this.frmData.place_of_delivery = _obj.address;
            }
        };
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code == 'VND') {
                _this.frmData.currency_rate = null;
            }
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].tienBangChu(Math.abs(_this.frmData.total_payment), _core_index__WEBPACK_IMPORTED_MODULE_8__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
            _this.frmData.total_payment_in_word = _this.invoiceService.docTienAm(_this.frmData.total_payment, tien_chu, _this.configs, _this.frmData.currency_code);
        };
        this.currencyRateChange = function (e) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, null, _this.configs.system_parameter);
        };
        this.exportPlaceChange = function (e) {
            var _obj = _this.select.export_places.filter(function (p) { return p.code == e.value; })[0];
            if (_obj) {
                _this.frmData.export_address = _obj.dia_chi;
                _this.frmData.export_place_name = _obj.name;
            }
        };
        this.updateCustomerInfo = function (e) {
            // if (this.frmData.customer_id) {
            //   this.customersService.getCustomer(this.frmData.customer_id).subscribe(response => {
            //     if (response.data) {
            //       this.customerCurent = response.data.customer;
            //       if (this.customerCurent) {
            //         if (VStringService._getValueToString(this.customerCurent.code) !== VStringService._getValueToString(this.frmData.customer_code)) {
            //           this.showPopup = true;
            //           return;
            //         }
            //       }
            //     }
            //   });
            // }
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormInvoiceComponent.prototype.ngAfterViewInit = function () {
        var a = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('HH:mm:ss.SSS');
        this.formDuLieuMoRong(this.template_temp);
        if (this.frmData.total_payment) {
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].tienBangChu(Math.abs(this.frmData.total_payment), _core_index__WEBPACK_IMPORTED_MODULE_8__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), this.frmData.currency_code, this.configs.system_parameter.display_read_money_english);
            this.frmData.total_payment_in_word = this.invoiceService.docTienAm(this.frmData.total_payment, tien_chu, this.configs, this.frmData.currency_code);
        }
    };
    FormInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._htXuatOptions(this._translate, this.frmData.status);
        var a = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('HH:mm:ss.SSS');
        this.configs = this.authService.getConfigs();
        this.loaiHoaDon = this.route.snapshot.data.type;
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.HGDL04)
            this.isPXKDaiLy = true;
        if (this.isPXKDaiLy) {
            this.strTextHDKT = this._translate.CONTROLL.LABEL.deconomic_contract_number;
            this.strtextHDKTNgay = "Hợp đồng kinh tế ngày";
        }
        else {
            this.strTextHDKT = this._translate.CONTROLL.LABEL.delivery_order_number;
            this.strtextHDKTNgay = this._translate.CONTROLL.LABEL.date;
        }
        if (this.route.snapshot.queryParams['status'] == 'return') {
            this.showTraLai = true;
            this.frmData.nguoitralai = this.authService.getCurrentUser().user.name;
            this.frmData.ngaytralai = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            //put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.currency_codes = danh_muc.DM_LOAI_TIEN ? danh_muc.DM_LOAI_TIEN.data : null;
            _this.select.customer_types = danh_muc.DM_NHOM_KHACH_HANG ? danh_muc.DM_NHOM_KHACH_HANG.data : null;
            _this.select.export_places = danh_muc.DM_NOI_XUAT_HOA_DON ? danh_muc.DM_NOI_XUAT_HOA_DON.data : null;
            if (_this.isTT78) {
                var temptTT78 = [];
                if (!_this.frmData.id) {
                    temptTT78 = data.init[1];
                }
                else {
                    temptTT78 = data.init[3];
                }
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
                if (!_this.frmData.id) {
                    _this.select.invoice_releases = _this.select.invoice_releases.filter(function (p) { return p.number_survival > 0 && p.release_status != 'DA_HUY_SO'; });
                }
            }
        });
        this.select.customer_object_codes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._customerObject(this._translate);
        this.select.adjustment_forms = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._adjustmentForms(this._translate);
        this.select.adjustment_objects = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._adjustmentObjects(this._translate);
        //Set disabled cho đơn vị tổ chức
        this.setDisabledByCustomer_object_code(this.frmData.customer_object_code);
        //tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            store: new devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_6___default.a({
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].API_URL + "/customers",
                beforeSend: function (e) {
                    e.params = {
                        "limit": "10", "page": "1",
                        "filter_groups[0][or]": "true",
                        "filter_groups[0][filters][0][key]": "tax_code",
                        "filter_groups[0][filters][0][value]": _this.frmData.buyer_tax_code,
                        "filter_groups[0][filters][0][operator]": "ct",
                        "filter_groups[0][filters][1][key]": "name",
                        "filter_groups[0][filters][1][value]": _this.frmData.buyer_tax_code,
                        "filter_groups[0][filters][1][operator]": "ct",
                    };
                    e.headers = {
                        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('access_token')).value,
                        "TaxCode": JSON.parse(localStorage['currentUser']).account.tax_code,
                        "Content-Type": "application/json",
                    };
                }
            }),
            map: function (dataItem) {
                return dataItem.customers;
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
                    _this.template_temp = item;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                _this.frmData.invoice_release_id = "";
                if (item.value === _this.frmData.template_id) {
                    _this.template_temp = item;
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
    FormInvoiceComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        this.customForms = [];
        this.customerTempt = {};
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].resetObject(this.formItems);
        if (item.fields && item.fields.length > 0) {
            var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
            if (_arrayGrid && _arrayGrid.length > 0) {
                this.extentionGrid.ma_hang = false;
                this.extentionGrid.so_lo = false;
                this.extentionGrid.han_dung = false;
                this.extentionGrid.nuoc_san_xuat = false;
                this.extentionGrid.don_hang_hop_dong = false;
                this.extentionGrid.ma_quan_ly = false;
                for (var i = 0; i < _arrayGrid.length; i++) {
                    var column = _arrayGrid[i]['name'];
                    var value = _arrayGrid[i]['is_show'];
                    var _ma = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column);
                    this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column)] = value;
                }
            }
            var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
            var invoice_options_1 = this.frmData.invoice_options;
            if (invoice_options_1.length > 0) {
                _dulieumorong = _dulieumorong.map(function (dl) {
                    var option = invoice_options_1.find(function (x) { return x.code == dl.code; });
                    if (option) {
                        dl.value = option.value;
                    }
                    return dl;
                });
            }
            this.frmData.invoice_options = _dulieumorong;
            if (_dulieumorong.length > 0) {
                this.formExtend.createForm(this.customForms, _dulieumorong);
                _dulieumorong.forEach(function (value) {
                    _this.customerTempt[value.code] = value.value;
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].resetObject(this.formItems);
            this.extentionGrid.ma_hang = false;
            this.extentionGrid.so_lo = false;
            this.extentionGrid.han_dung = false;
            this.extentionGrid.nuoc_san_xuat = false;
            this.extentionGrid.don_hang_hop_dong = false;
            this.extentionGrid.ma_quan_ly = false;
        }
    };
    FormInvoiceComponent.prototype.createForm = function () {
        this.form.instance.beginUpdate();
        this.form.instance.itemOption("business_addressa", { label: { text: "Địa chỉ" }, editorOptions: { placeholder: "Nhập địa chỉ" } });
        this.form.instance.endUpdate();
    };
    FormInvoiceComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.invoice_number) {
            return true;
        }
        return false;
    };
    FormInvoiceComponent.prototype.readonlyAllForm = function (trangthaiHD) {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
        if (trangthaiHD == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.DaXuat)
            this.isHoaDonDaXuat = true;
        else
            this.isHoaDonDaXuat = false;
    };
    FormInvoiceComponent.prototype.allowEditAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
        });
        this.readOnlyCacTruongConLai = false;
    };
    // reset trường mở rộng
    FormInvoiceComponent.prototype.resetTMR = function () {
        this.formExtend.resetForm();
        this.formExtend.resetOptions();
    };
    FormInvoiceComponent.prototype.removeReadonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
            // item.instance.resetValues();
        });
        this.readOnlyCacTruongConLai = false;
    };
    FormInvoiceComponent.prototype.setDisabledByCustomer_object_code = function (value) {
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
    //gửi data lên parent component
    FormInvoiceComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    FormInvoiceComponent.prototype.getHtXuatValue = function () {
        return this.frmData.status;
    };
    FormInvoiceComponent.prototype.getFrmData = function () {
        return this.frmData;
    };
    FormInvoiceComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code != 'CA_NHAN' && this.frmData.customer_object_code != 'KHACH_LE')
            this.frmData.customer_name = customer.name;
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code != 'KHACH_LE')
            this.frmData.buyer_address = customer.business_address;
        this.frmData.customer_code = customer.code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        this.frmData.buyer_email = customer.email;
        this.frmData.customer_id = customer.id;
        if (customer.bank_account_number)
            this.frmData.bank_account_number = customer.bank_account_number;
        if (customer.bank_name)
            this.frmData.bank_name = customer.bank_name;
        this.onFieldDataChanged();
    };
    FormInvoiceComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code != 'CA_NHAN' && this.frmData.customer_object_code != 'KHACH_LE')
            this.frmData.customer_name = customer.name;
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code != 'KHACH_LE')
            this.frmData.buyer_address = customer.business_address;
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
        if (customer.bank_account_number)
            this.frmData.bank_account_number = customer.bank_account_number;
        if (customer.bank_name)
            this.frmData.bank_name = customer.bank_name;
        this.onFieldDataChanged();
    };
    // paymentMethodChange = (e) => {
    //   let _obj = this.select.payment_method_names.filter(p => p.code == e.value)[0];
    //   if (_obj) {
    //     this.frmData.payment_method_view_name = _obj.name;
    //   }
    // }
    FormInvoiceComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    FormInvoiceComponent.prototype.renderDataEmail = function ($event) {
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
    FormInvoiceComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        if (this.isTT78) {
            var year_1 = "";
            if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(strDate) != "")
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(strDate).substring(4, 2);
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
            }
            var templates = this.select.templatesTT78;
            this.select.templatesTT78 = [];
            if (templates && templates.length > 0) {
                templates.forEach(function (item) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(item.name) != "")
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"])
    ], FormInvoiceComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"])
    ], FormInvoiceComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "wavehourses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTT78TypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "extentionGrid", void 0);
    FormInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transport-form-invoice',
            template: __webpack_require__(/*! ./form-invoice.component.html */ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.html"),
            styles: [__webpack_require__(/*! ./form-invoice.component.scss */ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__["ProductsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_18__["InvoiceService"]])
    ], FormInvoiceComponent);
    return FormInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\">\r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{ _translate.MENU.import_transport_from_excel}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalImportRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div *ngIf = \"!isTT78\" class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"invoice_releases\" displayExpr=\"name\" [(value)]=\"invoice_release_id\"\r\n                               valueExpr=\"value\" [disabled]=\"disabledInvoiceReleases\"\r\n                               (onValueChanged)=\"onInvoiceReleases($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div *ngIf = \"isTT78\" class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templatesTT78\" displayExpr=\"name\" [(value)]=\"template_id\"\r\n                               valueExpr=\"value\" [disabled]=\"disabledInvoiceReleases\"\r\n                               (onValueChanged)=\"onInvoiceTemplate($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">{{ _translate.CONTROLL.LABEL.export_form }}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [(value)]=\"htXuat\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\" [disabled] = \"!configs.system_parameter.allow_keep_invoice_number\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.file_name }}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" style=\"width: 92.5%!important; border-style: solid!important;\"\r\n                             [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 10px;margin-top: 13px;\">\r\n                <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                  <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\"\r\n                         multiple=\"false\" style=\"display: none;\"/>\r\n                  <span>{{ _translate.CONTROLL.LABEL.select_file }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">{{ _translate.CONTROLL.LABEL.note1 }}</span> {{ _translate.CONTROLL.LABEL.import_list_internal_transport_from_file_excel }}</p>\r\n        <p style=\"margin-left: 43px;\">{{ _translate.CONTROLL.LABEL.correct_format_download_template }} <a\r\n          href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">{{ _translate.CONTROLL.LABEL.click_here }}</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n        <dx-button (click)=\"chonDocFile()\" text=\"{{ _translate.CONTROLL.LABEL.read_file_excel }}\" type=\"default\" [disabled]=\"isDisReadFile\"></dx-button>\r\n        <dx-button (click)=\"configColumn()\" text=\"{{ _translate.CONTROLL.LABEL.config }}\" type=\"default\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n        <div class=\"col-md-12\">\r\n          <dx-data-grid id=\"gridImportInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n                        [wordWrapEnabled]=\"true\" [columnAutoWidth]=\"false\" [allowColumnResizing]=\"true\"\r\n                        [columnMinWidth]=\"50\"\r\n                        [columnResizingMode]=\"true\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n                        (onEditorPreparing)=\"onEditorPreparing($event)\" (onContentReady)=\"onContentReady($event)\"\r\n                        (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n                        (onRowUpdated)=\"onRowUpdated($event)\" (onRowRemoving)=\"onRowRemoving($event)\"\r\n                        (onKeyDown)=\"onGripKeyDown($event)\">\r\n            <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n            </dxo-editing>\r\n            <dxo-sorting mode=\"false\"></dxo-sorting>\r\n            <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n            <!-- Số phiếu -->\r\n            <dxi-column *ngIf=\"infoColumn('number_of_vouchers').is_visible\" dataField=\"number_of_vouchers\" [width]=\"130\"\r\n                        caption=\"{{infoColumn('number_of_vouchers').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Ngày phiếu xuất kho -->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_date').is_visible\" dataField=\"invoice_date\"\r\n                        caption=\"{{infoColumn('invoice_date').column_name}}\" [width]=\"140\" dataType=\"date\"\r\n                        format=\"dd/MM/yyyy\"\r\n                        dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n                      </dxi-column>\r\n            <!-- Căn cứ lệnh điều động số -->\r\n            <dxi-column *ngIf=\"infoColumn('delivery_order_number').is_visible\" dataField=\"delivery_order_number\"\r\n                        [width]=\"105\" caption=\"{{infoColumn('delivery_order_number').column_name}}\" alignment=\"center\"\r\n                        [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n            <!-- Ngày lệnh điều động-->\r\n            <dxi-column *ngIf=\"infoColumn('delivery_order_date').is_visible\" dataField=\"delivery_order_date\"\r\n                        caption=\"{{infoColumn('delivery_order_date').column_name}}\" [width]=\"140\" dataType=\"date\"\r\n                        format=\"dd/MM/yyyy\"\r\n                        dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n                      </dxi-column>\r\n            <!-- Loại tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('currency_code').is_visible\" dataField=\"currency_code\" [width]=\"77\"\r\n                        caption=\"{{infoColumn('currency_code').column_name}}\" alignment=\"center\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\"></dxi-column>\r\n            <!-- Tỷ giá -->\r\n            <dxi-column *ngIf=\"infoColumn('currency_rate').is_visible\" dataField=\"currency_rate\" [width]=\"90\"\r\n                        caption=\"{{infoColumn('currency_rate').column_name}}\"\r\n                        format=\"0,###.##\" dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Của -->\r\n            <dxi-column *ngIf=\"infoColumn('delivery_order_by').is_visible\" dataField=\"delivery_order_by\" [width]=\"267\"\r\n                        caption=\"{{infoColumn('delivery_order_by').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Mã số thuế kho nhận -->\r\n            <dxi-column *ngIf=\"infoColumn('buyer_tax_code').is_visible\" dataField=\"buyer_tax_code\" [width]=\"150\"\r\n                        caption=\"MST kho nhận\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Về việc -->\r\n            <dxi-column *ngIf=\"infoColumn('delivery_order_content').is_visible\" dataField=\"delivery_order_content\" [width]=\"252\"\r\n                        caption=\"{{infoColumn('delivery_order_content').column_name}}\" alignment=\"left\" >\r\n            </dxi-column>\r\n            <!-- Email nhận hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('buyer_email').is_visible\" dataField=\"buyer_email\" [width]=\"222\"\r\n                        caption=\"{{infoColumn('buyer_email').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\" message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Người vận chuyển -->\r\n            <dxi-column *ngIf=\"infoColumn('delivery_by').is_visible\" dataField=\"delivery_by\" [width]=\"163\"\r\n                         caption=\"{{infoColumn('delivery_by').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số điện thoại người vận chuyển -->\r\n            <dxi-column *ngIf=\"infoColumn('carrier_mobile').is_visible\" dataField=\"carrier_mobile\" [width]=\"163\"\r\n                        caption=\"{{infoColumn('carrier_mobile').column_name}}\" alignment=\"left\">\r\n                <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\" message=\"{{_translate.CONTROLL.LABEL.carrier_mobile}} {{ _translate.VALIDATION.not_pattern }}\">\r\n                </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Email người vận chuyển -->\r\n            <dxi-column *ngIf=\"infoColumn('carrier_email').is_visible\" dataField=\"carrier_email\" [width]=\"222\"\r\n                        caption=\"{{infoColumn('carrier_email').column_name}}\" alignment=\"left\">\r\n                <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\" message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n                </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Hợp đồng số -->\r\n            <dxi-column *ngIf=\"infoColumn('transportation_contract').is_visible\" dataField=\"transportation_contract\" [width]=\"112\"\r\n                         caption=\"{{infoColumn('transportation_contract').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Phương tiện vận chuyển -->\r\n            <dxi-column *ngIf=\"infoColumn('transportation_method').is_visible\" dataField=\"transportation_method\" [width]=\"157\"\r\n                         caption=\"{{infoColumn('transportation_method').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Xuất tại kho -->\r\n            <dxi-column *ngIf=\"infoColumn('from_warehouse_name').is_visible\" dataField=\"from_warehouse\"\r\n                        [editorOptions]=\"lookupColumnOptionsFromWarehouse\" caption=\"{{infoColumn('from_warehouse_name').column_name}}\"\r\n                        [width]=\"269\"\r\n                        alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.wavehourses\" displayExpr=\"name\" valueExpr=\"id\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Địa chỉ kho xuất hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('shiping_point').is_visible\" dataField=\"shiping_point\" [width]=\"296\"\r\n                        caption=\"{{infoColumn('shiping_point').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Nhập tại kho -->\r\n            <dxi-column *ngIf=\"infoColumn('to_warehouse_name').is_visible\" dataField=\"to_warehouse\"\r\n                        [editorOptions]=\"lookupColumnOptionsToWarehouse\" caption=\"{{infoColumn('to_warehouse_name').column_name}}\"\r\n                        [width]=\"269\"\r\n                        alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.wavehourses\" displayExpr=\"name\" valueExpr=\"id\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Địa chỉ kho nhập hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('place_of_delivery').is_visible\" dataField=\"place_of_delivery\" [width]=\"296\"\r\n                        caption=\"{{infoColumn('place_of_delivery').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Mã hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('product_code').is_visible\" dataField=\"product_code\"\r\n                        [editorOptions]=\"{showClearButton: true}\" caption=\"{{infoColumn('product_code').column_name}}\"\r\n                        alignment=\"center\" [width]=\"100\">\r\n              <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Tên hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('product_name').is_visible\" dataField=\"product_name\" [width]=\"150\"\r\n                        caption=\"{{infoColumn('product_name').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Đơn hàng hợp đồng -->\r\n            <dxi-column *ngIf=\"infoColumn('contract_order').is_visible\" dataField=\"contract_order\" [width]=\"150\"\r\n                        caption=\"{{infoColumn('contract_order').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Diễn giải -->\r\n            <dxi-column *ngIf=\"infoColumn('is_promotion').is_visible\" dataField=\"is_promotion\" [width]=\"100\"\r\n                        caption=\"{{infoColumn('is_promotion').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Đơn vị tính -->\r\n            <dxi-column *ngIf=\"infoColumn('unit_name').is_visible\" dataField=\"unit_code\"\r\n                        [editorOptions]=\"lookupColumnOptions\" caption=\"{{infoColumn('unit_name').column_name}}\"\r\n                        [width]=\"100\"\r\n                        alignment=\"center\">\r\n              <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- SL thực xuất -->\r\n            <dxi-column *ngIf=\"infoColumn('number_real_export').is_visible\" dataField=\"number_real_export\" [width]=\"90\"\r\n                        caption=\"{{infoColumn('number_real_export').column_name}}\" [editorOptions]=\"{ format: formatter.so_luong }\"\r\n                        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- SL thực nhập -->\r\n            <dxi-column *ngIf=\"infoColumn('number_real_import').is_visible\" dataField=\"number_real_import\" [width]=\"90\"\r\n                        caption=\"{{infoColumn('number_real_import').column_name}}\" [editorOptions]=\"{ format: formatter.so_luong }\"\r\n                        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Đơn giá -->\r\n            <dxi-column *ngIf=\"infoColumn('price').is_visible\" dataField=\"price\"\r\n                        caption=\"{{infoColumn('price').column_name}}\" [width]=\"90\"\r\n                        [editorOptions]=\"{ format: formatter.don_gia }\"\r\n                        [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Thành tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('amount').is_visible\" dataField=\"amount\"\r\n                        caption=\"{{infoColumn('amount').column_name}}\" [width]=\"109\"\r\n                        [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\"\r\n                        dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Tổng tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('amount_after_vat').is_visible\" dataField=\"amount_after_vat\"\r\n                        caption=\"{{infoColumn('amount_after_vat').column_name}}\" [width]=\"130\"\r\n                        [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\"\r\n                        dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Ghi chú -->\r\n            <dxi-column *ngIf=\"infoColumn('note').is_visible\" dataField=\"note\" [width]=\"100\"\r\n                        caption=\"{{infoColumn('note').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <dxi-column cellTemplate=\"DinhKemFile\" caption=\"{{ _translate.CONTROLL.LABEL.attach_file }}\" [width]=\"250\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Template -->\r\n            <!-- <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i\r\n                class=\"fa fa-times\"></i></a>\r\n            </div> -->\r\n            <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n              <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\" *ngIf=\"data.data.number_of_vouchers != ''\">\r\n                <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\"\r\n                       accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\"\r\n                       style=\"display: none;\"/>\r\n                 {{ _translate.CONTROLL.LABEL.select_file }}\r\n                <p>{{data.data.file_attach_name}}</p>\r\n              </a>\r\n            </div>\r\n            <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n            <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"note-footer\">\r\n            <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">{{ _translate.GRID.GENERAL.note }}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.can_edit_delete_on_grid }}</p>\r\n            <p><span class=\"mau-vang\"> </span>{{ _translate.CONTROLL.LABEL.yellow_number_of_voucher }}</p>\r\n            <p><span class=\"mau-do\"> </span>{{ _translate.CONTROLL.LABEL.red_incorrect_format }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n            <p style=\"padding: 8px;\"></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_valid_documents }} <span style=\"color: seagreen; font-weight: 600\">{{totalInvoiceInvalid}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_wrong_format }} <span\r\n              style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_duplicate }} <span style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice }}\"\r\n                   (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ _translate.CONTROLL.BUTTON.view_invoice }}\" (click)=\"xemHoaDon()\"\r\n                   type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\In.png\" text=\"{{ _translate.CONTROLL.BUTTON.print_conversion }}\"\r\n                   (click)=\"inChuyenDoi()\" type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"configs.system_parameter.digitally_sign_the_delivery\" (click)=\"inlenhdieudong()\" [(icon)]=\"this._translate.ICONS.print\" text=\"{{_translate.CONTROLL.BUTTON.print_maneuver_command }}\" type=\"default\"></dx-button> -->\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button  text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" (click)=\"dong()\">\r\n        </dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\"\r\n          type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\"\r\n                   icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"configs.system_parameter.digitally_sign_the_delivery\" (click)=\"kylenhdieudong()\" [(icon)]=\"this._translate.ICONS.pencil\" text=\"{{_translate.CONTROLL.BUTTON.sign_maneuver_command }}\" type=\"default\"></dx-button> -->\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n          [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n          [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"popup\" [width]=\"500\" [height]=\"160\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\" [dragEnabled]=\"false\"\r\n          [closeOnOutsideClick]=\"true\" [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>{{ _translate.CONTROLL.LABEL.please_choose_load_data }} </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"{{ _translate.CONTROLL.BUTTON.add_more}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right;margin-top:7px}.import-invoices .select-file .field .value{width:35% !important;margin-top:10px}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}::ng-deep .notify-modal{max-width:22%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ImportInvoicesFromExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInvoicesFromExcelComponent", function() { return ImportInvoicesFromExcelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../view-invoice/view-invoice.component */ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ImportInvoicesFromExcelComponent = /** @class */ (function () {
    function ImportInvoicesFromExcelComponent(bsModalImportRef, modalService, vatService, socketService, authService, bsModalViewModel, modalImportService, _location) {
        var _this = this;
        this.bsModalImportRef = bsModalImportRef;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.bsModalViewModel = bsModalViewModel;
        this.modalImportService = modalImportService;
        this._location = _location;
        this.dataSource = [];
        this.invoiceOptions = [];
        this.columns = [];
        this.fileName = "";
        this.isDisReadFile = true;
        this.select = {};
        this.isAccessExportInv = false;
        this.formatter = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
        this.fieldDisable = ["number_of_vouchers", "from_warehouse_date", "delivery_order_number", "delivery_order_date", "currency_code", "currency_rate", "delivery_order_by", "buyer_tax_code", "delivery_order_content", "invoice_date", "buyer_email", "delivery_by", "transportation_contract", "transportation_method", "from_warehouse", "shiping_point", "to_warehouse", "place_of_delivery", "carrier_email", "carrier_mobile"];
        this.invoice_date = "";
        this.invoice_number = "";
        this.isAllowEditInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuat = "XuatVaKy";
        this.listColumn = [];
        this.htXuatOptions = [];
        this.tempKiFile = 0;
        this.ttDaXuatHoaDon = false; //Trạng thái đã xuất hóa đơn hay chưa
        this.totalInvoice = 0;
        this.totalErrorInvoice = 0;
        this.totalDuplicateInvoice = 0;
        this.countInvoice = 1;
        this.valueProgress = 0;
        this.showPopupImport = false;
        this.stopImport = false;
        this.errorImport = false;
        this.taxCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].tax_code;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].email;
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].phone;
        this.datetimePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].datetime;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].productCodePattern;
        this.isVisibleBtnSubmit = true;
        this.approveRequired = false;
        this.dataFormGird = [];
        this.disabledInvoiceReleases = false;
        this.invoicesId = [];
        this.confirmCheckPreview = false;
        this.popupCachNapDuLieu = false;
        this.cachNapDuLieu = true;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ': ' + percent + '%';
        };
        /* Đơn vị tính */
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(args.text);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === newItem.code; })[0];
                if (oDuplicate)
                    newItem.code = newItem.code + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                newItem.name = args.text;
                this.select.unit_codes.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption("unit_code", "lookup", {
                        dataSource: _this.select.unit_codes,
                        displayExpr: "name",
                        valueExpr: "code"
                    });
                });
                return newItem;
            }.bind(this)
        };
        /* Nhập tại kho */
        this.lookupColumnOptionsToWarehouse = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                var newItem = {};
                newItem.id = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].makeid(); //VStringService._convertToViKdau(args.text);
                newItem.name = args.text;
                this.select.wavehourses.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption("to_warehouse", "lookup", {
                        dataSource: _this.select.wavehourses,
                        displayExpr: "name",
                        valueExpr: "id"
                    });
                });
                return newItem;
            }.bind(this)
        };
        /* Xuất tại kho */
        this.lookupColumnOptionsFromWarehouse = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                var newItem = {};
                newItem.id = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].makeid(); //VStringService._convertToViKdau(args.text);
                newItem.name = args.text;
                this.select.wavehourses.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption("from_warehouse", "lookup", {
                        dataSource: _this.select.wavehourses,
                        displayExpr: "name",
                        valueExpr: "id"
                    });
                });
                return newItem;
            }.bind(this)
        };
        this._translate = this.authService.getTranslate();
    }
    ImportInvoicesFromExcelComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get  cấu hình
        this.connectWebsocket();
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_12__["VSelectBoxService"]._htXuatOptions(this._translate);
        //this.htXuatOptions.splice(1, 1);
        this.configs = this.authService.getConfigs();
        this.loadRow(10);
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        if (this.configs.config_column_import_transport_excel && this.configs.config_column_import_transport_excel.length > 0) {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnForPXK(this._translate);
            this.listColumn.forEach(function (item) {
                var _obj = _this.configs.config_column_import_transport_excel.filter(function (p) { return p.column_code == item.column_code; })[0];
                if (_obj) {
                    item.is_visible = _obj.is_visible;
                }
            });
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnForPXK(this._translate);
        }
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN") {
                this.isTT78 = true;
                if (this.templatesTT78 && this.templatesTT78.length > 0)
                    this.templatesTT78 = this.templatesTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
            }
        }
        if (!this.isTT78) {
            if (this.invoice_releases && this.invoice_releases.length > 0) {
                if (!this.hoaDonImportChoXuat)
                    this.invoice_release_id = this.invoice_releases[0].value;
                this.template_id = this.invoice_releases[0].template_id;
                this.is_multi_vat = this.invoice_releases[0].is_multi_vat;
            }
        }
        else {
            if (this.templatesTT78 && this.templatesTT78.length > 0) {
                this.invoice_series = this.templatesTT78[0].invoice_series;
                this.template_code = this.templatesTT78[0].template_code;
                this.template_id = this.templatesTT78[0].value;
                this.is_multi_vat = this.templatesTT78[0].is_multi_vat;
            }
        }
        if (this.hoaDonImportChoXuat) {
            this.invoice_date = this.hoaDonImportChoXuat[0].invoice_date ? moment__WEBPACK_IMPORTED_MODULE_11__(this.hoaDonImportChoXuat[0].invoice_date).format('YYYY-MM-DD HH:mm:ss') : "";
            if (!this.isTT78)
                this.invoice_release_id = this.hoaDonImportChoXuat[0].invoice_release_id;
            else
                this.template_id = this.hoaDonImportChoXuat[0].template_id;
            this.htXuat = this.hoaDonImportChoXuat[0].status;
            if (this.htXuat == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam)
                this.htXuat = 'XuatVaKy';
            if (!this.isTT78) {
                if (this.invoice_releases && this.invoice_releases.length > 0) {
                    var template = this.invoice_releases.filter(function (p) { return p.value == _this.invoice_release_id; });
                    if (template.length > 0) {
                        this.is_multi_vat = template[0].is_multi_vat;
                    }
                    if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                        this.disabledInvoiceReleases = true;
                    }
                    this.layDuLieuTuHoaDonChoXuat();
                }
            }
            else {
                if (this.templatesTT78 && this.templatesTT78.length > 0) {
                    var template = this.templatesTT78.filter(function (p) { return p.value == _this.template_id; });
                    if (template.length > 0) {
                        this.is_multi_vat = template[0].is_multi_vat;
                    }
                    if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                        this.disabledInvoiceReleases = true;
                    }
                    this.layDuLieuTuHoaDonChoXuat();
                }
            }
        }
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p == "phe_duyet"; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else
            this.isAccessExportInv = false;
        if (this.templatesTT78 && this.templatesTT78[0] && this.templatesTT78[0].fields && this.templatesTT78[0].fields.length > 0) {
            var _dulieumorong = this.templatesTT78[0].fields.filter(function (x) { return x.type === '4'; });
            if (_dulieumorong.length > 0) {
                _dulieumorong.forEach(function (item) {
                    var itemPlus = {
                        column_code: item.code,
                        column_name: item.name,
                        is_visible: true
                    };
                    _this.listColumn.push(itemPlus);
                });
            }
        }
        this.dataSource.forEach(function (item, index) {
            if (item.product_name && item.unit_name) {
                var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                if (!obj1) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.unit_code) == "")
                        item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(item.unit_name);
                    var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                    if (oDuplicate)
                        item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                    _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                }
                else {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.unit_code) != "") {
                        var oExistUnitCode = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                        if (!oExistUnitCode)
                            _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                    }
                }
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.push(item);
            });
        }
    };
    ImportInvoicesFromExcelComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.xuLiApiKhiXuat();
                    }
                    else {
                        _this.invoice.invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.invoice.invoice_files.length) {
                            _this.xuLiApiKhiXuat();
                        }
                    }
                }
            }
            else {
                _this.errorImport = true;
                _this.showPopupImport = false;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(data.Description, 'error');
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.layDuLieuTuHoaDonChoXuat = function () {
        var _this = this;
        var data = [];
        this.hoaDonImportChoXuat.forEach(function (invoice) {
            // console.log(element)
            for (var i = 0; i < invoice.invoice_products.length; i++) {
                var rowInvoice = new Object;
                invoice.invoice_products = invoice.invoice_products.sort(function (itemA, itemB) {
                    return itemA.order - itemB.order;
                });
                var product = invoice.invoice_products[i];
                _this.invoice_release_id = invoice.invoice_release_id;
                _this.template_code = invoice.template_code;
                _this.invoice_series = invoice.invoice_series;
                _this.template_id = invoice.template_id;
                if (i == 0) {
                    _this.invoicesId.push(invoice.id);
                    rowInvoice["statusData"] = "INVALID";
                    rowInvoice["id"] = invoice.id;
                    rowInvoice["number_of_vouchers"] = invoice.number_of_vouchers;
                    rowInvoice["place_of_delivery"] = invoice.place_of_delivery;
                    rowInvoice["shiping_point"] = invoice.shiping_point;
                    rowInvoice["from_warehouse_date"] = invoice.from_warehouse_date;
                    rowInvoice["delivery_order_number"] = invoice.delivery_order_number;
                    rowInvoice["delivery_order_date"] = invoice.delivery_order_date;
                    rowInvoice["currency_code"] = invoice.currency_code;
                    rowInvoice["delivery_order_by"] = invoice.delivery_order_by;
                    rowInvoice["buyer_tax_code"] = invoice.buyer_tax_code;
                    rowInvoice["delivery_order_content"] = invoice.delivery_order_content;
                    rowInvoice["transportation_contract"] = invoice.transportation_contract;
                    rowInvoice["transportation_method"] = invoice.transportation_method;
                    rowInvoice["to_warehouse_name"] = invoice.to_warehouse_name;
                    rowInvoice["to_warehouse"] = invoice.to_warehouse;
                    _this.addWareToWareHouse(invoice.to_warehouse, invoice.to_warehouse_name);
                    rowInvoice["from_warehouse_name"] = invoice.from_warehouse_name;
                    rowInvoice["from_warehouse"] = invoice.from_warehouse;
                    _this.addWareToWareHouse(invoice.from_warehouse, invoice.from_warehouse_name);
                    rowInvoice["delivery_by"] = invoice.delivery_by;
                    rowInvoice["carrier_mobile"] = invoice.carrier_mobile;
                    rowInvoice["carrier_email"] = invoice.carrier_email;
                    rowInvoice["currency_rate"] = invoice.currency_rate;
                    rowInvoice["buyer_email"] = invoice.buyer_email;
                    rowInvoice["note"] = invoice.note;
                    rowInvoice["invoice_number"] = invoice.invoice_number;
                    rowInvoice["invoice_date"] = invoice.invoice_date;
                    rowInvoice["total_payment"] = invoice.total_payment;
                    rowInvoice["dataType"] = "KHACH_HANG";
                }
                else {
                    rowInvoice["number_of_vouchers"] = "";
                    rowInvoice["is_promotion"] = false; /* Diễn giải */
                    rowInvoice["total_payment"] = null;
                    rowInvoice["invoice_amount"] = null;
                    rowInvoice["place_of_delivery"] = "";
                    rowInvoice["shiping_point"] = "";
                    rowInvoice["from_warehouse_date"] = "";
                    rowInvoice["delivery_order_number"] = "";
                    rowInvoice["delivery_order_date"] = "";
                    rowInvoice["currency_code"] = "";
                    rowInvoice["delivery_order_by"] = "";
                    rowInvoice["buyer_tax_code"] = "";
                    rowInvoice["delivery_order_content"] = "";
                    rowInvoice["transportation_contract"] = "";
                    rowInvoice["transportation_method"] = "";
                    rowInvoice["to_warehouse_name"] = "";
                    rowInvoice["to_warehouse"] = "";
                    rowInvoice["from_warehouse_name"] = "";
                    rowInvoice["from_warehouse"] = "";
                    rowInvoice["delivery_by"] = "";
                    rowInvoice["carrier_email"] = "";
                    rowInvoice["carrier_mobile"] = "";
                    rowInvoice["currency_rate"] = null;
                    rowInvoice["buyer_email"] = "";
                    rowInvoice["note"] = "";
                    rowInvoice["dataType"] = "HANG_HOA";
                    rowInvoice["productNumberOfVouchers"] = invoice.number_of_vouchers;
                }
                rowInvoice["is_promotion"] = product.is_promotion; /* Diễn giải */
                rowInvoice["product_code"] = product.product_code;
                rowInvoice["product_name"] = product.product_name;
                rowInvoice["contract_order"] = product.contract_order;
                rowInvoice["unit_code"] = product.unit_code;
                rowInvoice["unit_name"] = product.unit_name;
                rowInvoice["quantity"] = product.quantity;
                rowInvoice["number_real_export"] = product.number_real_export;
                rowInvoice["number_real_import"] = product.number_real_import;
                rowInvoice["price"] = product.price;
                rowInvoice["amount"] = product.amount;
                rowInvoice["amount_after_vat"] = product.amount_after_vat;
                rowInvoice["order"] = product.order;
                rowInvoice["view_order"] = product.view_order;
                data.push(rowInvoice);
            }
        });
        this.dataSource = data;
        this.checkStatusData();
    };
    ImportInvoicesFromExcelComponent.prototype.cktmChange = function () {
    };
    ImportInvoicesFromExcelComponent.prototype.loadRow = function (countRow) {
        var _this = this;
        var tempRow = this.frmData.tempImportRow(countRow, false);
        tempRow.forEach(function (element) {
            _this.dataSource.push(element);
        });
    };
    ImportInvoicesFromExcelComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById("file-bang-ke").click();
        this.cachNapDuLieu = false;
    };
    ImportInvoicesFromExcelComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
    };
    ImportInvoicesFromExcelComponent.prototype.log = function (val) { console.log(val); };
    ImportInvoicesFromExcelComponent.prototype.onDinhKemFile = function (e) {
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
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "BK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.dataSource[rowIndex]["file_attach"] = fileAttachData;
                _this.dataSource[rowIndex]["file_attach_name"] = file.name;
            };
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File " + this._translate.VALIDATION.not_pattern + " xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    ImportInvoicesFromExcelComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = formatter.format(parseFloat(e.value));
        return totalMoney;
    };
    ImportInvoicesFromExcelComponent.prototype.onFileChanged = function (evt) {
        this.target = (evt.target);
        this.fileName = this.target.files[0].name;
        // this.fileSize = target.files[0].size/1024;
        if (this.target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.can_not_select_multiple_file, 'error');
            throw new Error(this._translate.NOTIFY.can_not_select_multiple_file);
        }
        ;
        this.isDisReadFile = false;
    };
    ImportInvoicesFromExcelComponent.prototype.addRow = function () {
        var len, order;
        if (this.dataSource.length >= 1) {
            len = this.dataSource.length;
            order = this.dataSource[len - 1].order + 1;
        }
        else {
            order = 1;
        }
        var data = this.frmData.addImportRow(order, order);
        // console.log(data)
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesFromExcelComponent.prototype.getFileTemp = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var arrColumn = this.listColumn.filter(function (p) { return p.is_visible == true; });
        var columnsName = arrColumn.map(function (e) { return e.column_code; });
        var data = {
            invoice: {
                invoice_type: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].exportType.phieuxuatkho,
                columns: columnsName
            }
        };
        this.vatService.getFileTemmpImportInvoices(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.BUTTON.export_file + " Excel " + _this._translate.CONTROLL.LABEL.success.toLowerCase(), 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesFromExcelComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.import_data);
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            if (this.subLuuChoXuat) {
                this.subLuuChoXuat.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ImportInvoicesFromExcelComponent.prototype.getDataFromGird = function () {
        var _this = this;
        if (this.dataSource.length > 0) {
            this.dataSource.forEach(function (row) {
                if (row.number_of_vouchers || row.productNumberOfVouchers) {
                    _this.dataFormGird.push(row);
                }
            });
        }
    };
    ImportInvoicesFromExcelComponent.prototype.chonDocFile = function () {
        this.popupCachNapDuLieu = true;
    };
    ImportInvoicesFromExcelComponent.prototype.thayThe = function (e) {
        this.cachNapDuLieu = false;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesFromExcelComponent.prototype.themTiep = function (e) {
        this.cachNapDuLieu = true;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesFromExcelComponent.prototype.readFile = function () {
        var _this = this;
        this.isDisReadFile = true;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(ws, { header: "A", range: 0 }));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("number_of_vouchers");
                if (_index == -1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.file_tempt_not_format, "error");
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
        };
        reader.readAsBinaryString(this.target.files[0]);
    };
    ImportInvoicesFromExcelComponent.prototype.fillData = function (fileData) {
        var _this = this;
        this.getDataFromGird();
        var data = [];
        // let count = 2;
        // let view_order = 0;
        var numberOfVouchers = [];
        var isValid = true;
        var _index = 0;
        fileData.forEach(function (element) {
            var invoice = new Object;
            if (element.number_of_vouchers) {
                invoice["statusData"] = "INVALID";
                var invoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.invoice_date);
                if (invoiceDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.invoice_date + " " + _this._translate.VALIDATION.not_pattern, "error");
                    isValid = false;
                    return;
                }
                else if (invoiceDate != "")
                    invoice["invoice_date"] = invoiceDate;
                var fromwarehouseDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.from_warehouse_date);
                if (fromwarehouseDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.from_warehouse_date + " " + _this._translate.VALIDATION.not_pattern, "error");
                    isValid = false;
                    return;
                }
                else if (fromwarehouseDate != "")
                    invoice["from_warehouse_date"] = fromwarehouseDate;
                var deliveryorderDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.delivery_order_date);
                if (deliveryorderDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.date + " " + _this._translate.VALIDATION.not_pattern, "error");
                    isValid = false;
                    return;
                }
                else if (deliveryorderDate != "")
                    invoice["delivery_order_date"] = deliveryorderDate;
                invoice["place_of_delivery"] = element.place_of_delivery ? element.place_of_delivery : "";
                invoice["shiping_point"] = element.shiping_point ? element.shiping_point : "";
                invoice["delivery_order_number"] = element.delivery_order_number ? element.delivery_order_number : "";
                invoice["currency_code"] = element.currency_code ? element.currency_code : "VND";
                invoice["delivery_order_by"] = element.delivery_order_by ? element.delivery_order_by : "";
                invoice["buyer_tax_code"] = element.buyer_tax_code ? element.buyer_tax_code : "";
                invoice["delivery_order_content"] = element.delivery_order_content ? element.delivery_order_content : "";
                invoice["transportation_contract"] = element.transportation_contract ? element.transportation_contract : "";
                invoice["transportation_method"] = element.transportation_method ? element.transportation_method : "";
                invoice["to_warehouse_name"] = element.to_warehouse_name ? element.to_warehouse_name : "";
                invoice["to_warehouse"] = element.to_warehouse_name ? _this.getWarehouseByName(element.to_warehouse_name) : "";
                invoice["from_warehouse_name"] = element.from_warehouse_name ? element.from_warehouse_name : "";
                invoice["from_warehouse"] = element.from_warehouse_name ? _this.getWarehouseByName(element.from_warehouse_name) : "";
                invoice["delivery_by"] = element.delivery_by ? element.delivery_by : "";
                invoice["carrier_mobile"] = element.carrier_mobile ? element.carrier_mobile : "";
                invoice["carrier_email"] = element.carrier_email ? element.carrier_email : "";
                invoice["currency_rate"] = element.currency_rate ? element.currency_rate : null;
                invoice["buyer_email"] = element.buyer_email ? element.buyer_email : "";
                invoice["note"] = element.note ? element.note : "";
                invoice["product_code"] = element.product_code ? element.product_code : "";
                invoice["product_name"] = element.product_name ? element.product_name : "";
                invoice["contract_order"] = element.contract_order ? element.contract_order : "";
                if (invoice["product_code"] != "") {
                    var _obj = _this.select.products.filter(function (p) { return p.code == invoice["product_code"]; })[0];
                    if (!_obj) {
                        var _objPush = {
                            code: invoice["product_code"],
                            name: invoice["product_name"],
                            mhvth: invoice["product_code"] + ": " + invoice["product_name"],
                        };
                        _this.select.products.push(_objPush);
                    }
                }
                invoice["is_promotion"] = element.is_promotion && (element.is_promotion == "X" || element.is_promotion == "x") ? true : false; /* Diễn giải */
                invoice["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.quantity) : null;
                invoice["number_real_export"] = element.number_real_export ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.number_real_export) : null;
                invoice["number_real_import"] = element.number_real_import ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.number_real_import) : null;
                invoice["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price) : null;
                invoice["amount"] = element.amount && element.amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount) : null;
                invoice["amount_after_vat"] = element.amount_after_vat && element.amount_after_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_after_vat) : null;
                invoice["note"] = element.note ? element.note : "";
                if (_index == 0) {
                    if (element.number_real_export) {
                        var arr = element.number_real_export.split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.price) {
                        var arr = element.price.split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount) {
                        var arr = element.amount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_after_vat) {
                        var arr = element.amount_after_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                }
                _index++;
                if (_this.checkNumberOfVouchers(element.number_of_vouchers, data) != -1) {
                    var stt = Math.max.apply(Math, data.filter(function (p) { return p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers; }).map(function (o) { return o.order; }));
                    ++stt;
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["invoice_date"] = "";
                    ///// HĐ xe
                    invoice["place_of_delivery"] = "";
                    invoice["shiping_point"] = "";
                    invoice["from_warehouse_date"] = "";
                    invoice["delivery_order_number"] = "";
                    invoice["delivery_order_date"] = "";
                    invoice["currency_code"] = "";
                    invoice["delivery_order_by"] = "";
                    invoice["buyer_tax_code"] = "";
                    invoice["delivery_order_content"] = "";
                    invoice["transportation_contract"] = "";
                    invoice["transportation_method"] = "";
                    invoice["to_warehouse_name"] = "";
                    invoice["from_warehouse_name"] = "";
                    invoice["to_warehouse"] = "";
                    invoice["from_warehouse"] = "";
                    invoice["delivery_by"] = "";
                    invoice["carrier_email"] = "";
                    invoice["carrier_mobile"] = "";
                    /////
                    invoice["buyer_email"] = "";
                    invoice["note"] = "";
                    invoice["productNumberOfVouchers"] = element.number_of_vouchers;
                    invoice["order"] = stt;
                    /* Hóa đơn Pepsi */
                    invoice["currency_rate"] = null;
                    invoice["total_payment"] = null;
                    invoice["invoice_amount"] = null;
                    if (invoice["is_promotion"]) {
                        invoice["view_order"] = "";
                    }
                    else
                        invoice["view_order"] = stt;
                }
                else {
                    invoice["number_of_vouchers_backup"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    invoice["number_of_vouchers"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    invoice["view_order"] = 1;
                    invoice["dataType"] = "KHACH_HANG";
                    // count = 2;
                    // view_order = 1;
                }
                data.push(invoice);
            }
        });
        if (isValid) {
            var datagroup = data.filter(function (p) { return p.number_of_vouchers; });
            var dataTempt_1 = [];
            if (datagroup && datagroup.length > 0) {
                datagroup.forEach(function (e) {
                    var listItem = data.filter(function (w) { return w.productNumberOfVouchers == e.number_of_vouchers; });
                    dataTempt_1.push(e);
                    if (listItem && listItem.length > 0) {
                        listItem.forEach(function (inv) {
                            dataTempt_1.push(inv);
                        });
                    }
                });
            }
            this.invoicesHaveNumberOfVouchers = [];
            if (this.configs.system_parameter.the_same_number_of_voucher) {
                this.vatService.getInvoicesHaveNumberOfVouchers(numberOfVouchers).subscribe(function (res) {
                    if (res.status == "success") {
                        _this.invoicesHaveNumberOfVouchers = res.data.invoices;
                        _this.checkDuplicateNumberOfVouchers(dataTempt_1);
                        _this.checkStatusData();
                        // if(data.length < 10){
                        //   this.loadRow(10-data.length);
                        // }
                        _this.dataGrid.instance.refresh();
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                });
            }
            else {
                this.checkDuplicateNumberOfVouchers(dataTempt_1);
                this.checkStatusData();
                this.dataGrid.instance.refresh();
            }
        }
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    ImportInvoicesFromExcelComponent.prototype.checkDuplicateNumberOfVouchers = function (data) {
        if (this.cachNapDuLieu) {
            var _loop_1 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_1.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                var foundOnGird = this_1.dataFormGird.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
                if (foundOnGird.length > 0 && data[i].number_of_vouchers && data[i].statusData != "ERROR_DUPLICATE_DATABASE") {
                    data[i].statusData = "ERROR_DUPLICATE_ONGIRD";
                }
            };
            var this_1 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
            this.dataSource = this.dataFormGird.concat(data);
        }
        else {
            var _loop_2 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_2.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
            };
            var this_2 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_2(i);
            }
            this.dataSource = data;
        }
        this.dataFormGird = [];
    };
    ImportInvoicesFromExcelComponent.prototype.checkNumberOfVouchers = function (numberOfVouchers, invoiceSArr) {
        var foundNumberOfVouchers = invoiceSArr.findIndex(function (item) {
            return item.number_of_vouchers == numberOfVouchers;
        });
        return foundNumberOfVouchers;
    };
    ImportInvoicesFromExcelComponent.prototype.checkStatusData = function () {
        var datas = this.dataSource;
        var invalid = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "INVALID";
        });
        var errorDuplicateDatabase = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_DATABASE";
        });
        var errorDuplicateOngird = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_ONGIRD";
        });
        var errorData = this.dataSource.filter(function (item) {
            return item.statusData == "DATA_ERROR";
        });
        this.totalInvoiceInvalid = invalid.length;
        this.totalDuplicateInvoice = errorDuplicateDatabase.length;
        this.totalErrorInvoice = errorDuplicateOngird.length + errorData.length;
    };
    ImportInvoicesFromExcelComponent.prototype.formatDecimalColumn = function (number) {
        if (number == 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row) {
            if (e.row.rowType === "data") {
                e.items = [{
                        text: this._translate.CONTROLL.BUTTON.add + " " + this._translate.GRID.INVOICE.customer.toLowerCase(),
                        onItemClick: function () {
                            _this.addRow();
                        }
                    },
                    {
                        text: this._translate.CONTROLL.BUTTON.add_goods,
                        onItemClick: function () {
                            if (e.row.data.number_of_vouchers || e.row.data.productNumberOfVouchers) {
                                var temp_1 = e.row.data.number_of_vouchers ? e.row.data.number_of_vouchers : e.row.data.productNumberOfVouchers;
                                var products = _this.dataSource.filter(function (item) {
                                    return item.number_of_vouchers == temp_1 || item.productNumberOfVouchers == temp_1;
                                });
                                var data = _this.frmData.addImportRow(products.length + 1, products.length + 1);
                                data.dataType = "HANG_HOA";
                                if (e.row.data.number_of_vouchers) {
                                    data["productNumberOfVouchers"] = e.row.data.number_of_vouchers;
                                    _this.dataSource.splice(e.rowIndex + products.length, 0, data);
                                }
                                else {
                                    data["productNumberOfVouchers"] = e.row.data.productNumberOfVouchers;
                                    var index = _this.dataSource.map(function (e) { return e.number_of_vouchers; }).indexOf(e.row.data.number_of_vouchers);
                                    _this.dataSource.splice(index + products.length - 1, 0, data);
                                }
                                _this.dataGrid.instance.refresh();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.GRID.INVOICE_DETAILS.number_of_vouchers + " " + _this._translate.VALIDATION.required, "error");
                            }
                        }
                    }];
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onInvoiceReleases = function (e) {
        var selectedItem = e.component.option("selectedItem");
        this.template_id = selectedItem.template_id;
        this.invoice_release_id = e.value;
        this.is_multi_vat = selectedItem.is_multi_vat;
    };
    ImportInvoicesFromExcelComponent.prototype.onInvoiceTemplate = function (e) {
        var _this = this;
        var selectedItem = e.component.option("selectedItem");
        this.template_id = e.value;
        this.template_code = selectedItem.template_code;
        this.invoice_series = selectedItem.invoice_series;
        this.is_multi_vat = selectedItem.is_multi_vat;
        //Load lại danh sách cấu hình các trường
        if (this.configs.config_column_import_inv_excel && this.configs.config_column_import_inv_excel.length > 0) {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnForPXK(this._translate);
            this.listColumn.forEach(function (item) {
                var _obj = _this.configs.config_column_import_inv_excel.filter(function (p) { return p.column_code == item.column_code; })[0];
                if (_obj) {
                    item.is_visible = _obj.is_visible;
                }
            });
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnForPXK(this._translate);
        }
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.forEach(function (column, index) {
                    if (column["dataField"] == item.dataField)
                        _this.dataGrid.columns.splice(index, 1);
                });
            });
        }
        this.columns = [];
        this.invoiceOptions = [];
        if (selectedItem.fields && selectedItem.fields.length > 0) {
            var _dulieumorong = selectedItem.fields.filter(function (x) { return x.type === '4'; });
            if (_dulieumorong.length > 0) {
                _dulieumorong.forEach(function (item) {
                    if (item.is_show) {
                        var oField = {
                            column_code: item.code,
                            column_name: item.name,
                            is_visible: true
                        };
                        _this.listColumn.push(oField);
                        var column = {
                            caption: item.name,
                            dataField: item.code,
                            width: 150
                        };
                        _this.columns.push(column);
                        var invoiceOption = {
                            code: item.code,
                            name: item.name,
                            value: '',
                            data_type: item.data_type
                        };
                        _this.invoiceOptions.push(invoiceOption);
                    }
                });
                if (this.columns.length > 0) {
                    this.columns.forEach(function (item) {
                        _this.dataGrid.columns.push(item);
                    });
                }
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ImportInvoicesFromExcelComponent.prototype.onEditorPreparing = function (e) {
        var _this = this;
        if (e.parentType === 'dataRow') {
            if (e.row.data) {
                if (e.row.data.dataType && e.row.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.dataField)) {
                    e.editorOptions.disabled = true;
                }
            }
            e.editorOptions.onValueChanged = function (args) {
                switch (e.dataField) {
                    case "number_of_vouchers":
                        _this.onNumberOfVouchers(e, args.value);
                        break;
                    case "unit_code":
                        _this.unitChange(e, args.value);
                        _this.dataGrid.instance.refresh();
                        break;
                    case "from_warehouse":
                        _this.fromWareHouseChange(e, args.value);
                        _this.dataGrid.instance.refresh();
                        break;
                    case "to_warehouse":
                        _this.toWareHouseChange(e, args.value);
                        _this.dataGrid.instance.refresh();
                        break;
                    // case "product_code":
                    //   this.productCodeChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "quantity":
                    // case "price":
                    // case "amount_after_vat":
                    //   this.priceChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "unit_code":
                    //   this.unitChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "amount":
                    //   this.amountChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    default:
                        break;
                }
                _this.checkStatusData();
                e.setValue(args.value);
            };
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.data.dataType && e.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.column.dataField)) {
                e.cellElement.style.background = "#F1F1F1";
            }
            if (e.data.statusData == "ERROR_DUPLICATE_ONGIRD" && e.column.dataField == "number_of_vouchers") {
                e.cellElement.style.background = "#FF0000";
            }
            if (e.data.number_of_vouchers) {
                switch (e.column.dataField) {
                    case "to_warehouse":
                        this.setStatusDataOnCellPrepared(e, this._translate.CONTROLL.LABEL.to_warehouse + " " + this._translate.VALIDATION.required);
                        break;
                    case "from_warehouse":
                        this.setStatusDataOnCellPrepared(e, this._translate.CONTROLL.LABEL.from_warehouse + " " + this._translate.VALIDATION.required);
                        break;
                    case "product_name":
                        this.setStatusDataOnCellPrepared(e, this._translate.GRID.INVOICE_DETAILS.product_name + " " + this._translate.VALIDATION.required);
                        break;
                    case "number_real_export":
                        this.setStatusDataOnCellPrepared(e, this._translate.GRID.INVOICE_DETAILS.quantity_export + " " + this._translate.VALIDATION.required);
                        break;
                    case "product_code":
                        this.setStatusDataOnCellPrepared(e, this._translate.VALIDATION.required_productCode);
                        break;
                    default:
                        break;
                }
            }
            else if (e.data.number_of_vouchers == "" && e.data.dataType == "KHACH_HANG" && e.data.product_name && e.column.dataField == "number_of_vouchers") {
                this.setStatusDataOnCellPrepared(e, this._translate.GRID.INVOICE_DETAILS.number_of_vouchers + " " + this._translate.VALIDATION.required);
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
        if (((e.column.dataField != "amount" && e.column.dataField != "amount_after_vat" && e.column.dataField != "product_code") && (e.value == null || e.value == "")) || (e.column.dataField == "product_code" && _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value) != "" && !this.productCodePattern.test(e.value))) {
            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
            e.cellElement.title = message;
            if (e.data.statusData != "ERROR_DUPLICATE_DATABASE" && e.data.statusData != "ERROR_DUPLICATE_ONGIRD")
                e.data.statusData = "DATA_ERROR";
        }
        else {
            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code))
                e.data.statusData == "DATA_ERROR";
            else if (e.data.product_name == null || e.data.product_name == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.data.from_warehouse == null || e.data.from_warehouse == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.data.to_warehouse == null || e.data.to_warehouse == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.key.statusData != "ERROR_DUPLICATE_DATABASE")
                e.data.statusData = "INVALID";
            else if (e.data.number_real_export == null)
                e.data.statusData == "DATA_ERROR";
            else if (e.data.number_of_vouchers == "" && e.data.dataType == "KHACH_HANG" && e.data.product_name && e.column.dataField == "number_of_vouchers")
                e.data.statusData == "DATA_ERROR";
            else
                e.data.statusData = "INVALID";
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onRowRemoving = function (e) {
        var _this = this;
        var number_of_vouchers = e.data.number_of_vouchers;
        var indexRemove = [];
        this.dataSource.forEach(function (row) {
            if (row.productNumberOfVouchers == number_of_vouchers) {
                indexRemove.push(_this.dataSource.indexOf(row));
                // if(row.statusData){
                //   if(row.statusData == "ERROR_DUPLICATE_DATABASE") this.totalDuplicateInvoice--;
                //   if(row.statusData == "ERROR_DUPLICATE_ONGIRD") this.totalErrorInvoice--;
                // }
            }
        });
        for (var i = indexRemove.length - 1; i >= 0; i--) {
            this.dataSource.splice(indexRemove[i], 1);
        }
        this.checkStatusData();
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesFromExcelComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code == "Delete") {
            // console.log(e.event.srcElement);
            e.event.srcElement.value = null;
            // e.event.srcElement.parentNode.parentNode.querySelector('input').value = null;
        }
    };
    ImportInvoicesFromExcelComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.statusData == "ERROR_DUPLICATE_DATABASE" && e.data.number_of_vouchers) {
                e.rowElement.style.background = "#FFFF00";
            }
            else {
                e.rowElement.style.background = "";
            }
        }
        this.checkStatusData();
    };
    ImportInvoicesFromExcelComponent.prototype.onRowUpdated = function (e) {
        //  this.onNumberOfVouchers(e);
        // let column = Object.keys(e.data)[0];
        // switch (column) {
        //   case "number_of_vouchers":
        //     this.onNumberOfVouchers(e);
        //     break;
        //   case "product_code":
        //     this.productCodeChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "quantity":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "price":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "unit_code":
        //     this.unitChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount":
        //     this.amountChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount_after_vat":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   default:
        //     break;
        // }
        // this.checkStatusData();
    };
    ImportInvoicesFromExcelComponent.prototype.onNumberOfVouchers = function (e, value) {
        var _this = this;
        var numberOfVouchers = value;
        if (e.row.key.number_of_vouchers_backup) {
            for (var i = 0; i < this.dataSource.length; i++) {
                var row = this.dataSource[i];
                if (row.productNumberOfVouchers && row.productNumberOfVouchers == e.row.key.number_of_vouchers_backup) {
                    this.dataSource[i].productNumberOfVouchers = numberOfVouchers;
                }
            }
            e.row.key.number_of_vouchers_backup = numberOfVouchers;
        }
        if (numberOfVouchers != "") {
            //// Tạm đóng 14/07/2020
            if (this.configs.system_parameter.the_same_number_of_voucher) {
                this.vatService.getInvoicesHaveNumberOfVouchers([numberOfVouchers]).subscribe(function (res) {
                    var dupInvoices = res.data.invoices;
                    if (dupInvoices.length > 0) {
                        e.row.key.statusData = "ERROR_DUPLICATE_DATABASE";
                        // this.totalDuplicateInvoice++;
                        // if (this.totalInvoice > 0) this.totalInvoice--
                    }
                    else {
                        if (e.row.key.statusData = "ERROR_DUPLICATE_DATABASE") {
                            e.row.key.statusData = "INVALID";
                            // if (this.totalDuplicateInvoice > 0) this.totalDuplicateInvoice--;
                        }
                        // this.totalInvoice++;
                    }
                    var foundOnGird = _this.dataSource.filter(function (item) {
                        return item.number_of_vouchers == numberOfVouchers;
                    });
                    if (foundOnGird.length > 1 && e.row.key.statusData != "ERROR_DUPLICATE_DATABASE") {
                        e.row.key.statusData = "ERROR_DUPLICATE_ONGIRD";
                    }
                    _this.dataGrid.instance.refresh();
                    _this.checkStatusData();
                });
            }
        }
    };
    //Thay đổi cột mã hàng
    ImportInvoicesFromExcelComponent.prototype.productCodeChange = function (e, value) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code == value) {
                e.row.key.product_name = item.name;
                e.row.key.unit_code = _this.checkUnitCode(item.unit_code);
                e.row.key.quantity = null;
                e.row.key.price = item.price ? parseFloat(item.price) : item.price;
                e.row.key.amount = item.price ? parseFloat(item.price) : 0;
                e.row.key.amount_after_vat = e.row.key.amount;
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.priceChange = function (e, value) {
        var quantity = e.row.key.quantity || 1;
        var price = value || 0;
        if (price != null) {
            e.row.key.amount = price * quantity;
            e.row.key.amount_after_vat = e.row.key.amount;
        }
    };
    ImportInvoicesFromExcelComponent.prototype.unitChange = function (e, value) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code == value; })[0];
        if (_obj)
            e.row.key.unit_name = _obj.name;
        else
            e.row.key.unit_name = "";
    };
    ImportInvoicesFromExcelComponent.prototype.fromWareHouseChange = function (e, value) {
        var _obj = this.select.wavehourses.filter(function (p) { return p.id == value; })[0];
        if (_obj) {
            e.row.key.from_warehouse_name = _obj.name;
            e.row.key.shiping_point = _obj.address;
        }
        else {
            e.row.key.from_warehouse_name = "";
            e.row.key.shiping_point = "";
        }
    };
    ImportInvoicesFromExcelComponent.prototype.toWareHouseChange = function (e, value) {
        var _obj = this.select.wavehourses.filter(function (p) { return p.id == value; })[0];
        if (_obj) {
            e.row.key.to_warehouse_name = _obj.name;
            e.row.key.place_of_delivery = _obj.address;
        }
        else {
            e.row.key.to_warehouse_name = "";
            e.row.key.place_of_delivery = "";
        }
    };
    ImportInvoicesFromExcelComponent.prototype.amountChange = function (e, value) {
        if (!e.row.key.quantity && !e.row.key.price) {
            e.row.key.amount_after_vat = value;
        }
        else {
            var quantity = e.row.key.quantity || 1;
            var price = e.row.key.price || 0;
            if (price != null) {
                e.row.key.amount = e.row.key.price * quantity;
                e.row.key.amount_after_vat = e.row.key.amount;
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.checkValidNumberOfVouchers = function () {
        var _this = this;
        this.dataSource.forEach(function (row) {
            if (row.number_of_vouchers == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.GRID.INVOICE_DETAILS.number_of_vouchers + " " + _this._translate.VALIDATION.required, "error");
            }
            else {
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code == unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ImportInvoicesFromExcelComponent.prototype.checkProvisionsOnAccounts = function (name) {
        var found = this.select.select_provisions_on_accounts.find(function (element) {
            return element.name === name;
            ;
        });
        var code = "";
        if (found) {
            code = found.code;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Định khoản chưa có trong danh mục", "error");
        }
        return code;
    };
    ImportInvoicesFromExcelComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    /* Tạo mã đơn vị tính theo tên */
    ImportInvoicesFromExcelComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(unitName) != "") {
            if (!this.select.unit_codes)
                this.select.unit_codes = [];
            var _obj = this.select.unit_codes.filter(function (p) { return p.name == unitName; })[0];
            if (_obj) {
                return _obj.code;
            }
            else {
                var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(unitName);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                if (oDuplicate)
                    code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                this.select.unit_codes.push({ code: code_1, name: unitName });
                return code_1;
            }
        }
        return null;
    };
    /* Tạo mã kho theo tên */
    ImportInvoicesFromExcelComponent.prototype.getWarehouseByName = function (WarehouseName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(WarehouseName) != "") {
            if (!this.select.wavehourses)
                this.select.wavehourses = [];
            var _obj = this.select.wavehourses.filter(function (p) { return p.name == WarehouseName; })[0];
            if (_obj) {
                return _obj.id;
            }
            else {
                var id = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].makeid(); //VStringService._convertToViKdau(WarehouseName);
                this.select.wavehourses.push({ id: id, name: WarehouseName });
                return id;
            }
        }
        return null;
    };
    ImportInvoicesFromExcelComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        var status;
        if (!this.invoice.id && !this.invoice.invoice_number)
            status = 'THEM_MOI';
        if (this.invoice.id && !this.invoice.invoice_number)
            status = 'GHI_TAM';
        if (this.invoice.id && this.invoice.invoice_number)
            status = 'GIU_SO';
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status == 'THEM_MOI') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTam(this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.invoice.id = rs.data.id;
                        _this.invoicesId.push(rs.data.id);
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.invoice.invoice_date);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.ghiTamTT78(this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.invoice.id = rs.data.id;
                        _this.invoicesId.push(rs.data.id);
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_2.unsubscribe();
                });
            }
        }
        else if (status == 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status == 'GIU_SO') {
            if (!this.isTT78) {
                var sub_5 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_6.unsubscribe();
                });
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: this.invoice.id,
            xml_string: xml_string
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                // this.formInvoice.readonlyAllForm();
                _this.ttDaXuatHoaDon = true;
                _this.valueProgress += percentComplete;
                if (_this.countInvoice < _this.totalInvoice) {
                    _this.countInvoice++;
                    _this.xuatHoaDon();
                }
                else if (_this.countInvoice == _this.totalInvoice) {
                    _this.valueProgress = 100;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                    _this.isVisibleBtnSubmit = false;
                    _this.showPopupImport = false;
                    _this.bsModalImportRef.hide();
                    _this._location.back();
                }
            }
            else {
                _this.showPopupImport = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.connectWebsocket();
            if (this.invoice && this.invoice.invoice_files.length) {
                this.invoice.invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.invoice_date);
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
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
        this.tempKiFile = 0;
    };
    ImportInvoicesFromExcelComponent.prototype.xuatChoKy = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (!this.isTT78) {
            this.subLuuChoXuat = this.vatService.xuatChoKy(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatChoKy();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        _this._location.back();
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
        else {
            this.subLuuChoXuat = this.vatService.xuatChoKyTT78(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatChoKy();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        _this._location.back();
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
    };
    ImportInvoicesFromExcelComponent.prototype.luuChoXuat = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.invoice.id) {
            if (!this.isTT78) {
                this.subLuuChoXuat = this.vatService.edit(this.invoice.id, this.invoice).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.luuChoXuat();
                        }
                        else if (_this.countInvoice == _this.totalInvoice) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                            _this.showPopupImport = false;
                            _this.bsModalImportRef.hide();
                            _this._location.back();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
            else {
                this.subLuuChoXuat = this.vatService.editTT78(this.invoice.id, this.invoice).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.luuChoXuat();
                        }
                        else if (_this.countInvoice == _this.totalInvoice) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                            _this.showPopupImport = false;
                            _this.bsModalImportRef.hide();
                            _this._location.back();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        }
        else {
            if (!this.isTT78) {
                this.subLuuChoXuat = this.vatService.ghiTam(this.invoice).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.luuChoXuat();
                        }
                        else if (_this.countInvoice == _this.totalInvoice) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                            _this.showPopupImport = false;
                            _this.bsModalImportRef.hide();
                            _this._location.back();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
            else {
                this.subLuuChoXuat = this.vatService.ghiTamTT78(this.invoice).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.luuChoXuat();
                        }
                        else if (_this.countInvoice == _this.totalInvoice) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                            _this.showPopupImport = false;
                            _this.bsModalImportRef.hide();
                            _this._location.back();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.xuatFile = function () {
        var _this = this;
        var invoices = [];
        this.dataSource.forEach(function (element) {
            if (element.number_of_vouchers) {
                var invoice = {};
                invoice["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                ///// HĐ xe
                invoice["place_of_delivery"] = element.place_of_delivery;
                invoice["shiping_point"] = element.shiping_point;
                invoice["from_warehouse_date"] = element.from_warehouse_date;
                invoice["delivery_order_number"] = element.delivery_order_number;
                invoice["delivery_order_date"] = element.delivery_order_date;
                invoice["currency_code"] = element.currency_code;
                invoice["delivery_order_by"] = element.delivery_order_by;
                invoice["buyer_tax_code"] = element.buyer_tax_code;
                invoice["delivery_order_content"] = element.delivery_order_content;
                invoice["transportation_contract"] = element.transportation_contract;
                invoice["transportation_method"] = element.transportation_method;
                invoice["to_warehouse_name"] = element.to_warehouse_name;
                invoice["from_warehouse_name"] = element.from_warehouse_name;
                invoice["delivery_by"] = element.delivery_by;
                invoice["carrier_mobile"] = element.carrier_mobile;
                invoice["carrier_email"] = element.carrier_email;
                /////
                invoice["buyer_email"] = element.buyer_email; //Email
                invoice["note"] = element.note; //ghi chú
                /* Hóa đơn Pepsi */
                invoice["currency_rate"] = element.currency_rate;
                invoice["invoice_amount"] = element.invoice_amount;
                invoice["total_payment"] = element.total_payment;
                var product = {
                    product_name: element.product_name,
                    provisions_on_accounts_name: element.provisions_on_accounts_name,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    number_real_export: element.number_real_export,
                    number_real_import: element.number_real_import,
                    price: element.price,
                    amount: element.amount,
                    amount_after_vat: element.amount_after_vat,
                    view_order: element.view_order,
                    contract_order: element.contract_order,
                };
                invoice["invoice_products"] = [];
                invoice["invoice_products"].push(product);
                invoices.push(invoice);
            }
            if (element.productNumberOfVouchers) {
                // console.log(element)
                var invoiceProduct = {
                    product_name: element.product_name,
                    provisions_on_accounts_name: element.provisions_on_accounts_name,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    number_real_export: element.number_real_export,
                    number_real_import: element.number_real_import,
                    price: element.price,
                    amount: element.amount,
                    amount_after_vat: element.amount_after_vat,
                    view_order: element.view_order,
                    contract_order: element.contract_order,
                };
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                        invoices[i].invoice_products.push(invoiceProduct);
                    }
                }
            }
        });
        var data = {
            "invoices": invoices
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.vatService.exportToExcel(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.export_data + " Excel " + _this._translate.CONTROLL.LABEL.success.toLowerCase(), "success");
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesFromExcelComponent.prototype.convertGirdToInvoices = function (type) {
        var _this = this;
        var invoices = [];
        var invalid = true;
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_quantity = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        this.dataSource.forEach(function (element, index) {
            if (element.number_of_vouchers == "" && element.dataType == "KHACH_HANG" && element.product_name && type == "submit") {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.GRID.INVOICE_DETAILS.number_of_vouchers + " " + _this._translate.VALIDATION.required, "error");
                invalid = false;
                return;
            }
            if (element.number_of_vouchers) {
                if (type == "submit") {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.product_name) == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.GRID.INVOICE_DETAILS.product_name + " " + _this._translate.VALIDATION.required, "error");
                        invalid = false;
                        return false;
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.to_warehouse) == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.to_warehouse + " " + _this._translate.VALIDATION.required, "error");
                        invalid = false;
                        return false;
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.from_warehouse) == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.from_warehouse + " " + _this._translate.VALIDATION.required, "error");
                        invalid = false;
                        return false;
                    }
                    if (element.number_real_export == null) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.GRID.INVOICE_DETAILS.quantity_export + " " + _this._translate.VALIDATION.required, "error");
                        invalid = false;
                        return false;
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.product_code) != "" && !_this.productCodePattern.test(element.product_code)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.VALIDATION.required_productCode, "error");
                        invalid = false;
                        return false;
                    }
                }
                var invoice = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
                if (element.id) {
                    invoice.id = element.id;
                }
                invoice.invoice_number = element.invoice_number;
                invoice.invoice_release_id = _this.invoice_release_id;
                invoice.template_id = _this.template_id;
                invoice.template_code = _this.template_code;
                invoice.invoice_series = _this.invoice_series;
                invoice["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                invoice.invoice_date = element.invoice_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.invoice_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD HH:mm:ss'); // Ngày hóa đơn
                invoice.delivery_order_date = element.delivery_order_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.delivery_order_date).format('YYYY-MM-DD HH:mm:ss') : null;
                invoice.from_warehouse_date = element.from_warehouse_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.from_warehouse_date).format('YYYY-MM-DD HH:mm:ss') : null;
                invoice.place_of_delivery = element.place_of_delivery;
                invoice.shiping_point = element.shiping_point;
                invoice.delivery_order_number = element.delivery_order_number;
                invoice.currency_code = element.currency_code;
                invoice.delivery_order_by = element.delivery_order_by;
                invoice.buyer_tax_code = element.buyer_tax_code;
                invoice.delivery_order_content = element.delivery_order_content;
                invoice.transportation_contract = element.transportation_contract;
                invoice.transportation_method = element.transportation_method;
                invoice.to_warehouse_name = element.to_warehouse_name;
                invoice.to_warehouse = element.to_warehouse;
                invoice.from_warehouse_name = element.from_warehouse_name;
                invoice.from_warehouse = element.from_warehouse;
                invoice.delivery_by = element.delivery_by;
                invoice.carrier_email = element.carrier_email;
                invoice.carrier_mobile = element.carrier_mobile;
                invoice.currency_rate = _this.roundNumber(element.currency_rate, decimal_quantity);
                invoice.buyer_email = element.buyer_email; //Email
                invoice.note = element.note; //ghi chú
                invoice.invoice_products[0].product_code = element.product_code;
                invoice.invoice_products[0].product_name = element.product_name;
                invoice.invoice_products[0].unit_code = element.unit_code;
                invoice.invoice_products[0].unit_name = element.unit_name;
                invoice.invoice_products[0].quantity = element.quantity;
                invoice.invoice_products[0].number_real_export = element.number_real_export;
                invoice.invoice_products[0].number_real_import = element.number_real_import;
                invoice.invoice_products[0].price = element.price;
                invoice.invoice_products[0].amount = element.amount;
                invoice.invoice_products[0].amount_after_vat = element.amount_after_vat;
                invoice.invoice_products[0].order = element.order;
                invoice.invoice_products[0].view_order = element.view_order;
                invoice.invoice_products[0].is_promotion = element.is_promotion;
                invoice.invoice_products[0]["row_content"] = element.product_name;
                invoice.invoice_products[0].contract_order = element.contract_order;
                invoice.display_currency = JSON.stringify(_this.configs.display_currency);
                var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                invoice.decimal_places_json = decimal_places_json;
                if (element.file_attach) {
                    invoice.invoice_files = element.file_attach;
                }
                else {
                    invoice.invoice_files = [];
                }
                invoices.push(invoice);
            }
            if (element.productNumberOfVouchers) {
                // console.log(element)
                var invoiceProduct = {
                    product_code: element.product_code,
                    product_name: element.product_name,
                    unit_code: element.unit_code,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    number_real_export: element.number_real_export,
                    number_real_import: element.number_real_import,
                    price: element.price,
                    is_promotion: element.is_promotion,
                    order: element.order,
                    amount: element.amount,
                    amount_after_vat: element.amount_after_vat,
                    view_order: element.view_order,
                    row_content: element.product_name,
                    contract_order: element.contract_order,
                };
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                        //if (invoiceProduct.product_name != "Tổng")
                        invoices[i].invoice_products.push(invoiceProduct);
                    }
                }
            }
        });
        var _loop_3 = function (i) {
            var amount = null, amount_after_vat = null, amount_after_vatx = null, amount_after_vat0 = null, amount_after_vat5 = null, amount_after_vat8 = null, amount_after_vat10 = null, total_amount_product_vat0 = null, total_amount_product_vat5 = null, total_amount_product_vat8 = null, total_amount_product_vat10 = null, total_amount_product_vatx = null, amount_after_vat_other = null, amount_after_vat_kkknt = null, total_amount_product_vat_kkknt = null, total_amount_product_vat_other = null, number_real_export = null, number_real_import = null;
            var _objTong = invoices[i].invoice_products.filter(function (p) { return p.product_name == "Tổng"; })[0];
            invoices[i].invoice_products = invoices[i].invoice_products.filter(function (p) { return p.product_name != "Tổng"; });
            invoices[i].invoice_products.forEach(function (product, index) {
                if (!product.is_promotion) {
                    if (product.number_real_export != null)
                        number_real_export += _this.roundNumber(product.number_real_export, decimal_quantity);
                    if (product.number_real_import != null)
                        number_real_import += _this.roundNumber(product.number_real_import, decimal_quantity);
                    if (product.amount != null)
                        amount += product.amount;
                    if (product.amount_after_vat != null)
                        amount_after_vat += product.amount_after_vat;
                }
            });
            invoices[i].number_real_export = number_real_export != null ? this_3.roundNumber(number_real_export, decimal_quantity) : null;
            invoices[i].number_real_import = number_real_import != null ? this_3.roundNumber(number_real_import, decimal_quantity) : null;
            invoices[i].amount = _objTong ? this_3.roundNumber(_objTong.amount, decimal_amount) : this_3.roundNumber(amount, decimal_amount);
            invoices[i].amount_after_vat = _objTong ? this_3.roundNumber(_objTong.amount_after_vat, decimal_amount_after_vat) : this_3.roundNumber(amount_after_vat, decimal_amount_after_vat);
            if (amount_after_vatx != null)
                invoices[i].amount_after_vatx = this_3.roundNumber(amount_after_vatx, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vatx = null;
            if (amount_after_vat0 != null)
                invoices[i].amount_after_vat0 = this_3.roundNumber(amount_after_vat0, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat0 = null;
            if (amount_after_vat5 != null)
                invoices[i].amount_after_vat5 = this_3.roundNumber(amount_after_vat5, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat5 = null;
            if (amount_after_vat8 != null)
                invoices[i].amount_after_vat8 = this_3.roundNumber(amount_after_vat8, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat8 = null;
            if (amount_after_vat10 != null)
                invoices[i].amount_after_vat10 = this_3.roundNumber(amount_after_vat10, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat10 = null;
            if (amount_after_vat_kkknt != null)
                invoices[i].amount_after_vat_kkknt = this_3.roundNumber(amount_after_vat_kkknt, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat_kkknt = null;
            if (amount_after_vat_other != null)
                invoices[i].amount_after_vat_other = this_3.roundNumber(amount_after_vat_other, decimal_amount_after_vat);
            else
                invoices[i].amount_after_vat_other = null;
            if (total_amount_product_vatx != null)
                invoices[i].total_amount_product_vatx = this_3.roundNumber(total_amount_product_vatx, decimal_amount);
            else
                invoices[i].total_amount_product_vatx = null;
            if (total_amount_product_vat0 != null)
                invoices[i].total_amount_product_vat0 = this_3.roundNumber(total_amount_product_vat0, decimal_amount);
            else
                invoices[i].total_amount_product_vat0 = null;
            if (total_amount_product_vat5 != null)
                invoices[i].total_amount_product_vat5 = this_3.roundNumber(total_amount_product_vat5, decimal_amount);
            else
                invoices[i].total_amount_product_vat5 = null;
            if (total_amount_product_vat8 != null)
                invoices[i].total_amount_product_vat8 = this_3.roundNumber(total_amount_product_vat8, decimal_amount);
            else
                invoices[i].total_amount_product_vat8 = null;
            if (total_amount_product_vat10 != null)
                invoices[i].total_amount_product_vat10 = this_3.roundNumber(total_amount_product_vat10, decimal_amount);
            else
                invoices[i].total_amount_product_vat10 = null;
            if (total_amount_product_vat_kkknt != null)
                invoices[i].total_amount_product_vat_kkknt = this_3.roundNumber(total_amount_product_vat_kkknt, decimal_amount);
            else
                invoices[i].total_amount_product_vat_kkknt = null;
            if (total_amount_product_vat_other != null)
                invoices[i].total_amount_product_vat_other = this_3.roundNumber(total_amount_product_vat_other, decimal_amount);
            else
                invoices[i].total_amount_product_vat_other = null;
            if (invoices[i].amount_after_vat != null)
                invoices[i].total_payment = this_3.roundNumber(invoices[i].amount_after_vat, decimal_amount_after_vat);
            else
                invoices[i].total_payment = null;
            // Valid tỷ giá
            var invoice_products = invoices[i].invoice_products.filter(function (item) { return item.product_exchange_rate; });
            if (invoices[i].currency_code && invoices[i].currency_code != "VND") {
                if (invoice_products && invoice_products.length > 0) {
                    if (invoice_products.length !== invoices[i].invoice_products.length) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this_3._translate.CONTROLL.LABEL.currency_rate + ' ' + this_3._translate.VALIDATION.required, 'error');
                        return { value: false };
                    }
                }
                else {
                    if (!invoices[i].currency_rate) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this_3._translate.CONTROLL.LABEL.currency_rate + ' ' + this_3._translate.VALIDATION.required, 'error');
                        return { value: false };
                    }
                }
            }
            invoices[i].total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(invoices[i].total_payment, decimal_amount_after_vat, invoices[i].currency_code, this_3.configs.system_parameter.display_read_money_english);
        };
        var this_3 = this;
        for (var i = 0; i < invoices.length; i++) {
            var state_1 = _loop_3(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        this.totalInvoice = invoices.length;
        this.invoicesArr = invoices;
        this.invoicesArr = this.invoicesArr.sort(function (itemA, itemB) {
            return new Date(itemA.invoice_date).getTime() - new Date(itemB.invoice_date).getTime();
        });
        return invalid;
    };
    ImportInvoicesFromExcelComponent.prototype.date_sort_desc = function (date1, date2) {
        // This is a comparison function that will result in dates being sorted in
        // DESCENDING order.
        if (date1 > date2)
            return -1;
        if (date1 < date2)
            return 1;
        return 0;
    };
    ;
    /* Xem trước hóa đơn */
    ImportInvoicesFromExcelComponent.prototype.preview = function () {
        var convert = this.convertGirdToInvoices("preview");
        if (convert) {
            if (this.configs.system_parameter.display_template_from_server) {
                var initialState = {
                    items: this.invoicesArr,
                    isXuatHD: false
                };
                this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceComponent"], {
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
        // let convert = this.convertGirdToInvoices("preview");
        // if (convert) {
        //   let data = {
        //     invoices: this.invoicesArr
        //   }
        //   let w = 1920, h = 900;
        //   w = window.screen.availWidth * 100 / 100;
        //   h = window.screen.availHeight * 93 / 100;
        //   let win = window.open("about:blank", "name", "width=200, height=100");
        //   win.document.body.innerHTML = this._translate.NOTIFY.loading;
        //   win.blur();
        //   Library.showloading();
        //   let sub = this.vatService.previewInvoiceImport(data).subscribe(rs => {
        //     if (rs.status == 'success') {
        //       let pdf_file = rs.data.invoice.pdf_file;
        //       let objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
        //       win.resizeTo(screen.availWidth, screen.availHeight);
        //       win.focus();
        //       win.open(objectUrl, "name", "width=" + w + ", height=" + h);
        //     } else {
        //       win.close();
        //       Library.notify(rs.message, 'error');
        //     }
        //   }, err => { }, () => {
        //     Library.hideloading();
        //     sub.unsubscribe();
        //   });
        // }
    };
    ImportInvoicesFromExcelComponent.prototype.previewBeforeSubmit = function () {
        var _this = this;
        this.convertGirdToInvoices("preview");
        if (this.configs.system_parameter.display_template_from_server) {
            var hinhthucxuat = "";
            if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                hinhthucxuat = "và ký";
            }
            else {
                hinhthucxuat = "chờ ký";
            }
            var initialState = {
                items: this.invoicesArr,
                isXuatHD: true,
                hinhthucxuat: hinhthucxuat
            };
            this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-xl view-invoice',
                initialState: initialState
            });
            var subModal_2 = this.modalImportService.onHide.subscribe(function () {
                if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                    _this.confirmCheckPreview = true;
                    _this.submit('XUAT');
                }
                subModal_2.unsubscribe();
            });
        }
        else {
            this.checkCKS("XUAT_HOA_DON");
        }
        // this.convertGirdToInvoices("preview");
        // let data = {
        //   invoices: this.invoicesArr
        // }
        // Library.showloading();
        // this.windowPreviewBeforeSubmit = window.open("", "", `width=${screen.availWidth}, height=${screen.availHeight}`);
        // this.windowPreviewBeforeSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
        // this.windowPreviewBeforeSubmit.blur();
        // let timer = setInterval(() => {
        //   if (this.windowPreviewBeforeSubmit.closed) {
        //     clearInterval(timer);
        //     let isCheck = Helper.getCookie('CK_CFM_I');
        //     this.windowPreviewBeforeSubmit = undefined;
        //     if (isCheck == "CHECKED") {
        //       document.cookie = "CK_CFM_I=; path=/";
        //       this.confirmCheckPreview = true;
        //       this.submit('XUAT');
        //     }
        //   }
        // }, 500);
        // let htx = "";
        // let questionSign = "";
        // if (this.htXuat != sEnum.hinhThucXuat.XuatChoKy) {
        //   htx = this._translate.CONTROLL.COMBO.export_and_sign;
        //   questionSign = this._translate.CONFIRM.confirm_export_invoice_signed;
        // } else {
        //   htx = this._translate.CONTROLL.COMBO.export_wait_sign;
        //   questionSign = this._translate.CONFIRM.confirm_export_invoice_wait_signed;
        // }
        // let sub = this.vatService.previewInvoiceImport(data).subscribe(rs => {
        //   if (rs.status == 'success') {
        //     let pdf_file = rs.data.invoice.pdf_file;
        //     let objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
        //     this.windowPreviewBeforeSubmit.document.write(`
        //     <style type="text/css" scoped>
        //         .nhap-nhay { 
        //           background: red;
        //           padding: 0.5px 9px;
        //           margin-right: 5px;
        //           border-radius: 57%;
        //           -webkit-animation: flicker 1s infinite;
        //         } 
        //         .ht-xuat{
        //           display: inline-block;
        //           margin-right: 50px;
        //           padding: 15px;
        //           float: right;
        //           background: #e48e08;
        //           position: absolute;
        //         }
        //         @-webkit-keyframes flicker
        //         {
        //         0% {opacity:0;}
        //         9% {opacity:0;}
        //         10% {opacity:.5;}
        //         13% {opacity:0;}
        //         20% {opacity:.5;}
        //         25% {opacity:1;}
        //         }
        //         .example {
        //           padding: 20px;
        //         }
        //         input[type=button] {
        //           padding: 5px 10px;
        //           margin: 10px 5px;
        //           border-radius: 5px;
        //           cursor: pointer;
        //           background: #ddd;
        //           border: 1px solid #ccc;
        //         }
        //         input[type=button]:hover {
        //           background: #ccc;
        //         }
        //         .confirm {
        //           display: none;
        //         }
        //         .confirm > div:first-of-type {
        //           position: fixed;
        //           width: 100%;
        //           height: 100%;
        //           background: rgba(0, 0, 0, 0.5);
        //           top: 0px;
        //           left: 0px;
        //         }
        //         .confirm > div:last-of-type {
        //           padding: 10px 20px;
        //           background: white;
        //           position: absolute;
        //           width: auto;
        //           height: auto;
        //           left: 50%;
        //           top: 50%;
        //           transform: translate(-50%, -50%);
        //           border-radius: 5px;
        //           border: 1px solid #333;
        //         }
        //         .confirm > div:last-of-type div:first-of-type {
        //           min-width: 150px;
        //           padding: 10px;
        //         }
        //         .confirm > div:last-of-type div:last-of-type {
        //           text-align: right;
        //         }
        //     </style>
        //     <div style="margin-left: 50px;">
        //       <h3 style="color: red; text-align: center;">${this._translate.CONTROLL.LABEL.draft_e_invoice}</h3>
        //       <p style="font-weight: 600;"><span class="nhap-nhay"></span><span style="font-size: 17px;">${this._translate.CONTROLL.LABEL.note1}: 
        //       <span>${this._translate.CONTROLL.LABEL.suggestion_check_content_invoice}</span>
        //     </div>
        //     <div>
        //       <iframe style="margin-left: 170px;" width="70%" height="95%" src="${objectUrl}"></iframe>
        //       <div class="ht-xuat">
        //         <p style="color: #fff;font-size: 17px;text-align: center;margin-bottom: 0;">${this._translate.CONTROLL.LABEL.invoice_date}</p>
        //         <p style="color: #fff;font-size: 17px;text-align: center;margin-bottom: 10px;margin-top: 5px;">${moment(rs.data.invoice.invoice_date).format('DD/MM/YYYY')}</p>
        //         <h3 style="color: #fff; text-align: center; text-transform: uppercase;margin-top: 5px;">${htx}</h3>
        //       </div>
        //     </div>
        //     <div style="text-align: center; margin: 20px 0 50px; font-size: 22px; font-weight: 600;">
        //       <a href="javascript:void(0)" style="text-decoration: none;" onclick="setConfirmInvoice()">${this._translate.CONTROLL.BUTTON.agree}</a>|
        //       <a href="javascript:void(0)" style="text-decoration: none;" onclick="closeWin()">${this._translate.CONTROLL.BUTTON.close}</a>
        //     </div>
        //     <div class="confirm">
        //         <div></div>
        //         <div>
        //           <div id="confirmMessage">Confirm text</div>
        //           <div>
        //             <input id="confirmYes" type="button" value="${this._translate.CONTROLL.BUTTON.agree}" />
        //             <input id="confirmNo" type="button" value="${this._translate.CONTROLL.BUTTON.come_back}" />
        //           </div>
        //         </div>
        //     </div>
        //     <script type="text/javascript">
        //     const ui = {
        //       confirm: async (message) => createConfirm(message)
        //     }
        //     const createConfirm = (message) => {
        //       return new Promise((complete, failed)=>{
        //         $('#confirmMessage').text(message)
        //         $('#confirmYes').off('click');
        //         $('#confirmNo').off('click');
        //         $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
        //         $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
        //         $('.confirm').show();
        //       });
        //     }
        //     const setConfirmInvoice = async () => {
        //       const confirm = await ui.confirm("${questionSign}");
        //       if(confirm){
        //         document.cookie = "CK_CFM_I=CHECKED; path=/";
        //         window.close();
        //       } else{
        //       }
        //     } 
        //       function closeWin(){
        //         window.close();
        //       }
        //     </script>
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        //     `);
        //     this.windowPreviewBeforeSubmit.focus();
        //   } else {
        //     this.windowPreviewBeforeSubmit.close();
        //     Library.notify(rs.message, 'error');
        //   }
        // }, err => { }, () => {
        //   Library.hideloading();
        //   sub.unsubscribe();
        // });
    };
    ImportInvoicesFromExcelComponent.prototype.addWareToWareHouse = function (wareHouseCode, wareHouseName) {
        if (wareHouseCode) {
            var _obj = this.select.wavehourses.filter(function (p) { return p.id === wareHouseCode; })[0];
            if (!_obj) {
                var _objPush = {
                    id: wareHouseCode,
                    name: wareHouseName,
                };
                this.select.wavehourses.push(_objPush);
            }
        }
    };
    ImportInvoicesFromExcelComponent.prototype.inChuyenDoi = function () {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open("about:blank", "name", "width=200, height=100");
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.vatService.inChuyenDoiInvoiceImport(this.invoicesId, false).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
                win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                //   win.document.write(`
                //   <a id="idA" title="Download File" style="font-family: \'Verdana\';color: #333;font-weight: 600;float:right; margin-bottom: 5px;
                //     margin-right: 20px;" download="hoadon.pdf" href="data:application/pdf;base64,${pdf_file}">Tải File</a>
                //   <iframe width="100%" height="97%" src="data:application/pdf;base64,${pdf_file}#download=1"></iframe>
                // `);
                //   win.resizeTo(screen.availWidth, screen.availHeight);
                //   win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesFromExcelComponent.prototype.xemHoaDon = function () {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open("about:blank", "name", "width=200, height=100");
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.vatService.xemHoaDonInvoiceImport(this.invoicesId).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
                win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                // win.document.write(`<iframe width="100%" height="97%" src="data:application/pdf;base64,${pdf_file}"></iframe>`)
                // win.resizeTo(screen.availWidth, screen.availHeight);
                // win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesFromExcelComponent.prototype.submit = function (type) {
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.checkStatusData();
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_11__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_11__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        if (this.totalDuplicateInvoice > 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.number_of_voucher_duplicate, "error");
            return;
        }
        var convert = this.convertGirdToInvoices("submit");
        if (convert) {
            if (type == "XUAT") {
                if (this.confirmCheckPreview) {
                    // Library.confirmVA(`Tất cả hóa đơn đã nhập sẽ được xuất hóa đơn vào ngày <strong>${dayExport}</strong>. Bạn có chắc chắn không?`, "Thông báo", () => {
                    this.showPopupImport = true;
                    if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                        this.xuatHoaDon();
                    }
                    else {
                        this.xuatChoKy();
                    }
                    this.confirmCheckPreview = false;
                }
                else {
                    this.previewBeforeSubmit();
                }
            }
            else if (type == "LUU") {
                this.showPopupImport = true;
                this.luuChoXuat();
            }
        }
    };
    /* */
    ImportInvoicesFromExcelComponent.prototype.configColumn = function () {
        var _this = this;
        var initialState = {
            listColumn: this.listColumn,
            listColumnClone: this.listColumn,
            configs: this.configs,
            exportType: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].exportType.phieuxuatkho
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["ConfigColumnImportExcelComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.listColumn = data.listColumn;
            }
            subModal.unsubscribe();
        });
    };
    ImportInvoicesFromExcelComponent.prototype.infoColumn = function (columnName) {
        if (this.listColumn && this.listColumn.length > 0) {
            var _obj = this.listColumn.filter(function (p) { return p.column_code == columnName; })[0];
            if (_obj) {
                return _obj;
            }
            else
                return { column_code: "", column_name: "", is_visible: false };
        }
    };
    ImportInvoicesFromExcelComponent.prototype.checkCKS = function (typeView) {
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
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["SignatureOffComponent"], {
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
                        items: _this.invoicesArr,
                        isXuatHD: false
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_3 = _this.modalImportService.onHide.subscribe(function () {
                        subModal_3.unsubscribe();
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
                        items: _this.invoicesArr,
                        isXuatHD: true,
                        hinhthucxuat: hinhthucxuat
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_4 = _this.modalImportService.onHide.subscribe(function () {
                        if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                            _this.connectWebsocket();
                            _this.confirmCheckPreview = true;
                            _this.submit('XUAT');
                        }
                        subModal_4.unsubscribe();
                    });
                }
            }
        });
    };
    ImportInvoicesFromExcelComponent.prototype.dong = function () {
        this.bsModalImportRef.hide();
        this._location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ImportInvoicesFromExcelComponent.prototype, "dataGrid", void 0);
    ImportInvoicesFromExcelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-invoices-from-excel',
            template: __webpack_require__(/*! ./import-invoices-from-excel.component.html */ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices-from-excel.component.scss */ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"]])
    ], ImportInvoicesFromExcelComponent);
    return ImportInvoicesFromExcelComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/index/index.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-7\">\r\n    <app-search-advanced (searchContentChange)=\"getSearch($event)\">\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-5\" style=\"max-height: 70px;\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-button (click)=\"lapHoaDon()\" icon=\"assets\\img\\icons\\LapHD.png\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_internal_transport' | translate }}\" type=\"default\"></dx-button>\r\n          <dx-button *ngIf=\"taxCodeThueHCM.includes(currentUser.account.tax_code)\" (click)=\"taiHDXml()\"\r\n            [(icon)]=\"_translate.ICONS.xml\" text=\"{{ 'CONTROLL.BUTTON.tai_hd_xml' | translate }}\" type=\"default\">\r\n          </dx-button>\r\n          <!-- <dx-button (click)=\"edit()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" [disabled]=\"!(selectedRows.length == 1) && disEditMulti\"></dx-button> -->\r\n          <!-- <dx-button (click)=\"delete()\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"Xóa\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button> -->\r\n          <dx-button *ngIf=\"isAccessExportInv && configs.system_parameter.allow_keep_invoice_number\"\r\n            (click)=\"kyHangLoat()\" text=\"{{ 'CONTROLL.BUTTON.sign' | translate }}\" type=\"default\"\r\n            [disabled]=\"!selectedRows.length\"></dx-button>\r\n          <!-- <dx-button (click)=\"giuSo()\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"Giữ số\" type=\"default\"></dx-button> -->\r\n          <dx-menu *ngIf=\"test\" [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainer\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"internaltransport\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" width=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n  <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" dataType=\"date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n    format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"0\">\r\n  </dxi-column>\r\n  <dxi-column *ngIf=\"isPXKDaiLy\" cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.agency_name' | translate }}\"\r\n    [width]=\"180\" alignment=\"left\"></dxi-column>\r\n  <dxi-column cellTemplate=\"Thongtindieudong\" caption=\"{{strTextHDKT}}\" [width]=\"140\" alignment=\"left\"\r\n    headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column cellTemplate=\"Thongtinvanchuyen\" caption=\"{{ 'GRID.PHIEU_XUAT_KHO.info_shipping' | translate }}\"\r\n    alignment=\"left\"></dxi-column>\r\n  <dxi-column cellTemplate=\"Thongtinkho\" caption=\"{{ 'CONTROLL.LABEL.warehouse' | translate }}\" [width]=\"140\"\r\n    alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- total_payment_string: trường này không có trong invoice, để hiển thị định dạng tổng tiền ngoài màn hình -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\"\r\n    width=\"{{_translate.GRID_WIDTH.tong_tien}}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column *ngIf=\"isTT78\" cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\" width=\"110\"\r\n    alignment=\"center\"></dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"130\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_CAP' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n    <a *ngIf=\"d.data.send_department_status == 'CHUA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_TIEP_NHAN' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_HOP_LE' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n    <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name ||\r\n      _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'Thongtindieudong'\">\r\n    <p *ngIf=\"d.data.delivery_order_number\">{{ 'CONTROLL.LABEL.number' | translate }}: {{\r\n      d.data.delivery_order_number}},</p>\r\n    <p *ngIf=\"d.data.delivery_order_date\">{{ 'CONTROLL.LABEL.date' | translate }}: {{\r\n      convertDDMMYYY(d.data.delivery_order_date) }},</p>\r\n    <p *ngIf=\"d.data.delivery_order_by\">{{ 'CONTROLL.LABEL.of' | translate }}: {{ d.data.delivery_order_by}},</p>\r\n    <p *ngIf=\"d.data.delivery_order_content\">{{ 'CONTROLL.LABEL.delivery_order_content' | translate }}: {{\r\n      d.data.delivery_order_content}}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'Thongtinvanchuyen'\">\r\n    <p *ngIf=\"d.data.delivery_by\">{{ 'CONTROLL.LABEL.delivery_by' | translate }}: {{ d.data.delivery_by}},</p>\r\n    <p *ngIf=\"d.data.transportation_contract\">{{ 'CONTROLL.LABEL.contract_number' | translate }}: {{\r\n      d.data.transportation_contract}},</p>\r\n    <p *ngIf=\"d.data.transportation_method\">{{ 'CONTROLL.LABEL.transportation_method' | translate }}: {{\r\n      d.data.transportation_method}}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'Thongtinkho'\">\r\n    <p *ngIf=\"d.data.from_warehouse_name\">{{ 'CONTROLL.LABEL.from_warehouse' | translate }}: {{\r\n      d.data.from_warehouse_name}},</p>\r\n    <p *ngIf=\"d.data.to_warehouse_name\">{{ 'CONTROLL.LABEL.to_warehouse' | translate }}: {{ d.data.to_warehouse_name}}\r\n    </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n        *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n        (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <!-- Chức năng -->\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_internal_transport}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n        [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ 'DXO_PAGER.page' | translate }}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<app-download-pdf></app-download-pdf>\r\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/index/index.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/index/index.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.last-drodown{bottom:30px}.button-panel{margin-top:30px}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep #gridContainer .dx-cell-focus-disabled{overflow:visible !important}.small-grid{position:fixed  !important;right:39px !important}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/index/index.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/index/index.component.ts ***!
  \********************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _send_list_email_send_list_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../send-list-email/send-list-email.component */ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.ts");
/* harmony import */ var _import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../import-invoices-from-excel/import-invoices-from-excel.component */ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.ts");
/* harmony import */ var _send_report_delivery_send_report_delivery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../send-report-delivery/send-report-delivery.component */ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.ts");
/* harmony import */ var _view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../view-delivery/view-delivery.component */ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function IndexComponent(authService, vatService, modalService, modalImportService, router, route, translate, spinner, socketService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.spinner = spinner;
        this.socketService = socketService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.clickCurent = '';
        this.clickCurentToggle = '';
        this.isDisableReplace = true;
        this.isDisableAdjust = true;
        this.templatesTT78 = [];
        this.objStatusBtn = {};
        //dropbutton
        this.extras = [];
        //end-dropbutton
        this.select = {};
        this.disEditMulti = true;
        this.isPXKDaiLy = false;
        this.taxCodeThueHCM = ["0102519041-555"];
        this.isTT78 = false;
        this.infoDangKy = {};
        this.isExistFormRelease = false;
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.extras = [{
                id: "1",
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: 'NAP_HD_TU_EXCEL_DT',
                        name: this._translate.CONTROLL.BUTTON.import_internal_transport_from_excel,
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
                        name: this._translate.CONTROLL.BUTTON.view_internal_transport,
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'INCHUYENDOI',
                        name: this._translate.CONTROLL.BUTTON.print_conversion,
                        icon: this._translate.ICONS.print
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_internal_transport,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_HD_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_hd_pdf,
                        icon: this._translate.ICONS.download
                    },
                ]
            }];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.loaiHoaDon = this.route.snapshot.data.type;
        this.vatService.data = null;
        this.vatService.isCopy = false;
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
            this.isPXKDaiLy = true;
        if (this.isPXKDaiLy)
            this.strTextHDKT = this._translate.GRID.PHIEU_XUAT_KHO.economic_contract;
        else
            this.strTextHDKT = this._translate.GRID.PHIEU_XUAT_KHO.info_mobility;
        if (!this.taxCodeThueHCM.includes(this.currentUser.account.tax_code)) {
            this.extras[0].items.push({ id: "TAI_HD_XML", name: this._translate.CONTROLL.BUTTON.tai_pxk_xml, icon: this._translate.ICONS.xml });
        }
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.XKNB03) {
            if (this.configs.system_parameter.digitally_sign_the_delivery) {
                var oKyLenhDieuDong = listpermissions.filter(function (p) { return p == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].permissions.NguoiTaoKy || p == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].permissions.PhuTrachDonViKy; });
                if (oKyLenhDieuDong.length > 0)
                    this.extras[0].items.push({ id: "KY_LENH_DIEU_DONG", name: this._translate.CONTROLL.BUTTON.sign_maneuver_command, icon: this._translate.ICONS.pencil });
                this.extras[0].items.push({ id: "IN_LENH_DIEU_DONG", name: this._translate.CONTROLL.BUTTON.print_maneuver_command, icon: this._translate.ICONS.print });
            }
            if (this.configs.integrate_parameter.integrate_econtract && this.configs.integrate_parameter.integrate_econtract.is_delivery) {
                this.extras[0].items.push({ id: "GUI_BB_GIAO_HANG", name: this._translate.CONTROLL.BUTTON.send_report_delivery, icon: this._translate.ICONS.send_email });
                this.extras[0].items.push({ id: "IN_BB_GIAO_HANG", name: this._translate.CONTROLL.BUTTON.print_report_delivery, icon: this._translate.ICONS.print });
            }
        }
        else {
            this.extras[0].items = this.extras[0].items.filter(function (p) { return p.id != "NAP_HD_TU_EXCEL_DT"; });
        }
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN") {
                    this.isTT78 = true;
                    var infoFormRelease = this.authService.getInfoFormRelease();
                    if (infoFormRelease && infoFormRelease.invoice_releases && infoFormRelease.invoice_releases.length > 0) {
                        var invoicesReleases = infoFormRelease.invoice_releases.filter(function (p) { return (parseInt(p.amount) - parseInt(p.used_amount)) > 0; });
                        if (invoicesReleases && invoicesReleases.length > 0)
                            this.isExistFormRelease = true;
                    }
                }
            }
        }
        else {
            if (localStorage.getItem('new_member')) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn phải tạo thông báo phát hành trước khi lập hóa đơn', 'warning');
            }
        }
        // let exportSchedules = Helper.getExportSchedule(this._translate).schedule;
        // let _objSchedules = exportSchedules.filter(p => p.code == "THANG_NAY")[0];
        // if (_objSchedules) {
        //   this.loadList();
        //   // this.loadList(`&filter_groups[999][filters][0][key]=invoice_date&filter_groups[999][filters][0][value]=${moment(_objSchedules.startDate).format('YYYY-MM-DD')} 00:00:00&filter_groups[999][filters][0][operator]=gte&filter_groups[999][filters][1][key]=invoice_date&filter_groups[999][filters][1][value]=${moment(_objSchedules.endDate).format('YYYY-MM-DD')} 23:59:59&filter_groups[999][filters][1][operator]=lt`);
        // }
        var sub = this.vatService.getDMIndex().subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.listDM = rs.data;
                //put data DM for select
                _this.select.unit_codes = rs.data.DM_DON_VI_TINH;
                _this.select.select_provisions_on_accounts = rs.data.DM_DINH_KHOAN;
                _this.select.payment_method_names = rs.data.DM_HINH_THUC_THANH_TOAN;
                _this.select.vats = rs.data.DM_TY_LE_VAT;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Có lỗi khi tải danh mục', 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
        var _obj = listpermissions.filter(function (p) { return p == "phe_duyet"; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else
            this.isAccessExportInv = false;
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        var _lst = [];
        if (params) {
            _lst = this.vatService.getAll(this.loaiHoaDon, params);
        }
        else {
            _lst = this.vatService.getAll(this.loaiHoaDon);
        }
        this.dataSource.store = _lst;
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
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
            if (e.data.adjustment_type == 2 || e.data.adjustment_type == 7) {
                var eles = e.rowElement.getElementsByTagName('td');
                for (var i = 0; i < eles.length; i++) {
                    if (i !== 9 && i !== 1) {
                        eles[i].style.textDecoration = 'line-through';
                    }
                }
            }
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
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 0) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            var checkDaXuat = this.selectedItems.filter(function (item) {
                return item.status == "DA_XUAT";
            });
            if (checks.length == this.selectedItems.length && checkDaXuat.length == 0) {
                this.disEditMulti = false;
            }
            if (this.selectedItems.length == 1) {
                this.isDisableAdjust = false;
                this.isDisableReplace = false;
            }
            else {
                this.isDisableAdjust = true;
                this.isDisableReplace = true;
            }
        }
        else {
            this.isDisableAdjust = true;
            this.isDisableReplace = true;
        }
    };
    IndexComponent.prototype.lapHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.XKNB03)
                            this.router.navigate(['system/transport-invoice/create']);
                        else {
                            if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                                this.router.navigate(['system/agent-invoice/create']);
                            else
                                this.router.navigate(['system/sale-invoice/create']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, rowData, _hdDaXuat, oInvoice, isCheckAllEquals, isExistOther, arrStatusInv, arrStatusItem_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        rowData = null;
                        if (data) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat)
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                            else {
                                rowData = data;
                            }
                        }
                        else {
                            if (this.selectedItems.length > 0) {
                                if (this.selectedItems.length == 1)
                                    rowData = this.selectedItems[0];
                                else {
                                    _hdDaXuat = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; })[0];
                                    oInvoice = this.selectedItems.filter(function (p) { return p.send_department_status; })[0];
                                    if (_hdDaXuat || oInvoice) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice_pxk, 'error');
                                        return [2 /*return*/];
                                    }
                                    isCheckAllEquals = this.selectedItems.every(function (item) { return item.template_id == _this.selectedItems[0].template_id; });
                                    if (!isCheckAllEquals) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.chon_hoa_don_cung_mau_pxk, 'error');
                                        return [2 /*return*/];
                                    }
                                    isExistOther = this.selectedItems.find(function (item) { return item.adjustment_type != 1; });
                                    if (isExistOther) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.cho_phep_sua_hoa_don_goc_pxk, 'error');
                                        return [2 /*return*/];
                                    }
                                    arrStatusInv = ["GIU_SO", "GHI_TAM"];
                                    arrStatusItem_1 = this.selectedItems.map(function (obj) { return obj.status; });
                                    result = arrStatusInv.every(function (val) { return arrStatusItem_1.includes(val); });
                                    if (result) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.same_status_invoice_pxk, 'error');
                                        return [2 /*return*/];
                                    }
                                    this.openImportForm(null);
                                }
                            }
                        }
                        if (rowData) {
                            if (this.isTT78 && rowData.xml_type != '3' && rowData.status == 'DA_XUAT' && Number.parseInt(rowData.invoice_number) > 0) {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.adjustment_type) === 5) {
                                    this.router.navigate(["/system/handle-invoice/edit-adjust/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                }
                                else if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.adjustment_type) === 3) {
                                    this.router.navigate(["/system/handle-invoice/edit-replace/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                }
                                else {
                                    if (this.loaiHoaDon == "03XKNB")
                                        this.router.navigate(["/system/transport-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                    else {
                                        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                                            this.router.navigate(["/system/agent-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                        else
                                            this.router.navigate(["/system/sale-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                    }
                                }
                            }
                            else {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.adjustment_type) === 5) {
                                    this.router.navigate(["/system/handle-invoice/edit-adjust/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                }
                                else if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.adjustment_type) === 3) {
                                    this.router.navigate(["/system/handle-invoice/edit-replace/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                }
                                else {
                                    if (this.loaiHoaDon == "03XKNB")
                                        this.router.navigate(["/system/transport-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                    else {
                                        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                                            this.router.navigate(["/system/agent-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                        else
                                            this.router.navigate(["/system/sale-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.openImportForm = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, _lst, subRoute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        _lst = [];
                        if (data) {
                            _lst.push(data.id);
                        }
                        else {
                            _lst = this.selectedRows;
                        }
                        subRoute = this.vatService.getEditImportInvoice(_lst, '', this.loaiHoaDon).subscribe(function (res) {
                            _this.invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDataToImportInvoice(res[0]);
                            // Hàng hóa dịch vụ
                            setTimeout(function () {
                                _this.select.products = res[1].data.products;
                                _this.hoaDonImportChoXuat = res[2].data.invoices.sort(function (itemA, itemB) {
                                    return moment__WEBPACK_IMPORTED_MODULE_8__(itemA.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf() - moment__WEBPACK_IMPORTED_MODULE_8__(itemB.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf();
                                });
                                _this.select.unit_codes = res[3].data.DM_DON_VI_TINH;
                                _this.select.select_provisions_on_accounts = res[3].data.DM_DINH_KHOAN;
                                _this.select.payment_method_names = res[3].data.DM_HINH_THUC_THANH_TOAN;
                                _this.select.vats = res[3].data.DM_TY_LE_VAT;
                                _this.select.wavehourses = res[4].data.wavehourses;
                                _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(res[5]);
                                _this.hoaDonImportChoXuat.forEach(function (invoice) {
                                    invoice.invoice_products.forEach(function (row) {
                                        if (row.product_code) {
                                            var _obj = _this.select.products.filter(function (p) { return p.code === row.product_code; })[0];
                                            if (!_obj) {
                                                var _objPush = {
                                                    code: row.product_code,
                                                    name: row.product_name,
                                                    mhvth: row.product_code + ': ' + row.product_name,
                                                };
                                                _this.select.products.push(_objPush);
                                            }
                                        }
                                    });
                                });
                                var initialState = {
                                    isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                                    invoice_releases: _this.invoice_releases,
                                    select: _this.select,
                                    hoaDonImportChoXuat: _this.hoaDonImportChoXuat,
                                    templatesTT78: _this.templatesTT78,
                                    infoDangKy: _this.infoDangKy
                                };
                                _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_11__["ImportInvoicesFromExcelComponent"], {
                                    backdrop: 'static',
                                    keyboard: false,
                                    class: 'modal-lg full-width',
                                    initialState: initialState
                                });
                                var subModal = _this.modalImportService.onHide.subscribe(function () {
                                    _this.loadList(_this.paramSearch);
                                    subModal.unsubscribe();
                                });
                            }, 10);
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, function (err) {
                        }, function () {
                            subRoute.unsubscribe();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        if (row.status == "DA_XUAT") {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                        }
                        else {
                            if (row.adjustment_type == 5) {
                                if (this.loaiHoaDon == "03XKNB") {
                                    this.router.navigate(["/system/handle-invoice/edit-adjust-warehouse/" + row.id]);
                                }
                                else {
                                    this.router.navigate(["/system/handle-invoice/edit-adjust-agent/" + row.id]);
                                }
                            }
                            else if (row.adjustment_type == 3) {
                                if (this.loaiHoaDon == "03XKNB") {
                                    this.router.navigate(["/system/handle-invoice/edit-replace-warehouse/" + row.id]);
                                }
                                else {
                                    this.router.navigate(["/system/handle-invoice/edit-replace-agent/" + row.id]);
                                }
                            }
                            else {
                                if (this.loaiHoaDon == "03XKNB")
                                    this.router.navigate(["/system/transport-invoice/" + row.id]);
                                else {
                                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                                        this.router.navigate(["/system/agent-invoice/" + row.id]);
                                    else
                                        this.router.navigate(["/system/sale-invoice/" + row.id]);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewNotSelect = function (row) {
        if (row.status == 'DA_XUAT') {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var win_1 = window.open("", "", "width=200, height=100");
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            var sub_1 = this.vatService.view(row.id).subscribe(function (rs) {
                if (rs.status == "success") {
                    var pdf_file = rs.data.invoice.pdf_file;
                    win_1.document.write("\n            <a id=\"idA\" title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n              margin-right: 20px;\" download=\"hoadon.pdf\" href=\"data:application/pdf;base64," + pdf_file + "\">T\u1EA3i File</a>\n            <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n          ");
                    win_1.resizeTo(screen.availWidth, screen.availHeight);
                    win_1.focus();
                }
                else {
                    win_1.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_signed_error_please_sign_the_invoice_again, 'error');
        }
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        if (this.isTT78 && row.xml_type != '3' && row.status == 'DA_XUAT' && Number.parseInt(row.invoice_number) > 0) {
            if (Number.parseInt(row.adjustment_type) == 5) {
                if (this.loaiHoaDon == "03XKNB") {
                    this.router.navigate(["/system/handle-invoice/edit-adjust-warehouse/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
                else {
                    this.router.navigate(["/system/handle-invoice/edit-adjust-agent/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
            }
            else if (Number.parseInt(row.adjustment_type) == 3) {
                if (this.loaiHoaDon == "03XKNB") {
                    this.router.navigate(["/system/handle-invoice/edit-replace-warehouse/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
                else {
                    this.router.navigate(["/system/handle-invoice/edit-replace-agent/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
            }
            else {
                if (this.loaiHoaDon == "03XKNB")
                    this.router.navigate(["/system/transport-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                else {
                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                        this.router.navigate(["/system/agent-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                    else
                        this.router.navigate(["/system/sale-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
            }
        }
        else {
            if (Number.parseInt(row.adjustment_type) == 5) {
                if (this.loaiHoaDon == "03XKNB") {
                    this.router.navigate(["/system/handle-invoice/edit-adjust-warehouse/" + row.id]);
                }
                else {
                    this.router.navigate(["/system/handle-invoice/edit-adjust-agent/" + row.id]);
                }
            }
            else if (Number.parseInt(row.adjustment_type) == 3) {
                if (this.loaiHoaDon == "03XKNB") {
                    this.router.navigate(["/system/handle-invoice/edit-replace-warehouse/" + row.id]);
                }
                else {
                    this.router.navigate(["/system/handle-invoice/edit-replace-agent/" + row.id]);
                }
            }
            else {
                if (this.loaiHoaDon == "03XKNB")
                    this.router.navigate(["/system/transport-invoice/" + row.id]);
                else {
                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                        this.router.navigate(["/system/agent-invoice/" + row.id]);
                    else
                        this.router.navigate(["/system/sale-invoice/" + row.id]);
                }
            }
        }
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
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
                                    _this.vatService.delete(ids_1).subscribe(function (rs) {
                                        if (rs.status === "success") {
                                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                            _this.loadList(_this.paramSearch);
                                        }
                                        else {
                                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                                        }
                                    }, function (err) { }, function () {
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
    IndexComponent.prototype.giuSo = function () {
    };
    IndexComponent.prototype.view = function (data) {
        if (this.selectedItems.length > 0 || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    ids.push(data.id);
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_1 = this.vatService.taodulieuXemMau(ids);
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don,
                        type_invocie: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.phieu_xuat_kho
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
    IndexComponent.prototype.inChuyenDoi = function (data) {
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
                    var data_2 = this.vatService.taodulieuInMau(ids, false);
                    data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.in_chuyen_doi_hd,
                        type_invocie: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.phieu_xuat_kho
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
    IndexComponent.prototype.sendInvoice = function (id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    loaihoadon: _this.loaiHoaDon
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__["SendInvoicesComponent"], {
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
    IndexComponent.prototype.kyHangLoat = function () {
        var _this = this;
        var check = true;
        this.selectedItems.forEach(function (item) {
            if (item.status !== "GIU_SO") {
                check = false;
            }
        });
        if (check && this.selectedItems.length) {
            if (this.selectedItems.length > 25) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Chỉ được chọn tối đa 25 hóa đơn để ký hàng loạt', 'error');
                return false;
            }
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.vatService.layCacHoaDonKySoHangLoat(this.selectedRows, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status == 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs
                    };
                    _this.bsModalSignRef = _this.modalService.show(_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_6__["SignManyComponent"], {
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
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Vui lòng chọn hóa đơn chờ ký', 'error');
        }
    };
    IndexComponent.prototype.napHDTuExcelDt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        this.vatService.getImportInvoice(this.loaiHoaDon).subscribe(function (res) {
                            _this.invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDataToImportInvoice(res[0]);
                            _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(res[4]);
                            // Hàng hóa dịch vụ
                            _this.select.products = res[1].data.products;
                            _this.select.unit_codes = res[2].data.DM_DON_VI_TINH;
                            _this.select.select_provisions_on_accounts = res[2].data.DM_DINH_KHOAN;
                            _this.select.payment_method_names = res[2].data.DM_HINH_THUC_THANH_TOAN;
                            _this.select.vats = res[2].data.DM_TY_LE_VAT;
                            _this.select.wavehourses = res[3].data.wavehourses;
                            var initialState = {
                                isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                                invoice_releases: _this.invoice_releases,
                                select: _this.select,
                                isAccessExportInv: _this.isAccessExportInv,
                                templatesTT78: _this.templatesTT78,
                                infoDangKy: _this.infoDangKy
                            };
                            _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_11__["ImportInvoicesFromExcelComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'modal-lg full-width',
                                initialState: initialState
                            });
                            var subModal = _this.modalImportService.onHide.subscribe(function () {
                                _this.loadList(_this.paramSearch);
                                subModal.unsubscribe();
                            });
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Tải file hóa đơn pdf */
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'invoices', 'invoice', false);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    /* Tải file hóa đơn xml */
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_2 = this.vatService.xuatHDXml(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                    }
                }, function (err) { }, function () {
                    sub_2.unsubscribe();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    /* Ký lệnh điều động */
    IndexComponent.prototype.kylenhdieudong = function () {
        var _this = this;
        var setInvoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.NOTIFY.do_you_want_to_sign_transport, this._translate.NOTIFY.notify);
        setInvoiceDate.then(function (dialog) {
            if (!dialog) {
            }
            else {
                if (_this.selectedItems.length > 0) {
                    var ids = [];
                    ids = _this.selectedItems.map(function (e) { return e.id; });
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                    var sub_3 = _this.vatService.kylenhdieudong(ids).subscribe(function (rs) {
                        if (rs.status == "success") {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) { }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        sub_3.unsubscribe();
                    });
                }
            }
        });
    };
    /* In lệnh điều động */
    IndexComponent.prototype.inlenhdieudong = function () {
        if (this.selectedItems.length > 0) {
            var ids = [];
            ids = this.selectedItems.map(function (e) { return e.id; });
            if (ids.length == 1) {
                var w_1 = 1920, h_1 = 900;
                w_1 = window.screen.availWidth * 100 / 100;
                h_1 = window.screen.availHeight * 93 / 100;
                var win_2 = window.open("about:blank", "name", "width=200, height=100");
                win_2.document.body.innerHTML = this._translate.NOTIFY.loading;
                win_2.blur();
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_4 = this.vatService.xemlenhdieudong(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var pdf_file = rs.data[0].file_content;
                        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        win_2.resizeTo(screen.availWidth, screen.availHeight);
                        win_2.focus();
                        win_2.open(objectUrl, "name", "width=" + w_1 + ", height=" + h_1);
                    }
                    else {
                        win_2.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_4.unsubscribe();
                });
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.in_lenh_dd,
                    type_invocie: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.lenh_dieu_dong
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id == "NAP_HD_TU_EXCEL_DT") {
            this.napHDTuExcelDt();
        }
        else if (e.itemData.id == "GIU_SO") {
            this.giuSo();
        }
        else if (e.itemData.id == "KY_SO") {
            this.kyHangLoat();
        }
        else if (e.itemData.id == 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id == 'XEM') {
            this.view(null);
        }
        else if (e.itemData.id == 'INCHUYENDOI') {
            this.inChuyenDoi(null);
        }
        else if (e.itemData.id === 'GUI_BEN_MUA') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'SUA') {
            this.edit(null);
        }
        else if (e.itemData.id == "TAI_HD_XML") {
            this.taiHDXml();
        }
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
        else if (e.itemData.id == "KY_LENH_DIEU_DONG") {
            this.kylenhdieudong();
        }
        else if (e.itemData.id == "IN_LENH_DIEU_DONG") {
            this.inlenhdieudong();
        }
        else if (e.itemData.id == "GUI_BB_GIAO_HANG") {
            this.guibbgiaohang(null);
        }
        else if (e.itemData.id == "IN_BB_GIAO_HANG") {
            this.inbbgiaohang();
        }
    };
    /* Gửi BB giao hàng */
    IndexComponent.prototype.guibbgiaohang = function (data) {
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
        if (check && (this.selectedItems.length > 0 || data)) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.vatService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        loaiHoaDon: _this.loaiHoaDon
                    };
                    _this.bsModalSignRef = _this.modalService.show(_send_report_delivery_send_report_delivery_component__WEBPACK_IMPORTED_MODULE_12__["SendReportDeliveryComponent"], {
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
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_delivery_exported, 'error');
        }
    };
    /* In BB giao hàng */
    IndexComponent.prototype.inbbgiaohang = function () {
        if (this.selectedItems.length > 0) {
            var initialState = {
                items: this.selectedItems,
            };
            this.bsModalImportRef = this.modalImportService.show(_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_13__["ViewDeliveryComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-lg full-width full-height',
                initialState: initialState
            });
            var subModal_3 = this.modalImportService.onHide.subscribe(function () {
                subModal_3.unsubscribe();
            });
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
        if (check && (this.selectedItems.length > 0 || data)) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.vatService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        loaiHoaDon: _this.loaiHoaDon
                    };
                    _this.bsModalSignRef = _this.modalService.show(_send_list_email_send_list_email_component__WEBPACK_IMPORTED_MODULE_10__["SendListEmailComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_4 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(_this.paramSearch);
                            subModal_4.unsubscribe();
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
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Vui lòng chọn hóa đơn', 'error');
        }
    };
    IndexComponent.prototype.convertDDMMYYY = function (val) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(val, 'YYYY-MM-DD').format('DD/MM/YYYY');
    };
    IndexComponent.prototype.ngOnDestroy = function () {
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content_invoice);
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
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource ? dataSource.items().length : 0;
        }
    };
    IndexComponent.prototype.copy = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, row, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        sub = this.vatService.show(row.id).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.invoice) {
                                    rs.data.invoice.id = null;
                                    rs.data.invoice.origin_id = null;
                                    rs.data.invoice.adjustment_type = '1';
                                    rs.data.invoice.adjustment_object = null;
                                    rs.data.invoice.adjustment_form = null;
                                    rs.data.invoice.refuse_reason = null;
                                    rs.data.invoice.destroy_reason = null;
                                    rs.data.invoice.invoice_number = null;
                                    rs.data.invoice.invoice_date = null;
                                    rs.data.invoice.approve_status = null;
                                    rs.data.invoice.status = rs.data.invoice.status == 'DA_XUAT' ? 'GHI_TAM' : rs.data.invoice.status;
                                    rs.data.invoice.updated_at = null;
                                    rs.data.invoice.user_id = null;
                                    rs.data.invoice.van_id = null;
                                    rs.data.invoice.invoice_order = null;
                                    rs.data.invoice.status_order = null;
                                    rs.data.invoice.doc_relate_date = null;
                                    rs.data.invoice.doc_relate_symbol = null;
                                    rs.data.invoice.note_view_on_invoice = null;
                                    rs.data.invoice.send_department_status = null;
                                    rs.data.invoice.extend_json_invoice = null;
                                    rs.data.invoice.is_outside_process = false;
                                    rs.data.invoice.other_id = null;
                                    rs.data.invoice.verify_code = null;
                                    rs.data.invoice.time_print_conversion = null;
                                    if (rs.data.invoice.invoice_options && rs.data.invoice.invoice_options.length > 0) {
                                        rs.data.invoice.invoice_options.forEach(function (item) {
                                            delete item['id'];
                                            delete item['invoice_id'];
                                        });
                                    }
                                    _this.vatService.data = rs.data.invoice;
                                    _this.vatService.isCopy = true;
                                }
                                if (_this.loaiHoaDon == "03XKNB") {
                                    _this.router.navigate(['system/transport-invoice/create']);
                                }
                                else {
                                    _this.router.navigate(['system/agent-invoice/create']);
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"])
    ], IndexComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "expandMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_16__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_16__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/internal-transport/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/internal-transport/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_18__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/invoice/invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/invoice/invoice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <!-- phần form thông tin -->\r\n    <transport-form-invoice\r\n      [dataSource]=\"dataSource\" \r\n      [invoice_products]=\"invoice_products\" \r\n      [formatter]=\"formatter\"\r\n      [frmData]=\"frmData\"\r\n      [wavehourses] = \"wavehourses\"\r\n      [isTT78] = \"isTT78\"\r\n      [infoDangKy] = \"infoDangKy\"\r\n      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\"\r\n      [_oTemplateTT78] = \"_oTemplateTT78\"\r\n      (onFormChange)=\"getDataInChildForm($event)\"\r\n      (onTemplateChange)=\"onTemplateChange($event)\"\r\n      [extentionGrid]=\"extentionGrid\"\r\n      [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\"\r\n    ></transport-form-invoice>\r\n  \r\n    <!-- table product --> \r\n    <transport-product-grip\r\n      #child\r\n      [dataSource]=\"dataSource\" \r\n      [invoice_products]=\"invoice_products\" \r\n      [formDataInInvoice]=\"frmData\" \r\n      [formatter]=\"formatter\"\r\n      [isPhieuXuatKhoNB]=\"isPhieuXuatKhoNB\"\r\n      [isTT78] = \"isTT78\"\r\n      [_oTemplateTT78] = \"_oTemplateTT78\"\r\n      (importExcel)=\"fillDataToForm($event)\"\r\n      [extentionGrid]=\"extentionGrid\"\r\n    ></transport-product-grip>\r\n    \r\n    <div  class=\"table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.thanh_tien, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-2\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item cssClass=\"vat amount-after-vat-table-footer\" dataField=\"amount_after_vat\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.tong_tien, disabled: true}\">\r\n                <dxo-label [visible]=\"false\"></dxo-label>\r\n              </dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"table-footer-3\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item cssClass=\"vat number_real_import-table-footer\" dataField=\"number_real_import\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.so_luong, disabled: true}\">\r\n                <dxo-label [visible]=\"false\"></dxo-label>\r\n              </dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"table-footer-4\">\r\n            <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item cssClass=\"vat number_real_export-table-footer\" dataField=\"number_real_export\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.so_luong, disabled: true}\">\r\n                  <dxo-label [visible]=\"false\"></dxo-label>\r\n                </dxi-item>\r\n              </dxi-item>\r\n            </dx-form>\r\n          </div>\r\n    </div>\r\n  \r\n    <!-- vùng chọn file -->\r\n    <div class=\"row after-table\">\r\n      <div class=\"col-md-5\">\r\n        <file-upload-multiple [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\"></file-upload-multiple>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{_translate.CONTROLL.LABEL.on_currency_amount }}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box \r\n                [(value)]=\"frmData.on_currency_amount\"\r\n                format=\"0,###\"\r\n                [disabled]=\"!frmData.auto_value\"\r\n                (onValueChanged)=\"onNumberChange()\"\r\n                (onKeyDown)=\"keyDown($event)\"\r\n              ></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{_translate.CONTROLL.LABEL.amount }}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box \r\n                [(value)]=\"frmData.amount\"\r\n                [format]=\"formatter.thanh_tien\"\r\n                [disabled]=\"!frmData.auto_value\"\r\n                (onValueChanged)=\"onNumberChange()\"\r\n                (onKeyDown)=\"keyDown($event)\"\r\n              ></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{_translate.CONTROLL.LABEL.amount_after_vat }}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box \r\n                [(value)]=\"frmData.total_payment\"\r\n                [format]=\"formatter.tong_tien\"\r\n                [disabled]=\"!frmData.auto_value\"\r\n                (onValueChanged)=\"totalPaymentChange($event)\"\r\n                (onKeyDown)=\"keyDown($event)\"\r\n              ></dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"vat total-payment-in-word\">\r\n            <div class=\"dx-field\">\r\n              <div class=\"dx-field-label\">{{_translate.CONTROLL.LABEL.total_payment_in_word }}</div>\r\n              <div class=\"dx-field-value\">\r\n                <dx-text-box \r\n                  [(value)]=\"frmData.total_payment_in_word\"\r\n                  [disabled]=\"!frmData.auto_value\"\r\n                ></dx-text-box>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước PXK -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{_translate.CONTROLL.BUTTON.preview_internal_transport }}\" type=\"default\"></dx-button>\r\n          <!-- Xem PXK -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{_translate.CONTROLL.BUTTON.view_internal_transport }}\" type=\"default\"></dx-button>\r\n          <!-- In chuyển đổi PXK -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"inChuyenDoi()\" [(icon)]=\"this._translate.ICONS.print\"\r\n          [text]=\"inChuyenDoiText()\" type=\"default\"></dx-button>\r\n          <!-- In lệnh điều động -->\r\n          <dx-button disableDoubleClick *ngIf=\"configs.system_parameter.digitally_sign_the_delivery && isPhieuXuatKhoNB\" (click)=\"inlenhdieudong()\" [(icon)]=\"this._translate.ICONS.print\" text=\"{{_translate.CONTROLL.BUTTON.print_maneuver_command }}\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Thủ kho xuất ký (đang chờ biến cấu hình để bắt ràng buộc nếu biến đó là true thì k hiện nút này)-->\r\n          <dx-button disableDoubleClick *ngIf=\"isPhieuXuatKhoNB && isShowThuKhoXuatKy\" (click)=\"thukhoxuatky()\" [(icon)]=\"this._translate.ICONS.pencil\" text=\"{{_translate.CONTROLL.BUTTON.warehouse_keeper_sign }}\" type=\"default\"></dx-button>\r\n          <!-- Hủy lệnh điều động -->\r\n          <dx-button disableDoubleClick *ngIf=\"isShowKyLenhDieuDong && isShowHuyLenhDD && isPhieuXuatKhoNB\" (click)=\"huylenhdieudong()\" [(icon)]=\"this._translate.ICONS.delete\" text=\"{{_translate.CONTROLL.BUTTON.cancel_maneuver_command }}\" type=\"default\"></dx-button>\r\n          <!-- Ký lệnh điều động -->\r\n          <dx-button disableDoubleClick *ngIf=\"isShowKyLenhDieuDong && isPhieuXuatKhoNB\" (click)=\"submitlenhdieudong()\" [(icon)]=\"this._translate.ICONS.pencil\" text=\"{{_translate.CONTROLL.BUTTON.sign_maneuver_command }}\" type=\"default\"></dx-button>\r\n          <!-- Xuất phiếu xuất kho -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet && isAccessExportInv\" appScrollToInvalid text=\"{{_translate.CONTROLL.BUTTON.export_internal_transport }}\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"eSubmit('XUAT')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet\" appScrollToInvalid text=\"{{_translate.CONTROLL.BUTTON.save_temporary }}\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"eSubmit('GHI_TAM')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- Tạo mới -->\r\n          <dx-button disableDoubleClick *ngIf=\"!showTraLai && !showKyDuyet\" text=\"{{_translate.CONTROLL.BUTTON.create_new }}\" icon=\"assets\\img\\icons\\LapHD.png\" (click)=\"handleAddNew()\" type=\"default\"></dx-button>\r\n          <!-- Trả lại -->\r\n          <dx-button disableDoubleClick *ngIf=\"showTraLai\" text=\"{{_translate.CONTROLL.BUTTON.return }}\" icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"traLai()\" type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && showKyDuyet\" text=\"Ký duyệt\" icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"eSubmit('XUAT')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- Quay lại -->\r\n          <dx-button appBackButton type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" text=\"{{_translate.CONTROLL.BUTTON.close }}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  </form>\r\n\r\n  <ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/invoice/invoice.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/invoice/invoice.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}::ng-deep .dx-dialog-message{line-height:25px}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.number_real_export-table-footer input,::ng-deep .vat.number_real_import-table-footer input,::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:150px;float:right}.table-footer .table-footer-2{display:inline-block;width:108px;margin-right:2px;float:right}.table-footer .table-footer-3{display:inline-block;width:100px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:98px;margin-right:2px;float:right}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/invoice/invoice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/invoice/invoice.component.ts ***!
  \************************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-grip/product-grip.component */ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.ts");
/* harmony import */ var _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-invoice/form-invoice.component */ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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






















var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, router, modalService, vatService, socketService, authService, cdRef, translate, productsService, confirmService, configsService, spinner, vPreviewInvService, customeModalService, invoiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.productsService = productsService;
        this.confirmService = confirmService;
        this.configsService = configsService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.invoiceService = invoiceService;
        // buttonBehavior = {
        //   xuat: false,
        //   ghiTam: false
        // };
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
        this.frmTraLai = {
            reason: ""
        };
        this.ttDaXuatHoaDon = false; //Trạng thái đã xuất hóa đơn hay chưa
        this.showTraLai = false;
        this.showKyDuyet = false;
        this.isPhieuXuatKhoNB = false;
        this.isAccessExportInv = false;
        this.isShowHuyLenhDD = false;
        this.formatter = {};
        this.select = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        //danh sách data trong file
        this.fileData = [];
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this.isCheckLenhDieuDong = false;
        this._oTemplateTT78 = {};
        this.isTT78 = false;
        this.extentionGrid = {};
        //sự kiện form
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte)
                currency_code = "VND";
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(Math.abs(e.value), _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
            _this.frmData.total_payment_in_word = _this.invoiceService.docTienAm(e.value, tien_chu, _this.configs, currency_code);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'KHONG_DU_DK_CAP_MA')
            || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'DA_GUI_CQT' && this.frmData.is_invoice_with_code)) {
            this.disablleScreen(_core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat);
            this.cdRef.detectChanges();
        }
        else if (this.isShowHuyLenhDD)
            this.disablleScreen('');
        this.getDataToCompare();
    };
    InvoiceComponent.prototype.disablleScreen = function (trangthaiHD) {
        this.formInvoice.readonlyAllForm(trangthaiHD);
        this.productGrip.ttDaXuatHoaDon = true;
        if (trangthaiHD == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat)
            this.ttDaXuatHoaDon = true;
    };
    InvoiceComponent.prototype.enableScreen = function () {
        this.formInvoice.allowEditAllForm();
        this.productGrip.ttDaXuatHoaDon = false;
    };
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.invoice_number)
            status = 'THEM_MOI';
        if (this.frmData.id && !this.frmData.invoice_number)
            status = 'GHI_TAM';
        if (this.frmData.id && this.frmData.invoice_number)
            status = 'GIU_SO';
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status == 'THEM_MOI') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTam(this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss'); //moment(rs.data.invoice_date).format('DD/MM/YYYY');
                        _this.frmData.id = rs.data.id;
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.ghiTamTT78(this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss'); //moment(rs.data.invoice_date).format('DD/MM/YYYY');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else if (status == 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    //Library.hideloading();
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    //Library.hideloading();
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status == 'GIU_SO') {
            if (!this.isTT78) {
                var sub_5 = this.vatService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
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
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_6.unsubscribe();
                });
            }
        }
    };
    InvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
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
    InvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
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
            if (rs.status == 'success') {
                _this.disablleScreen(_core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat);
                _this.fileData = _this.frmData.invoice_files;
                _this.isExportInvoice = true;
                _this.frmData.status = rs.data.status;
                _this.frmData.warehouse_keeper_signed = rs.data.warehouse_keeper_signed;
                _this.getDataToCompare();
                if (_this.isRoleThuKhoXuatKy && !_this.frmData.warehouse_keeper_signed)
                    _this.isShowThuKhoXuatKy = true;
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.carrier_mobile) != "") {
                    var data = [];
                    var inv = {
                        id: _this.frmData.id,
                        carrier_email: _this.frmData.carrier_email,
                        carrier_mobile: _this.frmData.carrier_mobile
                    };
                    data.push(inv);
                    var subDelivery_1 = _this.vatService.sendReportDelivery(data).subscribe(function (result) {
                        if (result.status == 'success') {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(result.message, 'error');
                        }
                    }, function (err) { }, function () {
                        subDelivery_1.unsubscribe();
                    });
                }
                else
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.queryParams['status'] == 'return') {
            this.showTraLai = true;
        }
        if (this.route.snapshot.queryParams['status'] == 'sign') {
            this.showKyDuyet = true;
        }
        var isViewTT32 = false;
        if (this.route.snapshot.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        //kết nối websocket
        this.connectWebsocket();
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            // put data DM for select
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            var currentUser = _this.authService.getCurrentUser();
            var listpermissions = currentUser.user.permissions.split(',');
            var _obj = listpermissions.filter(function (p) { return p == "phe_duyet"; });
            if (_obj.length > 0) {
                _this.isAccessExportInv = true;
            }
            else
                _this.isAccessExportInv = false;
            var oThuKhoXuat = listpermissions.filter(function (p) { return p == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].permissions.ThuKhoXuatKy; });
            if (oThuKhoXuat.length > 0)
                _this.isRoleThuKhoXuatKy = true;
            else
                _this.isRoleThuKhoXuatKy = false;
            var oKyLenhDieuDong = listpermissions.filter(function (p) { return p == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].permissions.NguoiTaoKy || p == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].permissions.PhuTrachDonViKy; });
            if (oKyLenhDieuDong.length > 0 && _this.configs.system_parameter.digitally_sign_the_delivery)
                _this.isShowKyLenhDieuDong = true;
            var loaiHoaDon = data.type;
            if (loaiHoaDon == "03XKNB") {
                _this.isPhieuXuatKhoNB = true;
                _this.strTextHDKT = _this._translate.CONTROLL.LABEL.delivery_order_number;
                _this.strtextHDKTNgay = _this._translate.CONTROLL.LABEL.date;
            }
            else {
                _this.strTextHDKT = _this._translate.CONTROLL.LABEL.deconomic_contract_number;
                _this.strtextHDKTNgay = "Hợp đồng kinh tế ngày";
                _this.isPhieuXuatKhoNB = false;
            }
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN")
                    _this.isTT78 = true;
            }
            if (_this.isTT78 == true && isViewTT32)
                _this.isTT78 = false;
            var isEdit = false;
            if (data.init[2] == true)
                isEdit = true;
            var invoice;
            if (_this.isTT78) {
                var temptTT78 = [];
                if (isEdit) {
                    temptTT78 = data.init[3];
                    _this.wavehourses = data.init[4];
                    invoice = data.init[1];
                }
                else {
                    temptTT78 = data.init[1];
                    _this.wavehourses = data.init[3];
                }
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    if (invoice && Number.parseInt(invoice.invoice_number) > 0) {
                        if (invoice.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == invoice.is_invoice_with_code; });
                        }
                    }
                }
            }
            else {
                _this.select.invoice_releases = data.init[0];
                if (isEdit) {
                    _this.wavehourses = data.init[4];
                    invoice = data.init[3];
                }
                else {
                    _this.wavehourses = data.init[3];
                }
            }
            if (isEdit || _this.vatService.isCopy) {
                if (_this.vatService.isCopy) {
                    _this.khoiTaoKhiSua(_this.vatService.data);
                }
                else {
                    _this.khoiTaoKhiSua(invoice);
                }
            }
            else {
                _this.khoiTaoKhiThemMoi();
            }
        });
        this.getDataToCompare();
    };
    InvoiceComponent.prototype.getDataToCompare = function () {
        var _this = this;
        this.handleFormData();
        this.valueChange = JSON.stringify(this.frmData);
        this.invoice_products.load().then(function (dataSource) {
            _this.jsonProductFirst = JSON.stringify(dataSource);
        });
    };
    InvoiceComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        /* So sánh thông tin trên form */
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        /* So sánh thông tin hàng hóa */
        var invoicePBefore = JSON.parse(this.jsonProductFirst);
        var invoicePAfter;
        this.invoice_products.load().then(function (dataSource) {
            invoicePAfter = JSON.parse(JSON.stringify(dataSource));
        });
        var invoice = lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"](dataBefore, dataAfter);
        var product = lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"](invoicePBefore, invoicePAfter);
        if (invoice && product)
            return true;
        else
            return false;
    };
    InvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName == "efy_Sign") {
                // Helper.dowloadFile('test.xml', 'xml', data.Data.Content);
                if (data.Data.Name == 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.xuLiApiKhiXuat();
                }
                else {
                    _this.frmData.invoice_files.forEach(function (item) {
                        if (item.file_name == data.Data.Name) {
                            item.file_content = data.Data.Content;
                        }
                    });
                    _this.tempKiFile++;
                    if (_this.tempKiFile == _this.frmData.invoice_files.length) {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        var _this = this;
        //khởi tạo mới lưới
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: "id",
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        if (this.select.payment_method_names) {
            this.select.payment_method_names.some(function (item) {
                _this.frmData.payment_method_name = item.code;
                var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == item.code; })[0];
                if (_obj) {
                    _this.frmData.payment_method_view_name = _obj.name;
                }
                else {
                    _this.frmData.payment_method_name = "TM/CK";
                    _this.frmData.payment_method_view_name = "TMCK";
                }
            });
        }
        else {
            this.frmData.payment_method_name = "TM/CK";
            this.frmData.payment_method_view_name = "TMCK";
        }
        //tạo mới đối tượng file
        this.fileData = [];
        //set value default
        if (!this.isTT78) {
            if (this.select.invoice_releases.length) {
                this.select.invoice_releases = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0; });
                this.frmData.invoice_release_id = this.select.invoice_releases[0].value;
                this.frmData.template_id = this.select.invoice_releases[0].template_id;
                this.is_multi_vat = this.select.invoice_releases[0].is_multi_vat;
            }
        }
        else {
            if (this.select.templatesTT78.length) {
                this.frmData.template_id = this.select.templatesTT78[0].value;
                this.frmData.invoice_series = this.select.templatesTT78[0].invoice_series;
                this.frmData.template_code = this.select.templatesTT78[0].template_code;
                for (var key in this.select.templatesTT78[0]) {
                    if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                        this._oTemplateTT78[key] = this.select.templatesTT78[0][key];
                    }
                }
                this.is_multi_vat = this.select.templatesTT78[0].is_multi_vat;
                this.invoiceTemplateTT78 = this.select.templatesTT78[0];
            }
        }
        this.frmData.currency_code = 'VND';
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        //khởi tạo lưới từ dữ liệu sửa
        var _lst = this.frmData.setInvoice_products_data(data.invoice_products);
        if (_lst) {
            _lst.forEach(function (item) {
                if (item.product_name && item.unit_name) {
                    var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                    if (!obj1) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.unit_code) == "")
                            item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._convertToViKdau(item.unit_name);
                        var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                        if (oDuplicate)
                            item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].addtionalUnitCode();
                    }
                    else if (!item.unit_code || (item.unit_code && item.unit_code != obj1.code))
                        item.unit_code = obj1.code;
                }
            });
        }
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: "id",
            data: _lst
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        //mẫu nhiều loại thuế suất ko
        if (!this.isTT78) {
            this.select.invoice_releases.some(function (item) {
                if (item.value == data.invoice_release_id) {
                    _this.is_multi_vat = item.is_multi_vat;
                    return true;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.invoiceTemplateTT78 = item;
                    _this.is_multi_vat = item.is_multi_vat;
                    return true;
                }
            });
        }
        //khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        // this.is_multi_vat = data.is_multi_vat;
        //lấy file
        this.fileData = [];
        if (this.frmData.from_warehouse) {
            var _obj = this.wavehourses.filter(function (p) { return p.id === _this.frmData.from_warehouse; })[0];
            if (!_obj) {
                var _objPush = {
                    id: this.frmData.from_warehouse,
                    name: this.frmData.from_warehouse_name,
                };
                this.wavehourses.push(_objPush);
            }
        }
        if (this.frmData.to_warehouse) {
            var _obj = this.wavehourses.filter(function (p) { return p.id === _this.frmData.to_warehouse; })[0];
            if (!_obj) {
                var _objPush = {
                    id: this.frmData.to_warehouse,
                    name: this.frmData.to_warehouse_name,
                };
                this.wavehourses.push(_objPush);
            }
        }
        if (data.maneuver_command_files && (data.maneuver_command_files.charge_unit_sign_status || data.maneuver_command_files.director_sign_status || data.maneuver_command_files.proponent_sign_status)) {
            this.isShowHuyLenhDD = true;
        }
        if (this.frmData.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat && !this.frmData.warehouse_keeper_signed && this.isRoleThuKhoXuatKy)
            this.isShowThuKhoXuatKy = true;
        //cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    /** Tương tác giữa các component */
    InvoiceComponent.prototype.onTemplateChange = function (e) {
        this.is_multi_vat = e;
    };
    InvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
    };
    /*  */
    InvoiceComponent.prototype.fillDataToForm = function (e) {
        this.frmData.customer_name = e[0];
        this.frmData.buyer_tax_code = e[1];
        this.frmData.buyer_address = e[2];
    };
    InvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        this.frmTraLai.reason = e.lido;
    };
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoney(this.frmData);
    };
    InvoiceComponent.prototype.updateSomeTotalInput = function (e) {
    };
    InvoiceComponent.prototype.fillAutoInput = function (e) {
        //this.frmData.auto_value = e;
    };
    //Lấy data khi chọn file đính kèm bảng kê
    InvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
    /** Kết thúc */
    InvoiceComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    InvoiceComponent.prototype.getFormatterToNumber = function (formatter) {
        var s1 = formatter.replace("0,###", "");
        if (s1 == "") {
            return 0;
        }
        else {
            var s2 = s1.replace(".", "");
            return s2.split("").length;
        }
    };
    InvoiceComponent.prototype.formatDecimalColumn = function (number) {
        if (number == 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    InvoiceComponent.prototype.inChuyenDoiText = function () {
        if (this.frmData.time_print_conversion > 0) {
            return this._translate.CONTROLL.BUTTON.view_conversion;
        }
        else {
            return this._translate.CONTROLL.BUTTON.print_conversion;
        }
    };
    InvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(true))
                return;
            var data = _this.vatService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    //#region "Lệnh điều động"
    /* Ký lệnh điều động */
    InvoiceComponent.prototype.submitlenhdieudong = function () {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        if (!this.isCheckLenhDieuDong)
            this.resultCompareData = this.checkDataFormChange(this.valueChange, this.frmData);
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(false))
                return;
            if (_this.isCheckLenhDieuDong) {
                _this.kylenhdieudong();
                _this.isCheckLenhDieuDong = false;
            }
            else {
                _this.Reviewlenhdieudong();
            }
        }, 300);
    };
    /* Thực hiện ký lệnh điều động */
    InvoiceComponent.prototype.kylenhdieudong = function () {
        var _this = this;
        var tempFrmData = this.copyFrmData();
        if (this.frmData.id) {
            var ids_1 = [];
            ids_1.push(this.frmData.id);
            if (!this.resultCompareData) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                if (!this.isTT78) {
                    var sub_7 = this.vatService.edit(this.frmData.id, tempFrmData).subscribe(function (rs) {
                        if (rs.status == 'success') {
                            _this.frmData.id = rs.data.id;
                            _this.getDataToCompare();
                            var sub_8 = _this.vatService.kylenhdieudong(ids_1).subscribe(function (rs) {
                                if (rs.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                                    _this.isShowHuyLenhDD = true;
                                    _this.disablleScreen('');
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                                }
                            });
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) { }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                        sub_7.unsubscribe();
                    });
                }
                else {
                    var sub_9 = this.vatService.editTT78(this.frmData.id, tempFrmData).subscribe(function (rs) {
                        if (rs.status == 'success') {
                            _this.frmData.id = rs.data.id;
                            _this.getDataToCompare();
                            var sub_10 = _this.vatService.kylenhdieudong(ids_1).subscribe(function (rs) {
                                if (rs.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                                    _this.isShowHuyLenhDD = true;
                                    _this.disablleScreen('');
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                                }
                            });
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) { }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                        sub_9.unsubscribe();
                    });
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var sub_11 = this.vatService.kylenhdieudong(ids_1).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                        _this.isShowHuyLenhDD = true;
                        _this.disablleScreen('');
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
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_12 = this.vatService.ghiTam(tempFrmData).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        var ids = [];
                        ids.push(_this.frmData.id);
                        var sub_13 = _this.vatService.kylenhdieudong(ids).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                                _this.isShowHuyLenhDD = true;
                                _this.disablleScreen('');
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                            }
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_12.unsubscribe();
                });
            }
            else {
                var sub_14 = this.vatService.ghiTamTT78(tempFrmData).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        var ids = [];
                        ids.push(_this.frmData.id);
                        var sub_15 = _this.vatService.kylenhdieudong(ids).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_the_dispatch_success, 'success');
                                _this.isShowHuyLenhDD = true;
                                _this.disablleScreen('');
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                            }
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_14.unsubscribe();
                });
            }
        }
    };
    /**
     * Copy object
     */
    InvoiceComponent.prototype.copyFrmData = function () {
        var frmTemp = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](this.frmData);
        if (frmTemp.invoice_options && frmTemp.invoice_options.length > 0) {
            frmTemp.invoice_options = frmTemp.invoice_options.map(function (item) {
                return {
                    invoice_id: item.invoice_id ? item.invoice_id : null,
                    code: item.code ? item.code : null,
                    name: item.name ? item.name : null,
                    value: item.value ? item.value : null,
                    data_type: item.data_type ? item.data_type : null,
                };
            });
        }
        return frmTemp;
    };
    /* Xem lại lệnh điều động trước khi xuất */
    InvoiceComponent.prototype.Reviewlenhdieudong = function () {
        var _this = this;
        this.handleFormData();
        var trang_thai = '';
        if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        }
        else {
            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
        }
        var du_lieu;
        if (!this.frmData.id || !this.isShowHuyLenhDD) {
            du_lieu = this.vatService.taodulieuXemTruocLenhDD(this.frmData);
        }
        else {
            du_lieu = this.vatService.taodulieuXemLenhDD([this.frmData.id]);
        }
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.kyPhieuXuaKho;
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
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_19__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].actionHander.DongY) {
                _this.isCheckLenhDieuDong = true;
                _this.submitlenhdieudong();
            }
            subModal.unsubscribe();
        });
        // this.handleFormData();
        // this.windowPreviewBeforeSubmit = window.open("", "", `width=${screen.availWidth}, height=${screen.availHeight}`);
        // this.windowPreviewBeforeSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
        // this.windowPreviewBeforeSubmit.blur();
        // let timer = setInterval(() => {
        //   if (this.windowPreviewBeforeSubmit.closed) {
        //     clearInterval(timer);
        //     let isCheck = Helper.getCookie('CK_LDD');
        //     this.windowPreviewBeforeSubmit = undefined;
        //     if (isCheck == "CHECKED") {
        //       document.cookie = "CK_LDD=; path=/";
        //       this.isCheckLenhDieuDong = true;
        //       this.submitlenhdieudong();
        //     }
        //   }
        // }, 500);
        // Library.showloading();
        // if (!this.frmData.id || !this.isShowHuyLenhDD) {
        //   let sub = this.vatService.xemtruoclenhdieudong(this.frmData).subscribe(rs => {
        //     if (rs.status == 'success') {
        //       let pdf_file = rs.data.file_content;
        //       let objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
        //       this.windowPreviewBeforeSubmit.document.write(`
        //       <!DOCTYPE html>
        //       <html lang="en">
        //       <head>
        //         <meta charset="UTF-8">
        //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Document</title>
        //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        //         <style type="text/css" scoped>
        //         .nhap-nhay {
        //           background: red;
        //           padding: 0.5px 9px;
        //           margin-right: 5px;
        //           border-radius: 57%;
        //           -webkit-animation: flicker 1s infinite;
        //         }
        //         .ht-xuat{
        //           width: 20%;
        //           height: 100%;
        //           background: #ffffff;
        //           box-shadow: 0px 0px 8px 0px #888888;
        //         }
        //         .ht-xuat > .right-nav{
        //           display:flex;
        //           justify-content: space-between;
        //           align-items: center;
        //           border-bottom: 1px solid #d5d5d5;
        //           padding:20px;
        //         }
        //         @-webkit-keyframes flicker
        //         {
        //         0% {opacity:0;}
        //         9% {opacity:0;}
        //         10% {opacity:.5;}
        //         13% {opacity:0;}
        //         20% {opacity:.5;}
        //         25% {opacity:1;}
        //         }
        //         .example {
        //           padding: 20px;
        //         }
        //         input[type=button] {
        //           padding: 5px 10px;
        //           margin: 10px 5px;
        //           border-radius: 5px;
        //           cursor: pointer;
        //           background: #ddd;
        //           border: 1px solid #ccc;
        //         }
        //         input[type=button]:hover {
        //           background: #ccc;
        //         }
        //         .confirm {
        //           display: none;
        //         }
        //         .confirm > div:first-of-type {
        //           position: fixed;
        //           width: 100%;
        //           height: 100%;
        //           background: rgba(0, 0, 0, 0.5);
        //           top: 0px;
        //           left: 0px;
        //         }
        //         .confirm > div:last-of-type {
        //           padding: 10px 20px;
        //           background: white;
        //           position: absolute;
        //           width: auto;
        //           height: auto;
        //           left: 50%;
        //           top: 50%;
        //           transform: translate(-50%, -50%);
        //           border-radius: 5px;
        //           border: 1px solid #333;
        //         }
        //         .confirm > div:last-of-type div:first-of-type {
        //           min-width: 150px;
        //           padding: 10px;
        //         }
        //         .confirm > div:last-of-type div:last-of-type {
        //           text-align: right;
        //         }
        //       </style>
        //       </head>
        //       <body>
        //       <div style="margin-left: 50px;">
        //       <h3 style="color: red; text-align: center;">BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ</h3>
        //       <p style="font-weight: 600;"><span class="nhap-nhay"></span><span style="font-size: 17px;">Lưu ý: 
        //       </span>Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.</>
        //     </div>
        //     <div style="display: flex; height:84vh; justify-content: center;">
        //       <iframe style="" width="70%" height="100%" src="${objectUrl}"></iframe>
        //       <div class="ht-xuat">
        //         <div class="right-nav">
        //          <button style =" background:#007BFF;color:#ffffff; padding: 10px 50px; border: none ; outline:none; border-radius: 30px"> <a href="javascript:void(0)" style="text-decoration: none; color:#ffffff; font-weight: bold; padding-right:10px" onclick="setConfirmInvoice()">Đồng ý </a> <i class="fa fa-angle-right"></i></button>
        //           <a href="javascript:void(0)" style="text-decoration: none; color: gray" onclick="closeWin()"><i class="fa fa-times" style="font-size:25px"></i></a>
        //         </div>
        //         <div style="display: flex; flex-direction: column; padding:10px;">
        //           <div style="display: flex; justify-content: space-between; align-items: center;padding: 10px; border-bottom: 1px solid #d5d5d5">
        //             <p style="font-weight: 600;">Trạng thái : </p>
        //             <p style="color: orange;font-weight: 600;">Xuất và ký</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div class="confirm">
        //         <div></div>
        //         <div>
        //           <div id="confirmMessage">Confirm text</div>
        //           <div>
        //             <input id="confirmYes" type="button" value="Đồng ý" />
        //             <input id="confirmNo" type="button" value="Quay lại" />
        //           </div>
        //         </div>
        //     </div>
        //     <script type="text/javascript">
        //     const ui = {
        //       confirm: async (message) => createConfirm(message)
        //     }
        //     const createConfirm = (message) => {
        //       return new Promise((complete, failed)=>{
        //         $('#confirmMessage').text(message)
        //         $('#confirmYes').off('click');
        //         $('#confirmNo').off('click');
        //         $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
        //         $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
        //         $('.confirm').show();
        //       });
        //     }
        //     const setConfirmInvoice = async () => {
        //       const confirm = await ui.confirm(" ${this._translate.CONFIRM.confirm_sign_delivery} ");
        //       if(confirm){
        //         document.cookie = "CK_LDD=CHECKED; path=/";
        //         window.close();
        //       } else{
        //       }
        //     } 
        //       function closeWin(){
        //         window.close();
        //       }
        //     </script>
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        //       </body>
        //       </html>
        //     `);
        //       this.windowPreviewBeforeSubmit.focus();
        //     } else {
        //       this.windowPreviewBeforeSubmit.close();
        //       Library.notify(rs.message, 'error');
        //     }
        //   }, err => { }, () => {
        //     Library.hideloading();
        //     sub.unsubscribe();
        //   });
        // }
        // else {
        //   let ids = [];
        //   ids.push(this.frmData.id)
        //   let sub = this.vatService.xemlenhdieudong(ids).subscribe(rs => {
        //     if (rs.status == 'success') {
        //       let pdf_file = rs.data.file_content;
        //       let objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
        //       this.windowPreviewBeforeSubmit.document.write(`
        //       <!DOCTYPE html>
        //       <html lang="en">
        //       <head>
        //         <meta charset="UTF-8">
        //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Document</title>
        //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        //         <style type="text/css" scoped>
        //         .nhap-nhay {
        //           background: red;
        //           padding: 0.5px 9px;
        //           margin-right: 5px;
        //           border-radius: 57%;
        //           -webkit-animation: flicker 1s infinite;
        //         }
        //         .ht-xuat{
        //           width: 20%;
        //           height: 100%;
        //           background: #ffffff;
        //           box-shadow: 0px 0px 8px 0px #888888;
        //         }
        //         .ht-xuat > .right-nav{
        //           display:flex;
        //           justify-content: space-between;
        //           align-items: center;
        //           border-bottom: 1px solid #d5d5d5;
        //           padding:20px;
        //         }
        //         @-webkit-keyframes flicker
        //         {
        //         0% {opacity:0;}
        //         9% {opacity:0;}
        //         10% {opacity:.5;}
        //         13% {opacity:0;}
        //         20% {opacity:.5;}
        //         25% {opacity:1;}
        //         }
        //         .example {
        //           padding: 20px;
        //         }
        //         input[type=button] {
        //           padding: 5px 10px;
        //           margin: 10px 5px;
        //           border-radius: 5px;
        //           cursor: pointer;
        //           background: #ddd;
        //           border: 1px solid #ccc;
        //         }
        //         input[type=button]:hover {
        //           background: #ccc;
        //         }
        //         .confirm {
        //           display: none;
        //         }
        //         .confirm > div:first-of-type {
        //           position: fixed;
        //           width: 100%;
        //           height: 100%;
        //           background: rgba(0, 0, 0, 0.5);
        //           top: 0px;
        //           left: 0px;
        //         }
        //         .confirm > div:last-of-type {
        //           padding: 10px 20px;
        //           background: white;
        //           position: absolute;
        //           width: auto;
        //           height: auto;
        //           left: 50%;
        //           top: 50%;
        //           transform: translate(-50%, -50%);
        //           border-radius: 5px;
        //           border: 1px solid #333;
        //         }
        //         .confirm > div:last-of-type div:first-of-type {
        //           min-width: 150px;
        //           padding: 10px;
        //         }
        //         .confirm > div:last-of-type div:last-of-type {
        //           text-align: right;
        //         }
        //       </style>
        //       </head>
        //       <body>
        //       <div style="margin-left: 50px;">
        //       <h3 style="color: red; text-align: center;">BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ</h3>
        //       <p style="font-weight: 600;"><span class="nhap-nhay"></span><span style="font-size: 17px;">Lưu ý: 
        //       </span>Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.</>
        //     </div>
        //     <div style="display: flex; height:84vh; justify-content: center;">
        //       <iframe style="" width="70%" height="100%" src="${objectUrl}"></iframe>
        //       <div class="ht-xuat">
        //         <div class="right-nav">
        //          <button style =" background:#007BFF;color:#ffffff; padding: 10px 50px; border: none ; outline:none; border-radius: 30px"> <a href="javascript:void(0)" style="text-decoration: none; color:#ffffff; font-weight: bold; padding-right:10px" onclick="setConfirmInvoice()">Đồng ý </a> <i class="fa fa-angle-right"></i></button>
        //           <a href="javascript:void(0)" style="text-decoration: none; color: gray" onclick="closeWin()"><i class="fa fa-times" style="font-size:25px"></i></a>
        //         </div>
        //         <div style="display: flex; flex-direction: column; padding:10px;">
        //           <div style="display: flex; justify-content: space-between; align-items: center;padding:10px; border-bottom: 1px solid #d5d5d5">
        //             <p style=" font-weight: 600;">Ngày hóa đơn : </p>
        //             <p style="color: orange;font-weight: 600;">${moment(rs.data.invoice.invoice_date).format('DD/MM/YYYY')}</p>
        //           </div>
        //           <div style="display: flex; justify-content: space-between; align-items: center;padding: 10px; border-bottom: 1px solid #d5d5d5">
        //             <p style="font-weight: 600;">Trạng thái : </p>
        //             <p style="color: orange;font-weight: 600;">Xuất và ký</p>
        //           </div>
        //           <div style="display: flex; justify-content: space-between; align-items: center;padding:10px; border-bottom: 1px solid #d5d5d5">
        //             <p style="font-weight: 600;">Tổng tiền : </p>
        //             <p style="color: orange;font-weight: 600;">${rs.data.invoice.total_payment}</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div class="confirm">
        //         <div></div>
        //         <div>
        //           <div id="confirmMessage">Confirm text</div>
        //           <div>
        //             <input id="confirmYes" type="button" value="Đồng ý" />
        //             <input id="confirmNo" type="button" value="Quay lại" />
        //           </div>
        //         </div>
        //     </div>
        //     <script type="text/javascript">
        //     const ui = {
        //       confirm: async (message) => createConfirm(message)
        //     }
        //     const createConfirm = (message) => {
        //       return new Promise((complete, failed)=>{
        //         $('#confirmMessage').text(message)
        //         $('#confirmYes').off('click');
        //         $('#confirmNo').off('click');
        //         $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
        //         $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
        //         $('.confirm').show();
        //       });
        //     }
        //     const setConfirmInvoice = async () => {
        //       const confirm = await ui.confirm(" ${this._translate.CONFIRM.confirm_sign_delivery} ");
        //       if(confirm){
        //         document.cookie = "CK_LDD=CHECKED; path=/";
        //         window.close();
        //       } else{
        //       }
        //     } 
        //       function closeWin(){
        //         window.close();
        //       }
        //     </script>
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        //       </body>
        //       </html>
        //     `);
        //       this.windowPreviewBeforeSubmit.focus();
        //     } else {
        //       this.windowPreviewBeforeSubmit.close();
        //       Library.notify(rs.message, 'error');
        //     }
        //   }, err => { }, () => {
        //     Library.hideloading();
        //     sub.unsubscribe();
        //   });
        // }
    };
    /* In lệnh điều động */
    InvoiceComponent.prototype.inlenhdieudong = function () {
        var _this = this;
        if (!this.frmData.id || !this.isShowHuyLenhDD) {
            setTimeout(function () {
                _this.handleFormData();
                if (!_this._validForm(true))
                    return;
                var w = 1920, h = 900;
                w = window.screen.availWidth * 100 / 100;
                h = window.screen.availHeight * 93 / 100;
                var win = window.open("about:blank", "name", "width=200, height=100");
                win.document.body.innerHTML = _this._translate.NOTIFY.loading;
                win.blur();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var sub = _this.vatService.xemtruoclenhdieudong(_this.frmData).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        var pdf_file = rs.data.file_content;
                        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        win.resizeTo(screen.availWidth, screen.availHeight);
                        win.focus();
                        win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                    }
                    else {
                        win.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub.unsubscribe();
                });
            }, 300);
        }
        else {
            var ids = [];
            ids.push(this.frmData.id);
            var w_1 = 1920, h_1 = 900;
            w_1 = window.screen.availWidth * 100 / 100;
            h_1 = window.screen.availHeight * 93 / 100;
            var win_1 = window.open("about:blank", "name", "width=200, height=100");
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub_16 = this.vatService.xemlenhdieudong(ids).subscribe(function (rs) {
                if (rs.status == "success") {
                    var pdf_file = rs.data[0].file_content;
                    var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                    win_1.resizeTo(screen.availWidth, screen.availHeight);
                    win_1.focus();
                    win_1.open(objectUrl, "name", "width=" + w_1 + ", height=" + h_1);
                }
                else {
                    win_1.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_16.unsubscribe();
            });
        }
    };
    /* Hủy lệnh điều động */
    InvoiceComponent.prototype.huylenhdieudong = function () {
        var _this = this;
        var setInvoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.NOTIFY.warning_the_dispatch_success, this._translate.NOTIFY.notify);
        setInvoiceDate.then(function (dialog) {
            if (!dialog) {
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var ids = [];
                ids.push(_this.frmData.id);
                var sub_17 = _this.vatService.huylenhdieudong(ids).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.cancel_the_dispatch_success, 'success');
                        _this.isShowHuyLenhDD = false;
                        _this.enableScreen();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_17.unsubscribe();
                });
            }
        });
    };
    InvoiceComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuXemMau(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    InvoiceComponent.prototype.inChuyenDoi = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuInChuyenDoi(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    InvoiceComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_18 = this.vatService.edit(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        _this.getDataToCompare();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_18.unsubscribe();
                });
            }
            else {
                var sub_19 = this.vatService.editTT78(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        _this.getDataToCompare();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_19.unsubscribe();
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_20 = this.vatService.ghiTam(data).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        _this.getDataToCompare();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_20.unsubscribe();
                });
            }
            else {
                var sub_21 = this.vatService.ghiTamTT78(data).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.id = rs.data.id;
                        _this.getDataToCompare();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_21.unsubscribe();
                });
            }
        }
    };
    InvoiceComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        // if (this.frmData.invoice_number) {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        if (!this.isTT78) {
            var sub_22 = this.vatService.xuatChoKy(data).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.getDataToCompare();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_22.unsubscribe();
            });
        }
        else {
            var sub_23 = this.vatService.xuatChoKyTT78(data).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.getDataToCompare();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_23.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.xuatHoaDon = function (data) {
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
    InvoiceComponent.prototype.traLai = function () {
        var _this = this;
        if (this.frmTraLai.reason == undefined || this.frmTraLai.reason == "") {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.reason_return + " " + this._translate.VALIDATION.required, 'error');
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub_24 = this.vatService.traLaiHoaDon({
                id: this.frmData.id,
                reason: this.frmTraLai.reason
            }).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.router.navigate(['/system/invoice-sync']);
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.return_success, 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_24.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _isValid = true;
        // if (this.frmData.amount_vat5 < 0 || this.frmData.amount_vat10 < 0 || this.frmData.total_payment < 0) {
        //   Library.notify(this._translate.NOTIFY.discount_same_vat, 'error');
        //   return false;
        // }
        if (isOnlyCheckAm) {
            return true;
        }
        if (this.frmData.currency_code && this.frmData.currency_code != "VND" && this.frmData.currency_rate === null) {
            this.formInvoice.form.instance.getEditor('currency_rate').focus();
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        // if (!this.frmData.total_payment && this.frmData.total_payment !== 0) {
        //   Library.notify("Tổng tiền hóa đơn không được để trống", 'error');
        //   return false;
        // }
        // if (this.frmData.customer_object_code == "DOANH_NGHIEP") {
        //   if (!this.frmData.customer_name) {
        //     Library.notify(this._translate.CONTROLL.LABEL.customer_name + " " + this._translate.VALIDATION.required, 'error');
        //     this.formInvoice.form.instance.getEditor("customer_name").focus();
        //     return false;
        //   }
        //   if (!this.frmData.buyer_address) {
        //     Library.notify(this._translate.CONTROLL.LABEL.address + " " + this._translate.VALIDATION.required, 'error');
        //     this.formInvoice.form.instance.getEditor("buyer_address").focus();
        //     return false;
        //   }
        // }
        // if (this.frmData.customer_object_code == "CA_NHAN") {
        //   if (!this.frmData.buyer_name) {
        //     this.formInvoice.form.instance.getEditor("buyer_name").focus();
        //     Library.notify(this._translate.CONTROLL.LABEL.buyer_name + " " + this._translate.VALIDATION.required, 'error');
        //     return false;
        //   }
        //   if (!this.frmData.buyer_address) {
        //     this.formInvoice.form.instance.getEditor("buyer_address").focus();
        //     Library.notify(this._translate.CONTROLL.LABEL.address + " " + this._translate.VALIDATION.required, 'error');
        //     return false;
        //   }
        // }
        // if (this.frmData.customer_object_code == "KHACH_LE") {
        //   if (!this.frmData.buyer_name) {
        //     this.formInvoice.form.instance.getEditor("buyer_name").focus();
        //     Library.notify(this._translate.CONTROLL.LABEL.buyer_name + " " + this._translate.VALIDATION.required, 'error');
        //     return false;
        //   }
        // }
        var _lst = this.frmData.invoice_products.filter(function (p) { return p.product_name; });
        if (_lst.length == 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_product, 'error');
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        else {
            // const _lstValidThanhTien = this.frmData.invoice_products.filter(p => !p.amount && p.amount !== 0);
            // if (_lstValidThanhTien.length == this.frmData.invoice_products.length) {
            //   Library.notify("Thành tiền không được để trống", 'error', 5000);
            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount'));
            //   return false;
            // }
            // const _lstValidTongTien = this.frmData.invoice_products.filter(p => !p.amount_after_vat && p.amount_after_vat !== 0);
            // if (_lstValidTongTien.length == this.frmData.invoice_products.length) {
            //   Library.notify("Tổng tiền hàng hóa không được để trống", 'error', 5000);
            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount_after_vat'));
            //   return false;
            // }
        }
        if (this.isTT78) {
            if (this.frmData.list_date && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.list_number) == "") {
                this.formInvoice.form.instance.getEditor('list_number').focus();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Số bảng kê" + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (!this.frmData.list_date && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.list_number) != "") {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ngày bảng kê" + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.delivery_order_number) == "") {
                this.formInvoice.form.instance.getEditor('delivery_order_number').focus();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.transportation_method + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.from_warehouse) == "") {
                this.formInvoice.form.instance.getEditor('from_warehouse').focus();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.from_warehouse + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.to_warehouse) == "") {
                this.formInvoice.form.instance.getEditor('to_warehouse').focus();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.to_warehouse + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.transportation_method) == "") {
                this.formInvoice.form.instance.getEditor('transportation_method').focus();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this.strTextHDKT + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (this.isPhieuXuatKhoNB) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.shiping_point) == "") {
                    this.formInvoice.form.instance.getEditor('shiping_point').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Địa chỉ kho xuất" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.place_of_delivery) == "") {
                    this.formInvoice.form.instance.getEditor('place_of_delivery').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Địa chỉ kho nhận" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
            }
            else {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.delivery_order_date) == "") {
                    this.formInvoice.form.instance.getEditor('delivery_order_date').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this.strtextHDKTNgay + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.delivery_by) == "") {
                    this.formInvoice.form.instance.getEditor('delivery_by').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.delivery_by + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
            }
        }
        return _isValid;
    };
    InvoiceComponent.prototype.keyDown = function (e) {
        if (e.event.key == "Delete") {
            e.event.srcElement.value = null;
        }
    };
    InvoiceComponent.prototype.eSubmit = function (type) {
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
            if (type != "GHI_TAM") {
                if (!_this._validForm(false)) {
                    return;
                }
            }
            if (_this.frmData.invoice_options) {
                _this.frmData.invoice_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                });
            }
            if (type == "XUAT") {
                if (_this.configs.integrate_parameter.integrate_econtract && _this.configs.integrate_parameter.integrate_econtract.is_delivery) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.carrier_mobile) == "" && !_this.confirmCheckPreview && _this.formInvoice.getHtXuatValue() != _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                        var confirm_1 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(_this._translate.CONFIRM.phone_email_carrier_is_empty, _this._translate.NOTIFY.notify);
                        confirm_1.then(function (dialog) {
                            if (!dialog) {
                                _this.formInvoice.form.instance.getEditor('carrier_mobile').focus();
                            }
                            else {
                                _this.processXuatHoaDon(type);
                            }
                        });
                    }
                    else
                        _this.processXuatHoaDon(type);
                }
                else
                    _this.processXuatHoaDon(type);
            }
            else {
                _this.ghiTam(_this.frmData);
            }
        }, 300);
    };
    /* Xử lý xuất hóa đơn */
    InvoiceComponent.prototype.processXuatHoaDon = function (type) {
        var _this = this;
        var _lstInv = [];
        this.invoice_products.load().then(function (dataSource) {
            _lstInv = dataSource.filter(function (p) { return p.product_name; });
        });
        if (!this.vatService.checkVatMauHoaDon(_lstInv, this.is_multi_vat))
            return false;
        if (this.confirmCheckPreview) {
            if (this.formInvoice.getHtXuatValue() != _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                this.xuatHoaDon(this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () { _this.xuatChoKy(_this.frmData); });
            }
            this.confirmCheckPreview = false;
        }
        else {
            this.previewBeforeExport(type);
        }
    };
    InvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = '';
        if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        }
        else {
            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
        }
        var du_lieu = this.vatService.taodulieuXemTruocMau(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
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
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_19__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    InvoiceComponent.prototype.handleAddNew = function () {
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
                            _this.subData('GHI_TAM', _this.frmData).then(function (res) {
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
    InvoiceComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.configsService.getAll().subscribe(function (res) {
            if (res.data && res.data.configs) {
                _this.authService.setConfigs(res.data.configs);
                _this.configs = _this.authService.getConfigs();
            }
        });
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
        else {
            return true;
        }
    };
    InvoiceComponent.prototype.subData = function (type, data) {
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
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (!data.id) return [3 /*break*/, 6];
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.vatService.edit(data.id, data).toPromise().then(function (res) {
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
                    case 3: return [4 /*yield*/, this.vatService.editTT78(data.id, data).toPromise().then(function (res) {
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
                        return [4 /*yield*/, this.vatService.ghiTam(data).toPromise().then(function (res) {
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
                    case 8: return [4 /*yield*/, this.vatService.ghiTamTT78(data).toPromise().then(function (res) {
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
    InvoiceComponent.prototype.handleFormDataSub = function () {
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
                        item.row_content = item.product_name;
                        invoice_products.push(item);
                        if (item.is_transport_number) {
                            _this.frmData.transport_number = item.product_name;
                        }
                    }
                });
                _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
                _this.frmData.invoice_products = invoice_products;
                _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            });
            return true;
        });
    };
    InvoiceComponent.prototype.addNew = function () {
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
        this.frmData.invoice_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.invoice_release_id = inv.invoice_release_id;
        this.frmData.payment_method_name = inv.payment_method_name;
        this.frmData.payment_method_view_name = inv.payment_method_view_name;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.template_code = inv.template_code;
        this.frmData.invoice_options = inv.invoice_options;
        this.frmData.invoice_series = inv.invoice_series;
        this.formInvoice.resetTMR();
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: "id",
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        this.productGrip.ttDaXuatHoaDon = false;
        this.productGrip.createUpdateEvent();
        this.formInvoice.removeReadonlyAllForm();
        this.formInvoice.emails = [];
        this.ttDaXuatHoaDon = false;
        this.getDataToCompare();
    };
    InvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        this.tempKiFile = 0;
        var invoice_products = [];
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                delete item.error;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    item.row_content = item.product_name;
                    invoice_products.push(item);
                    if (item.is_transport_number) {
                        _this.frmData.transport_number = item.product_name;
                    }
                }
            });
        });
        if (this.frmData.list_date) {
            this.frmData.list_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.frmData.list_date).format('YYYY-MM-DD');
        }
        this.frmData.invoice_files = JSON.parse(JSON.stringify(this.fileData));
        this.frmData.invoice_products = invoice_products;
        var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
        this.frmData.decimal_places_json = decimal_places_json;
    };
    InvoiceComponent.prototype.dong = function () {
        if (this.isPhieuXuatKhoNB)
            this.router.navigate(['/system/vat-invoice']);
        else
            this.router.navigate(['/system/sale-invoice']);
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
    };
    /* Thủ kho xuất ký PXK */
    InvoiceComponent.prototype.thukhoxuatky = function () {
        var _this = this;
        var ids = [];
        ids.push(this.frmData.id);
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.thukhoxuatky(ids).subscribe(function (rs) {
            if (rs.status === 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_success, 'success');
                _this.isShowThuKhoXuatKy = false;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__["ProductGripComponent"]),
        __metadata("design:type", _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__["ProductGripComponent"])
    ], InvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_6__["FormInvoiceComponent"]),
        __metadata("design:type", _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_6__["FormInvoiceComponent"])
    ], InvoiceComponent.prototype, "formInvoice", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/internal-transport/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/internal-transport/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_11__["ProductsService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_14__["ConfigsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_18__["MyBsModalService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__["InvoiceService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/product-grip/product-grip.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n      <div class=\"pull-left\">\r\n          <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n          <div style=\"float: left; width: 30%\">\r\n            <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n          </div>\r\n          <div>\r\n            <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\"\r\n                       (onClick)=\"addRow()\"></dx-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n            [(value)]=\"formDataInInvoice.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n          <dx-menu\r\n                [dataSource]=\"extras\"\r\n                displayExpr=\"name\"\r\n                orientation=\"horizontal\"\r\n                submenuDirection=\"auto\"\r\n                (onItemClick)=\"itemExtrasClick($event)\"\r\n                cssClass='button-dropdown-extend'>\r\n              </dx-menu>\r\n              <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n                   style=\"display: none;\"/>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">Hãy lựa chọn hình thức nạp dữ liệu?</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"Thay thế toàn bộ\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"Thêm tiếp\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"Hủy\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [wordWrapEnabled]=\"true\" (onKeyDown)=\"onGripKeyDown($event)\"\r\n      (onContextMenuPreparing)=\"onContextMenuPreparing($event)\" (onEditorPrepared)=\"onEditorPrepared($event)\"\r\n      (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{_translate.GRID.INVOICE_DETAILS.delete }}\" width=\"40\"\r\n        [allowEditing]=\"false\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"view_order\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order }}\" width=\"40\"\r\n        alignment=\"center\"></dxi-column>\r\n     \r\n      <dxi-column dataField=\"product_code\" caption=\"{{_translate.GRID.INVOICE_DETAILS.product_code }}\"\r\n          alignment=\"center\" [editorOptions]=\"{showClearButton: true}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\">\r\n        <dxo-lookup *ngIf=\"reloadSelectProduct\"\r\n            [dataSource]=\"select.productsView\"\r\n            displayExpr=\"mhvth\"\r\n            valueExpr=\"code\"> <!-- \"id\" contains the same values as \"authorId\" -->\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"product_name\" caption=\"{{_translate.GRID.INVOICE_DETAILS.product_name }}\"\r\n        alignment=\"left\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"></dxi-column>\r\n       <!-- Đơn hàng/ Hợp đồng -->\r\n       <dxi-column *ngIf=\"(extentionGrid && extentionGrid.don_hang_hop_dong) || (configs && configs.system_parameter && configs.system_parameter.display_contract_order)\" dataField=\"contract_order\"\r\n                    minWidth=\"{{ _translate.GRID_WIDTH.don_hang_hop_dong }}\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.po_no_contract_no }}\"\r\n                    alignment=\"left\"></dxi-column>\r\n        <!-- <dxi-column dataField=\"number_code\" caption=\"{{_translate.GRID.INVOICE_DETAILS.code }}\"\r\n        alignment=\"left\"></dxi-column> -->\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n                  [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Khuyến mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.promotional_goods_on_the_invoice\" cellTemplate=\"khuyen_mai\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.promotion }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n                  [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{_translate.GRID.INVOICE_DETAILS.unit_code }}\" [width]=\"100\"\r\n        alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup  [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"isPXKDaiLy\" dataField=\"quantity\" headerCellTemplate=\"quantityHeader\" [width]=\"100\"\r\n        [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n        alignment=\"center\"></dxi-column>\r\n        <dxi-column *ngIf=\"!isPXKDaiLy\" dataField=\"number_real_export\" headerCellTemplate=\"quantity_exportHeader\" [width]=\"100\"\r\n        [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"!isPXKDaiLy\" dataField=\"number_real_import\" headerCellTemplate=\"quantity_importHeader\" [width]=\"100\"\r\n        [editorOptions]=\"{ format: formatter.so_luong\t }\" [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- <dxi-column *ngIf=\"configs.system_parameter.view_price_nte\" dataField=\"price_nte\" headerCellTemplate=\"price_nteHeader\"\r\n        [width]=\"110\" [editorOptions]=\"{ format: formatter.price_nte }\" [format]=\"formatter.price_nte\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column> -->\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" [width]=\"90\"\r\n        [editorOptions]=\"{ format: formatter.don_gia }\" [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" [width]=\"109\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      \r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\" [width]=\"150\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n      <!-- config column header -->\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{_translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'quantity_exportHeader'\">\r\n          <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">{{_translate.GRID.INVOICE_DETAILS.quantity_export }}<img\r\n              src=\"assets/img/icons/SoThapPhan.png\">\r\n          </p>\r\n        </div>\r\n        <div *dxTemplate=\"let d of 'quantity_importHeader'\">\r\n            <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">{{_translate.GRID.INVOICE_DETAILS.quantity_import }}<img\r\n                src=\"assets/img/icons/SoThapPhan.png\">\r\n            </p>\r\n          </div>\r\n      <div *dxTemplate=\"let d of 'price_nteHeader'\">\r\n        <p (click)=\"configDecimal('don_gia_nte')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.price_nte }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{_translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_promotion_new\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'khuyen_mai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion_new\" [disabled]=\"d.data.is_promotion\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.amount_after_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'cktm'\">\r\n        <dx-check-box [(value)]=\"d.data.commercial_discount\" (onValueChanged)=\"cktmChange()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'product_code'\">\r\n        <!-- <dx-autocomplete valueExpr=\"code\"\r\n          [dataSource]=\"select.products\" [(value)]=\"d.data.code\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{item.mhvth}}</span>\r\n          </div>\r\n        </dx-autocomplete> -->\r\n        <dxi-item  editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.productsView, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n      </div>\r\n      <!-- <dxo-summary >\r\n        <dxi-total-item\r\n            summaryType=\"custom\" \r\n            [customizeText]=\"customizeText\"\r\n            showInColumn=\"amount\">\r\n        </dxi-total-item>\r\n      </dxo-summary> -->\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n      <!-- <dxo-summary [calculateCustomSummary]=\"calculateSummary\"> -->\r\n      <!-- <dxi-total-item\r\n            column=\"OrderNumber\"\r\n            summaryType=\"count\">\r\n        </dxi-total-item>\r\n        <dxi-total-item\r\n            column=\"OrderDate\"\r\n            summaryType=\"min\"\r\n            [customizeText]=\"customizeDate\">\r\n        </dxi-total-item> -->\r\n      <!-- <dxi-total-item cssClass=\"vat amount-table-footer\"\r\n            name=\"amount\"\r\n            column=\"amount\"\r\n            summaryType=\"sum\"\r\n            [valueFormat]=\"formatter.thanh_tien\">\r\n        </dxi-total-item> -->\r\n      <!-- <dxi-total-item *ngIf=\"isHdGTGT\"\r\n        name=\"amount_vat\"\r\n            column=\"amount_vat\"\r\n            summaryType=\"sum\"\r\n            [valueFormat]=\"formatter.amount_vat\">\r\n        </dxi-total-item> -->\r\n      <!-- <dxi-total-item\r\n        name=\"amount_after_vat\"\r\n            column=\"amount_after_vat\"\r\n            summaryType=\"custom\"\r\n            [valueFormat]=\"formatter.tong_tien\">\r\n        </dxi-total-item> -->\r\n      <!-- </dxo-summary> -->\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/product-grip/product-grip.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:75px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-dropdown-extend{display:inline-flex}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/product-grip/product-grip.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGripComponent", function() { return ProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { Guid } from 'guid-typescript';


//import { InvoiceComponent } from '@modules/vat/components/invoice/invoice.component';
var ProductGripComponent = /** @class */ (function () {
    function ProductGripComponent(route, router, modalService, vatService, productsService, authService, translate, invoiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.invoiceService = invoiceService;
        this.select = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["InvoiceModel"](1);
        this.showPopup = false; //Popup
        this.dataExcelFile = null;
        this.dataExcelFileInfo = null;
        this.ttDaXuatHoaDon = false;
        this.amount_after_vat = 0;
        this.reloadSelectProduct = true;
        this.ruleError = {
            "": "này",
            "-1": "Không chịu thuế",
            "0": "0%",
            "5": "5%",
            "10": "10%"
        };
        this.isPXKDaiLy = false;
        this.extras = [];
        this.rowData = 1;
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(args.text);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === newItem.code; })[0];
                if (oDuplicate)
                    newItem.code = newItem.code + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
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
        this.onContentReady = function (e) {
            var arrFooter = [
                { name: _this._translate.GRID.INVOICE_DETAILS.amount, class: 'table-footer-1' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount_after_vat, class: 'table-footer-2' },
                { name: _this._translate.GRID.INVOICE_DETAILS.quantity_import, class: 'table-footer-3' },
                { name: _this._translate.GRID.INVOICE_DETAILS.quantity_export, class: 'table-footer-4' },
            ];
            _this.invoiceService.formatSumColumnGrid(arrFooter);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
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
    ProductGripComponent.prototype.ngAfterViewInit = function () {
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
        // console.log("grip view init: " + a);
    };
    ProductGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formDataInInvoice.amount_vatx = null;
        this.formDataInInvoice.amount_vat5 = null;
        this.formDataInInvoice.amount_vat10 = null;
        this.configs = this.authService.getConfigs();
        this.loaiHoaDon = this.route.snapshot.data.type;
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].loaihoadon.HGDL04)
            this.isPXKDaiLy = true;
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
        // console.log("grip init: " + a);
        this.routeSub = this.route.data.subscribe(function (data) {
            //put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.countrys = danh_muc.DM_QUOC_GIA ? danh_muc.DM_QUOC_GIA.data : null;
            //Hàng hóa dịch vụ
            var isEdit = false;
            var invoice;
            if (data.init[2] == true)
                isEdit = true;
            if (_this.isTT78) {
                _this.select.products = data.init[0];
                if (isEdit)
                    invoice = data.init[1];
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                        key: "code",
                        loadMode: "raw",
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            console.log(encodeURIComponent(key) + " abc");
                            //return[];
                            var _data = data.init[0].filter(function (p) { return p.code == key.toString(); });
                            return _data;
                        }
                    }),
                    paginate: true,
                    sort: "name"
                };
            }
            else {
                _this.select.products = data.init[1];
                if (isEdit)
                    invoice = data.init[3];
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                        key: "code",
                        loadMode: "raw",
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            console.log(encodeURIComponent(key) + " abc");
                            //return[];
                            var _data = data.init[1].filter(function (p) { return p.code == key.toString(); });
                            return _data;
                        }
                    }),
                    paginate: true,
                    sort: "name"
                };
            }
            _this.select.products.forEach(function (item) {
                item.mhvth = item.code + ": " + item.name;
            });
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (item.product_name && item.unit_name) {
                        var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                        if (!obj1) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(item.unit_code) == "")
                                item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(item.unit_name);
                            var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (oDuplicate)
                                item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
                            _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                        }
                        else {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(item.unit_code) != "") {
                                var oExistUnitCode = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                                if (!oExistUnitCode)
                                    _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                            }
                        }
                    }
                });
            });
        });
        //Event
        this.createUpdateEvent();
    };
    //khởi tạo sự kiện khi update
    ProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                if (value.product_code !== 'add') {
                    _this.invoice_products.byKey(key).then(function (row) {
                        // if (this.not_auto) {
                        //   switch (column) {
                        //     case 'product_code':
                        //       this.product_codeChange(row);
                        //       break;
                        //   }
                        //   this.updateSomeTotalInputNotCheckCktm();
                        // } else {
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
                            case 'quantity':
                            case 'price':
                            case 'price_nte':
                            case 'vat':
                            case 'amount':
                            case 'amount_vat':
                            case 'amount_after_vat':
                                _this._tinhGiaTri();
                                break;
                            case 'number_real_import':
                                // this.product_numberImportChange(row);
                                _this._tinhGiaTri();
                                break;
                            case 'number_real_export':
                                _this.product_numberExportChange(row);
                                _this._tinhGiaTri();
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
        }, 100);
    };
    ProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code == "Delete") {
            console.log(e.event.srcElement);
            e.event.srcElement.value = null;
            // e.event.srcElement.parentNode.parentNode.querySelector('input').value = null;
        }
    };
    ProductGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
            var eles = e.rowElement.getElementsByTagName('td');
            if (!e.isEditing) {
                eles[2].innerHTML = e.data.product_code;
            }
            if (e.data.error) {
                var ele = eles[eles.length - 1];
                ele.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                ele.title = e.data.error;
            }
        }
    };
    ProductGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField == "product_name" && e.parentType == "dataRow") {
            e.editorName = "dxTextArea";
        }
        // if (e.parentType == 'dataRow') {
        //   e.editorOptions.onFocusOut = function (args) {
        //     if (e.dataField === 'unit_code') {
        //       const _obj = this.select.unit_codes.filter(p => p.code === e.row.data.unit_code)[0];
        //       if (_obj)
        //         e.row.data.unit_name = _obj.name;
        //       else
        //         e.row.data.unit_name = '';
        //     }
        //     if (e.dataField === 'country_code') {
        //       const _obj = this.select.countrys.filter(p => p.code === e.row.data.country_code)[0];
        //       if (_obj)
        //         e.row.data.country_name = _obj.name;
        //       else
        //         e.row.data.country_name = '';
        //     }
        //     this.invoice_products.update(e.row.data.id, e.row.data);
        //   }
        // }
    };
    ProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField == "quantity" || e.dataField == "price" || e.dataField == "amount" || e.dataField == "amount_vat" || e.dataField == "amount_after_vat") && e.parentType == "dataRow") {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    ProductGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row.rowType === "data") {
            e.items = [
                {
                    text: "Thêm hàng hóa",
                    onItemClick: function () { _this.addProduct(e.row.data); }
                },
                {
                    text: "Thêm hàng",
                    onItemClick: function () { _this.addRow(); }
                },
                {
                    text: "Xóa hàng",
                    onItemClick: function () { _this.deleteRow(e.row.data); }
                },
            ];
        }
    };
    ProductGripComponent.prototype.addProduct = function (row) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        this.productsService.getAllListbyListtypeByCode('DM_NHOM_HANG_HOA,DM_DON_VI_TINH,DM_TY_LE_VAT').subscribe(function (response) {
            var initialState = {
                totalCount: 0,
                groupProducts: response.data['DM_NHOM_HANG_HOA'],
                unitCalculations: _this.select.unit_codes,
                vats: response.data['DM_TY_LE_VAT'],
                groupProductListTypeId: response.data['ids']['DM_NHOM_HANG_HOA'],
                unitCalculationListTypeId: response.data['ids']['DM_DON_VI_TINH'],
                vatListTypeId: response.data['ids']['DM_TY_LE_VAT'],
                wavehourses: [],
                formatter: _this.formatter,
                onSaveProduct: function (data, unitCodes) {
                    console.log(unitCodes);
                    _this.select.unit_codes = unitCodes;
                    data.mhvth = data.code + ": " + data.name;
                    _this.select.products.push(data);
                    _this.reloadSelectProduct = false;
                    setTimeout(function () { _this.reloadSelectProduct = true; }, 50);
                    row.product_code = data.code;
                    row.product_name = data.name;
                    row.unit_code = _this.checkUnitCode(data.unit_code);
                    row.quantity = null;
                    row.price = data.price ? parseFloat(data.price) : data.price;
                    row.amount = data.price ? parseFloat(data.price) : 0;
                    row.vat = data.vat ? data.vat.toString() : null;
                    row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                    row.amount_after_vat = row.amount + row.amount_vat;
                    _this.unit_codeChange(row);
                    _this.invoice_products.update(row.id, row);
                }
            };
            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], {
                class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    ProductGripComponent.prototype.addRow = function () {
        var len, order, orderLast;
        len = this.dataSource.items().length;
        orderLast = this.dataSource.items()[len - 1].order;
        for (var i = 0; i < this.rowData; i++) {
            if (this.dataSource.items().length >= 1) {
                order = ++orderLast;
            }
            else {
                order = 1;
            }
            var data = this.frmData.add_invoice_products_data(order, order);
            this.invoice_products.insert(data);
        }
        this.dataSource.reload();
    };
    ProductGripComponent.prototype.view_orderChange = function () {
        var _index = 0;
        this.dataSource.items().forEach(function (item) {
            if (item.view_order) {
                item.view_order = ++_index;
            }
        });
    };
    //Thay đổi cột mã hàng
    ProductGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code == row.product_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.product_name = product.name;
                            row.unit_code = _this.checkUnitCode(product.unit_code);
                            row.quantity = null;
                            row.price = product.price ? parseFloat(product.price) : product.price;
                            row.amount = product.price ? parseFloat(product.price) : 0;
                            row.vat = null;
                            row.number_real_export = null;
                            row.number_real_import = null;
                            row.number_code = null;
                            row.amount_vat = null;
                            row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                            _this.invoice_products.update(row.id, row);
                            _this._tinhGiaTri();
                            return true;
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    ProductGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code == row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.unit_name = "";
            this.invoice_products.update(row.id, row);
        }
    };
    ProductGripComponent.prototype.product_numberExportChange = function (row) {
        this.invoice_products.update(row.id, row);
    };
    ProductGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code == unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ProductGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        //this.dataSource.store().reload();
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, null, _this.configs.system_parameter);
            _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
        }, 100);
        //this.invoice_products = this.dataSource.items();
    };
    ProductGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    //Bật modal thay đổi số thập phân
    ProductGripComponent.prototype.configDecimal = function (n) {
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
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
            subModal.unsubscribe();
        });
    };
    //Xóa hàng
    ProductGripComponent.prototype.deleteRow = function (item) {
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
    ProductGripComponent.prototype.updateSomeTotalInput = function () {
        this._tinhGiaTri();
        // let arr = [], amountk = 0, amountx = 0, amount0 = 0, amount5 = 0, amount10 = 0;
        // this.dataSource.items().forEach(item => {
        //   if (item.commercial_discount) {
        //     if (item.vat == 5) amount5 -= item.amount_after_vat;
        //     if (item.vat == 10) amount10 -= item.amount_after_vat;
        //     if (item.vat == -1) amountx -= item.amount_after_vat;
        //     if (item.vat == 0 && item.vat != "") amount0 -= item.amount_after_vat;
        //     if (item.vat === "") amountk -= item.amount_after_vat;
        //   } else {
        //     if (item.vat == 5) amount5 += item.amount_after_vat;
        //     if (item.vat == 10) amount10 += item.amount_after_vat;
        //     if (item.vat == -1) amountx += item.amount_after_vat;
        //     if (item.vat == 0 && item.vat != "") amount0 += item.amount_after_vat;
        //     if (item.vat === "") amountk += item.amount_after_vat;
        //   }
        // });
        // if (amountk < 0) {
        //   arr.push('');
        // }
        // if (amountx < 0) {
        //   arr.push('-1');
        // }
        // if (amount0 < 0) {
        //   arr.push('0');
        // }
        // if (amount5 < 0) {
        //   arr.push('5');
        // }
        // if (amount10 < 0) {
        //   arr.push('10');
        // }
        // this.dataSource.items().forEach(item => {
        //   item.vat = item.vat;
        //   if (item.product_code || item.product_name || item.quantity || item.price || item.amount || item.amount_vat || item.amount_after_vat) {
        //     if (item.vat != null) {
        //       if (arr.includes(item.vat.toString())) {
        //         item.error = `Tiền hàng sau khi trừ chiết khấu của cùng loại thuế suất ${this.ruleError[item.vat.toString()]} < 0.\nVui lòng kiểm tra lại thông tin hóa đơn.`;
        //       } else {
        //         item.error = 0;
        //       }
        //     }
        //     this.invoice_products.update(item.order, item);
        //   }
        // });
        // setTimeout(() => {
        //   this.gripChange.emit([this.dataSource, this.invoice_products, this.formatter]);
        //   this.dataGrid.instance.refresh();
        // }, 200);
    };
    //Lấy mẫu bảng kê
    ProductGripComponent.prototype.layMauBangKe = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var invoiceType = "03XKNB";
        if (this.loaiHoaDon != _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].loaihoadon.XKNB03)
            invoiceType = _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].loaihoadon.HGDL04;
        this.vatService.layFileMau({
            customer_name: "",
            buyer_tax_code: "",
            buyer_address: "",
            invoice_type_name: invoiceType
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    //Nạp dữ liệu bảng kê
    ProductGripComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById("file-bang-ke").click();
    };
    ProductGripComponent.prototype.onFileBangKeChange = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Không thể chọn nhiều file');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: "A", range: 5 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: "A", range: 0 }));
            console.log(account.slice(0, 3));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            _this.dataExcelFile = data;
            _this.dataExcelFileInfo = account.slice(0, 3);
            _this.showPopup = true;
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ProductGripComponent.prototype.thayTheToanBo = function () {
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].loaihoadon.XKNB03)
            this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        else
            this.fillDataFromFileDaiLy(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.themTiep = function () {
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].loaihoadon.XKNB03)
            this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        else
            this.fillDataFromFileDaiLy(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.huy = function () {
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.fillDataFromFileDaiLy = function (data, info, status) {
        var _this = this;
        if (info.length === 4) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1) {
                this.formDataInInvoice.customer_name = customer_name[1].trim();
            }
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1) {
                this.formDataInInvoice.buyer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1) {
                this.formDataInInvoice.buyer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1) {
                this.formDataInInvoice.buyer_address = buyer_address[1].trim();
            }
        }
        if (status === 'thaythe') {
            this.dataSource.items().forEach(function (item) {
                _this.invoice_products.remove(item.id);
            });
        }
        else {
            this.dataSource.items().forEach(function (item) {
                if (!item.product_code && !item.product_name && !item.quantity && !item.price && !item.amount && !item.amount_vat && !item.amount_after_vat) {
                    _this.invoice_products.remove(item.id);
                }
            });
        }
        var j = 10000;
        data.forEach(function (item) {
            item.B = item.B || '';
            item.C = item.C || '';
            item.D = item.D || '';
            var temp = {};
            if (_this.formDataInInvoice.auto_value) {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E) {
                    temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                }
                if (item.F) {
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                }
                if (item.G) {
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                }
                if (item.G)
                    temp.amount_after_vat = temp.amount;
                if (item.I)
                    temp.contract_order = item.I;
            }
            else {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E) {
                    temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                }
                if (item.F) {
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                }
                if (item.G) {
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                }
                if (item.I)
                    temp.contract_order = item.I;
            }
            var _obj = _this.select.products.filter(function (p) { return p.code === temp.product_code; })[0];
            if (!_obj && temp.product_code !== '') {
                var _objPush = {
                    code: temp.product_code,
                    name: temp.product_name,
                    mhvth: temp.product_code + ': ' + temp.product_name,
                };
                _this.select.products.push(_objPush);
            }
            temp.commercial_discount = false;
            // arr.push(temp);
            // this.dataSource.store().insert(temp);
            _this.invoice_products.insert(temp);
            j++;
        });
        setTimeout(function () {
            _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                dataSource: _this.select.unit_codes,
                displayExpr: 'name',
                valueExpr: 'code'
            });
        });
        this.dataSource.reload();
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.fillDataFromFile = function (data, info, status) {
        var _this = this;
        if (info.length == 3) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1)
                this.formDataInInvoice.customer_name = customer_name[1].trim();
            ///
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1)
                this.formDataInInvoice.buyer_tax_code = buyer_tax_code[1].trim();
            ////
            var buyer_address = info[2].A.split(':');
            if (buyer_address.length > 1)
                this.formDataInInvoice.buyer_address = buyer_address[1].trim();
        }
        if (status == 'thaythe') {
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
        // console.log(data);
        // let arr = [];
        var j = 10000;
        data.forEach(function (item) {
            //item.A = item.A || "0";
            item.B = item.B || "";
            item.C = item.C || "";
            item.D = item.D || "";
            //item.I = item.I || "0";
            var temp = {};
            if (_this.formDataInInvoice.auto_value) {
                //temp.order = (status == 'thaythe') ? parseInt(item.A) : j;
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                if (item.A)
                    temp.view_order = parseInt(item.A);
                else
                    temp.view_order = null;
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E)
                    temp.number_real_export = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                if (item.F)
                    temp.number_real_import = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                if (item.G)
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                if (item.H)
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.H);
                if (item.H)
                    temp.amount_after_vat = temp.amount;
                if (item.I)
                    temp.contract_order = item.I;
            }
            else {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                //temp.order = (status == 'thaythe') ? parseInt(item.A) : j;
                if (item.A)
                    temp.view_order = parseInt(item.A);
                else
                    temp.view_order = null;
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E)
                    temp.number_real_export = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                if (item.F)
                    temp.number_real_import = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                if (item.G)
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                if (item.H)
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.H);
                if (item.I)
                    temp.contract_order = item.I;
                //temp.amount = temp.price * temp.quantity;
                // if (this.isPhieuXuatKhoNB){
                //   temp.amount_vat = (temp.vat > 0) ? temp.vat * temp.amount / 100 : 0;
                // }
                // else
                //   temp.amount_vat = null;
                // temp.amount_after_vat = temp.amount_vat + temp.amount;
            }
            var _obj = _this.select.products.filter(function (p) { return p.code == temp.product_code; })[0];
            if (!_obj && temp.product_code != "") {
                var _objPush = {
                    code: temp.product_code,
                    name: temp.product_name,
                    mhvth: temp.product_code + ": " + temp.product_name,
                };
                _this.select.products.push(_objPush);
            }
            temp.commercial_discount = false;
            // arr.push(temp);
            // this.dataSource.store().insert(temp);
            _this.invoice_products.insert(temp);
            j++;
        });
        setTimeout(function () {
            _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                dataSource: _this.select.unit_codes,
                displayExpr: 'name',
                valueExpr: 'code'
            });
        });
        this.dataSource.reload();
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(unitName) !== '') {
            if (this.select.unit_codes && this.select.unit_codes.length > 0) {
                var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
                if (_obj) {
                    return _obj.code;
                }
                else {
                    var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(unitName);
                    var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                    if (oDuplicate)
                        code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
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
    ProductGripComponent.prototype.cktmChange = function () {
        this._tinhGiaTri();
    };
    // customizeText = (e) =>{
    //   return this.formDataInInvoice.amount;
    // }
    ProductGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ProductGripComponent.prototype.taxCodeChoose = function (e) {
        // let customer = e.itemData;
        // if (this.frmData.customer_object_code != 'CA_NHAN' && this.frmData.customer_object_code != 'KHACH_LE') this.frmData.customer_name = customer.name;
        // this.frmData.buyer_name = customer.contact_person_name;
        // if (this.frmData.customer_object_code != 'KHACH_LE') this.frmData.buyer_address = customer.business_address;
        // this.frmData.customer_code = customer.code;
        // this.frmData.buyer_mobile = customer.contact_mobile;
        // this.frmData.buyer_email = customer.email;
        // this.frmData.customer_id = customer.id;
        // if (customer.bank_account_number) this.frmData.bank_account_number = customer.bank_account_number;
        // if (customer.bank_name) this.frmData.bank_name = customer.bank_name;
    };
    ProductGripComponent.prototype.calculateSummary = function (options) {
        var amount_after_vat;
        // Calculating "CustomSummary1"
        if (options.name == 'amount_after_vat' && options.summaryProcess) {
            if (options.summaryProcess == 'start') {
                // Initializing "totalValue" here
                if (this.formDataInInvoice !== undefined) {
                    options.totalValue = this.formDataInInvoice.amount_after_vat;
                    amount_after_vat = this.formDataInInvoice.amount_after_vat;
                }
            }
            if (options.summaryProcess == 'calculate') {
                if (this.formDataInInvoice !== undefined) {
                    options.totalValue = this.formDataInInvoice.amount_after_vat;
                    amount_after_vat = this.formDataInInvoice.amount_after_vat;
                }
                // Modifying "totalValue" here
            }
            if (options.summaryProcess == 'finalize') {
                options.totalValue = amount_after_vat;
                // Assigning the final value to "totalValue" here
            }
        }
        // Calculating "CustomSummary2"
        if (options.name == 'CustomSummary2') {
            // ...
            // Same "if" statements here
        }
    };
    ProductGripComponent.prototype.itemExtrasClick = function (e) {
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
    ], ProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "dataSource", void 0);
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
    ], ProductGripComponent.prototype, "isPhieuXuatKhoNB", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductGripComponent.prototype, "isTT78", void 0);
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
            selector: 'transport-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_9__["ProductsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_11__["InvoiceService"]])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.process_invoice_transport}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_code }\" dataField=\"template\"  [editorOptions]=\"{readOnly: true}\">\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.CONTROLL.LABEL.invoice_date_transport}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\" [label]=\"{text: _translate.CONTROLL.LABEL.invoice_number_transport}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"delivery_order_number\" [label]=\"{text: _translate.CONTROLL.LABEL.delivery_order_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"delivery_order_date\" [label]=\"{text: _translate.CONFIGS.day }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"from_warehouse_name\" [label]=\"{text: _translate.CONTROLL.LABEL.from_warehouse}\" [editorOptions]=\"{disabled: true}\"></dxi-item>                \r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"to_warehouse_name\" [label]=\"{text: _translate.CONTROLL.LABEL.to_warehouse}\" [editorOptions]=\"{disabled: true}\"></dxi-item>                \r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item cssClass=\"form-input-visibility\" dataField=\"invoice_date\" [label]=\"{text: 'temp'}\"></dxi-item>\r\n              <!-- <dxi-item dataField=\"a\" [label]=\"{text: 'Số xác thực'}\" [editorOptions]=\"{disabled: true}\"></dxi-item> -->\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                <dxi-item dataField=\"currency_code\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item dataField=\"delivery_by\" [label]=\"{text: _translate.CONTROLL.LABEL.delivery_by}\"  [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>                \r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-12 link-send-invoice\">\r\n          <div class=\"pull-right\">\r\n            <a *ngIf=\"invoice.status == 'DA_XUAT'\" (click)=\"sendMail()\" href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_transport}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <dx-data-grid\r\n      id=\"invoiceHistoryGrid\"\r\n      [dataSource]=\"invoice_process\"\r\n      (onEditorPreparing) = \"onEditorPreparing($event)\"\r\n      [showBorders]=\"true\"\r\n      [wordWrapEnabled]=\"true\"\r\n      [showRowLines]=\"true\">\r\n      <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n      <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\" dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\" alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"user.name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\"></dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        <p>{{ d.rowIndex + 1 }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'content'\">\r\n            {{ d.data.content}}\r\n        </div>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SendInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInvoicesComponent", function() { return SendInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-mail/send-mail.component */ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendInvoicesComponent = /** @class */ (function () {
    function SendInvoicesComponent(authService, bsModalRef, vatService, modalService, bsModalSendMail, productsService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.modalService = modalService;
        this.bsModalSendMail = bsModalSendMail;
        this.productsService = productsService;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    SendInvoicesComponent.prototype.ngOnInit = function () {
        this.loadTableContent();
        var invoice = this.invoice;
        this.frmData.template = invoice.template_code + " - " + invoice.invoice_series;
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_6__(invoice.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_number = invoice.invoice_number;
        this.frmData.customer_code = invoice.customer_code;
        this.frmData.buyer_tax_code = invoice.buyer_tax_code;
        this.frmData.buyer_name = invoice.buyer_name;
        this.frmData.buyer_mobile = invoice.buyer_mobile;
        this.frmData.buyer_email = invoice.buyer_email;
        this.frmData.currency_code = invoice.currency_code;
        this.frmData.payment_method_name = invoice.payment_method_view_name;
        this.frmData.delivery_order_number = invoice.delivery_order_number;
        this.frmData.delivery_order_date = invoice.delivery_order_date;
        this.frmData.delivery_by = invoice.delivery_by;
        this.frmData.from_warehouse_name = invoice.from_warehouse_name;
        this.frmData.to_warehouse_name = invoice.to_warehouse_name;
        this.frmData.customer_name = invoice.customer_name;
    };
    SendInvoicesComponent.prototype.loadTableContent = function () {
        var _this = this;
        this.invoice_process = {};
        var sub = this.vatService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            _this.invoice_process = rs.data.invoice_process;
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    SendInvoicesComponent.prototype.sendMail = function () {
        var _this = this;
        var initialState = {
            invoice_id: this.invoice.id,
            email: this.frmData.buyer_email,
            to_warehouse_name: this.frmData.to_warehouse_name,
            loaihoadon: this.loaihoadon,
            customer_name: this.invoice.customer_name
        };
        this.bsModalSendMail = this.modalService.show(_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__["SendMailComponent"], { class: 'modal-md', initialState: initialState, backdrop: 'static', keyboard: false });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == 'success_mail') {
                _this.loadTableContent();
            }
        });
    };
    SendInvoicesComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'content' && e.parentType == "dataRow") {
            e.editorName = 'dxTextArea';
        }
    };
    SendInvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-invoices',
            template: __webpack_require__(/*! ./send-invoices.component.html */ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.html"),
            styles: [__webpack_require__(/*! ./send-invoices.component.scss */ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], SendInvoicesComponent);
    return SendInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'MENU.list_transport_send_email' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-data-grid id=\"gridContainer\" (onEditingStart)=\"onEditingStart($event)\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"invoiceList\"\r\n      [showRowLines]=\"true\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\" [columnResizingMode]=\"true\"\r\n      [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\">\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n      <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n      <!-- <dxo-selection selectAllMode=\"page\" mode=\"multiple\"></dxo-selection>\r\n      <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n      <dxi-column cellTemplate=\"invoiceNumber\" [allowEditing]=\"false\" dataField=\"invoice_number\" caption=\"{{ _translate.CONTROLL.LABEL.invoice_number_transport }}\"\r\n        [width]=\"110\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"template_code\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"invoice_series\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\"\r\n        alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n      <dxi-column dataField=\"invoice_date\" [allowEditing]=\"false\" caption=\"{{ _translate.CONTROLL.LABEL.invoice_date_transport }}\" [width]=\"110\" dataType=\"date\"\r\n        format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n      <dxi-column *ngIf=\"!isPXKDaiLy\" dataField=\"to_warehouse_name\" [allowEditing]=\"true\" caption=\"{{ _translate.CONTROLL.LABEL.name_receiver }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"isPXKDaiLy\" dataField=\"customer_name\" [allowEditing]=\"true\" caption=\"{{ _translate.CONTROLL.LABEL.name_receiver }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"buyer_email\" [allowEditing]=\"true\" caption=\"Email\" [width]=\"190\" alignment=\"left\">\r\n          <!-- <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule> -->\r\n        <!-- <dxi-validation-rule type=\"email\" message=\"Email {{ _translate.VALIDATION.not_pattern }}\"></dxi-validation-rule> -->\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'templateCode'\">\r\n        <p>{{ d.data.template.template_code }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'customerName'\">\r\n        <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n        <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n        <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n            *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n      </div>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div style=\"margin-left: 18px;\">\r\n      <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}} </a>\r\n    </div>\r\n    <div style=\"margin-top: 5px;margin-left: 18px;\">\r\n        <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n      </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n    </dx-button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SendListEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendListEmailComponent", function() { return SendListEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__);
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










var SendListEmailComponent = /** @class */ (function () {
    function SendListEmailComponent(router, route, vatService, translate, authService, bsModalRef, customersService, vPreviewInvService) {
        this.router = router;
        this.route = route;
        this.vatService = vatService;
        this.translate = translate;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.customersService = customersService;
        this.vPreviewInvService = vPreviewInvService;
        this.selectedItems = [];
        this.ganXong = false;
        this.clickCurent = '';
        this.disEditMulti = true;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.showPopup = false;
        this.isPXKDaiLy = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    SendListEmailComponent.prototype.ngOnInit = function () {
        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
            this.isPXKDaiLy = true;
        this.convertData();
        this.configs = this.authService.getConfigs();
        this.invoice_list = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default.a({
            key: 'id',
            data: this.invoiceList
        });
    };
    SendListEmailComponent.prototype.convertData = function () {
        var _this = this;
        this.invoiceList.forEach(function (item) {
            if (!item.buyer_email) {
                _this.customersService.getCustomer(item.customer_id).subscribe(function (response) {
                    var customer = response.data.customer;
                    if (customer) {
                        item.buyer_email = customer.email;
                    }
                });
            }
        });
    };
    SendListEmailComponent.prototype._validGrid = function () {
        var _this = this;
        var _isvalid = true;
        this.invoiceList.forEach(function (element, index) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(element.to_warehouse_name) == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.CONTROLL.LABEL.name_receiver + " " + _this._translate.VALIDATION.required, "error");
                _isvalid = false;
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(element.buyer_email) == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Email " + _this._translate.VALIDATION.required, "error");
                _isvalid = false;
                return false;
            }
        });
        return _isvalid;
    };
    SendListEmailComponent.prototype.onEditorPreparing = function (e) {
        var _this = this;
        var grid = e.component;
        if (e.parentType === 'dataRow') {
            var oldOnValueChanged = e.editorOptions.onValueChanged;
            e.editorOptions.onFocusOut = function (args) {
                _this.invoice_list.update(e.row.data.id, e.row.data);
                //  grid.cellValue(e.row.rowIndex, e.index, e.row.data.to_warehouse_name);
            };
        }
    };
    SendListEmailComponent.prototype.onEditorPrepared = function (e) {
        if (e.dataField == 'buyer_email' && e.parentType == 'dataRow') {
            //   e.row.cells[6].text = "htkt";
            //  e.editorOptions.onValueChanged = function(args){
            //    e.row.cells[6].value = args.value;
            //       e.setValue(args.value);
            //  }
        }
    };
    SendListEmailComponent.prototype.onEditingStart = function (e) {
        e.component.saveEditData();
    };
    SendListEmailComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            if (this.configs.system_parameter.view_multi_invoice) {
                var data_1 = this.vatService.taodulieuXemMau(ids);
                data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data_1);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don,
                    type_invocie: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.phieu_xuat_kho
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    SendListEmailComponent.prototype.dong = function () {
        this.bsModalRef.content.successSaveItem = 'success';
        this.bsModalRef.hide();
    };
    SendListEmailComponent.prototype.dongy = function () {
        var _this = this;
        if (this._validGrid()) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.invoices = this.invoiceList.filter(function (item) { return item.buyer_email; });
            var data_2 = [];
            this.invoices.forEach(function (item) {
                var customer_name = item.to_warehouse_name;
                if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04)
                    customer_name = item.customer_name;
                data_2.push({ id: item.id, email: item.buyer_email, customer_name: customer_name });
            });
            var sub_1 = this.vatService.sendMail(data_2).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Gửi mail thành công', 'success');
                    _this.bsModalRef.content.successSaveItem = 'success_mail';
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
    };
    SendListEmailComponent.prototype.selectionChanged = function (data) {
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
                return item.status == 'DA_XUAT';
            });
            if (checks.length == this.selectedItems.length && checkDaXuat.length == 0) {
                this.disEditMulti = false;
            }
        }
    };
    SendListEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-list-email',
            template: __webpack_require__(/*! ./send-list-email.component.html */ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.html"),
            styles: [__webpack_require__(/*! ./send-list-email.component.scss */ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__["CustomersService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__["ViewInvoiceService"]])
    ], SendListEmailComponent);
    return SendListEmailComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-mail/send-mail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n        <dxi-item *ngIf=\"!isPXKDaiLy\" dataField=\"to_warehouse_name\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.name_receiver }}\"></dxo-label>\r\n\r\n        <dxi-validation-rule type=\"required\"\r\n          message=\"{{ _translate.CONTROLL.LABEL.name_receiver }} {{ _translate.VALIDATION.required }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"isPXKDaiLy\" dataField=\"customer_name\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.name_receiver }}\"></dxo-label>\r\n\r\n        <dxi-validation-rule type=\"required\"\r\n          message=\"{{ _translate.CONTROLL.LABEL.name_receiver }} {{ _translate.VALIDATION.required }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      \r\n      <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div style=\"margin-top: 10px;\">\r\n        <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n      </div>\r\n      <div style=\"margin-top: 5px;\">\r\n          <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n        </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-mail/send-mail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-mail/send-mail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
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





var SendMailComponent = /** @class */ (function () {
    function SendMailComponent(bsModalRef, vatService, authService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.authService = authService;
        this.frmData = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_2__["pattern"];
        this.isPXKDaiLy = false;
        this._translate = this.authService.getTranslate();
    }
    SendMailComponent.prototype.ngOnInit = function () {
        this.frmData.email = this.email;
        this.frmData.to_warehouse_name = this.to_warehouse_name;
        this.frmData.customer_name = this.customer_name;
        if (this.loaihoadon == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].loaihoadon.HGDL04)
            this.isPXKDaiLy = true;
    };
    SendMailComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var customer_name = this.frmData.to_warehouse_name;
        if (this.loaihoadon == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].loaihoadon.HGDL04)
            customer_name = this.frmData.customer_name;
        var data = [{
                id: this.invoice_id,
                email: this.frmData.email,
                customer_name: customer_name
            }];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.sendMail(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.send_mail_success, 'success');
                _this.bsModalRef.content.successSaveItem = "success_mail";
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    SendMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'MENU.list_transport_send_delivery' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" [allowEditing]=\"false\" caption=\"{{ 'CONTROLL.LABEL.invoice_number_transport' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template.invoice_series\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" [allowEditing]=\"false\" caption=\"{{ 'CONTROLL.LABEL.invoice_date_transport' | translate }}\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"delivery_by\" [allowEditing]=\"false\" caption=\"{{ 'CONTROLL.LABEL.delivery_by' | translate }}\" [minWidth]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"carrier_email\" [allowEditing]=\"true\" caption=\"Email\" [width]=\"220\" alignment=\"left\">\r\n     \r\n    </dxi-column>\r\n    <dxi-column dataField=\"carrier_mobile\" [allowEditing]=\"true\" caption=\"{{ 'CONTROLL.LABEL.phone_number' | translate }}\" [width]=\"140\" alignment=\"left\">\r\n      \r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" (click)=\"dongy()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-label{margin-top:4px;color:red;font-weight:800;font-family:'Times New Roman'}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SendReportDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportDeliveryComponent", function() { return SendReportDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendReportDeliveryComponent = /** @class */ (function () {
    function SendReportDeliveryComponent(bsModalRef, vatService, socketService, authService, router) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.isExportFailed = false;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].email;
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].phone;
        this.reportCountERR = "";
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._translate = this.authService.getTranslate();
    }
    SendReportDeliveryComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.convertData();
    };
    SendReportDeliveryComponent.prototype.convertData = function () {
        this.invoiceList.forEach(function (item) {
            item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
            delete item.updated_at;
            delete item.decpoint_is_dot;
            delete item.money_decimal_format;
            item.invoice_products = item.invoice_products.sort(function (itemA, itemB) {
                return itemA.order - itemB.order;
            });
        });
    };
    SendReportDeliveryComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    SendReportDeliveryComponent.prototype.onImportHiding = function (e) {
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
    SendReportDeliveryComponent.prototype.dongy = function () {
        var _this = this;
        setTimeout(function () {
            if (_this._validGrid()) {
                var data_1 = [];
                _this.invoiceList.forEach(function (item) {
                    var inv = {
                        id: item.id,
                        carrier_email: item.carrier_email,
                        carrier_mobile: item.carrier_mobile
                    };
                    data_1.push(inv);
                });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_1 = _this.vatService.sendReportDelivery(data_1).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.send_mail_success, 'success');
                        _this.bsModalRef.content.successSaveItem = "success_mail";
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
        }, 300);
    };
    SendReportDeliveryComponent.prototype.dong = function () {
        if (this.ganXong) {
            this.bsModalRef.content.successSaveItem = "success";
        }
        this.bsModalRef.hide();
        this.router.navigate(['/system/transport-invoice/']);
    };
    SendReportDeliveryComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var win_1 = window.open('', '', 'width=200, height=100');
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            var sub_2 = this.vatService.xemHoaDonInvoiceImport(ids).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var pdf_file = rs.data.invoice.pdf_file;
                    win_1.document.write("\n            <a id=\"idA\" title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n              margin-right: 20px;\" download=\"hoadon.pdf\" href=\"data:application/pdf;base64," + pdf_file + "\">T\u1EA3i File</a>\n            <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n          ");
                    win_1.resizeTo(screen.availWidth, screen.availHeight);
                    win_1.focus();
                }
                else {
                    win_1.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_2.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    SendReportDeliveryComponent.prototype._validGrid = function () {
        var _isvalid = true;
        for (var i = 0; i < this.invoiceList.length; i++) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.invoiceList[i].carrier_email) == "") {
                // Library.notify("Email " + this._translate.VALIDATION.required, "error");
                // this.dataGrid.instance.focus(this.dataGrid.instance.getCellElement(i, 'carrier_email'));
                // _isvalid = false;
                // return false;
            }
            else if (!this.emailPattern.test(this.invoiceList[i].carrier_email)) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Email " + this._translate.VALIDATION.not_pattern, "error");
                this.dataGrid.instance.focus(this.dataGrid.instance.getCellElement(i, 'carrier_email'));
                _isvalid = false;
                return false;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.invoiceList[i].carrier_mobile) == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.CONTROLL.LABEL.phone_number + " " + this._translate.VALIDATION.required, "error");
                this.dataGrid.instance.focus(this.dataGrid.instance.getCellElement(i, 'carrier_mobile'));
                _isvalid = false;
                return false;
            }
            else if (!this.phonePattern.test(this.invoiceList[i].carrier_mobile)) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.CONTROLL.LABEL.phone_number + " " + this._translate.VALIDATION.not_pattern, "error");
                this.dataGrid.instance.focus(this.dataGrid.instance.getCellElement(i, 'carrier_mobile'));
                _isvalid = false;
                return false;
            }
        }
        return _isvalid;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], SendReportDeliveryComponent.prototype, "dataGrid", void 0);
    SendReportDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-report-delivery',
            template: __webpack_require__(/*! ./send-report-delivery.component.html */ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.html"),
            styles: [__webpack_require__(/*! ./send-report-delivery.component.scss */ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SendReportDeliveryComponent);
    return SendReportDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/sign-many/sign-many.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">DANH SÁCH HÓA ĐƠN CHỜ KÝ SỐ</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column dataField=\"invoice_number\" caption=\"Số hóa đơn\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"Mẫu số\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template.invoice_series\" caption=\"Ký hiệu\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"Ngày HĐ\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"Mã số thuế\" [width]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"Tên khách hàng\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"total_payment\" caption=\"Tổng tiền (đ)\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" ></dxi-column>\r\n    <dxi-column cellTemplate=\"statusName\" caption=\"Trạng thái\" [width]=\"130\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusName'\">\r\n      <p *ngIf=\"d.data.statusByMe =='DA_KY'\">Đã ký</p>\r\n      <p *ngIf=\"d.data.statusByMe !='DA_KY'\">{{ d.data.statusByMe }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"Ký số\" *ngIf=\"!daXong\" type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"Đóng\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"Quá trình đang xử lý\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/sign-many/sign-many.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/sign-many/sign-many.component.ts ***!
  \****************************************************************************************/
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignManyComponent = /** @class */ (function () {
    function SignManyComponent(bsModalRef, vatService, socketService, authService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.coKiSoTapChung = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
    }
    SignManyComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        this.convertData();
        this.connectWebsocket();
    };
    SignManyComponent.prototype.convertData = function () {
        this.invoiceList.forEach(function (item) {
            item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
            delete item.updated_at;
            delete item.decpoint_is_dot;
            delete item.money_decimal_format;
            item.invoice_products = item.invoice_products.sort(function (itemA, itemB) {
                return itemA.order - itemB.order;
            });
        });
    };
    SignManyComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    SignManyComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình ký số hóa đơn sẽ dừng lại nếu bạn đóng cửa sổ này");
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
    SignManyComponent.prototype.connectWebsocket = function () {
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
    SignManyComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
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
    SignManyComponent.prototype.xuLiApiKhiXuat = function (invoice) {
        var _this = this;
        var tempTemplate = invoice.template;
        delete invoice.template;
        var xmlInvoice = "";
        var isNewXml = 0;
        if (!this.isTT78) {
            var sub_1 = this.vatService.edit(invoice.id, invoice, true).subscribe(function (rs) {
                invoice.template = tempTemplate;
                if (rs.status == 'success') {
                    invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
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
                            _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, invoice.invoice_date);
                        }
                    }
                }
                else {
                    _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                    _this.showPopup = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.vatService.editTT78(invoice.id, invoice, true).subscribe(function (rs) {
                invoice.template = tempTemplate;
                if (rs.status == 'success') {
                    invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
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
                            _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                        }
                    }
                }
                else {
                    _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                    _this.showPopup = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_2.unsubscribe();
            });
        }
    };
    SignManyComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: invoice.id,
            xml_string: xml_string,
            invoice_files: invoice.invoice_files
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.invoiceList[_this.invoiceIndex].statusByMe = 'DA_KY';
                _this.ganXong = true;
                _this.tempKiFile = 0;
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ký số thành công', 'success');
                    _this.daXong = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            // Library.hideloading();
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    SignManyComponent.prototype.xuatHoaDon = function () {
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
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
    };
    SignManyComponent.prototype.kyHangLoat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA('Bạn có chắc chắn ký số các hóa đơn không?', 'Thông báo', function () {
            _this.showPopup = true;
            _this.invoices = JSON.parse(JSON.stringify(_this.invoiceList.filter(function (item) { return item.statusByMe != 'DA_KY'; })));
            console.log(_this.invoices);
            _this.totalInvoice = _this.invoices.length;
            _this.invoiceIndex = 0;
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
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'MENU.list_transport_recept_delivery' | translate }}</h4>\r\n</div>\r\n<div class=\"modal-body body-content\">\r\n  <iframe style=\"margin-left: 170px;\" width=\"70%\" height=\"100%\" id = \"preview-iframe\"></iframe>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n  </div>\r\n  <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.download_file}}\" icon=\"{{_translate.ICONS.download}}\" type=\"default\" (click)=\"dongy()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:500px}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ViewDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDeliveryComponent", function() { return ViewDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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






var ViewDeliveryComponent = /** @class */ (function () {
    function ViewDeliveryComponent(bsModalImportRef, vatService, router, translate, authService) {
        this.bsModalImportRef = bsModalImportRef;
        this.vatService = vatService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ViewDeliveryComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewDeliveryComponent.prototype.ngOnInit = function () {
        this.getPage(1, 'desc', 'created');
    };
    ViewDeliveryComponent.prototype.viewTransport = function (item) {
        var id = item.id;
    };
    ViewDeliveryComponent.prototype.getPage = function (page, sort, order) {
        var _this = this;
        if (sort === void 0) { sort = 'desc'; }
        if (order === void 0) { order = 'created'; }
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
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var sub = this.vatService.xembienbangiaohang(oTransport.id).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.objectUrl = rs.data.file_content;
                _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                var iframe = document.getElementById('preview-iframe');
                iframe.setAttribute("src", _this.mainTest);
                // this.objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
                // let ts = this.objectUrl;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ViewDeliveryComponent.prototype.dong = function () {
        this.router.navigate(['/system/transport-invoice']);
        this.bsModalImportRef.hide();
    };
    ViewDeliveryComponent.prototype.dongy = function () {
        var ids = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            ids.push(item.id);
        }
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var sub = this.vatService.taibienbangiaohang(ids).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ViewDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-delivery',
            template: __webpack_require__(/*! ./view-delivery.component.html */ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.html"),
            styles: [__webpack_require__(/*! ./view-delivery.component.scss */ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ViewDeliveryComponent);
    return ViewDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{lblTitle}}</h4>\r\n  <div>\r\n    <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n    </div>\r\n    <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  </div>\r\n  <div style=\"display: flex; align-items: center;\">\r\n    <dx-button *ngIf=\"isXuatHD\" text=\"Đồng ý\" icon=\"{{_translate.ICONS.save}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <i class=\"fa fa-times\" style=\"font-size:25px; cursor: pointer;\" (click)=\"dong()\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"body-content\">\r\n    <div *ngIf=\"isXuatHD\" class=\"canh-bao\">\r\n      <p style=\"font-weight: 600;\">\r\n        <span class=\"nhap-nhay\"></span>\r\n        <span style=\"font-size: 17px;\">Lưu ý: </span>\r\n        Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên\r\n        hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.\r\n      </p>\r\n    </div>\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <iframe height=\"{{heightT}}\" id=\"preview-iframe\"></iframe>\r\n      <div *ngIf=\"isXuatHD\" class=\"thong-tin-hoa-don\" >\r\n        <div class=\"e-invoice\">\r\n          <p style=\" font-weight: 600;\">Ngày chứng từ : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{ngayHD}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Trạng thái : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">Xuất {{hinhthucxuat}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Tổng tiền : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{total_payment}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header{display:flex;justify-content:space-between;align-items:center}.pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:100%}.modal-body .body-content{display:flex;justify-content:center;align-items:center;flex-direction:column}.nhap-nhay{background:red;padding:0.5px 9px;margin-right:5px;border-radius:57%;-webkit-animation:flicker 1s infinite}.ht-xuat{width:25%;padding:15px;background:#ffffff;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px}@-webkit-keyframes flicker{0%{opacity:0}9%{opacity:0}10%{opacity:.5}13%{opacity:0}20%{opacity:.5}25%{opacity:1}}.example{padding:20px}input[type=button]{padding:5px 10px;margin:10px 5px;border-radius:5px;cursor:pointer;background:#ddd;border:1px solid #ccc}input[type=button]:hover{background:#ccc}.confirm{display:none}.confirm>div:first-of-type{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);top:0px;left:0px}.confirm>div:last-of-type{padding:10px 20px;background:white;position:absolute;width:auto;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;border:1px solid #333}.confirm>div:last-of-type div:first-of-type{min-width:150px;padding:10px}.confirm>div:last-of-type div:last-of-type{text-align:right}.canh-bao{margin-bottom:10px}#preview-iframe{width:calc(100% - 20px)}\n"

/***/ }),

/***/ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoiceComponent", function() { return ViewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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







var ViewInvoiceComponent = /** @class */ (function () {
    function ViewInvoiceComponent(bsModal, vatService, router, translate, authService, socketService) {
        this.bsModal = bsModal;
        this.vatService = vatService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.socketService = socketService;
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ViewInvoiceComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewInvoiceComponent.prototype.ngOnInit = function () {
        this.lblTitle = "BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ";
        this.heightT = screen.availHeight - 195;
        this.connectWebsocket();
        this.configs = this.authService.getConfigs();
        this.getPage(1, 'desc', 'created');
    };
    ViewInvoiceComponent.prototype.viewTransport = function (item) {
        var id = item.id;
    };
    ViewInvoiceComponent.prototype.getPage = function (page, sort, order) {
        var _this = this;
        if (sort === void 0) { sort = 'desc'; }
        if (order === void 0) { order = 'created'; }
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
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var invoicesArr = [];
        invoicesArr.push(oTransport);
        var data = {
            invoices: invoicesArr
        };
        var sub = this.vatService.previewInvoiceImport(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.total_payment = rs.data.invoice.total_payment;
                    _this.objectUrl = rs.data.invoice.pdf_file;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(rs.data.invoice.invoice_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                }
                else {
                    /* Xem hóa đơn từ Client */
                    _this.total_payment = rs.data.invoice.total_payment;
                    var invoice_date = rs.data.invoice.invoice_date;
                    var json_data = rs.data.invoice.json_data;
                    var appCode = "REPX";
                    if (rs.data.invoice.is_html_template)
                        appCode = "HTML";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, invoice_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ViewInvoiceComponent.prototype.dong = function () {
        // this.router.navigate(['/system/transport-invoice']);
        this.bsModal.hide();
    };
    ViewInvoiceComponent.prototype.dongy = function () {
        this.bsModal.content.successSaveItem = 'DONG_Y';
        this.bsModal.hide();
    };
    /* Kết nối đến socket */
    ViewInvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success")
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                else if (data.Status == "error") {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(data.Description, 'error');
                }
            }
        });
    };
    ViewInvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
    };
    ViewInvoiceComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        this.objectUrl = content;
        this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(invoice_date).format('DD/MM/YYYY');
        this.mainTest = "data:application/pdf;base64," + this.objectUrl;
        var iframe = document.getElementById('preview-iframe');
        iframe.setAttribute("src", this.mainTest);
    };
    ViewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-invoice',
            template: __webpack_require__(/*! ./view-invoice.component.html */ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.html"),
            styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], ViewInvoiceComponent);
    return ViewInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/internal-transport.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/internal-transport/internal-transport.module.ts ***!
  \*************************************************************************/
/*! exports provided: InternalTransportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalTransportModule", function() { return InternalTransportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared/vat.service */ "./src/app/modules/vat/shared/vat.service.ts");
/* harmony import */ var _modules_vat_shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared/invoice.resolver */ "./src/app/modules/vat/shared/invoice.resolver.ts");
/* harmony import */ var _modules_vat_shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared/show-invoice.resolver */ "./src/app/modules/vat/shared/show-invoice.resolver.ts");
/* harmony import */ var _internal_transport_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal-transport.routing */ "./src/app/modules/internal-transport/internal-transport.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/internal-transport/components/index/index.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/internal-transport/components/invoice/invoice.component.ts");
/* harmony import */ var _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-invoice/form-invoice.component */ "./src/app/modules/internal-transport/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/internal-transport/components/product-grip/product-grip.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/internal-transport/components/sign-many/sign-many.component.ts");
/* harmony import */ var _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/send-invoices/send-invoices.component */ "./src/app/modules/internal-transport/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/internal-transport/components/send-mail/send-mail.component.ts");
/* harmony import */ var _components_send_list_email_send_list_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/send-list-email/send-list-email.component */ "./src/app/modules/internal-transport/components/send-list-email/send-list-email.component.ts");
/* harmony import */ var _components_import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/import-invoices-from-excel/import-invoices-from-excel.component */ "./src/app/modules/internal-transport/components/import-invoices-from-excel/import-invoices-from-excel.component.ts");
/* harmony import */ var _components_send_report_delivery_send_report_delivery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/send-report-delivery/send-report-delivery.component */ "./src/app/modules/internal-transport/components/send-report-delivery/send-report-delivery.component.ts");
/* harmony import */ var _components_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/view-delivery/view-delivery.component */ "./src/app/modules/internal-transport/components/view-delivery/view-delivery.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/view-invoice/view-invoice.component */ "./src/app/modules/internal-transport/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//library

//general





























var InternalTransportModule = /** @class */ (function () {
    function InternalTransportModule() {
    }
    InternalTransportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _internal_transport_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SomeModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_23__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_24__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_23__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_23__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_23__["DxPopoverModule"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_10__["InvoiceComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_11__["FormInvoiceComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_12__["ProductGripComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_13__["SignManyComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_14__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_15__["SendMailComponent"],
                _components_send_list_email_send_list_email_component__WEBPACK_IMPORTED_MODULE_16__["SendListEmailComponent"],
                _components_import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_17__["ImportInvoicesFromExcelComponent"],
                _components_send_report_delivery_send_report_delivery_component__WEBPACK_IMPORTED_MODULE_18__["SendReportDeliveryComponent"],
                _components_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_19__["ViewDeliveryComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_22__["ViewInvoiceComponent"],
            ],
            entryComponents: [
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_13__["SignManyComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_14__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_15__["SendMailComponent"],
                _components_send_list_email_send_list_email_component__WEBPACK_IMPORTED_MODULE_16__["SendListEmailComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"],
                _components_import_invoices_from_excel_import_invoices_from_excel_component__WEBPACK_IMPORTED_MODULE_17__["ImportInvoicesFromExcelComponent"],
                _components_send_report_delivery_send_report_delivery_component__WEBPACK_IMPORTED_MODULE_18__["SendReportDeliveryComponent"],
                _components_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_19__["ViewDeliveryComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SignatureOffComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_22__["ViewInvoiceComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceMultipageComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__["PreviewInvoiceComponent"]
            ],
            providers: [
                _modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_4__["VatService"],
                _modules_vat_shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_5__["InvoiceResolver"],
                _modules_vat_shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_6__["ShowInvoiceResolver"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_27__["ViewInvoiceService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__["MyBsModalService"]
            ]
        })
    ], InternalTransportModule);
    return InternalTransportModule;
}());



/***/ }),

/***/ "./src/app/modules/internal-transport/internal-transport.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/internal-transport/internal-transport.routing.ts ***!
  \**************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/internal-transport/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/internal-transport/components/invoice/invoice.component.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'create', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"], resolve: { init: _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["InvoiceResolver"] }, canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]], data: { brec: 'create_delivery' } },
    { path: ':invoiceId', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"], resolve: { init: _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["ShowInvoiceResolver"] }, canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]], data: { brec: 'detail_delivery' } },
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



/***/ })

}]);
//# sourceMappingURL=internal-transport-internal-transport-module.js.map