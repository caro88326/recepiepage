import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';
import { timeUnit } from '../utils/timeUnit';
import { Ingredient } from '../interfaces/ingredients-interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule,  DividerModule, OverlayPanelModule, InputNumberModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recepieService = inject(RecepieService);
  recepie: RecepieInterface;
  timeUnit = timeUnit;
  cols! : {field : string, header : string} [];
  ing! : Ingredient [];
  inputValue! : number;

  constructor () {
    const recepieId = Number(this.route.snapshot.params['id'])
    this.recepie = this.recepieService.getRecepiesById(recepieId)!; // deep copy for local copy
  }
  
  ngOnInit() {
    this.cols = [
      { field: 'quantitie', header: 'Menge' },
      { field: 'unit', header: 'Einheit' },
      { field: 'ingredient', header: 'Zutat' },
    ];

    let ingredientFood = this.recepie.ingredients.food.map( i => {
      return {
        quantitie : i.quantitie,  
        unit: i.unit.unit!, 
        ingredient : i.ingredient.rep!
      }
    })
    let ingredientSpice = this.recepie.ingredients.spice.map( i => {
      return {
        quantitie : i.quantitie,  
        unit: i.unit.unit!, 
        ingredient : i.ingredient.rep!
      }
    })

    this.ing = [...ingredientFood, ...ingredientSpice]

    let index = new Array()
    for(var i = 1; i<=this.recepie.instruction.length; i++) {
      index[i] = i
    }
    // this.recepieService.changeIngredientServings(this.ing, this.inputValue)
  }
  
  updatePerson() {

    // falls in cart: in cart ändern
    // falls nicht, lokale copie hier ändern
    this.recepieService.changeIngredientServings(this.ing, this.inputValue, this.recepie.person) //Muss darüber stehen, anson
    this.recepie.person = this.inputValue
    // this.recepie = this.recepieService.changeServings(this.recepie.id, this.inputValue)!;

  }
}
