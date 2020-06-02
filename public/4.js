(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Attachments",
  props: {
    documentId: {
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      fields: [{
        key: "name",
        label: "Tên",
        _classes: "w-50"
      }, {
        key: "size",
        label: "Kích thước (KB)"
      }, {
        key: "id",
        label: "Hành động"
      }],
      attachments: [{
        id: "",
        name: "",
        size: ""
      }],
      file: {}
    };
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var attachmentResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment.all("search=document_id:".concat(_this.documentId));

              case 2:
                attachmentResponse = _context.sent;
                _this.attachments = _this.formatKeys(attachmentResponse.data, {
                  id: "id",
                  name: "name"
                });
                _this.loading = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    downloadAttachment: function downloadAttachment(item) {
      var _this2 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment.download(item.id, item.name).then(function (response) {
        _this2.$toast.open({
          message: "Đã tải xuống",
          type: "success"
        });
      })["catch"](function (error) {
        _this2.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    },
    deleteAttachment: function deleteAttachment(id, index) {
      var _this3 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment["delete"](id).then(function (response) {
        _this3.attachments.splice(index, 1);

        _this3.$toast.open({
          message: "Đã xóa",
          type: "success"
        });
      })["catch"](function (error) {
        _this3.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    },
    handleFileUpload: function handleFileUpload(files, e) {
      this.file = files[0];
      this.uploadAttachment();
    },
    uploadAttachment: function uploadAttachment() {
      var _this4 = this;

      var formData = new FormData();
      formData.append("attachments", this.file);
      formData.append("document_id", this.documentId);
      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment.create(formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this4.attachments.push(response.data);

        _this4.$toast.open({
          message: "Đã tải lên",
          type: "success"
        });
      })["catch"](function (error) {
        _this4.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    }
  }
});

/***/ }),

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Detail",
  props: {
    documentId: {
      required: true
    }
  },
  data: function data() {
    return {
      books: [],
      types: [],
      signers: [],
      publishers: [],
      document: {
        id: null,
        creator: {}
      }
    };
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var bookResponse, typeResponse, signerResponse, publisherResponse, documentResponse;
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
                _context.next = 18;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(_this.documentId, "with=creator");

              case 18:
                documentResponse = _context.sent;
                _this.document = documentResponse.data;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateDocument: function updateDocument() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.update(_this2.document, _this2.documentId).then(function (response) {
                  _this2.$toast.open({
                    message: "Đã lưu",
                    type: "success"
                  });

                  _this2.$emit('update:documentId', response.data.id);
                })["catch"](function (error) {
                  _this2.$toast.open({
                    message: error.response.data.message,
                    type: "error"
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Receivers",
  props: {
    documentId: {
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      fields: [{
        key: "user",
        label: "Người nhận",
        sorter: false
      }, {
        key: "view_only",
        label: "Chức năng",
        _classes: "w-25"
      }, {
        key: "seen",
        label: "Đã xem"
      }, {
        key: "done",
        label: "Đã xử lý"
      }, {
        key: "id",
        label: "Xóa",
        sorter: false
      }],
      receivers: [],
      activeTab: 0,
      departments: [],
      roles: [],
      currentPage: 1,
      pages: 0,
      functions: [{
        value: true,
        label: "Chỉ xem"
      }, {
        value: false,
        label: "Xử lý"
      }],
      sorter: {
        column: "",
        asc: true
      }
    };
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var attachmentResponse, departmentResponse, roleResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment.all("search=document_id:".concat(_this.documentId));

              case 3:
                attachmentResponse = _context.sent;
                _this.attachments = _this.formatKeys(attachmentResponse.data, {
                  id: "id",
                  name: "name"
                });
                _context.next = 7;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].department.all();

              case 7:
                departmentResponse = _context.sent;
                _this.departments = departmentResponse.data;
                _context.next = 11;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].role.all();

              case 11:
                roleResponse = _context.sent;
                _this.roles = roleResponse.data;

                _this.fetchReceivers();

                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchReceivers: function fetchReceivers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.next = 3;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.all(_this2.query);

              case 3:
                response = _context2.sent;
                _this2.receivers = response.data.data;
                _this2.currentPage = response.data.current_page;
                _this2.pages = response.data.last_page;
                _this2.loading = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sorted: function sorted(sorter) {
      this.sorter = sorter;
      this.fetchReceivers();
    },
    updateViewOnly: function updateViewOnly(id, value) {
      var _this3 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        view_only: value
      }, id).then(function (response) {
        _this3.$toast.open({
          message: "Đã cập nhật",
          type: "success"
        });
      })["catch"](function (error) {
        _this3.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    },
    updateDone: function updateDone(id, value) {
      var _this4 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        done: value
      }, id).then(function (response) {
        _this4.$toast.open({
          message: "Đã cập nhật",
          type: "success"
        });
      })["catch"](function (error) {
        _this4.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    },
    remove: function remove(receiver, index) {
      var _this5 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver["delete"](receiver.id).then(function (response) {
        _this5.receivers.splice(index, 1);

        _this5.$toast.open({
          message: "Đã xóa",
          type: "success"
        });
      })["catch"](function (error) {
        _this5.$toast.open({
          message: error.response.data.message,
          type: "error"
        });
      });
    }
  },
  computed: {
    query: function query() {
      return this.withQuery + "&" + this.pageQuery + "&" + this.searchQuery + "&" + this.sortedQuery;
    },
    pageQuery: function pageQuery() {
      return (this.currentPage ? "page=" + this.currentPage : "") + "&limit=10";
    },
    withQuery: function withQuery() {
      return "with=user";
    },
    sortedQuery: function sortedQuery() {
      return this.sorter.column ? "orderBy=".concat(this.sorter.column, "&sortedBy=").concat(this.sorter.asc ? "asc" : "desc") : "";
    },
    searchQuery: function searchQuery() {
      return "search=document_id:".concat(this.documentId);
    }
  },
  watch: {
    currentPage: {
      handler: function handler(page) {
        this.fetchReceivers();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/factory */ "./resources/js/src/services/factory.js");
/* harmony import */ var _components_document_Detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/document/Detail */ "./resources/js/src/components/document/Detail.vue");
/* harmony import */ var _components_document_Attachments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/document/Attachments */ "./resources/js/src/components/document/Attachments.vue");
/* harmony import */ var _components_document_Receivers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/document/Receivers */ "./resources/js/src/components/document/Receivers.vue");
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Document",
  components: {
    CDetail: _components_document_Detail__WEBPACK_IMPORTED_MODULE_1__["default"],
    CAttachments: _components_document_Attachments__WEBPACK_IMPORTED_MODULE_2__["default"],
    CReceivers: _components_document_Receivers__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      documentId: ""
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.params && route.params.document) {
          this.documentId = route.params.document;
        }
      }
    },
    documentId: {
      handler: function handler() {
        this.$router.push({
          path: "/documents/".concat(this.documentId)
        });
      }
    }
  },
  created: function created() {},
  methods: {
    rowClicked: function rowClicked(item, index) {
      this.$router.push({
        path: "/documents/".concat(item.id)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("CCardHeader", [_c("strong", [_vm._v("Tệp đính kèm")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c("CDataTable", {
            attrs: {
              loading: _vm.loading,
              items: _vm.attachments,
              fields: _vm.fields
            },
            scopedSlots: _vm._u([
              {
                key: "id",
                fn: function(ref) {
                  var item = ref.item
                  var index = ref.index
                  return [
                    _c(
                      "td",
                      [
                        _c(
                          "CButton",
                          {
                            attrs: {
                              size: "sm",
                              variant: "outline",
                              color: "primary"
                            },
                            on: {
                              click: function($event) {
                                return _vm.downloadAttachment(item)
                              }
                            }
                          },
                          [
                            _c("CIcon", {
                              attrs: { name: "cil-cloud-download" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CButton",
                          {
                            attrs: {
                              size: "sm",
                              variant: "outline",
                              color: "danger"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteAttachment(item.id, index)
                              }
                            }
                          },
                          [_c("CIcon", { attrs: { name: "cil-remove" } })],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("CInputFile", {
            attrs: { custom: "" },
            on: { change: _vm.handleFileUpload }
          })
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
      _c("CCardHeader", [_c("strong", [_vm._v("Chi tiết văn bản")])]),
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
                    { attrs: { sm: "12" } },
                    [
                      _c("CInput", {
                        staticClass: "mb-0",
                        attrs: { label: "Mã văn bản", value: _vm.document.id },
                        on: {
                          "update:value": function($event) {
                            return _vm.$set(_vm.document, "id", $event)
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
                          label: "Người soạn",
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
                  label: "Trích dẫn",
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
              on: { click: _vm.updateDocument }
            },
            [
              _c("CIcon", { attrs: { name: "cil-check" } }),
              _vm._v("Lưu\n    ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c(
        "CCardHeader",
        [
          _c("strong", [_vm._v("Người nhận")]),
          _vm._v(" "),
          _c(
            "CButton",
            {
              staticClass: "float-right",
              attrs: { size: "sm", color: "primary", variant: "outline" }
            },
            [_c("CIcon", { attrs: { name: "cil-plus" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CCardBody",
            { staticClass: "p-0" },
            [
              _c("CDataTable", {
                attrs: {
                  loading: _vm.loading,
                  items: _vm.receivers,
                  fields: _vm.fields,
                  sorter: { external: true, resetable: true }
                },
                on: { "update:sorter-value": _vm.sorted },
                scopedSlots: _vm._u([
                  {
                    key: "user",
                    fn: function(ref) {
                      var item = ref.item
                      return [_c("td", [_vm._v(_vm._s(item.user.name))])]
                    }
                  },
                  {
                    key: "view_only",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          [
                            _c("CSelect", {
                              staticClass: "mb-0",
                              attrs: {
                                value: item.view_only,
                                options: _vm.functions,
                                placeholder: "Please select"
                              },
                              on: {
                                "update:value": [
                                  function($event) {
                                    return _vm.$set(item, "view_only", $event)
                                  },
                                  function(value) {
                                    return _vm.updateViewOnly(item.id, value)
                                  }
                                ]
                              }
                            })
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "seen",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          [
                            _c("CSwitch", {
                              staticClass: "mx-1",
                              attrs: {
                                color: "info",
                                checked: item.seen,
                                variant: "outline",
                                disabled: ""
                              }
                            })
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "done",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          [
                            _c("CSwitch", {
                              staticClass: "mx-1",
                              attrs: {
                                color: "success",
                                checked: item.done,
                                variant: "outline"
                              },
                              on: {
                                "update:checked": [
                                  function($event) {
                                    return _vm.$set(item, "done", $event)
                                  },
                                  function(value) {
                                    return _vm.updateDone(item.id, value)
                                  }
                                ]
                              }
                            })
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "id",
                    fn: function(ref) {
                      var item = ref.item
                      var index = ref.index
                      return [
                        _c(
                          "td",
                          [
                            _c(
                              "CButton",
                              {
                                attrs: {
                                  size: "sm",
                                  variant: "outline",
                                  color: "danger"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.remove(item, index)
                                  }
                                }
                              },
                              [_c("CIcon", { attrs: { name: "cil-remove" } })],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _vm.pages > 1
                ? _c("CPagination", {
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
                : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _c("CDetail", {
        attrs: { documentId: _vm.documentId },
        on: {
          "update:documentId": function($event) {
            _vm.documentId = $event
          },
          "update:document-id": function($event) {
            _vm.documentId = $event
          }
        }
      }),
      _vm._v(" "),
      _c("CAttachments", {
        attrs: { documentId: _vm.documentId },
        on: {
          "update:documentId": function($event) {
            _vm.documentId = $event
          },
          "update:document-id": function($event) {
            _vm.documentId = $event
          }
        }
      }),
      _vm._v(" "),
      _c("CReceivers", {
        attrs: { documentId: _vm.documentId },
        on: {
          "update:documentId": function($event) {
            _vm.documentId = $event
          },
          "update:document-id": function($event) {
            _vm.documentId = $event
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

/***/ "./resources/js/src/components/document/Attachments.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/document/Attachments.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attachments.vue?vue&type=template&id=169727bc& */ "./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc&");
/* harmony import */ var _Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attachments.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/Attachments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Attachments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachments.vue?vue&type=template&id=169727bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Attachments.vue?vue&type=template&id=169727bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_169727bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/components/document/Receivers.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/components/document/Receivers.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receivers.vue?vue&type=template&id=4c19f920& */ "./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920&");
/* harmony import */ var _Receivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receivers.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Receivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/Receivers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receivers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Receivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receivers.vue?vue&type=template&id=4c19f920& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Receivers.vue?vue&type=template&id=4c19f920&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receivers_vue_vue_type_template_id_4c19f920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  receiver: _receiver__WEBPACK_IMPORTED_MODULE_12__["default"]
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
var resource = '/api/publishers';
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

/***/ "./resources/js/src/views/documents/Document.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/documents/Document.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Document.vue?vue&type=template&id=1e5e523c& */ "./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c&");
/* harmony import */ var _Document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Document.vue?vue&type=script&lang=js& */ "./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/documents/Document.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Document.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Document.vue?vue&type=template&id=1e5e523c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/documents/Document.vue?vue&type=template&id=1e5e523c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Document_vue_vue_type_template_id_1e5e523c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);