import { Injectable } from '@angular/core';
import { Merchant } from '../models/merchant';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { of } from 'rxjs'

const headers= new HttpHeaders({ 'Content-Type':'application/json'});


@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private custUrl='http://localhost:8085/capstore/api/v1/merchants/all';
  merchants:Merchant[];

  constructor(private http: HttpClient) { }

  getMerchants(): Observable<Merchant[]>
 {

  console.log(('Merchants here!!'+this.http.get<Merchant[]>(this.custUrl+'/all')));
  return this.http.get<Merchant[]>(this.custUrl);
  
 }


 deleteMerchant(merchantId:number) :Observable<Merchant[]>
 {
  this.custUrl=this.custUrl+'/'+merchantId;
  return this.http.delete<Merchant[]>(this.custUrl);
 }

 verifyMerchant(merchantId:number):Observable<boolean>
 {
   console.log(merchantId);
   return this.http.get<boolean>('http://localhost:8085/capstore/api/v1/merchantVerification/'+merchantId);
 }
 
 inviteMerchant(merchantMailID:string):Observable<boolean>{
  return this.http.post<boolean>("http://localhost:8085/capstore/api/v1/inviteMerchant",merchantMailID);
 }

  
}
