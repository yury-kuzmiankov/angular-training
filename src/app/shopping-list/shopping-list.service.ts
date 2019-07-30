import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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
    this.ingredientsChangesEmit();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChangesEmit();
  }

  deleteIngredientByName(name: string) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.name !== name);
    this.ingredientsChangesEmit();
  }

  deleteIngredientById(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChangesEmit();
  }

  getIngredientById(id: number) {
    return this.ingredients[id];
  }

  updateIngredient(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
    this.ingredientsChangesEmit();
  }

  ingredientsChangesEmit() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
