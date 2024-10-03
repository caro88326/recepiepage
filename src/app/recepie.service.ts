import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { FilterInterface, ListboxFiltersInterface } from './interfaces/filter-interface';

import { FilterService } from 'primeng/api';

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
    // check if alredy in cart
    // if not add
  }

  removeFromCart(recepie : RecepieInterface) {
    // check if in cart
    // if so, remove
    // update -> get index -> slice
  }

  // Change dataset
  updateRecepie(newRecepie : RecepieInterface) {
    this.allRecepies.update( recepies => {  
      const index = recepies.findIndex(recepie => recepie.id === newRecepie.id);
      if (index === -1) {
        return recepies;
      } 
      recepies[index] = newRecepie;
      return [...recepies]
    });
  }

  
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
  // }
}