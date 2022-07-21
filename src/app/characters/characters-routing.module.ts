import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { CharacterComponent } from './pages/character/character.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:':id',
        component:CharacterComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CharactersRoutingModule { }
