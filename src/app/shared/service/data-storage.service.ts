import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/recipes/recipe.model';


@Injectable()
export class DataStorageService {
  static readonly SERVICE_URI = 'https://recipe-itiv422.firebaseio.com/recipes.json?auth=';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(DataStorageService.SERVICE_URI + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>(DataStorageService.SERVICE_URI + token).subscribe(
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
