'use strict';

var WebSocket$1 = require('ws');
var crypto$1 = require('node:crypto');
var fs = require('node:fs');
var node_util = require('node:util');
var node_worker_threads = require('node:worker_threads');
var node_perf_hooks = require('node:perf_hooks');
var worker_threads = require('worker_threads');
var require$$0 = require('util');
var require$$1 = require('path');
var require$$2 = require('fs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var crypto__namespace = /*#__PURE__*/_interopNamespaceDefault(crypto$1);
var fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/* tslint:disable: max-classes-per-file max-line-length */
const messages = {
  AbortError: "A request was aborted, for example through a call to IDBTransaction.abort.",
  ConstraintError: "A mutation operation in the transaction failed because a constraint was not satisfied. For example, an object such as an object store or index already exists and a request attempted to create a new one.",
  DataCloneError: "The data being stored could not be cloned by the internal structured cloning algorithm.",
  DataError: "Data provided to an operation does not meet requirements.",
  InvalidAccessError: "An invalid operation was performed on an object. For example transaction creation attempt was made, but an empty scope was provided.",
  InvalidStateError: "An operation was called on an object on which it is not allowed or at a time when it is not allowed. Also occurs if a request is made on a source object that has been deleted or removed. Use TransactionInactiveError or ReadOnlyError when possible, as they are more specific variations of InvalidStateError.",
  NotFoundError: "The operation failed because the requested database object could not be found. For example, an object store did not exist but was being opened.",
  ReadOnlyError: 'The mutating operation was attempted in a "readonly" transaction.',
  TransactionInactiveError: "A request was placed against a transaction which is currently not active, or which is finished.",
  VersionError: "An attempt was made to open a database using a lower version than the existing version."
};
class AbortError extends Error {
  constructor(message = messages.AbortError) {
    super();
    this.name = "AbortError";
    this.message = message;
  }

}
class ConstraintError extends Error {
  constructor(message = messages.ConstraintError) {
    super();
    this.name = "ConstraintError";
    this.message = message;
  }

}
class DataCloneError extends Error {
  constructor(message = messages.DataCloneError) {
    super();
    this.name = "DataCloneError";
    this.message = message;
  }

}
class DataError extends Error {
  constructor(message = messages.DataError) {
    super();
    this.name = "DataError";
    this.message = message;
  }

}
class InvalidAccessError extends Error {
  constructor(message = messages.InvalidAccessError) {
    super();
    this.name = "InvalidAccessError";
    this.message = message;
  }

}
class InvalidStateError extends Error {
  constructor(message = messages.InvalidStateError) {
    super();
    this.name = "InvalidStateError";
    this.message = message;
  }

}
class NotFoundError extends Error {
  constructor(message = messages.NotFoundError) {
    super();
    this.name = "NotFoundError";
    this.message = message;
  }

}
class ReadOnlyError extends Error {
  constructor(message = messages.ReadOnlyError) {
    super();
    this.name = "ReadOnlyError";
    this.message = message;
  }

}
class TransactionInactiveError extends Error {
  constructor(message = messages.TransactionInactiveError) {
    super();
    this.name = "TransactionInactiveError";
    this.message = message;
  }

}
class VersionError extends Error {
  constructor(message = messages.VersionError) {
    super();
    this.name = "VersionError";
    this.message = message;
  }

}

// https://w3c.github.io/IndexedDB/#convert-a-value-to-a-input
const valueToKey = (input, seen) => {
  if (typeof input === "number") {
    if (isNaN(input)) {
      throw new DataError();
    }

    return input;
  } else if (input instanceof Date) {
    const ms = input.valueOf();

    if (isNaN(ms)) {
      throw new DataError();
    }

    return new Date(ms);
  } else if (typeof input === "string") {
    return input;
  } else if (input instanceof ArrayBuffer || typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(input)) {
    if (input instanceof ArrayBuffer) {
      return new Uint8Array(input).buffer;
    }

    return new Uint8Array(input.buffer).buffer;
  } else if (Array.isArray(input)) {
    if (seen === undefined) {
      seen = new Set();
    } else if (seen.has(input)) {
      throw new DataError();
    }

    seen.add(input);
    const keys = [];

    for (let i = 0; i < input.length; i++) {
      const hop = input.hasOwnProperty(i);

      if (!hop) {
        throw new DataError();
      }

      const entry = input[i];
      const key = valueToKey(entry, seen);
      keys.push(key);
    }

    return keys;
  } else {
    throw new DataError();
  }
};

const getType = x => {
  if (typeof x === "number") {
    return "Number";
  }

  if (x instanceof Date) {
    return "Date";
  }

  if (Array.isArray(x)) {
    return "Array";
  }

  if (typeof x === "string") {
    return "String";
  }

  if (x instanceof ArrayBuffer) {
    return "Binary";
  }

  throw new DataError();
}; // https://w3c.github.io/IndexedDB/#compare-two-keys


const cmp = (first, second) => {
  if (second === undefined) {
    throw new TypeError();
  }

  first = valueToKey(first);
  second = valueToKey(second);
  const t1 = getType(first);
  const t2 = getType(second);

  if (t1 !== t2) {
    if (t1 === "Array") {
      return 1;
    }

    if (t1 === "Binary" && (t2 === "String" || t2 === "Date" || t2 === "Number")) {
      return 1;
    }

    if (t1 === "String" && (t2 === "Date" || t2 === "Number")) {
      return 1;
    }

    if (t1 === "Date" && t2 === "Number") {
      return 1;
    }

    return -1;
  }

  if (t1 === "Binary") {
    first = new Uint8Array(first);
    second = new Uint8Array(second);
  }

  if (t1 === "Array" || t1 === "Binary") {
    const length = Math.min(first.length, second.length);

    for (let i = 0; i < length; i++) {
      const result = cmp(first[i], second[i]);

      if (result !== 0) {
        return result;
      }
    }

    if (first.length > second.length) {
      return 1;
    }

    if (first.length < second.length) {
      return -1;
    }

    return 0;
  }

  if (t1 === "Date") {
    if (first.getTime() === second.getTime()) {
      return 0;
    }
  } else {
    if (first === second) {
      return 0;
    }
  }

  return first > second ? 1 : -1;
};

class FDBKeyRange {
  static only(value) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    value = valueToKey(value);
    return new FDBKeyRange(value, value, false, false);
  }

  static lowerBound(lower, open = false) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    lower = valueToKey(lower);
    return new FDBKeyRange(lower, undefined, open, true);
  }

  static upperBound(upper, open = false) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    upper = valueToKey(upper);
    return new FDBKeyRange(undefined, upper, true, open);
  }

  static bound(lower, upper, lowerOpen = false, upperOpen = false) {
    if (arguments.length < 2) {
      throw new TypeError();
    }

    const cmpResult = cmp(lower, upper);

    if (cmpResult === 1 || cmpResult === 0 && (lowerOpen || upperOpen)) {
      throw new DataError();
    }

    lower = valueToKey(lower);
    upper = valueToKey(upper);
    return new FDBKeyRange(lower, upper, lowerOpen, upperOpen);
  }

  constructor(lower, upper, lowerOpen, upperOpen) {
    this.lower = lower;
    this.upper = upper;
    this.lowerOpen = lowerOpen;
    this.upperOpen = upperOpen;
  } // https://w3c.github.io/IndexedDB/#dom-idbkeyrange-includes


  includes(key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    key = valueToKey(key);

    if (this.lower !== undefined) {
      const cmpResult = cmp(this.lower, key);

      if (cmpResult === 1 || cmpResult === 0 && this.lowerOpen) {
        return false;
      }
    }

    if (this.upper !== undefined) {
      const cmpResult = cmp(this.upper, key);

      if (cmpResult === -1 || cmpResult === 0 && this.upperOpen) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return "[object IDBKeyRange]";
  }

}

