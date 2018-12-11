import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

@Injectable()
export class CouponService{
  
  
    private _couponUrl='/';

    coupon: Coupon;
    constructor(private _http:HttpClient){

    }
    generatecoupon(coupons:Coupon):any{
        
        
        return this._http.post<Coupon>(this._couponUrl,coupons,{});
       
        
    }

    setCoupon(coupon: Coupon): any {
       this.coupon=coupon;
        
      }
      emailcoupon(coupon):void{
        this._http.post<Coupon>(this._couponUrl+"/"+"emailcoupon",coupon,{}) 
      }
      getCoupon(){
          return this.coupon;
      }
}