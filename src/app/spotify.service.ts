import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQDaVQ0ZSPm6KBA1dPtcAWZSyl579B15X2YUbFkLV1_xWbnvrZ6wtHOW_ysMAk1FnaBBv-V5p5BOqsNxbcURTtZKIFtASQUM1GIQ4ChylbtbJEhnZqFw9AEC3E7lf3zOgdSPRde-fw"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }

  searchArtistAlbum(id: string) {
    const query = `artists/${id}/albums`;
    return this.getHeader(query);
  }

  searchArtist(id: string) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }

  searchAlbumById(id: string) {
    const query = `albums/${id}`;
    return this.getHeader(query);
  }

  searchAlbumByIdTracks(id: string) {
    const query = `albums/${id}/tracks`;
    return this.getHeader(query);
  }
}
