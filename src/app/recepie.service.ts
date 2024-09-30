import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { FilterInterface } from './interfaces/filter-interface';

import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class RecepieService {

  allRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList) 
  cart = signal<RecepieInterface[]>([])

  private filteredByFilters : RecepieInterface[] = [...RecepiesData.recepieList]
  filteredRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList)
  currentFilters : FilterInterface = { duration : [''], tagN : [''], tagE : [''], includedIngredients : [''], excludedIngredients : [''] } // TODO obj containing search term and filters, (Wenn ich die nächste Filterfunktion einfüre, da n zweiten wert hin schreiben)

  includedFilter : any [ ] = [] 

  constructor(private filterService: FilterService) { }

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

  // filtered
  applySearch(newSearchTerm : string) {
    let filtered = this.allRecepies().filter( value => {
      return value.name.toLocaleLowerCase().includes(newSearchTerm.toLocaleLowerCase()) 
    })
    this.filteredRecepies.set(filtered)
    
  }
  
  applyFilter(newFilters : FilterInterface) {
    console.log(newFilters)
    var filtered = this.allRecepies().filter( recepie => {
      if (newFilters.duration.length > 0 && !newFilters.duration.includes(recepie.duration)) return false

      if (newFilters.tagE.length > 0 && !newFilters.tagE.includes(recepie.tagE)) return false

      if (newFilters.tagN.length > 0 && !newFilters.tagN.includes(recepie.tagN)) return false

      const ingredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (!newFilters.includedIngredients.every(fingIngredient => ingredients.includes(fingIngredient) )) return false

      const notIngredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (newFilters.excludedIngredients.some(fingIngredient => notIngredients.includes(fingIngredient) )) return false 
      return true

    })
    this.currentFilters = newFilters
    this.filteredRecepies.set(filtered);
    // set filtered recepies to filtered version of all recepies
    // update current filters
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
}