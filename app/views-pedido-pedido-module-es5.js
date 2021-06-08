(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pedido-pedido-module"], {
    /***/
    "GX6E":
    /*!**************************************************!*\
      !*** ./src/app/views/pedido/pedido.component.ts ***!
      \**************************************************/

    /*! exports provided: PedidoComponent */

    /***/
    function GX6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PedidoComponent", function () {
        return PedidoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pedido.component.html */
      "epm8");
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

      var PedidoComponent = /*#__PURE__*/function () {
        function PedidoComponent(ApiService, toastr) {
          _classCallCheck(this, PedidoComponent);

          this.ApiService = ApiService;
          this.toastr = toastr;
          this.carregando = false;
          this.upcarregando = false;
          this.produtoEscolhido = '';
          this.pedido = [];
          this.valortotal = 0;
          this.quantidade = 0;
          this.produtostela = [];
          this.parametroCriar = {
            "cliente_id": '',
            "valortotal": 0,
            "produtos": []
          };
          this.cliente = [{
            "id": "1",
            "name": "name"
          }];
          this.produto = [{
            "id": "1",
            "name": "name",
            "valor": 0
          }];
        }

        _createClass(PedidoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.carregando = true;
            this.buscaPedido();
            this.buscarClientes();
            this.buscarProdutos();
          }
        }, {
          key: "buscaPedido",
          value: function buscaPedido() {
            var _this = this;

            this.ApiService.listPedido().subscribe(function (retorno) {
              _this.pedido = retorno;
              _this.carregando = false;
            });
          }
        }, {
          key: "excluir",
          value: function excluir(id) {
            var _this2 = this;

            this.carregando = true;
            this.ApiService.delPedido(id).subscribe(function (returno) {
              _this2.toastr.success("Pedido Deletado com sucesso", "Pedido");

              _this2.buscaPedido();
            });
          }
        }, {
          key: "buscarClientes",
          value: function buscarClientes() {
            var _this3 = this;

            this.ApiService.listCliente().subscribe(function (retorno) {
              _this3.cliente = retorno;
            });
          }
        }, {
          key: "buscarProdutos",
          value: function buscarProdutos() {
            var _this4 = this;

            this.ApiService.listProduto().subscribe(function (retorno) {
              _this4.produto = retorno;
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

            if (this.parametroCriar.cliente_id == '' || this.valortotal == 0 || this.produtostela == []) {
              this.toastr.error('Campos obrigatorio vazio', 'Erro');
              return null;
            }

            this.upcarregando = true;
            this.parametroCriar.produtos = this.produtostela;
            this.parametroCriar.valortotal = this.valortotal;
            this.ApiService.addPedido(this.parametroCriar).subscribe(function (retorno) {
              if (retorno.error) {
                _this5.toastr.error(retorno.error, 'Erro!!');

                _this5.upcarregando = false;
                return null;
              }

              _this5.toastr.success("Pedido Criado com sucesso n\ Valor total: " + _this5.valortotal, 'Sucesso!!');

              _this5.upcarregando = false;
              _this5.carregando = true;

              _this5.buscaPedido();

              _this5.primaryModal2.hide();
            });
          }
        }, {
          key: "addProduto",
          value: function addProduto() {
            var _this6 = this;

            var name = '';
            var valor = 0;

            if (this.produtoEscolhido == '' || this.quantidade == 0) {
              this.toastr.error('Campos Produto ou quantidade vazio', 'Erro');
              return null;
            }

            this.produto.forEach(function (pro) {
              if (pro.id == _this6.produtoEscolhido) {
                name = pro.name;
                valor = pro.valor;
              }
            });

            if (this.produtostela == []) {
              this.produtostela = [{
                "name": name,
                "valor": this.quantidade * valor,
                "quantidade": this.quantidade,
                "produto_id": this.produtoEscolhido
              }];
            } else {
              this.produtostela.push({
                "name": name,
                "valor": this.quantidade * valor,
                "quantidade": this.quantidade,
                "produto_id": this.produtoEscolhido
              });
            }

            this.valortotal = this.valortotal + this.quantidade * valor;
          }
        }]);

        return PedidoComponent;
      }();

      PedidoComponent.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      PedidoComponent.propDecorators = {
        primaryModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['primaryModal']
        }],
        primaryModal2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['primaryModal2']
        }]
      };
      PedidoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], PedidoComponent);
      /***/
    },

    /***/
    "XajH":
    /*!*******************************************************!*\
      !*** ./src/app/views/pedido/pedido-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PedidoRoutingModule */

    /***/
    function XajH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PedidoRoutingModule", function () {
        return PedidoRoutingModule;
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


      var _pedido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pedido.component */
      "GX6E");

      var routes = [{
        path: '',
        component: _pedido_component__WEBPACK_IMPORTED_MODULE_3__["PedidoComponent"],
        data: {
          title: 'Pedido'
        }
      }];

      var PedidoRoutingModule = function PedidoRoutingModule() {
        _classCallCheck(this, PedidoRoutingModule);
      };

      PedidoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PedidoRoutingModule);
      /***/
    },

    /***/
    "epm8":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pedido/pedido.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function epm8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<bullet-list-content-loader *ngIf=\"carregando\"></bullet-list-content-loader>\n<div class=\"row\" *ngIf=\"!carregando\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> Produtos\n        <button type=\"button\" class=\"btn btn-primary float-right btn-sm\" (click)=\"criar()\">+ Novo Pedido</button>\n      </div>\n      <div class=\"card-body\">\n        <table class=\"table table-bordered table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>ID Pedido</th>\n              <th>ID do Cliente</th>\n              <th>Nome do Produto</th>\n              <th>Quantidade</th>\n              <th>Valor Unitario</th>\n              <th>Valor Total</th>\n              <th>Ações</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pedidos of pedido\">\n              <td>{{pedidos?.id_pedido}}</td>\n              <td>{{pedidos?.id_cliente}}</td>\n              <td>{{pedidos?.nome_produto}}</td>\n              <td>{{pedidos?.quantidade}}</td>\n              <td>{{pedidos?.valor | currency:'BRL'}}</td>\n              <td>{{pedidos?.valor_total | currency:'BRL'}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"excluir(pedidos?.id_pedido)\">Excluir</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <p>OBS: Pedidos sepados pelo \"ID Pedido\"</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #primaryModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Fazer Pedido</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal2.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <bullet-list-content-loader *ngIf=\"upcarregando\"></bullet-list-content-loader>\n      <form (ngSubmit)=\"criarModal()\" *ngIf=\"!upcarregando\">\n      <div class=\"modal-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Cliente</span>\n            </div>\n            <select name=\"cliente_id\" [(ngModel)]=\"parametroCriar.cliente_id\" class=\"form-control\">\n              <option value=\"null\" [disabled]=\"true\" >Selecione o Cliente</option>\n              <option *ngFor=\"let cat of cliente\" [value]=\"cat.id\">{{cat.name}}</option>\n            </select>\n          </div>\n          <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Selecionar produto</span>\n          </div>\n          <select name=\"produtoEscolhido\" [(ngModel)]=\"produtoEscolhido\" class=\"form-control\">\n            <option value=\"null\" [disabled]=\"true\" >Selecione o Produto</option>\n            <option *ngFor=\"let cat of produto\" [value]=\"cat.id\">{{cat.name}}</option>\n          </select>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Quantidade do Produto</span>\n            </div>\n            <input id=\"quantidade\" name=\"quantidade\" [(ngModel)]=\"quantidade\" type=\"number\" class=\"form-control\"  required>\n          </div>\n          <button type=\"button\" (click)=\"addProduto()\" class=\"btn btn-secondary float-right\" >Adiconar Produto</button>\n          <!-- <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Valor R$</span>\n            </div>\n            <input id=\"valor\" name=\"valor\" [(ngModel)]=\"parametroCriar.valor\" type=\"number\" class=\"form-control\" required>\n          </div> -->\n          <p>Valor Total : {{ valortotal | currency:'BRL'}}</p>\n          <p>Produtos:</p>\n\n          <div *ngIf=\"produtostela != []\">\n            <p *ngFor=\"let cat of produtostela\">\n              Nome do Produto: {{cat.name}}, Valor: {{cat.valor| currency:'BRL'}}, Qtd: {{cat.quantidade}}\n            </p>\n          </div>  \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal2.hide()\">Fechar</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n      </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
      /***/
    },

    /***/
    "sy/r":
    /*!***********************************************!*\
      !*** ./src/app/views/pedido/pedido.module.ts ***!
      \***********************************************/

    /*! exports provided: PedidoModule */

    /***/
    function syR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PedidoModule", function () {
        return PedidoModule;
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


      var _pedido_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pedido.component */
      "GX6E");
      /* harmony import */


      var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pedido-routing.module */
      "XajH");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var PedidoModule = function PedidoModule() {
        _classCallCheck(this, PedidoModule);
      };

      PedidoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__["ContentLoaderModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _pedido_routing_module__WEBPACK_IMPORTED_MODULE_8__["PedidoRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()],
        declarations: [_pedido_component__WEBPACK_IMPORTED_MODULE_7__["PedidoComponent"]]
      })], PedidoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pedido-pedido-module-es5.js.map