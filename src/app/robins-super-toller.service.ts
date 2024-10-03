import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { FilterInterface, ListboxFiltersInterface } from './interfaces/filter-interface';

import { FilterService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RobinsSuperTollerService {

  readonly allRecepies = RecepiesData.recepieList
  filteredRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList)

  filters = signal<ListboxFiltersInterface[]>([
    { label : 'Dauer', options : [], selected : [] },
    { label : 'Ernärung', options : [], selected : [] },
    { label : 'Nationalität', options : [], selected : [] },
    { label : 'Mit', options : [], selected : [] },
    { label : 'Ohne', options : [], selected : [] }
  ])

  
  {
    label : '',
    group : '',
    selected : true,
  }

  {
    label : '',
    selected : 'include | exclude | neural'
  }
  
  private readonly dauer = 0
  private readonly ernährung = 1
  private readonly nationalität = 2
  private readonly mit = 3
  private readonly ohne = 4

  // all recepies
  getRecepiesById (id:number) : RecepieInterface | undefined {
    // this returns a deep copy of the object
    var obj = this.allRecepies.find(recepie => recepie.id === id);
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
    // this.allRecepies.update( recepies => {  
    //   const index = recepies.findIndex(recepie => recepie.id === newRecepie.id);
    //   if (index === -1) {
    //     return recepies;
    //   } 
    //   recepies[index] = newRecepie;
    //   return [...recepies]
    // });
  }

  // filtered
  applySearch(newSearchTerm : string) {
    let filtered = this.allRecepies.filter( value => {
      return value.name.toLocaleLowerCase().includes(newSearchTerm.toLocaleLowerCase()) 
    })
    this.filteredRecepies.set(filtered)
  }

  private includeAll(filters : any, recepie : any) {
    if (filters.length === 0) return true
    for (let r of recepie) {
      if (!filters.includes(r)) return false
    }
    return true
  }

  private includeNone(filters : any, recepie : any) {

  }

  applyFilter() {

    var filtered = this.allRecepies.filter( recepie => {
      if (!include(this.filters()[this.dauer], recepie.duration) 
          || !include(this.filters()[this.ernährung], recepie.tagE)
          || !include(this.filters()[this.nationalität], recepie.tagN)) {
        return false
      }


      const ingredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (!this.filters()[3].selected.every(fingIngredient => ingredients.includes(fingIngredient))) return false

      const notIngredients = recepie.ingredients.map(item => item.ingredient.rep)
      if (this.filters()[4].selected.some(fingIngredient => notIngredients.includes(fingIngredient) )) return false 

      return true
    })

    // var filtered = this.allRecepies().filter( recepie => {
    //   if (newFilters.duration.length > 0 && !newFilters.duration.includes(recepie.duration)) return false

    //   if (newFilters.tagE.length > 0 && !newFilters.tagE.includes(recepie.tagE)) return false

    //   if (newFilters.tagN.length > 0 && !newFilters.tagN.includes(recepie.tagN)) return false

    //   const ingredients = recepie.ingredients.map(item => item.ingredient.rep)
    //   if (!newFilters.includedIngredients.every(fingIngredient => ingredients.includes(fingIngredient))) return false

    //   const notIngredients = recepie.ingredients.map(item => item.ingredient.rep)
    //   if (newFilters.excludedIngredients.some(fingIngredient => notIngredients.includes(fingIngredient) )) return false 

    //   return true
    // })

    // update current Filters and filtered recepies
    this.currentFilters.duration = this.filters[0].selected
    this.currentFilters.tagE = this.filters[1].selected
    this.currentFilters.tagN = this.filters[2].selected
    this.currentFilters.includedIngredients = this.filters[3].selected
    this.currentFilters.excludedIngredients = this.filters[4].selected


    this.filteredRecepies.set(filtered);


    // Wenn mit Zuccini ausgewählt, verschwindet ohne Zuccini
    const includesAny = (ing : string [], filter : string []) => filter.some(f => ing.includes(f))
    let notEqualLists = (filterdArray : string [], fullArray : string [], selectedArray : string []) => fullArray.filter(v1 => !filterdArray.includes(v1)).filter(v2 => !selectedArray.includes(v2))
    let removeValuesOfArray = (array : string [], values : string []) => array.filter(val => !values.includes(val))

    for (let i of [[3,4], [4,3]]) {
      if (includesAny(this.filters[i[0]].options,  this.filters[i[1]].selected)) {
        this.filters[i[0]].options = removeValuesOfArray(this.filters[i[0]].options, this.filters[i[1]].selected)
      } else if (notEqualLists(this.filters[i[0]].options, this.filters[i[1]].options, this.filters[i[1]].selected)) {
        this.filters[i[0]].options = [...this.filters[i[0]].options, ...notEqualLists(this.filters[i[0]].options, this.filters[i[1]].options, this.filters[i[1]].selected)].sort()
      } 
    }

    // if (includesAny(this.filters[4].options, newFilters.includedIngredients)) {
    //   this.filters[4].options = removeValuesOfArray(this.filters[4].options, newFilters.includedIngredients)
    // } else if (notEqualLists(this.filters[4].options, this.filters[3].options, this.filters[3].selected)) {
    //   this.filters[4].options = [...this.filters[4].options, ...notEqualLists(this.filters[4].options, this.filters[3].options, this.filters[3].selected)].sort()
    // } 
    // if (includesAny(this.filters[3].options, newFilters.excludedIngredients)) {
    //   this.filters[3].options = removeValuesOfArray(this.filters[3].options, newFilters.excludedIngredients)
    // } else if (notEqualLists(this.filters[3].options, this.filters[4].options, this.filters[4].selected)) {
    //   this.filters[3].options = [...this.filters[3].options, ...notEqualLists(this.filters[3].options, this.filters[4].options, this.filters[4].selected)].sort()
    // }

    // Filter on top of the Array of the listbox
    for (let i of [0,1,2,3,4]) {
      let WithoutSelected = removeValuesOfArray(this.filters[i].options, this.filters[i].selected)
      this.filters[i].options = [...this.filters[i].selected.sort(), ...WithoutSelected.sort()]
    }

    // Tags
    let filterOhne = this.currentFilters.excludedIngredients.map(i => i = 'ohne '+ i)
    this.allSelectedFilters = [
      ...this.currentFilters.duration, ...this.currentFilters.tagN, 
      ...this.currentFilters.tagE, ...this.currentFilters.includedIngredients, 
      ...filterOhne]
  }

  deleteFilter () {
    this.applyFilter()
    // {duration : [], tagN : [], tagE : [], includedIngredients : [], excludedIngredients : [] }
    for (let i of [0,1,2,3,4]){
      this.filters[i].selected = []
    }

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
