import { Component, inject, signal } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { RouterModule } from '@angular/router';
import { formatIngredientsForView, numberOfRecepies } from '../utils/recepieUtils';
import { FoodGroup, FoodItem, Ingredient, Texture } from '../utils/ingredients';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Unit, ingredients } from '../utils/ingredients';
import { title } from 'process';

interface ListIngInterface { titel: string, ings: FoodItem [] }

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
  // : FoodItem [] = []
  sortedIngredients : ListIngInterface [] = []
  hiddenSortedIngredients : ListIngInterface [] = []

  viewIngredients : { title : string, ingredients : any[]}[] = []
  // {titel: string, ings : any []}[]
  hiddelViewIngredients : { title : string, ingredients : any[]}[] = []
  // {titel: string, ings : any []}[]

  // obstgemüse : ListIngInterface = {titel : 'Obst und Gemüse', ings : []}
  // gebäck : ListIngInterface = {titel : 'Gebäck', ings : []}
  // lebensmittel : ListIngInterface = {titel : 'Lebensmittel', ings : []}
  // konserven : ListIngInterface = {titel : 'Konserven', ings : []}
  // kühlregal : ListIngInterface = {titel : 'Kühlregal', ings : []}
  // fleischfisch : ListIngInterface = {titel : 'Fleisch und Fisch', ings : []}
  // snacks : ListIngInterface = {titel : 'Snacks', ings : []}
  // getränke : ListIngInterface = {titel : 'Getränke', ings : []}
  // gewürze : ListIngInterface = {titel : 'Gewürze', ings : []}

  quantityValue! : number
  ing : any
  units : any [] = []
  selectedUnit : any
  i : any[] = []
  selectedI! : string

  groups : { title : string, g : FoodGroup[], ingredients : FoodItem[], selected : boolean }[] = [
    { title : 'Obst und Gemüse',  g: [FoodGroup.fruit, FoodGroup.vegetables],     ingredients : [], selected : true },
    { title : 'Gebäck',           g : [FoodGroup.bakingProducts],                 ingredients : [], selected : true },
    { title : 'Lebensmittel',     g : [FoodGroup.backedGoods, FoodGroup.dryProducts, FoodGroup.eggs, FoodGroup.nutsAndSeeds, FoodGroup.readyMadeDough], ingredients : [], selected : true },
    { title : 'Konserven',        g : [FoodGroup.cans],                           ingredients : [], selected : true },
    { title : 'Kühlregal',        g : [FoodGroup.dairyProducts],                  ingredients : [], selected : true },
    { title : 'Fleisch und Fisch',g : [FoodGroup.meat, FoodGroup.fish],           ingredients : [], selected : true },
    { title : 'Snacks',           g : [FoodGroup.sweets, FoodGroup.saltySnacks],  ingredients : [], selected : true },
    { title : 'Getränke',         g : [FoodGroup.water, FoodGroup.juice],         ingredients : [], selected : true },
    { title : 'Gewürze',          g : [FoodGroup.spice],                          ingredients : [], selected : false },
  ]



  constructor() {
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
        }}
      )
    }
    // for (let recepie of this.recepieService.cart()) {
    //   recepie.ingredients.map(i => {
    //     if (this.allIngredients.find(ing => 
    //       ing.ingredient.rep === i.ingredient.rep && ing.unit === i.unit)) {
    //         this.allIngredients.find(ing => ing.ingredient.rep === i.ingredient.rep)!.quantity += i.quantity
    //     } else {
    //       this.allIngredients.push(i)}
    //     }
    //   )
    // }

    // const groups : { title : string, g : FoodGroup[], ingredients : FoodItem[], selected : boolean }[] = [
    //   { title : 'Obst und Gemüse',  g: [FoodGroup.fruit, FoodGroup.vegetables],     ingredients : [], selected : true },
    //   { title : 'Gebäck',           g : [FoodGroup.bakingProducts],                 ingredients : [], selected : true },
    //   { title : 'Lebensmittel',     g : [FoodGroup.backedGoods, FoodGroup.dryProducts, FoodGroup.eggs, FoodGroup.nutsAndSeeds, FoodGroup.readyMadeDough], ingredients : [], selected : true },
    //   { title : 'Konserven',        g : [FoodGroup.cans],                           ingredients : [], selected : true },
    //   { title : 'Kühlregal',        g : [FoodGroup.dairyProducts],                  ingredients : [], selected : true },
    //   { title : 'Fleisch und Fisch',g : [FoodGroup.meat, FoodGroup.fish],           ingredients : [], selected : true },
    //   { title : 'Snacks',           g : [FoodGroup.sweets, FoodGroup.saltySnacks],  ingredients : [], selected : true },
    //   { title : 'Getränke',         g : [FoodGroup.water, FoodGroup.juice],         ingredients : [], selected : true },
    //   { title : 'Gewürze',          g : [FoodGroup.spice],                          ingredients : [], selected : false },
    // ]

    for (let ingredient of this.allIngredients()) {
      for (let group of this.groups) {
        if ( group.g.includes(ingredient.ingredient.group)) {
          group.ingredients.push(ingredient);
          break;
        }
      }
    }

    for (let group of this.groups) {
      if (group.selected === true) {
        let selectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        console.log(selectedGroup)
        this.viewIngredients.push(selectedGroup)
        console.log(this.viewIngredients)
      } else if (group.selected === false) {
        let notSelectedGroup : { title : string, ingredients : any[]} = {title : group.title, ingredients : formatIngredientsForView(group.ingredients)}
        this.hiddelViewIngredients.push(notSelectedGroup)
      }

    }



    
    // for (let group of this.viewIngredients) {
    //   if (group.selected === true) {
    //     group.ingredients = formatIngredientsForView(group.ingredients)
    //   }
    // }







    // for (let group of groups) {

    //   if (this.obstgemüse.titel === group.titel) {
        
    //       this.obstgemüse.ings = this.allIngredients().filter(i => {
    //         for (let x of group.g) {
    //           i.ingredient.group === x}
    //       }
    //     )
    //     console.log(this.obstgemüse.ings)
    //     }
    //   this.sortedIngredients.push(this.obstgemüse)

      // if (this.lebensmittel.titel === group.titel) {
      //   for (let x of group.g) {
      //     this.lebensmittel.ings = this.allIngredients().filter(i => {
      //       return i.ingredient.group === x
      //     })
      //   }} 
      // this.sortedIngredients.push(this.lebensmittel)

      // this.lebensmittel.ings = this.allIngredients().filter(ing => { 
      //   if (this.lebensmittel.titel === group.titel) {
      //     for (let x of group.g){
      //     return ing.ingredient.group === x}
      //   }
      //   return 'Error'}
      // )
      // this.sortedIngredients.push(this.lebensmittel)
    // }



    // this.obstgemüse.ings = this.allIngredients().filter(ing => 
    //   ing.ingredient.group === FoodGroup.vegetables || ing.ingredient.group === FoodGroup.fruit)
    // this.sortedIngredients.push(this.obstgemüse)

    // this.obstgemüse.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.vegetables || ing.ingredient.group === FoodGroup.fruit)
    // this.sortedIngredients.push(this.obstgemüse)

    // this.gebäck.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.bakingProducts)
    // this.sortedIngredients.push(this.gebäck)

    // this.lebensmittel.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.backedGoods || ing.ingredient.group === FoodGroup.dryProducts 
    //   || ing.ingredient.group === FoodGroup.eggs || ing.ingredient.group === FoodGroup.nutsAndSeeds 
    //   || ing.ingredient.group === FoodGroup.readyMadeDough )
    // this.sortedIngredients.push(this.lebensmittel)

    // this.konserven.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.cans)
    // this.sortedIngredients.push(this.konserven)
  
    // this.kühlregal.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.dairyProducts)
    // this.sortedIngredients.push(this.kühlregal)

    // this.fleischfisch.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.meat || ing.ingredient.group === FoodGroup.fish)
    // this.sortedIngredients.push(this.fleischfisch)

    // this.snacks.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.saltySnacks || ing.ingredient.group === FoodGroup.sweets)
    // this.sortedIngredients.push(this.snacks)    

    // this.getränke.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.water || ing.ingredient.group === FoodGroup.juice)
    // this.sortedIngredients.push(this.getränke)

    // this.gewürze.ings = Object.values(this.allIngredients()).filter(ing => 
    //   ing.ingredient.group === FoodGroup.spice)
    // this.hiddenSortedIngredients.push(this.gewürze)

    // this.viewIngredients = this.sortedIngredients
    // for (let group of this.viewIngredients) {
    //   group.ings = formatIngredientsForView(group.ings)
    // }

    // this.hiddelViewIngredients = this.hiddenSortedIngredients 
    // for (let group of this.hiddelViewIngredients) {
    //   group.ings = formatIngredientsForView(group.ings)
    // }


  const valuesUnit = Object.values(Unit)
  valuesUnit.forEach((value) => {
    this.units.push(value)})

  const valuesIngredient = Object.values(ingredients)
  valuesIngredient.forEach((value) => {
    this.i.push(value.rep)
  })

  }

  getSelectedIng(ingData : any) {
    this.ing = ingData
    this.quantityValue = this.ing.quantity
    this.selectedUnit = this.ing.unit
    this.selectedI = this.ing.ingredient
  }

  saveEdit(){
    this.ing.quantity = this.quantityValue  
    this.ing.unit = this.selectedUnit
    this.ing.ingredient = this.selectedI

    let newIng : FoodItem = {
      quantity : this.ing.quantity,
      unit : this.ing.unit,
      ingredient : Object.values(ingredients).find(i => i.rep === this.ing.ingredient)!
    }

    

    // this.allIngredients.push(newIng)
    // this.createIngredients()
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
