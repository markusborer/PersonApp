import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import {PersonService} from "./shared/person.service";
import {HttpClientModule} from "@angular/common/http";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {LoginService} from "./shared/login.service";
import { LoginComponent } from './login/login.component';
import {AuthGardService} from "./shared/auth-gard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PersonService,
    LoginService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