const extractKey = (keyPath, value) => {
  if (Array.isArray(keyPath)) {
    const result = [];

    for (let item of keyPath) {
      // This doesn't make sense to me based on the spec, but it is needed to pass the W3C KeyPath tests (see same
      // comment in validateKeyPath)
      if (item !== undefined && item !== null && typeof item !== "string" && item.toString) {
        item = item.toString();
      }

      result.push(valueToKey(extractKey(item, value)));
    }

    return result;
  }

  if (keyPath === "") {
    return value;
  }

  let remainingKeyPath = keyPath;
  let object = value;

  while (remainingKeyPath !== null) {
    let identifier;
    const i = remainingKeyPath.indexOf(".");

    if (i >= 0) {
      identifier = remainingKeyPath.slice(0, i);
      remainingKeyPath = remainingKeyPath.slice(i + 1);
    } else {
      identifier = remainingKeyPath;
      remainingKeyPath = null;
    }

    if (object === undefined || object === null || !object.hasOwnProperty(identifier)) {
      return;
    }

    object = object[identifier];
  }

  return object;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var dist = {exports: {}};

(function (module, exports) {
	(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){

	var DOMException = _dereq_('domexception');
	var Typeson = _dereq_('typeson');
	var structuredCloningThrowing = _dereq_('typeson-registry/dist/presets/structured-cloning-throwing');

	// http://stackoverflow.com/a/33268326/786644 - works in browser, worker, and Node.js
	var globalVar = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' ? self : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : Function('return this;')();

	if (!globalVar.DOMException) {
	    globalVar.DOMException = DOMException;
	}

	var TSON = new Typeson().register(structuredCloningThrowing);

	function realisticStructuredClone(obj) {
	    return TSON.revive(TSON.encapsulate(obj));
	}

	module.exports = realisticStructuredClone;

	},{"domexception":5,"typeson":8,"typeson-registry/dist/presets/structured-cloning-throwing":7}],2:[function(_dereq_,module,exports){

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var legacyErrorCodes = _dereq_("./legacy-error-codes.json");
	var idlUtils = _dereq_("./utils.js");

	exports.implementation = function () {
	  function DOMExceptionImpl(_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        message = _ref2[0],
	        name = _ref2[1];

	    _classCallCheck(this, DOMExceptionImpl);

	    this.name = name;
	    this.message = message;
	  }

	  _createClass(DOMExceptionImpl, [{
	    key: "code",
	    get: function get() {
	      return legacyErrorCodes[this.name] || 0;
	    }
	  }]);

	  return DOMExceptionImpl;
	}();

	// A proprietary V8 extension that causes the stack property to appear.
	exports.init = function (impl) {
	  if (Error.captureStackTrace) {
	    var wrapper = idlUtils.wrapperForImpl(impl);
	    Error.captureStackTrace(wrapper, wrapper.constructor);
	  }
	};

	},{"./legacy-error-codes.json":4,"./utils.js":6}],3:[function(_dereq_,module,exports){

	var conversions = _dereq_("webidl-conversions");
	var utils = _dereq_("./utils.js");

	var impl = utils.implSymbol;

	function DOMException() {
	  var args = [];
	  for (var i = 0; i < arguments.length && i < 2; ++i) {
	    args[i] = arguments[i];
	  }

	  if (args[0] !== undefined) {
	    args[0] = conversions["DOMString"](args[0], { context: "Failed to construct 'DOMException': parameter 1" });
	  } else {
	    args[0] = "";
	  }

	  if (args[1] !== undefined) {
	    args[1] = conversions["DOMString"](args[1], { context: "Failed to construct 'DOMException': parameter 2" });
	  } else {
	    args[1] = "Error";
	  }

	  iface.setup(this, args);
	}

	Object.defineProperty(DOMException, "prototype", {
	  value: DOMException.prototype,
	  writable: false,
	  enumerable: false,
	  configurable: false
	});

	Object.defineProperty(DOMException.prototype, "name", {
	  get: function get() {
	    return this[impl]["name"];
	  },


	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(DOMException.prototype, "message", {
	  get: function get() {
	    return this[impl]["message"];
	  },


	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(DOMException.prototype, "code", {
	  get: function get() {
	    return this[impl]["code"];
	  },


	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(DOMException, "INDEX_SIZE_ERR", {
	  value: 1,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INDEX_SIZE_ERR", {
	  value: 1,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "DOMSTRING_SIZE_ERR", {
	  value: 2,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "DOMSTRING_SIZE_ERR", {
	  value: 2,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "HIERARCHY_REQUEST_ERR", {
	  value: 3,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "HIERARCHY_REQUEST_ERR", {
	  value: 3,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "WRONG_DOCUMENT_ERR", {
	  value: 4,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "WRONG_DOCUMENT_ERR", {
	  value: 4,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INVALID_CHARACTER_ERR", {
	  value: 5,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INVALID_CHARACTER_ERR", {
	  value: 5,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NO_DATA_ALLOWED_ERR", {
	  value: 6,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NO_DATA_ALLOWED_ERR", {
	  value: 6,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NO_MODIFICATION_ALLOWED_ERR", {
	  value: 7,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NO_MODIFICATION_ALLOWED_ERR", {
	  value: 7,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NOT_FOUND_ERR", {
	  value: 8,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NOT_FOUND_ERR", {
	  value: 8,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NOT_SUPPORTED_ERR", {
	  value: 9,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NOT_SUPPORTED_ERR", {
	  value: 9,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INUSE_ATTRIBUTE_ERR", {
	  value: 10,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INUSE_ATTRIBUTE_ERR", {
	  value: 10,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INVALID_STATE_ERR", {
	  value: 11,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INVALID_STATE_ERR", {
	  value: 11,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "SYNTAX_ERR", {
	  value: 12,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "SYNTAX_ERR", {
	  value: 12,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INVALID_MODIFICATION_ERR", {
	  value: 13,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INVALID_MODIFICATION_ERR", {
	  value: 13,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NAMESPACE_ERR", {
	  value: 14,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NAMESPACE_ERR", {
	  value: 14,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INVALID_ACCESS_ERR", {
	  value: 15,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INVALID_ACCESS_ERR", {
	  value: 15,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "VALIDATION_ERR", {
	  value: 16,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "VALIDATION_ERR", {
	  value: 16,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "TYPE_MISMATCH_ERR", {
	  value: 17,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "TYPE_MISMATCH_ERR", {
	  value: 17,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "SECURITY_ERR", {
	  value: 18,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "SECURITY_ERR", {
	  value: 18,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "NETWORK_ERR", {
	  value: 19,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "NETWORK_ERR", {
	  value: 19,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "ABORT_ERR", {
	  value: 20,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "ABORT_ERR", {
	  value: 20,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "URL_MISMATCH_ERR", {
	  value: 21,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "URL_MISMATCH_ERR", {
	  value: 21,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "QUOTA_EXCEEDED_ERR", {
	  value: 22,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "QUOTA_EXCEEDED_ERR", {
	  value: 22,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "TIMEOUT_ERR", {
	  value: 23,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "TIMEOUT_ERR", {
	  value: 23,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "INVALID_NODE_TYPE_ERR", {
	  value: 24,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "INVALID_NODE_TYPE_ERR", {
	  value: 24,
	  enumerable: true
	});

	Object.defineProperty(DOMException, "DATA_CLONE_ERR", {
	  value: 25,
	  enumerable: true
	});
	Object.defineProperty(DOMException.prototype, "DATA_CLONE_ERR", {
	  value: 25,
	  enumerable: true
	});

	Object.defineProperty(DOMException.prototype, Symbol.toStringTag, {
	  value: "DOMException",
	  writable: false,
	  enumerable: false,
	  configurable: true
	});

	var iface = {
	  mixedInto: [],
	  is: function is(obj) {
	    if (obj) {
	      if (obj[impl] instanceof Impl.implementation) {
	        return true;
	      }
	      for (var i = 0; i < module.exports.mixedInto.length; ++i) {
	        if (obj instanceof module.exports.mixedInto[i]) {
	          return true;
	        }
	      }
	    }
	    return false;
	  },
	  isImpl: function isImpl(obj) {
	    if (obj) {
	      if (obj instanceof Impl.implementation) {
	        return true;
	      }

	      var wrapper = utils.wrapperForImpl(obj);
	      for (var i = 0; i < module.exports.mixedInto.length; ++i) {
	        if (wrapper instanceof module.exports.mixedInto[i]) {
	          return true;
	        }
	      }
	    }
	    return false;
	  },
	  convert: function convert(obj) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        _ref$context = _ref.context,
	        context = _ref$context === undefined ? "The provided value" : _ref$context;

	    if (module.exports.is(obj)) {
	      return utils.implForWrapper(obj);
	    }
	    throw new TypeError(context + " is not of type 'DOMException'.");
	  },
	  create: function create(constructorArgs, privateData) {
	    var obj = Object.create(DOMException.prototype);
	    this.setup(obj, constructorArgs, privateData);
	    return obj;
	  },
	  createImpl: function createImpl(constructorArgs, privateData) {
	    var obj = Object.create(DOMException.prototype);
	    this.setup(obj, constructorArgs, privateData);
	    return utils.implForWrapper(obj);
	  },
	  _internalSetup: function _internalSetup(obj) {},
	  setup: function setup(obj, constructorArgs, privateData) {
	    if (!privateData) privateData = {};

	    privateData.wrapper = obj;

	    this._internalSetup(obj);
	    Object.defineProperty(obj, impl, {
	      value: new Impl.implementation(constructorArgs, privateData),
	      writable: false,
	      enumerable: false,
	      configurable: true
	    });
	    obj[impl][utils.wrapperSymbol] = obj;
	    if (Impl.init) {
	      Impl.init(obj[impl], privateData);
	    }
	  },

	  interface: DOMException,
	  expose: {
	    Window: { DOMException: DOMException },
	    Worker: { DOMException: DOMException }
	  }
	}; // iface
	module.exports = iface;

	var Impl = _dereq_(".//DOMException-impl.js");

	},{".//DOMException-impl.js":2,"./utils.js":6,"webidl-conversions":9}],4:[function(_dereq_,module,exports){
	module.exports={
	  "IndexSizeError": 1,
	  "DOMStringSizeError": 2,
	  "HierarchyRequestError": 3,
	  "WrongDocumentError": 4,
	  "InvalidCharacterError": 5,
	  "NoDataAllowedError": 6,
	  "NoModificationAllowedError": 7,
	  "NotFoundError": 8,
	  "NotSupportedError": 9,
	  "InUseAttributeError": 10,
	  "InvalidStateError": 11,
	  "SyntaxError": 12,
	  "InvalidModificationError": 13,
	  "NamespaceError": 14,
	  "InvalidAccessError": 15,
	  "ValidationError": 16,
	  "TypeMismatchError": 17,
	  "SecurityError": 18,
	  "NetworkError": 19,
	  "AbortError": 20,
	  "URLMismatchError": 21,
	  "QuotaExceededError": 22,
	  "TimeoutError": 23,
	  "InvalidNodeTypeError": 24,
	  "DataCloneError": 25
	};

	},{}],5:[function(_dereq_,module,exports){

	module.exports = _dereq_("./DOMException").interface;

	Object.setPrototypeOf(module.exports.prototype, Error.prototype);

	},{"./DOMException":3}],6:[function(_dereq_,module,exports){

	// Returns "Type(value) is Object" in ES terminology.

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function isObject(value) {
	  return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value !== null || typeof value === "function";
	}

	function getReferenceToBytes(bufferSource) {
	  // Node.js' Buffer does not allow subclassing for now, so we can get away with a prototype object check for perf.
	  if (Object.getPrototypeOf(bufferSource) === Buffer.prototype) {
	    return bufferSource;
	  }
	  if (bufferSource instanceof ArrayBuffer) {
	    return Buffer.from(bufferSource);
	  }
	  return Buffer.from(bufferSource.buffer, bufferSource.byteOffset, bufferSource.byteLength);
	}

	function getCopyToBytes(bufferSource) {
	  return Buffer.from(getReferenceToBytes(bufferSource));
	}

	function mixin(target, source) {
	  var keys = Object.getOwnPropertyNames(source);
	  for (var i = 0; i < keys.length; ++i) {
	    if (keys[i] in target) {
	      continue;
	    }

	    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
	  }
	}

	var wrapperSymbol = Symbol("wrapper");
	var implSymbol = Symbol("impl");
	var sameObjectCaches = Symbol("SameObject caches");

	function getSameObject(wrapper, prop, creator) {
	  if (!wrapper[sameObjectCaches]) {
	    wrapper[sameObjectCaches] = Object.create(null);
	  }

	  if (prop in wrapper[sameObjectCaches]) {
	    return wrapper[sameObjectCaches][prop];
	  }

	  wrapper[sameObjectCaches][prop] = creator();
	  return wrapper[sameObjectCaches][prop];
	}

	function wrapperForImpl(impl) {
	  return impl ? impl[wrapperSymbol] : null;
	}

	function implForWrapper(wrapper) {
	  return wrapper ? wrapper[implSymbol] : null;
	}

	function tryWrapperForImpl(impl) {
	  var wrapper = wrapperForImpl(impl);
	  return wrapper ? wrapper : impl;
	}

	function tryImplForWrapper(wrapper) {
	  var impl = implForWrapper(wrapper);
	  return impl ? impl : wrapper;
	}

	var iterInternalSymbol = Symbol("internal");
	var IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

	module.exports = {
	  isObject: isObject,
	  getReferenceToBytes: getReferenceToBytes,
	  getCopyToBytes: getCopyToBytes,
	  mixin: mixin,
	  wrapperSymbol: wrapperSymbol,
	  implSymbol: implSymbol,
	  getSameObject: getSameObject,
	  wrapperForImpl: wrapperForImpl,
	  implForWrapper: implForWrapper,
	  tryWrapperForImpl: tryWrapperForImpl,
	  tryImplForWrapper: tryImplForWrapper,
	  iterInternalSymbol: iterInternalSymbol,
	  IteratorPrototype: IteratorPrototype
	};

	},{}],7:[function(_dereq_,module,exports){

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (e, t) {
	  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = t() : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Typeson = e.Typeson || {}, e.Typeson.presets = e.Typeson.presets || {}, e.Typeson.presets.structuredCloningThrowing = t());
	}(undefined, function () {
	  function _typeof$1(e) {
	    return (_typeof$1 = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof2(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
	    })(e);
	  }function _classCallCheck$1(e, t) {
	    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	  }function _defineProperties$1(e, t) {
	    for (var r = 0; r < t.length; r++) {
	      var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
	    }
	  }function _defineProperty$1(e, t, r) {
	    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
	  }function ownKeys$1(e, t) {
	    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
	      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
	        return Object.getOwnPropertyDescriptor(e, t).enumerable;
	      })), r.push.apply(r, n);
	    }return r;
	  }function _toConsumableArray$1(e) {
	    return function _arrayWithoutHoles$1(e) {
	      if (Array.isArray(e)) return _arrayLikeToArray$1(e);
	    }(e) || function _iterableToArray$1(e) {
	      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
	    }(e) || function _unsupportedIterableToArray$1(e, t) {
	      if (!e) return;if ("string" == typeof e) return _arrayLikeToArray$1(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);"Object" === r && e.constructor && (r = e.constructor.name);if ("Map" === r || "Set" === r) return Array.from(e);if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _arrayLikeToArray$1(e, t);
	    }(e) || function _nonIterableSpread$1() {
	      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }();
	  }function _arrayLikeToArray$1(e, t) {
	    (null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) {
	      n[r] = e[r];
	    }return n;
	  }function _typeof(e) {
	    return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(e) {
	      return typeof e === "undefined" ? "undefined" : _typeof2(e);
	    } : function _typeof(e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
	    })(e);
	  }function _classCallCheck(e, t) {
	    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	  }function _defineProperties(e, t) {
	    for (var r = 0; r < t.length; r++) {
	      var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
	    }
	  }function _defineProperty(e, t, r) {
	    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
	  }function ownKeys(e, t) {
	    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
	      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
	        return Object.getOwnPropertyDescriptor(e, t).enumerable;
	      })), r.push.apply(r, n);
	    }return r;
	  }function _objectSpread2(e) {
	    for (var t = 1; t < arguments.length; t++) {
	      var r = null != arguments[t] ? arguments[t] : {};t % 2 ? ownKeys(Object(r), !0).forEach(function (t) {
	        _defineProperty(e, t, r[t]);
	      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (t) {
	        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
	      });
	    }return e;
	  }function _slicedToArray(e, t) {
	    return function _arrayWithHoles(e) {
	      if (Array.isArray(e)) return e;
	    }(e) || function _iterableToArrayLimit(e, t) {
	      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;var r = [],
	          n = !0,
	          i = !1,
	          o = void 0;try {
	        for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) {}
	      } catch (e) {
	        i = !0, o = e;
	      } finally {
	        try {
	          n || null == c.return || c.return();
	        } finally {
	          if (i) throw o;
	        }
	      }return r;
	    }(e, t) || _unsupportedIterableToArray(e, t) || function _nonIterableRest() {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }();
	  }function _toConsumableArray(e) {
	    return function _arrayWithoutHoles(e) {
	      if (Array.isArray(e)) return _arrayLikeToArray(e);
	    }(e) || function _iterableToArray(e) {
	      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
	    }(e) || _unsupportedIterableToArray(e) || function _nonIterableSpread() {
	      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }();
	  }function _unsupportedIterableToArray(e, t) {
	    if (e) {
	      if ("string" == typeof e) return _arrayLikeToArray(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
	    }
	  }function _arrayLikeToArray(e, t) {
	    (null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) {
	      n[r] = e[r];
	    }return n;
	  }var e = function TypesonPromise(e) {
	    _classCallCheck(this, TypesonPromise), this.p = new Promise(e);
	  };e.__typeson__type__ = "TypesonPromise", "undefined" != typeof Symbol && (e.prototype[Symbol.toStringTag] = "TypesonPromise"), e.prototype.then = function (t, r) {
	    var n = this;return new e(function (e, i) {
	      n.p.then(function (r) {
	        e(t ? t(r) : r);
	      }).catch(function (e) {
	        return r ? r(e) : Promise.reject(e);
	      }).then(e, i);
	    });
	  }, e.prototype.catch = function (e) {
	    return this.then(null, e);
	  }, e.resolve = function (t) {
	    return new e(function (e) {
	      e(t);
	    });
	  }, e.reject = function (t) {
	    return new e(function (e, r) {
	      r(t);
	    });
	  }, ["all", "race"].forEach(function (t) {
	    e[t] = function (r) {
	      return new e(function (e, n) {
	        Promise[t](r.map(function (e) {
	          return e && e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e;
	        })).then(e, n);
	      });
	    };
	  });var t = {}.toString,
	      r = {}.hasOwnProperty,
	      n = Object.getPrototypeOf,
	      i = r.toString;function isThenable(e, t) {
	    return isObject(e) && "function" == typeof e.then && (!t || "function" == typeof e.catch);
	  }function toStringTag(e) {
	    return t.call(e).slice(8, -1);
	  }function hasConstructorOf(e, t) {
	    if (!e || "object" !== _typeof(e)) return !1;var o = n(e);if (!o) return null === t;var a = r.call(o, "constructor") && o.constructor;return "function" != typeof a ? null === t : t === a || null !== t && i.call(a) === i.call(t) || "function" == typeof t && "string" == typeof a.__typeson__type__ && a.__typeson__type__ === t.__typeson__type__;
	  }function isPlainObject(e) {
	    return !(!e || "Object" !== toStringTag(e)) && (!n(e) || hasConstructorOf(e, Object));
	  }function isObject(e) {
	    return e && "object" === _typeof(e);
	  }function escapeKeyPathComponent(e) {
	    return e.replace(/~/g, "~0").replace(/\./g, "~1");
	  }function unescapeKeyPathComponent(e) {
	    return e.replace(/~1/g, ".").replace(/~0/g, "~");
	  }function getByKeyPath(e, t) {
	    if ("" === t) return e;var r = t.indexOf(".");if (r > -1) {
	      var n = e[unescapeKeyPathComponent(t.slice(0, r))];return void 0 === n ? void 0 : getByKeyPath(n, t.slice(r + 1));
	    }return e[unescapeKeyPathComponent(t)];
	  }function setAtKeyPath(e, t, r) {
	    if ("" === t) return r;var n = t.indexOf(".");return n > -1 ? setAtKeyPath(e[unescapeKeyPathComponent(t.slice(0, n))], t.slice(n + 1), r) : (e[unescapeKeyPathComponent(t)] = r, e);
	  }function _await(e, t, r) {
	    return r ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
	  }var o = Object.keys,
	      a = Array.isArray,
	      c = {}.hasOwnProperty,
	      u = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];function _async(e) {
	    return function () {
	      for (var t = [], r = 0; r < arguments.length; r++) {
	        t[r] = arguments[r];
	      }try {
	        return Promise.resolve(e.apply(this, t));
	      } catch (e) {
	        return Promise.reject(e);
	      }
	    };
	  }function nestedPathsFirst(e, t) {
	    if ("" === e.keypath) return -1;var r = e.keypath.match(/\./g) || 0,
	        n = t.keypath.match(/\./g) || 0;return r && (r = r.length), n && (n = n.length), r > n ? -1 : r < n ? 1 : e.keypath < t.keypath ? -1 : e.keypath > t.keypath;
	  }var s = function () {
	    function Typeson(e) {
	      _classCallCheck(this, Typeson), this.options = e, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {};
	    }return function _createClass(e, t, r) {
	      return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
	    }(Typeson, [{ key: "stringify", value: function stringify(e, t, r, n) {
	        n = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), n), {}, { stringification: !0 });var i = this.encapsulate(e, null, n);return a(i) ? JSON.stringify(i[0], t, r) : i.then(function (e) {
	          return JSON.stringify(e, t, r);
	        });
	      } }, { key: "stringifySync", value: function stringifySync(e, t, r, n) {
	        return this.stringify(e, t, r, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, n), {}, { sync: !0 }));
	      } }, { key: "stringifyAsync", value: function stringifyAsync(e, t, r, n) {
	        return this.stringify(e, t, r, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, n), {}, { sync: !1 }));
	      } }, { key: "parse", value: function parse(e, t, r) {
	        return r = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), r), {}, { parse: !0 }), this.revive(JSON.parse(e, t), r);
	      } }, { key: "parseSync", value: function parseSync(e, t, r) {
	        return this.parse(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 }));
	      } }, { key: "parseAsync", value: function parseAsync(e, t, r) {
	        return this.parse(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 }));
	      } }, { key: "specialTypeNames", value: function specialTypeNames(e, t) {
	        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return r.returnTypeNames = !0, this.encapsulate(e, t, r);
	      } }, { key: "rootTypeName", value: function rootTypeName(e, t) {
	        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return r.iterateNone = !0, this.encapsulate(e, t, r);
	      } }, { key: "encapsulate", value: function encapsulate(t, r, n) {
	        var i = _async(function (t, r) {
	          return _await(Promise.all(r.map(function (e) {
	            return e[1].p;
	          })), function (n) {
	            return _await(Promise.all(n.map(_async(function (n) {
	              var o = !1,
	                  a = [],
	                  c = _slicedToArray(r.splice(0, 1), 1),
	                  u = _slicedToArray(c[0], 7),
	                  s = u[0],
	                  f = u[2],
	                  l = u[3],
	                  p = u[4],
	                  y = u[5],
	                  v = u[6],
	                  b = _encapsulate(s, n, f, l, a, !0, v),
	                  d = hasConstructorOf(b, e);return function _invoke(e, t) {
	                var r = e();return r && r.then ? r.then(t) : t(r);
	              }(function () {
	                if (s && d) return _await(b.p, function (e) {
	                  return p[y] = e, o = !0, i(t, a);
	                });
	              }, function (e) {
	                return o ? e : (s ? p[y] = b : t = d ? b.p : b, i(t, a));
	              });
	            }))), function () {
	              return t;
	            });
	          });
	        }),
	            s = (n = _objectSpread2(_objectSpread2({ sync: !0 }, this.options), n)).sync,
	            f = this,
	            l = {},
	            p = [],
	            y = [],
	            v = [],
	            b = !("cyclic" in n) || n.cyclic,
	            d = n.encapsulateObserver,
	            h = _encapsulate("", t, b, r || {}, v);function finish(e) {
	          var t = Object.values(l);if (n.iterateNone) return t.length ? t[0] : Typeson.getJSONType(e);if (t.length) {
	            if (n.returnTypeNames) return _toConsumableArray(new Set(t));e && isPlainObject(e) && !c.call(e, "$types") ? e.$types = l : e = { $: e, $types: { $: l } };
	          } else isObject(e) && c.call(e, "$types") && (e = { $: e, $types: !0 });return !n.returnTypeNames && e;
	        }function _adaptBuiltinStateObjectProperties(e, t, r) {
	          Object.assign(e, t);var n = u.map(function (t) {
	            var r = e[t];return delete e[t], r;
	          });r(), u.forEach(function (t, r) {
	            e[t] = n[r];
	          });
	        }function _encapsulate(t, r, i, u, s, v, b) {
	          var h,
	              g = {},
	              m = _typeof(r),
	              O = d ? function (n) {
	            var o = b || u.type || Typeson.getJSONType(r);d(Object.assign(n || g, { keypath: t, value: r, cyclic: i, stateObj: u, promisesData: s, resolvingTypesonPromise: v, awaitingTypesonPromise: hasConstructorOf(r, e) }, { type: o }));
	          } : null;if (["string", "boolean", "number", "undefined"].includes(m)) return void 0 === r || Number.isNaN(r) || r === Number.NEGATIVE_INFINITY || r === Number.POSITIVE_INFINITY ? (h = u.replaced ? r : replace(t, r, u, s, !1, v, O)) !== r && (g = { replaced: h }) : h = r, O && O(), h;if (null === r) return O && O(), r;if (i && !u.iterateIn && !u.iterateUnsetNumeric && r && "object" === _typeof(r)) {
	            var _ = p.indexOf(r);if (!(_ < 0)) return l[t] = "#", O && O({ cyclicKeypath: y[_] }), "#" + y[_];!0 === i && (p.push(r), y.push(t));
	          }var j,
	              S = isPlainObject(r),
	              T = a(r),
	              w = (S || T) && (!f.plainObjectReplacers.length || u.replaced) || u.iterateIn ? r : replace(t, r, u, s, S || T, null, O);if (w !== r ? (h = w, g = { replaced: w }) : "" === t && hasConstructorOf(r, e) ? (s.push([t, r, i, u, void 0, void 0, u.type]), h = r) : T && "object" !== u.iterateIn || "array" === u.iterateIn ? (j = new Array(r.length), g = { clone: j }) : (["function", "symbol"].includes(_typeof(r)) || "toJSON" in r || hasConstructorOf(r, e) || hasConstructorOf(r, Promise) || hasConstructorOf(r, ArrayBuffer)) && !S && "object" !== u.iterateIn ? h = r : (j = {}, u.addLength && (j.length = r.length), g = { clone: j }), O && O(), n.iterateNone) return j || h;if (!j) return h;if (u.iterateIn) {
	            var A = function _loop(n) {
	              var o = { ownKeys: c.call(r, n) };_adaptBuiltinStateObjectProperties(u, o, function () {
	                var o = t + (t ? "." : "") + escapeKeyPathComponent(n),
	                    a = _encapsulate(o, r[n], Boolean(i), u, s, v);hasConstructorOf(a, e) ? s.push([o, a, Boolean(i), u, j, n, u.type]) : void 0 !== a && (j[n] = a);
	              });
	            };for (var P in r) {
	              A(P);
	            }O && O({ endIterateIn: !0, end: !0 });
	          } else o(r).forEach(function (n) {
	            var o = t + (t ? "." : "") + escapeKeyPathComponent(n);_adaptBuiltinStateObjectProperties(u, { ownKeys: !0 }, function () {
	              var t = _encapsulate(o, r[n], Boolean(i), u, s, v);hasConstructorOf(t, e) ? s.push([o, t, Boolean(i), u, j, n, u.type]) : void 0 !== t && (j[n] = t);
	            });
	          }), O && O({ endIterateOwn: !0, end: !0 });if (u.iterateUnsetNumeric) {
	            for (var C = r.length, I = function _loop2(n) {
	              if (!(n in r)) {
	                var o = t + (t ? "." : "") + n;_adaptBuiltinStateObjectProperties(u, { ownKeys: !1 }, function () {
	                  var t = _encapsulate(o, void 0, Boolean(i), u, s, v);hasConstructorOf(t, e) ? s.push([o, t, Boolean(i), u, j, n, u.type]) : void 0 !== t && (j[n] = t);
	                });
	              }
	            }, N = 0; N < C; N++) {
	              I(N);
	            }O && O({ endIterateUnsetNumeric: !0, end: !0 });
	          }return j;
	        }function replace(e, t, r, n, i, o, a) {
	          for (var c = i ? f.plainObjectReplacers : f.nonplainObjectReplacers, u = c.length; u--;) {
	            var p = c[u];if (p.test(t, r)) {
	              var y = p.type;if (f.revivers[y]) {
	                var v = l[e];l[e] = v ? [y].concat(v) : y;
	              }return Object.assign(r, { type: y, replaced: !0 }), !s && p.replaceAsync || p.replace ? (a && a({ replacing: !0 }), _encapsulate(e, p[s || !p.replaceAsync ? "replace" : "replaceAsync"](t, r), b && "readonly", r, n, o, y)) : (a && a({ typeDetected: !0 }), _encapsulate(e, t, b && "readonly", r, n, o, y));
	            }
	          }return t;
	        }return v.length ? s && n.throwOnBadSyncType ? function () {
	          throw new TypeError("Sync method requested but async result obtained");
	        }() : Promise.resolve(i(h, v)).then(finish) : !s && n.throwOnBadSyncType ? function () {
	          throw new TypeError("Async method requested but sync result obtained");
	        }() : n.stringification && s ? [finish(h)] : s ? finish(h) : Promise.resolve(finish(h));
	      } }, { key: "encapsulateSync", value: function encapsulateSync(e, t, r) {
	        return this.encapsulate(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 }));
	      } }, { key: "encapsulateAsync", value: function encapsulateAsync(e, t, r) {
	        return this.encapsulate(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 }));
	      } }, { key: "revive", value: function revive(t, r) {
	        var n = t && t.$types;if (!n) return t;if (!0 === n) return t.$;var i = (r = _objectSpread2(_objectSpread2({ sync: !0 }, this.options), r)).sync,
	            c = [],
	            u = {},
	            s = !0;n.$ && isPlainObject(n.$) && (t = t.$, n = n.$, s = !1);var l = this;function executeReviver(e, t) {
	          var r = _slicedToArray(l.revivers[e] || [], 1)[0];if (!r) throw new Error("Unregistered type: " + e);return i && !("revive" in r) ? t : r[i && r.revive ? "revive" : !i && r.reviveAsync ? "reviveAsync" : "revive"](t, u);
	        }var p = [];function checkUndefined(e) {
	          return hasConstructorOf(e, f) ? void 0 : e;
	        }var y,
	            v = function revivePlainObjects() {
	          var r = [];if (Object.entries(n).forEach(function (e) {
	            var t = _slicedToArray(e, 2),
	                i = t[0],
	                o = t[1];"#" !== o && [].concat(o).forEach(function (e) {
	              _slicedToArray(l.revivers[e] || [null, {}], 2)[1].plain && (r.push({ keypath: i, type: e }), delete n[i]);
	            });
	          }), r.length) return r.sort(nestedPathsFirst).reduce(function reducer(r, n) {
	            var i = n.keypath,
	                o = n.type;if (isThenable(r)) return r.then(function (e) {
	              return reducer(e, { keypath: i, type: o });
	            });var a = getByKeyPath(t, i);if (hasConstructorOf(a = executeReviver(o, a), e)) return a.then(function (e) {
	              var r = setAtKeyPath(t, i, e);r === e && (t = r);
	            });var c = setAtKeyPath(t, i, a);c === a && (t = c);
	          }, void 0);
	        }();return hasConstructorOf(v, e) ? y = v.then(function () {
	          return t;
	        }) : (y = function _revive(t, r, i, u, l) {
	          if (!s || "$types" !== t) {
	            var y = n[t],
	                v = a(r);if (v || isPlainObject(r)) {
	              var b = v ? new Array(r.length) : {};for (o(r).forEach(function (n) {
	                var o = _revive(t + (t ? "." : "") + escapeKeyPathComponent(n), r[n], i || b, b, n),
	                    a = function set(e) {
	                  return hasConstructorOf(e, f) ? b[n] = void 0 : void 0 !== e && (b[n] = e), e;
	                };hasConstructorOf(o, e) ? p.push(o.then(function (e) {
	                  return a(e);
	                })) : a(o);
	              }), r = b; c.length;) {
	                var d = _slicedToArray(c[0], 4),
	                    h = d[0],
	                    g = d[1],
	                    m = d[2],
	                    O = d[3],
	                    _ = getByKeyPath(h, g);if (void 0 === _) break;m[O] = _, c.splice(0, 1);
	              }
	            }if (!y) return r;if ("#" === y) {
	              var j = getByKeyPath(i, r.slice(1));return void 0 === j && c.push([i, r.slice(1), u, l]), j;
	            }return [].concat(y).reduce(function reducer(t, r) {
	              return hasConstructorOf(t, e) ? t.then(function (e) {
	                return reducer(e, r);
	              }) : executeReviver(r, t);
	            }, r);
	          }
	        }("", t, null), p.length && (y = e.resolve(y).then(function (t) {
	          return e.all([t].concat(p));
	        }).then(function (e) {
	          return _slicedToArray(e, 1)[0];
	        }))), isThenable(y) ? i && r.throwOnBadSyncType ? function () {
	          throw new TypeError("Sync method requested but async result obtained");
	        }() : hasConstructorOf(y, e) ? y.p.then(checkUndefined) : y : !i && r.throwOnBadSyncType ? function () {
	          throw new TypeError("Async method requested but sync result obtained");
	        }() : i ? checkUndefined(y) : Promise.resolve(checkUndefined(y));
	      } }, { key: "reviveSync", value: function reviveSync(e, t) {
	        return this.revive(e, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, t), {}, { sync: !0 }));
	      } }, { key: "reviveAsync", value: function reviveAsync(e, t) {
	        return this.revive(e, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, t), {}, { sync: !1 }));
	      } }, { key: "register", value: function register(e, t) {
	        return t = t || {}, [].concat(e).forEach(function R(e) {
	          var r = this;if (a(e)) return e.map(function (e) {
	            return R.call(r, e);
	          });e && o(e).forEach(function (r) {
	            if ("#" === r) throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");if (Typeson.JSON_TYPES.includes(r)) throw new TypeError("Plain JSON object types are reserved as type names");var n = e[r],
	                i = n && n.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers,
	                o = i.filter(function (e) {
	              return e.type === r;
	            });if (o.length && (i.splice(i.indexOf(o[0]), 1), delete this.revivers[r], delete this.types[r]), "function" == typeof n) {
	              var c = n;n = { test: function test(e) {
	                  return e && e.constructor === c;
	                }, replace: function replace(e) {
	                  return _objectSpread2({}, e);
	                }, revive: function revive(e) {
	                  return Object.assign(Object.create(c.prototype), e);
	                } };
	            } else if (a(n)) {
	              var u = _slicedToArray(n, 3);n = { test: u[0], replace: u[1], revive: u[2] };
	            }if (n && n.test) {
	              var s = { type: r, test: n.test.bind(n) };n.replace && (s.replace = n.replace.bind(n)), n.replaceAsync && (s.replaceAsync = n.replaceAsync.bind(n));var f = "number" == typeof t.fallback ? t.fallback : t.fallback ? 0 : Number.POSITIVE_INFINITY;if (n.testPlainObjects ? this.plainObjectReplacers.splice(f, 0, s) : this.nonplainObjectReplacers.splice(f, 0, s), n.revive || n.reviveAsync) {
	                var l = {};n.revive && (l.revive = n.revive.bind(n)), n.reviveAsync && (l.reviveAsync = n.reviveAsync.bind(n)), this.revivers[r] = [l, { plain: n.testPlainObjects }];
	              }this.types[r] = n;
	            }
	          }, this);
	        }, this), this;
	      } }]), Typeson;
	  }(),
	      f = function Undefined() {
	    _classCallCheck(this, Undefined);
	  };f.__typeson__type__ = "TypesonUndefined", s.Undefined = f, s.Promise = e, s.isThenable = isThenable, s.toStringTag = toStringTag, s.hasConstructorOf = hasConstructorOf, s.isObject = isObject, s.isPlainObject = isPlainObject, s.isUserObject = function isUserObject(e) {
	    if (!e || "Object" !== toStringTag(e)) return !1;var t = n(e);return !t || hasConstructorOf(e, Object) || isUserObject(t);
	  }, s.escapeKeyPathComponent = escapeKeyPathComponent, s.unescapeKeyPathComponent = unescapeKeyPathComponent, s.getByKeyPath = getByKeyPath, s.getJSONType = function getJSONType(e) {
	    return null === e ? "null" : Array.isArray(e) ? "array" : _typeof(e);
	  }, s.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"];for (var l = { userObject: { test: function test(e, t) {
	        return s.isUserObject(e);
	      }, replace: function replace(e) {
	        return function _objectSpread2$1(e) {
	          for (var t = 1; t < arguments.length; t++) {
	            var r = null != arguments[t] ? arguments[t] : {};t % 2 ? ownKeys$1(Object(r), !0).forEach(function (t) {
	              _defineProperty$1(e, t, r[t]);
	            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys$1(Object(r)).forEach(function (t) {
	              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
	            });
	          }return e;
	        }({}, e);
	      }, revive: function revive(e) {
	        return e;
	      } } }, p = [{ arrayNonindexKeys: { testPlainObjects: !0, test: function test(e, t) {
	        return !!Array.isArray(e) && (Object.keys(e).some(function (e) {
	          return String(Number.parseInt(e)) !== e;
	        }) && (t.iterateIn = "object", t.addLength = !0), !0);
	      }, replace: function replace(e, t) {
	        return t.iterateUnsetNumeric = !0, e;
	      }, revive: function revive(e) {
	        if (Array.isArray(e)) return e;var t = [];return Object.keys(e).forEach(function (r) {
	          var n = e[r];t[r] = n;
	        }), t;
	      } } }, { sparseUndefined: { test: function test(e, t) {
	        return void 0 === e && !1 === t.ownKeys;
	      }, replace: function replace(e) {
	        return 0;
	      }, revive: function revive(e) {} } }], y = { undef: { test: function test(e, t) {
	        return void 0 === e && (t.ownKeys || !("ownKeys" in t));
	      }, replace: function replace(e) {
	        return 0;
	      }, revive: function revive(e) {
	        return new s.Undefined();
	      } } }, v = { StringObject: { test: function test(e) {
	        return "String" === s.toStringTag(e) && "object" === _typeof$1(e);
	      }, replace: function replace(e) {
	        return String(e);
	      }, revive: function revive(e) {
	        return new String(e);
	      } }, BooleanObject: { test: function test(e) {
	        return "Boolean" === s.toStringTag(e) && "object" === _typeof$1(e);
	      }, replace: function replace(e) {
	        return Boolean(e);
	      }, revive: function revive(e) {
	        return new Boolean(e);
	      } }, NumberObject: { test: function test(e) {
	        return "Number" === s.toStringTag(e) && "object" === _typeof$1(e);
	      }, replace: function replace(e) {
	        return Number(e);
	      }, revive: function revive(e) {
	        return new Number(e);
	      } } }, b = [{ nan: { test: function test(e) {
	        return Number.isNaN(e);
	      }, replace: function replace(e) {
	        return "NaN";
	      }, revive: function revive(e) {
	        return Number.NaN;
	      } } }, { infinity: { test: function test(e) {
	        return e === Number.POSITIVE_INFINITY;
	      }, replace: function replace(e) {
	        return "Infinity";
	      }, revive: function revive(e) {
	        return Number.POSITIVE_INFINITY;
	      } } }, { negativeInfinity: { test: function test(e) {
	        return e === Number.NEGATIVE_INFINITY;
	      }, replace: function replace(e) {
	        return "-Infinity";
	      }, revive: function revive(e) {
	        return Number.NEGATIVE_INFINITY;
	      } } }], d = { date: { test: function test(e) {
	        return "Date" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        var t = e.getTime();return Number.isNaN(t) ? "NaN" : t;
	      }, revive: function revive(e) {
	        return "NaN" === e ? new Date(Number.NaN) : new Date(e);
	      } } }, h = { regexp: { test: function test(e) {
	        return "RegExp" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        return { source: e.source, flags: (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") };
	      }, revive: function revive(e) {
	        var t = e.source,
	            r = e.flags;return new RegExp(t, r);
	      } } }, g = { map: { test: function test(e) {
	        return "Map" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        return _toConsumableArray$1(e.entries());
	      }, revive: function revive(e) {
	        return new Map(e);
	      } } }, m = { set: { test: function test(e) {
	        return "Set" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        return _toConsumableArray$1(e.values());
	      }, revive: function revive(e) {
	        return new Set(e);
	      } } }, O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _ = new Uint8Array(256), j = 0; j < O.length; j++) {
	    _[O.charCodeAt(j)] = j;
	  }var S = function encode(e, t, r) {
	    null == r && (r = e.byteLength);for (var n = new Uint8Array(e, t || 0, r), i = n.length, o = "", a = 0; a < i; a += 3) {
	      o += O[n[a] >> 2], o += O[(3 & n[a]) << 4 | n[a + 1] >> 4], o += O[(15 & n[a + 1]) << 2 | n[a + 2] >> 6], o += O[63 & n[a + 2]];
	    }return i % 3 == 2 ? o = o.slice(0, -1) + "=" : i % 3 == 1 && (o = o.slice(0, -2) + "=="), o;
	  },
	      T = function decode(e) {
	    var t,
	        r,
	        n,
	        i,
	        o = e.length,
	        a = .75 * e.length,
	        c = 0;"=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);for (var u = new ArrayBuffer(a), s = new Uint8Array(u), f = 0; f < o; f += 4) {
	      t = _[e.charCodeAt(f)], r = _[e.charCodeAt(f + 1)], n = _[e.charCodeAt(f + 2)], i = _[e.charCodeAt(f + 3)], s[c++] = t << 2 | r >> 4, s[c++] = (15 & r) << 4 | n >> 2, s[c++] = (3 & n) << 6 | 63 & i;
	    }return u;
	  },
	      w = { arraybuffer: { test: function test(e) {
	        return "ArrayBuffer" === s.toStringTag(e);
	      }, replace: function replace(e, t) {
	        t.buffers || (t.buffers = []);var r = t.buffers.indexOf(e);return r > -1 ? { index: r } : (t.buffers.push(e), S(e));
	      }, revive: function revive(e, t) {
	        if (t.buffers || (t.buffers = []), "object" === _typeof$1(e)) return t.buffers[e.index];var r = T(e);return t.buffers.push(r), r;
	      } } },
	      A = "undefined" == typeof self ? commonjsGlobal : self,
	      P = {};["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach(function (e) {
	    var t = e,
	        r = A[t];r && (P[e.toLowerCase()] = { test: function test(e) {
	        return s.toStringTag(e) === t;
	      }, replace: function replace(e, t) {
	        var r = e.buffer,
	            n = e.byteOffset,
	            i = e.length;t.buffers || (t.buffers = []);var o = t.buffers.indexOf(r);return o > -1 ? { index: o, byteOffset: n, length: i } : (t.buffers.push(r), { encoded: S(r), byteOffset: n, length: i });
	      }, revive: function revive(e, t) {
	        t.buffers || (t.buffers = []);var n,
	            i = e.byteOffset,
	            o = e.length,
	            a = e.encoded,
	            c = e.index;return "index" in e ? n = t.buffers[c] : (n = T(a), t.buffers.push(n)), new r(n, i, o);
	      } });
	  });var C = { dataview: { test: function test(e) {
	        return "DataView" === s.toStringTag(e);
	      }, replace: function replace(e, t) {
	        var r = e.buffer,
	            n = e.byteOffset,
	            i = e.byteLength;t.buffers || (t.buffers = []);var o = t.buffers.indexOf(r);return o > -1 ? { index: o, byteOffset: n, byteLength: i } : (t.buffers.push(r), { encoded: S(r), byteOffset: n, byteLength: i });
	      }, revive: function revive(e, t) {
	        t.buffers || (t.buffers = []);var r,
	            n = e.byteOffset,
	            i = e.byteLength,
	            o = e.encoded,
	            a = e.index;return "index" in e ? r = t.buffers[a] : (r = T(o), t.buffers.push(r)), new DataView(r, n, i);
	      } } },
	      I = { IntlCollator: { test: function test(e) {
	        return s.hasConstructorOf(e, Intl.Collator);
	      }, replace: function replace(e) {
	        return e.resolvedOptions();
	      }, revive: function revive(e) {
	        return new Intl.Collator(e.locale, e);
	      } }, IntlDateTimeFormat: { test: function test(e) {
	        return s.hasConstructorOf(e, Intl.DateTimeFormat);
	      }, replace: function replace(e) {
	        return e.resolvedOptions();
	      }, revive: function revive(e) {
	        return new Intl.DateTimeFormat(e.locale, e);
	      } }, IntlNumberFormat: { test: function test(e) {
	        return s.hasConstructorOf(e, Intl.NumberFormat);
	      }, replace: function replace(e) {
	        return e.resolvedOptions();
	      }, revive: function revive(e) {
	        return new Intl.NumberFormat(e.locale, e);
	      } } };function string2arraybuffer(e) {
	    for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
	      t[r] = e.charCodeAt(r);
	    }return t.buffer;
	  }var N = { file: { test: function test(e) {
	        return "File" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        var t = new XMLHttpRequest();if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad File access: " + t.status);return { type: e.type, stringContents: t.responseText, name: e.name, lastModified: e.lastModified };
	      }, revive: function revive(e) {
	        var t = e.name,
	            r = e.type,
	            n = e.stringContents,
	            i = e.lastModified;return new File([string2arraybuffer(n)], t, { type: r, lastModified: i });
	      }, replaceAsync: function replaceAsync(e) {
	        return new s.Promise(function (t, r) {
	          var n = new FileReader();n.addEventListener("load", function () {
	            t({ type: e.type, stringContents: n.result, name: e.name, lastModified: e.lastModified });
	          }), n.addEventListener("error", function () {
	            r(n.error);
	          }), n.readAsBinaryString(e);
	        });
	      } } },
	      k = { bigint: { test: function test(e) {
	        return "bigint" == typeof e;
	      }, replace: function replace(e) {
	        return String(e);
	      }, revive: function revive(e) {
	        return BigInt(e);
	      } } },
	      E = { bigintObject: { test: function test(e) {
	        return "object" === _typeof$1(e) && s.hasConstructorOf(e, BigInt);
	      }, replace: function replace(e) {
	        return String(e);
	      }, revive: function revive(e) {
	        return new Object(BigInt(e));
	      } } },
	      B = { cryptokey: { test: function test(e) {
	        return "CryptoKey" === s.toStringTag(e) && e.extractable;
	      }, replaceAsync: function replaceAsync(e) {
	        return new s.Promise(function (t, r) {
	          crypto.subtle.exportKey("jwk", e).catch(function (e) {
	            r(e);
	          }).then(function (r) {
	            t({ jwk: r, algorithm: e.algorithm, usages: e.usages });
	          });
	        });
	      }, revive: function revive(e) {
	        var t = e.jwk,
	            r = e.algorithm,
	            n = e.usages;return crypto.subtle.importKey("jwk", t, r, !0, n);
	      } } };return [l, y, p, v, b, d, h, { imagedata: { test: function test(e) {
	        return "ImageData" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        return { array: _toConsumableArray$1(e.data), width: e.width, height: e.height };
	      }, revive: function revive(e) {
	        return new ImageData(new Uint8ClampedArray(e.array), e.width, e.height);
	      } } }, { imagebitmap: { test: function test(e) {
	        return "ImageBitmap" === s.toStringTag(e) || e && e.dataset && "ImageBitmap" === e.dataset.toStringTag;
	      }, replace: function replace(e) {
	        var t = document.createElement("canvas");return t.getContext("2d").drawImage(e, 0, 0), t.toDataURL();
	      }, revive: function revive(e) {
	        var t = document.createElement("canvas"),
	            r = t.getContext("2d"),
	            n = document.createElement("img");return n.addEventListener("load", function () {
	          r.drawImage(n, 0, 0);
	        }), n.src = e, t;
	      }, reviveAsync: function reviveAsync(e) {
	        var t = document.createElement("canvas"),
	            r = t.getContext("2d"),
	            n = document.createElement("img");return n.addEventListener("load", function () {
	          r.drawImage(n, 0, 0);
	        }), n.src = e, createImageBitmap(t);
	      } } }, N, { file: N.file, filelist: { test: function test(e) {
	        return "FileList" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        for (var t = [], r = 0; r < e.length; r++) {
	          t[r] = e.item(r);
	        }return t;
	      }, revive: function revive(e) {
	        return new (function () {
	          function FileList() {
	            _classCallCheck$1(this, FileList), this._files = arguments[0], this.length = this._files.length;
	          }return function _createClass$1(e, t, r) {
	            return t && _defineProperties$1(e.prototype, t), r && _defineProperties$1(e, r), e;
	          }(FileList, [{ key: "item", value: function item(e) {
	              return this._files[e];
	            } }, { key: Symbol.toStringTag, get: function get() {
	              return "FileList";
	            } }]), FileList;
	        }())(e);
	      } } }, { blob: { test: function test(e) {
	        return "Blob" === s.toStringTag(e);
	      }, replace: function replace(e) {
	        var t = new XMLHttpRequest();if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad Blob access: " + t.status);return { type: e.type, stringContents: t.responseText };
	      }, revive: function revive(e) {
	        var t = e.type,
	            r = e.stringContents;return new Blob([string2arraybuffer(r)], { type: t });
	      }, replaceAsync: function replaceAsync(e) {
	        return new s.Promise(function (t, r) {
	          var n = new FileReader();n.addEventListener("load", function () {
	            t({ type: e.type, stringContents: n.result });
	          }), n.addEventListener("error", function () {
	            r(n.error);
	          }), n.readAsBinaryString(e);
	        });
	      } } }].concat("function" == typeof Map ? g : [], "function" == typeof Set ? m : [], "function" == typeof ArrayBuffer ? w : [], "function" == typeof Uint8Array ? P : [], "function" == typeof DataView ? C : [], "undefined" != typeof Intl ? I : [], "undefined" != typeof crypto ? B : [], "undefined" != typeof BigInt ? [k, E] : []).concat({ checkDataCloneException: { test: function test(e) {
	        var t = {}.toString.call(e).slice(8, -1);if (["symbol", "function"].includes(_typeof$1(e)) || ["Arguments", "Module", "Error", "Promise", "WeakMap", "WeakSet", "Event", "MessageChannel"].includes(t) || e && "object" === _typeof$1(e) && "number" == typeof e.nodeType && "function" == typeof e.insertBefore) throw new DOMException("The object cannot be cloned.", "DataCloneError");return !1;
	      } } });
	});


	},{}],8:[function(_dereq_,module,exports){

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _typeof(e) {
	  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof2(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
	  })(e);
	}function _classCallCheck(e, t) {
	  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function _defineProperties(e, t) {
	  for (var r = 0; r < t.length; r++) {
	    var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
	  }
	}function _defineProperty(e, t, r) {
	  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
	}function ownKeys(e, t) {
	  var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
	    var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
	      return Object.getOwnPropertyDescriptor(e, t).enumerable;
	    })), r.push.apply(r, n);
	  }return r;
	}function _objectSpread2(e) {
	  for (var t = 1; t < arguments.length; t++) {
	    var r = null != arguments[t] ? arguments[t] : {};t % 2 ? ownKeys(Object(r), !0).forEach(function (t) {
	      _defineProperty(e, t, r[t]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (t) {
	      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
	    });
	  }return e;
	}function _slicedToArray(e, t) {
	  return function _arrayWithHoles(e) {
	    if (Array.isArray(e)) return e;
	  }(e) || function _iterableToArrayLimit(e, t) {
	    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;var r = [],
	        n = !0,
	        o = !1,
	        a = void 0;try {
	      for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0) {}
	    } catch (e) {
	      o = !0, a = e;
	    } finally {
	      try {
	        n || null == c.return || c.return();
	      } finally {
	        if (o) throw a;
	      }
	    }return r;
	  }(e, t) || _unsupportedIterableToArray(e, t) || function _nonIterableRest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }();
	}function _toConsumableArray(e) {
	  return function _arrayWithoutHoles(e) {
	    if (Array.isArray(e)) return _arrayLikeToArray(e);
	  }(e) || function _iterableToArray(e) {
	    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
	  }(e) || _unsupportedIterableToArray(e) || function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }();
	}function _unsupportedIterableToArray(e, t) {
	  if (e) {
	    if ("string" == typeof e) return _arrayLikeToArray(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
	  }
	}function _arrayLikeToArray(e, t) {
	  (null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) {
	    n[r] = e[r];
	  }return n;
	}var e = function TypesonPromise(e) {
	  _classCallCheck(this, TypesonPromise), this.p = new Promise(e);
	};e.__typeson__type__ = "TypesonPromise", "undefined" != typeof Symbol && (e.prototype[Symbol.toStringTag] = "TypesonPromise"), e.prototype.then = function (t, r) {
	  var n = this;return new e(function (e, o) {
	    n.p.then(function (r) {
	      e(t ? t(r) : r);
	    }).catch(function (e) {
	      return r ? r(e) : Promise.reject(e);
	    }).then(e, o);
	  });
	}, e.prototype.catch = function (e) {
	  return this.then(null, e);
	}, e.resolve = function (t) {
	  return new e(function (e) {
	    e(t);
	  });
	}, e.reject = function (t) {
	  return new e(function (e, r) {
	    r(t);
	  });
	}, ["all", "race", "allSettled"].forEach(function (t) {
	  e[t] = function (r) {
	    return new e(function (e, n) {
	      Promise[t](r.map(function (e) {
	        return e && e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e;
	      })).then(e, n);
	    });
	  };
	});var t = {}.toString,
	    r = {}.hasOwnProperty,
	    n = Object.getPrototypeOf,
	    o = r.toString;function isThenable(e, t) {
	  return isObject(e) && "function" == typeof e.then && (!t || "function" == typeof e.catch);
	}function toStringTag(e) {
	  return t.call(e).slice(8, -1);
	}function hasConstructorOf(e, t) {
	  if (!e || "object" !== _typeof(e)) return !1;var a = n(e);if (!a) return null === t;var i = r.call(a, "constructor") && a.constructor;return "function" != typeof i ? null === t : t === i || null !== t && o.call(i) === o.call(t) || "function" == typeof t && "string" == typeof i.__typeson__type__ && i.__typeson__type__ === t.__typeson__type__;
	}function isPlainObject(e) {
	  return !(!e || "Object" !== toStringTag(e)) && (!n(e) || hasConstructorOf(e, Object));
	}function isObject(e) {
	  return e && "object" === _typeof(e);
	}function escapeKeyPathComponent(e) {
	  return e.replace(/~/g, "~0").replace(/\./g, "~1");
	}function unescapeKeyPathComponent(e) {
	  return e.replace(/~1/g, ".").replace(/~0/g, "~");
	}function getByKeyPath(e, t) {
	  if ("" === t) return e;var r = t.indexOf(".");if (r > -1) {
	    var n = e[unescapeKeyPathComponent(t.slice(0, r))];return void 0 === n ? void 0 : getByKeyPath(n, t.slice(r + 1));
	  }return e[unescapeKeyPathComponent(t)];
	}function setAtKeyPath(e, t, r) {
	  if ("" === t) return r;var n = t.indexOf(".");return n > -1 ? setAtKeyPath(e[unescapeKeyPathComponent(t.slice(0, n))], t.slice(n + 1), r) : (e[unescapeKeyPathComponent(t)] = r, e);
	}function _await(e, t, r) {
	  return r ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
	}var a = Object.keys,
	    i = Array.isArray,
	    c = {}.hasOwnProperty,
	    s = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];function _async(e) {
	  return function () {
	    for (var t = [], r = 0; r < arguments.length; r++) {
	      t[r] = arguments[r];
	    }try {
	      return Promise.resolve(e.apply(this, t));
	    } catch (e) {
	      return Promise.reject(e);
	    }
	  };
	}function nestedPathsFirst(e, t) {
	  if ("" === e.keypath) return -1;var r = e.keypath.match(/\./g) || 0,
	      n = t.keypath.match(/\./g) || 0;return r && (r = r.length), n && (n = n.length), r > n ? -1 : r < n ? 1 : e.keypath < t.keypath ? -1 : e.keypath > t.keypath;
	}var u = function () {
	  function Typeson(e) {
	    _classCallCheck(this, Typeson), this.options = e, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {};
	  }return function _createClass(e, t, r) {
	    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
	  }(Typeson, [{ key: "stringify", value: function stringify(e, t, r, n) {
	      n = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), n), {}, { stringification: !0 });var o = this.encapsulate(e, null, n);return i(o) ? JSON.stringify(o[0], t, r) : o.then(function (e) {
	        return JSON.stringify(e, t, r);
	      });
	    } }, { key: "stringifySync", value: function stringifySync(e, t, r, n) {
	      return this.stringify(e, t, r, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, n), {}, { sync: !0 }));
	    } }, { key: "stringifyAsync", value: function stringifyAsync(e, t, r, n) {
	      return this.stringify(e, t, r, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, n), {}, { sync: !1 }));
	    } }, { key: "parse", value: function parse(e, t, r) {
	      return r = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), r), {}, { parse: !0 }), this.revive(JSON.parse(e, t), r);
	    } }, { key: "parseSync", value: function parseSync(e, t, r) {
	      return this.parse(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 }));
	    } }, { key: "parseAsync", value: function parseAsync(e, t, r) {
	      return this.parse(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 }));
	    } }, { key: "specialTypeNames", value: function specialTypeNames(e, t) {
	      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return r.returnTypeNames = !0, this.encapsulate(e, t, r);
	    } }, { key: "rootTypeName", value: function rootTypeName(e, t) {
	      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return r.iterateNone = !0, this.encapsulate(e, t, r);
	    } }, { key: "encapsulate", value: function encapsulate(t, r, n) {
	      var o = _async(function (t, r) {
	        return _await(Promise.all(r.map(function (e) {
	          return e[1].p;
	        })), function (n) {
	          return _await(Promise.all(n.map(_async(function (n) {
	            var a = !1,
	                i = [],
	                c = _slicedToArray(r.splice(0, 1), 1),
	                s = _slicedToArray(c[0], 7),
	                u = s[0],
	                p = s[2],
	                y = s[3],
	                l = s[4],
	                f = s[5],
	                h = s[6],
	                v = _encapsulate(u, n, p, y, i, !0, h),
	                d = hasConstructorOf(v, e);return function _invoke(e, t) {
	              var r = e();return r && r.then ? r.then(t) : t(r);
	            }(function () {
	              if (u && d) return _await(v.p, function (e) {
	                return l[f] = e, a = !0, o(t, i);
	              });
	            }, function (e) {
	              return a ? e : (u ? l[f] = v : t = d ? v.p : v, o(t, i));
	            });
	          }))), function () {
	            return t;
	          });
	        });
	      }),
	          u = (n = _objectSpread2(_objectSpread2({ sync: !0 }, this.options), n)).sync,
	          p = this,
	          y = {},
	          l = [],
	          f = [],
	          h = [],
	          v = !("cyclic" in n) || n.cyclic,
	          d = n.encapsulateObserver,
	          b = _encapsulate("", t, v, r || {}, h);function finish(e) {
	        var t = Object.values(y);if (n.iterateNone) return t.length ? t[0] : Typeson.getJSONType(e);if (t.length) {
	          if (n.returnTypeNames) return _toConsumableArray(new Set(t));e && isPlainObject(e) && !c.call(e, "$types") ? e.$types = y : e = { $: e, $types: { $: y } };
	        } else isObject(e) && c.call(e, "$types") && (e = { $: e, $types: !0 });return !n.returnTypeNames && e;
	      }function _adaptBuiltinStateObjectProperties(e, t, r) {
	        Object.assign(e, t);var n = s.map(function (t) {
	          var r = e[t];return delete e[t], r;
	        });r(), s.forEach(function (t, r) {
	          e[t] = n[r];
	        });
	      }function _encapsulate(t, r, o, s, u, h, v) {
	        var b,
	            _ = {},
	            O = _typeof(r),
	            j = d ? function (n) {
	          var a = v || s.type || Typeson.getJSONType(r);d(Object.assign(n || _, { keypath: t, value: r, cyclic: o, stateObj: s, promisesData: u, resolvingTypesonPromise: h, awaitingTypesonPromise: hasConstructorOf(r, e) }, { type: a }));
	        } : null;if (["string", "boolean", "number", "undefined"].includes(O)) return void 0 === r || Number.isNaN(r) || r === Number.NEGATIVE_INFINITY || r === Number.POSITIVE_INFINITY ? (b = s.replaced ? r : replace(t, r, s, u, !1, h, j)) !== r && (_ = { replaced: b }) : b = r, j && j(), b;if (null === r) return j && j(), r;if (o && !s.iterateIn && !s.iterateUnsetNumeric && r && "object" === _typeof(r)) {
	          var m = l.indexOf(r);if (!(m < 0)) return y[t] = "#", j && j({ cyclicKeypath: f[m] }), "#" + f[m];!0 === o && (l.push(r), f.push(t));
	        }var S,
	            g = isPlainObject(r),
	            P = i(r),
	            T = (g || P) && (!p.plainObjectReplacers.length || s.replaced) || s.iterateIn ? r : replace(t, r, s, u, g || P, null, j);if (T !== r ? (b = T, _ = { replaced: T }) : "" === t && hasConstructorOf(r, e) ? (u.push([t, r, o, s, void 0, void 0, s.type]), b = r) : P && "object" !== s.iterateIn || "array" === s.iterateIn ? (S = new Array(r.length), _ = { clone: S }) : (["function", "symbol"].includes(_typeof(r)) || "toJSON" in r || hasConstructorOf(r, e) || hasConstructorOf(r, Promise) || hasConstructorOf(r, ArrayBuffer)) && !g && "object" !== s.iterateIn ? b = r : (S = {}, s.addLength && (S.length = r.length), _ = { clone: S }), j && j(), n.iterateNone) return S || b;if (!S) return b;if (s.iterateIn) {
	          var w = function _loop(n) {
	            var a = { ownKeys: c.call(r, n) };_adaptBuiltinStateObjectProperties(s, a, function () {
	              var a = t + (t ? "." : "") + escapeKeyPathComponent(n),
	                  i = _encapsulate(a, r[n], Boolean(o), s, u, h);hasConstructorOf(i, e) ? u.push([a, i, Boolean(o), s, S, n, s.type]) : void 0 !== i && (S[n] = i);
	            });
	          };for (var A in r) {
	            w(A);
	          }j && j({ endIterateIn: !0, end: !0 });
	        } else a(r).forEach(function (n) {
	          var a = t + (t ? "." : "") + escapeKeyPathComponent(n);_adaptBuiltinStateObjectProperties(s, { ownKeys: !0 }, function () {
	            var t = _encapsulate(a, r[n], Boolean(o), s, u, h);hasConstructorOf(t, e) ? u.push([a, t, Boolean(o), s, S, n, s.type]) : void 0 !== t && (S[n] = t);
	          });
	        }), j && j({ endIterateOwn: !0, end: !0 });if (s.iterateUnsetNumeric) {
	          for (var C = r.length, k = function _loop2(n) {
	            if (!(n in r)) {
	              var a = t + (t ? "." : "") + n;_adaptBuiltinStateObjectProperties(s, { ownKeys: !1 }, function () {
	                var t = _encapsulate(a, void 0, Boolean(o), s, u, h);hasConstructorOf(t, e) ? u.push([a, t, Boolean(o), s, S, n, s.type]) : void 0 !== t && (S[n] = t);
	              });
	            }
	          }, N = 0; N < C; N++) {
	            k(N);
	          }j && j({ endIterateUnsetNumeric: !0, end: !0 });
	        }return S;
	      }function replace(e, t, r, n, o, a, i) {
	        for (var c = o ? p.plainObjectReplacers : p.nonplainObjectReplacers, s = c.length; s--;) {
	          var l = c[s];if (l.test(t, r)) {
	            var f = l.type;if (p.revivers[f]) {
	              var h = y[e];y[e] = h ? [f].concat(h) : f;
	            }return Object.assign(r, { type: f, replaced: !0 }), !u && l.replaceAsync || l.replace ? (i && i({ replacing: !0 }), _encapsulate(e, l[u || !l.replaceAsync ? "replace" : "replaceAsync"](t, r), v && "readonly", r, n, a, f)) : (i && i({ typeDetected: !0 }), _encapsulate(e, t, v && "readonly", r, n, a, f));
	          }
	        }return t;
	      }return h.length ? u && n.throwOnBadSyncType ? function () {
	        throw new TypeError("Sync method requested but async result obtained");
	      }() : Promise.resolve(o(b, h)).then(finish) : !u && n.throwOnBadSyncType ? function () {
	        throw new TypeError("Async method requested but sync result obtained");
	      }() : n.stringification && u ? [finish(b)] : u ? finish(b) : Promise.resolve(finish(b));
	    } }, { key: "encapsulateSync", value: function encapsulateSync(e, t, r) {
	      return this.encapsulate(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 }));
	    } }, { key: "encapsulateAsync", value: function encapsulateAsync(e, t, r) {
	      return this.encapsulate(e, t, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 }));
	    } }, { key: "revive", value: function revive(t, r) {
	      var n = t && t.$types;if (!n) return t;if (!0 === n) return t.$;var o = (r = _objectSpread2(_objectSpread2({ sync: !0 }, this.options), r)).sync,
	          c = [],
	          s = {},
	          u = !0;n.$ && isPlainObject(n.$) && (t = t.$, n = n.$, u = !1);var y = this;function executeReviver(e, t) {
	        var r = _slicedToArray(y.revivers[e] || [], 1)[0];if (!r) throw new Error("Unregistered type: " + e);return o && !("revive" in r) ? t : r[o && r.revive ? "revive" : !o && r.reviveAsync ? "reviveAsync" : "revive"](t, s);
	      }var l = [];function checkUndefined(e) {
	        return hasConstructorOf(e, p) ? void 0 : e;
	      }var f,
	          h = function revivePlainObjects() {
	        var r = [];if (Object.entries(n).forEach(function (e) {
	          var t = _slicedToArray(e, 2),
	              o = t[0],
	              a = t[1];"#" !== a && [].concat(a).forEach(function (e) {
	            _slicedToArray(y.revivers[e] || [null, {}], 2)[1].plain && (r.push({ keypath: o, type: e }), delete n[o]);
	          });
	        }), r.length) return r.sort(nestedPathsFirst).reduce(function reducer(r, n) {
	          var o = n.keypath,
	              a = n.type;if (isThenable(r)) return r.then(function (e) {
	            return reducer(e, { keypath: o, type: a });
	          });var i = getByKeyPath(t, o);if (hasConstructorOf(i = executeReviver(a, i), e)) return i.then(function (e) {
	            var r = setAtKeyPath(t, o, e);r === e && (t = r);
	          });var c = setAtKeyPath(t, o, i);c === i && (t = c);
	        }, void 0);
	      }();return hasConstructorOf(h, e) ? f = h.then(function () {
	        return t;
	      }) : (f = function _revive(t, r, o, s, y) {
	        if (!u || "$types" !== t) {
	          var f = n[t],
	              h = i(r);if (h || isPlainObject(r)) {
	            var v = h ? new Array(r.length) : {};for (a(r).forEach(function (n) {
	              var a = _revive(t + (t ? "." : "") + escapeKeyPathComponent(n), r[n], o || v, v, n),
	                  i = function set(e) {
	                return hasConstructorOf(e, p) ? v[n] = void 0 : void 0 !== e && (v[n] = e), e;
	              };hasConstructorOf(a, e) ? l.push(a.then(function (e) {
	                return i(e);
	              })) : i(a);
	            }), r = v; c.length;) {
	              var d = _slicedToArray(c[0], 4),
	                  b = d[0],
	                  _ = d[1],
	                  O = d[2],
	                  j = d[3],
	                  m = getByKeyPath(b, _);if (void 0 === m) break;O[j] = m, c.splice(0, 1);
	            }
	          }if (!f) return r;if ("#" === f) {
	            var S = getByKeyPath(o, r.slice(1));return void 0 === S && c.push([o, r.slice(1), s, y]), S;
	          }return [].concat(f).reduce(function reducer(t, r) {
	            return hasConstructorOf(t, e) ? t.then(function (e) {
	              return reducer(e, r);
	            }) : executeReviver(r, t);
	          }, r);
	        }
	      }("", t, null), l.length && (f = e.resolve(f).then(function (t) {
	        return e.all([t].concat(l));
	      }).then(function (e) {
	        return _slicedToArray(e, 1)[0];
	      }))), isThenable(f) ? o && r.throwOnBadSyncType ? function () {
	        throw new TypeError("Sync method requested but async result obtained");
	      }() : hasConstructorOf(f, e) ? f.p.then(checkUndefined) : f : !o && r.throwOnBadSyncType ? function () {
	        throw new TypeError("Async method requested but sync result obtained");
	      }() : o ? checkUndefined(f) : Promise.resolve(checkUndefined(f));
	    } }, { key: "reviveSync", value: function reviveSync(e, t) {
	      return this.revive(e, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, t), {}, { sync: !0 }));
	    } }, { key: "reviveAsync", value: function reviveAsync(e, t) {
	      return this.revive(e, _objectSpread2(_objectSpread2({ throwOnBadSyncType: !0 }, t), {}, { sync: !1 }));
	    } }, { key: "register", value: function register(e, t) {
	      return t = t || {}, [].concat(e).forEach(function R(e) {
	        var r = this;if (i(e)) return e.map(function (e) {
	          return R.call(r, e);
	        });e && a(e).forEach(function (r) {
	          if ("#" === r) throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");if (Typeson.JSON_TYPES.includes(r)) throw new TypeError("Plain JSON object types are reserved as type names");var n = e[r],
	              o = n && n.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers,
	              a = o.filter(function (e) {
	            return e.type === r;
	          });if (a.length && (o.splice(o.indexOf(a[0]), 1), delete this.revivers[r], delete this.types[r]), "function" == typeof n) {
	            var c = n;n = { test: function test(e) {
	                return e && e.constructor === c;
	              }, replace: function replace(e) {
	                return _objectSpread2({}, e);
	              }, revive: function revive(e) {
	                return Object.assign(Object.create(c.prototype), e);
	              } };
	          } else if (i(n)) {
	            var s = _slicedToArray(n, 3);n = { test: s[0], replace: s[1], revive: s[2] };
	          }if (n && n.test) {
	            var u = { type: r, test: n.test.bind(n) };n.replace && (u.replace = n.replace.bind(n)), n.replaceAsync && (u.replaceAsync = n.replaceAsync.bind(n));var p = "number" == typeof t.fallback ? t.fallback : t.fallback ? 0 : Number.POSITIVE_INFINITY;if (n.testPlainObjects ? this.plainObjectReplacers.splice(p, 0, u) : this.nonplainObjectReplacers.splice(p, 0, u), n.revive || n.reviveAsync) {
	              var y = {};n.revive && (y.revive = n.revive.bind(n)), n.reviveAsync && (y.reviveAsync = n.reviveAsync.bind(n)), this.revivers[r] = [y, { plain: n.testPlainObjects }];
	            }this.types[r] = n;
	          }
	        }, this);
	      }, this), this;
	    } }]), Typeson;
	}(),
	    p = function Undefined() {
	  _classCallCheck(this, Undefined);
	};p.__typeson__type__ = "TypesonUndefined", u.Undefined = p, u.Promise = e, u.isThenable = isThenable, u.toStringTag = toStringTag, u.hasConstructorOf = hasConstructorOf, u.isObject = isObject, u.isPlainObject = isPlainObject, u.isUserObject = function isUserObject(e) {
	  if (!e || "Object" !== toStringTag(e)) return !1;var t = n(e);return !t || hasConstructorOf(e, Object) || isUserObject(t);
	}, u.escapeKeyPathComponent = escapeKeyPathComponent, u.unescapeKeyPathComponent = unescapeKeyPathComponent, u.getByKeyPath = getByKeyPath, u.getJSONType = function getJSONType(e) {
	  return null === e ? "null" : Array.isArray(e) ? "array" : _typeof(e);
	}, u.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"], module.exports = u;

	},{}],9:[function(_dereq_,module,exports){

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _(message, opts) {
	    return (opts && opts.context ? opts.context : "Value") + " " + message + ".";
	}

	function type(V) {
	    if (V === null) {
	        return "Null";
	    }
	    switch (typeof V === "undefined" ? "undefined" : _typeof(V)) {
	        case "undefined":
	            return "Undefined";
	        case "boolean":
	            return "Boolean";
	        case "number":
	            return "Number";
	        case "string":
	            return "String";
	        case "symbol":
	            return "Symbol";
	        case "object":
	        // Falls through
	        case "function":
	        // Falls through
	        default:
	            // Per ES spec, typeof returns an implemention-defined value that is not any of the existing ones for
	            // uncallable non-standard exotic objects. Yet Type() which the Web IDL spec depends on returns Object for
	            // such cases. So treat the default case as an object.
	            return "Object";
	    }
	}

	// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
	function evenRound(x) {
	    // There are four cases for numbers with fractional part being .5:
	    //
	    // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
	    //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
	    //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
	    //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
	    //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
	    // (where n is a non-negative integer)
	    //
	    // Branch here for cases 1 and 4
	    if (x > 0 && x % 1 === +0.5 && (x & 1) === 0 || x < 0 && x % 1 === -0.5 && (x & 1) === 1) {
	        return censorNegativeZero(Math.floor(x));
	    }

	    return censorNegativeZero(Math.round(x));
	}

	function integerPart(n) {
	    return censorNegativeZero(Math.trunc(n));
	}

	function sign(x) {
	    return x < 0 ? -1 : 1;
	}

	function modulo(x, y) {
	    // https://tc39.github.io/ecma262/#eqn-modulo
	    // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
	    var signMightNotMatch = x % y;
	    if (sign(y) !== sign(signMightNotMatch)) {
	        return signMightNotMatch + y;
	    }
	    return signMightNotMatch;
	}

	function censorNegativeZero(x) {
	    return x === 0 ? 0 : x;
	}

	function createIntegerConversion(bitLength, typeOpts) {
	    var isSigned = !typeOpts.unsigned;

	    var lowerBound = void 0;
	    var upperBound = void 0;
	    if (bitLength === 64) {
	        upperBound = Math.pow(2, 53) - 1;
	        lowerBound = !isSigned ? 0 : -Math.pow(2, 53) + 1;
	    } else if (!isSigned) {
	        lowerBound = 0;
	        upperBound = Math.pow(2, bitLength) - 1;
	    } else {
	        lowerBound = -Math.pow(2, bitLength - 1);
	        upperBound = Math.pow(2, bitLength - 1) - 1;
	    }

	    var twoToTheBitLength = Math.pow(2, bitLength);
	    var twoToOneLessThanTheBitLength = Math.pow(2, bitLength - 1);

	    return function (V, opts) {
	        if (opts === undefined) {
	            opts = {};
	        }

	        var x = +V;
	        x = censorNegativeZero(x); // Spec discussion ongoing: https://github.com/heycam/webidl/issues/306

	        if (opts.enforceRange) {
	            if (!Number.isFinite(x)) {
	                throw new TypeError(_("is not a finite number", opts));
	            }

	            x = integerPart(x);

	            if (x < lowerBound || x > upperBound) {
	                throw new TypeError(_("is outside the accepted range of " + lowerBound + " to " + upperBound + ", inclusive", opts));
	            }

	            return x;
	        }

	        if (!Number.isNaN(x) && opts.clamp) {
	            x = Math.min(Math.max(x, lowerBound), upperBound);
	            x = evenRound(x);
	            return x;
	        }

	        if (!Number.isFinite(x) || x === 0) {
	            return 0;
	        }
	        x = integerPart(x);

	        // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
	        // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
	        if (x >= lowerBound && x <= upperBound) {
	            return x;
	        }

	        // These will not work great for bitLength of 64, but oh well. See the README for more details.
	        x = modulo(x, twoToTheBitLength);
	        if (isSigned && x >= twoToOneLessThanTheBitLength) {
	            return x - twoToTheBitLength;
	        }
	        return x;
	    };
	}

	exports.any = function (V) {
	    return V;
	};

	exports.void = function () {
	    return undefined;
	};

	exports.boolean = function (val) {
	    return !!val;
	};

	exports.byte = createIntegerConversion(8, { unsigned: false });
	exports.octet = createIntegerConversion(8, { unsigned: true });

	exports.short = createIntegerConversion(16, { unsigned: false });
	exports["unsigned short"] = createIntegerConversion(16, { unsigned: true });

	exports.long = createIntegerConversion(32, { unsigned: false });
	exports["unsigned long"] = createIntegerConversion(32, { unsigned: true });

	exports["long long"] = createIntegerConversion(64, { unsigned: false });
	exports["unsigned long long"] = createIntegerConversion(64, { unsigned: true });

	exports.double = function (V, opts) {
	    var x = +V;

	    if (!Number.isFinite(x)) {
	        throw new TypeError(_("is not a finite floating-point value", opts));
	    }

	    return x;
	};

	exports["unrestricted double"] = function (V) {
	    var x = +V;

	    return x;
	};

	exports.float = function (V, opts) {
	    var x = +V;

	    if (!Number.isFinite(x)) {
	        throw new TypeError(_("is not a finite floating-point value", opts));
	    }

	    if (Object.is(x, -0)) {
	        return x;
	    }

	    var y = Math.fround(x);

	    if (!Number.isFinite(y)) {
	        throw new TypeError(_("is outside the range of a single-precision floating-point value", opts));
	    }

	    return y;
	};

	exports["unrestricted float"] = function (V) {
	    var x = +V;

	    if (isNaN(x)) {
	        return x;
	    }

	    if (Object.is(x, -0)) {
	        return x;
	    }

	    return Math.fround(x);
	};

	exports.DOMString = function (V, opts) {
	    if (opts === undefined) {
	        opts = {};
	    }

	    if (opts.treatNullAsEmptyString && V === null) {
	        return "";
	    }

	    if ((typeof V === "undefined" ? "undefined" : _typeof(V)) === "symbol") {
	        throw new TypeError(_("is a symbol, which cannot be converted to a string", opts));
	    }

	    return String(V);
	};

	exports.ByteString = function (V, opts) {
	    var x = exports.DOMString(V, opts);
	    var c = void 0;
	    for (var i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
	        if (c > 255) {
	            throw new TypeError(_("is not a valid ByteString", opts));
	        }
	    }

	    return x;
	};

	exports.USVString = function (V, opts) {
	    var S = exports.DOMString(V, opts);
	    var n = S.length;
	    var U = [];
	    for (var i = 0; i < n; ++i) {
	        var c = S.charCodeAt(i);
	        if (c < 0xD800 || c > 0xDFFF) {
	            U.push(String.fromCodePoint(c));
	        } else if (0xDC00 <= c && c <= 0xDFFF) {
	            U.push(String.fromCodePoint(0xFFFD));
	        } else if (i === n - 1) {
	            U.push(String.fromCodePoint(0xFFFD));
	        } else {
	            var d = S.charCodeAt(i + 1);
	            if (0xDC00 <= d && d <= 0xDFFF) {
	                var a = c & 0x3FF;
	                var b = d & 0x3FF;
	                U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
	                ++i;
	            } else {
	                U.push(String.fromCodePoint(0xFFFD));
	            }
	        }
	    }

	    return U.join("");
	};

	exports.object = function (V, opts) {
	    if (type(V) !== "Object") {
	        throw new TypeError(_("is not an object", opts));
	    }

	    return V;
	};

	// Not exported, but used in Function and VoidFunction.

	// Neither Function nor VoidFunction is defined with [TreatNonObjectAsNull], so
	// handling for that is omitted.
	function convertCallbackFunction(V, opts) {
	    if (typeof V !== "function") {
	        throw new TypeError(_("is not a function", opts));
	    }
	    return V;
	}

	[Error, ArrayBuffer, // The IsDetachedBuffer abstract operation is not exposed in JS
	DataView, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array].forEach(function (func) {
	    var name = func.name;
	    var article = /^[AEIOU]/.test(name) ? "an" : "a";
	    exports[name] = function (V, opts) {
	        if (!(V instanceof func)) {
	            throw new TypeError(_("is not " + article + " " + name + " object", opts));
	        }

	        return V;
	    };
	});

	// Common definitions

	exports.ArrayBufferView = function (V, opts) {
	    if (!ArrayBuffer.isView(V)) {
	        throw new TypeError(_("is not a view on an ArrayBuffer object", opts));
	    }

	    return V;
	};

	exports.BufferSource = function (V, opts) {
	    if (!(ArrayBuffer.isView(V) || V instanceof ArrayBuffer)) {
	        throw new TypeError(_("is not an ArrayBuffer object or a view on one", opts));
	    }

	    return V;
	};

	exports.DOMTimeStamp = exports["unsigned long long"];

	exports.Function = convertCallbackFunction;

	exports.VoidFunction = convertCallbackFunction;

	},{}]},{},[1])(1)
	}); 
} (dist));

