import { Ingredient } from "../interfaces/ingredients-interface"

export function  changeIngredientServings (ing : Ingredient [], inputValue : number, recepiePerson : number ){
    for (var i of ing) {
      i.quantitie = Math.round((i.quantitie * inputValue / recepiePerson)*100)/100
    }
    return ing
  };
