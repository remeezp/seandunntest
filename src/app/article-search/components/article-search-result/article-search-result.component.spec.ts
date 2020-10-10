import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchResultComponent } from './article-search-result.component';

describe('ArticleSearchResultComponent', () => {
  let component: ArticleSearchResultComponent;
  let fixture: ComponentFixture<ArticleSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
