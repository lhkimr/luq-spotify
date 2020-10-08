import { SpotifyService } from "../spotify.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck
} from "@angular/core";

@Component({
  selector: "app-result-box",
  templateUrl: "result-box.component.html",
  styleUrls: ["result-box.component.css"],
  providers: [SpotifyService]
})
export class ResultBoxComponent implements OnInit {
  @Input() musicData = null;
  @Output() viewMusicDetails = new EventEmitter();
  constructor(
    private _spotifyService: SpotifyService,
  ) {}

  ngOnInit() {}

  canDisplay() {
    return this.musicData !== null && typeof this.musicData !== "undefined";
  }




  getGenreList(genres) {
    return genres.join(" ,");
  }

  viewDetails(data) {
    this.viewMusicDetails.emit(data);
  }
}
