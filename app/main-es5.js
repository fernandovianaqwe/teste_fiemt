(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\fiemt\angular\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0kjc":
    /*!********************************!*\
      !*** ./src/app/guard/guard.ts ***!
      \********************************/

    /*! exports provided: AuthGuardService */

    /***/
    function kjc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(route) {
          _classCallCheck(this, AuthGuardService);

          this.route = route;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!sessionStorage.getItem("token")) {
              return this.route.navigate(['']);
            }

            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuardService);
      /***/
    },

    /***/
    "4XPS":
    /*!******************************************************!*\
      !*** ./src/app/views/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/api.service */
      "PLN7");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(ApiService, toastr, route) {
          _classCallCheck(this, RegisterComponent);

          this.ApiService = ApiService;
          this.toastr = toastr;
          this.route = route;
          this.carregando = false;
          this.parametro = {
            "name": '',
            "email": '',
            "password": '',
            "password2": ''
          };
        }

        _createClass(RegisterComponent, [{
          key: "cadastro",
          value: function cadastro() {
            var _this = this;

            this.carregando = true;

            if (this.parametro.name == '' || this.parametro.email == '' || this.parametro.password == '' || this.parametro.password2 == '') {
              this.toastr.error('Preencha todos os Campos!', 'Erro!');
              this.carregando = false;
              return null;
            } else if (this.parametro.password != this.parametro.password2) {
              this.toastr.error('As Senhas não confere!', 'Erro!');
              this.carregando = false;
              return null;
            }

            this.ApiService.cadasta(this.parametro).subscribe(function (retorno) {
              if (retorno.error) {
                _this.toastr.error(retorno.error, 'Erro!!');

                _this.carregando = false;
                return null;
              }

              _this.toastr.success("Conta Criado com sucesso", 'Erro!!');

              _this.route.navigate(['']);

              _this.carregando = false;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], RegisterComponent);
      /***/
    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent(route) {
          _classCallCheck(this, DefaultLayoutComponent);

          this.route = route;
          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }, {
          key: "sair",
          value: function sair() {
            sessionStorage.removeItem("token");
            this.route.navigate(['']);
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DefaultLayoutComponent);
      /***/
    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "PLN7":
    /*!****************************************!*\
      !*** ./src/app/service/api.service.ts ***!
      \****************************************/

    /*! exports provided: ApiService */

    /***/
    function PLN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(httpClient) {
          _classCallCheck(this, ApiService);

          this.httpClient = httpClient;
          this.apiUrl = 'http://fiemt.api/api/';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          this.httpOptions2 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            })
          };
        }

        _createClass(ApiService, [{
          key: "login",
          value: function login(parametro) {
            return this.httpClient.post(this.apiUrl + 'login', parametro, this.httpOptions);
          }
        }, {
          key: "cadasta",
          value: function cadasta(parametro) {
            return this.httpClient.post(this.apiUrl + 'cadastro', parametro, this.httpOptions);
          } //produto

        }, {
          key: "listProduto",
          value: function listProduto() {
            return this.httpClient.get(this.apiUrl + 'auth/listprodutos', this.httpOptions2);
          }
        }, {
          key: "delProduto",
          value: function delProduto(id) {
            return this.httpClient["delete"](this.apiUrl + 'auth/delprodutos?id=' + id, this.httpOptions2);
          }
        }, {
          key: "updateProduto",
          value: function updateProduto(parametro) {
            return this.httpClient.put(this.apiUrl + 'auth/updateprodutos?id=' + parametro.id + '&name=' + parametro.name + '&categoria=' + parametro.categoria + '&descricao=' + parametro.descricao + '&valor=' + parametro.valor, '', this.httpOptions2);
          }
        }, {
          key: "addProduto",
          value: function addProduto(parametro) {
            return this.httpClient.post(this.apiUrl + 'auth/addprodutos', parametro, this.httpOptions2);
          } //cliente

        }, {
          key: "listCliente",
          value: function listCliente() {
            return this.httpClient.get(this.apiUrl + 'auth/listcliente', this.httpOptions2);
          }
        }, {
          key: "delCliente",
          value: function delCliente(id) {
            return this.httpClient["delete"](this.apiUrl + 'auth/delcliente?id=' + id, this.httpOptions2);
          }
        }, {
          key: "updateCliente",
          value: function updateCliente(parametro) {
            return this.httpClient.put(this.apiUrl + 'auth/updatecliente?id=' + parametro.id + '&name=' + parametro.name + '&data=' + parametro.data, '', this.httpOptions2);
          }
        }, {
          key: "addCliente",
          value: function addCliente(parametro) {
            return this.httpClient.post(this.apiUrl + 'auth/addcliente', parametro, this.httpOptions2);
          } //pedido

        }, {
          key: "listPedido",
          value: function listPedido() {
            return this.httpClient.get(this.apiUrl + 'auth/listpedido', this.httpOptions2);
          }
        }, {
          key: "delPedido",
          value: function delPedido(id) {
            return this.httpClient["delete"](this.apiUrl + 'auth/delpedido?id=' + id, this.httpOptions2);
          }
        }, {
          key: "addPedido",
          value: function addPedido(parametro) {
            return this.httpClient.post(this.apiUrl + 'auth/addpedido', parametro, this.httpOptions2);
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/api.service */
      "PLN7");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(ApiService, toastr, route) {
          _classCallCheck(this, LoginComponent);

          this.ApiService = ApiService;
          this.toastr = toastr;
          this.route = route;
          this.carregando = false;
          this.parametro = {
            "email": '',
            "password": ''
          };
        }

        _createClass(LoginComponent, [{
          key: "login",
          value: function login() {
            var _this2 = this;

            this.carregando = true;

            if (this.parametro.email == '') {
              this.toastr.error('Campo Email obrigatório!', 'Erro!');
              this.carregando = false;
              return null;
            } else if (this.parametro.password == '') {
              this.toastr.error('Campo Senha obrigatório!', 'Erro!!');
              this.carregando = false;
              return null;
            }

            this.ApiService.login(this.parametro).subscribe(function (retorno) {
              if (retorno.error) {
                _this2.toastr.error(retorno.error, 'Erro!!');

                _this2.carregando = false;
                return null;
              }

              sessionStorage.setItem("token", retorno.access_token);

              _this2.route.navigate(['/dashboard']);

              _this2.carregando = false;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LoginComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");
      /* harmony import */


      var _guard_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./guard/guard */
      "0kjc");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutComponent"]]; // Import routing module
      // Import 3rd party components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_21__["ContentLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_17__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot()],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]]),
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
        }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"], _guard_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bVw4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <bullet-list-content-loader *ngIf=\"carregando\"></bullet-list-content-loader>\n              <form (ngSubmit)=\"cadastro()\" *ngIf=\"!carregando\">\n                <h1>Cadastre-se</h1>\n                <p class=\"text-muted\">crie sua conta</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input id=\"name\" name=\"name\" [(ngModel)]=\"parametro.name\" type=\"text\" class=\"form-control\" placeholder=\"Nome\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input id=\"email\" name=\"email\" [(ngModel)]=\"parametro.email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input id=\"password\" name=\"password\" [(ngModel)]=\"parametro.password\" type=\"password\" class=\"form-control\" placeholder=\"Senha\" autocomplete=\"new-password\" required>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input id=\"password2\" name=\"password2\" [(ngModel)]=\"parametro.password2\" type=\"password\" class=\"form-control\" placeholder=\"Confirmar Senha\" autocomplete=\"new-password\" required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-block btn-success\">Criar Conta</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./guard/guard */
      "0kjc"); // Import Containers


      var routes = [{
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: '',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
          title: 'Login'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        data: {
          title: 'Cadastro'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Painel'
        },
        children: [{
          path: 'produto',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-produto-produto-module */
            [__webpack_require__.e("default~views-cliente-cliente-module~views-dashboard-dashboard-module~views-pedido-pedido-module~vie~4e671a63"), __webpack_require__.e("default~views-cliente-cliente-module~views-pedido-pedido-module~views-produto-produto-module"), __webpack_require__.e("views-produto-produto-module")]).then(__webpack_require__.bind(null,
            /*! ./views/produto/produto.module */
            "hsCb")).then(function (m) {
              return m.ProdutoModule;
            });
          },
          canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-cliente-cliente-module~views-dashboard-dashboard-module~views-pedido-pedido-module~vie~4e671a63"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          },
          canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
        }, {
          path: 'cliente',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-cliente-cliente-module */
            [__webpack_require__.e("default~views-cliente-cliente-module~views-dashboard-dashboard-module~views-pedido-pedido-module~vie~4e671a63"), __webpack_require__.e("default~views-cliente-cliente-module~views-pedido-pedido-module~views-produto-produto-module"), __webpack_require__.e("views-cliente-cliente-module")]).then(__webpack_require__.bind(null,
            /*! ./views/cliente/cliente.module */
            "iIRT")).then(function (m) {
              return m.ClienteModule;
            });
          },
          canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
        }, {
          path: 'pedido',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-pedido-pedido-module */
            [__webpack_require__.e("default~views-cliente-cliente-module~views-dashboard-dashboard-module~views-pedido-pedido-module~vie~4e671a63"), __webpack_require__.e("default~views-cliente-cliente-module~views-pedido-pedido-module~views-produto-produto-module"), __webpack_require__.e("views-pedido-pedido-module")]).then(__webpack_require__.bind(null,
            /*! ./views/pedido/pedido.module */
            "sy/r")).then(function (m) {
              return m.PedidoModule;
            });
          },
          canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        title: true,
        name: 'Produto'
      }, {
        name: 'Cadastro de Produto',
        url: '/produto',
        icon: 'icon-basket-loaded'
      }, {
        title: true,
        name: 'Clientes'
      }, {
        name: 'Cadastro de Cliente',
        url: '/cliente',
        icon: 'icon-user'
      }, {
        title: true,
        name: 'Pedidos'
      }, {
        name: 'Fazer Pedidos',
        url: '/pedido',
        icon: 'icon-bag'
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.png', width: 89, height: 25, alt: 'Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  \n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item d-md-down-none\">\n        <button type=\"button\" (click)=\"sair()\" class=\"btn btn-danger px-4\">Logout</button>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <cui-breadcrumb>\n      <!-- Breadcrumb Menu-->\n    </cui-breadcrumb>\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<app-breadcrumb></app-breadcrumb>-->\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        <!--</div>-->\n      <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  <!-- <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"list-group list-group-accent\">\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Today</div>\n          <div class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Meeting with\n              <strong>Lucas</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-info\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Skype with\n              <strong>Megan</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 5pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-social-skype\"></i>  On-line</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Tomorrow</div>\n          <div class=\"list-group-item list-group-item-accent-danger list-group-item-divider\">\n            <div>New UI Project -\n              <strong>deadline</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  10 - 11pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-success list-group-item-divider\">\n            <div>\n              <strong>#10 Startups.Garden</strong> Meetup</div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-primary list-group-item-divider\">\n            <div>\n              <strong>Team meeting</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 6pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/8.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\n        <div class=\"p-3\">\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\n        <div class=\"p-3\">\n          <h6>Settings</h6>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-4\">\n              <small><b>Option 1</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 2</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 3</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 4</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n          </div>\n          <hr>\n          <h6>System Utilization</h6>\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">243GB/256GB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">25GB/256GB</small>\n        </div>\n      </tab>\n    </tabset>\n  </app-aside> -->\n</div>\n<app-footer>\n  <span><a href=\"https://coreui.io\">CoreUI</a> &copy; 2021 creativeLabs.</span>\n  <span class=\"ml-auto\">Powered by <a href=\"https://coreui.io/angular\">CoreUI for Angular</a></span>\n</app-footer>\n";
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <bullet-list-content-loader *ngIf=\"carregando\"></bullet-list-content-loader>\n                <form (ngSubmit)=\"login()\" *ngIf=\"!carregando\">\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Faça login em sua conta</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input id=\"email\" name=\"email\" [(ngModel)]=\"parametro.email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input id=\"password\" name=\"password\" [(ngModel)]=\"parametro.password\" type=\"password\" class=\"form-control\" placeholder=\"Senha\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\" class=\"btn btn-primary px-4\">Entrar</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Cadastre-se</h2>\n                  <p>Teste Fiemt - Desenvolvedor Web.</p>\n                  <a href=\"#/register\" class=\"btn btn-primary active mt-3\">Cadastre-se!</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map