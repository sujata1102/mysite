import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ReviewComponent } from '../product/review/review.component';
import { SpecificationComponent } from '../product/specification/specification.component';
import { VerifyGuard } from '../verify.guard';

const routes: Routes = [

  {path:'', component:ProductListComponent, title:'Mysite | products'},
  {path:':id', component:ProductDetailsComponent,
  canActivate:[VerifyGuard],
  children:[
    {path:'review', component:ReviewComponent},
    {path:'specification',component:SpecificationComponent}
  ],
  title:'Mysite | pro_detail'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [
    RouterModule
  ]
})
export class ProductRoutingModule { }
