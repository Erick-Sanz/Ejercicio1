import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Character } from '../../interface/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [
  ]
})
export class CharacterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private charactersService:CharactersService) { }
  character!:Character;
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.charactersService.getCharacterById(id)
    )
    ).subscribe((character)=> this.character=character )
  }

}
