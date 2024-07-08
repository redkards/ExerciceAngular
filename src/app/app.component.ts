import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestformulaireComponent } from './components/testformulaire/testformulaire.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormulaireComponent } from './components/user-formulaire/user-formulaire.component';
import { TestFormBuiderListeComponent } from './components/test-form-buider-liste/test-form-buider-liste.component';
import { TestUserFormsArrayComponent } from './components/test-user-forms-array/test-user-forms-array.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestformulaireComponent,
    UserViewComponent,
    UserCardComponent,
    UserFormulaireComponent,
    TestFormBuiderListeComponent,
    TestUserFormsArrayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ExerciceAngular';
}
