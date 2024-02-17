/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/ComposerPage.js":
/*!**********************************************!*\
  !*** ./src/forum/components/ComposerPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposerPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/Page */ "flarum/forum/components/Page");
/* harmony import */ var flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);





var ComposerPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposerPage, _Page);
  function ComposerPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = ComposerPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
      setTimeout(function () {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default()));
      }, 500);
      return m.route.set('/');
    }
    var params = m.route.param();
    m.route.set('/all');
    setTimeout(function () {
      var composerProps = {
        user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user
      };
      if (params.content) {
        composerProps.originalContent = params.content;
      }
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.load((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default()), composerProps);
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.show();
      if (params.title) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.title(params.title);
      }
      if (params.primary_tag) {
        var tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getBy('tags', 'slug', params.primary_tag);
        if (tag) {
          var parent = tag.parent();
          (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).fields.tags = parent ? [parent, tag] : [tag];
        }
      }
    }, 0);
  };
  _proto.view = function view() {
    return m('div');
  };
  return ComposerPage;
}((flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/ForgotPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/ForgotPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedirectToHomeAndOpenModalPage */ "./src/forum/components/RedirectToHomeAndOpenModalPage.js");
/* harmony import */ var flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ForgotPasswordModal */ "flarum/forum/components/ForgotPasswordModal");
/* harmony import */ var flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__);




var ForgotPage = /*#__PURE__*/function (_RedirectToHomeAndOpe) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForgotPage, _RedirectToHomeAndOpe);
  function ForgotPage() {
    return _RedirectToHomeAndOpe.apply(this, arguments) || this;
  }
  var _proto = ForgotPage.prototype;
  _proto.createModal = function createModal() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
      return (flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default());
    }
  };
  return ForgotPage;
}(_RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/forum/components/LoginPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/LoginPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedirectToHomeAndOpenModalPage */ "./src/forum/components/RedirectToHomeAndOpenModalPage.js");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);




var LoginPage = /*#__PURE__*/function (_RedirectToHomeAndOpe) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LoginPage, _RedirectToHomeAndOpe);
  function LoginPage() {
    return _RedirectToHomeAndOpe.apply(this, arguments) || this;
  }
  var _proto = LoginPage.prototype;
  _proto.createModal = function createModal() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
      return (flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default());
    }
  };
  return LoginPage;
}(_RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/forum/components/RedirectToHomeAndOpenModalPage.js":
/*!****************************************************************!*\
  !*** ./src/forum/components/RedirectToHomeAndOpenModalPage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RedirectToHomeAndOpenModalPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);



var RedirectToHomeAndOpenModalPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RedirectToHomeAndOpenModalPage, _Page);
  function RedirectToHomeAndOpenModalPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = RedirectToHomeAndOpenModalPage.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Page.prototype.oninit.call(this, vnode);
    m.route.set('/');
    setTimeout(function () {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_this.createModal());
    }, 1500);
  };
  _proto.createModal = function createModal() {
    return null;
  };
  _proto.view = function view() {
    return m("div", null);
  };
  return RedirectToHomeAndOpenModalPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/SignupPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/SignupPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedirectToHomeAndOpenModalPage */ "./src/forum/components/RedirectToHomeAndOpenModalPage.js");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);




var SignupPage = /*#__PURE__*/function (_RedirectToHomeAndOpe) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SignupPage, _RedirectToHomeAndOpe);
  function SignupPage() {
    return _RedirectToHomeAndOpe.apply(this, arguments) || this;
  }
  var _proto = SignupPage.prototype;
  _proto.createModal = function createModal() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
      return (flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default());
    }
  };
  return SignupPage;
}(_RedirectToHomeAndOpenModalPage__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/forum/extend.ts":
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LoginPage */ "./src/forum/components/LoginPage.js");
/* harmony import */ var _components_SignupPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SignupPage */ "./src/forum/components/SignupPage.js");
/* harmony import */ var _components_ForgotPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ForgotPage */ "./src/forum/components/ForgotPage.js");
/* harmony import */ var _components_ComposerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ComposerPage */ "./src/forum/components/ComposerPage.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Routes)() //
.add('directLinksLogin', '/login', _components_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]).add('directLinksSignup', '/signup', _components_SignupPage__WEBPACK_IMPORTED_MODULE_2__["default"]).add('directLinksForgot', '/forgot', _components_ForgotPage__WEBPACK_IMPORTED_MODULE_3__["default"]).add('directLinksComposer', '/composer', _components_ComposerPage__WEBPACK_IMPORTED_MODULE_4__["default"])]);

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");


flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof/direct-links', function () {
  // Nothing required here
});

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/ForgotPasswordModal":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ForgotPasswordModal']" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ForgotPasswordModal'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/Page":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Page']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Page'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map