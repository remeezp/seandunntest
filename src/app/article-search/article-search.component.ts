import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  onToolbarClickEvent(value) {
    if (value === true) {
      this.message = `I was clicked and my value is ${value}`;
    } else {
      this.message = `I was clicked again and my value is ${value}`;
    }

  }

}
