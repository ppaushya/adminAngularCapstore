import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { ProductService } from './product-service.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { Promos } from '../models/Promos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
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
export class ProductsComponent implements OnInit {
  inventories: Inventory[] = [];

  inventory: Inventory=new Inventory();

  _listFilter: string;

  length:number;

  filteredInventories: Inventory[];

  promos:Promos[]=[];

  constructor(private productService: ProductService,private _router:Router) {


    this.listFilter = '';

  }

  get listFilter(): string {

    return this._listFilter;

  }



  set listFilter(value: string) {

    this._listFilter = value;

    this.filteredInventories = this.listFilter ? this.performFilter(this.listFilter) : this.inventories;

  }

  ngOnInit() {
    this.productService.getAllPromos().subscribe(promos=>{
      this.promos=promos;
      console.log(this.promos);
      this.getInventories();
      this.length=this.inventories.length;
    });
  }


  getInventories():void{

    this.productService.getInventories().subscribe(inventories => {this.inventories=inventories;
      this.filteredInventories=this.inventories;}); 

  }


  deleteInventory(inventoryId: number) {
  
    this.productService.deleteInventory(inventoryId).subscribe(inventories => this.inventories = inventories);
  }

  
  promo1:string;
  editInventory(inventory:Inventory){
    this.productService.getPromo(this.promo1).subscribe(promo=>{
      inventory.promo=promo;
      console.log(promo);
    });
    this.productService.editInventory(inventory).subscribe(inventory => this.inventories = inventory);
    window.location.reload();
  }



  performFilter(filterBy: string): Inventory[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.inventories.filter((inventory: Inventory) =>

    inventory.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
    inventory.productCategory.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
    inventory.productBrand.toLocaleLowerCase().indexOf(filterBy) !== -1 );

  }

  getInventoryObject(inventory){

    this.inventory=Object.assign({},inventory);
  }
}
