import { TestBed } from '@angular/core/testing';

import { MoviesReviewsService } from './movies-reviews.service';

describe('MoviesReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesReviewsService = TestBed.get(MoviesReviewsService);
    expect(service).toBeTruthy();
  });
});
