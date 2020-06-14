(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/factory */ "./resources/js/src/services/factory.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  data: function data() {
    return {
      books: [],
      types: [],
      signers: [],
      publishers: [],
      document: {
        book_id: null,
        type_id: null,
        symbol: null,
        "abstract": null,
        publisher_id: null,
        published_at: null,
        signer_id: null,
        sign_at: null
      }
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var bookResponse, typeResponse, signerResponse, publisherResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].book.all();

              case 2:
                bookResponse = _context.sent;
                _this.books = _this.formatKeys(bookResponse.data);
                _context.next = 6;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].documentType.all();

              case 6:
                typeResponse = _context.sent;
                _this.types = _this.formatKeys(typeResponse.data);
                _context.next = 10;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].signer.all();

              case 10:
                signerResponse = _context.sent;
                _this.signers = _this.formatKeys(signerResponse.data);
                _context.next = 14;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].publisher.all();

              case 14:
                publisherResponse = _context.sent;
                _this.publishers = _this.formatKeys(publisherResponse.data);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    create: function create() {
      var _this2 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.create(this.document).then(function (response) {
        _this2.$router.push({
          path: "/documents/".concat(response.data.id)
        });

        _this2.$toast.success("Đã tạo văn bản");
      })["catch"](function (error) {
        _this2.toastHttpError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("CCardHeader", [_c("strong", [_vm._v("Tạo văn bản")])]),
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
                      _c("CSelect", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Loại văn bản",
                          options: _vm.types,
                          value: _vm.document.type_id,
                          placeholder: "Please select"
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "type_id", $event)
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
                      _c("CSelect", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Nơi ban hành",
                          placeholder: "Please select",
                          options: _vm.publishers,
                          value: _vm.document.publisher_id
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(
                              _vm.document,
                              "publisher_id",
                              $event
                            )
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
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Ngày ban hành",
                          type: "date",
                          value: _vm.document.published_at
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(
                              _vm.document,
                              "published_at",
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
                      _c("CSelect", {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Người ký",
                          options: _vm.signers,
                          value: _vm.document.signer_id,
                          placeholder: "Please select"
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "signer_id", $event)
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
          _c(
            "CButton",
            {
              staticClass: "float-right",
              attrs: { type: "submit", size: "sm", color: "success" },
              on: { click: _vm.create }
            },
            [
              _c("CIcon", { attrs: { name: "cil-check" } }),
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

/***/ }),

/***/ "./resources/js/src/views/documents/Create.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/documents/Create.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6051b7dd& */ "./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/documents/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=6051b7dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Create.vue?vue&type=template&id=6051b7dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6051b7dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);