import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomePage)
    },
    { 
        path: 'o-mnie', 
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutPage)
    },
];
