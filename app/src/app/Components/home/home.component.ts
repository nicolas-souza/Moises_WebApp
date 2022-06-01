import { LocalStorageService } from './../../Service/LocalStorage/local-storage.service';
import { ReservasService } from './../../Service/Reservas/reservas.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapseReserva = true;

  reservas = new Array();

  flag = false;

  constructor(
    private reservaService: ReservasService,
    private LocalStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getReservas()
    console.log(this.LocalStorageService.getApiKey())
  }

  registrarReserva(form: any){

  }

  getReservas (){

    this.reservaService.getReservas().subscribe(
                                                data => {this.reservas = data;},
                                                erro => {},
                                                () => {this.flag = true}
                                                );

  }





}
