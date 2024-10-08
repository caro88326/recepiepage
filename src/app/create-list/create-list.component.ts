import { Component, inject } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { RouterModule } from '@angular/router';
import { formatIngredientsForView, ingredientsOfRecepies } from '../utils/recepieUtils';
import { FoodGroup, FoodItem, Ingredient } from '../utils/ingredients';
import { group } from 'node:console';

interface ListIngInterface { titel: string, ings: FoodItem [] }

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.scss'
})

export class CreateListComponent {
  recepieService = inject(RecepieService)
  allIngredients : FoodItem [] = []
  sortedIngredients : ListIngInterface [] = []
  viewIngredients! : {titel: string, ings : any []}[]
  obstgemüse : ListIngInterface = {titel : 'Obst und Gemüse', ings : []}
  gebäck : ListIngInterface = {titel : 'Gebäck', ings : []}
  sonstiges : ListIngInterface = {titel : 'Sonstiges', ings : []}
  konserven : ListIngInterface = {titel : 'Konserven', ings : []}
  kühlregal : ListIngInterface = {titel : 'Kühlregal', ings : []}
  fleischfisch : ListIngInterface = {titel : 'Fleisch und Fisch', ings : []}
  snacks : ListIngInterface = {titel : 'Snacks', ings : []}
  getränke : ListIngInterface = {titel : 'Getränke', ings : []}
  gewürze : ListIngInterface = {titel : 'Gewürze', ings : []}

  constructor() {
    for (let recepie of this.recepieService.cart()) {
      recepie.ingredients.map(i => {
        if (this.allIngredients.find(ing => 
          ing.ingredient.rep === i.ingredient.rep && ing.unit === i.unit)) {
            this.allIngredients.find(ing => ing.ingredient.rep === i.ingredient.rep)!.quantity += i.quantity
        } else {
          this.allIngredients.push(i)}
        }
      )
    }

    this.obstgemüse.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.vegetables || ing.ingredient.group === FoodGroup.fruit)
    this.sortedIngredients.push(this.obstgemüse)

    this.gebäck.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.bakingProducts)
    this.sortedIngredients.push(this.gebäck)

    this.sonstiges.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.backedGoods || ing.ingredient.group === FoodGroup.dryProducts 
      || ing.ingredient.group === FoodGroup.eggs || ing.ingredient.group === FoodGroup.nutsAndSeeds 
      || ing.ingredient.group === FoodGroup.readyMadeDough )
    this.sortedIngredients.push(this.sonstiges)

    this.konserven.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.cans)
    this.sortedIngredients.push(this.konserven)
  
    this.kühlregal.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.dairyProducts)
    this.sortedIngredients.push(this.kühlregal)

    this.fleischfisch.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.meat || ing.ingredient.group === FoodGroup.fish)
    this.sortedIngredients.push(this.fleischfisch)

    this.snacks.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.saltySnacks || ing.ingredient.group === FoodGroup.sweets)
    this.sortedIngredients.push(this.snacks)    

    this.getränke.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.water || ing.ingredient.group === FoodGroup.juice)
    this.sortedIngredients.push(this.getränke)

    this.gewürze.ings = Object.values(this.allIngredients).filter(ing => 
      ing.ingredient.group === FoodGroup.spice)

    this.viewIngredients = this.sortedIngredients
    for (let group of this.viewIngredients) {
      group.ings = formatIngredientsForView(group.ings)
    }


  }
}