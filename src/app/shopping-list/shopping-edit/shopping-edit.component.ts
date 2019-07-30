import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', null) shoppingListForm: NgForm;
  startedEditingSubscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemId = id;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(id);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const ingredientName = form.value.name;
    const ingredientAmount = form.value.amount;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemId, ingredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.shoppingListForm.reset();
  }

  onClear() {
    this.editMode = false;
    console.log(this.shoppingListForm.value);
    console.log(this.shoppingListForm.form.get('amount').value);
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredientById(this.editedItemId);
    this.onClear();
  }

}
