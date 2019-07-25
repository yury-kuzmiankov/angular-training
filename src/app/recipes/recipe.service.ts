import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test1',
      'simple test1',
      'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg',
      [
        new Ingredient('ingredient 1', 10),
        new Ingredient('ingredient 2', 5)
      ]),
    new Recipe(
      'test2',
      'simple test2',
      'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg',
      [
        new Ingredient('ingredient 3', 6),
        new Ingredient('ingredient 4', 12)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
