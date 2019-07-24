import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 20),
    new Ingredient('Meat', 2)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteItem(name: string) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.name !== name);
  }

}
