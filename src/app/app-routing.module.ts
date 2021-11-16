import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasIiComponent } from './artistas-ii/artistas-ii.component';
import { NoticiasIiiComponent } from './noticias-iii/noticias-iii.component';
import { PrincipalIComponent } from './principal-i/principal-i.component';
import { TeamIvComponent } from './team-iv/team-iv.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
