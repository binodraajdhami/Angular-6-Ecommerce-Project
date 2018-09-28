import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SerachProductComponent } from './serach-product/serach-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product.routing';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    AddProductComponent,
    EditProductComponent,
    SerachProductComponent,
    ListProductComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
