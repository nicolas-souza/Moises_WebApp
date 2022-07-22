import { DtoReserva } from './../../Model/Reservas/DtoReserva.model';
import { Reserva } from './../../Model/Reservas/Reserva.model';
import { LocalStorageService } from './../LocalStorage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url = "http://localhost:7070/api/Reservas/";

  constructor(
    private httpClient : HttpClient,
    private lS: LocalStorageService
  ) { }

  getReservas(){
    return this.httpClient.get<Reserva[]>(this.url)
  }

  getReservasUsuario(){
    return this.httpClient.get<Reserva[]>(this.url+"reservasUsuario/"+this.lS.getApiKey())
  }

  getReservaId(id: string){
    return this.httpClient.get<Reserva>(this.url+this.lS.getApiKey()+"/"+id)
  }

  postNovaReserva (obj: any){
    return this.httpClient.post(this.url+this.lS.getApiKey(),obj)
  }

  deletarReserva(id: any){
    return this.httpClient.delete(this.url+this.lS.getApiKey()+"/"+id)
  }




}
