import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  needsLogin: boolean;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(
      params => {
        this.needsLogin = params['needsLogin'] === 'true';
      }
    )
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
    this.router.navigate(['home']);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['home']);
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

}
