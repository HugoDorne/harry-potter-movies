import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details/details.component').then((m) => m.DetailsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
