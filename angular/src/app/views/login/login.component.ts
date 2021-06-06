import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  carregando = false;
  constructor(private ApiService: ApiService,private toastr: ToastrService,private route: Router){
  }
  parametro = {"email": '',"password": '' }

  login(){
    this.carregando = true;
    if(this.parametro.email == ''){
      this.toastr.error('Campo Email obrigatório!', 'Erro!');
      this.carregando = false;
      return null;
    }else if(this.parametro.password == ''){
      this.toastr.error('Campo Senha obrigatório!', 'Erro!!');
      this.carregando = false;
      return null;
    }
    this.ApiService.login(this.parametro).subscribe(retorno =>{
        if(retorno.error){
          this.toastr.error(retorno.error, 'Erro!!');
          this.carregando = false;
          return null;
      }

      sessionStorage.setItem("token",retorno.access_token);
      this.route.navigate(['/dashboard']);
      this.carregando = false;
    })
  
  }

}
