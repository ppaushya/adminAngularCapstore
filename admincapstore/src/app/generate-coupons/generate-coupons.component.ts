import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { CouponService } from './generate-coupons.service';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { Coupon } from '../models/coupon';

@Component({
  selector: 'app-generate-coupon',
  templateUrl: './generate-coupons.component.html',
  styleUrls: ['./generate-coupons.component.css']
})
export class GenerateCouponsComponent implements OnInit {

  coupon:Coupon=new Coupon;
  constructor(private _router: Router,private couponService:CouponService) { }

  sendCoupon(coupon:Coupon):any{
    
    return this.couponService.generatecoupon(coupon).subscribe(coupons =>{
      this.coupon = coupons;
      this.bannerCreation();

  });
  }
   generateCoupon(coupon:Coupon):void{
     console.log(coupon);
     this.couponService.setCoupon(coupon);
     this._router.navigate(['coupon/couponpage']);
   }

  bannerCreation():any{}

  ngOnInit() {
  }

}
