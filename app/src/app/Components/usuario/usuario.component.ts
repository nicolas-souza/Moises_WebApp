import { ReservasService } from 'src/app/Service/Reservas/reservas.service';
import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private reservaService: ReservasService,
              public route: Router,) { }

  reservas = new Array();
  flag = false;
  erro = false;

  ngOnInit(): void {
    this.erro=false;
    this.getReservas()
  }

  getReservas (){

    this.reservaService.getReservasUsuario().subscribe(
                                                data => {this.reservas = data;},
                                                erro => {},
                                                () => {this.flag = true}
                                                );

  }

  excluirReserva(item: any){

    this.flag = false;

    this.reservaService.deletarReserva(item.id).subscribe(
      next => {this.ngOnInit();},
      erro => {this.erro=true},
      () => {}
      );

  }

  adicionaZero(numero: any){
    if (numero <= 9)
        return "0" + numero;
    else
        return numero;
  }

  getData (obj: string){
    let data = new Date(obj);
    let dataFormatada =  (this.adicionaZero(data.getDate().toString()) + "/" + (this.adicionaZero(data.getMonth()+1).toString()) + "/" +
                                                data.getFullYear() + " " + this.adicionaZero(data.getHours())+":"+ this.adicionaZero(data.getMinutes())+"h");
    return dataFormatada;

  }

}
