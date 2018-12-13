import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpEvent, HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/Product';

const headers= new HttpHeaders({ 'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  

  

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File,productId:number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    
    formdata.append('file', file);


    const req = new HttpRequest('POST', 'http://localhost:8086/capstore/api/v1/post/'+productId, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  pushSliderToStorage(file: File,productId:number,id:number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    
    formdata.append('file', file);


    const req = new HttpRequest('POST', 'http://localhost:8086/capstore/api/v1/slider/'+productId+'/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getProducts():  Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8086/capstore/api/v1/viewProducts');
  }

  getFiles(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8086/capstore/api/v1/getallfiles');
  }
}
