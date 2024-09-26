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
  currentFilters : FilterInterface = { time : [''], tagN : [''], tagE : [''], includedIngredients : [''], excludedIngredients : [''] } // TODO obj containing search term and filters, (Wenn ich die nächste Filterfunktion einfüre, da n zweiten wert hin schreiben)

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
      // return value.name.toLocaleLowerCase().includes(newFilters.searchTerm.toLocaleLowerCase()) 
    }

  applyFilter(newFilters : FilterInterface) {
    var filtered = this.allRecepies().filter( value => {
      // && newFilters.time.includes(value.tagE)
      newFilters.tagE.includes(value.tagE)
      && newFilters.tagN.includes(value.tagN)
      // && newFilters.includedIngredients.forEach( ingredient => {
      //   return value.ingredients.food.map(i=> {return [i.ingredient.rep]}).includes(ingredient)
      // })
      // && newFilters.includedIngredients.forEach( ingredient => {
      //   return value.ingredients.food.map(i=> {return [i.ingredient as string]} ).includes(ingredient)
      // })
    })
    this.filteredRecepies.set(filtered);
    console.log(newFilters.includedIngredients)
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

  // Filter

  // matchModeOptions!: SelectItem[];

  // ngOnit ( SearchFilter : string ){
    // this.getData


  //   const customFilterName = 'custom-equals';

  //   let values = this.data()

  //   this.filterService.register(customFilterName, (values, SearchFilter): boolean => {
  //     if (SearchFilter === undefined || SearchFilter === null || SearchFilter.trim() === '') {
  //         return true;
  //     }
  //     if (values === undefined || values === null) {
  //         return false;
  //     }
  //     return values.toString() === SearchFilter.toString();
  // });

  // this.matchModeOptions = [
  //   {label: 'Contains', value: FilterMatchMode.CONTAINS},
  // ]
  // }


}