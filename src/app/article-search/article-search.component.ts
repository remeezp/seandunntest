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
    console.log(`I was clicked and my value is ${value}`);
    this.message = `I was clicked and my value is ${value}`;
  }

}
