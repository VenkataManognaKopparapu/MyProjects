/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSession: () => (/* binding */ checkSession),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   getWord: () => (/* binding */ getWord),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   updateWord: () => (/* binding */ updateWord)
/* harmony export */ });
function checkSession() {
  return fetch('/api/session')["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        error: 'auth-missing'
      });
    }
    return response.json();
  });
}
function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function logout() {
  return fetch('/api/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  });
}
function getWord() {
  return fetch('/api/word')["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        error: 'auth-missing'
      });
    }
    return response.json();
  });
}
function updateWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setWord: () => (/* binding */ setWord)
/* harmony export */ });
var state = {
  username: '',
  word: '',
  error: ''
};
function login(username) {
  state.username = username;
  state.error = '';
}
function logout() {
  state.username = '';
  state.word = '';
  state.error = '';
}
function setWord(word) {
  state.word = word;
}
function setError(error) {
  state.error = error;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

var MESSAGES = {
  'network-error': 'There was a problem connecting to the network, please try again',
  'auth-missing': 'Your session has expired, please login again',
  'required-username': 'Please enter a valid username',
  'auth-insufficient': 'Invalid username, please enter valid username',
  'invalid-username': 'Username can only contain letters, numbers, and underscores',
  "default": 'Something went wrong, please try again'
};
function render() {
  var app = document.querySelector('#app');
  if (!_state__WEBPACK_IMPORTED_MODULE_0__["default"].username) {
    app.innerHTML = renderLogin();
    return;
  }
  app.innerHTML = renderWord();
}
function renderLogin() {
  return "\n    <div class=\"login\">\n      <form class=\"login-form\">\n        <label>Username: <input name=\"username\"></label> \n        <button type=\"submit\">Login</button>\n      </form>\n      ".concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].error ? "<div class=\"error\">".concat(MESSAGES[_state__WEBPACK_IMPORTED_MODULE_0__["default"].error] || MESSAGES["default"], "</div>") : '', "\n    </div>\n  ");
}
function renderWord() {
  return "\n    <div class=\"word-panel\">\n      <p class=\"welcome-message\">Welcome <span class=\"username-highlight\">".concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].username, "</span></p>\n      <div class=\"word-display\">Current word: ").concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].word, "</div>\n      <form class=\"word-form\">\n        <input name=\"word\" \n        placeholder=\"Enter new word\">\n        <button type=\"submit\">Update Word</button>\n      </form>\n      <button class=\"logout\">Logout</button>\n      ").concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].error ? "<div class=\"error\">".concat(MESSAGES[_state__WEBPACK_IMPORTED_MODULE_0__["default"].error] || MESSAGES["default"], "</div>") : '', "\n    </div>\n  ");
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");



(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkSession)().then(function (_ref) {
  var username = _ref.username;
  (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
  return (0,_services__WEBPACK_IMPORTED_MODULE_0__.getWord)();
}).then(function (_ref2) {
  var storedWord = _ref2.storedWord;
  (0,_state__WEBPACK_IMPORTED_MODULE_1__.setWord)(storedWord);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
})["catch"](function () {
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
});
document.addEventListener('submit', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('login-form')) {
    var username = e.target.elements.username.value.trim();
    if (!username) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('required-username');
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
      return;
    }
    var validUsernameRegex = /^[A-Za-z0-9_]+$/;
    if (!validUsernameRegex.test(username)) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('invalid-username');
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
      return;
    }
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (_ref3) {
      var username = _ref3.username;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
      return (0,_services__WEBPACK_IMPORTED_MODULE_0__.getWord)();
    }).then(function (_ref4) {
      var storedWord = _ref4.storedWord;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setWord)(storedWord);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(err.error);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    });
  }
  if (e.target.classList.contains('word-form')) {
    var word = e.target.elements.word.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.updateWord)(word).then(function (_ref5) {
      var storedWord = _ref5.storedWord;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setWord)(storedWord);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(err.error);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    });
  }
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('logout')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.logout)().then(function () {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(err.error);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.render)();
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map