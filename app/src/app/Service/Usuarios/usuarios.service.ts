import { DtoUsuario } from './../../Model/Usuario/DtoUsuario.model';
import { Usuario } from './../../Model/Usuario/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url= "https://localhost:44320/api/Usuarios/"

  constructor(
    private httpClient : HttpClient,
    private lS: LocalStorageService) { }

    getUsuarios(){
      return this.httpClient.get<Usuario[]>(this.url+"apiKey="+this.lS.getApiKey())
    }

    postUsuario(obj: any){
      return this.httpClient.post(this.url+"apiKey?apiKey="+this.lS.getApiKey(), obj)
    }

    deletarUsuario(id: any){
      return this.httpClient.delete(this.url+"apiKey="+this.lS.getApiKey()+"/id="+id)
    }
}
