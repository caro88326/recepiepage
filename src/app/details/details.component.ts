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
import { Ingredient, RecepieInterface } from '../interfaces/recepie-interface';
import { changeIngredientServings, formatTime } from '../utils/recepieUtils';

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
  timeUnit = formatTime;
  cols! : {field : string, header : string} [];
  ing! : any [];

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
        unit: i.unit, 
        ingredient : i.ingredient.rep
      }
    })
    let ingredientSpice = this.recepie.ingredients.spice.map( i => {
      return {
        quantitie : i.quantitie,  
        unit: i.unit, 
        ingredient : i.ingredient.rep
      }
    })

    this.ing = [...ingredientFood, ...ingredientSpice]


    // this.recepieService.changeIngredientServings(this.ing, this.inputValue)
  }
  
  updatePerson(inputValue : number) {

    // falls in cart: in cart ändern
    // falls nicht, lokale copie hier ändern
    changeIngredientServings(this.ing, inputValue, this.recepie.person) //Muss darüber stehen, anson
    this.recepie.person = inputValue
    // this.recepie = this.recepieService.changeServings(this.recepie.id, this.inputValue)!;

  }
}
