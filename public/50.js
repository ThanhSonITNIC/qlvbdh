(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

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
      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].recipient.create({
        organize_id: item.id,
        document_id: this.documentId
      });
    },
    removeRecipient: function removeRecipient(item) {
      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].recipient.deletes("document_id=".concat(this.documentId, "&organize_id=").concat(item.id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js& ***!
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
      });
    },
    addViewer: function addViewer(item) {
      var _this7 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.creates(_objectSpread(_objectSpread({}, _defineProperty({}, item.children ? "department_id" : "user_id", item.id)), {}, {
        document_id: this.documentId
      })).then(function (response) {
        _this7.fetchReceivers();
      });
    },
    onHandlerDeselected: function onHandlerDeselected(item) {
      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        view_only: true
      }, item.id);
    },
    onHandlerSelected: function onHandlerSelected(item) {
      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].receiver.update({
        view_only: false
      }, item.id);
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
  },
  watch: {}
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
/* harmony import */ var _components_document_TreeReceivers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/document/TreeReceivers */ "./resources/js/src/components/document/TreeReceivers.vue");
/* harmony import */ var _components_document_Recipients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/document/Recipients */ "./resources/js/src/components/document/Recipients.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Document",
  components: {
    CDetail: _components_document_Detail__WEBPACK_IMPORTED_MODULE_2__["default"],
    CAttachments: _components_document_Attachments__WEBPACK_IMPORTED_MODULE_3__["default"],
    CReceivers: _components_document_TreeReceivers__WEBPACK_IMPORTED_MODULE_4__["default"],
    CRecipients: _components_document_Recipients__WEBPACK_IMPORTED_MODULE_5__["default"]
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
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var documentResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].document.get(_this.documentId);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672& ***!
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
                { attrs: { sm: "6" } },
                [
                  _c("label", [_vm._v("Chọn xem")]),
                  _vm._v(" "),
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
              ),
              _vm._v(" "),
              _c(
                "CCol",
                { attrs: { sm: "6" } },
                [
                  _c("label", [_vm._v("Chọn xử lý")]),
                  _vm._v(" "),
                  _c("treeselect", {
                    attrs: {
                      multiple: true,
                      options: _vm.handlerOptions,
                      clearable: false
                    },
                    on: {
                      select: _vm.onHandlerSelected,
                      deselect: _vm.onHandlerDeselected
                    },
                    model: {
                      value: _vm.handlers,
                      callback: function($$v) {
                        _vm.handlers = $$v
                      },
                      expression: "handlers"
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
        : _vm._e()
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

/***/ "./resources/js/src/components/document/TreeReceivers.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/document/TreeReceivers.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeReceivers.vue?vue&type=template&id=055cb672& */ "./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672&");
/* harmony import */ var _TreeReceivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeReceivers.vue?vue&type=script&lang=js& */ "./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TreeReceivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/document/TreeReceivers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeReceivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeReceivers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/TreeReceivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeReceivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeReceivers.vue?vue&type=template&id=055cb672& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/document/TreeReceivers.vue?vue&type=template&id=055cb672&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeReceivers_vue_vue_type_template_id_055cb672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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