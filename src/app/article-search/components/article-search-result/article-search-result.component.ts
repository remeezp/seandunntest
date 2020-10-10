import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-search-result',
  templateUrl: './article-search-result.component.html',
  styleUrls: ['./article-search-result.component.scss']
})
export class ArticleSearchResultComponent implements OnInit, OnChanges {
  @Input() testinput;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
