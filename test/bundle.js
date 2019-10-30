/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var domik_namespaceObject = {};
__webpack_require__.r(domik_namespaceObject);
__webpack_require__.d(domik_namespaceObject, "bake", function() { return bake; });
__webpack_require__.d(domik_namespaceObject, "addClass", function() { return addClass; });
__webpack_require__.d(domik_namespaceObject, "removeClass", function() { return removeClass; });
__webpack_require__.d(domik_namespaceObject, "html", function() { return html; });
__webpack_require__.d(domik_namespaceObject, "text", function() { return domik_text; });
__webpack_require__.d(domik_namespaceObject, "val", function() { return val; });
__webpack_require__.d(domik_namespaceObject, "appendChildren", function() { return appendChildren; });
__webpack_require__.d(domik_namespaceObject, "$", function() { return $; });
__webpack_require__.d(domik_namespaceObject, "$$", function() { return $$; });
__webpack_require__.d(domik_namespaceObject, "displayNone", function() { return displayNone; });
__webpack_require__.d(domik_namespaceObject, "hide", function() { return hide; });
__webpack_require__.d(domik_namespaceObject, "displayBlock", function() { return displayBlock; });
__webpack_require__.d(domik_namespaceObject, "show", function() { return show; });
__webpack_require__.d(domik_namespaceObject, "displayFlex", function() { return displayFlex; });
__webpack_require__.d(domik_namespaceObject, "flex", function() { return flex; });
__webpack_require__.d(domik_namespaceObject, "generateRandomId", function() { return generateRandomId; });

// CONCATENATED MODULE: ./src/domik.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *
 *
 * Bakes DOM element as per request in data
 *
 * @param name - name of the element such as div, button etc
 *
 * @param recipe
    * recipe is a JSON object with following properties:
 *  * id - string id
 *  * classes - list of classes. Array or single entry
 *  * attributes - object of attributes key vaule pairs
 *  * html - inner html
 *  * text - inner text
 *  * val  - value
 *  * style - css string inline style for the element
 *  * children - single DOM element or array of DOM elements that will be appended as children
 *  * listeners - JSON object with keys - events types, vaules - event handlers
 */
function bake(name, recipe) {
  var el = document.createElement(name);
  if (!recipe) return el;

  if (recipe.classes) {
    if (_typeof(recipe.classes) === "object") {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = recipe.classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;
          el.classList.add(c);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else if (typeof recipe.classes === "string") {
      el.classList.add(recipe.classes);
    } else {
      throw new Error("Bake parameters invalid");
    }
  }

  if (recipe.listeners) {
    for (var _i = 0, _Object$keys = Object.keys(recipe.listeners); _i < _Object$keys.length; _i++) {
      var ev = _Object$keys[_i];
      el.addEventListener(ev, recipe.listeners[ev]);
    }
  }

  if (recipe.id) {
    el.setAttribute("id", recipe.id);
  }

  if (recipe.attributes) {
    for (var _i2 = 0, _Object$keys2 = Object.keys(recipe.attributes); _i2 < _Object$keys2.length; _i2++) {
      var key = _Object$keys2[_i2];
      el.setAttribute(key, recipe.attributes[key]);
    }
  }

  if (recipe.style) {
    el.style = recipe.style;
  }

  if (recipe.html) el.innerHTML = recipe.html;
  if (recipe.text) el.innerText = recipe.text;
  if (recipe.val) el.value = recipe.val;

  if (recipe.children) {
    appendChildren(el, recipe.children);
  }

  return el;
} // ---------------------------------------------------------------------------------------------------------------------------
// CSS classes wrapers

function addClass(element, _class) {
  var node = verifyGetNode(element);
  node.classList.add(_class);
}
function removeClass(element, _class) {
  var node = verifyGetNode(element);
  node.classList.remove(_class);
} //end//////////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------------------------------------------------
// Setting text and html

function html(element, html) {
  var node = verifyGetNode(element);
  node.innerHTML = html;
}
function domik_text(element, text) {
  var node = verifyGetNode(element);
  node.innerText = text;
} //end//////////////////////////////////////////////////////////////////////////

/**
 * Less verbose wrapper for setting value;
 *
 */

function val(element, val) {
  var node = verifyGetNode(element);
  node.value = val;
}
/**
 * Given parent node appends one or multiple children
 * @param parent DOM node
 * @param children can be array of nodes or a single node
 */

function appendChildren(parent, children) {
  if (children instanceof Array) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var child = _step2.value;
        parent.appendChild(child);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  } else {
    parent.appendChild(children);
  }
}
/**
 * Less verbose wrapper for document.querySelector
 */

function $(element) {
  return verifyGetNode(element);
}
/**
 * Less verbose wrapper for document.querySelectorAll
 */

function $$(selector) {
  return document.querySelectorAll(selector);
}
function displayNone(node) {
  try {
    displayElement(node, "none");
  } catch (err) {
    console.log("Display none fail: " + err);
  }
} // Alias in jquery style for display: hide

function hide(node) {
  try {
    displayElement(node, "none");
  } catch (err) {
    console.log("Display none fail: " + err);
  }
}
function displayBlock(node) {
  displayElement(node, "block");
} // Alias in jquery style for display: block

function show(node) {
  displayElement(node, "block");
}
function displayFlex(node) {
  displayElement(node, "flex");
} // Alias in jquery style for display: flex

function flex(node) {
  displayElement(node, "flex");
}
/**
 * Internal. Sets node display property
 *
 */

function displayElement(element, display) {
  var node = verifyGetNode(element);
  node.style.display = display;
}

function generateRandomId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var alphabet = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = [];

  for (var i = 0; i < length; ++i) {
    symbols.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  return "".concat(prefix.length > 0 ? prefix + "-" : "").concat(symbols.join("")).concat(postfix.length > 0 ? "-" + postfix : "");
}
/**
 * Helper function. Given either DOM element or selector
 * makes sure it exists and valid, and returns it.
 */

function verifyGetNode(element) {
  var node = element;

  if (typeof node === "string") {
    node = document.querySelector(element);
  }

  if (!node) {
    throw "Element ".concat(element, " is undefined");
  } else if (!node instanceof Element) {
    throw new Error("Type of element is invalid");
  }

  return node;
}
// CONCATENATED MODULE: ./test/test.js

window.util = domik_namespaceObject;
document.addEventListener("DOMContentLoaded", function (event) {
  var container = $("#container");
  var mySpan = bake("span", {
    text: "I am simple span"
  });
  var wrapper = bake("div", {
    classes: "wrapper",
    style: "width: 100px; display: flex;",
    listeners: {
      "click": function click() {
        alert("Hello world");
      }
    },
    children: [mySpan, bake("div", {
      style: "border: 1px solid grey; border-radius: 5px",
      children: bake("h1", {
        html: "Hello World",
        style: "color: green",
        listeners: {
          "click": function click() {
            alert("Hello hello!");
          }
        }
      })
    })]
  });
  appendChildren(container, [wrapper, mySpan]);
});

/***/ })
/******/ ]);