import { Component, inject } from '@angular/core';
import { TcgService } from '../../services/tcg.service';
import { TcgCardComponent } from '../../components/tcg-card/tcg-card.component';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {
  types: any[] = [];
  cards: any[] = [];
  private _tcgservice = inject(TcgService);

  constructor() {
    this._tcgservice.getTypes().subscribe( (t: any) => {
      this.types = t.data;
      console.log(this.types);
    })
    this.byType('dragon')
  }

  byType(type: string){
    this._tcgservice.getCardsByType(type).subscribe((resp:any) => {
      console.log(resp);
      this.cards =  resp.data
    })
  }


}
