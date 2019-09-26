import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../constants/CONFIGS';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopStories(categorie = 'science'): Observable<any> {
    return this.http.get('https://api.nytimes.com/svc/topstories/v2/' + categorie + '.json?api-key=' + API_KEY);
  }
}
