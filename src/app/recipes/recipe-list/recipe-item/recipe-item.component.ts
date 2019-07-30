import { Recipe } from './../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServise: RecipeService) {
  }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeServise.recipeSelectedEmit(this.recipe);
  }

}
