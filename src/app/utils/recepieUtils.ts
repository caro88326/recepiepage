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

// function shortcutFormatUnitsToG(value : FoodItem ,conversionNumber : number){
//   value.quantity *= conversionNumber
//   value.unit = Unit.g
//   return value
// }

// export function formatUnits(groups : { title : string, g : FoodGroup[], ingredients : FoodItem[], selected : boolean }[]){
//   for (let group of groups) {
//     let uniqueElements = new Array();
//     let duplicates : FoodItem[] = [];
//     let d : FoodItem[] = []
//     let valuesOfDuplicats : string[] = []
//     let newValue : FoodItem = {ingredient: {rep: '', texture: Texture.notDefined, group: FoodGroup.water, defaultUnit: Unit.g}, quantity:0, unit: Unit.g}
  
//     // array of duplicates
//     duplicates = group.ingredients.filter((ing, index) => 
//       group.ingredients.some((elem, idx) => 
//         elem.ingredient.rep === ing.ingredient.rep && idx !== index))

//     // array of all unique eleemnts
//     for (let ing of group.ingredients) {
//       if (!duplicates.includes(ing)){
//         uniqueElements.push(ing)
//       }
//     }

//     // array of names of the dubble ingredients
//     duplicates.forEach((element) =>{
//       if (!valuesOfDuplicats.includes(element.ingredient.rep)) {
//         valuesOfDuplicats.push(element.ingredient.rep)
//       }
//     })

//     for (let i of valuesOfDuplicats){
//       let array = duplicates.filter(ing => ing.ingredient.rep === i)
      
//       for (let value of array) {
//         // allgemiene Umrechnungen
//         if (value.unit === Unit.kg) {shortcutFormatUnitsToG(value, 1000)} 

//         if (value.unit === Unit.l) {
//           value.quantity *= 1000
//           value.unit = Unit.ml
//         }
//         // console.log('array',array)

//         // Umrechnungen nach texture
//         if (value.ingredient.texture === 'fein (z.B. Backpulver)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 10)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 3)}
//         }

//         if (value.ingredient.texture === 'körnig (z.B. Salz/Trockenhefe)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 10)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 3)}
//         }

//         if (value.ingredient.texture === 'Gewürz-Pulver (z.B. Currypulver, Paprikapulver)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 8)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 4)}
//         }

//         if (value.ingredient.texture === 'cremig (z.B. Honig)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 15)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 6)}
//         }

//         if (value.ingredient.texture === 'gemahlen (z.B. Pfeffer)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 20)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 6)}
//         }

//         if (value.ingredient.texture === 'getrocknet (z.B. getrockneter Oregano)'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 6)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 2)}
//         }

//         if (value.ingredient.texture === 'Butter'){
//           if (value.unit === Unit.EL) {shortcutFormatUnitsToG(value, 10)}
//           if (value.unit === Unit.TL) {shortcutFormatUnitsToG(value, 5)}
//         }

//         if (value.ingredient.texture === 'flüssig (z.B. Öl, Sojasauce)'){
//           if (value.unit === Unit.EL){
//             value.quantity *= 15
//             value.unit = Unit.ml
//           }
//           if (value.unit === Unit.TL){
//             value.quantity *= 5
//             value.unit = Unit.ml
//           }
//         }
//       }


//       // // Was ist, wenn 2x ml und 2x g angegeben sind?
//       // // combine to new value
//       if (array.filter((ing, index) => array.some((elem, idx) => elem.unit === ing.unit && idx !== index))){
//         let addUp = array.filter((ing, index) => array.some((elem, idx) => elem.unit === ing.unit && idx !== index))
//         for (let value of addUp){
//           if (newValue.ingredient.rep.length === 0){
//             newValue = value
//           } else {
//             newValue.quantity += value.quantity
//           }
//           }
//           d.push(newValue)
//           newValue =  {ingredient: {rep: '', texture: Texture.notDefined, group: FoodGroup.water, defaultUnit: Unit.g}, quantity:0, unit: Unit.g}
//         }
//       }
//       console.log(d)
//       }
//   }

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
