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

    { 
        path: 'galeria', 
        loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryPage)
    },

    { 
        path: 'wydarzenia', 
        loadComponent: () => import('./pages/events/events.component').then(m => m.EventsPage)
    },

    { 
        path: 'opinie', 
        loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsPage)
    },
];
