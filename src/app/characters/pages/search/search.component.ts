import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Character } from '../../interface/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
     .container{
    margin: 10px;
  }
  `
  ]
})
export class SearchComponent implements OnInit {
  filterSelect='name';
  searchTerm:string="";
  characters: Character[]=[];
  selectCharacter:Character | undefined;
  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
  }
  search(){
    this.charactersService.getSuggestinos(this.filterSelect,this.searchTerm.trim())
    .subscribe(characters=>this.characters=characters.results)    
  }
  optionSelected(event:MatAutocompleteSelectedEvent ){
    if(!event.option.value) { this.selectCharacter=undefined; return;}
    const character:Character= event.option.value;
    this.searchTerm=character.name;
    this.charactersService.getCharacterById(character.id)
    .subscribe(character=>this.selectCharacter=character)
  }
  

}
