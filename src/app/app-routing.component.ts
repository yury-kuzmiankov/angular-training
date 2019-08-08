import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { Navigate } from './shared/model/navigate.model';
const appRoutes: Routes = [
  { path:'', redirectTo: Navigate.RECIPE.TO_RECIPES, pathMatch: 'full' },
  { path: Navigate.RECIPE.RECIPES, component: RecipesComponent, children:[
    { path: Navigate.RECIPE.NEW, component: RecipeEditComponent },
    { path: Navigate.RECIPE.ID, component: RecipeDetailComponent },
    { path: Navigate.RECIPE.ID_EDIT, component: RecipeEditComponent }
  ]},
  { path: Navigate.SHOPPING_LIST.SHOPPING_LIST, component: ShoppingListComponent },
  { path: '**', redirectTo: Navigate.RECIPE.TO_RECIPES }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
