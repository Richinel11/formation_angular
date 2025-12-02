import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './modele';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'https://formation-angular.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  ajouterProduit(p: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, p);
  }

  mettreAJourProduit(p: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${p.id}`, p);
  }

  supprimerProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
