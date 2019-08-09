import { Ingredient } from '../shared/model/ingredient.model';

export class Recipe {
  static readonly FIELD_ID = 'id';
  static readonly FIELD_NAME = 'name';
  static readonly FIELD_DESCRIPTION = 'description';
  static readonly FIELD_IMAGE_PATH = 'imagePath';
  static readonly FIELD_INGREDIENTS = 'ingredients';
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]) {
  }
}
