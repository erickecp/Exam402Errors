import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-card-detalle',
  standalone: true,
  imports: [],
  templateUrl: './card-detalle.component.html',
  styleUrl: './card-detalle.component.css'
})
export class CardDetalleComponent {
pokemon:any = {};
private _routerActive = inject(ActivatedRoute);
private _tcgService = inject(TcgService);
constructor(){
  this._routerActive.params.subscribe((params:any)=>{
    console.log(params);
    this.getCard(params.id);
  });
}
getCard(id: string){
  this._tcgService.getCardById(id).subscribe((resp:any)=>{
    console.log(resp);
    this.pokemon = resp.data;
  });
}
}
