/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('hello world');

const testing = () => {
  console.log('If you see this, then we\'re hooked into TP', window.tp);
};

tp = window.tp || [];

(function () {
  console.log('callback fired');
  tp.push(['init', testing]);
  console.log(tp); // tp.push( [ 'init', piano_handle_login_logout_buttons ] );
  // tp.push( [ 'init', piano_add_subscriber_tag ] );
  // tp.push( [ 'init', piano_password_reset ] );
})();
/******/ })()
;
//# sourceMappingURL=index.js.map