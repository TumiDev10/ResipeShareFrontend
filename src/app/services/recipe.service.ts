import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RecipeService {
  private baseUrl = 'https://localhost:44305/api/Recipes';

  constructor(private http: HttpClient) {}

  getAll(dietaryTags?: string): Observable<Recipe[]> {
    let url = `${this.baseUrl}`;
    if (dietaryTags) {
      url += `?tag=${encodeURIComponent(dietaryTags)}`;
    }
    return this.http.get<Recipe[]>(url);
  }

  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  create(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }

  update(id: string, recipe: Recipe): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, recipe);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
