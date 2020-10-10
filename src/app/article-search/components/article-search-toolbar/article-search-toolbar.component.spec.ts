import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchToolbarComponent } from './article-search-toolbar.component';

describe('ArticleSearchToolbarComponent', () => {
  let component: ArticleSearchToolbarComponent;
  let fixture: ComponentFixture<ArticleSearchToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSearchToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
