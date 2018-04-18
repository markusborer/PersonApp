import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['login', { needsLogin: true }])
    }
    return true;
  }

}
