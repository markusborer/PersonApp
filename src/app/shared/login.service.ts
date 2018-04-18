import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private loggedIn: boolean = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
