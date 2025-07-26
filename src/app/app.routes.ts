import { Routes } from '@angular/router';
import { RecipeListComponent } from '.././app/components/recipe-list/recipe-list.component';
import { RecipeFormComponent } from '.././app/components/recipe-form/recipe-form.component';
export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },

  { path: 'recipes', component: RecipeListComponent },
  {
    path: 'recipes/new',
    component: RecipeFormComponent,
    data: { isEdit: false },
  },
  {
    path: 'edit/:id',
    component: RecipeFormComponent,
    data: { isEdit: true },
  },
  {
    path: 'create',
    component: RecipeFormComponent,
  },
];
