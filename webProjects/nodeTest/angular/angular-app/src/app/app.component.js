"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_model_1 = require("./article/article.model");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.articles = [
            new article_model_1.Article(0, 'Angular 5', 'https://angular.io'),
            new article_model_1.Article(0, 'Fullstack Homepage', 'https://fullstack.io'),
        ];
    }
    AppComponent.prototype.addArticle = function (title, link) {
        console.log("adding article: " + title.value + " link " + link.value);
        this.articles.push(new article_model_1.Article(0, title.value, link.value));
        title.value = '';
        link.value = '';
        return false;
    };
    AppComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    AppComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
