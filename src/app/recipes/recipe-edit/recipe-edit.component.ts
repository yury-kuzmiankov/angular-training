import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  isNewRecipe = false;
  recipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.isNewRecipe = params['id'] == null;
        if (this.isNewRecipe) {
        } else {
          this.recipe = this.recipeService.getRecipeById(parseInt(params['id'], 10));
        }
      }
    );
  }

}
