import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Characters } from '../interface/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiEndPonit:string = environment.apiEndPonit;
  constructor( private http:HttpClient) {  }
  getCharacters(){
    return this.http.get<Characters>(this.apiEndPonit)
  }
  getCharacterById(id:number){
    return this.http.get<Character>(`${this.apiEndPonit}/${id}`)
  }
  getSuggestinos(filter:string,searchTerm:string){
    return this.http.get<Characters>(`${this.apiEndPonit}/?${filter}=${searchTerm}`)
  }
  getPage(page:number){
    return this.http.get<Characters>(`${this.apiEndPonit}?page=${page}`)
  }
}
