import { inject, Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { NewFiltersInterfaceIngs, NewFiltersInterfaceTags } from './interfaces/filter-interface';
import { getAllIngredients } from './utils/ingredients';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  readonly allRecepies : RecepieInterface [] = RecepiesData.recepieList
  filteredRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList)
  
  filters = signal<(NewFiltersInterfaceTags | NewFiltersInterfaceIngs) []>([])

  duration = Array.from(new Set(this.allRecepies.map(recepie => recepie.duration).filter(tag => tag !== ''))).sort()
  tagE = Array.from(new Set(this.allRecepies.map(recepie => recepie.tagE).filter(tag => tag !== '')))
  tagN = Array.from(new Set(this.allRecepies.map(recepie => recepie.tagN).filter(tag => tag !== '')))
  allIngredients = getAllIngredients().map(i => i.rep).sort()
  allSelectedFilters : string [] = []
  

  constructor(){
    for(let t of this.duration){
      let filter : NewFiltersInterfaceTags = {
        groups : 'Dauer', 
        value : t, 
        selected : false
      };
      this.filters.update(filters => {
        filters.push(filter)
        return [...filters]
      })}

    for(let t of this.tagE){
      let filter : NewFiltersInterfaceTags = {
        groups : 'Ernährung', 
        value : t, 
        selected : false
      };
      this.filters.update(filters => {
        filters.push(filter)
        return [...filters]
      })}

    for(let t of this.tagN){
      let filter : NewFiltersInterfaceTags = {
        groups : 'Nationalität', 
        value : t, 
        selected : false
      };
      this.filters.update(filters => {
        filters.push(filter)
        return [...filters]
      })}
    
    for(let t of this.allIngredients){
      let filter : NewFiltersInterfaceIngs = {
        groups : 'Zutaten', 
        value : t, 
        selected : 'neutral'
      };
      this.filters.update(filters => {
        filters.push(filter)
        return [...filters]
      })}
    }

    getFilters() : (NewFiltersInterfaceTags | NewFiltersInterfaceIngs)[] {
      return JSON.parse(JSON.stringify(this.filters()))
    }

    applySearch(newSearchTerm : string) {
      let filtered = this.allRecepies.filter( value => {
        return value.name.toLocaleLowerCase().includes(newSearchTerm.toLocaleLowerCase()) 
      })
      this.filteredRecepies.set(filtered)
      console.log(this.filters)
    }

    applyFilter (newFilters : (NewFiltersInterfaceTags | NewFiltersInterfaceIngs) []) {
      this.filters.update(filters => filters = newFilters)
      let filtered = this.allRecepies.filter(recepie => {
        for (let filter of this.filters()) {
          if (filter.groups === 'Dauer' && filter.selected === true && !filter.value.includes(recepie.duration)) return false
          if (filter.groups === 'Ernährung' && filter.selected === true && !filter.value.includes(recepie.tagE)) return false
          if (filter.groups === 'Nationalität' && filter.selected === true && !filter.value.includes(recepie.tagN) && filter.value.length === 0) return false
          const ingredients = recepie.ingredients.map(item => item.ingredient.rep)
          if (filter.selected === 'include' && !ingredients.includes(filter.value)) return false
          if (filter.selected === 'exclude' && ingredients.includes(filter.value)) return false
        }
        return true
      })
      this.filteredRecepies.set(filtered);
    }

    getTags(){
      for (let filter of this.filters()) {
        if (filter.selected === true) {
          this.allSelectedFilters.push(filter.value)
        }
        if (filter.selected === 'include') {
          this.allSelectedFilters.push(filter.value)
        }
        if (filter.selected === 'exclude') {
          this.allSelectedFilters.push('ohne' + filter.value)
        }
      }
    }

    deleteAllFilters () {
      this.filters.update(filters => {
        return filters.map(filter => {
          if (filter.selected === true || filter.selected === false) {
            filter.selected = false
          } else {
            filter.selected = 'neutral'
          }
          return filter
        })
      })
      this.filteredRecepies.update(recepies => recepies = this.allRecepies)
      this.allSelectedFilters = []
}}
