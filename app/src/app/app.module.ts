import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import timeGridPlugin from '@fullcalendar/timegrid';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CalendarioComponent } from './Components/calendario/calendario.component';
import { LoginComponent } from './Components/login/login.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  bootstrap5Plugin,
]);


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    CalendarioComponent,
    LoginComponent,
    UsuarioComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    NgbModule,
    FormsModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
