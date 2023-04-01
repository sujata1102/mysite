import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';
import { SpecificationComponent } from './specification/specification.component';
import { DataPipe } from './data.pipe';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ReviewComponent,
    SpecificationComponent,
    DataPipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
