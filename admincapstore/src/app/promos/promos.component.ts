import { Component, OnInit } from '@angular/core';
import { Promos } from '../models/Promos';
import { PromoService } from './promo.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  constructor(private _promoService:PromoService) { }


  promo: Promos = {
    promoId: 0,
    promoImageUrl: '',
    promoCode: '',
    discount: 0,
    endDate: null
  };

  ngOnInit() {
  }


  addPromo(): void {
    console.log(this.promo);
    this._promoService.addPromo(this.promo).subscribe(flag => {
      if (flag) {
        alert("added!");
      }
    });
   
  }
  



}
