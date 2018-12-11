import {Address} from './Address'
import { from } from "rxjs";

export interface Customer{
     "customerId":number;
     "firstName":string;
     "lastName":string;
     "emailId":string;
     "mobileNumber":string;
     "addresses":Address[];
    


   
  
  }