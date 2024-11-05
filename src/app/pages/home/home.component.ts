import { Component, inject } from '@angular/core';
import { TcgCardComponent } from '../../components/tcg-card/tcg-card.component';
import { TcgService } from '../../services/tcg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TcgCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cards: any[] = [];
private _tcgservice = inject(TcgService)
constructor(){
  this._tcgservice.getCards().subscribe( (respuesta:any) =>{
    console.log(respuesta)
    this.cards = respuesta.data
   });
}
}
