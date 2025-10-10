import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProduitService } from './produits_service';
import { Produit } from './modele';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
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
      next: (data: Produit[]) => this.produits = data,
      error: (err: any) => console.error('Erreur de chargement', err)
    });
  }

  ajouterProduit(): void {
    this.produitService.ajouterProduit(this.nouveauProduit).subscribe({
      next: (p: Produit) => {
        this.produits.push(p);
        this.nouveauProduit = { id: 0, nom: '', prix: 0, stock: 0 };
      },
      error: (err: any) => console.error('Erreur ajout', err)
    });
  }
}
