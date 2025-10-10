import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './modele';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'https://aa9feade51b5.ngrok-free.app/swagger'; // ton API

  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit);
  }
}
