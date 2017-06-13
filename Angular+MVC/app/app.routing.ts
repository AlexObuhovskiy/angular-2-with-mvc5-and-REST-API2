import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Homecomponent = require("./nodes/home/home.component");
import HomeComponent = Homecomponent.HomeComponent;
import Aboutcomponent = require("./nodes/about/about.component");
import AboutComponent = Aboutcomponent.AboutComponent;
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);