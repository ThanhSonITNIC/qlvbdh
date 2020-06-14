(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.fetch();
    },
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
        _this2.$toast.success("Đã tải xuống");
      })["catch"](function (error) {
        _this2.toastHttpError(error);
      });
    },
    deleteAttachment: function deleteAttachment(id, index) {
      var _this3 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].attachment["delete"](id).then(function (response) {
        _this3.attachments.splice(index, 1);

        _this3.$toast.success("Đã xóa");
      })["catch"](function (error) {
        _this3.toastHttpError(error);
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

        _this4.$toast.success("Đã tải lên");
      })["catch"](function (error) {
        _this4.toastHttpError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CLinkDocument",
  props: {
    documentId: {
      required: true
    },
    isOutcome: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__["Treeselect"]
  },
  data: function data() {
    return {
      // define the default value
      linkToDocument: null,
      documentsLinked: [],
      // define options
      documents: [],
      linkedDocuments: [],
      document: {}
    };
  },
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fetchDocuments();

                _this.fetchDocument();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchDocument: function fetchDocument() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var documentResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(_this2.documentId, "with=linkTo;linked");

              case 2:
                documentResponse = _context2.sent;
                _this2.document = documentResponse.data;
                _this2.linkToDocument = _this2.document.link_to ? _this2.document.link_to.id : null;

                _this2.documents.push(_this2.linkToDocument);

                _this2.linkedDocuments = _this2.formatKeys(_this2.document.linked, {
                  id: "id",
                  symbol: "label"
                });
                _this2.documentsLinked = _this2.document.linked.map(function (d) {
                  return d.id;
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchDocuments: function fetchDocuments() {
      var _this3 = this;

      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var documentsResponse = _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.all("search=symbol:".concat(query, ";book_id:1&searchJoin=and")).then(function (response) {
        var documents = _this3.formatKeys(response.data.data, {
          id: "id",
          symbol: "label"
        });

        _this3.documents = documents;
      });
    },
    getSymbol: function getSymbol(id) {
      this.fetchSymbol(id);
      return "Không có quyền truy cập";
    },
    fetchSymbol: function fetchSymbol(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response, document;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(id);

              case 2:
                response = _context3.sent;

                if (response.data.id) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                document = {
                  id: response.data.id,
                  label: response.data.symbol
                };

                if (!_this4.documents.map(function (item) {
                  return item.id;
                }).includes(document.id)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return");

              case 8:
                _this4.documents.push(document);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    linkTo: function linkTo(id) {
      var _this5 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.update({
        link_id: id
      }, this.documentId)["catch"](function (error) {
        _this5.toastHttpError(error);
      });
    },
    unLinkTo: function unLinkTo() {
      var _this6 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.update({
        link_id: null
      }, this.documentId)["catch"](function (error) {
        _this6.toastHttpError(error);
      });
    },
    redirectToDocument: function redirectToDocument(id) {
      this.$emit("redirectTo", id);
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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Detail",
  props: {
    documentId: {
      required: true
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
        id: null,
        creator: {},
        writer: {}
      }
    };
  },
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.fetchDocument();
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
    onClearWriter: function onClearWriter(value) {
      if (value != undefined) return;
      this.document.writer_id = null;
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
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Receivers",
  props: {
    documentId: {
      required: true
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      // define the default value
      viewers: [],
      handlers: [],
      // define options
      viewerOptions: [],
      handlerOptions: []
    };
  },
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fetchDepartments(), _this.fetchViewers(), _this.fetchHandlers();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchDepartments: function fetchDepartments() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var departmentResponse, departments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].department.all("with=users");

              case 2:
                departmentResponse = _context2.sent;
                departments = _this2.formatKeys(departmentResponse.data, {
                  id: "id",
                  name: "label"
                });
                _this2.viewerOptions = _this2.formatDepartmentForTree(departments);
                return _context2.abrupt("return", departments);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchViewers: function fetchViewers() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var receivers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.fetchReceivers();

              case 2:
                receivers = _context3.sent;
                _this3.viewers = receivers.map(function (receiver) {
                  return receiver.user_id;
                });
                return _context3.abrupt("return", receivers);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchReceivers: function fetchReceivers() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var receiversResponse, receivers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.all(_this4.viewerQuery);

              case 2:
                receiversResponse = _context4.sent;
                receivers = _this4.formatReceiverForTree(receiversResponse.data);
                _this4.handlerOptions = receivers;
                return _context4.abrupt("return", receivers);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchHandlers: function fetchHandlers() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var handleReceiversResponse, handleReceivers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.all(_this5.hanlderQuery);

              case 2:
                handleReceiversResponse = _context5.sent;
                handleReceivers = _this5.formatReceiverForTree(handleReceiversResponse.data);
                _this5.handlers = handleReceivers.map(function (receiver) {
                  return receiver.id;
                });
                return _context5.abrupt("return", handleReceivers);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    removeViewer: function removeViewer(item) {
      var _this6 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.deletes("document_id=".concat(this.documentId, "&").concat(item.children ? "department_id" : "user_id", "=").concat(item.id)).then(function (response) {
        _this6.fetchReceivers();

        _this6.fetchHandlers();
      })["catch"](function (error) {
        _this6.toastHttpError(error);
      });
    },
    addViewer: function addViewer(item) {
      var _this7 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.creates(_objectSpread(_objectSpread({}, _defineProperty({}, item.children ? "department_id" : "user_id", item.id)), {}, {
        document_id: this.documentId
      })).then(function (response) {
        _this7.fetchReceivers();
      })["catch"](function (error) {
        _this7.toastHttpError(error);
      });
    },
    onHandlerDeselected: function onHandlerDeselected(item) {
      var _this8 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        view_only: true
      }, item.id)["catch"](function (error) {
        _this8.toastHttpError(error);
      });
    },
    onHandlerSelected: function onHandlerSelected(item) {
      var _this9 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        view_only: false
      }, item.id)["catch"](function (error) {
        _this9.toastHttpError(error);
      });
    },
    formatReceiverForTree: function formatReceiverForTree(array) {
      var keysMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        id: "id"
      };
      return array.map(function (obj) {
        var receiver = Object.keys(obj).reduce(function (acc, key) {
          return _objectSpread(_objectSpread({}, acc), _defineProperty({}, keysMap[key] || key, obj[key]));
        }, {});
        receiver.label = receiver.user.name;
        return receiver;
      });
    },
    formatDepartmentForTree: function formatDepartmentForTree(array) {
      var keysMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        users: "children"
      };
      return array.map(function (obj) {
        var department = Object.keys(obj).reduce(function (acc, key) {
          return _objectSpread(_objectSpread({}, acc), _defineProperty({}, keysMap[key] || key, obj[key]));
        }, {});
        department.children = this.formatKeys(department.children, {
          id: "id",
          name: "label"
        });
        return department;
      }, this);
    }
  },
  computed: {
    viewerQuery: function viewerQuery() {
      return "search=document_id:".concat(this.documentId, "&with=user");
    },
    hanlderQuery: function hanlderQuery() {
      return "search=document_id:".concat(this.documentId, ";view_only:false&with=user&searchJoin=and");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Recipients",
  props: {
    documentId: {
      required: true
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      // define the default value
      organizes: [],
      // define options
      organizeOptions: []
    };
  },
  watch: {
    documentId: {
      handler: function handler() {
        this.init();
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fetchOrganizes();

                _this.fetchRecipients();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchOrganizes: function fetchOrganizes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var organizesResponse, organizes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].publisher.all();

              case 2:
                organizesResponse = _context2.sent;
                organizes = _this2.formatKeys(organizesResponse.data, {
                  id: "id",
                  name: "label"
                });
                _this2.organizeOptions = organizes;
                return _context2.abrupt("return", organizes);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchRecipients: function fetchRecipients() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var recipientResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].recipient.all("search=document_id:".concat(_this3.documentId));

              case 2:
                recipientResponse = _context3.sent;
                _this3.organizes = recipientResponse.data.map(function (recipient) {
                  return recipient.organize_id;
                });
                return _context3.abrupt("return", recipientResponse);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    addRecipient: function addRecipient(item) {
      var _this4 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].recipient.create({
        organize_id: item.id,
        document_id: this.documentId
      })["catch"](function (error) {
        _this4.toastHttpError(error);
      });
    },
    removeRecipient: function removeRecipient(item) {
      var _this5 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].recipient.deletes("document_id=".concat(this.documentId, "&organize_id=").concat(item.id))["catch"](function (error) {
        _this5.toastHttpError(error);
      });
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/factory */ "./resources/js/src/services/factory.js");
/* harmony import */ var _components_document_Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/document/Detail */ "./resources/js/src/components/document/Detail.vue");
/* harmony import */ var _components_document_Attachments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/document/Attachments */ "./resources/js/src/components/document/Attachments.vue");
/* harmony import */ var _components_document_Receivers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/document/Receivers */ "./resources/js/src/components/document/Receivers.vue");
/* harmony import */ var _components_document_Recipients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/document/Recipients */ "./resources/js/src/components/document/Recipients.vue");
/* harmony import */ var _components_document_CLinkDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/document/CLinkDocument */ "./resources/js/src/components/document/CLinkDocument.vue");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Document",
  components: {
    CDetail: _components_document_Detail__WEBPACK_IMPORTED_MODULE_2__["default"],
    CAttachments: _components_document_Attachments__WEBPACK_IMPORTED_MODULE_3__["default"],
    CReceivers: _components_document_Receivers__WEBPACK_IMPORTED_MODULE_4__["default"],
    CRecipients: _components_document_Recipients__WEBPACK_IMPORTED_MODULE_5__["default"],
    CLinkDocument: _components_document_CLinkDocument__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      documentId: "",
      document: {}
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.params && route.params.document) {
          this.documentId = route.params.document;
          this.init();
        }
      }
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.fetch();
    },
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var documentResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(_this.documentId)["catch"](function (error) {
                  _this.toastHttpError(error);

                  _this.goBack();
                });

              case 2:
                documentResponse = _context.sent;
                _this.document = documentResponse.data;

              case 4:
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
    onUpdateDetail: function onUpdateDetail(document) {
      this.document = document;
    },
    redirectTo: function redirectTo(id) {
      this.$router.push({
        path: "/documents/".concat(id)
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    isDocumentOutcome: function isDocumentOutcome() {
      return this.document.book_id == 2;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("CCardHeader", [_c("strong", [_vm._v("Văn bản liên kết")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CRow",
            { staticClass: "form-group" },
            [
              !_vm.isOutcome
                ? _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c("label", [_vm._v("Văn bản đến")]),
                      _vm._v(" "),
                      _c("treeselect", {
                        attrs: { multiple: false, options: _vm.documents },
                        on: {
                          "search-change": _vm.fetchDocuments,
                          select: _vm.linkTo,
                          deselect: _vm.unLinkTo
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "value-label",
                              fn: function(ref) {
                                var node = ref.node
                                return _c("div", {}, [
                                  _vm._v(
                                    _vm._s(
                                      node.raw.label ||
                                        _vm.getSymbol(node.raw.id)
                                    )
                                  )
                                ])
                              }
                            }
                          ],
                          null,
                          false,
                          3231288896
                        ),
                        model: {
                          value: _vm.linkToDocument,
                          callback: function($$v) {
                            _vm.linkToDocument = $$v
                          },
                          expression: "linkToDocument"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isOutcome
                ? _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c("label", [_vm._v("Danh sách đã liên kết")]),
                      _vm._v(" "),
                      _c("treeselect", {
                        attrs: {
                          options: _vm.linkedDocuments,
                          multiple: true,
                          openOnClick: false,
                          disabled: "",
                          placeholder: ""
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "value-label",
                              fn: function(ref) {
                                var node = ref.node
                                return _c(
                                  "CButton",
                                  {
                                    staticClass: "btn-link p-0",
                                    attrs: { size: "sm", variant: "ghost" },
                                    on: {
                                      click: function($event) {
                                        return _vm.redirectToDocument(
                                          node.raw.id
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(node.raw.label))]
                                )
                              }
                            }
                          ],
                          null,
                          false,
                          3155884177
                        ),
                        model: {
                          value: _vm.documentsLinked,
                          callback: function($$v) {
                            _vm.documentsLinked = $$v
                          },
                          expression: "documentsLinked"
                        }
                      })
                    ],
                    1
                  )
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
                                                node.raw.signer
                                                  ? node.raw.label +
                                                      " - " +
                                                      node.raw.signer
                                                        .description
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
          _c(
            "CButton",
            {
              staticClass: "float-right",
              attrs: { type: "submit", size: "sm", color: "success" },
              on: { click: _vm.updateDocument }
            },
            [
              _c("CIcon", { attrs: { name: "cil-check" } }),
              _vm._v(" Lưu\n    ")
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
      _c("CCardHeader", [_c("strong", [_vm._v("Người nhận")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CRow",
            { staticClass: "form-group" },
            [
              _c(
                "CCol",
                { attrs: { sm: "12" } },
                [
                  _c("treeselect", {
                    attrs: {
                      multiple: true,
                      options: _vm.viewerOptions,
                      clearable: false
                    },
                    on: { select: _vm.addViewer, deselect: _vm.removeViewer },
                    model: {
                      value: _vm.viewers,
                      callback: function($$v) {
                        _vm.viewers = $$v
                      },
                      expression: "viewers"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("CCardHeader", [_c("strong", [_vm._v("Nơi nhận")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CRow",
            { staticClass: "form-group" },
            [
              _c(
                "CCol",
                { attrs: { sm: "12" } },
                [
                  _c("treeselect", {
                    attrs: {
                      multiple: true,
                      options: _vm.organizeOptions,
                      clearable: false
                    },
                    on: {
                      select: _vm.addRecipient,
                      deselect: _vm.removeRecipient
                    },
                    model: {
                      value: _vm.organizes,
                      callback: function($$v) {
                        _vm.organizes = $$v
                      },
                      expression: "organizes"
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
          },
          update: _vm.onUpdateDetail
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
      !_vm.isDocumentOutcome
        ? _c("CReceivers", {
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
        : _vm._e(),
      _vm._v(" "),
      _vm.isDocumentOutcome
        ? _c("CRecipients", {
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
        : _vm._e(),
      _vm._v(" "),
      _c("CLinkDocument", {
        attrs: { isOutcome: _vm.isDocumentOutcome, documentId: _vm.documentId },
        on: {
          "update:documentId": function($event) {
            _vm.documentId = $event
          },
          "update:document-id": function($event) {
            _vm.documentId = $event
          },
          redirectTo: _vm.redirectTo
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

/***/ "./resources/js/src/components/document/CLinkDocument.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/document/CLinkDocument.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CLinkDocument.vue?vue&type=template&id=2b37ee44& */ "./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44&");
/* harmony import */ var _CLinkDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CLinkDocument.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CLinkDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/CLinkDocument.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CLinkDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CLinkDocument.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/CLinkDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CLinkDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CLinkDocument.vue?vue&type=template&id=2b37ee44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/CLinkDocument.vue?vue&type=template&id=2b37ee44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLinkDocument_vue_vue_type_template_id_2b37ee44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/components/document/Recipients.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/document/Recipients.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recipients.vue?vue&type=template&id=1050371e& */ "./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e&");
/* harmony import */ var _Recipients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipients.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Recipients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/Recipients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Recipients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Recipients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Recipients.vue?vue&type=template&id=1050371e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/Recipients.vue?vue&type=template&id=1050371e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipients_vue_vue_type_template_id_1050371e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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