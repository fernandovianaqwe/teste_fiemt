(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cliente-cliente-module"],{

/***/ "/OAo":
/*!****************************************************!*\
  !*** ./src/app/views/cliente/cliente.component.ts ***!
  \****************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente.component.html */ "tz8v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api.service */ "PLN7");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");






let ClienteComponent = class ClienteComponent {
    constructor(ApiService, toastr) {
        this.ApiService = ApiService;
        this.toastr = toastr;
        this.carregando = false;
        this.upcarregando = false;
        this.cliente = [];
        this.parametro = {
            "id": '',
            "name": '',
            "data": ''
        };
        this.parametroCriar = {
            "name": '',
            "data": ''
        };
    }
    ngOnInit() {
        this.carregando = true;
        this.buscaCliente();
    }
    buscaCliente() {
        this.ApiService.listCliente().subscribe(retorno => {
            this.cliente = retorno;
            this.carregando = false;
        });
    }
    excluir(id) {
        this.carregando = true;
        this.ApiService.delCliente(id).subscribe(returno => {
            this.toastr.success("Cliente Deletado com sucesso", "Cliente");
            this.buscaCliente();
        });
    }
    update(id) {
        this.cliente.forEach(pro => {
            if (pro.id == id) {
                this.parametro.id = pro.id;
                this.parametro.name = pro.name;
                this.parametro.data = pro.categoria;
            }
        });
        this.primaryModal.show();
    }
    updateCliente() {
        if (this.parametro.name == null || this.parametro.data == null) {
            this.toastr.error('Campos obrigatorio vazio', 'Erro');
            return null;
        }
        this.upcarregando = true;
        this.ApiService.updateCliente(this.parametro).subscribe(retorno => {
            if (retorno.error) {
                this.toastr.error(retorno.error, 'Erro!!');
                this.upcarregando = false;
                return null;
            }
            this.toastr.success("Cliente Alterado com sucesso", 'Sucesso!!');
            this.upcarregando = false;
            this.carregando = true;
            this.buscaCliente();
            this.primaryModal.hide();
        });
    }
    criar() {
        this.primaryModal2.show();
    }
    criarModal() {
        if (this.parametroCriar.name == '' || this.parametroCriar.data == '') {
            this.toastr.error('Campos obrigatorio vazio', 'Erro');
            return null;
        }
        this.upcarregando = true;
        this.ApiService.addCliente(this.parametroCriar).subscribe(retorno => {
            if (retorno.error) {
                this.toastr.error(retorno.error, 'Erro!!');
                this.upcarregando = false;
                return null;
            }
            this.toastr.success("Cliente Criado com sucesso", 'Sucesso!!');
            this.upcarregando = false;
            this.carregando = true;
            this.buscaCliente();
            this.primaryModal2.hide();
        });
    }
};
ClienteComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
ClienteComponent.propDecorators = {
    primaryModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['primaryModal',] }],
    primaryModal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['primaryModal2',] }]
};
ClienteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], ClienteComponent);



/***/ }),

/***/ "WRB7":
/*!*********************************************************!*\
  !*** ./src/app/views/cliente/cliente-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ClienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteRoutingModule", function() { return ClienteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.component */ "/OAo");




const routes = [
    {
        path: '',
        component: _cliente_component__WEBPACK_IMPORTED_MODULE_3__["ClienteComponent"],
        data: {
            title: 'cliente'
        }
    }
];
let ClienteRoutingModule = class ClienteRoutingModule {
};
ClienteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClienteRoutingModule);



/***/ }),

/***/ "iIRT":
/*!*************************************************!*\
  !*** ./src/app/views/cliente/cliente.module.ts ***!
  \*************************************************/
/*! exports provided: ClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente.component */ "/OAo");
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cliente-routing.module */ "WRB7");
/* harmony import */ var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/content-loader */ "UT+O");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");











let ClienteModule = class ClienteModule {
};
ClienteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_9__["ContentLoaderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_8__["ClienteRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
        ],
        declarations: [_cliente_component__WEBPACK_IMPORTED_MODULE_7__["ClienteComponent"]]
    })
], ClienteModule);



/***/ }),

/***/ "tz8v":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cliente/cliente.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<bullet-list-content-loader *ngIf=\"carregando\"></bullet-list-content-loader>\n<div class=\"row\" *ngIf=\"!carregando\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> Clientes\n        <button type=\"button\" class=\"btn btn-primary float-right btn-sm\" (click)=\"criar()\">+ Novo</button>\n      </div>\n      <div class=\"card-body\">\n        <table class=\"table table-bordered table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Nome</th>\n              <th>Data de Nacimento</th>\n              <th>Ações</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let clientes of cliente\">\n              <td>{{clientes?.id}}</td>\n              <td>{{clientes?.name}}</td>\n              <td>{{clientes?.data}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"update(clientes?.id)\">Editar</button> \n                | \n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"excluir(clientes?.id)\">Excluir</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Editar Cliente</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <bullet-list-content-loader *ngIf=\"upcarregando\"></bullet-list-content-loader>\n      <form (ngSubmit)=\"updateCliente()\" *ngIf=\"!upcarregando\">\n      <div class=\"modal-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Nome do Cliente</span>\n            </div>\n            <input id=\"name\" name=\"name\" [(ngModel)]=\"parametro.name\" value=\"parametro.name\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Data de Nascimento</span>\n            </div>\n            <input id=\"data\" name=\"data\" [(ngModel)]=\"parametro.data\" value=\"parametro.data\" type=\"date\" class=\"form-control\"  required>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Fechar</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n      </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #primaryModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Cadastrar Cliente</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal2.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <bullet-list-content-loader *ngIf=\"upcarregando\"></bullet-list-content-loader>\n      <form (ngSubmit)=\"criarModal()\" *ngIf=\"!upcarregando\">\n      <div class=\"modal-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Nome do Cliente</span>\n            </div>\n            <input id=\"name\" name=\"name\" [(ngModel)]=\"parametroCriar.name\" type=\"text\" class=\"form-control\"  required>\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Data de Nascimento</span>\n            </div>\n            <input id=\"data\" name=\"data\" [(ngModel)]=\"parametroCriar.data\" type=\"date\" class=\"form-control\"  required>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal2.hide()\">Fechar</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n      </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->");

/***/ })

}]);
//# sourceMappingURL=views-cliente-cliente-module-es2015.js.map