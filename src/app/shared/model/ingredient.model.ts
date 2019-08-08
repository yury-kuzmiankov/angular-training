export class Ingredient {
  static readonly FIELD_NAME = 'name';
  static readonly FIELD_AMOUNT = 'amount';
  constructor(public name: string, public amount: number) { }
}
