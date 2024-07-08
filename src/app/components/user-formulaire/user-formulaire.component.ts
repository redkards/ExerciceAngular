import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-formulaire.component.html',
  styleUrl: './user-formulaire.component.css',
})
export class UserFormulaireComponent {
  nouvelUtilisateur: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output()
  utilisateurAjoute: EventEmitter<User> = new EventEmitter();

  @Output()
  utilisateurDelete: EventEmitter<User> = new EventEmitter();

  addUser() {
    this.utilisateurAjoute.emit(this.nouvelUtilisateur.value);
    this.nouvelUtilisateur.reset();
  }
}
