import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/model/ingredient.model';

class ShoppingListServiceTestHelper {
  static readonly INGREDIENT_NAME = 'Test ingredient';
  static getIngredientIdByName(shoppingListService: ShoppingListService, name: string) {
    return shoppingListService.getShoppingList().findIndex((ingredient: Ingredient) => ingredient.name === name);
  }
  static getTestIngredient() {
    return new Ingredient(ShoppingListServiceTestHelper.INGREDIENT_NAME, null);
  }
}

describe('Shopping list service tests', () => {

  it('ability to add an ingredient', () => {
    const shoppingListService = new ShoppingListService();
    const ingredientsNum = shoppingListService.getShoppingList().length;
    shoppingListService.addIngredient(ShoppingListServiceTestHelper.getTestIngredient());
    expect(ingredientsNum + 1).toEqual(shoppingListService.getShoppingList().length);
  });

  it('ability to delete an ingredient', () => {
    const shoppingListService = new ShoppingListService();
    shoppingListService.addIngredient(ShoppingListServiceTestHelper.getTestIngredient());
    const ingredientsNum = shoppingListService.getShoppingList().length;
    const id = ShoppingListServiceTestHelper.getIngredientIdByName(shoppingListService,
                                                                   ShoppingListServiceTestHelper.INGREDIENT_NAME);
    shoppingListService.deleteIngredientById(id);
    expect(ingredientsNum - 1).toEqual(shoppingListService.getShoppingList().length);
  });

  it('delete an ingredient', () => {
    const shoppingListService = new ShoppingListService();
    shoppingListService.addIngredient(ShoppingListServiceTestHelper.getTestIngredient());
    const id = ShoppingListServiceTestHelper.getIngredientIdByName(shoppingListService, ShoppingListServiceTestHelper.INGREDIENT_NAME);
    shoppingListService.deleteIngredientById(id);
    expect(-1).toEqual(ShoppingListServiceTestHelper.getIngredientIdByName(shoppingListService,
                                                                           ShoppingListServiceTestHelper.INGREDIENT_NAME));
  });

  it('ability to update an ingredient', () => {
    const shoppingListService = new ShoppingListService();
    shoppingListService.addIngredient(ShoppingListServiceTestHelper.getTestIngredient());
    shoppingListService.updateIngredient(
            ShoppingListServiceTestHelper.getIngredientIdByName(shoppingListService, ShoppingListServiceTestHelper.INGREDIENT_NAME),
            new Ingredient(null, null));
    expect(-1).toEqual(ShoppingListServiceTestHelper.getIngredientIdByName(shoppingListService,
                                                                           ShoppingListServiceTestHelper.INGREDIENT_NAME));
  });

});


