import { Component, OnInit } from '@angular/core';
import { Merchant } from '../models/merchant';
import { MerchantService } from './merchant-service.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
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
export class MerchantComponent implements OnInit {
     merchants:Merchant[];
   

  constructor(private  merchantService:MerchantService ) { }

  _listFilter:string;
  searchedMerchants:Merchant[];

  length:number;
  ngOnInit() {
    //this.getMerchants();
    this.merchantService.getMerchants().subscribe(merchants=>{this.merchants=merchants;
      this.length=this.merchants.length;
      this.searchedMerchants=this.merchants;
    

      
      
    });

    
    
  }


  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(listFilter:string){
    this._listFilter=listFilter;

    this.searchedMerchants = this.listFilter ? this.performSearch(this.listFilter) : this.merchants;

  }

  performSearch(filterBy:string):Merchant[]{

    filterBy = filterBy.toLocaleLowerCase();

    return this.merchants.filter((merchant: Merchant) =>

    merchant.merchantName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  getMerchants(): void{
    
 }

 deleteMerchant(merchantId):void{
  console.log("delete");
  this.merchantService.deleteMerchant(merchantId).
  subscribe(merchants => console.log(merchants));
  window.location.reload();
}

dltMerchant(merchantId:any)
{
console.log("this MERCHANT id is "+merchantId); 
this.deleteMerchant(merchantId);

}  


verifyMerchant(merchant:Merchant) : void{

this.merchantService.verifyMerchant(merchant.merchantId).subscribe(flag=>{
  if(flag){
    alert("merchant verified!")
  }else{
    alert("merchant")
  }
});
// window.location.reload();

}
 
merchantMailID:string;
invite(){
  this.merchantService.inviteMerchant(this.merchantMailID).subscribe(flag=>{
    if(flag){
      alert("invitation sent!");
    }else{
      alert("merchant already exists!");
    }
  });
}

}
