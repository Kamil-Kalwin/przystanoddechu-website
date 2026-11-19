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
        path: 'podroze', 
        loadComponent: () => import('./pages/travels/travels.component').then(m => m.TravelsPage)
    },
    {
        path: 'podroze/:url',
        loadComponent: () => import('./pages/travels/travel/travel.component').then(m => m.TravelPage)
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
