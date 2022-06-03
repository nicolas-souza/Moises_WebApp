import { NgForm } from '@angular/forms';
import { DtoReserva } from './../../Model/Reservas/DtoReserva.model';
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

  erro = false;

  auth: any;

  constructor(
    private reservaService: ReservasService,
    private lS: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.auth = this.lS.getAuth();
    this.erro = false;
    this.getReservas()

  }

  registrarReserva(form: NgForm){

    let obj = new DtoReserva()
      obj.tituloReserva = form.value.tituloReserva
      obj.senhaReserva = form.value.senhaReserva
      obj.fimReserva = form.value.finalReserva
      obj.inicioReserva = form.value.inicioReserva

      if((obj.fimReserva > obj.inicioReserva)&&(  obj.tituloReserva != "" && obj.senhaReserva != ""))
      {
        this.reservaService.postNovaReserva(obj).subscribe(
          next => {this.ngOnInit()},
          err => {this.erro = true},
          () => { this.collapseReserva = true;
            form.onReset();})
            this.flag = false;
      } else {
        this.erro = true;
      }



  }

  getReservas (){

    this.reservaService.getReservas().subscribe(
                                                data => {this.reservas = data;},
                                                erro => {this.erro = true},
                                                () => {this.flag = true}
                                                );

  }





}
