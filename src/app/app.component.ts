import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestformulaireComponent } from './components/testformulaire/testformulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestformulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ExerciceAngular';
}
