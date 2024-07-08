import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test-user-forms-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test-user-forms-array.component.html',
  styleUrl: './test-user-forms-array.component.css',
})
export class TestUserFormsArrayComponent {
  userForm: FormGroup = this.formBuilder.group({
    // nom: ['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],

    telephones: this.formBuilder.array([
      this.formBuilder.group({
        numero: ['', [Validators.required, Validators.minLength(10)]],
      }),
    ]),

    // entreprise: ['', [Validators.minLength(3), Validators.required]],
  });

  users: any[] = [];

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
    console.log(this.users);
  }

  onsubmit(): void {
    this.submitted = true;
    console.log(this.telephones.controls);

    if (this.userForm.valid) {
      this.addUser();
    }
  }
  //getter pour acceder au control du formulaire
  get form() {
    return this.userForm.controls;
  }
  //getter pour acceder à la liste des téléphones
  get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }

  addTelephone(): void {
    this.telephones.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
      ])
    );
  }

  removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }
}
