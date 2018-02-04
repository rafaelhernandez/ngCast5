import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { SearchComponent } from './search/search.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideolistentryComponent } from './videolistentry/videolistentry.component';
import { YoutubeSearchService } from './youtube-search.service'


@NgModule({
  declarations: [
    AppComponent,
    VideoplayerComponent,
    SearchComponent,
    VideolistComponent,
    VideolistentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [YoutubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
