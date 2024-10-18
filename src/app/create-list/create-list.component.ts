import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { RecepieService } from '../recepie.service';
import { formatIngredientsForView, numberOfRecepies, formatUnitsOfIngredients } from '../utils/recepieUtils';
import { Unit, ingredients, FoodItem } from '../utils/ingredients';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [RouterModule, DividerModule, ButtonModule, OverlayPanelModule, InputNumberModule, FormsModule, DropdownModule, InputTextModule],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.scss'
})

export class CreateListComponent {
  recepieService = inject(RecepieService)
  numberOfRecepies = numberOfRecepies()
  groups = this.recepieService.groups
  formatUnitsOfIngredients = formatUnitsOfIngredients

  allIngredients = signal<FoodItem[]>([])
  viewIngredients = this.recepieService.selectedIngredients 
  hiddelViewIngredients : { title : string, ingredients : any[]}[] = []

  viewProducts = this.recepieService.viewProducts

  units : any [] = []
  i : any[] = []

  // edit dropdown
  ing : any
  quantityValue! : number
  selectedUnit : any
  selectedI! : string

  // new dropdown and input
  dropdownD : boolean = false
  inputD : boolean = true
  seleI! : string 
  seleP! : string 
  seleU : any 
  seleQ : number = 1

  dropdownDisabel(x : boolean){
    if (x === true) {
      this.dropdownD = true
    } else if (x === false){
      this.dropdownD = false
    } 
    return this.dropdownD
  }
  inputDisabel(x : boolean){
    if (x === true) {
      this.inputD = true
    } else if (x === false){
      this.inputD = false
    } 
    return this.inputD
  }

  constructor() {
    // get all ingredients of the cart recepies
    for (let group of this.groups){
      group.ingredients = []
    }
    for (let recepie of this.recepieService.cart()) {
      recepie.ingredients.map(i => {
        if (this.allIngredients().find(ing => 
          ing.ingredient.rep === i.ingredient.rep && ing.unit === i.unit)) {
            this.allIngredients.update(ingredients => {
              ingredients.find(ing => ing.ingredient.rep === i.ingredient.rep)!.quantity += i.quantity
              return [...ingredients]
            })
        } else {
          this.allIngredients.update(ingredients => {
            ingredients.push(i)
            return [...ingredients]
        })
        } //TODO funktion die alle Einheiten umrechnet, sodass mehr zusammengefasst werden kann
      })
    }

    // sort ingredients into groups
    for (let ingredient of this.allIngredients()) {
      for (let group of this.groups) {
        if ( group.g.includes(ingredient.ingredient.group)) {
          group.ingredients.push(ingredient);
          break;
        }
      }
    }

    formatUnitsOfIngredients(this.groups)
    this.formatIngredients()

    this.units = Object.values(Unit)

    this.i = Object.values(ingredients).map( v => v.rep)
  }

  formatIngredients () {
    this.viewIngredients.set([])
    this.hiddelViewIngredients = []
    // format into view
    for (let group of this.groups) {
      if (group.selected === true) {
        let selectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        this.viewIngredients.update(sI =>{
          sI.push(selectedGroup)
          return [...sI]}
        )
        // this.viewIngredients.push(selectedGroup)
      } else if (group.selected === false) {
        let notSelectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        this.hiddelViewIngredients.push(notSelectedGroup)
      }
    }
  }

  getSelectedIng(ingData : any) {
    this.ing = ingData
    this.quantityValue = this.ing.quantity
    this.selectedUnit = this.ing.unit
    this.selectedI = this.ing.ingredient
  }

  // FUNTIONIERT NICHT GANZ RICHTIG
  saveEdit(){
    let newIng : FoodItem = {
      ingredient : Object.values(ingredients).find(i => i.rep === this.selectedI)!,
      quantity : this.quantityValue,
      unit : this.selectedUnit,
    }

    let removeIng : FoodItem = {
      ingredient : Object.values(ingredients).find(i => i.rep === this.ing.ingredient)!,
      quantity : this.ing.quantity,
      unit : this.ing.unit,
    }

    // remove old value
    let jsonRemoveIng = JSON.stringify(removeIng)
    for (let group of this.groups) {

      let ings = group.ingredients.map(i => JSON.stringify(i))
      let index = ings.indexOf(jsonRemoveIng)
      if (index >= 0) {
        group.ingredients.splice(index, 1)
        break          
      }
    }

    // add new value
    for (let group of this.groups) {
      let f = group.ingredients.find(ing => ing.ingredient.rep === newIng.ingredient.rep && ing.unit === newIng.unit)
      if (f) {
        f.quantity += newIng.quantity
        break
      } else if (group.g.includes(newIng.ingredient.group)){
        group.ingredients.push(newIng)
        break
      }
    } 

    this.formatIngredients()
  }

  saveNew(){
    if (Object.values(ingredients).find(i => i.rep === this.seleI)) {
      let newIng : FoodItem = {
        ingredient : Object.values(ingredients).find(i => i.rep === this.seleI)!,
        quantity : this.seleQ,
        unit : this.seleU,
      }
      this.groups.find(group => group.title === 'Extra Hinzugefügt')!.ingredients.push(newIng)
      this.formatIngredients()
    } else {
      let newPrd = {
        ingredient : this.seleP,
        quantity : this.seleQ,
        unit : this.seleU,
      }
      this.viewProducts.ingredients.push(newPrd)
      this.viewIngredients.update(ings => {
        ings.splice(ings.indexOf(this.viewProducts))
        ings.push(this.viewProducts)
        return[...ings]
      }
      )
    }
    this.seleI=''
    this.seleP=''
    this.seleQ
    this.seleU=NaN
  }

  addIng(){
    for (let group of this.hiddelViewIngredients) {
      if (group.ingredients.find(i => i === this.ing)) {
        group.ingredients.splice(group.ingredients.indexOf(this.ing),1)
        this.viewIngredients.update( sI => {
          if (!sI.find(g => g.title === group.title)) {
            sI.push({title : group.title, ingredients : [this.ing]})
            return [...sI]
          } else {
            sI.find(g => g.title === group.title)?.ingredients.push(this.ing)
            return [...sI]
          }
        })
      }
    }
  }

  removeIng(){
    for (let group of this.viewIngredients()) {
      if (group.ingredients.find(i => i === this.ing)) {
        group.ingredients.splice(group.ingredients.indexOf(this.ing),1)
        if (!this.hiddelViewIngredients.find(g => g.title === group.title)) {
          this.hiddelViewIngredients.push({title : group.title , ingredients : [this.ing]})
        } else {
          this.hiddelViewIngredients.find(g => g.title === group.title)?.ingredients.push(this.ing)
        }
      }
    }
  }
}
