import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ISalesAnalysis } from "./ISalesAnalysis";
import { Observable } from "rxjs";

@Injectable()
export class BusinessAnalysisService{

    private _salesAnalysisUrl = "http://localhost:8086/capstore/api/v1/products/salesAnalysis";

    constructor(private _http: HttpClient){

    }

    getSalesAnalysis(): Observable<ISalesAnalysis[]>{
        return this._http.get<ISalesAnalysis[]>(this._salesAnalysisUrl)
    }


}