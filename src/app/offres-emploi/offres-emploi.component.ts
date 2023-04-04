import {Component} from '@angular/core';
import {Emploi} from '../core/models/emploi';
import {Article} from "../core/models/article";

const defaultEmplois: Emploi[] = [
  {
    reference: '123456',
    titre: 'Développeur Web',
    entreprise: 'Google',
    etat: true,
  },
  {
    reference: '654321',
    titre: 'Développeur Mobile',
    entreprise: 'Microsoft',
    etat: false,
  },
  {
    reference: '987654',
    titre: 'Analyste',
    entreprise: 'Apple',
    etat: true,
  },
];

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.scss'],
})
export class OffresEmploiComponent {
  listeEmplois: Emploi[] = [];

  searchText: string = '';

  get availableEmplois(): number {
    return this.listeEmplois.filter((emploi) => emploi.etat).length;
  }

  constructor() {
    this.listeEmplois = defaultEmplois;
  }

  search() {
    console.log(this.searchText);
    this.listeEmplois = defaultEmplois.filter((emploi) => {
      return emploi.titre.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
