import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { RecepieService } from '../recepie.service';
import { formatIngredientsForView, formatUnitsOfIngredients, numberOfRecepies } from '../utils/recepieUtils';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})

export class ShoppingListComponent {
  recepieService = inject(RecepieService)
  shoppingIngredients = this.recepieService.selectedIngredients
  numberOfRecepies = numberOfRecepies()
  groups = this.recepieService.groups
  viewProducts = this.recepieService.viewProducts

  constructor(){
    formatUnitsOfIngredients(this.groups)
    this.shoppingIngredients.set([])
    // format into view
    for (let group of this.groups) {
      if (group.selected === true) {
        let selectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        this.shoppingIngredients.update(sI =>{
          sI.push(selectedGroup)
          return [...sI]}
        )
      } 
    }
    this.shoppingIngredients.update(sI => {
      sI.push(this.viewProducts)
      return [...sI]}
    )

    let x = []
    for (let group of this.shoppingIngredients()){
      for (let v of group.ingredients){
        let c = []
        c.push(v.quantity)
        c.push(v.unit)
        c.push(v.ingredient)
        x.push(c)
      }
    }

    console.log(JSON.stringify(x))
  }

}
