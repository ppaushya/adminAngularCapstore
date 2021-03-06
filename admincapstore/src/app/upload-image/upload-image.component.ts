import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { UploadImageService } from '../upload-image.service';
import { ProductService } from '../products/product-service.service';
import { Promos } from '../models/Promos';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
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
export class UploadImageComponent implements OnInit {

 


  products: Product[]=[];

  _listFilter: string;

  searchedProducts: Product[];
  promos:Promos[]=[];

  constructor(private uploadService: UploadImageService, private productService: ProductService) { 
    this.listFilter = '';
   
    this.searchedProducts=this.products;
  }

  get listFilter(): string {

    return this._listFilter;

  }



  set listFilter(value: string) {

    this._listFilter = value;

    this.searchedProducts = this.listFilter ? this.performSearch(this.listFilter) : this.products;

  }

  ngOnInit() {
    
      this.getProducts();

    
  }
  getProducts():void{

    this.uploadService.getProducts().subscribe(products => { this.products=products;
      this.searchedProducts=this.products;}); 

  }


  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload(productId:number) {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload,productId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        alert("File is completely uploaded!");
      }
    });

    this.selectedFiles = undefined;
  }



  performSearch(searchBy: string): Product[] {

    searchBy = searchBy.toLocaleLowerCase();

    return this.products.filter((product: Product) =>

    product.productName.toLocaleLowerCase().indexOf(searchBy) !== -1 ||
    product.productCategory.toLocaleLowerCase().indexOf(searchBy) !== -1 || 
    product.brand.toLocaleLowerCase().indexOf(searchBy) !== -1);

  }

}
