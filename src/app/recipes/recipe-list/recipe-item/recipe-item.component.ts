import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() displayRecipeDetailsEvt = new EventEmitter<Recipe>();

  constructor() {
  }
  ngOnInit() {
  }

  displayRecipeDetails(recipe: Recipe) {
    this.displayRecipeDetailsEvt.emit(recipe);
  }

}
