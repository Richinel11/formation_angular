import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports :[CommonModule , FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  // Le constructeur injecte le Router pour la navigation
  constructor(private router: Router) {}

  // Méthode pour naviguer vers la page de connexion
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Méthode pour naviguer vers la page d'inscription
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
