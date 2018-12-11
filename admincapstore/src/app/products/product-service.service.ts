import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inventory } from '../models/Inventory';
import { Observable } from 'rxjs';
import { Promos } from '../models/Promos';


const headers= new HttpHeaders({ 'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class ProductService {

inventories:Inventory[];
  private custUrl='http://localhost:8085/capstore/api/v1/viewInventories';
  constructor(private http: HttpClient) { }

 getInventories(): Observable<Inventory[]>
 {

  console.log(('Inventories here!!'+this.http.get<Inventory[]>(this.custUrl)));
  return this.http.get<Inventory[]>(this.custUrl);
  
 }

 deleteInventory(inventoryId:number) :Observable<Inventory[]>
 {
this.custUrl=this.custUrl+'/'+inventoryId;
return this.http.delete<Inventory[]>(this.custUrl);
 }

 editInventory(inventory :Inventory):Observable<Inventory[]>{
   
   return this.http.put<Inventory[]>('http://localhost:8085/capstore/api/v1/inventory',inventory,{});
  
 }

 getAllPromos():Observable<Promos[]>{
   return this.http.get<Promos[]>("http://localhost:8085/capstore/api/v1/getAllPromos");
 }
 getPromo(promoCode:string):Observable<Promos>{
  return this.http.get<Promos>("http://localhost:8085/capstore/api/v1/getPromo/"+promoCode);
 }
}