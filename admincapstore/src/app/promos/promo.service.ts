import { Injectable } from '@angular/core';
import { Promos } from '../models/Promos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  _url: string = "http://localhost:8085/capstore/api/v1/inventories";
  constructor(private _http:HttpClient) { }

  addPromo(promo: Promos): Observable<Boolean> {
    return this._http.post<Boolean>(this._url + '/promo', promo);
  }
 
}
