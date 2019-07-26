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
  isNew = false;
  recipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.isNew = params['id'] == null;
        if (this.isNew) {
          this.recipe = new Recipe(0, '', '', '', []);
        } else{
          this.recipe = this.recipeService.getRecipeById(+params['id']);
        }
      }
    );
  }

}
