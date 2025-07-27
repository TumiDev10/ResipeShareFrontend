import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgFor,
    FormsModule,
    RouterModule,
  ],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  allRecipes: Recipe[] = [];
  searchInput: string = '';
  searchTerm = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadRecipes();

    this.recipeService.getAll().subscribe({
      next: (data) => {
        this.allRecipes = data;
        this.recipes = data;
      },
      error: (err) => console.error('Error loading recipes', err),
    });
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
        this.recipes = this.recipes.filter((r) => r.id !== id);
      });
    }
  }

  editRecipe(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  goToAddForm(): void {
    this.router.navigate(['/create']);
  }

  onSearchInput(term: string): void {
    this.searchTerm = term;
    const lowerTerm = term.toLowerCase();
    this.recipes = this.allRecipes.filter((r) =>
      r.dietaryTags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .some((tag) => tag.includes(lowerTerm))
    );
  }
  searchByTag(tag: string): void {
    if (!tag.trim()) {
      this.loadRecipes();
    } else {
      this.recipeService.getAll(tag).subscribe({
        next: (data) => (this.recipes = data),
        error: (err) => console.error('Search error', err),
      });
    }
  }
}
