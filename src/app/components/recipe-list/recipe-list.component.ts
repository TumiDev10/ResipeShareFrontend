import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [CommonModule, ReactiveFormsModule, NgFor, NgIf, FormsModule, RouterModule],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  searchInput: string = '';
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.loadRecipes();
  }
  loadRecipes(): void {
    this.recipeService.getAll().subscribe({
      next: (data) => (this.recipes = data),
      error: (err) => console.error('Error loading recipes:', err),
    });
  }

  deleteRecipe(id: string) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.delete(id).subscribe(() => {
        this.recipes = this.recipes.filter(r => r.id !== id);
      });
    }
  }
  searchByTag(tag: string): void {
    const trimmedTag = tag.trim();
    if (!trimmedTag) {
      this.loadRecipes();
      return;
    }
    this.recipeService.getAll(trimmedTag).subscribe({
      next: (data) => (this.recipes = data),
      error: (err) => console.error('Error searching by tag:', err),
    });
  }
}
