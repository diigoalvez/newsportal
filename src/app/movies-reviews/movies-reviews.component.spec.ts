import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesReviewsComponent } from './movies-reviews.component';

describe('MoviesReviewsComponent', () => {
  let component: MoviesReviewsComponent;
  let fixture: ComponentFixture<MoviesReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
