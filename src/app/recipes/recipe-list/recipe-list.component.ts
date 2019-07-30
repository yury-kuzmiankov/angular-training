import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() displayRecipeDetailsMediatorEvt = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test1', 'simple test1', 'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg'),
    new Recipe('test2', 'simple test2', 'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  displayRecipeDetails(recipe: Recipe) {
    this.displayRecipeDetailsMediatorEvt.emit(recipe);
  }

}
