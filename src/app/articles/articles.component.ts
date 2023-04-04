import {Component} from '@angular/core';
import {Article} from "../core/models/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  listeArticles: Article[] = [
    {
      titre: 'Le championnat du monde',
      contenu: 'Le champion du monde de cette année est le Marocain Med Taher qui a battu le Français Mohamed Ali en finale du championnat du monde de boxe',
      auteur: 'Med Taher',
      date: '12/12/2005',
      categorie: 'Sport',
    },
    {
      titre: 'Les Nouveaux Parents',
      contenu: 'Les nouveaux parents sont des parents qui ont des enfants de moins de 2 ans. Ils sont souvent débordés par les tâches quotidiennes et ont besoin de conseils pour s\'organiser',
      auteur: 'Ahmed Said',
      date: '12/12/2008',
      categorie: 'Education',
    },
    {
      titre: 'Comment faire un bon CV',
      contenu: 'Pour faire un bon CV, il faut avoir une bonne expérience professionnelle et avoir un bon niveau d\'étude et de formation',
      auteur: 'Mohamed Ali',
      date: '12/12/2010',
      categorie: 'Travail',
    },
  ];

  count: number;
  filteredArticles: Article[] = [];

  constructor() {
    this.filteredArticles = this.listeArticles;
    this.count = this.filteredArticles.filter(a => a.categorie != 'Travail').length;
  }

  filter() {
    this.filteredArticles = this.listeArticles.slice(0, this.count);
  }
}
