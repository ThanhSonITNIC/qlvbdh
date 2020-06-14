(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Info.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/Info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Info",
  props: {
    userId: {
      required: true
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.usersOpened = from.fullPath.includes("users");
    });
  },
  data: function data() {
    return {
      usersOpened: null,
      user: [],
      titles: [],
      departments: []
    };
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var titleResponse, departmentResponse, userResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].title.all();

              case 2:
                titleResponse = _context.sent;
                _this.titles = _this.formatKeys(titleResponse.data);
                _context.next = 6;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].department.all();

              case 6:
                departmentResponse = _context.sent;
                _this.departments = _this.formatKeys(departmentResponse.data);
                _context.next = 10;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.get(_this.userId);

              case 10:
                userResponse = _context.sent;
                _this.user = userResponse.data;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    goBack: function goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({
        path: "/users"
      });
    },
    updateInfo: function updateInfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.update(_this2.user, _this2.userId).then(function (response) {
                  _this2.$toast.success("Đã lưu");
                })["catch"](function (error) {
                  _this2.toastHttpError(error);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Password.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/Password.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Password",
  props: {
    userId: {
      required: true
    }
  },
  data: function data() {
    return {
      password: {
        password_confirmation: "",
        password: ""
      }
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.update(_this.password, _this.userId).then(function (response) {
                  _this.$toast.success({
                    message: "Đã thay đổi",
                    type: "success"
                  });
                })["catch"](function (error) {
                  _this.toastHttpError(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js& ***!
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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TreePermission",
  props: {
    userId: {
      required: true
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      permissionOptions: [],
      permissions: []
    };
  },
  created: function created() {
    this.fetchPermissions();
    this.fetchCurrentPermissions();
  },
  methods: {
    fetchPermissions: function fetchPermissions() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var permissionResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].permission.all();

              case 2:
                permissionResponse = _context.sent;
                _this.permissionOptions = _this.formatKeys(permissionResponse.data, {
                  id: "id",
                  name: "label"
                });
                return _context.abrupt("return", permissionResponse);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchCurrentPermissions: function fetchCurrentPermissions() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var userResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.get(_this2.userId, "with=permissions");

              case 2:
                userResponse = _context2.sent;
                _this2.permissions = userResponse.data.permissions.map(function (permission) {
                  return permission.id;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addPermission: function addPermission(permission) {
      var _this3 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.givePermission(permission.id, this.userId)["catch"](function (error) {
        _this3.toastHttpError(error);
      });
    },
    removePermission: function removePermission(permission) {
      var _this4 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.revokePermission(permission.id, this.userId)["catch"](function (error) {
        _this4.toastHttpError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
 // import the component

 // import the styles


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TreeRole",
  props: {
    userId: {
      required: true
    }
  },
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      roleOptions: [],
      roles: []
    };
  },
  created: function created() {
    this.fetchRoles();
    this.fetchCurrentRoles();
  },
  methods: {
    fetchRoles: function fetchRoles() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var roleResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].role.all();

              case 2:
                roleResponse = _context.sent;
                _this.roleOptions = _this.formatKeys(roleResponse.data, {
                  id: "id",
                  name: "label"
                });
                return _context.abrupt("return", roleResponse);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchCurrentRoles: function fetchCurrentRoles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var userResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.get(_this2.userId, "with=roles");

              case 2:
                userResponse = _context2.sent;
                _this2.roles = userResponse.data.roles.map(function (role) {
                  return role.id;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addRole: function addRole(role) {
      var _this3 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.giveRole(role.id, this.userId)["catch"](function (error) {
        _this3.toastHttpError(error);
      });
    },
    removeRole: function removeRole(role) {
      var _this4 = this;

      _services_factory__WEBPACK_IMPORTED_MODULE_1__["default"].user.revokeRole(role.id, this.userId)["catch"](function (error) {
        _this4.toastHttpError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/User.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/User.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/Info */ "./resources/js/src/components/user/Info.vue");
/* harmony import */ var _components_user_Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/Password */ "./resources/js/src/components/user/Password.vue");
/* harmony import */ var _components_user_TreeRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/TreeRole */ "./resources/js/src/components/user/TreeRole.vue");
/* harmony import */ var _components_user_TreePermission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/TreePermission */ "./resources/js/src/components/user/TreePermission.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "User",
  components: {
    CInfo: _components_user_Info__WEBPACK_IMPORTED_MODULE_0__["default"],
    CPassword: _components_user_Password__WEBPACK_IMPORTED_MODULE_1__["default"],
    CRole: _components_user_TreeRole__WEBPACK_IMPORTED_MODULE_2__["default"],
    CPermission: _components_user_TreePermission__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      userId: ""
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.params && route.params.id) {
          this.userId = route.params.id;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc& ***!
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
    "CCard",
    [
      _c("CCardHeader", [_c("strong", [_vm._v("Thông tin")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CForm",
            [
              _c("CInput", {
                attrs: {
                  placeholder: "Let us know your full name.",
                  label: "Tên",
                  value: _vm.user.name,
                  horizontal: ""
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "name", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CInput", {
                attrs: {
                  label: "Email",
                  placeholder: "Enter your email",
                  type: "email",
                  value: _vm.user.email,
                  horizontal: "",
                  autocomplete: "email"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "email", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CInput", {
                attrs: {
                  label: "Số điện thoại",
                  placeholder: "Enter your tel",
                  value: _vm.user.tel,
                  horizontal: "",
                  autocomplete: "tel"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "tel", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CInput", {
                attrs: {
                  label: "Ngày sinh",
                  type: "date",
                  value: _vm.user.birthday,
                  horizontal: ""
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "birthday", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CSelect", {
                attrs: {
                  label: "Chức danh",
                  horizontal: "",
                  value: _vm.user.title_id,
                  options: _vm.titles,
                  placeholder: "Please select"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "title_id", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CSelect", {
                attrs: {
                  label: "Phòng ban",
                  horizontal: "",
                  value: _vm.user.department_id,
                  options: _vm.departments,
                  placeholder: "Please select"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.user, "department_id", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CFormGroup", {
                staticClass: "form-group form-row",
                scopedSlots: _vm._u(
                  [
                    {
                      key: "label",
                      fn: function() {
                        return [
                          _vm._t("label", [
                            _c(
                              "label",
                              { staticClass: "col-form-label col-sm-3" },
                              [_vm._v("Kích hoạt")]
                            )
                          ])
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "input",
                      fn: function() {
                        return [
                          _c("CSwitch", {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: _vm.user.active
                            },
                            on: {
                              "update:checked": function($event) {
                                return _vm.$set(_vm.user, "active", $event)
                              }
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
        "CCardFooter",
        [
          _c(
            "CButton",
            {
              attrs: { color: "primary", size: "sm" },
              on: { click: _vm.goBack }
            },
            [
              _c("CIcon", { attrs: { name: "cil-chevron-left" } }),
              _vm._v("Trở lại\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CButton",
            {
              staticClass: "float-right",
              attrs: { type: "submit", size: "sm", color: "success" },
              on: { click: _vm.updateInfo }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2& ***!
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
    "CCard",
    [
      _c("CCardHeader", [_c("strong", [_vm._v("Thay đổi mật khẩu")])]),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c(
            "CForm",
            [
              _c("CInput", {
                attrs: {
                  placeholder: "Nhập mật khẩu.",
                  label: "Mật khẩu",
                  type: "password",
                  horizontal: ""
                }
              }),
              _vm._v(" "),
              _c("CInput", {
                attrs: {
                  placeholder: "Nhập mật khẩu mới.",
                  label: "Mật khẩu mới",
                  type: "password",
                  value: _vm.password.password,
                  horizontal: ""
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.password, "password", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("CInput", {
                attrs: {
                  placeholder: "Nhập lại mật khẩu mới.",
                  label: "Xác nhận",
                  type: "password",
                  value: _vm.password.password_confirmation,
                  horizontal: ""
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(
                      _vm.password,
                      "password_confirmation",
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
        "CCardFooter",
        [
          _c(
            "CButton",
            {
              staticClass: "float-right",
              attrs: { type: "submit", size: "sm", color: "success" },
              on: { click: _vm.updatePassword }
            },
            [
              _c("CIcon", { attrs: { name: "cil-check" } }),
              _vm._v(" Thay đổi\n    ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981& ***!
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
    "CRow",
    { staticClass: "form-group" },
    [
      _c(
        "CCol",
        { attrs: { sm: "12" } },
        [
          _c("label", [_vm._v("Phân theo chức năng")]),
          _vm._v(" "),
          _c("treeselect", {
            attrs: {
              multiple: true,
              options: _vm.permissionOptions,
              clearable: false
            },
            on: { select: _vm.addPermission, deselect: _vm.removePermission },
            model: {
              value: _vm.permissions,
              callback: function($$v) {
                _vm.permissions = $$v
              },
              expression: "permissions"
            }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428& ***!
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
    "CRow",
    { staticClass: "form-group" },
    [
      _c(
        "CCol",
        { attrs: { sm: "12" } },
        [
          _c("label", [_vm._v("Phân theo nhóm")]),
          _vm._v(" "),
          _c("treeselect", {
            attrs: {
              multiple: true,
              options: _vm.roleOptions,
              clearable: false
            },
            on: { select: _vm.addRole, deselect: _vm.removeRole },
            model: {
              value: _vm.roles,
              callback: function($$v) {
                _vm.roles = $$v
              },
              expression: "roles"
            }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { col: "md-6" } },
            [_c("CInfo", { attrs: { userId: _vm.userId } })],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { col: "md-6" } },
            [_c("CPassword", { attrs: { userId: _vm.userId } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCard",
        [
          _c("CCardHeader", [_c("strong", [_vm._v("Phân quyền")])]),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { col: "6" } },
                    [_c("CRole", { attrs: { userId: _vm.userId } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { col: "6" } },
                    [_c("CPermission", { attrs: { userId: _vm.userId } })],
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/user/Info.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/components/user/Info.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info.vue?vue&type=template&id=6e1a1ebc& */ "./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc&");
/* harmony import */ var _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.vue?vue&type=script&lang=js& */ "./resources/js/src/components/user/Info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/user/Info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/user/Info.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/user/Info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Info.vue?vue&type=template&id=6e1a1ebc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Info.vue?vue&type=template&id=6e1a1ebc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_6e1a1ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/user/Password.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/user/Password.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=74760be2& */ "./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2&");
/* harmony import */ var _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&lang=js& */ "./resources/js/src/components/user/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/user/Password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/user/Password.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/user/Password.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=template&id=74760be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/Password.vue?vue&type=template&id=74760be2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_74760be2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/user/TreePermission.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/user/TreePermission.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreePermission.vue?vue&type=template&id=595ba981& */ "./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981&");
/* harmony import */ var _TreePermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreePermission.vue?vue&type=script&lang=js& */ "./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TreePermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/user/TreePermission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreePermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreePermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreePermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreePermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreePermission.vue?vue&type=template&id=595ba981& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreePermission.vue?vue&type=template&id=595ba981&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreePermission_vue_vue_type_template_id_595ba981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/user/TreeRole.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/user/TreeRole.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeRole.vue?vue&type=template&id=423eb428& */ "./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428&");
/* harmony import */ var _TreeRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeRole.vue?vue&type=script&lang=js& */ "./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TreeRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/user/TreeRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreeRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeRole.vue?vue&type=template&id=423eb428& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/user/TreeRole.vue?vue&type=template&id=423eb428&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeRole_vue_vue_type_template_id_423eb428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/views/users/User.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/users/User.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=90326dc8& */ "./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/User.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/users/User.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=90326dc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/User.vue?vue&type=template&id=90326dc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_90326dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);