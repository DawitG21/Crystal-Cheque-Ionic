import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../providers/api.provider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Ijournal } from '../providers/journalclass';

/*
  Generated class for the JournalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JournalProvider {

    journals : Ijournal[];
  

  constructor(public _http: Http, public apiProvider : ApiProvider) {
    console.log('Hello JournalProvider Provider');
  }

/*   getJournal(): Observable<Ijournal[]>{
      return this._http.get()
      .map((res : Response)=> <Ijournal> res.json());
  } */

}