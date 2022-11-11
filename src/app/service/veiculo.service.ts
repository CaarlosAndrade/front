import { Veiculo } from './../interface/veiculo.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService{
  private apiUrl = 'http://localhost:8080/';

  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:$2y$10$wLPFDidSWWE4J76eKZXkBu.8XXSHiPPySzUsiHmTkHdBSBQ970umO'),
      'Access-Control-Allow-Credentials': 'true',
      'response-type': 'text/plain'
    }) 
  }

  constructor(private _http : HttpClient) { }

  getVeiculo(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:8080/veiculos', this.httpsOptions).pipe(tap(console.log)) as Observable<any[]>
  }

  postVeiculo(veiculo: Veiculo) {
    return this._http.post(
      'http://localhost:8080/veiculos',
      veiculo,
      this.httpsOptions)
  }

  deleteVeiculo(id: number) {
    return this._http.delete(
      'http://localhost:8080/veiculos/'+ id, this.httpsOptions)
  }

  alterarVeiculo(veiculo: Veiculo, id: number){
    return this._http.put(
      'http://localhost:8080/veiculos/'+ id, veiculo ,this.httpsOptions)
  }
}