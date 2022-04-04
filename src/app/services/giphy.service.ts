import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GifData, GiphyResult, SearchReqeust } from '../interfaces/giphy.interface';
import { distinct, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  static readonly apiUrl = 'https://api.giphy.com/v1/gifs/'
  static readonly apiKey =  'Xd8FLIuvwkN6gKjBvb7BDlnOhwSHVfgA'







  constructor(private http: HttpClient) {
  }
  public searching(q: string, limit: number, offset:number, rating:string, lang:string) {
    const params = { q: q, limit: limit, offset: offset, rating:rating, lang:lang }
    return this.http.get<GiphyResult>(GiphyService.apiUrl + 'search?api_key=' + GiphyService.apiKey,{ params })
  }

  public trending(limit: number, rating:string) {
    const params = { limit: limit,  rating:rating}
    return this.http.get<GiphyResult>(GiphyService.apiUrl + 'trending?api_key=' + GiphyService.apiKey,{ params })
  }




}
