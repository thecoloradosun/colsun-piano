/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/set-tokens.js":
/*!***********************************!*\
  !*** ./src/helpers/set-tokens.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Get the root.
 */
const root = document.querySelector(':root');
/**
 * Set our Piano class tokens.
 *
 * @param {string} resourceId Resource ID from Piano.
 */

const setTokensByResourceId = resourceId => {
  switch (resourceId) {
    /**
     * Anonymous, not logged in.
     */
    default:
    case '':
      setMembersTokens(false);
      setAnonymousTokens(true);
      break;

    /**
     * Logged in.
     */

    case 'FreeTier':
      setMembersTokens(false);
      setAnonymousTokens(false);
      break;

    /**
     * Basic.
     */

    case 'TierBasic':
      setBasicTokens(true);
      setMembersTokens(true);
      setAnonymousTokens(false);
      break;

    /**
     * Basic plus.
     */

    case 'TierBasicPlus':
      setBasicPlusTokens(true);
      setMembersTokens(true);
      setAnonymousTokens(false);
      break;

    /**
     * Premium.
     */

    case 'TierPremium':
      setPremiumTokens(true);
      setMembersTokens(true);
      setAnonymousTokens(false);
      break;

    /**
     * Champion.
     */

    case 'TierChampion':
      setChampionTokens(true);
      setMembersTokens(true);
      setAnonymousTokens(false);
      break;
  }
};
/**
 * Set the tokens for a given key.
 *
 * @param {string} key  Tier key.
 * @param {bool}   show Toggle class state.
 */


const setTokens = (key, show) => {
  if (show) {
    root.style.setProperty(`--colsun--show-for-${key}`, 'inherit');
    root.style.setProperty(`--colsun--hide-for-${key}`, 'none');
  } else {
    root.style.setProperty(`--colsun--show-for-${key}`, 'none');
    root.style.setProperty(`--colsun--hide-for-${key}`, 'inherit');
  }
};

const setMembersTokens = show => {
  setTokens('members', show);
};

const setAnonymousTokens = show => {
  setTokens('anonymous', show);
};

const setBasicTokens = show => {
  setTokens('basic-members', show);
};

const setBasicPlusTokens = show => {
  setTokens('basic-plus-members', show);
};

const setPremiumTokens = show => {
  setTokens('premium-members', show);
};

const setChampionTokens = show => {
  setTokens('champion-members', show);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTokensByResourceId);

/***/ }),

/***/ "./src/classes.scss":
/*!**************************!*\
  !*** ./src/classes.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _helpers_set_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/set-tokens */ "./src/helpers/set-tokens.js");
/* harmony import */ var _classes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.scss */ "./src/classes.scss");

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Get query arg value.
 *
 * @param {string}      key          Key.
 * @param {string|null} defaultValue Optional. Default value for when key does
 *                                   not exist.
 * @return {string|null}
 */

const getQueryParam = function (key) {
  var _queryArgs$key;

  let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const queryArgs = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
  return (_queryArgs$key = queryArgs[key]) !== null && _queryArgs$key !== void 0 ? _queryArgs$key : defaultValue;
};
/**
 * When the page loads, determine our resourceId, and initalize our class
 * tokens.
 */


const initClassTokens = () => {
  // Get information about the user's access to resources.
  window.tp.api.callApi('/access/list', {}, function (response) {
    var _response$data$0$reso, _response$data, _response$data$, _response$data$$resou;

    // Get the `rid` from our query arg (for testing), or our logged in RID.
    const resourceId = getQueryParam('rid', (_response$data$0$reso = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$ = _response$data[0]) === null || _response$data$ === void 0 ? void 0 : (_response$data$$resou = _response$data$.resource) === null || _response$data$$resou === void 0 ? void 0 : _response$data$$resou.rid) !== null && _response$data$0$reso !== void 0 ? _response$data$0$reso : ''); // Set our tokens accordingly.

    (0,_helpers_set_tokens__WEBPACK_IMPORTED_MODULE_0__["default"])(resourceId);
  });
};
/**
 * Self invoking function.
 */


(function () {
  window.tp = window.tp || [];
  window.tp.push(['init', initClassTokens]);
})();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map