import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tcg-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './tcg-card.component.html',
  styleUrl: './tcg-card.component.css'
})
export class TcgCardComponent {
  @Input() pokeCard: any = {};
  private _favoritesService = inject(FavoritesService);
  private _router = inject(Router);
  addToFavorites(card: any){
    const resp = this._favoritesService.inFavorites(card);
    const msn = !resp ? card.name + ' eliminado de favoritos': card.name + ' agregado a favoritos';
    Swal.fire({
      title: msn,
      icon: 'success',
      toast: true,
      //background:'#ffc107',
      //color: '#000',
      timer: 1500,
      showConfirmButton: false,
      position: 'top-end'
    })
  }

  inFavorite(card: any){
    const resp = this._favoritesService.inFavorites(card);
    if(resp){
      return 'fa fa-heart'
    } else {
      return 'fa fa-heart-o'
    }
  }

  goToDetail(id: string){
    this._router.navigateByUrl('/detalle/' + id);
  }

}
