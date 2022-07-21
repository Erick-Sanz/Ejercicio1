import { Component, OnInit } from '@angular/core';
import { Characters, Character } from '../../interface/characters.interface';
import { CharactersService } from '../../services/characters.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  length = 0;
  pageSize = 1;
  pageSizeOptions: number[] = [];
  pageEvent!:PageEvent;  
  selectedFilter="All";
  response:Characters={} as Characters;
  characters:Character[]=[];
  pageIndex=0;

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters()
    .subscribe(resp=>{
      this.characters=resp.results
      this.response=resp
      this.length = resp.info.pages;
    })


  }

  public getNewPage(event:PageEvent){
    this.characters=[];
    this.charactersService.getPage(event.pageIndex+1)
    .subscribe( resp=> {
      this.response=resp
      this.characters=resp.results
      this.pageIndex=event.pageIndex
    })
    return event
  }
  

  filterByGender(gender:string){
    if(this.selectedFilter!==gender){
      this.selectedFilter=gender
      this.characters=[];
      this.characters=gender!=='All'
      ? this.response.results.filter(character=>character.gender===gender)
      : this.response.results
    }
  }

}