var distExports = dist.exports;
var realisticStructuredClone = /*@__PURE__*/getDefaultExportFromCjs(distExports);

// Built-in structuredClone arrived in Node 17, so we need to keep this file around as long as we support Node 16
// @ts-expect-error

const structuredCloneWrapper = input => {
  if (typeof structuredClone !== "undefined") {
    return structuredClone(input);
  }

  try {
    return realisticStructuredClone(input);
  } catch (err) {
    throw new DataCloneError();
  }
};

const getEffectiveObjectStore = cursor => {
  if (cursor.source instanceof FDBObjectStore$1) {
    return cursor.source;
  }

  return cursor.source.objectStore;
}; // This takes a key range, a list of lower bounds, and a list of upper bounds and combines them all into a single key
// range. It does not handle gt/gte distinctions, because it doesn't really matter much anyway, since for next/prev
// cursor iteration it'd also have to look at values to be precise, which would be complicated. This should get us 99%
// of the way there.


const makeKeyRange = (range, lowers, uppers) => {
  // Start with bounds from range
  let lower = range !== undefined ? range.lower : undefined;
  let upper = range !== undefined ? range.upper : undefined; // Augment with values from lowers and uppers

  for (const lowerTemp of lowers) {
    if (lowerTemp === undefined) {
      continue;
    }

    if (lower === undefined || cmp(lower, lowerTemp) === 1) {
      lower = lowerTemp;
    }
  }

  for (const upperTemp of uppers) {
    if (upperTemp === undefined) {
      continue;
    }

    if (upper === undefined || cmp(upper, upperTemp) === -1) {
      upper = upperTemp;
    }
  }

  if (lower !== undefined && upper !== undefined) {
    return FDBKeyRange.bound(lower, upper);
  }

  if (lower !== undefined) {
    return FDBKeyRange.lowerBound(lower);
  }

  if (upper !== undefined) {
    return FDBKeyRange.upperBound(upper);
  }
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#cursor


class FDBCursor {
  _gotValue = false;
  _position = undefined; // Key of previously returned record

  _objectStorePosition = undefined;
  _keyOnly = false;
  _key = undefined;
  _primaryKey = undefined;

  constructor(source, range, direction = "next", request, keyOnly = false) {
    this._range = range;
    this._source = source;
    this._direction = direction;
    this._request = request;
    this._keyOnly = keyOnly;
  } // Read only properties


  get source() {
    return this._source;
  }

  set source(val) {
    /* For babel */
  }

  get request() {
    return this._request;
  }

  set request(val) {
    /* For babel */
  }

  get direction() {
    return this._direction;
  }

  set direction(val) {
    /* For babel */
  }

  get key() {
    return this._key;
  }

  set key(val) {
    /* For babel */
  }

  get primaryKey() {
    return this._primaryKey;
  }

  set primaryKey(val) {
    /* For babel */
  } // https://w3c.github.io/IndexedDB/#iterate-a-cursor


  _iterate(key, primaryKey) {
    const sourceIsObjectStore = this.source instanceof FDBObjectStore$1; // Can't use sourceIsObjectStore because TypeScript

    const records = this.source instanceof FDBObjectStore$1 ? this.source._rawObjectStore.records : this.source._rawIndex.records;
    let foundRecord;

    if (this.direction === "next") {
      const range = makeKeyRange(this._range, [key, this._position], []);

      for (const record of records.values(range)) {
        const cmpResultKey = key !== undefined ? cmp(record.key, key) : undefined;
        const cmpResultPosition = this._position !== undefined ? cmp(record.key, this._position) : undefined;

        if (key !== undefined) {
          if (cmpResultKey === -1) {
            continue;
          }
        }

        if (primaryKey !== undefined) {
          if (cmpResultKey === -1) {
            continue;
          }

          const cmpResultPrimaryKey = cmp(record.value, primaryKey);

          if (cmpResultKey === 0 && cmpResultPrimaryKey === -1) {
            continue;
          }
        }

        if (this._position !== undefined && sourceIsObjectStore) {
          if (cmpResultPosition !== 1) {
            continue;
          }
        }

        if (this._position !== undefined && !sourceIsObjectStore) {
          if (cmpResultPosition === -1) {
            continue;
          }

          if (cmpResultPosition === 0 && cmp(record.value, this._objectStorePosition) !== 1) {
            continue;
          }
        }

        if (this._range !== undefined) {
          if (!this._range.includes(record.key)) {
            continue;
          }
        }

        foundRecord = record;
        break;
      }
    } else if (this.direction === "nextunique") {
      // This could be done without iterating, if the range was defined slightly better (to handle gt/gte cases).
      // But the performance difference should be small, and that wouldn't work anyway for directions where the
      // value needs to be used (like next and prev).
      const range = makeKeyRange(this._range, [key, this._position], []);

      for (const record of records.values(range)) {
        if (key !== undefined) {
          if (cmp(record.key, key) === -1) {
            continue;
          }
        }

        if (this._position !== undefined) {
          if (cmp(record.key, this._position) !== 1) {
            continue;
          }
        }

        if (this._range !== undefined) {
          if (!this._range.includes(record.key)) {
            continue;
          }
        }

        foundRecord = record;
        break;
      }
    } else if (this.direction === "prev") {
      const range = makeKeyRange(this._range, [], [key, this._position]);

      for (const record of records.values(range, "prev")) {
        const cmpResultKey = key !== undefined ? cmp(record.key, key) : undefined;
        const cmpResultPosition = this._position !== undefined ? cmp(record.key, this._position) : undefined;

        if (key !== undefined) {
          if (cmpResultKey === 1) {
            continue;
          }
        }

        if (primaryKey !== undefined) {
          if (cmpResultKey === 1) {
            continue;
          }

          const cmpResultPrimaryKey = cmp(record.value, primaryKey);

          if (cmpResultKey === 0 && cmpResultPrimaryKey === 1) {
            continue;
          }
        }

        if (this._position !== undefined && sourceIsObjectStore) {
          if (cmpResultPosition !== -1) {
            continue;
          }
        }

        if (this._position !== undefined && !sourceIsObjectStore) {
          if (cmpResultPosition === 1) {
            continue;
          }

          if (cmpResultPosition === 0 && cmp(record.value, this._objectStorePosition) !== -1) {
            continue;
          }
        }

        if (this._range !== undefined) {
          if (!this._range.includes(record.key)) {
            continue;
          }
        }

        foundRecord = record;
        break;
      }
    } else if (this.direction === "prevunique") {
      let tempRecord;
      const range = makeKeyRange(this._range, [], [key, this._position]);

      for (const record of records.values(range, "prev")) {
        if (key !== undefined) {
          if (cmp(record.key, key) === 1) {
            continue;
          }
        }

        if (this._position !== undefined) {
          if (cmp(record.key, this._position) !== -1) {
            continue;
          }
        }

        if (this._range !== undefined) {
          if (!this._range.includes(record.key)) {
            continue;
          }
        }

        tempRecord = record;
        break;
      }

      if (tempRecord) {
        foundRecord = records.get(tempRecord.key);
      }
    }

    let result;

    if (!foundRecord) {
      this._key = undefined;

      if (!sourceIsObjectStore) {
        this._objectStorePosition = undefined;
      } // "this instanceof FDBCursorWithValue" would be better and not require (this as any), but causes runtime
      // error due to circular dependency.


      if (!this._keyOnly && this.toString() === "[object IDBCursorWithValue]") {
        this.value = undefined;
      }

      result = null;
    } else {
      this._position = foundRecord.key;

      if (!sourceIsObjectStore) {
        this._objectStorePosition = foundRecord.value;
      }

      this._key = foundRecord.key;

      if (sourceIsObjectStore) {
        this._primaryKey = structuredCloneWrapper(foundRecord.key);

        if (!this._keyOnly && this.toString() === "[object IDBCursorWithValue]") {
          this.value = structuredCloneWrapper(foundRecord.value);
        }
      } else {
        this._primaryKey = structuredCloneWrapper(foundRecord.value);

        if (!this._keyOnly && this.toString() === "[object IDBCursorWithValue]") {
          if (this.source instanceof FDBObjectStore$1) {
            // Can't use sourceIsObjectStore because TypeScript
            throw new Error("This should never happen");
          }

          const value = this.source.objectStore._rawObjectStore.getValue(foundRecord.value);

          this.value = structuredCloneWrapper(value);
        }
      }

      this._gotValue = true;
      result = this;
    }

    return result;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBCursor-update-IDBRequest-any-value


  update(value) {
    if (value === undefined) {
      throw new TypeError();
    }

    const effectiveObjectStore = getEffectiveObjectStore(this);
    const effectiveKey = this.source.hasOwnProperty("_rawIndex") ? this.primaryKey : this._position;
    const transaction = effectiveObjectStore.transaction;

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (transaction.mode === "readonly") {
      throw new ReadOnlyError();
    }

    if (effectiveObjectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    if (!(this.source instanceof FDBObjectStore$1) && this.source._rawIndex.deleted) {
      throw new InvalidStateError();
    }

    if (!this._gotValue || !this.hasOwnProperty("value")) {
      throw new InvalidStateError();
    }

    const clone = structuredCloneWrapper(value);

    if (effectiveObjectStore.keyPath !== null) {
      let tempKey;

      try {
        tempKey = extractKey(effectiveObjectStore.keyPath, clone);
      } catch (err) {
        /* Handled immediately below */
      }

      if (cmp(tempKey, effectiveKey) !== 0) {
        throw new DataError();
      }
    }

    const record = {
      key: effectiveKey,
      value: clone
    };
    return transaction._execRequestAsync({
      operation: effectiveObjectStore._rawObjectStore.storeRecord.bind(effectiveObjectStore._rawObjectStore, record, false, transaction._rollbackLog),
      source: this
    });
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBCursor-advance-void-unsigned-long-count


  advance(count) {
    if (!Number.isInteger(count) || count <= 0) {
      throw new TypeError();
    }

    const effectiveObjectStore = getEffectiveObjectStore(this);
    const transaction = effectiveObjectStore.transaction;

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (effectiveObjectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    if (!(this.source instanceof FDBObjectStore$1) && this.source._rawIndex.deleted) {
      throw new InvalidStateError();
    }

    if (!this._gotValue) {
      throw new InvalidStateError();
    }

    if (this._request) {
      this._request.readyState = "pending";
    }

    transaction._execRequestAsync({
      operation: () => {
        let result;

        for (let i = 0; i < count; i++) {
          result = this._iterate(); // Not sure why this is needed

          if (!result) {
            break;
          }
        }

        return result;
      },
      request: this._request,
      source: this.source
    });

    this._gotValue = false;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBCursor-continue-void-any-key


  continue(key) {
    const effectiveObjectStore = getEffectiveObjectStore(this);
    const transaction = effectiveObjectStore.transaction;

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (effectiveObjectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    if (!(this.source instanceof FDBObjectStore$1) && this.source._rawIndex.deleted) {
      throw new InvalidStateError();
    }

    if (!this._gotValue) {
      throw new InvalidStateError();
    }

    if (key !== undefined) {
      key = valueToKey(key);
      const cmpResult = cmp(key, this._position);

      if (cmpResult <= 0 && (this.direction === "next" || this.direction === "nextunique") || cmpResult >= 0 && (this.direction === "prev" || this.direction === "prevunique")) {
        throw new DataError();
      }
    }

    if (this._request) {
      this._request.readyState = "pending";
    }

    transaction._execRequestAsync({
      operation: this._iterate.bind(this, key),
      request: this._request,
      source: this.source
    });

    this._gotValue = false;
  } // hthttps://w3c.github.io/IndexedDB/#dom-idbcursor-continueprimarykey


  continuePrimaryKey(key, primaryKey) {
    const effectiveObjectStore = getEffectiveObjectStore(this);
    const transaction = effectiveObjectStore.transaction;

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (effectiveObjectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    if (!(this.source instanceof FDBObjectStore$1) && this.source._rawIndex.deleted) {
      throw new InvalidStateError();
    }

    if (this.source instanceof FDBObjectStore$1 || this.direction !== "next" && this.direction !== "prev") {
      throw new InvalidAccessError();
    }

    if (!this._gotValue) {
      throw new InvalidStateError();
    } // Not sure about this


    if (key === undefined || primaryKey === undefined) {
      throw new DataError();
    }

    key = valueToKey(key);
    const cmpResult = cmp(key, this._position);

    if (cmpResult === -1 && this.direction === "next" || cmpResult === 1 && this.direction === "prev") {
      throw new DataError();
    }

    const cmpResult2 = cmp(primaryKey, this._objectStorePosition);

    if (cmpResult === 0) {
      if (cmpResult2 <= 0 && this.direction === "next" || cmpResult2 >= 0 && this.direction === "prev") {
        throw new DataError();
      }
    }

    if (this._request) {
      this._request.readyState = "pending";
    }

    transaction._execRequestAsync({
      operation: this._iterate.bind(this, key, primaryKey),
      request: this._request,
      source: this.source
    });

    this._gotValue = false;
  }

  delete() {
    const effectiveObjectStore = getEffectiveObjectStore(this);
    const effectiveKey = this.source.hasOwnProperty("_rawIndex") ? this.primaryKey : this._position;
    const transaction = effectiveObjectStore.transaction;

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (transaction.mode === "readonly") {
      throw new ReadOnlyError();
    }

    if (effectiveObjectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    if (!(this.source instanceof FDBObjectStore$1) && this.source._rawIndex.deleted) {
      throw new InvalidStateError();
    }

    if (!this._gotValue || !this.hasOwnProperty("value")) {
      throw new InvalidStateError();
    }

    return transaction._execRequestAsync({
      operation: effectiveObjectStore._rawObjectStore.deleteRecord.bind(effectiveObjectStore._rawObjectStore, effectiveKey, transaction._rollbackLog),
      source: this
    });
  }

  toString() {
    return "[object IDBCursor]";
  }

}

class FDBCursorWithValue extends FDBCursor {
  value = undefined;

  constructor(source, range, direction, request) {
    super(source, range, direction, request);
  }

  toString() {
    return "[object IDBCursorWithValue]";
  }

}

const stopped = (event, listener) => {
  return event.immediatePropagationStopped || event.eventPhase === event.CAPTURING_PHASE && listener.capture === false || event.eventPhase === event.BUBBLING_PHASE && listener.capture === true;
}; // http://www.w3.org/TR/dom/#concept-event-listener-invoke


const invokeEventListeners = (event, obj) => {
  event.currentTarget = obj; // The callback might cause obj.listeners to mutate as we traverse it.
  // Take a copy of the array so that nothing sneaks in and we don't lose
  // our place.

  for (const listener of obj.listeners.slice()) {
    if (event.type !== listener.type || stopped(event, listener)) {
      continue;
    } // @ts-ignore


    listener.callback.call(event.currentTarget, event);
  }

  const typeToProp = {
    abort: "onabort",
    blocked: "onblocked",
    complete: "oncomplete",
    error: "onerror",
    success: "onsuccess",
    upgradeneeded: "onupgradeneeded",
    versionchange: "onversionchange"
  };
  const prop = typeToProp[event.type];

  if (prop === undefined) {
    throw new Error(`Unknown event type: "${event.type}"`);
  }

  const callback = event.currentTarget[prop];

  if (callback) {
    const listener = {
      callback,
      capture: false,
      type: event.type
    };

    if (!stopped(event, listener)) {
      // @ts-ignore
      listener.callback.call(event.currentTarget, event);
    }
  }
};

class FakeEventTarget {
  listeners = []; // These will be overridden in individual subclasses and made not readonly

  addEventListener(type, callback, capture = false) {
    this.listeners.push({
      callback,
      capture,
      type
    });
  }

  removeEventListener(type, callback, capture = false) {
    const i = this.listeners.findIndex(listener => {
      return listener.type === type && listener.callback === callback && listener.capture === capture;
    });
    this.listeners.splice(i, 1);
  } // http://www.w3.org/TR/dom/#dispatching-events


  dispatchEvent(event) {
    if (event.dispatched || !event.initialized) {
      throw new InvalidStateError("The object is in an invalid state.");
    }

    event.isTrusted = false;
    event.dispatched = true;
    event.target = this; // NOT SURE WHEN THIS SHOULD BE SET        event.eventPath = [];

    event.eventPhase = event.CAPTURING_PHASE;

    for (const obj of event.eventPath) {
      if (!event.propagationStopped) {
        invokeEventListeners(event, obj);
      }
    }

    event.eventPhase = event.AT_TARGET;

    if (!event.propagationStopped) {
      invokeEventListeners(event, event.target);
    }

    if (event.bubbles) {
      event.eventPath.reverse();
      event.eventPhase = event.BUBBLING_PHASE;

      for (const obj of event.eventPath) {
        if (!event.propagationStopped) {
          invokeEventListeners(event, obj);
        }
      }
    }

    event.dispatched = false;
    event.eventPhase = event.NONE;
    event.currentTarget = null;

    if (event.canceled) {
      return false;
    }

    return true;
  }

}

class FDBRequest extends FakeEventTarget {
  _result = null;
  _error = null;
  source = null;
  transaction = null;
  readyState = "pending";
  onsuccess = null;
  onerror = null;

  get error() {
    if (this.readyState === "pending") {
      throw new InvalidStateError();
    }

    return this._error;
  }

  set error(value) {
    this._error = value;
  }

  get result() {
    if (this.readyState === "pending") {
      throw new InvalidStateError();
    }

    return this._result;
  }

  set result(value) {
    this._result = value;
  }

  toString() {
    return "[object IDBRequest]";
  }

}

// https://heycam.github.io/webidl/#EnforceRange
const enforceRange = (num, type) => {
  const min = 0;
  const max = type === "unsigned long" ? 4294967295 : 9007199254740991;

  if (isNaN(num) || num < min || num > max) {
    throw new TypeError();
  }

  if (num >= 0) {
    return Math.floor(num);
  }
};

class FakeDOMStringList extends Array {
  contains(value) {
    for (const value2 of this) {
      if (value === value2) {
        return true;
      }
    }

    return false;
  }

  item(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }

    return this[i];
  } // Used internally, should not be used by others. I could maybe get rid of these and replace rather than mutate, but too lazy to check the spec.


  _push(...values) {
    return Array.prototype.push.call(this, ...values);
  }

  _sort(...values) {
    return Array.prototype.sort.call(this, ...values);
  }

} // Would be nice to remove these properties to fix https://github.com/dumbmatter/fakeIndexedDB/issues/66 but for some reason it breaks Dexie - see test/dexie.js and FakeDOMStringList tests

const valueToKeyRange = (value, nullDisallowedFlag = false) => {
  if (value instanceof FDBKeyRange) {
    return value;
  }

  if (value === null || value === undefined) {
    if (nullDisallowedFlag) {
      throw new DataError();
    }

    return new FDBKeyRange(undefined, undefined, false, false);
  }

  const key = valueToKey(value);
  return FDBKeyRange.only(key);
};

const confirmActiveTransaction$1 = index => {
  if (index._rawIndex.deleted || index.objectStore._rawObjectStore.deleted) {
    throw new InvalidStateError();
  }

  if (index.objectStore.transaction._state !== "active") {
    throw new TransactionInactiveError();
  }
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#idl-def-IDBIndex


class FDBIndex {
  constructor(objectStore, rawIndex) {
    this._rawIndex = rawIndex;
    this._name = rawIndex.name;
    this.objectStore = objectStore;
    this.keyPath = rawIndex.keyPath;
    this.multiEntry = rawIndex.multiEntry;
    this.unique = rawIndex.unique;
  }

  get name() {
    return this._name;
  } // https://w3c.github.io/IndexedDB/#dom-idbindex-name


  set name(name) {
    const transaction = this.objectStore.transaction;

    if (!transaction.db._runningVersionchangeTransaction) {
      throw new InvalidStateError();
    }

    if (transaction._state !== "active") {
      throw new TransactionInactiveError();
    }

    if (this._rawIndex.deleted || this.objectStore._rawObjectStore.deleted) {
      throw new InvalidStateError();
    }

    name = String(name);

    if (name === this._name) {
      return;
    }

    if (this.objectStore.indexNames.contains(name)) {
      throw new ConstraintError();
    }

    const oldName = this._name;
    const oldIndexNames = [...this.objectStore.indexNames];
    this._name = name;
    this._rawIndex.name = name;

    this.objectStore._indexesCache.delete(oldName);

    this.objectStore._indexesCache.set(name, this);

    this.objectStore._rawObjectStore.rawIndexes.delete(oldName);

    this.objectStore._rawObjectStore.rawIndexes.set(name, this._rawIndex);

    this.objectStore.indexNames = new FakeDOMStringList(...Array.from(this.objectStore._rawObjectStore.rawIndexes.keys()).filter(indexName => {
      const index = this.objectStore._rawObjectStore.rawIndexes.get(indexName);

      return index && !index.deleted;
    }).sort());

    transaction._rollbackLog.push(() => {
      this._name = oldName;
      this._rawIndex.name = oldName;

      this.objectStore._indexesCache.delete(name);

      this.objectStore._indexesCache.set(oldName, this);

      this.objectStore._rawObjectStore.rawIndexes.delete(name);

      this.objectStore._rawObjectStore.rawIndexes.set(oldName, this._rawIndex);

      this.objectStore.indexNames = new FakeDOMStringList(...oldIndexNames);
    });
  } // tslint:disable-next-line max-line-length
  // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBIndex-openCursor-IDBRequest-any-range-IDBCursorDirection-direction


  openCursor(range, direction) {
    confirmActiveTransaction$1(this);

    if (range === null) {
      range = undefined;
    }

    if (range !== undefined && !(range instanceof FDBKeyRange)) {
      range = FDBKeyRange.only(valueToKey(range));
    }

    const request = new FDBRequest();
    request.source = this;
    request.transaction = this.objectStore.transaction;
    const cursor = new FDBCursorWithValue(this, range, direction, request);
    return this.objectStore.transaction._execRequestAsync({
      operation: cursor._iterate.bind(cursor),
      request,
      source: this
    });
  } // tslint:disable-next-line max-line-length
  // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBIndex-openKeyCursor-IDBRequest-any-range-IDBCursorDirection-direction


  openKeyCursor(range, direction) {
    confirmActiveTransaction$1(this);

    if (range === null) {
      range = undefined;
    }

    if (range !== undefined && !(range instanceof FDBKeyRange)) {
      range = FDBKeyRange.only(valueToKey(range));
    }

    const request = new FDBRequest();
    request.source = this;
    request.transaction = this.objectStore.transaction;
    const cursor = new FDBCursor(this, range, direction, request, true);
    return this.objectStore.transaction._execRequestAsync({
      operation: cursor._iterate.bind(cursor),
      request,
      source: this
    });
  }

  get(key) {
    confirmActiveTransaction$1(this);

    if (!(key instanceof FDBKeyRange)) {
      key = valueToKey(key);
    }

    return this.objectStore.transaction._execRequestAsync({
      operation: this._rawIndex.getValue.bind(this._rawIndex, key),
      source: this
    });
  } // http://w3c.github.io/IndexedDB/#dom-idbindex-getall


  getAll(query, count) {
    if (arguments.length > 1 && count !== undefined) {
      count = enforceRange(count, "unsigned long");
    }

    confirmActiveTransaction$1(this);
    const range = valueToKeyRange(query);
    return this.objectStore.transaction._execRequestAsync({
      operation: this._rawIndex.getAllValues.bind(this._rawIndex, range, count),
      source: this
    });
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBIndex-getKey-IDBRequest-any-key


  getKey(key) {
    confirmActiveTransaction$1(this);

    if (!(key instanceof FDBKeyRange)) {
      key = valueToKey(key);
    }

    return this.objectStore.transaction._execRequestAsync({
      operation: this._rawIndex.getKey.bind(this._rawIndex, key),
      source: this
    });
  } // http://w3c.github.io/IndexedDB/#dom-idbindex-getallkeys


  getAllKeys(query, count) {
    if (arguments.length > 1 && count !== undefined) {
      count = enforceRange(count, "unsigned long");
    }

    confirmActiveTransaction$1(this);
    const range = valueToKeyRange(query);
    return this.objectStore.transaction._execRequestAsync({
      operation: this._rawIndex.getAllKeys.bind(this._rawIndex, range, count),
      source: this
    });
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBIndex-count-IDBRequest-any-key


  count(key) {
    confirmActiveTransaction$1(this);

    if (key === null) {
      key = undefined;
    }

    if (key !== undefined && !(key instanceof FDBKeyRange)) {
      key = FDBKeyRange.only(valueToKey(key));
    }

    return this.objectStore.transaction._execRequestAsync({
      operation: () => {
        let count = 0;
        const cursor = new FDBCursor(this, key);

        while (cursor._iterate() !== null) {
          count += 1;
        }

        return count;
      },
      source: this
    });
  }

  toString() {
    return "[object IDBIndex]";
  }

}

// http://w3c.github.io/IndexedDB/#check-that-a-key-could-be-injected-into-a-value
const canInjectKey = (keyPath, value) => {
  if (Array.isArray(keyPath)) {
    // tslint:disable-next-line max-line-length
    throw new Error("The key paths used in this section are always strings and never sequences, since it is not possible to create a object store which has a key generator and also has a key path that is a sequence.");
  }

  const identifiers = keyPath.split(".");

  if (identifiers.length === 0) {
    throw new Error("Assert: identifiers is not empty");
  }

  identifiers.pop();

  for (const identifier of identifiers) {
    if (typeof value !== "object" && !Array.isArray(value)) {
      return false;
    }

    const hop = value.hasOwnProperty(identifier);

    if (!hop) {
      return true;
    }

    value = value[identifier];
  }

  return typeof value === "object" || Array.isArray(value);
};

/**
 * Classic binary search implementation. Returns the index where the key
 * should be inserted, assuming the records list is ordered.
 */
function binarySearch(records, key) {
  let low = 0;
  let high = records.length;
  let mid;

  while (low < high) {
    // tslint:disable-next-line:no-bitwise
    mid = low + high >>> 1; // like Math.floor((low + high) / 2) but fast

    if (cmp(records[mid].key, key) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
/**
 * Equivalent to `records.findIndex(record => cmp(record.key, key) === 0)`
 */


function getIndexByKey(records, key) {
  const idx = binarySearch(records, key);
  const record = records[idx];

  if (record && cmp(record.key, key) === 0) {
    return idx;
  }

  return -1;
}
/**
 * Equivalent to `records.find(record => cmp(record.key, key) === 0)`
 */

function getByKey(records, key) {
  const idx = getIndexByKey(records, key);
  return records[idx];
}
/**
 * Equivalent to `records.findIndex(record => key.includes(record.key))`
 */

function getIndexByKeyRange(records, keyRange) {
  const lowerIdx = typeof keyRange.lower === "undefined" ? 0 : binarySearch(records, keyRange.lower);
  const upperIdx = typeof keyRange.upper === "undefined" ? records.length - 1 : binarySearch(records, keyRange.upper);

  for (let i = lowerIdx; i <= upperIdx; i++) {
    const record = records[i];

    if (record && keyRange.includes(record.key)) {
      return i;
    }
  }

  return -1;
}
/**
 * Equivalent to `records.find(record => key.includes(record.key))`
 */

function getByKeyRange(records, keyRange) {
  const idx = getIndexByKeyRange(records, keyRange);
  return records[idx];
}
/**
 * Equivalent to `records.findIndex(record => cmp(record.key, key) >= 0)`
 */

function getIndexByKeyGTE(records, key) {
  const idx = binarySearch(records, key);
  const record = records[idx];

  if (record && cmp(record.key, key) >= 0) {
    return idx;
  }

  return -1;
}

class RecordStore {
  records = [];

  get(key) {
    if (key instanceof FDBKeyRange) {
      return getByKeyRange(this.records, key);
    }

    return getByKey(this.records, key);
  }

  add(newRecord) {
    // Find where to put it so it's sorted by key
    let i;

    if (this.records.length === 0) {
      i = 0;
    } else {
      i = getIndexByKeyGTE(this.records, newRecord.key);

      if (i === -1) {
        // If no matching key, add to end
        i = this.records.length;
      } else {
        // If matching key, advance to appropriate position based on value (used in indexes)
        while (i < this.records.length && cmp(this.records[i].key, newRecord.key) === 0) {
          if (cmp(this.records[i].value, newRecord.value) !== -1) {
            // Record value >= newRecord value, so insert here
            break;
          }

          i += 1; // Look at next record
        }
      }
    }

    this.records.splice(i, 0, newRecord);
  }

  delete(key) {
    const deletedRecords = [];
    const isRange = key instanceof FDBKeyRange;

    while (true) {
      const idx = isRange ? getIndexByKeyRange(this.records, key) : getIndexByKey(this.records, key);

      if (idx === -1) {
        break;
      }

      deletedRecords.push(this.records[idx]);
      this.records.splice(idx, 1);
    }

    return deletedRecords;
  }

  deleteByValue(key) {
    const range = key instanceof FDBKeyRange ? key : FDBKeyRange.only(key);
    const deletedRecords = [];
    this.records = this.records.filter(record => {
      const shouldDelete = range.includes(record.value);

      if (shouldDelete) {
        deletedRecords.push(record);
      }

      return !shouldDelete;
    });
    return deletedRecords;
  }

  clear() {
    const deletedRecords = this.records.slice();
    this.records = [];
    return deletedRecords;
  }

  values(range, direction = "next") {
    return {
      [Symbol.iterator]: () => {
        let i;

        if (direction === "next") {
          i = 0;

          if (range !== undefined && range.lower !== undefined) {
            while (this.records[i] !== undefined) {
              const cmpResult = cmp(this.records[i].key, range.lower);

              if (cmpResult === 1 || cmpResult === 0 && !range.lowerOpen) {
                break;
              }

              i += 1;
            }
          }
        } else {
          i = this.records.length - 1;

          if (range !== undefined && range.upper !== undefined) {
            while (this.records[i] !== undefined) {
              const cmpResult = cmp(this.records[i].key, range.upper);

              if (cmpResult === -1 || cmpResult === 0 && !range.upperOpen) {
                break;
              }

              i -= 1;
            }
          }
        }

        return {
          next: () => {
            let done;
            let value;

            if (direction === "next") {
              value = this.records[i];
              done = i >= this.records.length;
              i += 1;

              if (!done && range !== undefined && range.upper !== undefined) {
                const cmpResult = cmp(value.key, range.upper);
                done = cmpResult === 1 || cmpResult === 0 && range.upperOpen;

                if (done) {
                  value = undefined;
                }
              }
            } else {
              value = this.records[i];
              done = i < 0;
              i -= 1;

              if (!done && range !== undefined && range.lower !== undefined) {
                const cmpResult = cmp(value.key, range.lower);
                done = cmpResult === -1 || cmpResult === 0 && range.lowerOpen;

                if (done) {
                  value = undefined;
                }
              }
            } // The weird "as IteratorResult<Record>" is needed because of
            // https://github.com/Microsoft/TypeScript/issues/11375 and
            // https://github.com/Microsoft/TypeScript/issues/2983
            // tslint:disable-next-line no-object-literal-type-assertion


            return {
              done,
              value
            };
          }
        };
      }
    };
  }

}

class Index {
  deleted = false; // Initialized should be used to decide whether to throw an error or abort the versionchange transaction when there is a
  // constraint

  initialized = false;
  records = new RecordStore();

  constructor(rawObjectStore, name, keyPath, multiEntry, unique) {
    this.rawObjectStore = rawObjectStore;
    this.name = name;
    this.keyPath = keyPath;
    this.multiEntry = multiEntry;
    this.unique = unique;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-retrieving-a-value-from-an-index


  getKey(key) {
    const record = this.records.get(key);
    return record !== undefined ? record.value : undefined;
  } // http://w3c.github.io/IndexedDB/#retrieve-multiple-referenced-values-from-an-index


  getAllKeys(range, count) {
    if (count === undefined || count === 0) {
      count = Infinity;
    }

    const records = [];

    for (const record of this.records.values(range)) {
      records.push(structuredCloneWrapper(record.value));

      if (records.length >= count) {
        break;
      }
    }

    return records;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#index-referenced-value-retrieval-operation


  getValue(key) {
    const record = this.records.get(key);
    return record !== undefined ? this.rawObjectStore.getValue(record.value) : undefined;
  } // http://w3c.github.io/IndexedDB/#retrieve-multiple-referenced-values-from-an-index


  getAllValues(range, count) {
    if (count === undefined || count === 0) {
      count = Infinity;
    }

    const records = [];

    for (const record of this.records.values(range)) {
      records.push(this.rawObjectStore.getValue(record.value));

      if (records.length >= count) {
        break;
      }
    }

    return records;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-storing-a-record-into-an-object-store (step 7)


  storeRecord(newRecord) {
    let indexKey;

    try {
      indexKey = extractKey(this.keyPath, newRecord.value);
    } catch (err) {
      if (err.name === "DataError") {
        // Invalid key is not an actual error, just means we do not store an entry in this index
        return;
      }

      throw err;
    }

    if (!this.multiEntry || !Array.isArray(indexKey)) {
      try {
        valueToKey(indexKey);
      } catch (e) {
        return;
      }
    } else {
      // remove any elements from index key that are not valid keys and remove any duplicate elements from index
      // key such that only one instance of the duplicate value remains.
      const keep = [];

      for (const part of indexKey) {
        if (keep.indexOf(part) < 0) {
          try {
            keep.push(valueToKey(part));
          } catch (err) {
            /* Do nothing */
          }
        }
      }

      indexKey = keep;
    }

    if (!this.multiEntry || !Array.isArray(indexKey)) {
      if (this.unique) {
        const existingRecord = this.records.get(indexKey);

        if (existingRecord) {
          throw new ConstraintError();
        }
      }
    } else {
      if (this.unique) {
        for (const individualIndexKey of indexKey) {
          const existingRecord = this.records.get(individualIndexKey);

          if (existingRecord) {
            throw new ConstraintError();
          }
        }
      }
    }

    if (!this.multiEntry || !Array.isArray(indexKey)) {
      this.records.add({
        key: indexKey,
        value: newRecord.key
      });
    } else {
      for (const individualIndexKey of indexKey) {
        this.records.add({
          key: individualIndexKey,
          value: newRecord.key
        });
      }
    }
  }

  initialize(transaction) {
    if (this.initialized) {
      throw new Error("Index already initialized");
    }

    transaction._execRequestAsync({
      operation: () => {
        try {
          // Create index based on current value of objectstore
          for (const record of this.rawObjectStore.records.values()) {
            this.storeRecord(record);
          }

          this.initialized = true;
        } catch (err) {
          // console.error(err);
          transaction._abort(err.name);
        }
      },
      source: null
    });
  }

}

// http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-valid-key-path
const validateKeyPath = (keyPath, parent) => {
  // This doesn't make sense to me based on the spec, but it is needed to pass the W3C KeyPath tests (see same
  // comment in extractKey)
  if (keyPath !== undefined && keyPath !== null && typeof keyPath !== "string" && keyPath.toString && (parent === "array" || !Array.isArray(keyPath))) {
    keyPath = keyPath.toString();
  }

  if (typeof keyPath === "string") {
    if (keyPath === "" && parent !== "string") {
      return;
    }

    try {
      // https://mathiasbynens.be/demo/javascript-identifier-regex for ECMAScript 5.1 / Unicode v7.0.0, with
      // reserved words at beginning removed
      // tslint:disable-next-line max-line-length
      const validIdentifierRegex = /^(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC])(?:[\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC])*$/;

      if (keyPath.length >= 1 && validIdentifierRegex.test(keyPath)) {
        return;
      }
    } catch (err) {
      throw new SyntaxError(err.message);
    }

    if (keyPath.indexOf(" ") >= 0) {
      throw new SyntaxError("The keypath argument contains an invalid key path (no spaces allowed).");
    }
  }

  if (Array.isArray(keyPath) && keyPath.length > 0) {
    if (parent) {
      // No nested arrays
      throw new SyntaxError("The keypath argument contains an invalid key path (nested arrays).");
    }

    for (const part of keyPath) {
      validateKeyPath(part, "array");
    }

    return;
  } else if (typeof keyPath === "string" && keyPath.indexOf(".") >= 0) {
    keyPath = keyPath.split(".");

    for (const part of keyPath) {
      validateKeyPath(part, "string");
    }

    return;
  }

  throw new SyntaxError();
};

const confirmActiveTransaction = objectStore => {
  if (objectStore._rawObjectStore.deleted) {
    throw new InvalidStateError();
  }

  if (objectStore.transaction._state !== "active") {
    throw new TransactionInactiveError();
  }
};

const buildRecordAddPut = (objectStore, value, key) => {
  confirmActiveTransaction(objectStore);

  if (objectStore.transaction.mode === "readonly") {
    throw new ReadOnlyError();
  }

  if (objectStore.keyPath !== null) {
    if (key !== undefined) {
      throw new DataError();
    }
  }

  const clone = structuredCloneWrapper(value);

  if (objectStore.keyPath !== null) {
    const tempKey = extractKey(objectStore.keyPath, clone);

    if (tempKey !== undefined) {
      valueToKey(tempKey);
    } else {
      if (!objectStore._rawObjectStore.keyGenerator) {
        throw new DataError();
      } else if (!canInjectKey(objectStore.keyPath, clone)) {
        throw new DataError();
      }
    }
  }

  if (objectStore.keyPath === null && objectStore._rawObjectStore.keyGenerator === null && key === undefined) {
    throw new DataError();
  }

  if (key !== undefined) {
    key = valueToKey(key);
  }

  return {
    key,
    value: clone
  };
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#object-store


class FDBObjectStore {
  _indexesCache = new Map();

  constructor(transaction, rawObjectStore) {
    this._rawObjectStore = rawObjectStore;
    this._name = rawObjectStore.name;
    this.keyPath = rawObjectStore.keyPath;
    this.autoIncrement = rawObjectStore.autoIncrement;
    this.transaction = transaction;
    this.indexNames = new FakeDOMStringList(...Array.from(rawObjectStore.rawIndexes.keys()).sort());
  }

  get name() {
    return this._name;
  } // http://w3c.github.io/IndexedDB/#dom-idbobjectstore-name


  set name(name) {
    const transaction = this.transaction;

    if (!transaction.db._runningVersionchangeTransaction) {
      throw new InvalidStateError();
    }

    confirmActiveTransaction(this);
    name = String(name);

    if (name === this._name) {
      return;
    }

    if (this._rawObjectStore.rawDatabase.rawObjectStores.has(name)) {
      throw new ConstraintError();
    }

    const oldName = this._name;
    const oldObjectStoreNames = [...transaction.db.objectStoreNames];
    this._name = name;
    this._rawObjectStore.name = name;

    this.transaction._objectStoresCache.delete(oldName);

    this.transaction._objectStoresCache.set(name, this);

    this._rawObjectStore.rawDatabase.rawObjectStores.delete(oldName);

    this._rawObjectStore.rawDatabase.rawObjectStores.set(name, this._rawObjectStore);

    transaction.db.objectStoreNames = new FakeDOMStringList(...Array.from(this._rawObjectStore.rawDatabase.rawObjectStores.keys()).filter(objectStoreName => {
      const objectStore = this._rawObjectStore.rawDatabase.rawObjectStores.get(objectStoreName);

      return objectStore && !objectStore.deleted;
    }).sort());
    const oldScope = new Set(transaction._scope);
    const oldTransactionObjectStoreNames = [...transaction.objectStoreNames];

    this.transaction._scope.delete(oldName);

    transaction._scope.add(name);

    transaction.objectStoreNames = new FakeDOMStringList(...Array.from(transaction._scope).sort());

    transaction._rollbackLog.push(() => {
      this._name = oldName;
      this._rawObjectStore.name = oldName;

      this.transaction._objectStoresCache.delete(name);

      this.transaction._objectStoresCache.set(oldName, this);

      this._rawObjectStore.rawDatabase.rawObjectStores.delete(name);

      this._rawObjectStore.rawDatabase.rawObjectStores.set(oldName, this._rawObjectStore);

      transaction.db.objectStoreNames = new FakeDOMStringList(...oldObjectStoreNames);
      transaction._scope = oldScope;
      transaction.objectStoreNames = new FakeDOMStringList(...oldTransactionObjectStoreNames);
    });
  }

  put(value, key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    const record = buildRecordAddPut(this, value, key);
    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.storeRecord.bind(this._rawObjectStore, record, false, this.transaction._rollbackLog),
      source: this
    });
  }

  add(value, key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    const record = buildRecordAddPut(this, value, key);
    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.storeRecord.bind(this._rawObjectStore, record, true, this.transaction._rollbackLog),
      source: this
    });
  }

  delete(key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    confirmActiveTransaction(this);

    if (this.transaction.mode === "readonly") {
      throw new ReadOnlyError();
    }

    if (!(key instanceof FDBKeyRange)) {
      key = valueToKey(key);
    }

    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.deleteRecord.bind(this._rawObjectStore, key, this.transaction._rollbackLog),
      source: this
    });
  }

  get(key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    confirmActiveTransaction(this);

    if (!(key instanceof FDBKeyRange)) {
      key = valueToKey(key);
    }

    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.getValue.bind(this._rawObjectStore, key),
      source: this
    });
  } // http://w3c.github.io/IndexedDB/#dom-idbobjectstore-getall


  getAll(query, count) {
    if (arguments.length > 1 && count !== undefined) {
      count = enforceRange(count, "unsigned long");
    }

    confirmActiveTransaction(this);
    const range = valueToKeyRange(query);
    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.getAllValues.bind(this._rawObjectStore, range, count),
      source: this
    });
  } // http://w3c.github.io/IndexedDB/#dom-idbobjectstore-getkey


  getKey(key) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    confirmActiveTransaction(this);

    if (!(key instanceof FDBKeyRange)) {
      key = valueToKey(key);
    }

    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.getKey.bind(this._rawObjectStore, key),
      source: this
    });
  } // http://w3c.github.io/IndexedDB/#dom-idbobjectstore-getallkeys


  getAllKeys(query, count) {
    if (arguments.length > 1 && count !== undefined) {
      count = enforceRange(count, "unsigned long");
    }

    confirmActiveTransaction(this);
    const range = valueToKeyRange(query);
    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.getAllKeys.bind(this._rawObjectStore, range, count),
      source: this
    });
  }

  clear() {
    confirmActiveTransaction(this);

    if (this.transaction.mode === "readonly") {
      throw new ReadOnlyError();
    }

    return this.transaction._execRequestAsync({
      operation: this._rawObjectStore.clear.bind(this._rawObjectStore, this.transaction._rollbackLog),
      source: this
    });
  }

  openCursor(range, direction) {
    confirmActiveTransaction(this);

    if (range === null) {
      range = undefined;
    }

    if (range !== undefined && !(range instanceof FDBKeyRange)) {
      range = FDBKeyRange.only(valueToKey(range));
    }

    const request = new FDBRequest();
    request.source = this;
    request.transaction = this.transaction;
    const cursor = new FDBCursorWithValue(this, range, direction, request);
    return this.transaction._execRequestAsync({
      operation: cursor._iterate.bind(cursor),
      request,
      source: this
    });
  }

  openKeyCursor(range, direction) {
    confirmActiveTransaction(this);

    if (range === null) {
      range = undefined;
    }

    if (range !== undefined && !(range instanceof FDBKeyRange)) {
      range = FDBKeyRange.only(valueToKey(range));
    }

    const request = new FDBRequest();
    request.source = this;
    request.transaction = this.transaction;
    const cursor = new FDBCursor(this, range, direction, request, true);
    return this.transaction._execRequestAsync({
      operation: cursor._iterate.bind(cursor),
      request,
      source: this
    });
  } // tslint:disable-next-line max-line-length
  // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBObjectStore-createIndex-IDBIndex-DOMString-name-DOMString-sequence-DOMString--keyPath-IDBIndexParameters-optionalParameters


  createIndex(name, keyPath, optionalParameters = {}) {
    if (arguments.length < 2) {
      throw new TypeError();
    }

    const multiEntry = optionalParameters.multiEntry !== undefined ? optionalParameters.multiEntry : false;
    const unique = optionalParameters.unique !== undefined ? optionalParameters.unique : false;

    if (this.transaction.mode !== "versionchange") {
      throw new InvalidStateError();
    }

    confirmActiveTransaction(this);

    if (this.indexNames.contains(name)) {
      throw new ConstraintError();
    }

    validateKeyPath(keyPath);

    if (Array.isArray(keyPath) && multiEntry) {
      throw new InvalidAccessError();
    } // The index that is requested to be created can contain constraints on the data allowed in the index's
    // referenced object store, such as requiring uniqueness of the values referenced by the index's keyPath. If the
    // referenced object store already contains data which violates these constraints, this MUST NOT cause the
    // implementation of createIndex to throw an exception or affect what it returns. The implementation MUST still
    // create and return an IDBIndex object. Instead the implementation must queue up an operation to abort the
    // "versionchange" transaction which was used for the createIndex call.


    const indexNames = [...this.indexNames];

    this.transaction._rollbackLog.push(() => {
      const index2 = this._rawObjectStore.rawIndexes.get(name);

      if (index2) {
        index2.deleted = true;
      }

      this.indexNames = new FakeDOMStringList(...indexNames);

      this._rawObjectStore.rawIndexes.delete(name);
    });

    const index = new Index(this._rawObjectStore, name, keyPath, multiEntry, unique);

    this.indexNames._push(name);

    this.indexNames._sort();

    this._rawObjectStore.rawIndexes.set(name, index);

    index.initialize(this.transaction); // This is async by design

    return new FDBIndex(this, index);
  } // https://w3c.github.io/IndexedDB/#dom-idbobjectstore-index


  index(name) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    if (this._rawObjectStore.deleted || this.transaction._state === "finished") {
      throw new InvalidStateError();
    }

    const index = this._indexesCache.get(name);

    if (index !== undefined) {
      return index;
    }

    const rawIndex = this._rawObjectStore.rawIndexes.get(name);

    if (!this.indexNames.contains(name) || rawIndex === undefined) {
      throw new NotFoundError();
    }

    const index2 = new FDBIndex(this, rawIndex);

    this._indexesCache.set(name, index2);

    return index2;
  }

  deleteIndex(name) {
    if (arguments.length === 0) {
      throw new TypeError();
    }

    if (this.transaction.mode !== "versionchange") {
      throw new InvalidStateError();
    }

    confirmActiveTransaction(this);

    const rawIndex = this._rawObjectStore.rawIndexes.get(name);

    if (rawIndex === undefined) {
      throw new NotFoundError();
    }

    this.transaction._rollbackLog.push(() => {
      rawIndex.deleted = false;

      this._rawObjectStore.rawIndexes.set(name, rawIndex);

      this.indexNames._push(name);

      this.indexNames._sort();
    });

    this.indexNames = new FakeDOMStringList(...Array.from(this.indexNames).filter(indexName => {
      return indexName !== name;
    }));
    rawIndex.deleted = true; // Not sure if this is supposed to happen synchronously

    this.transaction._execRequestAsync({
      operation: () => {
        const rawIndex2 = this._rawObjectStore.rawIndexes.get(name); // Hack in case another index is given this name before this async request is processed. It'd be better
        // to have a real unique ID for each index.


        if (rawIndex === rawIndex2) {
          this._rawObjectStore.rawIndexes.delete(name);
        }
      },
      source: this
    });
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBObjectStore-count-IDBRequest-any-key


  count(key) {
    confirmActiveTransaction(this);

    if (key === null) {
      key = undefined;
    }

    if (key !== undefined && !(key instanceof FDBKeyRange)) {
      key = FDBKeyRange.only(valueToKey(key));
    }

    return this.transaction._execRequestAsync({
      operation: () => {
        let count = 0;
        const cursor = new FDBCursor(this, key);

        while (cursor._iterate() !== null) {
          count += 1;
        }

        return count;
      },
      source: this
    });
  }

  toString() {
    return "[object IDBObjectStore]";
  }

}

var FDBObjectStore$1 = FDBObjectStore;

class Event {
  eventPath = [];
  NONE = 0;
  CAPTURING_PHASE = 1;
  AT_TARGET = 2;
  BUBBLING_PHASE = 3; // Flags

  propagationStopped = false;
  immediatePropagationStopped = false;
  canceled = false;
  initialized = true;
  dispatched = false;
  target = null;
  currentTarget = null;
  eventPhase = 0;
  defaultPrevented = false;
  isTrusted = false;
  timeStamp = Date.now();

  constructor(type, eventInitDict = {}) {
    this.type = type;
    this.bubbles = eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
    this.cancelable = eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
  }

  preventDefault() {
    if (this.cancelable) {
      this.canceled = true;
    }
  }

  stopPropagation() {
    this.propagationStopped = true;
  }

  stopImmediatePropagation() {
    this.propagationStopped = true;
    this.immediatePropagationStopped = true;
  }

}

// When running within Node.js (including jsdom), we want to use setImmediate
// (which runs immediately) rather than setTimeout (which enforces a minimum
// delay of 1ms, and on Windows only has a resolution of 15ms or so).  jsdom
// doesn't provide setImmediate (to better match the browser environment) and
// sandboxes scripts, but its sandbox is by necessity imperfect, so we can break
// out of it:
//
// - https://github.com/jsdom/jsdom#executing-scripts
// - https://github.com/jsdom/jsdom/issues/2729
// - https://github.com/scala-js/scala-js-macrotask-executor/pull/17
function getSetImmediateFromJsdom() {
  if (typeof navigator !== "undefined" && /jsdom/.test(navigator.userAgent)) {
    const outerRealmFunctionConstructor = Node.constructor;
    return new outerRealmFunctionConstructor("return setImmediate")();
  } else {
    return undefined;
  }
} // Schedules a task to run later.  Use Node.js's setImmediate if available and
// setTimeout otherwise.  Note that options like process.nextTick or
// queueMicrotask will likely not work: IndexedDB semantics require that
// transactions are marked as not active when the event loop runs. The next
// tick queue and microtask queue run within the current event loop macrotask,
// so they'd process database operations too quickly.


const queueTask = globalThis.setImmediate || getSetImmediateFromJsdom() || (fn => setTimeout(fn, 0));

// http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#transaction
class FDBTransaction extends FakeEventTarget {
  _state = "active";
  _started = false;
  _rollbackLog = [];
  _objectStoresCache = new Map();
  error = null;
  onabort = null;
  oncomplete = null;
  onerror = null;
  _requests = [];

  constructor(storeNames, mode, db) {
    super();
    this._scope = new Set(storeNames);
    this.mode = mode;
    this.db = db;
    this.objectStoreNames = new FakeDOMStringList(...Array.from(this._scope).sort());
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-aborting-a-transaction


  _abort(errName) {
    for (const f of this._rollbackLog.reverse()) {
      f();
    }

    if (errName !== null) {
      const e = new Error();
      e.name = errName;
      this.error = e;
    } // Should this directly remove from _requests?


    for (const {
      request
    } of this._requests) {
      if (request.readyState !== "done") {
        request.readyState = "done"; // This will cancel execution of this request's operation

        if (request.source) {
          request.result = undefined;
          request.error = new AbortError();
          const event = new Event("error", {
            bubbles: true,
            cancelable: true
          });
          event.eventPath = [this.db, this];
          request.dispatchEvent(event);
        }
      }
    }

    queueTask(() => {
      const event = new Event("abort", {
        bubbles: true,
        cancelable: false
      });
      event.eventPath = [this.db];
      this.dispatchEvent(event);
    });
    this._state = "finished";
  }

  abort() {
    if (this._state === "committing" || this._state === "finished") {
      throw new InvalidStateError();
    }

    this._state = "active";

    this._abort(null);
  } // http://w3c.github.io/IndexedDB/#dom-idbtransaction-objectstore


  objectStore(name) {
    if (this._state !== "active") {
      throw new InvalidStateError();
    }

    const objectStore = this._objectStoresCache.get(name);

    if (objectStore !== undefined) {
      return objectStore;
    }

    const rawObjectStore = this.db._rawDatabase.rawObjectStores.get(name);

    if (!this._scope.has(name) || rawObjectStore === undefined) {
      throw new NotFoundError();
    }

    const objectStore2 = new FDBObjectStore$1(this, rawObjectStore);

    this._objectStoresCache.set(name, objectStore2);

    return objectStore2;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-asynchronously-executing-a-request


  _execRequestAsync(obj) {
    const source = obj.source;
    const operation = obj.operation;
    let request = obj.hasOwnProperty("request") ? obj.request : null;

    if (this._state !== "active") {
      throw new TransactionInactiveError();
    } // Request should only be passed for cursors


    if (!request) {
      if (!source) {
        // Special requests like indexes that just need to run some code
        request = new FDBRequest();
      } else {
        request = new FDBRequest();
        request.source = source;
        request.transaction = source.transaction;
      }
    }

    this._requests.push({
      operation,
      request
    });

    return request;
  }

  _start() {
    this._started = true; // Remove from request queue - cursor ones will be added back if necessary by cursor.continue and such

    let operation;
    let request;

    while (this._requests.length > 0) {
      const r = this._requests.shift(); // This should only be false if transaction was aborted


      if (r && r.request.readyState !== "done") {
        request = r.request;
        operation = r.operation;
        break;
      }
    }

    if (request && operation) {
      if (!request.source) {
        // Special requests like indexes that just need to run some code, with error handling already built into
        // operation
        operation();
      } else {
        let defaultAction;
        let event;

        try {
          const result = operation();
          request.readyState = "done";
          request.result = result;
          request.error = undefined; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-fire-a-success-event

          if (this._state === "inactive") {
            this._state = "active";
          }

          event = new Event("success", {
            bubbles: false,
            cancelable: false
          });
        } catch (err) {
          request.readyState = "done";
          request.result = undefined;
          request.error = err; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-fire-an-error-event

          if (this._state === "inactive") {
            this._state = "active";
          }

          event = new Event("error", {
            bubbles: true,
            cancelable: true
          });
          defaultAction = this._abort.bind(this, err.name);
        }

        try {
          event.eventPath = [this.db, this];
          request.dispatchEvent(event);
        } catch (err) {
          if (this._state !== "committing") {
            this._abort("AbortError");
          }

          throw err;
        } // Default action of event


        if (!event.canceled) {
          if (defaultAction) {
            defaultAction();
          }
        }
      } // Give it another chance for new handlers to be set before finishing


      queueTask(this._start.bind(this));
      return;
    } // Check if transaction complete event needs to be fired


    if (this._state !== "finished") {
      // Either aborted or committed already
      this._state = "finished";

      if (!this.error) {
        const event = new Event("complete");
        this.dispatchEvent(event);
      }
    }
  }

  commit() {
    if (this._state !== "active") {
      throw new InvalidStateError();
    }

    this._state = "committing";
  }

  toString() {
    return "[object IDBRequest]";
  }

}

const MAX_KEY = 9007199254740992;

class KeyGenerator {
  // This is kind of wrong. Should start at 1 and increment only after record is saved
  num = 0;

  next() {
    if (this.num >= MAX_KEY) {
      throw new ConstraintError();
    }

    this.num += 1;
    return this.num;
  } // https://w3c.github.io/IndexedDB/#possibly-update-the-key-generator


  setIfLarger(num) {
    const value = Math.floor(Math.min(num, MAX_KEY)) - 1;

    if (value >= this.num) {
      this.num = value + 1;
    }
  }

}

// http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-object-store
class ObjectStore {
  deleted = false;
  records = new RecordStore();
  rawIndexes = new Map();

  constructor(rawDatabase, name, keyPath, autoIncrement) {
    this.rawDatabase = rawDatabase;
    this.keyGenerator = autoIncrement === true ? new KeyGenerator() : null;
    this.deleted = false;
    this.name = name;
    this.keyPath = keyPath;
    this.autoIncrement = autoIncrement;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-retrieving-a-value-from-an-object-store


  getKey(key) {
    const record = this.records.get(key);
    return record !== undefined ? structuredCloneWrapper(record.key) : undefined;
  } // http://w3c.github.io/IndexedDB/#retrieve-multiple-keys-from-an-object-store


  getAllKeys(range, count) {
    if (count === undefined || count === 0) {
      count = Infinity;
    }

    const records = [];

    for (const record of this.records.values(range)) {
      records.push(structuredCloneWrapper(record.key));

      if (records.length >= count) {
        break;
      }
    }

    return records;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-retrieving-a-value-from-an-object-store


  getValue(key) {
    const record = this.records.get(key);
    return record !== undefined ? structuredCloneWrapper(record.value) : undefined;
  } // http://w3c.github.io/IndexedDB/#retrieve-multiple-values-from-an-object-store


  getAllValues(range, count) {
    if (count === undefined || count === 0) {
      count = Infinity;
    }

    const records = [];

    for (const record of this.records.values(range)) {
      records.push(structuredCloneWrapper(record.value));

      if (records.length >= count) {
        break;
      }
    }

    return records;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-storing-a-record-into-an-object-store


  storeRecord(newRecord, noOverwrite, rollbackLog) {
    if (this.keyPath !== null) {
      const key = extractKey(this.keyPath, newRecord.value);

      if (key !== undefined) {
        newRecord.key = key;
      }
    }

    if (this.keyGenerator !== null && newRecord.key === undefined) {
      if (rollbackLog) {
        const keyGeneratorBefore = this.keyGenerator.num;
        rollbackLog.push(() => {
          if (this.keyGenerator) {
            this.keyGenerator.num = keyGeneratorBefore;
          }
        });
      }

      newRecord.key = this.keyGenerator.next(); // Set in value if keyPath defiend but led to no key
      // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-to-assign-a-key-to-a-value-using-a-key-path

      if (this.keyPath !== null) {
        if (Array.isArray(this.keyPath)) {
          throw new Error("Cannot have an array key path in an object store with a key generator");
        }

        let remainingKeyPath = this.keyPath;
        let object = newRecord.value;
        let identifier;
        let i = 0; // Just to run the loop at least once

        while (i >= 0) {
          if (typeof object !== "object") {
            throw new DataError();
          }

          i = remainingKeyPath.indexOf(".");

          if (i >= 0) {
            identifier = remainingKeyPath.slice(0, i);
            remainingKeyPath = remainingKeyPath.slice(i + 1);

            if (!object.hasOwnProperty(identifier)) {
              object[identifier] = {};
            }

            object = object[identifier];
          }
        }

        identifier = remainingKeyPath;
        object[identifier] = newRecord.key;
      }
    } else if (this.keyGenerator !== null && typeof newRecord.key === "number") {
      this.keyGenerator.setIfLarger(newRecord.key);
    }

    const existingRecord = this.records.get(newRecord.key);

    if (existingRecord) {
      if (noOverwrite) {
        throw new ConstraintError();
      }

      this.deleteRecord(newRecord.key, rollbackLog);
    }

    this.records.add(newRecord);

    if (rollbackLog) {
      rollbackLog.push(() => {
        this.deleteRecord(newRecord.key);
      });
    } // Update indexes


    for (const rawIndex of this.rawIndexes.values()) {
      if (rawIndex.initialized) {
        rawIndex.storeRecord(newRecord);
      }
    }

    return newRecord.key;
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-deleting-records-from-an-object-store


  deleteRecord(key, rollbackLog) {
    const deletedRecords = this.records.delete(key);

    if (rollbackLog) {
      for (const record of deletedRecords) {
        rollbackLog.push(() => {
          this.storeRecord(record, true);
        });
      }
    }

    for (const rawIndex of this.rawIndexes.values()) {
      rawIndex.records.deleteByValue(key);
    }
  } // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-clearing-an-object-store


  clear(rollbackLog) {
    const deletedRecords = this.records.clear();

    if (rollbackLog) {
      for (const record of deletedRecords) {
        rollbackLog.push(() => {
          this.storeRecord(record, true);
        });
      }
    }

    for (const rawIndex of this.rawIndexes.values()) {
      rawIndex.records.clear();
    }
  }

}

const confirmActiveVersionchangeTransaction = database => {
  if (!database._runningVersionchangeTransaction) {
    throw new InvalidStateError();
  } // Find the latest versionchange transaction


  const transactions = database._rawDatabase.transactions.filter(tx => {
    return tx.mode === "versionchange";
  });

  const transaction = transactions[transactions.length - 1];

  if (!transaction || transaction._state === "finished") {
    throw new InvalidStateError();
  }

  if (transaction._state !== "active") {
    throw new TransactionInactiveError();
  }

  return transaction;
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#database-closing-steps


const closeConnection = connection => {
  connection._closePending = true;

  const transactionsComplete = connection._rawDatabase.transactions.every(transaction => {
    return transaction._state === "finished";
  });

  if (transactionsComplete) {
    connection._closed = true;
    connection._rawDatabase.connections = connection._rawDatabase.connections.filter(otherConnection => {
      return connection !== otherConnection;
    });
  } else {
    queueTask(() => {
      closeConnection(connection);
    });
  }
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#database-interface


class FDBDatabase extends FakeEventTarget {
  _closePending = false;
  _closed = false;
  _runningVersionchangeTransaction = false;

  constructor(rawDatabase) {
    super();
    this._rawDatabase = rawDatabase;

    this._rawDatabase.connections.push(this);

    this.name = rawDatabase.name;
    this.version = rawDatabase.version;
    this.objectStoreNames = new FakeDOMStringList(...Array.from(rawDatabase.rawObjectStores.keys()).sort());
  } // http://w3c.github.io/IndexedDB/#dom-idbdatabase-createobjectstore


  createObjectStore(name, options = {}) {
    if (name === undefined) {
      throw new TypeError();
    }

    const transaction = confirmActiveVersionchangeTransaction(this);
    const keyPath = options !== null && options.keyPath !== undefined ? options.keyPath : null;
    const autoIncrement = options !== null && options.autoIncrement !== undefined ? options.autoIncrement : false;

    if (keyPath !== null) {
      validateKeyPath(keyPath);
    }

    if (this._rawDatabase.rawObjectStores.has(name)) {
      throw new ConstraintError();
    }

    if (autoIncrement && (keyPath === "" || Array.isArray(keyPath))) {
      throw new InvalidAccessError();
    }

    const objectStoreNames = [...this.objectStoreNames];

    transaction._rollbackLog.push(() => {
      const objectStore = this._rawDatabase.rawObjectStores.get(name);

      if (objectStore) {
        objectStore.deleted = true;
      }

      this.objectStoreNames = new FakeDOMStringList(...objectStoreNames);

      transaction._scope.delete(name);

      this._rawDatabase.rawObjectStores.delete(name);
    });

    const rawObjectStore = new ObjectStore(this._rawDatabase, name, keyPath, autoIncrement);

    this.objectStoreNames._push(name);

    this.objectStoreNames._sort();

    transaction._scope.add(name);

    this._rawDatabase.rawObjectStores.set(name, rawObjectStore);

    transaction.objectStoreNames = new FakeDOMStringList(...this.objectStoreNames);
    return transaction.objectStore(name);
  }

  deleteObjectStore(name) {
    if (name === undefined) {
      throw new TypeError();
    }

    const transaction = confirmActiveVersionchangeTransaction(this);

    const store = this._rawDatabase.rawObjectStores.get(name);

    if (store === undefined) {
      throw new NotFoundError();
    }

    this.objectStoreNames = new FakeDOMStringList(...Array.from(this.objectStoreNames).filter(objectStoreName => {
      return objectStoreName !== name;
    }));
    transaction.objectStoreNames = new FakeDOMStringList(...this.objectStoreNames);

    transaction._rollbackLog.push(() => {
      store.deleted = false;

      this._rawDatabase.rawObjectStores.set(name, store);

      this.objectStoreNames._push(name);

      this.objectStoreNames._sort();
    });

    store.deleted = true;

    this._rawDatabase.rawObjectStores.delete(name);

    transaction._objectStoresCache.delete(name);
  }

  transaction(storeNames, mode) {
    mode = mode !== undefined ? mode : "readonly";

    if (mode !== "readonly" && mode !== "readwrite" && mode !== "versionchange") {
      throw new TypeError("Invalid mode: " + mode);
    }

    const hasActiveVersionchange = this._rawDatabase.transactions.some(transaction => {
      return transaction._state === "active" && transaction.mode === "versionchange" && transaction.db === this;
    });

    if (hasActiveVersionchange) {
      throw new InvalidStateError();
    }

    if (this._closePending) {
      throw new InvalidStateError();
    }

    if (!Array.isArray(storeNames)) {
      storeNames = [storeNames];
    }

    if (storeNames.length === 0 && mode !== "versionchange") {
      throw new InvalidAccessError();
    }

    for (const storeName of storeNames) {
      if (!this.objectStoreNames.contains(storeName)) {
        throw new NotFoundError("No objectStore named " + storeName + " in this database");
      }
    }

    const tx = new FDBTransaction(storeNames, mode, this);

    this._rawDatabase.transactions.push(tx);

    this._rawDatabase.processTransactions(); // See if can start right away (async)


    return tx;
  }

  close() {
    closeConnection(this);
  }

  toString() {
    return "[object IDBDatabase]";
  }

}

class FDBOpenDBRequest extends FDBRequest {
  onupgradeneeded = null;
  onblocked = null;

  toString() {
    return "[object IDBOpenDBRequest]";
  }

}

class FDBVersionChangeEvent extends Event {
  constructor(type, parameters = {}) {
    super(type);
    this.newVersion = parameters.newVersion !== undefined ? parameters.newVersion : null;
    this.oldVersion = parameters.oldVersion !== undefined ? parameters.oldVersion : 0;
  }

  toString() {
    return "[object IDBVersionChangeEvent]";
  }

}

class Database {
  deletePending = false;
  transactions = [];
  rawObjectStores = new Map();
  connections = [];

  constructor(name, version) {
    this.name = name;
    this.version = version;
    this.processTransactions = this.processTransactions.bind(this);
  }

  processTransactions() {
    queueTask(() => {
      const anyRunning = this.transactions.some(transaction => {
        return transaction._started && transaction._state !== "finished";
      });

      if (!anyRunning) {
        const next = this.transactions.find(transaction => {
          return !transaction._started && transaction._state !== "finished";
        });

        if (next) {
          next.addEventListener("complete", this.processTransactions);
          next.addEventListener("abort", this.processTransactions);

          next._start();
        }
      }
    });
  }

}

const waitForOthersClosedDelete = (databases, name, openDatabases, cb) => {
  const anyOpen = openDatabases.some(openDatabase2 => {
    return !openDatabase2._closed && !openDatabase2._closePending;
  });

  if (anyOpen) {
    queueTask(() => waitForOthersClosedDelete(databases, name, openDatabases, cb));
    return;
  }

  databases.delete(name);
  cb(null);
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-deleting-a-database


const deleteDatabase = (databases, name, request, cb) => {
  try {
    const db = databases.get(name);

    if (db === undefined) {
      cb(null);
      return;
    }

    db.deletePending = true;
    const openDatabases = db.connections.filter(connection => {
      return !connection._closed && !connection._closePending;
    });

    for (const openDatabase2 of openDatabases) {
      if (!openDatabase2._closePending) {
        const event = new FDBVersionChangeEvent("versionchange", {
          newVersion: null,
          oldVersion: db.version
        });
        openDatabase2.dispatchEvent(event);
      }
    }

    const anyOpen = openDatabases.some(openDatabase3 => {
      return !openDatabase3._closed && !openDatabase3._closePending;
    });

    if (request && anyOpen) {
      const event = new FDBVersionChangeEvent("blocked", {
        newVersion: null,
        oldVersion: db.version
      });
      request.dispatchEvent(event);
    }

    waitForOthersClosedDelete(databases, name, openDatabases, cb);
  } catch (err) {
    cb(err);
  }
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-running-a-versionchange-transaction


const runVersionchangeTransaction = (connection, version, request, cb) => {
  connection._runningVersionchangeTransaction = true;
  const oldVersion = connection.version;

  const openDatabases = connection._rawDatabase.connections.filter(otherDatabase => {
    return connection !== otherDatabase;
  });

  for (const openDatabase2 of openDatabases) {
    if (!openDatabase2._closed && !openDatabase2._closePending) {
      const event = new FDBVersionChangeEvent("versionchange", {
        newVersion: version,
        oldVersion
      });
      openDatabase2.dispatchEvent(event);
    }
  }

  const anyOpen = openDatabases.some(openDatabase3 => {
    return !openDatabase3._closed && !openDatabase3._closePending;
  });

  if (anyOpen) {
    const event = new FDBVersionChangeEvent("blocked", {
      newVersion: version,
      oldVersion
    });
    request.dispatchEvent(event);
  }

  const waitForOthersClosed = () => {
    const anyOpen2 = openDatabases.some(openDatabase2 => {
      return !openDatabase2._closed && !openDatabase2._closePending;
    });

    if (anyOpen2) {
      queueTask(waitForOthersClosed);
      return;
    } // Set the version of database to version. This change is considered part of the transaction, and so if the
    // transaction is aborted, this change is reverted.


    connection._rawDatabase.version = version;
    connection.version = version; // Get rid of this setImmediate?

    const transaction = connection.transaction(connection.objectStoreNames, "versionchange");
    request.result = connection;
    request.readyState = "done";
    request.transaction = transaction;

    transaction._rollbackLog.push(() => {
      connection._rawDatabase.version = oldVersion;
      connection.version = oldVersion;
    });

    const event = new FDBVersionChangeEvent("upgradeneeded", {
      newVersion: version,
      oldVersion
    });
    request.dispatchEvent(event);
    transaction.addEventListener("error", () => {
      connection._runningVersionchangeTransaction = false; // throw arguments[0].target.error;
      // console.log("error in versionchange transaction - not sure if anything needs to be done here", e.target.error.name);
    });
    transaction.addEventListener("abort", () => {
      connection._runningVersionchangeTransaction = false;
      request.transaction = null;
      queueTask(() => {
        cb(new AbortError());
      });
    });
    transaction.addEventListener("complete", () => {
      connection._runningVersionchangeTransaction = false;
      request.transaction = null; // Let other complete event handlers run before continuing

      queueTask(() => {
        if (connection._closePending) {
          cb(new AbortError());
        } else {
          cb(null);
        }
      });
    });
  };

  waitForOthersClosed();
}; // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-opening-a-database


const openDatabase = (databases, name, version, request, cb) => {
  let db = databases.get(name);

  if (db === undefined) {
    db = new Database(name, 0);
    databases.set(name, db);
  }

  if (version === undefined) {
    version = db.version !== 0 ? db.version : 1;
  }

  if (db.version > version) {
    return cb(new VersionError());
  }

  const connection = new FDBDatabase(db);

  if (db.version < version) {
    runVersionchangeTransaction(connection, version, request, err => {
      if (err) {
        // DO THIS HERE: ensure that connection is closed by running the steps for closing a database connection before these
        // steps are aborted.
        return cb(err);
      }

      cb(null, connection);
    });
  } else {
    cb(null, connection);
  }
};

class FDBFactory {
  cmp = cmp;
  _databases = new Map(); // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBFactory-deleteDatabase-IDBOpenDBRequest-DOMString-name

  deleteDatabase(name) {
    const request = new FDBOpenDBRequest();
    request.source = null;
    queueTask(() => {
      const db = this._databases.get(name);

      const oldVersion = db !== undefined ? db.version : 0;
      deleteDatabase(this._databases, name, request, err => {
        if (err) {
          request.error = new Error();
          request.error.name = err.name;
          request.readyState = "done";
          const event = new Event("error", {
            bubbles: true,
            cancelable: true
          });
          event.eventPath = [];
          request.dispatchEvent(event);
          return;
        }

        request.result = undefined;
        request.readyState = "done";
        const event2 = new FDBVersionChangeEvent("success", {
          newVersion: null,
          oldVersion
        });
        request.dispatchEvent(event2);
      });
    });
    return request;
  } // tslint:disable-next-line max-line-length
  // http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#widl-IDBFactory-open-IDBOpenDBRequest-DOMString-name-unsigned-long-long-version


  open(name, version) {
    if (arguments.length > 1 && version !== undefined) {
      // Based on spec, not sure why "MAX_SAFE_INTEGER" instead of "unsigned long long", but it's needed to pass
      // tests
      version = enforceRange(version, "MAX_SAFE_INTEGER");
    }

    if (version === 0) {
      throw new TypeError();
    }

    const request = new FDBOpenDBRequest();
    request.source = null;
    queueTask(() => {
      openDatabase(this._databases, name, version, request, (err, connection) => {
        if (err) {
          request.result = undefined;
          request.readyState = "done";
          request.error = new Error();
          request.error.name = err.name;
          const event = new Event("error", {
            bubbles: true,
            cancelable: true
          });
          event.eventPath = [];
          request.dispatchEvent(event);
          return;
        }

        request.result = connection;
        request.readyState = "done";
        const event2 = new Event("success");
        event2.eventPath = [];
        request.dispatchEvent(event2);
      });
    });
    return request;
  } // https://w3c.github.io/IndexedDB/#dom-idbfactory-databases


  databases() {
    return new Promise(resolve => {
      const result = [];

      for (const [name, database] of this._databases) {
        result.push({
          name,
          version: database.version
        });
      }

      resolve(result);
    });
  }

  toString() {
    return "[object IDBFactory]";
  }

}

const fakeIndexedDB = new FDBFactory();

globalThis.performance = node_perf_hooks.performance;
globalThis.TextDecoder = node_util.TextDecoder;
globalThis.fs = fs__namespace;
globalThis.crypto = crypto__namespace;
globalThis.WebSocket = WebSocket$1;
globalThis.Worker = node_worker_threads.Worker;
globalThis.process = process;
globalThis.TextEncoder = node_util.TextEncoder;
globalThis.Reflect = Reflect;
globalThis.Proxy = Proxy;
globalThis.Error = Error;
globalThis.Promise = Promise;
globalThis.Object = Object;
globalThis.indexedDB = fakeIndexedDB;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const finalizer = Symbol("Comlink.finalizer");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function isAllowedOrigin(allowedOrigins, origin) {
    for (const allowedOrigin of allowedOrigins) {
        if (origin === allowedOrigin || allowedOrigin === "*") {
            return true;
        }
        if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
            return true;
        }
    }
    return false;
}
function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
            console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* MessageType.GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* MessageType.SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* MessageType.APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* MessageType.CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* MessageType.ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* MessageType.RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* MessageType.RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
                if (finalizer in obj && typeof obj[finalizer] === "function") {
                    obj[finalizer]();
                }
            }
        })
            .catch((error) => {
            // Send Serialization Error To Caller
            const [wireValue, transferables] = toWireValue({
                value: new TypeError("Unserializable return value"),
                [throwMarker]: 0,
            });
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function releaseEndpoint(ep) {
    return requestResponseMessage(ep, {
        type: "RELEASE" /* MessageType.RELEASE */,
    }).then(() => {
        closeEndPoint(ep);
    });
}
const proxyCounter = new WeakMap();
const proxyFinalizers = "FinalizationRegistry" in globalThis &&
    new FinalizationRegistry((ep) => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    });
function registerProxy(proxy, ep) {
    const newCount = (proxyCounter.get(ep) || 0) + 1;
    proxyCounter.set(ep, newCount);
    if (proxyFinalizers) {
        proxyFinalizers.register(proxy, ep, proxy);
    }
}
function unregisterProxy(proxy) {
    if (proxyFinalizers) {
        proxyFinalizers.unregister(proxy);
    }
}
function createProxy(ep, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    unregisterProxy(proxy);
                    releaseEndpoint(ep);
                    isProxyReleased = true;
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: "GET" /* MessageType.GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* MessageType.SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: "ENDPOINT" /* MessageType.ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* MessageType.APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* MessageType.CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    registerProxy(proxy, ep);
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* WireValueType.HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* WireValueType.RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* WireValueType.HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* WireValueType.RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}

var nym_client_wasm = {exports: {}};

nym_client_wasm.exports;

(function (module) {
	let imports = {};
	imports['__wbindgen_placeholder__'] = module.exports;
	let wasm;
	const { TextEncoder, TextDecoder, inspect } = require$$0;

	const heap = new Array(128).fill(undefined);

	heap.push(undefined, null, true, false);

	function getObject(idx) { return heap[idx]; }

	let heap_next = heap.length;

	function dropObject(idx) {
	    if (idx < 132) return;
	    heap[idx] = heap_next;
	    heap_next = idx;
	}

	function takeObject(idx) {
	    const ret = getObject(idx);
	    dropObject(idx);
	    return ret;
	}

	function isLikeNone(x) {
	    return x === undefined || x === null;
	}

	let cachedFloat64Memory0 = null;

	function getFloat64Memory0() {
	    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
	        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
	    }
	    return cachedFloat64Memory0;
	}

	let cachedInt32Memory0 = null;

	function getInt32Memory0() {
	    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
	        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
	    }
	    return cachedInt32Memory0;
	}

	let WASM_VECTOR_LEN = 0;

	let cachedUint8Memory0 = null;

	function getUint8Memory0() {
	    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
	        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	    }
	    return cachedUint8Memory0;
	}

	let cachedTextEncoder = new TextEncoder('utf-8');

	const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
	    ? function (arg, view) {
	    return cachedTextEncoder.encodeInto(arg, view);
	}
	    : function (arg, view) {
	    const buf = cachedTextEncoder.encode(arg);
	    view.set(buf);
	    return {
	        read: arg.length,
	        written: buf.length
	    };
	});

	function passStringToWasm0(arg, malloc, realloc) {

	    if (realloc === undefined) {
	        const buf = cachedTextEncoder.encode(arg);
	        const ptr = malloc(buf.length, 1) >>> 0;
	        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
	        WASM_VECTOR_LEN = buf.length;
	        return ptr;
	    }

	    let len = arg.length;
	    let ptr = malloc(len, 1) >>> 0;

	    const mem = getUint8Memory0();

	    let offset = 0;

	    for (; offset < len; offset++) {
	        const code = arg.charCodeAt(offset);
	        if (code > 0x7F) break;
	        mem[ptr + offset] = code;
	    }

	    if (offset !== len) {
	        if (offset !== 0) {
	            arg = arg.slice(offset);
	        }
	        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
	        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
	        const ret = encodeString(arg, view);

	        offset += ret.written;
	    }

	    WASM_VECTOR_LEN = offset;
	    return ptr;
	}

	let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

	cachedTextDecoder.decode();

	function getStringFromWasm0(ptr, len) {
	    ptr = ptr >>> 0;
	    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
	}

	function addHeapObject(obj) {
	    if (heap_next === heap.length) heap.push(heap.length + 1);
	    const idx = heap_next;
	    heap_next = heap[idx];

	    heap[idx] = obj;
	    return idx;
	}

	let cachedBigInt64Memory0 = null;

	function getBigInt64Memory0() {
	    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
	        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
	    }
	    return cachedBigInt64Memory0;
	}

	function debugString(val) {
	    // primitive types
	    const type = typeof val;
	    if (type == 'number' || type == 'boolean' || val == null) {
	        return  `${val}`;
	    }
	    if (type == 'string') {
	        return `"${val}"`;
	    }
	    if (type == 'symbol') {
	        const description = val.description;
	        if (description == null) {
	            return 'Symbol';
	        } else {
	            return `Symbol(${description})`;
	        }
	    }
	    if (type == 'function') {
	        const name = val.name;
	        if (typeof name == 'string' && name.length > 0) {
	            return `Function(${name})`;
	        } else {
	            return 'Function';
	        }
	    }
	    // objects
	    if (Array.isArray(val)) {
	        const length = val.length;
	        let debug = '[';
	        if (length > 0) {
	            debug += debugString(val[0]);
	        }
	        for(let i = 1; i < length; i++) {
	            debug += ', ' + debugString(val[i]);
	        }
	        debug += ']';
	        return debug;
	    }
	    // Test for built-in
	    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
	    let className;
	    if (builtInMatches.length > 1) {
	        className = builtInMatches[1];
	    } else {
	        // Failed to match the standard '[object ClassName]'
	        return toString.call(val);
	    }
	    if (className == 'Object') {
	        // we're a user defined class or Object
	        // JSON.stringify avoids problems with cycles, and is generally much
	        // easier than looping through ownProperties of `val`.
	        try {
	            return 'Object(' + JSON.stringify(val) + ')';
	        } catch (_) {
	            return 'Object';
	        }
	    }
	    // errors
	    if (val instanceof Error) {
	        return `${val.name}: ${val.message}\n${val.stack}`;
	    }
	    // TODO we could test for more things here, like `Set`s and `Map`s.
	    return className;
	}

	function makeMutClosure(arg0, arg1, dtor, f) {
	    const state = { a: arg0, b: arg1, cnt: 1, dtor };
	    const real = (...args) => {
	        // First up with a closure we increment the internal reference
	        // count. This ensures that the Rust closure environment won't
	        // be deallocated while we're invoking it.
	        state.cnt++;
	        const a = state.a;
	        state.a = 0;
	        try {
	            return f(a, state.b, ...args);
	        } finally {
	            if (--state.cnt === 0) {
	                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

	            } else {
	                state.a = a;
	            }
	        }
	    };
	    real.original = state;

	    return real;
	}
	function __wbg_adapter_48(arg0, arg1, arg2) {
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h82ba29bd2a7c774c(retptr, arg0, arg1, addHeapObject(arg2));
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        if (r1) {
	            throw takeObject(r0);
	        }
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	    }
	}

	function makeClosure(arg0, arg1, dtor, f) {
	    const state = { a: arg0, b: arg1, cnt: 1, dtor };
	    const real = (...args) => {
	        // First up with a closure we increment the internal reference
	        // count. This ensures that the Rust closure environment won't
	        // be deallocated while we're invoking it.
	        state.cnt++;
	        try {
	            return f(state.a, state.b, ...args);
	        } finally {
	            if (--state.cnt === 0) {
	                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
	                state.a = 0;

	            }
	        }
	    };
	    real.original = state;

	    return real;
	}
	function __wbg_adapter_51(arg0, arg1, arg2) {
	    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h085f339610edd828(arg0, arg1, addHeapObject(arg2));
	}

	function __wbg_adapter_54(arg0, arg1) {
	    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he100da6fe16ad17f(arg0, arg1);
	}

	function __wbg_adapter_57(arg0, arg1) {
	    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h572738991d118b0b(arg0, arg1);
	}

	function __wbg_adapter_60(arg0, arg1) {
	    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h409e85469a68ad52(arg0, arg1);
	}

	function __wbg_adapter_63(arg0, arg1, arg2) {
	    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h340d96036bea55d0(arg0, arg1, addHeapObject(arg2));
	}

	function __wbg_adapter_70(arg0, arg1) {
	    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4a48f3ce5e2a3920(arg0, arg1);
	}

	function __wbg_adapter_73(arg0, arg1, arg2) {
	    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha17e88e118a96800(arg0, arg1, addHeapObject(arg2));
	}

	function passArray8ToWasm0(arg, malloc) {
	    const ptr = malloc(arg.length * 1, 1) >>> 0;
	    getUint8Memory0().set(arg, ptr / 1);
	    WASM_VECTOR_LEN = arg.length;
	    return ptr;
	}

	function getArrayU8FromWasm0(ptr, len) {
	    ptr = ptr >>> 0;
	    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
	}
	/**
	* Encode a payload
	* @param {string} mime_type
	* @param {Uint8Array} payload
	* @returns {Uint8Array}
	*/
	module.exports.encode_payload = function(mime_type, payload) {
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        const ptr0 = passStringToWasm0(mime_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
	        const len1 = WASM_VECTOR_LEN;
	        wasm.encode_payload(retptr, ptr0, len0, ptr1, len1);
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        var r2 = getInt32Memory0()[retptr / 4 + 2];
	        var r3 = getInt32Memory0()[retptr / 4 + 3];
	        if (r3) {
	            throw takeObject(r2);
	        }
	        var v3 = getArrayU8FromWasm0(r0, r1).slice();
	        wasm.__wbindgen_free(r0, r1 * 1);
	        return v3;
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	    }
	};

	/**
	* Create a new binary message with a user-specified `kind`, and `headers` as a string.
	* @param {string} mime_type
	* @param {Uint8Array} payload
	* @param {string | undefined} headers
	* @returns {Uint8Array}
	*/
	module.exports.encode_payload_with_headers = function(mime_type, payload, headers) {
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        const ptr0 = passStringToWasm0(mime_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
	        const len1 = WASM_VECTOR_LEN;
	        var ptr2 = isLikeNone(headers) ? 0 : passStringToWasm0(headers, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        var len2 = WASM_VECTOR_LEN;
	        wasm.encode_payload_with_headers(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        var r2 = getInt32Memory0()[retptr / 4 + 2];
	        var r3 = getInt32Memory0()[retptr / 4 + 3];
	        if (r3) {
	            throw takeObject(r2);
	        }
	        var v4 = getArrayU8FromWasm0(r0, r1).slice();
	        wasm.__wbindgen_free(r0, r1 * 1);
	        return v4;
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	    }
	};

	/**
	* Parse the `kind` and byte array `payload` from a byte array
	* @param {Uint8Array} message
	* @returns {EncodedPayload}
	*/
	module.exports.decode_payload = function(message) {
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.decode_payload(retptr, ptr0, len0);
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        var r2 = getInt32Memory0()[retptr / 4 + 2];
	        if (r2) {
	            throw takeObject(r1);
	        }
	        return takeObject(r0);
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	    }
	};

	/**
	* Try parse a UTF-8 string from an array of bytes
	* @param {Uint8Array} payload
	* @returns {string}
	*/
	module.exports.parse_utf8_string = function(payload) {
	    let deferred2_0;
	    let deferred2_1;
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        const ptr0 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.parse_utf8_string(retptr, ptr0, len0);
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        deferred2_0 = r0;
	        deferred2_1 = r1;
	        return getStringFromWasm0(r0, r1);
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
	    }
	};

	/**
	* Converts a UTF-8 string into an array of bytes
	*
	* This method is provided as a replacement for the mess of `atob`
	* (https://developer.mozilla.org/en-US/docs/Web/API/atob) helpers provided by browsers and NodeJS.
	*
	* Feel free to use `atob` if you know you won't have problems with polyfills or encoding issues.
	* @param {string} message
	* @returns {Uint8Array}
	*/
	module.exports.utf8_string_to_byte_array = function(message) {
	    try {
	        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	        const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.utf8_string_to_byte_array(retptr, ptr0, len0);
	        var r0 = getInt32Memory0()[retptr / 4 + 0];
	        var r1 = getInt32Memory0()[retptr / 4 + 1];
	        var v2 = getArrayU8FromWasm0(r0, r1).slice();
	        wasm.__wbindgen_free(r0, r1 * 1);
	        return v2;
	    } finally {
	        wasm.__wbindgen_add_to_stack_pointer(16);
	    }
	};

	function _assertClass(instance, klass) {
	    if (!(instance instanceof klass)) {
	        throw new Error(`expected instance of ${klass.name}`);
	    }
	    return instance.ptr;
	}
	/**
	* @returns {DebugWasm}
	*/
	module.exports.default_debug = function() {
	    const ret = wasm.default_debug();
	    return DebugWasm.__wrap(ret);
	};

	/**
	* @returns {any}
	*/
	module.exports.defaultDebug = function() {
	    const ret = wasm.defaultDebug();
	    return takeObject(ret);
	};

	/**
	* A client configuration in which no cover traffic will be sent,
	* in either the main distribution or the secondary traffic stream.
	* @returns {DebugWasm}
	*/
	module.exports.no_cover_debug = function() {
	    const ret = wasm.no_cover_debug();
	    return DebugWasm.__wrap(ret);
	};

	/**
	* @returns {any}
	*/
	module.exports.noCoverDebug = function() {
	    const ret = wasm.noCoverDebug();
	    return takeObject(ret);
	};

	/**
	* @param {string} nym_api_url
	* @returns {Promise<any>}
	*/
	module.exports.currentNetworkTopology = function(nym_api_url) {
	    const ptr0 = passStringToWasm0(nym_api_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len0 = WASM_VECTOR_LEN;
	    const ret = wasm.currentNetworkTopology(ptr0, len0);
	    return takeObject(ret);
	};

	/**
	*/
	module.exports.set_panic_hook = function() {
	    wasm.set_panic_hook();
	};

	function handleError(f, args) {
	    try {
	        return f.apply(this, args);
	    } catch (e) {
	        wasm.__wbindgen_exn_store(addHeapObject(e));
	    }
	}
	function __wbg_adapter_435(arg0, arg1, arg2, arg3) {
	    wasm.wasm_bindgen__convert__closures__invoke2_mut__hb40b977de175d84c(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
	}

	/**
	*/
	class AcknowledgementsWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(AcknowledgementsWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            average_ack_delay_ms: this.average_ack_delay_ms,
	            ack_wait_multiplier: this.ack_wait_multiplier,
	            ack_wait_addition_ms: this.ack_wait_addition_ms,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_acknowledgementswasm_free(ptr);
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * sent acknowledgement is going to be delayed at any given mix node.
	    * So for an ack going through three mix nodes, on average, it will take three times this value
	    * until the packet reaches its destination.
	    * @returns {number}
	    */
	    get average_ack_delay_ms() {
	        const ret = wasm.__wbg_get_acknowledgementswasm_average_ack_delay_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * sent acknowledgement is going to be delayed at any given mix node.
	    * So for an ack going through three mix nodes, on average, it will take three times this value
	    * until the packet reaches its destination.
	    * @param {number} arg0
	    */
	    set average_ack_delay_ms(arg0) {
	        wasm.__wbg_set_acknowledgementswasm_average_ack_delay_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Value multiplied with the expected round trip time of an acknowledgement packet before
	    * it is assumed it was lost and retransmission of the data packet happens.
	    * In an ideal network with 0 latency, this value would have been 1.
	    * @returns {number}
	    */
	    get ack_wait_multiplier() {
	        const ret = wasm.__wbg_get_acknowledgementswasm_ack_wait_multiplier(this.__wbg_ptr);
	        return ret;
	    }
	    /**
	    * Value multiplied with the expected round trip time of an acknowledgement packet before
	    * it is assumed it was lost and retransmission of the data packet happens.
	    * In an ideal network with 0 latency, this value would have been 1.
	    * @param {number} arg0
	    */
	    set ack_wait_multiplier(arg0) {
	        wasm.__wbg_set_acknowledgementswasm_ack_wait_multiplier(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Value added to the expected round trip time of an acknowledgement packet before
	    * it is assumed it was lost and retransmission of the data packet happens.
	    * In an ideal network with 0 latency, this value would have been 0.
	    * @returns {number}
	    */
	    get ack_wait_addition_ms() {
	        const ret = wasm.__wbg_get_acknowledgementswasm_ack_wait_addition_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Value added to the expected round trip time of an acknowledgement packet before
	    * it is assumed it was lost and retransmission of the data packet happens.
	    * In an ideal network with 0 latency, this value would have been 0.
	    * @param {number} arg0
	    */
	    set ack_wait_addition_ms(arg0) {
	        wasm.__wbg_set_acknowledgementswasm_ack_wait_addition_ms(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.AcknowledgementsWasm = AcknowledgementsWasm;
	/**
	*/
	class AnonymousSenderTag {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(AnonymousSenderTag.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_anonymoussendertag_free(ptr);
	    }
	}
	module.exports.AnonymousSenderTag = AnonymousSenderTag;
	/**
	*/
	class ClientConfig {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(ClientConfig.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_clientconfig_free(ptr);
	    }
	    /**
	    * @param {ClientConfigOpts} opts
	    */
	    constructor(opts) {
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            wasm.clientconfig_new(retptr, addHeapObject(opts));
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            var r2 = getInt32Memory0()[retptr / 4 + 2];
	            if (r2) {
	                throw takeObject(r1);
	            }
	            return ClientConfig.__wrap(r0);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	        }
	    }
	}
	module.exports.ClientConfig = ClientConfig;
	/**
	*/
	class ClientStorage {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(ClientStorage.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_clientstorage_free(ptr);
	    }
	    /**
	    * @param {string} client_id
	    * @param {string | undefined} passphrase
	    * @returns {Promise<ClientStorage>}
	    */
	    static new_async(client_id, passphrase) {
	        const ptr0 = passStringToWasm0(client_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        var ptr1 = isLikeNone(passphrase) ? 0 : passStringToWasm0(passphrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        var len1 = WASM_VECTOR_LEN;
	        const ret = wasm.clientstorage_new_async(ptr0, len0, ptr1, len1);
	        return takeObject(ret);
	    }
	    /**
	    * @param {string} client_id
	    * @param {string} passphrase
	    */
	    constructor(client_id, passphrase) {
	        const ptr0 = passStringToWasm0(client_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passStringToWasm0(passphrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len1 = WASM_VECTOR_LEN;
	        const ret = wasm.clientstorage_new(ptr0, len0, ptr1, len1);
	        return takeObject(ret);
	    }
	    /**
	    * @param {string} client_id
	    * @returns {Promise<any>}
	    */
	    static new_unencrypted(client_id) {
	        const ptr0 = passStringToWasm0(client_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ret = wasm.clientstorage_new_unencrypted(ptr0, len0);
	        return takeObject(ret);
	    }
	}
	module.exports.ClientStorage = ClientStorage;
	/**
	*/
	class CoverTrafficWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(CoverTrafficWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            loop_cover_traffic_average_delay_ms: this.loop_cover_traffic_average_delay_ms,
	            cover_traffic_primary_size_ratio: this.cover_traffic_primary_size_ratio,
	            disable_loop_cover_traffic_stream: this.disable_loop_cover_traffic_stream,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_covertrafficwasm_free(ptr);
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * it is going to take for another loop cover traffic message to be sent.
	    * @returns {number}
	    */
	    get loop_cover_traffic_average_delay_ms() {
	        const ret = wasm.__wbg_get_acknowledgementswasm_average_ack_delay_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * it is going to take for another loop cover traffic message to be sent.
	    * @param {number} arg0
	    */
	    set loop_cover_traffic_average_delay_ms(arg0) {
	        wasm.__wbg_set_acknowledgementswasm_average_ack_delay_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Specifies the ratio of `primary_packet_size` to `secondary_packet_size` used in cover traffic.
	    * Only applicable if `secondary_packet_size` is enabled.
	    * @returns {number}
	    */
	    get cover_traffic_primary_size_ratio() {
	        const ret = wasm.__wbg_get_acknowledgementswasm_ack_wait_multiplier(this.__wbg_ptr);
	        return ret;
	    }
	    /**
	    * Specifies the ratio of `primary_packet_size` to `secondary_packet_size` used in cover traffic.
	    * Only applicable if `secondary_packet_size` is enabled.
	    * @param {number} arg0
	    */
	    set cover_traffic_primary_size_ratio(arg0) {
	        wasm.__wbg_set_acknowledgementswasm_ack_wait_multiplier(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Controls whether the dedicated loop cover traffic stream should be enabled.
	    * (and sending packets, on average, every [Self::loop_cover_traffic_average_delay])
	    * @returns {boolean}
	    */
	    get disable_loop_cover_traffic_stream() {
	        const ret = wasm.__wbg_get_covertrafficwasm_disable_loop_cover_traffic_stream(this.__wbg_ptr);
	        return ret !== 0;
	    }
	    /**
	    * Controls whether the dedicated loop cover traffic stream should be enabled.
	    * (and sending packets, on average, every [Self::loop_cover_traffic_average_delay])
	    * @param {boolean} arg0
	    */
	    set disable_loop_cover_traffic_stream(arg0) {
	        wasm.__wbg_set_covertrafficwasm_disable_loop_cover_traffic_stream(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.CoverTrafficWasm = CoverTrafficWasm;
	/**
	*/
	class DebugWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(DebugWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            traffic: this.traffic,
	            cover_traffic: this.cover_traffic,
	            gateway_connection: this.gateway_connection,
	            acknowledgements: this.acknowledgements,
	            topology: this.topology,
	            reply_surbs: this.reply_surbs,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_debugwasm_free(ptr);
	    }
	    /**
	    * Defines all configuration options related to traffic streams.
	    * @returns {TrafficWasm}
	    */
	    get traffic() {
	        const ret = wasm.__wbg_get_debugwasm_traffic(this.__wbg_ptr);
	        return TrafficWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related to traffic streams.
	    * @param {TrafficWasm} arg0
	    */
	    set traffic(arg0) {
	        _assertClass(arg0, TrafficWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_traffic(this.__wbg_ptr, ptr0);
	    }
	    /**
	    * Defines all configuration options related to cover traffic stream(s).
	    * @returns {CoverTrafficWasm}
	    */
	    get cover_traffic() {
	        const ret = wasm.__wbg_get_debugwasm_cover_traffic(this.__wbg_ptr);
	        return CoverTrafficWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related to cover traffic stream(s).
	    * @param {CoverTrafficWasm} arg0
	    */
	    set cover_traffic(arg0) {
	        _assertClass(arg0, CoverTrafficWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_cover_traffic(this.__wbg_ptr, ptr0);
	    }
	    /**
	    * Defines all configuration options related to the gateway connection.
	    * @returns {GatewayConnectionWasm}
	    */
	    get gateway_connection() {
	        const ret = wasm.__wbg_get_debugwasm_gateway_connection(this.__wbg_ptr);
	        return GatewayConnectionWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related to the gateway connection.
	    * @param {GatewayConnectionWasm} arg0
	    */
	    set gateway_connection(arg0) {
	        _assertClass(arg0, GatewayConnectionWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_gateway_connection(this.__wbg_ptr, ptr0);
	    }
	    /**
	    * Defines all configuration options related to acknowledgements, such as delays or wait timeouts.
	    * @returns {AcknowledgementsWasm}
	    */
	    get acknowledgements() {
	        const ret = wasm.__wbg_get_debugwasm_acknowledgements(this.__wbg_ptr);
	        return AcknowledgementsWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related to acknowledgements, such as delays or wait timeouts.
	    * @param {AcknowledgementsWasm} arg0
	    */
	    set acknowledgements(arg0) {
	        _assertClass(arg0, AcknowledgementsWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_acknowledgements(this.__wbg_ptr, ptr0);
	    }
	    /**
	    * Defines all configuration options related topology, such as refresh rates or timeouts.
	    * @returns {TopologyWasm}
	    */
	    get topology() {
	        const ret = wasm.__wbg_get_debugwasm_topology(this.__wbg_ptr);
	        return TopologyWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related topology, such as refresh rates or timeouts.
	    * @param {TopologyWasm} arg0
	    */
	    set topology(arg0) {
	        _assertClass(arg0, TopologyWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_topology(this.__wbg_ptr, ptr0);
	    }
	    /**
	    * Defines all configuration options related to reply SURBs.
	    * @returns {ReplySurbsWasm}
	    */
	    get reply_surbs() {
	        const ret = wasm.__wbg_get_debugwasm_reply_surbs(this.__wbg_ptr);
	        return ReplySurbsWasm.__wrap(ret);
	    }
	    /**
	    * Defines all configuration options related to reply SURBs.
	    * @param {ReplySurbsWasm} arg0
	    */
	    set reply_surbs(arg0) {
	        _assertClass(arg0, ReplySurbsWasm);
	        var ptr0 = arg0.__destroy_into_raw();
	        wasm.__wbg_set_debugwasm_reply_surbs(this.__wbg_ptr, ptr0);
	    }
	}
	module.exports.DebugWasm = DebugWasm;
	/**
	*/
	class GatewayConnectionWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(GatewayConnectionWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            gateway_response_timeout_ms: this.gateway_response_timeout_ms,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_gatewayconnectionwasm_free(ptr);
	    }
	    /**
	    * How long we're willing to wait for a response to a message sent to the gateway,
	    * before giving up on it.
	    * @returns {number}
	    */
	    get gateway_response_timeout_ms() {
	        const ret = wasm.__wbg_get_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * How long we're willing to wait for a response to a message sent to the gateway,
	    * before giving up on it.
	    * @param {number} arg0
	    */
	    set gateway_response_timeout_ms(arg0) {
	        wasm.__wbg_set_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.GatewayConnectionWasm = GatewayConnectionWasm;
	/**
	*/
	class GatewayEndpointConfig {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(GatewayEndpointConfig.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_gatewayendpointconfig_free(ptr);
	    }
	    /**
	    * gateway_id specifies ID of the gateway to which the client should send messages.
	    * If initially omitted, a random gateway will be chosen from the available topology.
	    * @returns {string}
	    */
	    get gateway_id() {
	        let deferred1_0;
	        let deferred1_1;
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            wasm.__wbg_get_gatewayendpointconfig_gateway_id(retptr, this.__wbg_ptr);
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            deferred1_0 = r0;
	            deferred1_1 = r1;
	            return getStringFromWasm0(r0, r1);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
	        }
	    }
	    /**
	    * gateway_id specifies ID of the gateway to which the client should send messages.
	    * If initially omitted, a random gateway will be chosen from the available topology.
	    * @param {string} arg0
	    */
	    set gateway_id(arg0) {
	        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.__wbg_set_gatewayendpointconfig_gateway_id(this.__wbg_ptr, ptr0, len0);
	    }
	    /**
	    * Address of the gateway owner to which the client should send messages.
	    * @returns {string}
	    */
	    get gateway_owner() {
	        let deferred1_0;
	        let deferred1_1;
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            wasm.__wbg_get_gatewayendpointconfig_gateway_owner(retptr, this.__wbg_ptr);
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            deferred1_0 = r0;
	            deferred1_1 = r1;
	            return getStringFromWasm0(r0, r1);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
	        }
	    }
	    /**
	    * Address of the gateway owner to which the client should send messages.
	    * @param {string} arg0
	    */
	    set gateway_owner(arg0) {
	        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.__wbg_set_gatewayendpointconfig_gateway_owner(this.__wbg_ptr, ptr0, len0);
	    }
	    /**
	    * Address of the gateway listener to which all client requests should be sent.
	    * @returns {string}
	    */
	    get gateway_listener() {
	        let deferred1_0;
	        let deferred1_1;
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            wasm.__wbg_get_gatewayendpointconfig_gateway_listener(retptr, this.__wbg_ptr);
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            deferred1_0 = r0;
	            deferred1_1 = r1;
	            return getStringFromWasm0(r0, r1);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
	        }
	    }
	    /**
	    * Address of the gateway listener to which all client requests should be sent.
	    * @param {string} arg0
	    */
	    set gateway_listener(arg0) {
	        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        wasm.__wbg_set_gatewayendpointconfig_gateway_listener(this.__wbg_ptr, ptr0, len0);
	    }
	    /**
	    * @param {string} gateway_id
	    * @param {string} gateway_owner
	    * @param {string} gateway_listener
	    */
	    constructor(gateway_id, gateway_owner, gateway_listener) {
	        const ptr0 = passStringToWasm0(gateway_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passStringToWasm0(gateway_owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len1 = WASM_VECTOR_LEN;
	        const ptr2 = passStringToWasm0(gateway_listener, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len2 = WASM_VECTOR_LEN;
	        const ret = wasm.gatewayendpointconfig_new(ptr0, len0, ptr1, len1, ptr2, len2);
	        return GatewayEndpointConfig.__wrap(ret);
	    }
	}
	module.exports.GatewayEndpointConfig = GatewayEndpointConfig;
	/**
	*/
	class NodeTestResult {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NodeTestResult.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nodetestresult_free(ptr);
	    }
	    /**
	    * @returns {number}
	    */
	    get sent_packets() {
	        const ret = wasm.__wbg_get_nodetestresult_sent_packets(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * @param {number} arg0
	    */
	    set sent_packets(arg0) {
	        wasm.__wbg_set_nodetestresult_sent_packets(this.__wbg_ptr, arg0);
	    }
	    /**
	    * @returns {number}
	    */
	    get received_packets() {
	        const ret = wasm.__wbg_get_nodetestresult_received_packets(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * @param {number} arg0
	    */
	    set received_packets(arg0) {
	        wasm.__wbg_set_nodetestresult_received_packets(this.__wbg_ptr, arg0);
	    }
	    /**
	    * @returns {number}
	    */
	    get received_acks() {
	        const ret = wasm.__wbg_get_nodetestresult_received_acks(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * @param {number} arg0
	    */
	    set received_acks(arg0) {
	        wasm.__wbg_set_nodetestresult_received_acks(this.__wbg_ptr, arg0);
	    }
	    /**
	    * @returns {number}
	    */
	    get duplicate_packets() {
	        const ret = wasm.__wbg_get_nodetestresult_duplicate_packets(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * @param {number} arg0
	    */
	    set duplicate_packets(arg0) {
	        wasm.__wbg_set_nodetestresult_duplicate_packets(this.__wbg_ptr, arg0);
	    }
	    /**
	    * @returns {number}
	    */
	    get duplicate_acks() {
	        const ret = wasm.__wbg_get_nodetestresult_duplicate_acks(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * @param {number} arg0
	    */
	    set duplicate_acks(arg0) {
	        wasm.__wbg_set_nodetestresult_duplicate_acks(this.__wbg_ptr, arg0);
	    }
	    /**
	    */
	    log_details() {
	        wasm.nodetestresult_log_details(this.__wbg_ptr);
	    }
	    /**
	    * @returns {number}
	    */
	    score() {
	        const ret = wasm.nodetestresult_score(this.__wbg_ptr);
	        return ret;
	    }
	}
	module.exports.NodeTestResult = NodeTestResult;
	/**
	*/
	class NymClient {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NymClient.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nymclient_free(ptr);
	    }
	    /**
	    * @param {Function} on_message
	    * @param {ClientOpts | undefined} opts
	    */
	    constructor(on_message, opts) {
	        const ret = wasm.nymclient_new(addHeapObject(on_message), isLikeNone(opts) ? 0 : addHeapObject(opts));
	        return takeObject(ret);
	    }
	    /**
	    * @param {ClientConfig} config
	    * @param {Function} on_message
	    * @param {ClientOptsSimple} opts
	    * @returns {Promise<any>}
	    */
	    static newWithConfig(config, on_message, opts) {
	        _assertClass(config, ClientConfig);
	        var ptr0 = config.__destroy_into_raw();
	        const ret = wasm.nymclient_newWithConfig(ptr0, addHeapObject(on_message), addHeapObject(opts));
	        return takeObject(ret);
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    static newTester() {
	        const ret = wasm.nymclient_newTester();
	        return takeObject(ret);
	    }
	    /**
	    * @returns {string}
	    */
	    self_address() {
	        let deferred1_0;
	        let deferred1_1;
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            wasm.nymclient_self_address(retptr, this.__wbg_ptr);
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            deferred1_0 = r0;
	            deferred1_1 = r1;
	            return getStringFromWasm0(r0, r1);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
	        }
	    }
	    /**
	    * @param {string} mixnode_identity
	    * @param {number | undefined} num_test_packets
	    * @returns {Promise<any>}
	    */
	    try_construct_test_packet_request(mixnode_identity, num_test_packets) {
	        const ptr0 = passStringToWasm0(mixnode_identity, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ret = wasm.nymclient_try_construct_test_packet_request(this.__wbg_ptr, ptr0, len0, !isLikeNone(num_test_packets), isLikeNone(num_test_packets) ? 0 : num_test_packets);
	        return takeObject(ret);
	    }
	    /**
	    * @param {SerializableNymTopology} topology
	    * @returns {Promise<any>}
	    */
	    change_hardcoded_topology(topology) {
	        const ret = wasm.nymclient_change_hardcoded_topology(this.__wbg_ptr, addHeapObject(topology));
	        return takeObject(ret);
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    current_network_topology() {
	        const ret = wasm.nymclient_current_network_topology(this.__wbg_ptr);
	        return takeObject(ret);
	    }
	    /**
	    * Sends a test packet through the current network topology.
	    * It's the responsibility of the caller to ensure the correct topology has been injected and
	    * correct onmessage handlers have been setup.
	    * @param {NymClientTestRequest} request
	    * @returns {Promise<any>}
	    */
	    try_send_test_packets(request) {
	        _assertClass(request, NymClientTestRequest);
	        var ptr0 = request.__destroy_into_raw();
	        const ret = wasm.nymclient_try_send_test_packets(this.__wbg_ptr, ptr0);
	        return takeObject(ret);
	    }
	    /**
	    * The simplest message variant where no additional information is attached.
	    * You're simply sending your `data` to specified `recipient` without any tagging.
	    *
	    * Ends up with `NymMessage::Plain` variant
	    * @param {Uint8Array} message
	    * @param {string} recipient
	    * @returns {Promise<any>}
	    */
	    send_regular_message(message, recipient) {
	        const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passStringToWasm0(recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len1 = WASM_VECTOR_LEN;
	        const ret = wasm.nymclient_send_regular_message(this.__wbg_ptr, ptr0, len0, ptr1, len1);
	        return takeObject(ret);
	    }
	    /**
	    * Creates a message used for a duplex anonymous communication where the recipient
	    * will never learn of our true identity. This is achieved by carefully sending `reply_surbs`.
	    *
	    * Note that if reply_surbs is set to zero then
	    * this variant requires the client having sent some reply_surbs in the past
	    * (and thus the recipient also knowing our sender tag).
	    *
	    * Ends up with `NymMessage::Repliable` variant
	    * @param {Uint8Array} message
	    * @param {string} recipient
	    * @param {number} reply_surbs
	    * @returns {Promise<any>}
	    */
	    send_anonymous_message(message, recipient, reply_surbs) {
	        const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passStringToWasm0(recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len1 = WASM_VECTOR_LEN;
	        const ret = wasm.nymclient_send_anonymous_message(this.__wbg_ptr, ptr0, len0, ptr1, len1, reply_surbs);
	        return takeObject(ret);
	    }
	    /**
	    * Attempt to use our internally received and stored `ReplySurb` to send the message back
	    * to specified recipient whilst not knowing its full identity (or even gateway).
	    *
	    * Ends up with `NymMessage::Reply` variant
	    * @param {Uint8Array} message
	    * @param {string} recipient_tag
	    * @returns {Promise<any>}
	    */
	    send_reply(message, recipient_tag) {
	        const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ptr1 = passStringToWasm0(recipient_tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len1 = WASM_VECTOR_LEN;
	        const ret = wasm.nymclient_send_reply(this.__wbg_ptr, ptr0, len0, ptr1, len1);
	        return takeObject(ret);
	    }
	}
	module.exports.NymClient = NymClient;
	/**
	*/
	class NymClientBuilder {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NymClientBuilder.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nymclientbuilder_free(ptr);
	    }
	    /**
	    * @param {ClientConfig} config
	    * @param {Function} on_message
	    * @param {string | undefined} preferred_gateway
	    * @param {string | undefined} storage_passphrase
	    */
	    constructor(config, on_message, preferred_gateway, storage_passphrase) {
	        _assertClass(config, ClientConfig);
	        var ptr0 = config.__destroy_into_raw();
	        var ptr1 = isLikeNone(preferred_gateway) ? 0 : passStringToWasm0(preferred_gateway, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        var len1 = WASM_VECTOR_LEN;
	        var ptr2 = isLikeNone(storage_passphrase) ? 0 : passStringToWasm0(storage_passphrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        var len2 = WASM_VECTOR_LEN;
	        const ret = wasm.nymclientbuilder_new(ptr0, addHeapObject(on_message), ptr1, len1, ptr2, len2);
	        return NymClientBuilder.__wrap(ret);
	    }
	    /**
	    * @param {SerializableNymTopology} topology
	    * @param {Function} on_message
	    * @param {string | undefined} gateway
	    * @returns {NymClientBuilder}
	    */
	    static new_tester(topology, on_message, gateway) {
	        try {
	            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
	            var ptr0 = isLikeNone(gateway) ? 0 : passStringToWasm0(gateway, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	            var len0 = WASM_VECTOR_LEN;
	            wasm.nymclientbuilder_new_tester(retptr, addHeapObject(topology), addHeapObject(on_message), ptr0, len0);
	            var r0 = getInt32Memory0()[retptr / 4 + 0];
	            var r1 = getInt32Memory0()[retptr / 4 + 1];
	            var r2 = getInt32Memory0()[retptr / 4 + 2];
	            if (r2) {
	                throw takeObject(r1);
	            }
	            return NymClientBuilder.__wrap(r0);
	        } finally {
	            wasm.__wbindgen_add_to_stack_pointer(16);
	        }
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    start_client() {
	        const ptr = this.__destroy_into_raw();
	        const ret = wasm.nymclientbuilder_start_client(ptr);
	        return takeObject(ret);
	    }
	}
	module.exports.NymClientBuilder = NymClientBuilder;
	/**
	*/
	class NymClientTestRequest {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NymClientTestRequest.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nymclienttestrequest_free(ptr);
	    }
	    /**
	    * @returns {SerializableNymTopology}
	    */
	    injectable_topology() {
	        const ret = wasm.nymclienttestrequest_injectable_topology(this.__wbg_ptr);
	        return takeObject(ret);
	    }
	}
	module.exports.NymClientTestRequest = NymClientTestRequest;
	/**
	*/
	class NymNodeTester {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NymNodeTester.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nymnodetester_free(ptr);
	    }
	    /**
	    * @param {NymNodeTesterOpts} args
	    */
	    constructor(args) {
	        const ret = wasm.nymnodetester_new(addHeapObject(args));
	        return takeObject(ret);
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    disconnect_from_gateway() {
	        const ret = wasm.nymnodetester_disconnect_from_gateway(this.__wbg_ptr);
	        return takeObject(ret);
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    reconnect_to_gateway() {
	        const ret = wasm.nymnodetester_reconnect_to_gateway(this.__wbg_ptr);
	        return takeObject(ret);
	    }
	    /**
	    * @param {string} mixnode_identity
	    * @param {bigint | undefined} timeout_millis
	    * @param {number | undefined} num_test_packets
	    * @returns {Promise<any>}
	    */
	    test_node(mixnode_identity, timeout_millis, num_test_packets) {
	        const ptr0 = passStringToWasm0(mixnode_identity, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	        const len0 = WASM_VECTOR_LEN;
	        const ret = wasm.nymnodetester_test_node(this.__wbg_ptr, ptr0, len0, !isLikeNone(timeout_millis), isLikeNone(timeout_millis) ? BigInt(0) : timeout_millis, !isLikeNone(num_test_packets), isLikeNone(num_test_packets) ? 0 : num_test_packets);
	        return takeObject(ret);
	    }
	}
	module.exports.NymNodeTester = NymNodeTester;
	/**
	*/
	class NymNodeTesterBuilder {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(NymNodeTesterBuilder.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_nymnodetesterbuilder_free(ptr);
	    }
	    /**
	    * @param {NymNodeTesterOpts} args
	    */
	    constructor(args) {
	        const ret = wasm.nymnodetesterbuilder_new(addHeapObject(args));
	        return takeObject(ret);
	    }
	    /**
	    * @returns {Promise<any>}
	    */
	    setup_client() {
	        const ptr = this.__destroy_into_raw();
	        const ret = wasm.nymnodetesterbuilder_setup_client(ptr);
	        return takeObject(ret);
	    }
	}
	module.exports.NymNodeTesterBuilder = NymNodeTesterBuilder;
	/**
	*/
	class ReplySurbsWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(ReplySurbsWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            minimum_reply_surb_storage_threshold: this.minimum_reply_surb_storage_threshold,
	            maximum_reply_surb_storage_threshold: this.maximum_reply_surb_storage_threshold,
	            minimum_reply_surb_request_size: this.minimum_reply_surb_request_size,
	            maximum_reply_surb_request_size: this.maximum_reply_surb_request_size,
	            maximum_allowed_reply_surb_request_size: this.maximum_allowed_reply_surb_request_size,
	            maximum_reply_surb_rerequest_waiting_period_ms: this.maximum_reply_surb_rerequest_waiting_period_ms,
	            maximum_reply_surb_drop_waiting_period_ms: this.maximum_reply_surb_drop_waiting_period_ms,
	            maximum_reply_surb_age_ms: this.maximum_reply_surb_age_ms,
	            maximum_reply_key_age_ms: this.maximum_reply_key_age_ms,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_replysurbswasm_free(ptr);
	    }
	    /**
	    * Defines the minimum number of reply surbs the client wants to keep in its storage at all times.
	    * It can only allow to go below that value if its to request additional reply surbs.
	    * @returns {number}
	    */
	    get minimum_reply_surb_storage_threshold() {
	        const ret = wasm.__wbg_get_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines the minimum number of reply surbs the client wants to keep in its storage at all times.
	    * It can only allow to go below that value if its to request additional reply surbs.
	    * @param {number} arg0
	    */
	    set minimum_reply_surb_storage_threshold(arg0) {
	        wasm.__wbg_set_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines the maximum number of reply surbs the client wants to keep in its storage at any times.
	    * @returns {number}
	    */
	    get maximum_reply_surb_storage_threshold() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines the maximum number of reply surbs the client wants to keep in its storage at any times.
	    * @param {number} arg0
	    */
	    set maximum_reply_surb_storage_threshold(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines the minimum number of reply surbs the client would request.
	    * @returns {number}
	    */
	    get minimum_reply_surb_request_size() {
	        const ret = wasm.__wbg_get_replysurbswasm_minimum_reply_surb_request_size(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines the minimum number of reply surbs the client would request.
	    * @param {number} arg0
	    */
	    set minimum_reply_surb_request_size(arg0) {
	        wasm.__wbg_set_replysurbswasm_minimum_reply_surb_request_size(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines the maximum number of reply surbs the client would request.
	    * @returns {number}
	    */
	    get maximum_reply_surb_request_size() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_request_size(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines the maximum number of reply surbs the client would request.
	    * @param {number} arg0
	    */
	    set maximum_reply_surb_request_size(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_request_size(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines the maximum number of reply surbs a remote party is allowed to request from this client at once.
	    * @returns {number}
	    */
	    get maximum_allowed_reply_surb_request_size() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_allowed_reply_surb_request_size(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines the maximum number of reply surbs a remote party is allowed to request from this client at once.
	    * @param {number} arg0
	    */
	    set maximum_allowed_reply_surb_request_size(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_allowed_reply_surb_request_size(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines maximum amount of time the client is going to wait for reply surbs before explicitly asking
	    * for more even though in theory they wouldn't need to.
	    * @returns {number}
	    */
	    get maximum_reply_surb_rerequest_waiting_period_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_rerequest_waiting_period_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines maximum amount of time the client is going to wait for reply surbs before explicitly asking
	    * for more even though in theory they wouldn't need to.
	    * @param {number} arg0
	    */
	    set maximum_reply_surb_rerequest_waiting_period_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_rerequest_waiting_period_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines maximum amount of time the client is going to wait for reply surbs before
	    * deciding it's never going to get them and would drop all pending messages
	    * @returns {number}
	    */
	    get maximum_reply_surb_drop_waiting_period_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_drop_waiting_period_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines maximum amount of time the client is going to wait for reply surbs before
	    * deciding it's never going to get them and would drop all pending messages
	    * @param {number} arg0
	    */
	    set maximum_reply_surb_drop_waiting_period_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_drop_waiting_period_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines maximum amount of time given reply surb is going to be valid for.
	    * This is going to be superseded by key rotation once implemented.
	    * @returns {number}
	    */
	    get maximum_reply_surb_age_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_age_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines maximum amount of time given reply surb is going to be valid for.
	    * This is going to be superseded by key rotation once implemented.
	    * @param {number} arg0
	    */
	    set maximum_reply_surb_age_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_age_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines maximum amount of time given reply key is going to be valid for.
	    * This is going to be superseded by key rotation once implemented.
	    * @returns {number}
	    */
	    get maximum_reply_key_age_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_key_age_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines maximum amount of time given reply key is going to be valid for.
	    * This is going to be superseded by key rotation once implemented.
	    * @param {number} arg0
	    */
	    set maximum_reply_key_age_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_key_age_ms(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.ReplySurbsWasm = ReplySurbsWasm;
	/**
	*/
	class TopologyWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(TopologyWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            topology_refresh_rate_ms: this.topology_refresh_rate_ms,
	            topology_resolution_timeout_ms: this.topology_resolution_timeout_ms,
	            max_startup_gateway_waiting_period_ms: this.max_startup_gateway_waiting_period_ms,
	            disable_refreshing: this.disable_refreshing,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_topologywasm_free(ptr);
	    }
	    /**
	    * The uniform delay every which clients are querying the directory server
	    * to try to obtain a compatible network topology to send sphinx packets through.
	    * @returns {number}
	    */
	    get topology_refresh_rate_ms() {
	        const ret = wasm.__wbg_get_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * The uniform delay every which clients are querying the directory server
	    * to try to obtain a compatible network topology to send sphinx packets through.
	    * @param {number} arg0
	    */
	    set topology_refresh_rate_ms(arg0) {
	        wasm.__wbg_set_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * During topology refresh, test packets are sent through every single possible network
	    * path. This timeout determines waiting period until it is decided that the packet
	    * did not reach its destination.
	    * @returns {number}
	    */
	    get topology_resolution_timeout_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * During topology refresh, test packets are sent through every single possible network
	    * path. This timeout determines waiting period until it is decided that the packet
	    * did not reach its destination.
	    * @param {number} arg0
	    */
	    set topology_resolution_timeout_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Defines how long the client is going to wait on startup for its gateway to come online,
	    * before abandoning the procedure.
	    * @returns {number}
	    */
	    get max_startup_gateway_waiting_period_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_minimum_reply_surb_request_size(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * Defines how long the client is going to wait on startup for its gateway to come online,
	    * before abandoning the procedure.
	    * @param {number} arg0
	    */
	    set max_startup_gateway_waiting_period_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_minimum_reply_surb_request_size(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Specifies whether the client should not refresh the network topology after obtaining
	    * the first valid instance.
	    * Supersedes `topology_refresh_rate_ms`.
	    * @returns {boolean}
	    */
	    get disable_refreshing() {
	        const ret = wasm.__wbg_get_topologywasm_disable_refreshing(this.__wbg_ptr);
	        return ret !== 0;
	    }
	    /**
	    * Specifies whether the client should not refresh the network topology after obtaining
	    * the first valid instance.
	    * Supersedes `topology_refresh_rate_ms`.
	    * @param {boolean} arg0
	    */
	    set disable_refreshing(arg0) {
	        wasm.__wbg_set_topologywasm_disable_refreshing(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.TopologyWasm = TopologyWasm;
	/**
	*/
	class TrafficWasm {

	    static __wrap(ptr) {
	        ptr = ptr >>> 0;
	        const obj = Object.create(TrafficWasm.prototype);
	        obj.__wbg_ptr = ptr;

	        return obj;
	    }

	    toJSON() {
	        return {
	            average_packet_delay_ms: this.average_packet_delay_ms,
	            message_sending_average_delay_ms: this.message_sending_average_delay_ms,
	            disable_main_poisson_packet_distribution: this.disable_main_poisson_packet_distribution,
	            use_extended_packet_size: this.use_extended_packet_size,
	            use_outfox: this.use_outfox,
	        };
	    }

	    toString() {
	        return JSON.stringify(this);
	    }

	    [inspect.custom]() {
	        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
	    }

	    __destroy_into_raw() {
	        const ptr = this.__wbg_ptr;
	        this.__wbg_ptr = 0;

	        return ptr;
	    }

	    free() {
	        const ptr = this.__destroy_into_raw();
	        wasm.__wbg_trafficwasm_free(ptr);
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * sent packet is going to be delayed at any given mix node.
	    * So for a packet going through three mix nodes, on average, it will take three times this value
	    * until the packet reaches its destination.
	    * @returns {number}
	    */
	    get average_packet_delay_ms() {
	        const ret = wasm.__wbg_get_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * sent packet is going to be delayed at any given mix node.
	    * So for a packet going through three mix nodes, on average, it will take three times this value
	    * until the packet reaches its destination.
	    * @param {number} arg0
	    */
	    set average_packet_delay_ms(arg0) {
	        wasm.__wbg_set_gatewayconnectionwasm_gateway_response_timeout_ms(this.__wbg_ptr, arg0);
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * it is going to take another 'real traffic stream' message to be sent.
	    * If no real packets are available and cover traffic is enabled,
	    * a loop cover message is sent instead in order to preserve the rate.
	    * @returns {number}
	    */
	    get message_sending_average_delay_ms() {
	        const ret = wasm.__wbg_get_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr);
	        return ret >>> 0;
	    }
	    /**
	    * The parameter of Poisson distribution determining how long, on average,
	    * it is going to take another 'real traffic stream' message to be sent.
	    * If no real packets are available and cover traffic is enabled,
	    * a loop cover message is sent instead in order to preserve the rate.
	    * @param {number} arg0
	    */
	    set message_sending_average_delay_ms(arg0) {
	        wasm.__wbg_set_replysurbswasm_maximum_reply_surb_storage_threshold(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Controls whether the main packet stream constantly produces packets according to the predefined
	    * poisson distribution.
	    * @returns {boolean}
	    */
	    get disable_main_poisson_packet_distribution() {
	        const ret = wasm.__wbg_get_trafficwasm_disable_main_poisson_packet_distribution(this.__wbg_ptr);
	        return ret !== 0;
	    }
	    /**
	    * Controls whether the main packet stream constantly produces packets according to the predefined
	    * poisson distribution.
	    * @param {boolean} arg0
	    */
	    set disable_main_poisson_packet_distribution(arg0) {
	        wasm.__wbg_set_trafficwasm_disable_main_poisson_packet_distribution(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Controls whether the sent sphinx packet use the NON-DEFAULT bigger size.
	    * @returns {boolean}
	    */
	    get use_extended_packet_size() {
	        const ret = wasm.__wbg_get_trafficwasm_use_extended_packet_size(this.__wbg_ptr);
	        return ret !== 0;
	    }
	    /**
	    * Controls whether the sent sphinx packet use the NON-DEFAULT bigger size.
	    * @param {boolean} arg0
	    */
	    set use_extended_packet_size(arg0) {
	        wasm.__wbg_set_trafficwasm_use_extended_packet_size(this.__wbg_ptr, arg0);
	    }
	    /**
	    * Controls whether the sent packets should use outfox as opposed to the default sphinx.
	    * @returns {boolean}
	    */
	    get use_outfox() {
	        const ret = wasm.__wbg_get_trafficwasm_use_outfox(this.__wbg_ptr);
	        return ret !== 0;
	    }
	    /**
	    * Controls whether the sent packets should use outfox as opposed to the default sphinx.
	    * @param {boolean} arg0
	    */
	    set use_outfox(arg0) {
	        wasm.__wbg_set_trafficwasm_use_outfox(this.__wbg_ptr, arg0);
	    }
	}
	module.exports.TrafficWasm = TrafficWasm;

	module.exports.__wbindgen_is_undefined = function(arg0) {
	    const ret = getObject(arg0) === undefined;
	    return ret;
	};

	module.exports.__wbindgen_in = function(arg0, arg1) {
	    const ret = getObject(arg0) in getObject(arg1);
	    return ret;
	};

	module.exports.__wbindgen_is_object = function(arg0) {
	    const val = getObject(arg0);
	    const ret = typeof(val) === 'object' && val !== null;
	    return ret;
	};

	module.exports.__wbindgen_object_drop_ref = function(arg0) {
	    takeObject(arg0);
	};

	module.exports.__wbindgen_number_get = function(arg0, arg1) {
	    const obj = getObject(arg1);
	    const ret = typeof(obj) === 'number' ? obj : undefined;
	    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
	    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
	};

	module.exports.__wbindgen_boolean_get = function(arg0) {
	    const v = getObject(arg0);
	    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
	    return ret;
	};

	module.exports.__wbindgen_string_get = function(arg0, arg1) {
	    const obj = getObject(arg1);
	    const ret = typeof(obj) === 'string' ? obj : undefined;
	    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    var len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbindgen_error_new = function(arg0, arg1) {
	    const ret = new Error(getStringFromWasm0(arg0, arg1));
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_object_clone_ref = function(arg0) {
	    const ret = getObject(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_string_new = function(arg0, arg1) {
	    const ret = getStringFromWasm0(arg0, arg1);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_number_new = function(arg0) {
	    const ret = arg0;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_nymclient_new = function(arg0) {
	    const ret = NymClient.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_nymclienttestrequest_new = function(arg0) {
	    const ret = NymClientTestRequest.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_nymnodetester_new = function(arg0) {
	    const ret = NymNodeTester.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_nymnodetesterbuilder_new = function(arg0) {
	    const ret = NymNodeTesterBuilder.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_nodetestresult_new = function(arg0) {
	    const ret = NodeTestResult.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_is_string = function(arg0) {
	    const ret = typeof(getObject(arg0)) === 'string';
	    return ret;
	};

	module.exports.__wbindgen_is_bigint = function(arg0) {
	    const ret = typeof(getObject(arg0)) === 'bigint';
	    return ret;
	};

	module.exports.__wbindgen_bigint_from_i64 = function(arg0) {
	    const ret = arg0;
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_jsval_eq = function(arg0, arg1) {
	    const ret = getObject(arg0) === getObject(arg1);
	    return ret;
	};

	module.exports.__wbindgen_bigint_from_u64 = function(arg0) {
	    const ret = BigInt.asUintN(64, arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_clientstorage_new = function(arg0) {
	    const ret = ClientStorage.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_new_abda76e883ba8a5f = function() {
	    const ret = new Error();
	    return addHeapObject(ret);
	};

	module.exports.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
	    const ret = getObject(arg1).stack;
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
	    let deferred0_0;
	    let deferred0_1;
	    try {
	        deferred0_0 = arg0;
	        deferred0_1 = arg1;
	        console.error(getStringFromWasm0(arg0, arg1));
	    } finally {
	        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
	    }
	};

	module.exports.__wbindgen_cb_drop = function(arg0) {
	    const obj = takeObject(arg0).original;
	    if (obj.cnt-- == 1) {
	        obj.a = 0;
	        return true;
	    }
	    const ret = false;
	    return ret;
	};

	module.exports.__wbg_Window_2323448e22bf340f = function(arg0) {
	    const ret = getObject(arg0).Window;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_WorkerGlobalScope_4f52a4f4757baa51 = function(arg0) {
	    const ret = getObject(arg0).WorkerGlobalScope;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_global_bb13ba737d1fd37d = function(arg0) {
	    const ret = getObject(arg0).global;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_indexedDB_553c6eee256a5956 = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).indexedDB;
	    return isLikeNone(ret) ? 0 : addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_clearInterval_bd072ecb096d9775 = function(arg0) {
	    const ret = clearInterval(takeObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_setInterval_edede8e2124cbb00 = function() { return handleError(function (arg0, arg1) {
	    const ret = setInterval(getObject(arg0), arg1);
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_performance_1430613edb72ce03 = function(arg0) {
	    const ret = getObject(arg0).performance;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_now_eab901b1d3b8a295 = function(arg0) {
	    const ret = getObject(arg0).now();
	    return ret;
	};

	module.exports.__wbg_setTimeout_fba1b48a90e30862 = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
	    return ret;
	}, arguments) };

	module.exports.__wbg_fetch_57429b87be3dcc33 = function(arg0) {
	    const ret = fetch(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_anonymoussendertag_new = function(arg0) {
	    const ret = AnonymousSenderTag.__wrap(arg0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_log_56ad965dcd7a8d1e = function(arg0, arg1) {
	    console.log(getStringFromWasm0(arg0, arg1));
	};

	module.exports.__wbg_warn_6b6312ae47b4000a = function(arg0, arg1) {
	    console.warn(getStringFromWasm0(arg0, arg1));
	};

	module.exports.__wbg_error_d8f8bcfc5d63b5bb = function(arg0, arg1) {
	    console.error(getStringFromWasm0(arg0, arg1));
	};

	module.exports.__wbg_indexedDB_839701fb576f779c = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).indexedDB;
	    return isLikeNone(ret) ? 0 : addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_setonabort_2b13e673d32df8bc = function(arg0, arg1) {
	    getObject(arg0).onabort = getObject(arg1);
	};

	module.exports.__wbg_setoncomplete_97a83c9bfeb56eaf = function(arg0, arg1) {
	    getObject(arg0).oncomplete = getObject(arg1);
	};

	module.exports.__wbg_setonerror_b7a755ab0647ce3e = function(arg0, arg1) {
	    getObject(arg0).onerror = getObject(arg1);
	};

	module.exports.__wbg_objectStore_5a858a654147f96f = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_wasClean_74cf0c4d617e8bf5 = function(arg0) {
	    const ret = getObject(arg0).wasClean;
	    return ret;
	};

	module.exports.__wbg_code_858da7147ef5fb52 = function(arg0) {
	    const ret = getObject(arg0).code;
	    return ret;
	};

	module.exports.__wbg_reason_cab9df8d5ef57aa2 = function(arg0, arg1) {
	    const ret = getObject(arg1).reason;
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_newwitheventinitdict_1f554ee93659ab92 = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = new CloseEvent(getStringFromWasm0(arg0, arg1), getObject(arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_readyState_b25418fd198bf715 = function(arg0) {
	    const ret = getObject(arg0).readyState;
	    return ret;
	};

	module.exports.__wbg_setbinaryType_096c70c4a9d97499 = function(arg0, arg1) {
	    getObject(arg0).binaryType = takeObject(arg1);
	};

	module.exports.__wbg_new_b66404b6322c59bf = function() { return handleError(function (arg0, arg1) {
	    const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_close_dfa389d8fddb52fc = function() { return handleError(function (arg0) {
	    getObject(arg0).close();
	}, arguments) };

	module.exports.__wbg_send_280c8ab5d0df82de = function() { return handleError(function (arg0, arg1, arg2) {
	    getObject(arg0).send(getStringFromWasm0(arg1, arg2));
	}, arguments) };

	module.exports.__wbg_send_1a008ea2eb3a1951 = function() { return handleError(function (arg0, arg1, arg2) {
	    getObject(arg0).send(getArrayU8FromWasm0(arg1, arg2));
	}, arguments) };

	module.exports.__wbg_get_fc26906e5ae1ea85 = function() { return handleError(function (arg0, arg1) {
	    const ret = getObject(arg0).get(getObject(arg1));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_put_fb32824d87feec5c = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_setonversionchange_ee7f4abfb91cc81b = function(arg0, arg1) {
	    getObject(arg0).onversionchange = getObject(arg1);
	};

	module.exports.__wbg_createObjectStore_40ad9287f7935c33 = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_transaction_d6f1ef0b34b58a31 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
	    const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_newwithstrandinit_cad5cd6038c7ff5d = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_name_e1f42ed4f319b110 = function(arg0, arg1) {
	    const ret = getObject(arg1).name;
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_message_ad3cc15a4d40c34b = function(arg0, arg1) {
	    const ret = getObject(arg1).message;
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_code_e5bc0ed8fd7bc4b8 = function(arg0) {
	    const ret = getObject(arg0).code;
	    return ret;
	};

	module.exports.__wbg_new_1eead62f64ca15ce = function() { return handleError(function () {
	    const ret = new Headers();
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_append_fda9e3432e3e88da = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
	    getObject(arg0).append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
	}, arguments) };

	module.exports.__wbg_indexedDB_406f87676b363c82 = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).indexedDB;
	    return isLikeNone(ret) ? 0 : addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_fetch_8eaf01857a5bb21f = function(arg0, arg1) {
	    const ret = getObject(arg0).fetch(getObject(arg1));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_open_6a08b03c958d4ad0 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
	    const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2), arg3 >>> 0);
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_instanceof_Response_fc4327dbfcdf5ced = function(arg0) {
	    let result;
	    try {
	        result = getObject(arg0) instanceof Response;
	    } catch {
	        result = false;
	    }
	    const ret = result;
	    return ret;
	};

	module.exports.__wbg_url_8503de97f69da463 = function(arg0, arg1) {
	    const ret = getObject(arg1).url;
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_status_ac85a3142a84caa2 = function(arg0) {
	    const ret = getObject(arg0).status;
	    return ret;
	};

	module.exports.__wbg_headers_b70de86b8e989bc0 = function(arg0) {
	    const ret = getObject(arg0).headers;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_arrayBuffer_288fb3538806e85c = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).arrayBuffer();
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_text_a667ac1770538491 = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).text();
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_setonblocked_4311b52f166b3434 = function(arg0, arg1) {
	    getObject(arg0).onblocked = getObject(arg1);
	};

	module.exports.__wbg_setonupgradeneeded_5a39a65558c323b2 = function(arg0, arg1) {
	    getObject(arg0).onupgradeneeded = getObject(arg1);
	};

	module.exports.__wbg_result_edff16ff107d6acb = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).result;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_error_8a79f35fe9368563 = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).error;
	    return isLikeNone(ret) ? 0 : addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_readyState_a9f7376e6e642409 = function(arg0) {
	    const ret = getObject(arg0).readyState;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_setonsuccess_f518a37d8228a576 = function(arg0, arg1) {
	    getObject(arg0).onsuccess = getObject(arg1);
	};

	module.exports.__wbg_setonerror_7bf21979c5219792 = function(arg0, arg1) {
	    getObject(arg0).onerror = getObject(arg1);
	};

	module.exports.__wbg_oldVersion_4fabc376deaf71d6 = function(arg0) {
	    const ret = getObject(arg0).oldVersion;
	    return ret;
	};

	module.exports.__wbg_data_ab99ae4a2e1e8bc9 = function(arg0) {
	    const ret = getObject(arg0).data;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_target_f171e89c61e2bccf = function(arg0) {
	    const ret = getObject(arg0).target;
	    return isLikeNone(ret) ? 0 : addHeapObject(ret);
	};

	module.exports.__wbg_addEventListener_5651108fc3ffeb6e = function() { return handleError(function (arg0, arg1, arg2, arg3) {
	    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
	}, arguments) };

	module.exports.__wbg_addEventListener_a5963e26cd7b176b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
	    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
	}, arguments) };

	module.exports.__wbg_dispatchEvent_a622a6455be582eb = function() { return handleError(function (arg0, arg1) {
	    const ret = getObject(arg0).dispatchEvent(getObject(arg1));
	    return ret;
	}, arguments) };

	module.exports.__wbg_removeEventListener_5de660c02ed784e4 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
	    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
	}, arguments) };

	module.exports.__wbg_signal_4bd18fb489af2d4c = function(arg0) {
	    const ret = getObject(arg0).signal;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_new_55c9955722952374 = function() { return handleError(function () {
	    const ret = new AbortController();
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_abort_654b796176d117aa = function(arg0) {
	    getObject(arg0).abort();
	};

	module.exports.__wbg_randomFillSync_dc1e9a60c158336d = function() { return handleError(function (arg0, arg1) {
	    getObject(arg0).randomFillSync(takeObject(arg1));
	}, arguments) };

	module.exports.__wbg_getRandomValues_37fa2ca9e4e07fab = function() { return handleError(function (arg0, arg1) {
	    getObject(arg0).getRandomValues(getObject(arg1));
	}, arguments) };

	module.exports.__wbg_crypto_c48a774b022d20ac = function(arg0) {
	    const ret = getObject(arg0).crypto;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_process_298734cf255a885d = function(arg0) {
	    const ret = getObject(arg0).process;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_versions_e2e78e134e3e5d01 = function(arg0) {
	    const ret = getObject(arg0).versions;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_node_1cd7a5d853dbea79 = function(arg0) {
	    const ret = getObject(arg0).node;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_require_8f08ceecec0f4fee = function() { return handleError(function () {
	    const ret = commonjsRequire;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_msCrypto_bcb970640f50a1e8 = function(arg0) {
	    const ret = getObject(arg0).msCrypto;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_self_7eede1f4488bf346 = function() { return handleError(function () {
	    const ret = self.self;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_crypto_c909fb428dcbddb6 = function(arg0) {
	    const ret = getObject(arg0).crypto;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_msCrypto_511eefefbfc70ae4 = function(arg0) {
	    const ret = getObject(arg0).msCrypto;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_require_900d5c3984fe7703 = function(arg0, arg1, arg2) {
	    const ret = require("crypto");
	    return addHeapObject(ret);
	};

	module.exports.__wbg_getRandomValues_307049345d0bd88c = function(arg0) {
	    const ret = getObject(arg0).getRandomValues;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_getRandomValues_cd175915511f705e = function(arg0, arg1) {
	    getObject(arg0).getRandomValues(getObject(arg1));
	};

	module.exports.__wbg_randomFillSync_85b3f4c52c56c313 = function(arg0, arg1, arg2) {
	    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
	};

	module.exports.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function() {
	    const ret = module;
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
	    const ret = getObject(arg0) == getObject(arg1);
	    return ret;
	};

	module.exports.__wbg_getwithrefkey_5e6d9547403deab8 = function(arg0, arg1) {
	    const ret = getObject(arg0)[getObject(arg1)];
	    return addHeapObject(ret);
	};

	module.exports.__wbg_set_841ac57cff3d672b = function(arg0, arg1, arg2) {
	    getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
	};

	module.exports.__wbg_String_88810dfeb4021902 = function(arg0, arg1) {
	    const ret = String(getObject(arg1));
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbg_get_44be0491f933a435 = function(arg0, arg1) {
	    const ret = getObject(arg0)[arg1 >>> 0];
	    return addHeapObject(ret);
	};

	module.exports.__wbg_length_fff51ee6522a1a18 = function(arg0) {
	    const ret = getObject(arg0).length;
	    return ret;
	};

	module.exports.__wbg_new_898a68150f225f2e = function() {
	    const ret = new Array();
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_is_function = function(arg0) {
	    const ret = typeof(getObject(arg0)) === 'function';
	    return ret;
	};

	module.exports.__wbg_newnoargs_581967eacc0e2604 = function(arg0, arg1) {
	    const ret = new Function(getStringFromWasm0(arg0, arg1));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_new_56693dbed0c32988 = function() {
	    const ret = new Map();
	    return addHeapObject(ret);
	};

	module.exports.__wbg_next_526fc47e980da008 = function(arg0) {
	    const ret = getObject(arg0).next;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_next_ddb3312ca1c4e32a = function() { return handleError(function (arg0) {
	    const ret = getObject(arg0).next();
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_done_5c1f01fb660d73b5 = function(arg0) {
	    const ret = getObject(arg0).done;
	    return ret;
	};

	module.exports.__wbg_value_1695675138684bd5 = function(arg0) {
	    const ret = getObject(arg0).value;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_iterator_97f0c81209c6c35a = function() {
	    const ret = Symbol.iterator;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_get_97b561fb56f034b5 = function() { return handleError(function (arg0, arg1) {
	    const ret = Reflect.get(getObject(arg0), getObject(arg1));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_call_cb65541d95d71282 = function() { return handleError(function (arg0, arg1) {
	    const ret = getObject(arg0).call(getObject(arg1));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_new_b51585de1b234aff = function() {
	    const ret = new Object();
	    return addHeapObject(ret);
	};

	module.exports.__wbg_self_1ff1d729e9aae938 = function() { return handleError(function () {
	    const ret = self.self;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_window_5f4faef6c12b79ec = function() { return handleError(function () {
	    const ret = window.window;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_globalThis_1d39714405582d3c = function() { return handleError(function () {
	    const ret = globalThis.globalThis;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_global_651f05c6a0944d1c = function() { return handleError(function () {
	    const ret = commonjsGlobal.global;
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_set_502d29070ea18557 = function(arg0, arg1, arg2) {
	    getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
	};

	module.exports.__wbg_from_d7c216d4616bb368 = function(arg0) {
	    const ret = Array.from(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_isArray_4c24b343cb13cfb1 = function(arg0) {
	    const ret = Array.isArray(getObject(arg0));
	    return ret;
	};

	module.exports.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb = function(arg0) {
	    let result;
	    try {
	        result = getObject(arg0) instanceof ArrayBuffer;
	    } catch {
	        result = false;
	    }
	    const ret = result;
	    return ret;
	};

	module.exports.__wbg_instanceof_Error_ab19e20608ea43c7 = function(arg0) {
	    let result;
	    try {
	        result = getObject(arg0) instanceof Error;
	    } catch {
	        result = false;
	    }
	    const ret = result;
	    return ret;
	};

	module.exports.__wbg_new_d258248ed531ff54 = function(arg0, arg1) {
	    const ret = new Error(getStringFromWasm0(arg0, arg1));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_message_48bacc5ea57d74ee = function(arg0) {
	    const ret = getObject(arg0).message;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_name_8f734cbbd6194153 = function(arg0) {
	    const ret = getObject(arg0).name;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_toString_1c056108b87ba68b = function(arg0) {
	    const ret = getObject(arg0).toString();
	    return addHeapObject(ret);
	};

	module.exports.__wbg_call_01734de55d61e11d = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_call_4c92f6aec1e1d6e6 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
	    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_set_bedc3d02d0f05eb0 = function(arg0, arg1, arg2) {
	    const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_isSafeInteger_bb8e18dd21c97288 = function(arg0) {
	    const ret = Number.isSafeInteger(getObject(arg0));
	    return ret;
	};

	module.exports.__wbg_getTime_5e2054f832d82ec9 = function(arg0) {
	    const ret = getObject(arg0).getTime();
	    return ret;
	};

	module.exports.__wbg_new0_c0be7df4b6bd481f = function() {
	    const ret = new Date();
	    return addHeapObject(ret);
	};

	module.exports.__wbg_entries_e51f29c7bba0c054 = function(arg0) {
	    const ret = Object.entries(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_new_43f1b47c28813cbd = function(arg0, arg1) {
	    try {
	        var state0 = {a: arg0, b: arg1};
	        var cb0 = (arg0, arg1) => {
	            const a = state0.a;
	            state0.a = 0;
	            try {
	                return __wbg_adapter_435(a, state0.b, arg0, arg1);
	            } finally {
	                state0.a = a;
	            }
	        };
	        const ret = new Promise(cb0);
	        return addHeapObject(ret);
	    } finally {
	        state0.a = state0.b = 0;
	    }
	};

	module.exports.__wbg_reject_7bd6ac9617013c02 = function(arg0) {
	    const ret = Promise.reject(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_resolve_53698b95aaf7fcf8 = function(arg0) {
	    const ret = Promise.resolve(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_then_f7e06ee3c11698eb = function(arg0, arg1) {
	    const ret = getObject(arg0).then(getObject(arg1));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_then_b2267541e2a73865 = function(arg0, arg1, arg2) {
	    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_buffer_085ec1f694018c4f = function(arg0) {
	    const ret = getObject(arg0).buffer;
	    return addHeapObject(ret);
	};

	module.exports.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa = function(arg0, arg1, arg2) {
	    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_new_8125e318e6245eed = function(arg0) {
	    const ret = new Uint8Array(getObject(arg0));
	    return addHeapObject(ret);
	};

	module.exports.__wbg_set_5cf90238115182c3 = function(arg0, arg1, arg2) {
	    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
	};

	module.exports.__wbg_length_72e2208bbc0efc61 = function(arg0) {
	    const ret = getObject(arg0).length;
	    return ret;
	};

	module.exports.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4 = function(arg0) {
	    let result;
	    try {
	        result = getObject(arg0) instanceof Uint8Array;
	    } catch {
	        result = false;
	    }
	    const ret = result;
	    return ret;
	};

	module.exports.__wbg_newwithlength_e5d69174d6984cd7 = function(arg0) {
	    const ret = new Uint8Array(arg0 >>> 0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_subarray_13db269f57aa838d = function(arg0, arg1, arg2) {
	    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
	    return addHeapObject(ret);
	};

	module.exports.__wbg_stringify_e25465938f3f611f = function() { return handleError(function (arg0) {
	    const ret = JSON.stringify(getObject(arg0));
	    return addHeapObject(ret);
	}, arguments) };

	module.exports.__wbg_has_c5fcd020291e56b8 = function() { return handleError(function (arg0, arg1) {
	    const ret = Reflect.has(getObject(arg0), getObject(arg1));
	    return ret;
	}, arguments) };

	module.exports.__wbg_set_092e06b0f9d71865 = function() { return handleError(function (arg0, arg1, arg2) {
	    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
	    return ret;
	}, arguments) };

	module.exports.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
	    const v = getObject(arg1);
	    const ret = typeof(v) === 'bigint' ? v : undefined;
	    getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
	    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
	};

	module.exports.__wbindgen_debug_string = function(arg0, arg1) {
	    const ret = debugString(getObject(arg1));
	    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	    const len1 = WASM_VECTOR_LEN;
	    getInt32Memory0()[arg0 / 4 + 1] = len1;
	    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};

	module.exports.__wbindgen_throw = function(arg0, arg1) {
	    throw new Error(getStringFromWasm0(arg0, arg1));
	};

	module.exports.__wbindgen_memory = function() {
	    const ret = wasm.memory;
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper2970 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 401, __wbg_adapter_48);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper3658 = function(arg0, arg1, arg2) {
	    const ret = makeClosure(arg0, arg1, 649, __wbg_adapter_51);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper3660 = function(arg0, arg1, arg2) {
	    const ret = makeClosure(arg0, arg1, 649, __wbg_adapter_54);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper5170 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 905, __wbg_adapter_57);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper6212 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 1293, __wbg_adapter_60);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper8038 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 1869, __wbg_adapter_63);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper8040 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 1869, __wbg_adapter_63);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper8042 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 1869, __wbg_adapter_63);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper8044 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 1869, __wbg_adapter_70);
	    return addHeapObject(ret);
	};

	module.exports.__wbindgen_closure_wrapper10407 = function(arg0, arg1, arg2) {
	    const ret = makeMutClosure(arg0, arg1, 2308, __wbg_adapter_73);
	    return addHeapObject(ret);
	};

	const path = require$$1.join(__dirname, 'nym_client_wasm_bg.wasm');
	const bytes = require$$2.readFileSync(path);

	const wasmModule = new WebAssembly.Module(bytes);
	const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
	wasm = wasmInstance.exports;
	module.exports.__wasm = wasm; 
} (nym_client_wasm));

var nym_client_wasmExports = nym_client_wasm.exports;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function nodeEndpoint(nep) {
    var listeners = new WeakMap();
    return {
        postMessage: nep.postMessage.bind(nep),
        addEventListener: function (_, eh) {
            var l = function (data) {
                if ('handleEvent' in eh) {
                    eh.handleEvent({ data: data });
                }
                else {
                    eh({ data: data });
                }
            };
            nep.on('message', l);
            listeners.set(eh, l);
        },
        removeEventListener: function (_, eh) {
            var l = listeners.get(eh);
            if (!l) {
                return;
            }
            nep.off('message', l);
            listeners.delete(eh);
        },
        start: nep.start && nep.start.bind(nep),
    };
}

/**
 * Enum representing various event kinds.
 * @enum
 */
var EventKinds;
(function (EventKinds) {
    /**
     * The event emitted when the nodetester is ready to be used.
     */
    EventKinds["Loaded"] = "Loaded";
    /**
     * The event emitted when connection to the gateway is established.
     */
    EventKinds["Connected"] = "Connected";
    /**
     * The event for when a message is received and interpreted as a string.
     */
    EventKinds["StringMessageReceived"] = "StringMessageReceived";
    /**
     * The event for when a binary message is received. BinaryMessage is a type of message that contains additional metadata, such as MIME type and some headers, along with the actual payload data.
     */
    EventKinds["BinaryMessageReceived"] = "BinaryMessageReceived";
    /**
     * The event for when a raw message is received. RawMessage represents the bytes that are received directly from the mixnet with no further parsing or interpretation done on them.
     */
    EventKinds["RawMessageReceived"] = "RawMessageReceived";
})(EventKinds || (EventKinds = {}));
/**
 * Some common mime types, however, you can always just specify the mime-type as a string
 */
var MimeTypes;
(function (MimeTypes) {
    MimeTypes["ApplicationOctetStream"] = "application/octet-stream";
    MimeTypes["TextPlain"] = "text/plain";
    MimeTypes["ApplicationJson"] = "application/json";
})(MimeTypes || (MimeTypes = {}));

// eslint-disable-next-line no-console
console.log('[Nym WASM client] Starting Nym WASM web worker...');
/**
 * Helper method to send typed messages.
 * @param event   The strongly typed message to send back to the calling thread.
 * see https://nodejs.org/api/worker_threads.html#workerparentport
 */
var postMessageWithType = function (event) { return worker_threads.parentPort === null || worker_threads.parentPort === void 0 ? void 0 : worker_threads.parentPort.postMessage(event); };
/**
 * This class holds the state of the Nym WASM client and provides any interop needed.
 */
var ClientWrapper = /** @class */ (function () {
    function ClientWrapper() {
        var _this = this;
        this.client = null;
        this.builder = null;
        this.mimeTypes = [MimeTypes.TextPlain, MimeTypes.ApplicationJson];
        /**
         * Creates the WASM client and initialises it.
         */
        this.init = function (config, onRawPayloadHandler) {
            var onMessageHandler = function (message) {
                try {
                    if (onRawPayloadHandler) {
                        onRawPayloadHandler(message);
                    }
                }
                catch (e) {
                    // eslint-disable-next-line no-console
                    console.error('Unhandled exception in `ClientWrapper.onRawPayloadHandler`: ', e);
                }
            };
            _this.builder = new nym_client_wasmExports.NymClientBuilder(config, onMessageHandler);
        };
        /**
         * Sets the mime-types that will be parsed for UTF-8 string content.
         *
         * @param mimeTypes An array of mime-types to treat as having string content.
         */
        this.setTextMimeTypes = function (mimeTypes) {
            _this.mimeTypes = mimeTypes;
        };
        /**
         * Gest the mime-types that are considered as string and will be automatically converted to byte arrays.
         */
        this.getTextMimeTypes = function () { return _this.mimeTypes; };
        /**
         * Returns the address of this client.
         */
        this.selfAddress = function () {
            if (!_this.client) {
                // eslint-disable-next-line no-console
                console.error('Client has not been initialised. Please call `init` first.');
                return undefined;
            }
            return _this.client.self_address();
        };
        /**
         * Connects to the gateway and starts the client sending traffic.
         */
        this.start = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.builder) {
                            // eslint-disable-next-line no-console
                            console.error('Client config has not been initialised. Please call `init` first.');
                            return [2 /*return*/];
                        }
                        // this is current limitation of wasm in rust - for async methods you can't take self by reference...
                        // I'm trying to figure out if I can somehow hack my way around it, but for time being you have to re-assign
                        // the object (it's the same one)
                        _a = this;
                        return [4 /*yield*/, this.builder.start_client()];
                    case 1:
                        // this is current limitation of wasm in rust - for async methods you can't take self by reference...
                        // I'm trying to figure out if I can somehow hack my way around it, but for time being you have to re-assign
                        // the object (it's the same one)
                        _a.client = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Stops the client and cleans up.
         */
        this.stop = function () {
            if (!_this.client) {
                // eslint-disable-next-line no-console
                console.error('Client has not been initialised. Please call `init` first.');
                return;
            }
            _this.client.free();
            _this.client = null;
        };
        this.send = function (_a) {
            var payload = _a.payload, recipient = _a.recipient, _b = _a.replySurbs, replySurbs = _b === void 0 ? 0 : _b;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this.client) {
                                // eslint-disable-next-line no-console
                                console.error('Client has not been initialised. Please call `init` first.');
                                return [2 /*return*/];
                            }
                            // TODO: currently we don't do anything with the result, it needs some typing and exposed back on the main thread
                            return [4 /*yield*/, this.client.send_anonymous_message(payload, recipient, replySurbs)];
                        case 1:
                            // TODO: currently we don't do anything with the result, it needs some typing and exposed back on the main thread
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
    }
    return ClientWrapper;
}());
// this wrapper handles any state that the wasm-pack interop needs, e.g. holding an instance of the instantiated WASM code
var wrapper = new ClientWrapper();
var startHandler = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var address;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // create the client, passing handlers for events
                wrapper.init(new nym_client_wasmExports.ClientConfig(config), function (message) { return __awaiter(void 0, void 0, void 0, function () {
                    var decodedPayload, payload, headers, mimeType, stringMessage;
                    return __generator(this, function (_a) {
                        // fire an event with the raw message
                        postMessageWithType({
                            kind: EventKinds.RawMessageReceived,
                            args: { payload: message },
                        });
                        try {
                            decodedPayload = nym_client_wasmExports.decode_payload(message);
                            payload = decodedPayload.payload, headers = decodedPayload.headers;
                            mimeType = decodedPayload.mimeType;
                            if (wrapper.getTextMimeTypes().includes(mimeType)) {
                                stringMessage = nym_client_wasmExports.parse_utf8_string(payload);
                                // the payload is a string type (in the options at creation time, string mime-types are set, or fall back
                                // to defaults, such as `text/plain`, `application/json`, etc)
                                postMessageWithType({
                                    kind: EventKinds.StringMessageReceived,
                                    args: { mimeType: mimeType, payload: stringMessage, payloadRaw: payload, headers: headers },
                                });
                                return [2 /*return*/];
                            }
                            // the payload is a binary type
                            postMessageWithType({
                                kind: EventKinds.BinaryMessageReceived,
                                args: { mimeType: mimeType, payload: payload, headers: headers },
                            });
                        }
                        catch (e) {
                            // eslint-disable-next-line no-console
                            console.error('Failed to parse binary message', e);
                        }
                        return [2 /*return*/];
                    });
                }); });
                // start the client sending traffic
                return [4 /*yield*/, wrapper.start()];
            case 1:
                // start the client sending traffic
                _a.sent();
                address = wrapper.selfAddress();
                postMessageWithType({ kind: EventKinds.Connected, args: { address: address } });
                return [2 /*return*/];
        }
    });
}); };
// implement the public logic of this web worker (message exchange between the worker and caller is done by https://www.npmjs.com/package/comlink)
var webWorker = {
    start: function (config) {
        // eslint-disable-next-line no-console
        startHandler(config).catch(function (e) { return console.error('[Nym WASM client] Failed to start', e); });
    },
    stop: function () {
        wrapper.stop();
    },
    selfAddress: function () {
        return wrapper.selfAddress();
    },
    setTextMimeTypes: function (mimeTypes) {
        wrapper.setTextMimeTypes(mimeTypes);
    },
    getTextMimeTypes: function () {
        return wrapper.getTextMimeTypes();
    },
    send: function (args) {
        var recipient = args.recipient, replySurbs = args.replySurbs, _a = args.payload, mimeType = _a.mimeType, headers = _a.headers;
        var payloadBytes = new Uint8Array();
        if (mimeType && wrapper.getTextMimeTypes().includes(mimeType) && typeof args.payload.message === 'string') {
            payloadBytes = nym_client_wasmExports.utf8_string_to_byte_array(args.payload.message);
        }
        else if (typeof args.payload.message !== 'string') {
            payloadBytes = args.payload.message;
        }
        else {
            // eslint-disable-next-line no-console
            console.error("[Nym WASM client] Payload is a string. It should be a UintArray, or the mime-type should be set with `setTextMimeTypes` or in the options for `init({ autoConvertStringMimeTypes: ['text/plain', 'application/json'] })` for auto-conversion");
            return;
        }
        var payload = nym_client_wasmExports.encode_payload_with_headers(mimeType || MimeTypes.ApplicationOctetStream, payloadBytes, headers);
        wrapper
            .send({ payload: payload, recipient: recipient, replySurbs: replySurbs })
            // eslint-disable-next-line no-console
            .catch(function (e) { return console.error('[Nym WASM client] Failed to send message', e); });
    },
    rawSend: function (args) {
        var recipient = args.recipient, payload = args.payload, replySurbs = args.replySurbs;
        wrapper
            .send({ payload: payload, replySurbs: replySurbs, recipient: recipient })
            // eslint-disable-next-line no-console
            .catch(function (e) { return console.error('[Nym WASM client] Failed to send message', e); });
    },
};
// start comlink listening for messages and handle them above, if we are on a worker thread.
if (worker_threads.parentPort) {
    expose(webWorker, nodeEndpoint(worker_threads.parentPort));
}
// notify any listeners that the web worker has loaded - HOWEVER, the client has not been created and connected,
// listen for EventKinds.Connected before sending messages
postMessageWithType({ kind: EventKinds.Loaded, args: { loaded: true } });
