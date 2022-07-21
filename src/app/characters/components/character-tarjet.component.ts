import { Component, Input } from '@angular/core';
import { Character } from '../interface/characters.interface';

@Component({
  selector: 'app-character-tarjet',
  templateUrl: './character-tarjet.component.html',
  styleUrls: ['./character-tarjet.component.css']
})
export class CharacterTarjetComponent {

  @Input() character!:Character;

}
