import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test-form-buider-liste',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test-form-buider-liste.component.html',
  styleUrl: './test-form-buider-liste.component.css',
})
export class TestFormBuiderListeComponent {
  produit: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(4)]],
    prix: ['', [Validators.required]],
  });

  //ajout boolean pour verif que le formulaire est soumis
  submitted: boolean = false;

  //declaration liste de produits

  produits: any[] = [];

  //methode pour ajouter un produit
  private addProduct() {
    //push du contenu du formulaire dans la liste
    this.produits.push(this.produit.value);

    //reset du formulaire
    this.produit.reset();

    //on repasse submitted à false
    this.submitted = true;
  }

  constructor(private formBuilder: FormBuilder) {}

  // methode onSubmit pour gérer la soumission

  onSubmit(): boolean {
    //on passe submitted à true
    this.submitted = true;
    //appel du validateur 'invalid' pour lancer la vérif
    if (this.produit.invalid) {
      return false;
    } else {
      //si tout est ok, on appelle la fonction pour ajouter le produit
      this.addProduct();
      return true;
    }
  }

  //definition d'un getter pour afficher le prix total

  get totalPrice(): number {
    return this.produits.reduce(
      (total, product) => total + product.prix * product.quantite,
      0
    );
  }

  get form() {
    //retour du formControl
    return this.produit.controls;
  }
}
