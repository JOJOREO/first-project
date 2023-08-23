import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class shoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 2),
    new Ingredient('tomates', 5),
    new Ingredient('potatos', 12),
  ];

  onIngredientAdded(newAddedIngredient: Ingredient) {
    console.log('newAddedIngredient', newAddedIngredient);
    this.ingredients.push(newAddedIngredient);
    console.log(this.ingredients);
  }
}
