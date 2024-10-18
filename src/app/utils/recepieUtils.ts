import { RecepieInterface } from "../interfaces/recepie-interface";
import { FoodItem, FoodGroup, Ingredient, Unit, Texture } from "./ingredients";
import { RecepieService } from "../recepie.service";
import { inject } from "@angular/core";

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

export function formatIngredientsForView(ingredients : FoodItem []) {
  return ingredients.map(i => {
    return {
      quantity : i.quantity, 
      unit : i.unit as string,
      ingredient : i.ingredient.rep
    }
  })
}

export function numberOfRecepies () {
  let recepieService = inject(RecepieService)
  if (recepieService.cartLength() ===  1) {
    return '1 Rezept'
  } else {
    return recepieService.cartLength() + ' Rezepte'
  }
}

function shortcutFormatUnitToG(value : FoodItem ,conversionNumber : number){
  value.quantity *= conversionNumber
  value.unit = Unit.g
  return value
}

function formatUnit(value : FoodItem){
  // allgemiene Umrechnungen
  if (value.unit === Unit.kg) {shortcutFormatUnitToG(value, 1000)} 

  if (value.unit === Unit.l) {
    value.quantity *= 1000
    value.unit = Unit.ml
  }

  // Umrechnungen nach texture
  if (value.ingredient.texture === 'fein (z.B. Backpulver)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 10)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 3)}
  }

  if (value.ingredient.texture === 'körnig (z.B. Salz/Trockenhefe)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 10)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 3)}
  }

  if (value.ingredient.texture === 'Gewürz-Pulver (z.B. Currypulver, Paprikapulver)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 8)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 4)}
  }

  if (value.ingredient.texture === 'cremig (z.B. Honig)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 15)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 6)}
  }

  if (value.ingredient.texture === 'gemahlen (z.B. Pfeffer)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 20)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 6)}
  }

  if (value.ingredient.texture === 'getrocknet (z.B. getrockneter Oregano)'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 6)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 2)}
  }

  if (value.ingredient.texture === 'Butter'){
    if (value.unit === Unit.EL) {shortcutFormatUnitToG(value, 10)}
    if (value.unit === Unit.TL) {shortcutFormatUnitToG(value, 5)}
  }

  if (value.ingredient.texture === 'flüssig (z.B. Öl, Sojasauce)'){
    if (value.unit === Unit.EL){
      value.quantity *= 15
      value.unit = Unit.ml
    }
    if (value.unit === Unit.TL){
      value.quantity *= 5
      value.unit = Unit.ml
    }
  }
}

export function formatUnitsOfIngredients(groups : { title : string, g : FoodGroup[], ingredients : FoodItem[], selected : boolean }[]){
  let ingredientsMap : {[key : string] : FoodItem[]}= {}
  let ingredientsIntoGroups : FoodItem[] = []
  // group dubbel all ingredients 
  for (let group of groups){
    for (let ing of group.ingredients) {
      let key = ing.ingredient.rep
      if (key in ingredientsMap) {
        ingredientsMap[key].push(ing)
      } else {
        ingredientsMap[key] = [ing]
      }
    }
    group.ingredients = []
  }
  // format the unit of the ingredients and summ up
  for (let value of Object.entries(ingredientsMap)){
    if (value[1].length > 1){
      let gValues = []
      let mlValues = []
      for (let i of value[1]){
        formatUnit(i)
        if (i.unit === Unit.g){
          gValues.push(i.quantity)
        } else if (i.unit === Unit.ml){
          mlValues.push(i.quantity)
        } else {
          ingredientsIntoGroups.push(i)
        }
      }

      if (gValues.length > 0){
        let gSum = gValues.reduce((pSum, quantity) => pSum + quantity, 0)
        if (gSum >= 1000){
          gSum/=1000
          let newGV : FoodItem = {ingredient: value[1][0].ingredient, quantity : gSum, unit : Unit.kg}
          ingredientsIntoGroups.push(newGV)
        } else {
          let newGV : FoodItem = {ingredient: value[1][0].ingredient, quantity : gSum, unit : Unit.g}
          ingredientsIntoGroups.push(newGV)
        }
      }

      if (mlValues.length > 0){
        let mlSum = mlValues.reduce((pSum, quantity) => pSum + quantity, 0)
        if (mlSum >= 1000){
          mlSum/=1000
          let newMlV : FoodItem = {ingredient: value[1][0].ingredient, quantity : mlSum, unit : Unit.l}
          ingredientsIntoGroups.push(newMlV)
        } else {
          let newMlV : FoodItem = {ingredient: value[1][0].ingredient, quantity : mlSum, unit : Unit.ml}
          ingredientsIntoGroups.push(newMlV)
        }
      }
      
    } else {
      for (let i of value[1]){
        ingredientsIntoGroups.push(i)
      }
    }
  }
  // convert the new ingredients into the groups
  for (let i of ingredientsIntoGroups){
    for (let group of groups){
      if ( group.g.includes(i.ingredient.group)) {
        group.ingredients.push(i);
        break;
      }
    }
  }
  console.log(groups)
  return groups
  
}

//   // notDefined = 'nicht Definiert',
//   //   fine = 'fein (z.B. Backpulver)',
//   //   grainy = 'körnig (z.B. Salz/Trockenhefe)',
//   //   pulverSpices = 'Gewürz-Pulver (z.B. Currypulver, Paprikapulver)', 
//   //   creamy = 'cremig (z.B. Honig)',
//   //   ground = 'gemahlen (z.B. Pfeffer)', 
//   //   fluid = 'flüssig (z.B. Öl, Sojasauce)',
//   //   dried = 'getrocknet (z.B. getrockneter Oregano)',
//   //   butter = 'Butter',
      
//   // fine: 1TL = 3g, 1El = 10g
//   // grainy: 1Tl = 5g, 1EL = 10 g 
//   // pulverSpices: 1TL = 4g, 1EL = 8g
//   // creamy: 1TL = 6g, 1EL = 15g (z.B. Honig)
//   // ground: 1TL = 6g, 1EL = 20g (z.B. Pfeffer)
//   // fluid: 1TL = 5ml, 1EL = 15ml
//   // dried: 1 TL = 2g, 1EL = 6g
//   // BUTTER: 1TL = 5g, 1EL = 10g
