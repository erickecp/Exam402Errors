import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const APIURL = 'https://api.pokemontcg.io/v2/';
@Injectable({
  providedIn: 'root'
})
export class TcgService {
  private _http = inject(HttpClient);
  constructor() { }
  getCards(){
    return this._http.get(APIURL + 'cards?pageSize=80')
  }
  getTypes(){
    return this._http.get(APIURL + 'types')
  }
  getCardsByType(type: string){
    return this._http.get(APIURL + 'cards?q=types:' + type +'&pageSize=80')
  }

  getCardById(id:string){
    return this._http.get(APIURL + 'cards' + id);
  }



}
