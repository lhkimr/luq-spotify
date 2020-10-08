import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../spotify.service';
import { debounceTime, takeUntil, take } from "rxjs/operators";
import {flatMap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';


interface SpotifyResponse {
  artists: myArtist;

}

interface myArtist {
  href: string;
  items: any[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;

}
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  providers: [SpotifyService]
})
export class AlbumDetailsComponent implements OnInit {


    resultItems = [];
    id: string;
    artistId: string;
    albumDetails = null;
    tracksDetails = null;
    artist = null;
    searchTerm$ = new Subject();
    albums$: Observable<any> = null;
    artist$: Observable<any> = null;


  constructor(
      private route: ActivatedRoute,
      private spotifyService: SpotifyService,
      private router: Router,
  ) { }

  ngOnInit() {
      this.getAlbumId();
      this.getAlbum();
  }

  getAlbumId() {
    this.id = this.route.snapshot.params.id;
  }

  getAlbum() {
    this.spotifyService.searchAlbumById(this.id)
        .pipe(
            flatMap(res => {
                this.albumDetails = res;
                return this.spotifyService.searchAlbumByIdTracks(this.id)
            }),
        )
        .subscribe(res => {
            this.tracksDetails = res;
        });
  }

    viewInSpotify(url: string) {
      window.open(url);
    }


}
