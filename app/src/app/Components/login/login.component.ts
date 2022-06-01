import { Router } from '@angular/router';
import { Acesso } from './../../Model/Auth/Acesso.model';
import { LocalStorageService } from './../../Service/LocalStorage/local-storage.service';
import { AuthService } from './../../Service/Auth/auth.service';
import { Login } from 'src/app/Model/Auth/Login.model';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  acesso: any;

  constructor(private authService: AuthService,
              private lS: LocalStorageService,
              private route: Router
              ) { }

  ngOnInit(): void {
  }

  login(form : NgForm){
    this.getAcesso(form.value.inputEmail, form.value.inputSenha)
  }

  getAcesso(email: string, senha: string){
    let obj = new Login(email, senha)

    var aux = this.authService.login(obj).subscribe(
      data => this.acesso = data,
      err => this.route.navigate(['/login']),
      ()=>{this.lS.setAcesso(this.acesso); this.route.navigate(['/home'])}
    )
  }

}
