import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { PromosComponent } from './promos/promos.component';
import { GenerateCouponsComponent } from './generate-coupons/generate-coupons.component';
import { BusinessAnalysisComponent } from './business-analysis/business-analysis.component';
import { MerchantService } from './merchant/merchant-service.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerService } from './customers/customer.service';
import { ProductService } from './products/product-service.service';
import { CouponService } from './generate-coupons/generate-coupons.service';
import { BusinessAnalysisService } from './business-analysis/business-analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminMainPageComponent,
    MerchantComponent,
    ProductsComponent,
    CustomersComponent,
    PromosComponent,
    GenerateCouponsComponent,
    BusinessAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [MerchantService,CustomerService,ProductService,CouponService,BusinessAnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
