import { Component, inject, signal } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { RouterModule } from '@angular/router';
import { formatIngredientsForView, numberOfRecepies } from '../utils/recepieUtils';
import { FoodGroup, FoodItem } from '../utils/ingredients';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Unit, ingredients } from '../utils/ingredients';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [RouterModule, DividerModule, ButtonModule, OverlayPanelModule, InputNumberModule, FormsModule, DropdownModule],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.scss'
})

export class CreateListComponent {
  recepieService = inject(RecepieService)
  numberOfRecepies = numberOfRecepies()

  allIngredients = signal<FoodItem[]>([])
  viewIngredients : { title : string, ingredients : any[]}[] = []
  hiddelViewIngredients : { title : string, ingredients : any[]}[] = []

  ing : any
  quantityValue! : number
  units : any [] = []
  selectedUnit : any
  i : any[] = []
  selectedI! : string

  groups : { title : string, g : FoodGroup[], ingredients : FoodItem[], selected : boolean }[] = [
    { title : 'Obst und Gemüse',  g : [FoodGroup.fruit, FoodGroup.vegetables],    ingredients : [], selected : true },
    { title : 'Gebäck',           g : [FoodGroup.bakingProducts],                 ingredients : [], selected : true },
    { title : 'Lebensmittel',     g : [FoodGroup.backedGoods, FoodGroup.dryProducts, FoodGroup.eggs, FoodGroup.nutsAndSeeds, FoodGroup.readyMadeDough], ingredients : [], selected : true },
    { title : 'Konserven',        g : [FoodGroup.cans],                           ingredients : [], selected : true },
    { title : 'Kühlregal',        g : [FoodGroup.dairyProducts],                  ingredients : [], selected : true },
    { title : 'Fleisch und Fisch',g : [FoodGroup.meat, FoodGroup.fish],           ingredients : [], selected : true },
    { title : 'Snacks',           g : [FoodGroup.sweets, FoodGroup.saltySnacks],  ingredients : [], selected : true },
    { title : 'Getränke',         g : [FoodGroup.water, FoodGroup.juice],         ingredients : [], selected : true },
    { title : 'Gewürze',          g : [FoodGroup.spice],                          ingredients : [], selected : false },
    { title : 'Extra Hinzugefügt',      g : [],                                         ingredients : [], selected : true }
  ]

  constructor() {
    // get all ingredients of the cart recepies
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
      }
      )
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

    this.formatIngredients()

    const valuesUnit = Object.values(Unit)
    valuesUnit.forEach((value) => {
      this.units.push(value)})

    const valuesIngredient = Object.values(ingredients)
    valuesIngredient.forEach((value) => {
      this.i.push(value.rep)
    })
  }

  formatIngredients () {
    this.viewIngredients = []
    this.hiddelViewIngredients = []
    // format into view
    for (let group of this.groups) {
      if (group.selected === true) {
        let selectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        this.viewIngredients.push(selectedGroup)
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

  saveEdit(){
    let newIng : FoodItem = {
      ingredient : Object.values(ingredients).find(i => i.rep === this.selectedI)!,
      quantity : this.quantityValue,
      unit : this.selectedUnit,
    }

    if (this.ing){
      let removeIng : FoodItem = {
        ingredient : Object.values(ingredients).find(i => i.rep === this.ing.ingredient)!,
        quantity : this.ing.quantity,
        unit : this.ing.unit,
      }

      // remove old value
      for (let group of this.groups) {
        let ings = group.ingredients.map(i => JSON.stringify(i))
        if (ings.includes(JSON.stringify(removeIng))){
          group.ingredients.splice(group.ingredients.indexOf(removeIng), 1)
        }    
      }

      // add new value
      for (let group of this.groups) {
        if (group.ingredients.find(ing => 
          ing.ingredient.rep === newIng.ingredient.rep && ing.unit === newIng.unit)){
            group.ingredients.find(ing => ing.ingredient.rep === newIng.ingredient.rep)!.quantity += newIng.quantity
        } else if (group.g.includes(newIng.ingredient.group)){
          group.ingredients.push(newIng)
        }
      }
    } else { // dafür dann neue Funktion schreiben, bei Hinzufügen, kann man auch Produkte hinschreiben, die nicht in der Ingredientliste stehen
        this.groups.find(group => group.title === 'Extra Hinzugefügt')!.ingredients.push(newIng)
      }

    this.formatIngredients()
  }

  addIng(){
    for (let group of this.hiddelViewIngredients) {
      if (group.ingredients.find(i => i === this.ing)) {
        group.ingredients.splice(group.ingredients.indexOf(this.ing),1)
        if (!this.viewIngredients.find(g => g.title === group.title)) {
          this.viewIngredients.push({title : group.title , ingredients : [this.ing]})
        } else {
          this.viewIngredients.find(g => g.title === group.title)?.ingredients.push(this.ing)
        }
      }
    }
  }

  removeIng(){
    for (let group of this.viewIngredients) {
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
