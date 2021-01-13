import { TestBed } from '@angular/core/testing';
import { ShoppingEditComponent } from './shopping-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

describe('Component: ShoppingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingEditComponent],
      imports: [ReactiveFormsModule],
      providers: [ShoppingListService]
    });
  });

  it('Should create the shopping edit component', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should add an ingredient', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('button[type=\'submit\']').textContent).toContain('Add');
  });

  it('Should switch to edit mode', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const compiled = fixture.debugElement.nativeElement;
    const shoppingEditComponent = fixture.debugElement.componentInstance;
    shoppingEditComponent.editMode = true;
    fixture.detectChanges();
    expect(compiled.querySelector('button[type=\'submit\']').textContent).toContain('Update');
  });

  it('Should clean the form', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const shoppingEditComponent = fixture.debugElement.componentInstance;
    shoppingEditComponent.editMode = true;
    fixture.detectChanges();
    shoppingEditComponent.onClear();
    expect(shoppingEditComponent.editMode).toEqual(false);
  });

  it('Should remove an ingridient', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const shoppingEditComponent = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(ShoppingListService);
    const spy = spyOn(dataService, 'deleteIngredientById');
    fixture.detectChanges();
    shoppingEditComponent.onDelete();
    expect(spy.calls.count()).toEqual(1);
  });

  it('Should add an ingridient', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const shoppingEditComponent = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(ShoppingListService);
    const spy = spyOn(dataService, 'addIngredient');
    fixture.detectChanges();
    shoppingEditComponent.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });

  it('Should update an ingridient', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const shoppingEditComponent = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(ShoppingListService);
    const spy = spyOn(dataService, 'updateIngredient');
    shoppingEditComponent.editMode = true;
    fixture.detectChanges();
    shoppingEditComponent.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });
});
