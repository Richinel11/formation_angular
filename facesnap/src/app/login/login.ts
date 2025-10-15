import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {


  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {

    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);


      alert('Connexion réussie !');


    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  // Méthode pour  la visibilité du mot de passe
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Navigation vers la page d'inscription
  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  // Navigation vers la page d'accueil
  goToHome(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
  });
}}
