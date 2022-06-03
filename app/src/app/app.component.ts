import { Router } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LocalStorageService } from './Service/LocalStorage/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private ls: LocalStorageService, private router: Router){}

  authSimples:any;

  authAdmin: any;

  onActivate(event: Event){

    if(!(this.ls.getAcesso() == null)){
      this.authSimples = this.ls.getAuth();
      this.authAdmin = this.ls.getAuthNivelDeAcesso();
    }

    if(this.router.url == "/login") {
      this.authSimples = false;
      this.authAdmin = false;
    }

  }




}
