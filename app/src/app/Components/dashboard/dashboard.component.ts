import { Usuario } from './../../Model/Usuario/Usuario.model';

import { NgForm } from '@angular/forms';
import { UsuariosService } from './../../Service/Usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { DtoUsuario } from 'src/app/Model/Usuario/DtoUsuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  usuarios = new Array()

  erro = false;

  collapseNovoUsuario = true;

  ngOnInit(): void {
    this.erro = false
    this.getUsuarios()
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data => {this.usuarios=data})
  }

  registrarNovoUsuario(form: NgForm){

    this.erro = false

    let novoUsuario = new DtoUsuario();
        novoUsuario.nome = form.value.nomeUsuario;
        novoUsuario.senha = form.value.senhaUsuario;
        novoUsuario.email = form.value.emailUsuario;
        novoUsuario.nivelDeAcesso = form.value.nivelDeAcessoUsuario;

        if (novoUsuario.nome != "" && novoUsuario.email != "" && novoUsuario.nivelDeAcesso != "" && novoUsuario.senha != ""){
          this.usuarioService.postUsuario(novoUsuario).subscribe(data => {this.collapseNovoUsuario = true; this.getUsuarios()}, erro => {this.erro = true});
        }

        this.erro = true;

  }

  removerUsuario(user: Usuario){
    this.usuarioService.deletarUsuario(user.id).subscribe(
      next => {this.getUsuarios()},
      erro => {},
      () => {}
      );
  }

}
