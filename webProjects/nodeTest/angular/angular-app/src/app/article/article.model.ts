export class Article {
    votes: number;
    title: string;
    link: string;
    constructor(votes, title, link) {
        this.title = title;
        this.link = link;
        this.votes = votes;
  }
  voteUp() {
        this.votes += 1;
  }
  voteDown() {
        this.votes -= 1;
  }
  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (error) {
      return null;
    }
  }
}
