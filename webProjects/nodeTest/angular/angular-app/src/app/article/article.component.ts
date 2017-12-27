import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.article = new Article(10, 'Angular 5', 'https://angular.io');
  }
  voteUp() {
    this.article.votes += 1;
    return false;
  }
  voteDown() {
    this.article.votes -= 1;
    return false;
  }
  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
    } catch (error) {
      return null;
    }
  }
  ngOnInit() {
  }

}
