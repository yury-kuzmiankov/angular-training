import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEditForm', null) shoppingListForm: NgForm;
  startedEditingSubscription: Subscription;
  editMode = false;
  editedItemId: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemId = id;
        this.editMode = true;
        const editedItem = this.shoppingListService.getIngredientById(id);
        this.shoppingListForm.setValue({
          name: editedItem.name,
          amount: editedItem.amount
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
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredientById(this.editedItemId);
    this.onClear();
  }

}
