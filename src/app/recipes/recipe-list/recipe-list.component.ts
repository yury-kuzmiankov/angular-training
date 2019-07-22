import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'simple test', 'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg'),
    new Recipe('test', 'simple test', 'http://kulinarnia.ru/wp-content/uploads/2016/08/sous-tartar-recept-klassicheskiy.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
