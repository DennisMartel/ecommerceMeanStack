import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from './components/inicio/inicio.component';

const appRouter : Routes = [
    {path:'', component:InicioComponent}
]

export const appRoutingProviders : any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRouter)