import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../Video';

@Component({
  selector: 'video-player',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  @Input() video: Video;
  videoURL: string;
  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.videoURL = 'https://www.youtube.com/embed/' + this.video.id.videoId;    
  }

  ngOnChanges() {
    this.videoURL = 'https://www.youtube.com/embed/' + this.video.id.videoId; 
  }


  cleanUrl() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

}
