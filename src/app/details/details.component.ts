import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';
import { changeIngredientServings, formatTime } from '../utils/recepieUtils';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule,  DividerModule, OverlayPanelModule, InputNumberModule, FormsModule, RouterModule],
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
  inputValue! : number 

  constructor () {
    const recepieId = Number(this.route.snapshot.params['id'])
    this.recepie = this.recepieService.getRecepiesById(recepieId)!; // deep copy for local copy
  }
  
  ngOnInit() {
    this.cols = [
      { field: 'quantity', header: 'Menge' },
      { field: 'unit', header: 'Einheit' },
      { field: 'ingredient', header: 'Zutat' },
    ];

    const ingredientOfRecepie = this.recepie.ingredients.map(i => {
      return {
        quantity : i.quantity, 
        unit : i.unit as string,
        ingredient : i.ingredient.rep
      }
    })

    this.ing = ingredientOfRecepie


    // this.recepieService.changeIngredientServings(this.ing, this.inputValue)
  }
  
  updatePerson() {
    // falls in cart: in cart ändern
    // falls nicht, lokale copie hier ändern
    this.ing = changeIngredientServings(this.ing, this.inputValue, this.recepie.person) //Muss darüber stehen, anson
    this.recepie.person = this.inputValue
    // this.recepie = this.recepieService.changeServings(this.recepie.id, this.inputValue)!;

  }
}
