import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      0,
      'test1',
      'simple test1',
      'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg',
      [
        new Ingredient('ingredient 1', 10),
        new Ingredient('ingredient 2', 5)
      ]),
    new Recipe(
      1,
      'test2',
      'simple test2',
      'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg',
      [
        new Ingredient('ingredient 3', 6),
        new Ingredient('ingredient 4', 12)
      ])
  ];

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  recipeSelectedEmit(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
