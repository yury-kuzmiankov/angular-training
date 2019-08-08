import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/model/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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
    return this.recipes.find((recipe: Recipe) => { return recipe.id === id; });
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    const maxId = Math.max.apply(
      Math,
      this.recipes.map(
        (recipe: Recipe) => {
          return recipe.id;
        }));
    recipe.id = maxId + 1;
    this.recipes.push(recipe);
    this.recipesChangenEvt();
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChangenEvt();
  }

  deleteRecipe(id: number) {
    const pos = this.recipes.map(
      (recipe: Recipe) => {
        return recipe.id;
      }).indexOf(id);
    this.recipes.splice(pos, 1);
    this.recipesChangenEvt();
  }

  private recipesChangenEvt() {
    this.recipesChanged.next(this.recipes.slice());
  }

}
