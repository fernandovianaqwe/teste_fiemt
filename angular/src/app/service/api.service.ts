import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

}
