import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";

const userRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashbordComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {

}