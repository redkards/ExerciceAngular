import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-testformulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './testformulaire.component.html',
  styleUrl: './testformulaire.component.css',
})
export class TestformulaireComponent {
  article: FormGroup;

  listeArticles: any[] = [];

  constructor() {
    this.article = new FormGroup({
      nom: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
    });
  }

  addArticle() {
    this.listeArticles.push(this.article.value);

    this.article.reset();
  }

  get totalPrice(): number {
    return this.listeArticles.reduce(
      (total, article) => total + article.prix,
      0
    );
  }
}
