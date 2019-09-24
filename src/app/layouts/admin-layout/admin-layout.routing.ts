import { Routes } from '@angular/router';

import { IconsComponent } from '../../icons/icons.component';
import { NewsPortalComponent } from 'app/news-portal/news-portal.component';
import { MoviesReviewsComponent } from 'app/movies-reviews/movies-reviews.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'icons', component: IconsComponent },
    { path: 'news', component: NewsPortalComponent },
    { path: 'movies', component: MoviesReviewsComponent }
];
