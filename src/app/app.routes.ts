import { Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { TypesComponent } from './pages/types/types.component';
import { CardDetalleComponent } from './pages/card-detalle/card-detalle.component';

export const routes: Routes = [
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'home',
    component: HomeComponent
    },
  {
    path: 'types',
    component: HomeComponent
  },
  {
    path: 'detalle/:id',
    component: CardDetalleComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
