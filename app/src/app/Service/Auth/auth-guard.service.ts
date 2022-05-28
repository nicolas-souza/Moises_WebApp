import { LocalStorageService } from './../LocalStorage/local-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private LS: LocalStorageService,
    private route: Router
  ){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    if(this.LS.getAuth()){

      return true;

    }

    this.route.navigate(['/login']);

    return false;
  }

}
