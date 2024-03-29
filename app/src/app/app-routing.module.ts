import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Service/Auth/auth-guard.service';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},

  {path:'login', component: LoginComponent},

  {path:'usuario', component: UsuarioComponent, canActivate:[AuthGuardService]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
