import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { changeIngredientServings } from './utils/recepieUtils';

@Injectable({
  providedIn: 'root'
})

export class RecepieService {

  allRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList) 
  cart = signal<RecepieInterface[]>([])

  // all recepies
  getRecepiesById (id:number) : RecepieInterface | undefined {
    // this returns a deep copy of the object
    var obj = this.allRecepies().find(recepie => recepie.id === id);
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
