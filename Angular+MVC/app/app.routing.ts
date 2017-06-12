import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);