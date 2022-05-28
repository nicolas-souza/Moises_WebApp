import { DtoUsuario } from './../../Model/Usuario/DtoUsuario.model';
import { Usuario } from './../../Model/Usuario/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url= ""

  constructor(
    private httpClient : HttpClient,
    private lS: LocalStorageService) { }

    getUsuarios(){
      return this.httpClient.get<Usuario[]>(this.url+this.lS.getApiKey())
    }

    postUsuario(obj: DtoUsuario){
      return this.httpClient.post(this.url+this.lS.getApiKey(), obj)
    }
}
