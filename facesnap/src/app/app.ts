import { Component } from '@angular/core';
import { Produits } from './produits/produits';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, Produits],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
