import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { FilterInterface, ListboxFiltersInterface } from './interfaces/filter-interface';

import { FilterService } from 'primeng/api';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecepieService {

  allRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList) 
  cart = signal<RecepieInterface[]>([])

  private filteredByFilters : RecepieInterface[] = [...RecepiesData.recepieList]
  filteredRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList)
  currentFilters : FilterInterface = { duration : [''], tagN : [''], tagE : [''], includedIngredients : [''], excludedIngredients : [''] } 

  includedFilter : any [] = [] 
  allSelectedFilters : string [] = []
  filters! : ListboxFiltersInterface[] 


  constructor(private filterService: FilterService) { 
    this.filters = [
      { label : 'Dauer', options : [], selected : [] },
      { label : 'Ernärung', options : [], selected : [] },
      { label : 'Nationalität', options : [], selected : [] },
      { label : 'Mit', options : [], selected : [] },
      { label : 'Ohne', options : [], selected : [] },
    ]
  }

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
    var filtered = this.allRecepies().filter( recepie => {
      if (newFilters.duration.length > 0 && !newFilters.duration.includes(recepie.duration)) return false

      if (newFilters.tagE.length > 0 && !newFilters.tagE.includes(recepie.tagE)) return false

      if (newFilters.tagN.length > 0 && !newFilters.tagN.includes(recepie.tagN)) return false

      const ingredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (!newFilters.includedIngredients.every(fingIngredient => ingredients.includes(fingIngredient))) return false

      const notIngredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (newFilters.excludedIngredients.some(fingIngredient => notIngredients.includes(fingIngredient) )) return false 

      return true
    })

    // update current Filters and filtered recepies
    this.currentFilters = newFilters
    this.filteredRecepies.set(filtered);


    // Wenn mit Zuccini ausgewählt, verschwindet ohne Zuccini
    const includesAny = (ing : string [], filter : string []) => filter.some(f => ing.includes(f))
    let notEqualLists = (filterdArray : string [], fullArray : string [], selectedArray : string []) => fullArray.filter(v1 => !filterdArray.includes(v1)).filter(v2 => !selectedArray.includes(v2))
    let removeValuesOfArray = (array : string [], values : string []) => array.filter(val => !values.includes(val))

    if (includesAny(this.filters[4].options, newFilters.includedIngredients)) {
      this.filters[4].options = removeValuesOfArray(this.filters[4].options, newFilters.includedIngredients)
    } else if (notEqualLists(this.filters[4].options, this.filters[3].options, this.filters[3].selected)) {
      this.filters[4].options = [...this.filters[4].options, ...notEqualLists(this.filters[4].options, this.filters[3].options, this.filters[3].selected)].sort()
    } 
    if (includesAny(this.filters[3].options, newFilters.excludedIngredients)) {
      this.filters[3].options = removeValuesOfArray(this.filters[3].options, newFilters.excludedIngredients)
    } else if (notEqualLists(this.filters[3].options, this.filters[4].options, this.filters[4].selected)) {
      this.filters[3].options = [...this.filters[3].options, ...notEqualLists(this.filters[3].options, this.filters[4].options, this.filters[4].selected)].sort()
    }

    // Filter on top of the Array of the listbox
    let durationWithoutSelected = removeValuesOfArray(this.filters[0].options, this.filters[0].selected)
    this.filters[0].options = [...this.filters[0].selected.sort(), ...durationWithoutSelected]

    let eTagsWithoutSelected = removeValuesOfArray(this.filters[1].options, this.filters[1].selected)
    this.filters[1].options = [...this.filters[1].selected.sort(), ...eTagsWithoutSelected]

    let nTagsWithoutSelected = removeValuesOfArray(this.filters[2].options, this.filters[2].selected)
    this.filters[2].options = [...this.filters[2].selected.sort(), ...nTagsWithoutSelected]

    let incWithoutSelected = removeValuesOfArray(this.filters[3].options, this.filters[3].selected)
    this.filters[3].options = [...this.filters[3].selected.sort(), ...incWithoutSelected]

    let excWithoutSelected = removeValuesOfArray(this.filters[4].options, this.filters[4].selected)
    this.filters[4].options = [...this.filters[4].selected.sort(), ...excWithoutSelected]

    // Tags
    let filterOhne = this.currentFilters.excludedIngredients.map(i => i = 'ohne '+ i)
    this.allSelectedFilters = [
      ...this.currentFilters.duration, ...this.currentFilters.tagN, 
      ...this.currentFilters.tagE, ...this.currentFilters.includedIngredients, 
      ...filterOhne]
  }

  deleteFilter () {
    this.applyFilter ({duration : [], tagN : [], tagE : [], includedIngredients : [], excludedIngredients : [] })
    this.filters[1].selected = []
    this.filters[2].selected = []
    this.filters[3].selected = []
    this.filters[4].selected = []
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