import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/recipes/recipe.model';


@Injectable()
export class DataStorageService {
  static readonly SERVICE_URI = 'https://recipe-itiv422.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    this.authService.updateToken();
    return this.httpClient.put(DataStorageService.SERVICE_URI, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.authService.updateToken();
    this.httpClient.get<Recipe[]>(DataStorageService.SERVICE_URI).subscribe(
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
