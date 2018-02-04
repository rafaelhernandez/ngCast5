import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment'

@Injectable()
export class YoutubeSearchService {

  constructor(private http: HttpClient) { }

    search(max, query, callback) {
      var options = {
        'key': environment.youTubeApiKey,
        'type': 'video',
        'videoEmbeddable': 'true',
        'maxResults': max || 5,
        'part': 'snippet',
        'q': query
      };
      this.http.get(environment.youTubeApiEndPoint, {params: options})
          .subscribe(
             response => {
               callback(response['items']);
             },
             error => console.log(error)
            )
    };
  }

}
