import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-search-toolbar',
  templateUrl: './article-search-toolbar.component.html',
  styleUrls: ['./article-search-toolbar.component.scss']
})
export class ArticleSearchToolbarComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    this.searchCriteria.emit(true);
  }

  onClickMeAgain() {
    this.searchCriteria.emit(false);
  }

}
