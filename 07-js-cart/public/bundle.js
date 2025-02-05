/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   checkout: () => (/* binding */ checkout),
/* harmony export */   getCartTotal: () => (/* binding */ getCartTotal),
/* harmony export */   getTotalItems: () => (/* binding */ getTotalItems),
/* harmony export */   products: () => (/* binding */ products),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   toggleCart: () => (/* binding */ toggleCart),
/* harmony export */   updateQuantity: () => (/* binding */ updateQuantity)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var products = [{
  id: 'jorts',
  name: 'Jorts',
  price: 0.99,
  image: 'http://placehold.co/150x150?text=Jorts'
}, {
  id: 'jean',
  name: 'Jean',
  price: 3.14,
  image: 'http://placehold.co/150x150?text=Jean'
}, {
  id: 'nyancat',
  name: 'Nyancat',
  price: 2.73,
  image: 'http://placehold.co/150x150?text=Nyancat'
}];
var state = {
  cart: new Map(),
  isCartVisible: false
};
function addToCart(productId) {
  var currentQty = state.cart.get(productId) || 0;
  state.cart.set(productId, currentQty + 1);
}
function updateQuantity(productId, quantity) {
  var newQty = parseInt(quantity, 10);
  if (newQty > 0) {
    state.cart.set(productId, newQty);
  } else {
    state.cart["delete"](productId);
  }
}
function checkout() {
  state.cart.clear();
  state.isCartVisible = false;
}
function toggleCart() {
  state.isCartVisible = !state.isCartVisible;
}
function getTotalItems() {
  var total = 0;
  var _iterator = _createForOfIteratorHelper(state.cart.values()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var qty = _step.value;
      total += qty;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return total;
}
function getCartTotal() {
  var total = 0;
  var _iterator2 = _createForOfIteratorHelper(state.cart.entries()),
    _step2;
  try {
    var _loop = function _loop() {
      var _step2$value = _slicedToArray(_step2.value, 2),
        productId = _step2$value[0],
        qty = _step2$value[1];
      var product = products.find(function (p) {
        return p.id === productId;
      });
      total += product.price * qty;
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return total.toFixed(2);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var app = document.querySelector('#app');
function renderProduct(product) {
  return "\n        <div class=\"product-card\">\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" class=\"product-image\">\n            <h3 class=\"product-name\">").concat(product.name, "</h3>\n            <p class=\"product-price\">$").concat(product.price.toFixed(2), "</p>\n            <button type=\"button\" class=\"add-to-cart\" data-product-id=\"").concat(product.id, "\">\n                Add to Cart\n            </button>\n        </div>\n    ");
}
function renderCartItem(product, quantity) {
  var total = (product.price * quantity).toFixed(2);
  return "\n        <div class=\"cart-item\">\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" class=\"cart-item-image\">\n            <div class=\"cart-item-details\">\n                <h4>").concat(product.name, "</h4>\n                <p>$").concat(product.price.toFixed(2), " each</p>\n                <label>\n                    Quantity: \n                    <input \n                        type=\"number\" \n                        class=\"quantity-input\" \n                        data-product-id=\"").concat(product.id, "\" \n                        value=\"").concat(quantity, "\" \n                        min=\"0\"\n                    >\n                </label>\n                <p>Total: $").concat(total, "</p>\n            </div>\n        </div>\n    ");
}
function render() {
  var productsHtml = "\n        <div class=\"products-grid\">\n            ".concat(_model_js__WEBPACK_IMPORTED_MODULE_0__.products.map(renderProduct).join(''), "\n        </div>\n    ");
  var cartButtonHtml = !_model_js__WEBPACK_IMPORTED_MODULE_0__.state.isCartVisible ? "\n        <button type=\"button\" class=\"view-cart\" id=\"view-cart\">\n            View Cart ".concat((0,_model_js__WEBPACK_IMPORTED_MODULE_0__.getTotalItems)() > 0 ? "(".concat((0,_model_js__WEBPACK_IMPORTED_MODULE_0__.getTotalItems)(), ")") : '', "\n        </button>\n    ") : '';
  var cartHtml = _model_js__WEBPACK_IMPORTED_MODULE_0__.state.isCartVisible ? "\n        <div class=\"cart-content\">\n            <h2>Shopping Cart</h2>\n            ".concat(_model_js__WEBPACK_IMPORTED_MODULE_0__.state.cart.size === 0 ? '<p>Nothing in the cart</p>' : Array.from(_model_js__WEBPACK_IMPORTED_MODULE_0__.state.cart.entries()).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      productId = _ref2[0],
      quantity = _ref2[1];
    var product = _model_js__WEBPACK_IMPORTED_MODULE_0__.products.find(function (p) {
      return p.id === productId;
    });
    return renderCartItem(product, quantity);
  }).join(''), "\n            ").concat(_model_js__WEBPACK_IMPORTED_MODULE_0__.state.cart.size > 0 ? "\n                <div class=\"cart-total\">\n                    <p>Total: $".concat((0,_model_js__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(), "</p>\n                </div>\n            ") : '', "\n            <div class=\"cart-buttons\">\n                <button type=\"button\" class=\"hide-cart\">Hide Cart</button>\n                <button type=\"button\" class=\"checkout\">Checkout</button>\n            </div>\n        </div>\n    ") : '';
  app.innerHTML = "\n        ".concat(productsHtml, "\n        ").concat(cartButtonHtml, "\n        ").concat(cartHtml, "\n    ");
}
app.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var productId = e.target.dataset.productId;
    (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.addToCart)(productId);
    render();
  } else if (e.target.classList.contains('view-cart')) {
    (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.toggleCart)();
    render();
  } else if (e.target.classList.contains('hide-cart')) {
    (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.toggleCart)();
    render();
  } else if (e.target.classList.contains('checkout')) {
    (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.checkout)();
    render();
  }
});
app.addEventListener('change', function (e) {
  if (e.target.classList.contains('quantity-input')) {
    var productId = e.target.dataset.productId;
    (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.updateQuantity)(productId, e.target.value);
    render();
  }
});
render();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map