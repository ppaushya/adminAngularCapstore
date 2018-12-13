import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadImageService } from '../upload-image.service';
import { ProductService } from '../products/product-service.service';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.css']
})
export class SliderImageComponent implements OnInit {




  products: Product[]=[];

  _listFilter: string;
  slider:string
  searchedProducts: Product[];
  

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

  uploadSlider(productId:number,id:number) {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
  
    this.uploadService.pushSliderToStorage(this.currentFileUpload,productId,id).subscribe(event => {
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
