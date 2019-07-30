import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addItem(form: NgForm) {
    const ingredientName = form.value.name;
    const ingredientAmount = form.value.amount;
    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount));
  }

}
