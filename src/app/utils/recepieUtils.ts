import { RecepieInterface } from "../interfaces/recepie-interface";

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
