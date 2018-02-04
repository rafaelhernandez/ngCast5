import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../Video';

@Component({
  selector: 'video-list',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  @Input() videos: Array<Video>;
  @Input() onClick: Function;

  constructor() { }

  ngOnInit() {
  }

}
