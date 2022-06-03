import { Injectable, Input, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-calendario',
//   templateUrl: './calendario.component.html',
//   styleUrls: ['./calendario.component.scss']
// })
// export class CalendarioComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!


import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { ReservasService } from 'src/app/Service/Reservas/reservas.service';
import { Evento } from 'src/app/Model/FullCalendar/Evento.model';
import { Reserva } from 'src/app/Model/Reservas/Reserva.model';



@Component({

  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']

})

export class CalendarioComponent implements OnInit{


  constructor(private reservaService: ReservasService) { const name = Calendar.name; }


  @Input() reservas = new Array();

  eventos = this.eventoCalendario(this.reservas);




  calendarOptions: CalendarOptions = {
    locales: [ ptLocale],
    locale: 'pt',
    plugins: [ timeGridPlugin, bootstrap5Plugin ],
    initialView: 'timeGridWeek',
    nowIndicator: true,
    themeSystem: '',

    events: this.eventos,
    

    titleFormat: {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },

    headerToolbar: {

      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: '',
      right: 'prev,today,next'

    },

  };

  ngOnInit(): void {

    this.calendarOptions.events = this.eventoCalendario(this.reservas)

  }



  eventoCalendario(reservas: Reserva[]){

    let lstEventos = new Array();

    for (let index = 0; index < reservas.length; index++) {

     const element = reservas[index];

     let evento = new Evento(element);

     lstEventos.push(evento)

    }

    return (lstEventos);


   }



}
