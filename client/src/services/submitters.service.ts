import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class SubmittersService {
  http: Http;
  constructor(public httpService: Http) {
    this.http = httpService;
  }

  getSubmitters(): Observable<any[]> {
    return this.http
      .get("http://localhost:3000/submitters")
      .map((responseData) => responseData.json());
  }

  addSubmitter(submitter) {
    //this.elencoArticoli.push(articolo)      
  }
} 