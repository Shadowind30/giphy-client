import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GifItemComponent } from './gif-item/gif-item.component';

import {GiphyApiService} from './services/giphy-api.service';
import { TrimTitlePipe } from './shared/trim-title.pipe';
import { ShortenTitlePipe } from './shared/shorten-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GifItemComponent,
    TrimTitlePipe,
    ShortenTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
