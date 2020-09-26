import { Component,OnInit } from '@angular/core';
import {GiphyApiService} from './services/giphy-api.service';
import {GiphyResponse, GifItem} from './model/gif-item';

@Component({
  selector: 'gpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	gifItems: GifItem[];
	isLoading: boolean = true;

  constructor(private api: GiphyApiService) {}
  ngOnInit() {
  	this.api.getData()
  	.subscribe((data: GiphyResponse) => {
  		this.gifItems = data.data as GifItem[];
  	    this.isLoading = false;
  	});

  }
}
