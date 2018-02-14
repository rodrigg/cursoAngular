import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'productos/:nombre', component: ProductoComponent },
    { path: '**', component: HomeComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);

