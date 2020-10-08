import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {ResultBoxComponent} from './result-box/result-box.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AlbumBoxComponent } from './album-box/album-box.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    ResultBoxComponent,
    AlbumBoxComponent,
    ArtistComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
