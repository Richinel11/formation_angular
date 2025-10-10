import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from './produits_service';
import { Produit } from './modele';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './img.html',
  styleUrls: ['./produits.scss']
})
export class Produits implements OnInit {

  produits: Produit[] = [];
  nouveauProduit: Produit = { id: 0, nom: '', prix: 0, stock: 0 };

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.produitService.getProduits().subscribe({
      next: (data) => this.produits = data,
      error: (err) => console.error('Erreur de chargement', err)
    });
  }

  ajouterProduit(): void {
    if (!this.nouveauProduit.nom || this.nouveauProduit.prix <= 0 || this.nouveauProduit.stock < 0) {
      alert('Veuillez remplir correctement tous les champs.');
      return;
    }

    this.produitService.ajouterProduit(this.nouveauProduit).subscribe({
      next: (p) => {
        this.produits.push(p);
        this.nouveauProduit = { id: 0, nom: '', prix: 0, stock: 0 };
      },
      error: (err) => console.error('Erreur ajout', err)
    });
  }
}