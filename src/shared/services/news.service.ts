import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<any> {
    return this.http.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=8FITdywSk07GYqpaNt1h7MJlSlHClXr7');
  }
}
