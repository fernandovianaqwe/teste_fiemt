import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'Produto.component.html'
})
export class ProdutoComponent implements OnInit {
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('primaryModal2') public primaryModal2: ModalDirective;
  constructor(private ApiService: ApiService,private toastr: ToastrService){
  }
  carregando = false;
  upcarregando = false;
  produto = [];
  parametro = {
        "id": '',
        "name": '',
        "categoria": '',
        "descricao": '',
        "valor": ''
  };
  parametroCriar = {
        "name": '',
        "categoria": '',
        "descricao": '',
        "valor": ''
  };
  categoria = [
          {
        "id": '1',
        "name": "Categoria 01"
          },
          {
        "id": '2',
        "name": "Categoria 02"
          },
          {
        "id": '3',
        "name": "Categoria 03"
          },
          {
        "id": '4',
        "name": "Categoria 04"
          },
          {
        "id": '5',
        "name": "Categoria 05"
          }
];
  ngOnInit(): void {
    this.carregando = true;
    this.buscaProduto();
    }

  buscaProduto(){
    this.ApiService.listProduto().subscribe(retorno => {
      this.produto = retorno;
      this.carregando = false;
    })
  }

  excluir(id){
    this.carregando = true;
    this.ApiService.delProduto(id).subscribe(returno =>{
      this.toastr.success("Produto Deletado com sucesso", "Produto");
      this.buscaProduto();
    })
  }

  update(id){
    this.produto.forEach(pro =>{
      if(pro.id == id){
        this.parametro.id = pro.id;
        this.parametro.name = pro.name;
        this.parametro.categoria = pro.categoria;
        this.parametro.descricao = pro.descricao;
        this.parametro.valor = pro.valor;
      }
    })
    this.primaryModal.show()
  }

  updateProduto(){
    if(this.parametro.name == '' || this.parametro.descricao == '' || this.parametro.valor == '' || typeof this.parametro.categoria === 'undefined'){
      this.toastr.error('Campos obrigatorio vazio','Erro');
      return null;
    }
    this.upcarregando = true;
    this.ApiService.updateProduto(this.parametro).subscribe(retorno => {
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.upcarregando = false;
        return null;
      }
      this.toastr.success("Produto Alterado com sucesso", 'Sucesso!!');
      this.upcarregando = false;
      this.carregando = true;
      this.buscaProduto();
      this.primaryModal.hide()
    })

  }

  criar(){
    this.primaryModal2.show()
  }

  criarModal(){
    if(this.parametroCriar.name == '' || this.parametroCriar.descricao == '' || this.parametroCriar.valor == '' || typeof this.parametro.categoria === 'undefined'){
      this.toastr.error('Campos obrigatorio vazio','Erro');
      return null;
    }
    this.upcarregando = true;
    this.ApiService.addProduto(this.parametroCriar).subscribe(retorno => {
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.upcarregando = false;
        return null;
      }
      this.toastr.success("Produto Criado com sucesso", 'Sucesso!!');
      this.upcarregando = false;
      this.carregando = true;
      this.buscaProduto();
      this.primaryModal2.hide()
    })

  }
}
