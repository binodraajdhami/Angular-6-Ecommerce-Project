import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SerachProductComponent } from './serach-product/serach-product.component';
import { ListProductComponent } from './list-product/list-product.component';


const productRoute: Routes = [
    {
        path: 'add',
        component: AddProductComponent
    },
    {
        path: 'edit/:id',
        component: EditProductComponent
    },
    {
        path: 'search',
        component: SerachProductComponent
    },
    {
        path: 'list',
        component: ListProductComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(productRoute)],
    exports: [RouterModule]
})
export class ProductRoutingModule {

}