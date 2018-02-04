import { Component } from '@angular/core';
import { Video } from './Video';
import { YoutubeSearchService } from './youtube-search.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos = [{
    kind: "youtube#searchResult",
    etag: "uQc-MPTsstrHkQcRXL3IWLmeNsM/C1jcavqo18Eddpnx0P7g42ER6yk",
    id: {
      kind: "youtube#video",
      videoId: "OPxeCiy0RdY"
    },
    snippet: {
      publishedAt: "2016-02-09T00:05:00.000Z",
      channelId: "UCwRXb5dUK4cvsHbx-rGzSgw",
      title: "AngularJS Tutorial",
      description: "Get the Code Here : http://goo.gl/yvDpi1 Best AngularJS Book : http://amzn.to/1PhNVPT Support me on Patreon : https://www.patreon.com/derekbanas In this ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OPxeCiy0RdY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/OPxeCiy0RdY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/OPxeCiy0RdY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      channelTitle: "Derek Banas",
      liveBroadcastContent: "none"
    }
  }];
  currentVideo = this.videos[0];

  constructor(private youTubeSearch:YoutubeSearchService) {
    this.executeSearch('');
  }

  videoClicked = (video) => {
    // this.currentVideo = this.videos[index];
    this.currentVideo = video;
  };

  executeSearch = (query) => {
    this.youTubeSearch.search(5, query, videos => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    });
  };

  // debouncedSearch = (query) => {
  //   return _.debounce(query => this.executeSearch(query), 500, {leading: true});
  //  }
}
