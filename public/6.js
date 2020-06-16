(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/factory */ "./resources/js/src/services/factory.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__);


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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Detail",
  props: {
    documentId: {
      required: false
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__["Treeselect"]
  },
  data: function data() {
    return {
      books: [],
      types: [],
      signers: [],
      writers: [],
      publishers: [],
      document: {
        book_id: null,
        type_id: null,
        symbol: null,
        writer_id: null,
        "abstract": null,
        publisher_id: null,
        effective_at: null,
        signer_id: null,
        sign_at: null,
        creator: {
          id: this.$store.state.auth.currentUser.id,
          name: this.$store.state.auth.currentUser.name
        },
        writer: {}
      }
    };
  },
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    },
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.query && route.query.book) {
          this.document.book_id = Number.parseInt(route.query.book);
        }
      }
    }
  },
  computed: {
    isIncome: function isIncome() {
      return this.document.book_id == 1;
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      !this.documentId || this.fetchDocument();
      this.fetchTypes();
      this.fetchBooks();
      this.fetchPublishers();
      this.fetchSigners();
      this.fetchWriters();
    },
    fetchDocument: function fetchDocument() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var documentResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(_this.documentId, "with=creator;writer");

              case 2:
                documentResponse = _context.sent;
                _this.document = documentResponse.data;
                return _context.abrupt("return", documentResponse.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchTypes: function fetchTypes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var typeResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].documentType.all();

              case 2:
                typeResponse = _context2.sent;
                _this2.types = _this2.formatKeys(typeResponse.data, {
                  id: "id",
                  name: "label"
                });
                return _context2.abrupt("return", typeResponse);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchBooks: function fetchBooks() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var bookResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].book.all();

              case 2:
                bookResponse = _context3.sent;
                _this3.books = _this3.formatKeys(bookResponse.data);
                return _context3.abrupt("return", bookResponse);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchPublishers: function fetchPublishers() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var publisherResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].publisher.all();

              case 2:
                publisherResponse = _context4.sent;
                _this4.publishers = _this4.formatKeys(publisherResponse.data, {
                  id: "id",
                  name: "label"
                });
                return _context4.abrupt("return", publisherResponse);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchSigners: function fetchSigners() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var signerResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].signer.all();

              case 2:
                signerResponse = _context5.sent;
                _this5.signers = _this5.formatKeys(signerResponse.data, {
                  id: "id",
                  name: "label"
                });
                return _context5.abrupt("return", signerResponse);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fetchWriters: function fetchWriters() {
      var _arguments = arguments,
          _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var query, writersResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : "";
                _context6.next = 3;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.all("search=name:".concat(query, "&with=department"));

              case 3:
                writersResponse = _context6.sent;
                _this6.writers = _this6.formatKeys(writersResponse.data.data, {
                  id: "id",
                  name: "label"
                });

                if (!_this6.writers.map(function (item) {
                  return item.id;
                }).includes(_this6.document.writer_id) && _this6.document.writer) {
                  _this6.writers.push({
                    id: _this6.document.writer.id,
                    label: _this6.document.writer.name
                  });
                }

                return _context6.abrupt("return", writersResponse);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    updateDocument: function updateDocument() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.update(_this7.document, _this7.documentId).then(function (response) {
                  _this7.$toast.success("Đã lưu");

                  _this7.$emit("update", response.data);
                })["catch"](function (error) {
                  _this7.toastHttpError(error);
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    createDocument: function createDocument() {
      var _this8 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.create(this.document).then(function (response) {
        _this8.$router.push({
          path: "/documents/".concat(response.data.id)
        });

        _this8.$toast.success("Đã tạo văn bản");
      })["catch"](function (error) {
        _this8.toastHttpError(error);
      });
    },
    onClearWriter: function onClearWriter(value) {
      if (value != undefined) return;
      this.document.writer_id = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "CCard",
    [
      _c("CCardHeader", [
        _vm.documentId
          ? _c("strong", [_vm._v("Chi tiết văn bản")])
          : _c("strong", [_vm._v("Tạo văn bản")])
      ]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CForm",
            [
              _c(
                "CRow",
                { staticClass: "form-group" },
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CSelect", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Sổ văn bản",
                          options: _vm.books,
                          value: _vm.document.book_id,
                          placeholder: "Please select"
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "book_id", $event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CFormGroup", {
                        staticClass: "form-group mb-0",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function() {
                                return [
                                  _vm._t("label", [
                                    _c("label", [_vm._v("Loại văn bản")])
                                  ])
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "input",
                              fn: function() {
                                return [
                                  _c("treeselect", {
                                    attrs: {
                                      multiple: false,
                                      options: _vm.types,
                                      clearable: false
                                    },
                                    model: {
                                      value: _vm.document.type_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.document, "type_id", $$v)
                                      },
                                      expression: "document.type_id"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                { staticClass: "form-group" },
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Số ký hiệu",
                          value: _vm.document.symbol
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "symbol", $event)
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                { staticClass: "form-group" },
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CFormGroup", {
                        staticClass: "form-group mb-0",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function() {
                                return [
                                  _vm._t("label", [
                                    _c("label", [_vm._v("Người soạn")])
                                  ])
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "input",
                              fn: function() {
                                return [
                                  _c("treeselect", {
                                    attrs: {
                                      multiple: false,
                                      options: _vm.writers
                                    },
                                    on: {
                                      "search-change": _vm.fetchWriters,
                                      input: _vm.onClearWriter
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "option-label",
                                        fn: function(ref) {
                                          var node = ref.node
                                          return _c("label", {}, [
                                            _vm._v(
                                              _vm._s(
                                                node.raw.department
                                                  ? node.raw.label +
                                                      " - " +
                                                      node.raw.department.name
                                                  : node.raw.label
                                              )
                                            )
                                          ])
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.document.writer_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.document, "writer_id", $$v)
                                      },
                                      expression: "document.writer_id"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Người tạo",
                          value: _vm.document.creator.name,
                          readonly: ""
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("CTextarea", {
                attrs: {
                  label: "Trích yếu",
                  placeholder: "Content...",
                  rows: "5",
                  value: _vm.document.abstract
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.document, "abstract", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "CRow",
                { staticClass: "form-group" },
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CFormGroup", {
                        staticClass: "form-group mb-0",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function() {
                                return [
                                  _vm._t("label", [
                                    _c("label", [_vm._v("Nơi ban hành")])
                                  ])
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "input",
                              fn: function() {
                                return [
                                  _c("treeselect", {
                                    attrs: {
                                      multiple: false,
                                      options: _vm.publishers,
                                      clearable: false
                                    },
                                    model: {
                                      value: _vm.document.publisher_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.document,
                                          "publisher_id",
                                          $$v
                                        )
                                      },
                                      expression: "document.publisher_id"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: {
                          label: _vm.isIncome ? "Ngày nhận" : "Ngày ban hành",
                          type: "date",
                          value: _vm.document.effective_at
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(
                              _vm.document,
                              "effective_at",
                              $event
                            )
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                { staticClass: "form-group" },
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CFormGroup", {
                        staticClass: "form-group mb-0",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function() {
                                return [
                                  _vm._t("label", [
                                    _c("label", [_vm._v("Người ký")])
                                  ])
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "input",
                              fn: function() {
                                return [
                                  _c("treeselect", {
                                    attrs: {
                                      multiple: false,
                                      options: _vm.signers,
                                      clearable: false
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "option-label",
                                        fn: function(ref) {
                                          var node = ref.node
                                          return _c("label", {}, [
                                            _vm._v(
                                              _vm._s(
                                                node.raw.description
                                                  ? node.raw.label +
                                                      " - " +
                                                      node.raw.description
                                                  : node.raw.label
                                              )
                                            )
                                          ])
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.document.signer_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.document, "signer_id", $$v)
                                      },
                                      expression: "document.signer_id"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Ngày ký",
                          type: "date",
                          value: _vm.document.sign_at
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "sign_at", $event)
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
      ),
      _vm._v(" "),
      _c(
        "CCardFooter",
        [
          _vm.documentId
            ? _c(
                "CButton",
                {
                  staticClass: "float-right",
                  attrs: { size: "sm", color: "success" },
                  on: { click: _vm.updateDocument }
                },
                [
                  _c("CIcon", { attrs: { name: "cil-check" } }),
                  _vm._v("Lưu\n    ")
                ],
                1
              )
            : _c(
                "CButton",
                {
                  staticClass: "float-right",
                  attrs: { size: "sm", color: "success" },
                  on: { click: _vm.createDocument }
                },
                [
                  _c("CIcon", { attrs: { name: "cil-plus" } }),
                  _vm._v("Tạo\n    ")
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

/***/ "./resources/js/src/components/document/Detail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/document/Detail.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=9a2bbf16& */ "./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=9a2bbf16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Detail.vue?vue&type=template&id=9a2bbf16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_9a2bbf16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/services/attachment.js":
/*!*************************************************!*\
  !*** ./resources/js/src/services/attachment.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/attachments';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  },
  download: function download(id, filename) {
    return axios.get("/api/download/attachments/".concat(id), {
      responseType: 'blob'
    }).then(function (response) {
      var fileURL = window.URL.createObjectURL(new Blob([response.data]));
      var fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', filename);
      document.body.appendChild(fileLink);
      fileLink.click();
      return response;
    });
  }
});

/***/ }),

/***/ "./resources/js/src/services/book.js":
/*!*******************************************!*\
  !*** ./resources/js/src/services/book.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/books';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/department.js":
/*!*************************************************!*\
  !*** ./resources/js/src/services/department.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/departments';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/document.js":
/*!***********************************************!*\
  !*** ./resources/js/src/services/document.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/documents';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/documentType.js":
/*!***************************************************!*\
  !*** ./resources/js/src/services/documentType.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/document-types';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/factory.js":
/*!**********************************************!*\
  !*** ./resources/js/src/services/factory.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./resources/js/src/services/auth.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./resources/js/src/services/user.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./resources/js/src/services/title.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role */ "./resources/js/src/services/role.js");
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission */ "./resources/js/src/services/permission.js");
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department */ "./resources/js/src/services/department.js");
/* harmony import */ var _documentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentType */ "./resources/js/src/services/documentType.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book */ "./resources/js/src/services/book.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document */ "./resources/js/src/services/document.js");
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signer */ "./resources/js/src/services/signer.js");
/* harmony import */ var _publisher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publisher */ "./resources/js/src/services/publisher.js");
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attachment */ "./resources/js/src/services/attachment.js");
/* harmony import */ var _receiver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./receiver */ "./resources/js/src/services/receiver.js");
/* harmony import */ var _recipient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipient */ "./resources/js/src/services/recipient.js");














/* harmony default export */ __webpack_exports__["default"] = ({
  auth: _auth__WEBPACK_IMPORTED_MODULE_0__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: _title__WEBPACK_IMPORTED_MODULE_2__["default"],
  role: _role__WEBPACK_IMPORTED_MODULE_3__["default"],
  permission: _permission__WEBPACK_IMPORTED_MODULE_4__["default"],
  department: _department__WEBPACK_IMPORTED_MODULE_5__["default"],
  documentType: _documentType__WEBPACK_IMPORTED_MODULE_6__["default"],
  book: _book__WEBPACK_IMPORTED_MODULE_7__["default"],
  document: _document__WEBPACK_IMPORTED_MODULE_8__["default"],
  signer: _signer__WEBPACK_IMPORTED_MODULE_9__["default"],
  publisher: _publisher__WEBPACK_IMPORTED_MODULE_10__["default"],
  attachment: _attachment__WEBPACK_IMPORTED_MODULE_11__["default"],
  receiver: _receiver__WEBPACK_IMPORTED_MODULE_12__["default"],
  recipient: _recipient__WEBPACK_IMPORTED_MODULE_13__["default"]
});

/***/ }),

/***/ "./resources/js/src/services/permission.js":
/*!*************************************************!*\
  !*** ./resources/js/src/services/permission.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/permissions';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/publisher.js":
/*!************************************************!*\
  !*** ./resources/js/src/services/publisher.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/organizes';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/receiver.js":
/*!***********************************************!*\
  !*** ./resources/js/src/services/receiver.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/document-receivers';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  },
  creates: function creates(data) {
    return data.user_id ? this.create(data) : axios.post("".concat(resource, "-m"), data);
  },
  deletes: function deletes(query) {
    return axios["delete"]("".concat(resource, "-m?").concat(query));
  }
});

/***/ }),

/***/ "./resources/js/src/services/recipient.js":
/*!************************************************!*\
  !*** ./resources/js/src/services/recipient.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/document-organizes';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  },
  deletes: function deletes(query) {
    return axios["delete"]("".concat(resource, "-m?").concat(query));
  }
});

/***/ }),

/***/ "./resources/js/src/services/role.js":
/*!*******************************************!*\
  !*** ./resources/js/src/services/role.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/roles';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/signer.js":
/*!*********************************************!*\
  !*** ./resources/js/src/services/signer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/signers';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/title.js":
/*!********************************************!*\
  !*** ./resources/js/src/services/title.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/titles';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/src/services/user.js":
/*!*******************************************!*\
  !*** ./resources/js/src/services/user.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resource = '/api/users';
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(query) {
    return axios.get("".concat(resource, "?").concat(query));
  },
  get: function get(id, query) {
    return axios.get("".concat(resource, "/").concat(id, "?").concat(query));
  },
  create: function create(data) {
    return axios.post("".concat(resource), data);
  },
  update: function update(data, id) {
    return axios.put("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return axios["delete"]("".concat(resource, "/").concat(id));
  },
  giveRole: function giveRole(role, id) {
    return axios.post("".concat(resource, "/").concat(id, "/roles/").concat(role));
  },
  revokeRole: function revokeRole(role, id) {
    return axios["delete"]("".concat(resource, "/").concat(id, "/roles/").concat(role));
  },
  givePermission: function givePermission(permission, id) {
    return axios.post("".concat(resource, "/").concat(id, "/permissions/").concat(permission));
  },
  revokePermission: function revokePermission(permission, id) {
    return axios["delete"]("".concat(resource, "/").concat(id, "/permissions/").concat(permission));
  }
});

/***/ })

}]);