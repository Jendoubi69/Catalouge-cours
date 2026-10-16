import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
@Component({
  imports: [FormsModule, UpperCasePipe, FiltreCoursPipe, TriCoursPipe, PlacesRestantesPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';
 @Output() coursSelectionne = new EventEmitter<Cours>();
 coursActif: Cours | null = null;
 cours: Cours[] = [ { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 0 },
 { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 1 },
 { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 3 },
 { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },];
 selectionner(c: Cours) {
 this.coursActif = c;
 this.coursSelectionne.emit(c);
 }
}
export interface Cours {
 titre: string;
 categorie: string;
 duree: string;
 places: number;
}
