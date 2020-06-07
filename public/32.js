(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/factory */ "./resources/js/src/services/factory.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SearchBox */ "./resources/js/src/components/SearchBox.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Documents",
  components: {
    CSearchBox: _components_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      items: null,
      fields: [{
        key: "id",
        label: "Mã",
        _classes: "font-weight-bold"
      }, {
        key: "abstract",
        label: "Trích dẫn",
        _classes: "w-50"
      }, {
        key: "type",
        label: "Loại"
      }, {
        key: "publisher",
        label: "Nơi ban hành"
      }, {
        key: "published_at",
        label: "Ngày ban hành"
      }],
      searchFields: [{
        value: "id",
        label: "Mã"
      }, {
        value: "abstract",
        label: "Trích dẫn"
      }, {
        value: "content",
        label: "Nội dung"
      }, {
        value: "type.name",
        label: "Loại"
      }, {
        value: "creator.name",
        label: "Người soạn"
      }, {
        value: "signer.name",
        label: "Người ký"
      }, {
        value: "published_at",
        label: "Ngày ban hành"
      }, {
        value: "arrival_at",
        label: "Ngày đến"
      }, {
        value: "publisher.name",
        label: "Nơi ban hành"
      }, {
        value: "due_at",
        label: "Hạn xử lý"
      }, {
        value: "link.id",
        label: "Văn bản liên kết"
      }],
      currentPage: 1,
      pages: 0,
      size: 0,
      searchValue: "",
      searchField: "id",
      bookId: null
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.params && route.params.book) {
          this.bookId = route.params.book;
        }

        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page);
        }
      }
    },
    currentPage: {
      handler: function handler(page) {
        this.pageChange(page);
        this.currentPage = page;
        this.fetch();
      }
    },
    bookId: {
      handler: function handler(page) {
        this.fetch();
      }
    }
  },
  computed: {
    query: function query() {
      return this.withQuery + "&" + this.pageQuery + "&" + this.searchQuery;
    },
    pageQuery: function pageQuery() {
      return this.currentPage ? "page=" + this.currentPage : "";
    },
    withQuery: function withQuery() {
      return "with=publisher;type";
    },
    searchQuery: function searchQuery() {
      return "search=book.id:".concat(this.bookId) + (this.searchField && this.searchValue ? ";" + (this.searchField + ":" + this.searchValue) : "") + "&searchJoin=and";
    }
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.all(_this.query);

              case 3:
                response = _context.sent;
                _this.items = response.data.data;
                _this.currentPage = response.data.current_page;
                _this.pages = response.data.last_page;
                _this.loading = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    rowClicked: function rowClicked(item, index) {
      this.$router.push({
        path: "/documents/".concat(item.id)
      });
    },
    createUser: function createUser() {
      this.$router.push({
        path: "/documents/create"
      });
    },
    pageChange: function pageChange(val) {
      this.$router.push({
        query: {
          page: val
        }
      });
    },
    searchFieldChanged: function searchFieldChanged(item) {
      this.searchField = item.value;
      this.fetch();
    },
    searchValueChanged: function searchValueChanged(value) {
      this.searchValue = value;
      this.fetch();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        { attrs: { col: "12" } },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", { attrs: { name: "cil-grid" } }),
                  _vm._v("Danh sách văn bản\n        "),
                  _c(
                    "CButton",
                    {
                      staticClass: "float-right",
                      attrs: {
                        size: "sm",
                        color: "primary",
                        variant: "outline"
                      },
                      on: { click: _vm.createUser }
                    },
                    [_c("CIcon", { attrs: { name: "cil-user-follow" } })],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CSearchBox", {
                    attrs: { fields: _vm.searchFields },
                    on: {
                      fieldChanged: _vm.searchFieldChanged,
                      valueChanged: _vm.searchValueChanged
                    }
                  }),
                  _vm._v(" "),
                  _c("CDataTable", {
                    attrs: {
                      hover: "",
                      striped: "",
                      loading: _vm.loading,
                      items: _vm.items,
                      fields: _vm.fields,
                      "clickable-rows": ""
                    },
                    on: { "row-clicked": _vm.rowClicked },
                    scopedSlots: _vm._u([
                      {
                        key: "publisher",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", [_vm._v(_vm._s(item.publisher.name))])
                          ]
                        }
                      },
                      {
                        key: "type",
                        fn: function(ref) {
                          var item = ref.item
                          return [_c("td", [_vm._v(_vm._s(item.type.name))])]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("CPagination", {
                    attrs: {
                      align: "center",
                      pages: _vm.pages,
                      "active-page": _vm.currentPage,
                      activePage: _vm.currentPage
                    },
                    on: {
                      "update:activePage": function($event) {
                        _vm.currentPage = $event
                      },
                      "update:active-page": function($event) {
                        _vm.currentPage = $event
                      }
                    }
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

/***/ "./resources/js/src/views/documents/Documents.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/documents/Documents.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=9dd0d332& */ "./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/documents/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=9dd0d332& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Documents.vue?vue&type=template&id=9dd0d332&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_9dd0d332___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);