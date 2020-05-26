(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar */ "./resources/js/src/containers/TheSidebar.vue");
/* harmony import */ var _TheHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeader */ "./resources/js/src/containers/TheHeader.vue");
/* harmony import */ var _TheFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheFooter */ "./resources/js/src/containers/TheFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheContainer',
  components: {
    TheSidebar: _TheSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheHeader: _TheHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _TheFooter__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheFooter'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt: _TheHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheHeaderDropdownAccnt',
  data: function data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.$store.dispatch('auth/logout').then(function (response) {
        _this.redirectToLogin();
      })["catch"](function (error) {
        _this.redirectToLogin();
      });
    },
    redirectToLogin: function redirectToLogin() {
      this.$router.push({
        name: "Login"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nav */ "./resources/js/src/containers/_nav.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheSidebar',
  nav: _nav__WEBPACK_IMPORTED_MODULE_0__["default"],
  computed: {
    show: function show() {
      return this.$store.state.sidebarShow;
    },
    minimize: function minimize() {
      return this.$store.state.sidebarMinimize;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-5603bad4],\r\n.fade-leave-active[data-v-5603bad4] {\r\n  -webkit-transition: opacity 0.3s;\r\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-5603bad4],\r\n.fade-leave-to[data-v-5603bad4] {\r\n  opacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.c-icon[data-v-f77a4108] {\n  margin-right: 0.3rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-app" },
    [
      _c("TheSidebar"),
      _vm._v(" "),
      _c(
        "CWrapper",
        [
          _c("TheHeader"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-body" },
            [
              _c(
                "main",
                { staticClass: "c-main" },
                [
                  _c(
                    "CContainer",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "transition",
                        { attrs: { name: "fade" } },
                        [_c("router-view")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("TheFooter")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("CFooter", { attrs: { fixed: false } }, [
    _c("div", [
      _c("a", { attrs: { href: "https://coreui.io", target: "_blank" } }, [
        _vm._v("CoreUI")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ml-1" }, [
        _vm._v("© " + _vm._s(new Date().getFullYear()) + " creativeLabs.")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "ml-auto" }, [
      _c("span", { staticClass: "mr-1" }, [_vm._v("Powered by")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://coreui.io/vue", target: "_blank" } }, [
        _vm._v("CoreUI for Vue")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CHeader",
    { attrs: { fixed: "", "with-subheader": "", light: "" } },
    [
      _c("CToggler", {
        staticClass: "ml-3 d-lg-none",
        attrs: { "in-header": "" },
        on: {
          click: function($event) {
            return _vm.$store.commit("toggleSidebarMobile")
          }
        }
      }),
      _vm._v(" "),
      _c("CToggler", {
        staticClass: "ml-3 d-md-down-none",
        attrs: { "in-header": "" },
        on: {
          click: function($event) {
            return _vm.$store.commit("toggleSidebarDesktop")
          }
        }
      }),
      _vm._v(" "),
      _c(
        "CHeaderBrand",
        { staticClass: "mx-auto d-lg-none", attrs: { to: "/" } },
        [_c("CIcon", { attrs: { name: "logo", height: "48", alt: "Logo" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "CHeaderNav",
        { staticClass: "d-md-down-none mr-auto" },
        [
          _c(
            "CHeaderNavItem",
            { staticClass: "px-3" },
            [
              _c("CHeaderNavLink", { attrs: { to: "/dashboard" } }, [
                _vm._v("\n        Dashboard\n      ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CHeaderNavItem",
            { staticClass: "px-3" },
            [
              _c("CHeaderNavLink", { attrs: { to: "/users", exact: "" } }, [
                _vm._v("\n        Users\n      ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CHeaderNavItem",
            { staticClass: "px-3" },
            [_c("CHeaderNavLink", [_vm._v("\n        Settings\n      ")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CHeaderNav",
        { staticClass: "mr-4" },
        [
          _c(
            "CHeaderNavItem",
            { staticClass: "d-md-down-none mx-2" },
            [
              _c(
                "CHeaderNavLink",
                [_c("CIcon", { attrs: { name: "cil-bell" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CHeaderNavItem",
            { staticClass: "d-md-down-none mx-2" },
            [
              _c(
                "CHeaderNavLink",
                [_c("CIcon", { attrs: { name: "cil-list" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CHeaderNavItem",
            { staticClass: "d-md-down-none mx-2" },
            [
              _c(
                "CHeaderNavLink",
                [_c("CIcon", { attrs: { name: "cil-envelope-open" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("TheHeaderDropdownAccnt")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CSubheader",
        { staticClass: "px-3" },
        [_c("CBreadcrumbRouter", { staticClass: "border-0 mb-0" })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CDropdown",
    {
      staticClass: "c-header-nav-items",
      attrs: { inNav: "", placement: "bottom-end", "add-menu-classes": "pt-0" },
      scopedSlots: _vm._u([
        {
          key: "toggler",
          fn: function() {
            return [
              _c("CHeaderNavLink", [
                _c("div", { staticClass: "c-avatar" }, [
                  _c("img", {
                    staticClass: "c-avatar-img ",
                    attrs: { src: "img/avatars/6.jpg" }
                  })
                ])
              ])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "CDropdownHeader",
        { staticClass: "text-center", attrs: { tag: "div", color: "light" } },
        [_c("strong", [_vm._v("Account")])]
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-bell" } }),
          _vm._v(" Updates\n    "),
          _c("CBadge", { staticClass: "ml-auto", attrs: { color: "info" } }, [
            _vm._v(_vm._s(_vm.itemsCount))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-envelope-open" } }),
          _vm._v(" Messages\n    "),
          _c(
            "CBadge",
            { staticClass: "ml-auto", attrs: { color: "success" } },
            [_vm._v(_vm._s(_vm.itemsCount))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-task" } }),
          _vm._v(" Tasks\n    "),
          _c("CBadge", { staticClass: "ml-auto", attrs: { color: "danger" } }, [
            _vm._v(_vm._s(_vm.itemsCount))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-comment-square" } }),
          _vm._v(" Comments\n    "),
          _c(
            "CBadge",
            { staticClass: "ml-auto", attrs: { color: "warning" } },
            [_vm._v(_vm._s(_vm.itemsCount))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownHeader",
        { staticClass: "text-center", attrs: { tag: "div", color: "light" } },
        [_c("strong", [_vm._v("Settings")])]
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [_c("CIcon", { attrs: { name: "cil-user" } }), _vm._v(" Profile\n  ")],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-settings" } }),
          _vm._v(" Settings\n  ")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-dollar" } }),
          _vm._v(" Payments\n    "),
          _c(
            "CBadge",
            { staticClass: "ml-auto", attrs: { color: "secondary" } },
            [_vm._v(_vm._s(_vm.itemsCount))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-file" } }),
          _vm._v(" Projects\n    "),
          _c(
            "CBadge",
            { staticClass: "ml-auto", attrs: { color: "primary" } },
            [_vm._v(_vm._s(_vm.itemsCount))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("CDropdownDivider"),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        [
          _c("CIcon", { attrs: { name: "cil-shield-alt" } }),
          _vm._v(" Lock Account\n  ")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CDropdownItem",
        { on: { click: _vm.logout } },
        [
          _c("CIcon", { attrs: { name: "cil-lock-locked" } }),
          _vm._v(" Logout\n  ")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CSidebar",
    {
      attrs: { fixed: "", minimize: _vm.minimize, show: _vm.show },
      on: {
        "update:show": function(value) {
          return _vm.$store.commit("set", ["sidebarShow", value])
        }
      }
    },
    [
      _c(
        "CSidebarBrand",
        { staticClass: "d-md-down-none", attrs: { to: "/" } },
        [
          _c("CIcon", {
            staticClass: "c-sidebar-brand-full",
            attrs: {
              name: "logo",
              size: "custom-size",
              height: 35,
              viewBox: "0 0 556 134"
            }
          }),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "c-sidebar-brand-minimized",
            attrs: {
              name: "logo",
              size: "custom-size",
              height: 35,
              viewBox: "0 0 110 134"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("CRenderFunction", {
        attrs: { flat: "", "content-to-render": _vm.$options.nav }
      }),
      _vm._v(" "),
      _c("CSidebarMinimizer", {
        staticClass: "d-md-down-none",
        nativeOn: {
          click: function($event) {
            return _vm.$store.commit("set", ["sidebarMinimize", !_vm.minimize])
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& */ "./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&");
/* harmony import */ var _TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5603bad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=6a1dbf50& */ "./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=6a1dbf50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeader.vue?vue&type=template&id=27b8f76c& */ "./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&");
/* harmony import */ var _TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeader.vue?vue&type=template&id=27b8f76c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&");
/* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f77a4108",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheHeaderDropdownAccnt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=template&id=3bdd66ef& */ "./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&");
/* harmony import */ var _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=template&id=3bdd66ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/_nav.js":
/*!*********************************************!*\
  !*** ./resources/js/src/containers/_nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  _name: 'CSidebarNav',
  _children: [{
    _name: 'CSidebarNavItem',
    name: 'Bảng điều khiển',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW'
    }
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Văn bản']
  }, {
    _name: 'CSidebarNavItem',
    name: 'Văn bản đến',
    to: '/documents',
    icon: 'cil-notes'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Văn bản đi',
    to: '/documents',
    icon: 'cil-notes'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Văn bản nội bộ',
    to: '/documents',
    icon: 'cil-notes'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Báo cáo',
    to: '/documents',
    icon: 'cil-notes'
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Điều hành']
  }, {
    _name: 'CSidebarNavItem',
    name: 'Báo cáo - thống kê',
    to: '/documents',
    icon: 'cil-notes'
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Hệ thống']
  }, {
    _name: 'CSidebarNavItem',
    name: 'Người dùng',
    to: '/users',
    icon: 'cil-people'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Chức danh',
    to: '/titles',
    icon: 'cil-contact'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Phòng ban',
    to: '/departments',
    icon: 'cil-lan'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Người ký',
    to: '/signers',
    icon: 'cil-touch-app'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Nơi ban hành',
    to: '/publishers',
    icon: 'cil-institution'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Loại văn bản',
    to: '/document-types',
    icon: 'cil-text-size'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Sổ văn bản',
    to: '/books',
    icon: 'cil-book'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Nhóm',
    to: '/roles',
    icon: 'cil-address-book'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Quyền',
    to: '/permissions',
    icon: 'cil-lock-locked'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Cài đặt',
    to: '/settings',
    icon: 'cil-settings'
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Theme']
  }, {
    _name: 'CSidebarNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil'
  }, {
    _name: 'CSidebarNavItem',
    name: 'CKEditor',
    to: '/theme/ckeditor',
    icon: 'cil-short-text'
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Components']
  }, {
    _name: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    items: [{
      name: 'Breadcrumbs',
      to: '/base/breadcrumbs'
    }, {
      name: 'Cards',
      to: '/base/cards'
    }, {
      name: 'Carousels',
      to: '/base/carousels'
    }, {
      name: 'Collapses',
      to: '/base/collapses'
    }, {
      name: 'Forms',
      to: '/base/forms'
    }, {
      name: 'Jumbotrons',
      to: '/base/jumbotrons'
    }, {
      name: 'List Groups',
      to: '/base/list-groups'
    }, {
      name: 'Navs',
      to: '/base/navs'
    }, {
      name: 'Navbars',
      to: '/base/navbars'
    }, {
      name: 'Paginations',
      to: '/base/paginations'
    }, {
      name: 'Popovers',
      to: '/base/popovers'
    }, {
      name: 'Progress Bars',
      to: '/base/progress-bars'
    }, {
      name: 'Switches',
      to: '/base/switches'
    }, {
      name: 'Tables',
      to: '/base/tables'
    }, {
      name: 'Tabs',
      to: '/base/tabs'
    }, {
      name: 'Tooltips',
      to: '/base/tooltips'
    }]
  }, {
    _name: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    items: [{
      name: 'Buttons',
      to: '/buttons/standard-buttons'
    }, {
      name: 'Button Dropdowns',
      to: '/buttons/dropdowns'
    }, {
      name: 'Button Groups',
      to: '/buttons/button-groups'
    }, {
      name: 'Brand Buttons',
      to: '/buttons/brand-buttons'
    }]
  }, {
    _name: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  }, {
    _name: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    items: [{
      name: 'CoreUI Icons',
      to: '/icons/coreui-icons',
      badge: {
        color: 'info',
        text: 'NEW'
      }
    }, {
      name: 'Brands',
      to: '/icons/brands'
    }, {
      name: 'Flags',
      to: '/icons/flags'
    }]
  }, {
    _name: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    items: [{
      name: 'Alerts',
      to: '/notifications/alerts'
    }, {
      name: 'Badges',
      to: '/notifications/badges'
    }, {
      name: 'Modals',
      to: '/notifications/modals'
    }]
  }, {
    _name: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill'
    }
  }, {
    _name: 'CSidebarNavDivider',
    _class: 'm-2'
  }, {
    _name: 'CSidebarNavTitle',
    _children: ['Extras']
  }, {
    _name: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    items: [{
      name: 'Login',
      to: '/pages/login'
    }, {
      name: 'Register',
      to: '/pages/register'
    }, {
      name: 'Error 404',
      to: '/pages/404'
    }, {
      name: 'Error 500',
      to: '/pages/500'
    }]
  }, {
    _name: 'CSidebarNavItem',
    name: 'Download CoreUI',
    href: 'http://coreui.io/vue/',
    icon: {
      name: 'cil-cloud-download',
      "class": 'text-white'
    },
    _class: 'bg-success text-white',
    target: '_blank'
  }, {
    _name: 'CSidebarNavItem',
    name: 'Try CoreUI PRO',
    href: 'http://coreui.io/pro/vue/',
    icon: {
      name: 'cil-layers',
      "class": 'text-white'
    },
    _class: 'bg-danger text-white',
    target: '_blank'
  }]
}]);

/***/ })

}]);