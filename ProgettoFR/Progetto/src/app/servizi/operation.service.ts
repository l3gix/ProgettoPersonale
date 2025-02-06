import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from '../model/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  url : string ="http://localhost:8080/op/";
  constructor(private http : HttpClient) { 

  }

  findOperation(id : number)
  {
    const params = new HttpParams().set('id',id);
    
    return this.http.get(`${this.url}operation`,{params})
  }

  newOperation(opp : Operation)
  {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    const body = JSON.stringify({
      data : opp.getData(),
      importo : opp.getImporto(),
      id : opp.getId()
    });

    return this.http.post(`${this.url}newoperation`,body,{ headers });
  }
}
