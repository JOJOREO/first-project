import { style } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'shopping-List-Edit',
  templateUrl: './shopping-List-Edit.component.html',
  styleUrls: ['./shopping-List-Edit.component.css'],
})
export class shoppingListEdit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  tempIngredient: Ingredient;

  

  onAddClick() {
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value);
    // this.tempIngredient.name = this.nameInputRef.nativeElement.value;
    // this.tempIngredient.amount = this.amountInputRef.nativeElement.value;
    // console.log(this.tempIngredient);
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
