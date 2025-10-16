import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  // Propriétés pour stocker les données du formulaire
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    // Validation simple
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Vérifier si les mots de passe correspondent
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Vérifier la longueur du mot de passe
    if (this.password.length < 6) {
      alert('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    console.log('Nom:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    alert('Inscription réussie !');


    this.router.navigate(['/login']);
  }


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Navigation vers la page de connexion
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Navigation vers la page d'accueil
  goToHome(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
  });
}}
