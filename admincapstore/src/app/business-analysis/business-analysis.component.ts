import { Component, OnInit } from '@angular/core';
import { ISalesAnalysis } from './ISalesAnalysis';
import { BusinessAnalysisService } from './business-analysis.service';

@Component({
  selector: 'app-business-analysis',
  templateUrl: './business-analysis.component.html',
  styleUrls: ['./business-analysis.component.css']
})
export class BusinessAnalysisComponent implements OnInit {

  salesAnalysis: ISalesAnalysis[]=[];

  constructor(private businessAnalysisService: BusinessAnalysisService) { }

  ngOnInit(): void {
    this.businessAnalysisService.getSalesAnalysis()
            .subscribe(
                salesAnalysis => {
                    this.salesAnalysis = salesAnalysis;
                },
            );
  }




}
