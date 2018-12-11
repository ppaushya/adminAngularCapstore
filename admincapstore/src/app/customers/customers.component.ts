import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from './customer.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  animations:[
    trigger('ml',[
                   transition('* => *',
                        [
                          query(':enter',style({opacity:0}),{optional:true}),

                          query(':enter',stagger('300ms',[

                            animate('.6s ease-in', keyframes([
                              style({opacity:0, transform:'translateY(-75%)',offset:0}),
                              style({opacity:0.5, transform:'translateY(35px)',offset:.3}),
                              style({opacity:1, transform:'translateY(0)',offset:1})
                            ]))]), {optional:true}),

                          query(':leave',stagger('300ms',[

                            animate('.6s ease-in', keyframes([
                               style({opacity:1, transform:'translateY(0)',offset:0}),
                               style({opacity:0.5, transform:'translateY(35px)',offset:.3}),
                               style({opacity:0, transform:'translateY(-75%)',offset:1})
                            ]))]), {optional:true}),

                        ])

                ])

           ]
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  length:number;

  _listFilter:string;
  searchedCustomers:Customer[];
  
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers=>{
      this.customers=customers;
      this.length=this.customers.length;

      this.searchedCustomers=this.customers;
    });
  }

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(listFilter:string){
    this._listFilter=listFilter;

    this.searchedCustomers = this.listFilter ? this.performSearch(this.listFilter) : this.customers;

  }

  performSearch(filterBy:string):Customer[]{

    filterBy = filterBy.toLocaleLowerCase();

    return this.customers.filter((customer: Customer) =>

    customer.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
    customer.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
    customer.emailId.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

 

deleteCustomer(customerId:number){

    this.customerService.deleteCustomer(customerId).subscribe(customers => this.customers=customers);
}



}
