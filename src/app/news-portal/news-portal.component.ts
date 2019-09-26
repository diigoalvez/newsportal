import { Component, OnInit } from '@angular/core';
import { NewsService } from 'shared/services/news.service';
import { NewsModel } from 'shared/models/news';
import { NEWS_CATEGORIES } from '../../shared/constants/CONFIGS'

@Component({
  selector: 'app-news-portal',
  templateUrl: './news-portal.component.html',
  styleUrls: ['./news-portal.component.scss']
})
export class NewsPortalComponent implements OnInit {

  newsList: NewsModel[];
  newsCategories = NEWS_CATEGORIES;
  constructor(private _newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(newsCategorie) {
    this._newsService.getTopStories(newsCategorie).subscribe((data: any) => {
      this.newsList = data.results;
    });
  }

}
