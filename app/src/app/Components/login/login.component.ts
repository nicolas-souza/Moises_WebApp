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

  erro = false;

  constructor(private authService: AuthService,
              private lS: LocalStorageService,
              private route: Router
              ) { }

  ngOnInit(): void {
    this.lS.clearStorage();
    this.erro=false

  }

  login(form : NgForm){
    this.getAcesso(form.value.inputEmail, form.value.inputSenha)
  }

  getAcesso(email: string, senha: string){
    let obj = new Login(email, senha)

    this.authService.login(obj).subscribe(
      data =>{this.acesso = data;
              this.lS.setAcesso(this.acesso);
              if(data != null){
                this.route.navigate(['/home'])
              } else {
                this.erro = true;
              }
            },
      err => {this.erro=true;},
      ()=>{}
    )
  }

}
