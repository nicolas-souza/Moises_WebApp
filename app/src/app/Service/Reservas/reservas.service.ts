import { DtoReserva } from './../../Model/Reservas/DtoReserva.model';
import { Reserva } from './../../Model/Reservas/Reserva.model';
import { LocalStorageService } from './../LocalStorage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url = "https://localhost:44320/api/Reservas/";

  constructor(
    private httpClient : HttpClient,
    private lS: LocalStorageService
  ) { }

  getReservas(){
    return this.httpClient.get<Reserva[]>(this.url)
  }

  getReservasUsuario(){
    return this.httpClient.get<Reserva[]>(this.url+"reservasUsuario/apiKey="+this.lS.getApiKey())
  }

  getReservaId(id: string){
    return this.httpClient.get<Reserva>(this.url+this.lS.getApiKey())
  }

  postNovaReserva (obj: any){
    return this.httpClient.post(this.url+"apiKey?apiKey="+this.lS.getApiKey(),obj)
  }

  deletarReserva(id: any){
    return this.httpClient.delete(this.url+"apiKey="+this.lS.getApiKey()+"/id="+id)
  }




}
