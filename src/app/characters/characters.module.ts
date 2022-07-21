import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SearchComponent } from './pages/search/search.component';
import { CharacterComponent } from './pages/character/character.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CharacterTarjetComponent } from './components/character-tarjet.component';

import { CharactersRoutingModule } from './characters-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SearchComponent,
    CharacterComponent,
    HomeComponent,
    ListComponent,
    CharacterTarjetComponent,
  ],
  imports: [
    CharactersRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class CharactersModule { }
