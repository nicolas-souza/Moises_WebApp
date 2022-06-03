import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from 'src/app/Model/Auth/Login.model';
import { Acesso } from 'src/app/Model/Auth/Acesso.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://localhost:44320/api/Auth"

  constructor(private httpClient : HttpClient) { }

  public login(objApi: Login){

    return this.httpClient.post<Acesso>(this.url, objApi);

  }

}
