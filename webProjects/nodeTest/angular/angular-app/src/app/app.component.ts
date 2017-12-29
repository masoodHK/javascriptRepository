import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article(0, 'Angular 5', 'https://angular.io'),
      new Article(0, 'Fullstack Homepage', 'https://fullstack.io'),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`adding article: ${title.value} link ${link.value}`);
    this.articles.push(new Article(0, title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
