import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 20),
    new Ingredient('Meat', 2)
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChangedEmit();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChangedEmit();
  }

  deleteIngredientByName(name: string) {
    this.ingredientChangedEmit();
  }

  ingredientChangedEmit() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
