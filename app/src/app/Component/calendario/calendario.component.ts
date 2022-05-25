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
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {

  calendarOptions: CalendarOptions = {
    locales: [ ptLocale],
    locale: 'pt',
    plugins: [ timeGridPlugin, bootstrap5Plugin ],
    initialView: 'timeGridWeek',

    events: [
      {

        title: 'event 1',
        start: '2022-05-28 18:30',
        end:'2022-05-28 19:45',
        color: "red",

      },
      {

        title: 'evento',
        start: '2022-05-27 09:30',
        end:'2022-05-27 10:45',
        backgroundColor:'blue',
      },

    ],

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

}
