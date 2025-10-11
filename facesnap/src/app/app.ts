import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produits } from './produits/produits.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Produits],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
