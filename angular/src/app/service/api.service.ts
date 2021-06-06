import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://fiemt.api/api/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public login(parametro: any){
      return this.httpClient.post<any>(this.apiUrl + 'login', parametro, this.httpOptions);
    }

    public cadasta(parametro: any){
      return this.httpClient.post<any>(this.apiUrl + 'cadastro', parametro, this.httpOptions);
    }

    httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      })
    };

    public listProduto(){
      return this.httpClient.get<any>(this.apiUrl + 'auth/listprodutos',this.httpOptions2);
    }
    public delProduto(id){
      return this.httpClient.delete<any>(this.apiUrl + 'auth/delprodutos?id=' + id,this.httpOptions2);
    }
    public updateProduto(parametro){
      return this.httpClient.put<any>(this.apiUrl + 'auth/updateprodutos?id=' + parametro.id + '&name=' + parametro.name + '&categoria='  + parametro.categoria + '&descricao=' + parametro.descricao + '&valor=' + parametro.valor,'',this.httpOptions2);
    }
    public addProduto(parametro){
      return this.httpClient.post<any>(this.apiUrl + 'auth/addprodutos',parametro,this.httpOptions2);
    }

}
