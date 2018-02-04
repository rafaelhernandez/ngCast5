import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../Video';

@Component({
  selector: 'video-list-entry',
  templateUrl: './videolistentry.component.html',
  styleUrls: ['./videolistentry.component.css']
})
export class VideolistentryComponent implements OnInit {
  @Input() index: number;
  @Input() video: Video;
  @Input() onClick: Function;
  videoURL: string;
  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.videoURL = this.video.snippet.thumbnails.default.url;   
  }

  cleanUrl() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }
}
