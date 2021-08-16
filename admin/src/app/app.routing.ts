import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const appRouter : Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent}
]

export const appRoutingProviders : any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRouter)