import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class RecipeFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  recipeId!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      dietaryTags: ['', Validators.required],
      ingredients: ['', Validators.required],
      steps: ['', Validators.required],
      cookingTimeInMinutes: [0, Validators.required],
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.recipeId = id;
      this.recipeService.getById(this.recipeId).subscribe((recipe) => {
        if (recipe) {
          this.form.patchValue(recipe);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/recipes']);
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const recipe: Recipe = this.form.value;
    if (this.isEditMode) {
      this.recipeService.update(this.recipeId, recipe).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.recipeService.create(recipe).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
