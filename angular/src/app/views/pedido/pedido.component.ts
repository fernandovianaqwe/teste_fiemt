import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'pedido.component.html'
})
export class PedidoComponent implements OnInit {
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('primaryModal2') public primaryModal2: ModalDirective;
  constructor(private ApiService: ApiService,private toastr: ToastrService){
  }
  carregando = false;
  upcarregando = false;
  produtoEscolhido = '';
  pedido = [];
  valortotal = 0;
  quantidade = 0;
  produtostela = [];

  parametroCriar = {
        "cliente_id": '',
        "valortotal": 0,
        "produtos": []
  };

  cliente = [{
    "id": "1",
    "name": "name"
  }];

  produto = [{
    "id": "1",
    "name": "name",
    "valor": 0
  }];

  ngOnInit(): void {
    this.carregando = true;
    this.buscaPedido();
    this.buscarClientes();
    this.buscarProdutos();
    }

  buscaPedido(){
    this.ApiService.listPedido().subscribe(retorno => {
      this.pedido = retorno;
      this.carregando = false;
    })
  }

  excluir(id){
    this.carregando = true;
    this.ApiService.delPedido(id).subscribe(returno =>{
      this.toastr.success("Pedido Deletado com sucesso", "Pedido");
      this.buscaPedido();
    })
  }

  buscarClientes(){
    this.ApiService.listCliente().subscribe(retorno => {
      this.cliente = retorno;
    })
  }

  buscarProdutos(){
    this.ApiService.listProduto().subscribe(retorno => {
      this.produto = retorno;
    })
  }


  criar(){
    this.primaryModal2.show()
  }

  criarModal(){
    if(this.parametroCriar.cliente_id == '' || this.valortotal == 0 || this.produtostela == []){
      this.toastr.error('Campos obrigatorio vazio','Erro');
      return null;
    }
    this.upcarregando = true;
    this.parametroCriar.produtos = this.produtostela;
    this.parametroCriar.valortotal = this.valortotal;
    this.ApiService.addPedido(this.parametroCriar).subscribe(retorno => {
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.upcarregando = false;
        return null;
      }
      this.toastr.success("Pedido Criado com sucesso n\ Valor total: " + this.valortotal, 'Sucesso!!');
      this.upcarregando = false;
      this.carregando = true;
      this.buscaPedido();
      this.primaryModal2.hide()
    })

  }

  addProduto(){
    var name = '';
    var valor = 0;
    if(this.produtoEscolhido == '' || this.quantidade == 0){
      this.toastr.error('Campos Produto ou quantidade vazio','Erro');
      return null;
    }
    this.produto.forEach(pro =>{
      if(pro.id == this.produtoEscolhido){
        name = pro.name;
        valor = pro.valor;
      }
    })
    if(this.produtostela == []){
      this.produtostela =[
        {
          "name": name,
          "valor": this.quantidade * valor,
          "quantidade": this.quantidade,
          "produto_id": this.produtoEscolhido
        }
      ]
    }else{
      this.produtostela.push( {
        "name": name,
        "valor": this.quantidade * valor,
        "quantidade": this.quantidade,
        "produto_id": this.produtoEscolhido
      })
    }

    this.valortotal = this.valortotal + (this.quantidade * valor);
    
  }
}
