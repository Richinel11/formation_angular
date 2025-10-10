import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Produits } from './produits/produits';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Produits], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}