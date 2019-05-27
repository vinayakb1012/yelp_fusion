import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

bearerToken =
'rtNRtupZZTzmapVn603RDquqLl7Rmcy2uCFDFHccjBH-iCsSyAvA--1nJZO7KeFZUz3yTZWGlQadHDVSeSCitGHCdUHnyrAeHx-OvNhYcBFtG-c9f6EuFJF-mvTqXHYx';

endpoint = 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + this.bearerToken
  }),
  params: {
    location: 'NYC',
    term: 'restaurant'
  }
};

  constructor(private http: HttpClient, ) {
    // this.httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   }

  getNYCrestos(): Observable<any> {
    return this.http.get(this.endpoint, this.httpOptions);
  }

}
