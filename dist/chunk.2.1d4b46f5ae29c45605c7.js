(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/page2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/page2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");\n\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  asyncData: function asyncData(_ref) {\n    var store = _ref.store,\n        route = _ref.route;\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        store.commit(\'SET_ASYNC_DATA\', \'asyncData in page2!\');\n        resolve();\n      }, 200);\n    });\n  },\n  computed: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])([\'asyncData\']))\n});\n\n//# sourceURL=webpack:///./src/pages/page2.vue?./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/page2.vue?vue&type=template&id=369fbe2f&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/page2.vue?vue&type=template&id=369fbe2f& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", [\n    _c("h1", [_vm._v("page2")]),\n    _vm._v(" "),\n    _c("div", [_vm._v(_vm._s(_vm.asyncData))])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/page2.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options')},"./src/pages/page2.vue":
/*!*****************************!*\
  !*** ./src/pages/page2.vue ***!
  \*****************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2.vue?vue&type=template&id=369fbe2f& */ "./src/pages/page2.vue?vue&type=template&id=369fbe2f&");\n/* harmony import */ var _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.vue?vue&type=script&lang=js& */ "./src/pages/page2.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/pages/page2.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/page2.vue?')},"./src/pages/page2.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/pages/page2.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./page2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/page2.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/pages/page2.vue?')},"./src/pages/page2.vue?vue&type=template&id=369fbe2f&":
/*!************************************************************!*\
  !*** ./src/pages/page2.vue?vue&type=template&id=369fbe2f& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./page2.vue?vue&type=template&id=369fbe2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/page2.vue?vue&type=template&id=369fbe2f&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_369fbe2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/page2.vue?')}}]);