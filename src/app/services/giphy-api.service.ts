import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GiphyResponse, } from '../model/gif-item';


@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  constructor(private http: HttpClient) { }

  	 getData(): Observable<GiphyResponse> {
  	    return this.http.get<GiphyResponse>('https://api.giphy.com/v1/gifs/trending?api_key=QWxIKec2hJDlmrZTsSH1u7WuXYCO2Ahn&limit=20&rating=pg')
  	}
}

