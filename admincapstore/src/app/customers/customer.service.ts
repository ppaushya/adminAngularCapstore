import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { of } from 'rxjs'
import { Customer } from '../models/Customer';

const headers= new HttpHeaders({ 'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private custUrl='http://localhost:8085/capstore/api/v1/customers';
  customers:Customer[];
  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]>
  {
 
   console.log(('Customers here!!'+this.http.get<Customer[]>(this.custUrl+'/all')));
   return this.http.get<Customer[]>(this.custUrl);
   
  }

  deleteCustomer(customerId:number): Observable<Customer[]>
  {
    this.custUrl=this.custUrl+'/'+customerId;
    return this.http.delete<Customer[]>(this.custUrl);
    

  }


}
