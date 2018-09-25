import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const allRoute: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(allRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}