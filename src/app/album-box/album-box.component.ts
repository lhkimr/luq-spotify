import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-album-box",
  templateUrl: "./album-box.component.html",
  styleUrls: ["./album-box.component.css"]
})
export class AlbumBoxComponent implements OnInit {
  @Input() album;
  @Output() viewDetails = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onViewDetails(id: string) {
    this.viewDetails.emit(id);
  }
}
