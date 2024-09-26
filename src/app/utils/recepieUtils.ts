import { FoodItem } from "./ingredients";

export function  changeIngredientServings(ing : FoodItem [], inputValue : number, recepiePerson : number ){
  for (let i of ing) {
      i.quantity = Math.round((i.quantity * inputValue / recepiePerson)*100)/100
    }
    return ing
  };

export function formatTime(time: number) {
  var hours = Math.floor(time/60);
  var minutes = time % 60;
  return (hours === 0 ? '' : hours + 'h ') + (minutes === 0 ? '' : minutes + 'min') 
}
