import {Address} from './Address'
import { from } from "rxjs";

export interface Merchant{
     "merchantId":number;
     "merchantName":string;
     "emailId":string;
     "merchantPassword":string;
     "merchantContact":string;
     "merchantAddress":Address[];
     "isVerified":boolean;



   
  
  }