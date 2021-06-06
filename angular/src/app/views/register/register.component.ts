import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  carregando = false;
  constructor(private ApiService: ApiService,private toastr: ToastrService, private route: Router){
  }

  parametro = {
              "name": '',
              "email": '',
              "password": '',
              "password2": ''  
              };

  cadastro(){
    this.carregando = true;
    if(this.parametro.name == '' || this.parametro.email == '' || this.parametro.password == '' || this.parametro.password2 == ''){
      this.toastr.error('Preencha todos os Campos!', 'Erro!');
      this.carregando = false;
      return null;
    }else if (this.parametro.password != this.parametro.password2){
      this.toastr.error('As Senhas não confere!', 'Erro!');
      this.carregando = false;
      return null;
    }

    this.ApiService.cadasta(this.parametro).subscribe(retorno =>{
      if(retorno.error){
        this.toastr.error(retorno.error, 'Erro!!');
        this.carregando = false;
        return null;
      }
      this.toastr.success("Conta Criado com sucesso", 'Erro!!');
      this.route.navigate(['']);
      this.carregando = false;
    })

  }

}
