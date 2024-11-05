import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { TcgCardComponent } from '../../components/tcg-card/tcg-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [TcgCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  private _favoritesService = inject(FavoritesService);
  misFavoritos: any[] = [];
  constructor(){

  }

  get getMisFavoritos() {
   return this._favoritesService.getFavorites;
  }
}
