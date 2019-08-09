import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Navigate } from 'src/app/shared/model/navigate.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  isNewRecipe = false;
  recipe: Recipe;
  recipeForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.isNewRecipe = params[Recipe.FIELD_ID] == null;
        if (!this.isNewRecipe) {
          this.recipe = this.recipeService.getRecipeById(parseInt(params[Recipe.FIELD_ID], 10));
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName: string;
    let recipeImagePath: string;
    let recipeDescription : string;
    const recipeIngredients = new FormArray([]);
    if (!this.isNewRecipe) {
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      if (this.recipe.ingredients) {
        for (const ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            this.createRecipeFormGroup(ingredient.name, ingredient.amount)
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get(Recipe.FIELD_INGREDIENTS)).push(
      this.createRecipeFormGroup(null, null));
  }

  createRecipeFormGroup(name: string, amount: number) {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }

  onSubmit() {
    const recipe = new Recipe(
      0,
      this.recipeForm.value[Recipe.FIELD_NAME],
      this.recipeForm.value[Recipe.FIELD_DESCRIPTION],
      this.recipeForm.value[Recipe.FIELD_IMAGE_PATH],
      this.recipeForm.value[Recipe.FIELD_INGREDIENTS]);
    if (this.isNewRecipe) {
      this.recipeService.addRecipe(recipe);
    } else {
      recipe.id = this.recipe.id;
      this.recipeService.updateRecipe(this.recipe.id, recipe);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate([Navigate.LEVEL_UP], { relativeTo: this.activatedRoute });
  }

  onDeleteIngredient(id: number) {
    (<FormArray>this.recipeForm.get(Recipe.FIELD_INGREDIENTS)).removeAt(id);
  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get(Recipe.FIELD_INGREDIENTS)).controls;
  }

}
