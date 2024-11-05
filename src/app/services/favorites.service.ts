import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  localFavorites:any[] = [];
  constructor() {
    this.getFavorites;
  }
  get getFavorites(){
    this.localFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return this.localFavorites;
  }
  addToFavorite(card: any){
    const encontrado = this.localFavorites.find(
      c => c.id === card.id
    );
    console.log(encontrado);
    if(encontrado){
      this.localFavorites = this.localFavorites.filter(
        c => c.id !== encontrado.id
      )
      localStorage.setItem('favorites', this.localFavorites);
    }else {
    this.localFavorites.push(card);
    localStorage.setItem('favorites', this.localFavorites);
    }
  }

  inFavorites(card: any){
    return !!this.localFavorites.find(
      c => c.id === card.id
    );
  }

}
