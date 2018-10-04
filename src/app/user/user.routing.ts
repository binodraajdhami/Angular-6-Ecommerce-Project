import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { ChatComponent } from "./chat/chat.component";

const userRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashbordComponent
    },
    {
        path: 'chat',
        component: ChatComponent
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