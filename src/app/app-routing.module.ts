import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { SearchComponent } from './search/search.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';

const routes: Routes = [
  {path: '', component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path: 'artist/:id' , component: ArtistComponent },
  {path: 'album/:id' , component: AlbumDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
