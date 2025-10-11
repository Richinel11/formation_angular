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
  nouveauProduit: Produit = { id: 0, name: '', price: 0, stock: 0, description: ''   };

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
    if (!this.nouveauProduit.name || this.nouveauProduit.price <= 0 || this.nouveauProduit.stock < 0) {
      alert('Veuillez remplir correctement tous les champs.');
      return;
    }
    console.log('Données envoyées au backend :', this.nouveauProduit);
    this.produitService.ajouterProduit(this.nouveauProduit).subscribe({
      next: (p) => {
        this.produits.push(p);
        this.nouveauProduit = { id: 0, name: '', price: 0, stock: 0, description: '' };
      },
      error: (err) => console.error('Erreur ajout', err)
    });
  }
  editerProduit(p: Produit) {
    this.nouveauProduit = { ...p }; 
  }

  mettreAJourProduit() {
    this.produitService.mettreAJourProduit(this.nouveauProduit).subscribe(p => {
      const index = this.produits.findIndex(prod => prod.id === p.id);
      if (index !== -1) this.produits[index] = p;
      this.resetProduit();
    });
  }

  supprimerProduit(id: number) {
    this.produitService.supprimerProduit(id).subscribe(() => {
      this.produits = this.produits.filter(p => p.id !== id);
    });
  }

  resetProduit() {
    this.nouveauProduit = { id: 0, name: '', price: 0, stock: 0, description: '' };
  }
}