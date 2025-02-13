import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticleSearchToolbarComponent } from './article-search/components/article-search-toolbar/article-search-toolbar.component';
import { ArticleSearchResultComponent } from './article-search/components/article-search-result/article-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleSearchComponent,
    ArticleSearchToolbarComponent,
    ArticleSearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
