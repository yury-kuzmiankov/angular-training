import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
