import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { FoodGroup, FoodItem } from './utils/ingredients';

@Injectable({
  providedIn: 'root'
})

export class RecepieService {

  readonly allRecepies = RecepiesData.recepieList
  // allRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList) 
  cart = signal<RecepieInterface[]>([])
  selectedIngredients = signal<{ title : string, ingredients : any[]}[]>([])

  // sollte groups ein signal sein?
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
    { title : 'Extra Hinzugefügt',g : [],                                         ingredients : [], selected : true }] 

  // all recepies
  getRecepiesById (id:number) : RecepieInterface | undefined {
    // this returns a deep copy of the object
    var obj = this.allRecepies.find(recepie => recepie.id === id);
    return JSON.parse(JSON.stringify(obj));
  }

  // cart
  addToCart(recepie : RecepieInterface) {
    if (!this.cart().find(r => r.id === recepie.id)) {
      this.cart.update(recepies => {
        recepies.push(recepie)
        return [...recepies]
      })
    }     
    if (this.cart().find(r => r.id === recepie.id && r.person !== recepie.person)) {
      this.cart.update(recepies => {
        let cartRecepie = recepies.find(r => r.id === recepie.id)
        cartRecepie = recepie
        return [...recepies]
      })
    }
    this.cartLength()
  }


  removeFromCart(recepie : RecepieInterface) {
    if (this.cart().find(r => r === recepie)) {
      this.cart.update(recepies => {
        recepies.splice(recepies.indexOf(recepie), 1)
        return [...recepies]}
      )
    }
  }

  removeAllFromCart() {
    this.cart.set([])
  }

  cartLength () {
    return this.cart().length
  }

  // // Change dataset
  // updateRecepie(newRecepie : RecepieInterface) {
  //   this.allRecepies.update( recepies => {  
  //     const index = recepies.findIndex(recepie => recepie.id === newRecepie.id);
  //     if (index === -1) {
  //       return recepies;
  //     } 
  //     recepies[index] = newRecepie;
  //     return [...recepies]
  //   });
  // }

  
  // -----------------------------------------------------------


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
  }
