import { DtoReserva } from './../../Model/Reservas/DtoReserva.model';
import { Reserva } from './../../Model/Reservas/Reserva.model';
import { LocalStorageService } from './../LocalStorage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url = "https://localhost:7180/api/Reservas";

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

  postNovaReserva (obj: DtoReserva){
    return this.httpClient.post(this.url+this.lS.getApiKey(), obj)
  }



}
