import { Reserva } from './../Reservas/Reserva.model';
export class Evento {

  title: string = "";
  start: string = "";
  end: string = "";
  color: string = "";

  constructor(reserva: Reserva){

    this.title = reserva.tituloReserva;
    this.start = reserva.inicioReserva;
    this.end = reserva.fimReserva;

    this.color = this.opcoesCor();

  }

  opcoesCor (){

    let possiveisCores = ["red", "blue", "green", "gray", "black"];

    let corSelecionada = possiveisCores[Math.floor(Math.random() * possiveisCores.length)]

    return corSelecionada

  }

}
