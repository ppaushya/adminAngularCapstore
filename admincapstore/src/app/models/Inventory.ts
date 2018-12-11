import { Promos } from "./Promos";

export class Inventory{
   
    inventoryId:number;
    merchantId:number;
    productName:string;
    productCategory:string;
    productPrice:number;
    productDescription:string;
    productBrand:string;
    promo:Promos;
    status:string;
    inventoryType:string;
    inventoryQuantity:number;
   
}