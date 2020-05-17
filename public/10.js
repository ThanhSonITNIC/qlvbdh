(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersData */ "./resources/js/src/views/users/UsersData.js");
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
  name: 'Users',
  data: function data() {
    return {
      items: _UsersData__WEBPACK_IMPORTED_MODULE_0__["default"],
      fields: [{
        key: 'username',
        label: 'Name',
        _classes: 'font-weight-bold'
      }, {
        key: 'registered'
      }, {
        key: 'role'
      }, {
        key: 'status'
      }],
      activePage: 1
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      }
    }
  },
  methods: {
    getBadge: function getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success';

        case 'Inactive':
          return 'secondary';

        case 'Pending':
          return 'warning';

        case 'Banned':
          return 'danger';

        default:
          'primary';
      }
    },
    rowClicked: function rowClicked(item, index) {
      this.$router.push({
        path: "users/".concat(index + 1)
      });
    },
    pageChange: function pageChange(val) {
      this.$router.push({
        query: {
          page: val
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", xl: "8" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [_vm._v("\n        Users\n      ")]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      hover: "",
                      striped: "",
                      items: _vm.items,
                      fields: _vm.fields,
                      "items-per-page": 5,
                      "clickable-rows": "",
                      "active-page": _vm.activePage,
                      pagination: { doubleArrows: false, align: "center" }
                    },
                    on: {
                      "row-clicked": _vm.rowClicked,
                      "page-change": _vm.pageChange
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "CBadge",
                                  {
                                    attrs: {
                                      color: _vm.getBadge(data.item.status)
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(data.item.status) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
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

/***/ "./resources/js/src/views/users/Users.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=489dfb87& */ "./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=489dfb87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/users/UsersData.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/users/UsersData.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var usersData = [{
  username: 'Samppa Nori',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Estavan Lykos',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Chetan Mohamed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Derick Maximinus',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Friderik Dávid',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Yiorgos Avraamu',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Avram Tarasios',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned',
  _classes: 'table-success'
}, {
  username: 'Quintin Ed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Enéas Kwadwo',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Agapetus Tadeáš',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Carwyn Fachtna',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active',
  _classes: 'table-success'
}, {
  username: 'Nehemiah Tatius',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Ebbe Gemariah',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Eustorgios Amulius',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Leopold Gáspár',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Pompeius René',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Paĉjo Jadon',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Micheal Mercurius',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Ganesha Dubhghall',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Hiroto Šimun',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Vishnu Serghei',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Zbyněk Phoibos',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Einar Randall',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive',
  _classes: 'table-danger'
}, {
  username: 'Félix Troels',
  registered: '2012/03/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Aulus Agmundr',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Pending'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ })

}]);