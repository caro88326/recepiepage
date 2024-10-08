import { RecepieInterface } from "../interfaces/recepie-interface";
import { FoodItem } from "./ingredients";

export function changeIngredientServings(recepie : RecepieInterface, ogRecepie : RecepieInterface, inputValue : number){
  for (let i of recepie.ingredients){ 
    const ogI = ogRecepie.ingredients.find(ogI => ogI?.ingredient.rep === i.ingredient.rep)
      i.quantity = Math.round((ogI!.quantity * inputValue / ogRecepie.person)*100)/100    
  }
  recepie.person = inputValue
  return recepie
}

export function formatTime(time: number) {
  var hours = Math.floor(time/60);
  var minutes = time % 60;
  return (hours === 0 ? '' : hours + 'h ') + (minutes === 0 ? '' : minutes + 'min') 
}

export function ingredientsOfRecepies(recepie : RecepieInterface) {
  return recepie.ingredients.map(i => {
    return {
      quantity : i.quantity, 
      unit : i.unit as string,
      ingredient : i.ingredient.rep
    }
  })
}

export function formatIngredientsForView(ingredients : FoodItem []) {
  return ingredients.map(i => {
    return {
      quantity : i.quantity, 
      unit : i.unit as string,
      ingredient : i.ingredient.rep
    }
  })
}