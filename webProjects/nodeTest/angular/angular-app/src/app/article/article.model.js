"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(votes, title, link) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
    };
    Article.prototype.domain = function () {
        try {
            var domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }
        catch (error) {
            return null;
        }
    };
    return Article;
}());
exports.Article = Article;
