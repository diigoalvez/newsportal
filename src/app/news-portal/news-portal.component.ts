import { Component, OnInit } from '@angular/core';
import { NewsService } from 'shared/services/news.service';
import { NewsModel } from 'shared/models/news';

@Component({
  selector: 'app-news-portal',
  templateUrl: './news-portal.component.html',
  styleUrls: ['./news-portal.component.scss']
})
export class NewsPortalComponent implements OnInit {

  newsList: NewsModel[];
  constructor(private _newsService: NewsService) { }

  ngOnInit() {
    this._getNews();
  }

  private _getNews() {
    this._newsService.getTopStories().subscribe((data: any) => {
      this.newsList = data.results;
    });
  }

}
