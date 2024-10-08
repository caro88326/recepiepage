import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';
import { changeIngredientServings, formatIngredientsForView, formatTime, ingredientsOfRecepies } from '../utils/recepieUtils';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule,  DividerModule, OverlayPanelModule, InputNumberModule, FormsModule, ToastModule, RouterModule],
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

  constructor (private messageService: MessageService) {
    const recepieId = Number(this.route.snapshot.params['id'])
    this.recepie = this.recepieService.getRecepiesById(recepieId)!; // deep copy for local copy
    if (this.recepieService.cart().find(r => r.id === this.recepie.id)){
      this.recepie = this.recepieService.cart().find(r => r.id === this.recepie.id)!
    }
    this.inputValue = this.recepie.person
  }
  
  ngOnInit() {
    this.cols = [
      { field: 'quantity', header: 'Menge' },
      { field: 'unit', header: 'Einheit' },
      { field: 'ingredient', header: 'Zutat' },
    ];

    // const ingredientOfRecepie = this.recepie.ingredients.map(i => {
    //   return {
    //     quantity : i.quantity, 
    //     unit : i.unit as string,
    //     ingredient : i.ingredient.rep
    //   }
    // })
    this.ing = formatIngredientsForView(this.recepie.ingredients)!
  }
  
  updatePerson() {
    let ogRecepie : RecepieInterface =  this.recepieService.allRecepies.find(r => r.id === this.recepie.id)!
    this.recepie = changeIngredientServings(this.recepie, ogRecepie, this.inputValue)
    this.ing = formatIngredientsForView(this.recepie.ingredients)
    // this.recepie.ingredients.map(i => {
    //   return {
    //     quantity : i.quantity, 
    //     unit : i.unit as string,
    //     ingredient : i.ingredient.rep
    //   }
    // })

    if (this.recepieService.cart().find(r => r.id === this.recepie.id)){
      this.recepie = changeIngredientServings(this.recepie, ogRecepie, this.inputValue)
      this.recepieService.addToCart(this.recepie)
    }
  }

  // Verändert die Anzeige, je nach dem, ob das Rezept im Cart liegt
  recepieInCartLabel(){
    if (!this.recepieService.cart().find(r => r.id === this.recepie.id)){
      return "In den Warenkorb"
    }
    else if (this.recepieService.cart().find(r => r.id === this.recepie.id))  {
      return "Aus dem Warenkorb löschen"
    }
    return "Error"
  }

  addRemoveFromCart(){
    if (!this.recepieService.cart().find(r => r.id === this.recepie.id)){
      return this.recepieService.addToCart(this.recepie)
    }
    else if (this.recepieService.cart().find(r => r.id === this.recepie.id))  {
      return this.recepieService.removeFromCart(this.recepie)
    }
  }

  showToast(){
    if (!this.recepieService.cart().find(r => r.id === this.recepie.id)){
      return this.messageService.add({ severity: 'error', summary: 'Update', detail: 'Rezept wurde aus dem Warenkorb entfernt.' });
    }
    else if (this.recepieService.cart().find(r => r.id === this.recepie.id))  {
      return this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Rezept wurde zum Warenkorb hinzugefügt.' });
    }
  }
}
