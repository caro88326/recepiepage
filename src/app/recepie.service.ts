import { Injectable, signal } from '@angular/core';
import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { Ingredient } from './interfaces/ingredients-interface';
import { ISU } from '../../public/data/ingredients';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  data = signal<RecepieInterface[]>(RecepiesData.recepieList)
  cart = []
  constructor() { }

  // deep copy of recepies
  getRecepiesById (id:number) : RecepieInterface | undefined {
    var obj = this.data().find(recepie => recepie.id === id);
    return JSON.parse(JSON.stringify(obj));
  }

  // Change dataset
  updateRecepie(newRecepie : RecepieInterface) {
    this.data.update( recepies => {  
      const index = recepies.findIndex(recepie => recepie.id === newRecepie.id);
      if (index === -1) {
        return recepies;
      } 
      recepies[index] = newRecepie;
      return [...recepies]
    });
  }

  getAllIngredients () {
    return ISU.ingredients
  }

  // changed = false
  // newQuantities : number [] = []
// 
  // changeServings(recepieId : number, newQuantity : number) : RecepieInterface | undefined {
  //   let index = -1;
  //   this.data.update(recepies => {
  //     // find index
  //     index = recepies.findIndex( recepie => recepie.id === recepieId);
  //     if (index >= 0) {
  //       recepies[index].person = newQuantity;
  //     }
  //     return recepies;
  //   });

  //   if (index > -1) {
  //     return this.data()[index];
  //   }
  //   return undefined
  // }

  changeIngredientServings (ing : Ingredient [], inputValue : number, recepiePerson : number ){
    for (var i of ing) {
      i.quantitie = Math.round((i.quantitie * inputValue / recepiePerson)*100)/100
    }
    return ing
  }
}