import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Person} from "./person";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PersonService {

  private url = 'http://localhost:8080/person';

  constructor(private httpClient: HttpClient) { }

  search(searchTerm: string): Observable<Person[]> {
    let options = {};
    if (searchTerm !== undefined) {
      options = {params: new HttpParams().set('name', searchTerm)};
    }
    return this.httpClient.get<Person[]>(this.url, options).map(persons => persons.map(person => new Person(person)));
  }

}
