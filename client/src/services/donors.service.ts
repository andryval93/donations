import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class DonorsService {
  http: Http;
  constructor(public httpService: Http) {
    this.http = httpService;
  }

  getDonors(): Observable<any[]> {
    return this.http
      .get("http://localhost:3000/donors")
      .map((responseData) => responseData.json());
  }

  getDonorsOfState(state): Observable<any[]>{
    return this.http
    .get("http://localhost:3000/donors/"+state)
    .map((responseData) => responseData.json());
  }

  getAmountOfState(donorsID): Observable<number> {
    return this.http
      .get("http://localhost:3000/donetions/"+donorsID)
      .map((responseData) => responseData.json());
  }

  getValueDonetions(): Observable<any>{
    return this.http
      .get("http://localhost:3000/donetions/")
      .map((responseData) => responseData.json());
  }

  getNumberOfTeacher(isTeacher): Observable<any>{
    return this.http
      .get("http://localhost:3000/donors/"+isTeacher+"/countTheacherofCity")
      .map((responseData) => responseData.json());
  }
} 