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
} 