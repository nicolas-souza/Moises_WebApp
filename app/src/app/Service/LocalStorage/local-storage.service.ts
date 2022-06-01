import { Acesso } from './../../Model/Auth/Acesso.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public acesso: any

  constructor() { }

  setAcesso(acesso: Acesso){
    localStorage.setItem('acesso', JSON.stringify(acesso))
  }

  getApiKey(){
    this.acesso = localStorage.getItem('acesso')

    let aux = JSON.parse(this.acesso)

    return aux
  }

  getNivelDeAcesso(){

    this.acesso = localStorage.getItem('acesso')

    let aux = JSON.parse(this.acesso)

    return aux[0].nivelDeAcesso
  }

  getAuth(){

    this.acesso = localStorage.getItem('acesso')

    if(this.acesso == null){
      return false;
    }
    return true;
  }

  getAuthNivelDeAcesso(){

    if(this.getNivelDeAcesso()=='admin')
      return true;

    return false;
  }

  clearStorage() {

    localStorage.clear();

  }

}
