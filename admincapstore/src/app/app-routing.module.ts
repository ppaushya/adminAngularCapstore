import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CustomersComponent } from './customers/customers.component';
import { PromosComponent } from './promos/promos.component';
import { GenerateCouponsComponent } from './generate-coupons/generate-coupons.component';
import { BusinessAnalysisComponent } from './business-analysis/business-analysis.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';

const routes: Routes = [

  {
    path: 'products',
    component: ProductsComponent,
  },
   {
     path: 'merchants',
     component: MerchantComponent
   },

  
   {
    path: 'customers',
   component: CustomersComponent,
  },
  {
    path:'promos',
    component: PromosComponent,
  },
  {
    path: 'coupons',
    component: GenerateCouponsComponent,
  },
  {
    path: 'BusinessAnalysis',
    component: BusinessAnalysisComponent,
  },
  {
    path: 'MainPage',
    component: AdminMainPageComponent,
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }







