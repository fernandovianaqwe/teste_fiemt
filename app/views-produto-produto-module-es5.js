(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-produto-produto-module"], {
    /***/
    "XVJB":
    /*!*********************************************************!*\
      !*** ./src/app/views/produto/produto-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProdutoRoutingModule */

    /***/
    function XVJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoRoutingModule", function () {
        return ProdutoRoutingModule;
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


      var _produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produto.component */
      "aj/U");

      var routes = [{
        path: '',
        component: _produto_component__WEBPACK_IMPORTED_MODULE_3__["ProdutoComponent"],
        data: {
          title: 'Produto'
        }
      }];

      var ProdutoRoutingModule = function ProdutoRoutingModule() {
        _classCallCheck(this, ProdutoRoutingModule);
      };

      ProdutoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProdutoRoutingModule);
      /***/
    },

    /***/
    "aj/U":
    /*!****************************************************!*\
      !*** ./src/app/views/produto/produto.component.ts ***!
      \****************************************************/

    /*! exports provided: ProdutoComponent */

    /***/
    function ajU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function () {
        return ProdutoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_Produto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./Produto.component.html */
      "dRCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/api.service */
      "PLN7");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var ProdutoComponent = /*#__PURE__*/function () {
        function ProdutoComponent(ApiService, toastr) {
          _classCallCheck(this, ProdutoComponent);

          this.ApiService = ApiService;
          this.toastr = toastr;
          this.carregando = false;
          this.upcarregando = false;
          this.produto = [];
          this.parametro = {
            "id": '',
            "name": '',
            "categoria": '',
            "descricao": '',
            "valor": ''
          };
          this.parametroCriar = {
            "name": '',
            "categoria": '',
            "descricao": '',
            "valor": ''
          };
          this.categoria = [{
            "id": '1',
            "name": "Categoria 01"
          }, {
            "id": '2',
            "name": "Categoria 02"
          }, {
            "id": '3',
            "name": "Categoria 03"
          }, {
            "id": '4',
            "name": "Categoria 04"
          }, {
            "id": '5',
            "name": "Categoria 05"
          }];
        }

        _createClass(ProdutoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.carregando = true;
            this.buscaProduto();
          }
        }, {
          key: "buscaProduto",
          value: function buscaProduto() {
            var _this = this;

            this.ApiService.listProduto().subscribe(function (retorno) {
              _this.produto = retorno;
              _this.carregando = false;
            });
          }
        }, {
          key: "excluir",
          value: function excluir(id) {
            var _this2 = this;

            this.carregando = true;
            this.ApiService.delProduto(id).subscribe(function (returno) {
              _this2.toastr.success("Produto Deletado com sucesso", "Produto");

              _this2.buscaProduto();
            });
          }
        }, {
          key: "update",
          value: function update(id) {
            var _this3 = this;

            this.produto.forEach(function (pro) {
              if (pro.id == id) {
                _this3.parametro.id = pro.id;
                _this3.parametro.name = pro.name;
                _this3.parametro.categoria = pro.categoria;
                _this3.parametro.descricao = pro.descricao;
                _this3.parametro.valor = pro.valor;
              }
            });
            this.primaryModal.show();
          }
        }, {
          key: "updateProduto",
          value: function updateProduto() {
            var _this4 = this;

            if (this.parametro.name == '' || this.parametro.descricao == '' || this.parametro.valor == '' || typeof this.parametro.categoria === 'undefined') {
              this.toastr.error('Campos obrigatorio vazio', 'Erro');
              return null;
            }

            this.upcarregando = true;
            this.ApiService.updateProduto(this.parametro).subscribe(function (retorno) {
              if (retorno.error) {
                _this4.toastr.error(retorno.error, 'Erro!!');

                _this4.upcarregando = false;
                return null;
              }

              _this4.toastr.success("Produto Alterado com sucesso", 'Sucesso!!');

              _this4.upcarregando = false;
              _this4.carregando = true;

              _this4.buscaProduto();

              _this4.primaryModal.hide();
            });
          }
        }, {
          key: "criar",
          value: function criar() {
            this.primaryModal2.show();
          }
        }, {
          key: "criarModal",
          value: function criarModal() {
            var _this5 = this;

            if (this.parametroCriar.name == '' || this.parametroCriar.descricao == '' || this.parametroCriar.valor == '' || typeof this.parametro.categoria === 'undefined') {
              this.toastr.error('Campos obrigatorio vazio', 'Erro');
              return null;
            }

            this.upcarregando = true;
            this.ApiService.addProduto(this.parametroCriar).subscribe(function (retorno) {
              if (retorno.error) {
                _this5.toastr.error(retorno.error, 'Erro!!');

                _this5.upcarregando = false;
                return null;
              }

              _this5.toastr.success("Produto Criado com sucesso", 'Sucesso!!');

              _this5.upcarregando = false;
              _this5.carregando = true;

              _this5.buscaProduto();

              _this5.primaryModal2.hide();
            });
          }
        }]);

        return ProdutoComponent;
      }();

      ProdutoComponent.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      ProdutoComponent.propDecorators = {
        primaryModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['primaryModal']
        }],
        primaryModal2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['primaryModal2']
        }]
      };
      ProdutoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Produto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], ProdutoComponent);
      /***/
    },

    /***/
    "dRCC":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/produto/Produto.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function dRCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<bullet-list-content-loader *ngIf=\"carregando\"></bullet-list-content-loader>\n<div class=\"row\" *ngIf=\"!carregando\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> Produtos\n        <button type=\"button\" class=\"btn btn-primary float-right btn-sm\" (click)=\"criar()\">+ Novo</button>\n      </div>\n      <div class=\"card-body\">\n        <table class=\"table table-bordered table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Nome</th>\n              <th>Categoria</th>\n              <th>Descrição</th>\n              <th>Valor</th>\n              <th>Ações</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let produtos of produto\">\n              <td>{{produtos?.id}}</td>\n              <td>{{produtos?.name}}</td>\n              <td>{{produtos?.categoria_id}}</td>\n              <td>{{produtos?.descricao}}</td>\n              <td>{{produtos?.valor | currency:'BRL'}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"update(produtos?.id)\">Editar</button> \n                | \n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"excluir(produtos?.id)\">Excluir</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Editar Produto</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <bullet-list-content-loader *ngIf=\"upcarregando\"></bullet-list-content-loader>\n      <form (ngSubmit)=\"updateProduto()\" *ngIf=\"!upcarregando\">\n      <div class=\"modal-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Nome do Produto</span>\n            </div>\n            <input id=\"name\" name=\"name\" [(ngModel)]=\"parametro.name\" value=\"parametro.name\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Categoria</span>\n            </div>\n            <select name=\"categoria\" [(ngModel)]=\"parametro.categoria\" class=\"form-control\">\n              <option value=\"null\" [disabled]=\"true\" >Selecione a Categoria</option>\n              <option *ngFor=\"let cat of categoria\" [value]=\"cat.id\">{{cat.name}}</option>\n            </select>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Descrição</span>\n            </div>\n            <input id=\"descricao\" name=\"descricao\" [(ngModel)]=\"parametro.descricao\" value=\"parametro.descricao\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Valor R$</span>\n            </div>\n            <input id=\"valor\" name=\"valor\" [(ngModel)]=\"parametro.valor\" value=\"parametro.valor\" type=\"number\" class=\"form-control\" required>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Fechar</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n      </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #primaryModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Cadastrar Produto</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal2.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <bullet-list-content-loader *ngIf=\"upcarregando\"></bullet-list-content-loader>\n      <form (ngSubmit)=\"criarModal()\" *ngIf=\"!upcarregando\">\n      <div class=\"modal-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Nome do Produto</span>\n            </div>\n            <input id=\"name\" name=\"name\" [(ngModel)]=\"parametroCriar.name\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Categoria</span>\n            </div>\n            <select name=\"categoria\" [(ngModel)]=\"parametroCriar.categoria\" placeholder=\"Selecione a Categoria\" class=\"form-control\">\n              <option *ngFor=\"let cat of categoria\" [value]=\"cat.id\" [selected]=\"cat.id == parametro.categoria\" >{{cat.name}}</option>\n            </select>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Descrição</span>\n            </div>\n            <input id=\"descricao\" name=\"descricao\" [(ngModel)]=\"parametroCriar.descricao\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Valor R$</span>\n            </div>\n            <input id=\"valor\" name=\"valor\" [(ngModel)]=\"parametroCriar.valor\" type=\"number\" class=\"form-control\" required>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal2.hide()\">Fechar</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n      </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
      /***/
    },

    /***/
    "hsCb":
    /*!*************************************************!*\
      !*** ./src/app/views/produto/produto.module.ts ***!
      \*************************************************/

    /*! exports provided: ProdutoModule */

    /***/
    function hsCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoModule", function () {
        return ProdutoModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "aHM3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./produto.component */
      "aj/U");
      /* harmony import */


      var _produto_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./produto-routing.module */
      "XVJB");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");

      var ProdutoModule = function ProdutoModule() {
        _classCallCheck(this, ProdutoModule);
      };

      ProdutoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__["ContentLoaderModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _produto_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProdutoRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()],
        declarations: [_produto_component__WEBPACK_IMPORTED_MODULE_7__["ProdutoComponent"], _produto_component__WEBPACK_IMPORTED_MODULE_7__["ProdutoComponent"]]
      })], ProdutoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-produto-produto-module-es5.js.map