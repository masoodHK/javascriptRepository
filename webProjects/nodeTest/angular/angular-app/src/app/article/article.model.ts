export class Article {
    votes: number;
    title: string;
    link: string;
    constructor(votes, title, link) {
        this.title = title;
        this.link = link;
        this.votes = votes;
  }
}
