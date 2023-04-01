import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Convert } from './convert.pipe';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    Convert,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Convert,
    StarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
