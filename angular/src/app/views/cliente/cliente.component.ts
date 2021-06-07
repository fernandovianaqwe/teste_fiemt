import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'cliente.component.html'
})
export class ClienteComponent implements OnInit {
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('primaryModal2') public primaryModal2: ModalDirective;
  constructor(private ApiService: ApiService,private toastr: ToastrService){
  }
  carregando = false;
  upcarregando = false;
  cliente = [];
  parametro = {
        "id": '',
        "name": '',
        "data": ''
  };
  parametroCriar = {
        "name": '',
        "data": ''
  };
  ngOnInit(): void {
    this.carregando = true;
    this.buscaCliente();
    }

  buscaCliente(){
    this.ApiService.listCliente().subscribe(retorno => {
      this.cliente = retorno;
      this.carregando = false;
    })
  }

  excluir(id){
    this.carregando = true;
    this.ApiService.delCliente(id).subscribe(returno =>{
      this.toastr.success("Cliente Deletado com sucesso", "Cliente");
      this.buscaCliente();
    })
  }

  update(id){
    this.cliente.forEach(pro =>{
      if(pro.id == id){
        this.parametro.id = pro.id;
        this.parametro.name = pro.name;
        this.parametro.data = pro.categoria;
      }
    })
    this.primaryModal.show()
  }

  updateCliente(){
    if(this.parametro.name == null || this.parametro.data == null){
      this.toastr.error('Campos obrigatorio vazio','Erro');
      return null;
    }
    this.upcarregando = true;
    this.ApiService.updateCliente(this.parametro).subscribe(retorno => {
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.upcarregando = false;
        return null;
      }
      this.toastr.success("Cliente Alterado com sucesso", 'Sucesso!!');
      this.upcarregando = false;
      this.carregando = true;
      this.buscaCliente();
      this.primaryModal.hide()
    })

  }

  criar(){
    this.primaryModal2.show()
  }

  criarModal(){
    if(this.parametroCriar.name == '' || this.parametroCriar.data == ''){
      this.toastr.error('Campos obrigatorio vazio','Erro');
      return null;
    }
    this.upcarregando = true;
    this.ApiService.addCliente(this.parametroCriar).subscribe(retorno => {
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.upcarregando = false;
        return null;
      }
      this.toastr.success("Cliente Criado com sucesso", 'Sucesso!!');
      this.upcarregando = false;
      this.carregando = true;
      this.buscaCliente();
      this.primaryModal2.hide()
    })

  }
}
