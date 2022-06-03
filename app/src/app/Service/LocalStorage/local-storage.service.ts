import { Acesso } from './../../Model/Auth/Acesso.model';
import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public acesso: any

  constructor() { }

  setAcesso(acesso: Acesso){
    localStorage.setItem('acesso', JSON.stringify(acesso))
  }

  getAcesso(){
    this.acesso = localStorage.getItem('acesso')

    let aux = JSON.parse(this.acesso)

    return aux

  }

  getApiKey(){
    this.acesso = localStorage.getItem('acesso')

    let aux = JSON.parse(this.acesso)

    return aux.apiKey
  }

  getNivelDeAcesso(){

    this.acesso = localStorage.getItem('acesso')

    let aux = JSON.parse(this.acesso)

    return aux.nivelDeAcesso

  }

  getAuth(){

    this.acesso = localStorage.getItem('acesso')

    if(this.acesso == null){
      return false;
    }

    return true;
  }

  getAuthNivelDeAcesso(){

    if(!(this.getNivelDeAcesso() == null)){
      if(this.getNivelDeAcesso()=='admin')
        return true;
    }


    return false;
  }

  clearStorage() {

    localStorage.clear();

  }

}
