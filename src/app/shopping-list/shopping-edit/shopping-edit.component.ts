import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingEditForm: FormGroup;
  startedEditingSubscription: Subscription;
  editMode = false;
  editedItemId: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingEditForm = new FormGroup({
      name : new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemId = id;
        this.editMode = true;
        const editedItem = this.shoppingListService.getIngredientById(id);
        this.shoppingEditForm.setValue({
          name: editedItem.name,
          amount: editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }

  onSubmit() {
    const ingredientName = this.shoppingEditForm.value.name;
    const ingredientAmount = this.shoppingEditForm.value.amount;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemId, ingredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.shoppingEditForm.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingEditForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredientById(this.editedItemId);
    this.onClear();
  }

}
