import { RecipeService } from './../../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.httpClient.put('https://recipe-itiv422.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://recipe-itiv422.firebaseio.com/recipes.json').subscribe(
        (recipes: Recipe[]) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.setRecipes(recipes);
        }
    );
  }
}
