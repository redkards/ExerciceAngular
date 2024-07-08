import { Component } from '@angular/core';
import { UserFormulaireComponent } from '../user-formulaire/user-formulaire.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [UserFormulaireComponent, UserCardComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css',
})
export class UserViewComponent {
  users: User[] = [];

  addUtilisateur(utilisateur: User): void {
    this.users.push(utilisateur);
    console.log(this.users);
  }
}
