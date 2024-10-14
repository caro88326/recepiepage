import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

import { RecepieService } from '../../recepie.service';
import { FilterService } from '../../filter.service';
import { ListboxFiltersInterface, NewFiltersInterfaceIngs, NewFiltersInterfaceTags } from '../../interfaces/filter-interface';

@Component({
  selector: 'app-filter-dialog',
  standalone: true,
  imports: [ListboxModule, FormsModule, NgFor, ButtonModule, DialogModule, TagModule],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})

export class FilterDialogComponent {
  // Data
  recepieService = inject(RecepieService);
  filterService = inject(FilterService);
  filterCopy : (NewFiltersInterfaceTags | NewFiltersInterfaceIngs)[] = []

  allSelectedFilters : string [] = []

  listboxFilters : ListboxFiltersInterface [] = []

  private readonly dauer = 0
  private readonly ernährung = 1
  private readonly nationalität = 2
  private readonly mit = 3
  private readonly ohne = 4
 

  // Dialog 
  @Input() FilterDialog : boolean = true;
  @Output () FilterDialogChange = new EventEmitter<boolean>();

  constructor(){
    this.getData()
  }

  getData() {
    this.listboxFilters = [
      { label : 'Dauer', options : [], selected : [] },
      { label : 'Ernährung', options : [], selected : [] },
      { label : 'Nationalität', options : [], selected : [] },
      { label : 'Mit', options : [], selected : [] },
      { label : 'Ohne', options : [], selected : [] },
    ]
    this.filterCopy = this.filterService.getFilters()
    for (let filter of this.filterCopy){
      for (let listbox of this.listboxFilters){
        if (filter.groups === listbox.label){
          listbox.options.push(filter.value)
        } 
        if (filter.groups === 'Zutaten' && listbox.label === 'Mit') {
          listbox.options.push(filter.value)
        } 
        if (filter.groups === 'Zutaten' && listbox.label === 'Ohne') {
          listbox.options.push(filter.value)
        } 
        if (filter.groups === listbox.label && filter.selected === true) {
          listbox.selected.push(filter.value)
        }
        if (filter.groups === 'Zutaten' && listbox.label === 'Mit' && filter.selected === 'include') {
          listbox.selected.push(filter.value)
        }
        if (filter.groups === 'Zutaten' && listbox.label === 'Ohne' && filter.selected === 'exclude') {
          listbox.selected.push(filter.value)
        }
      }
    }
    this.selectedFilter()
  }

  updateDialogVisible ():void {
    this.FilterDialog = false;
    this.FilterDialogChange.emit(this.FilterDialog)
  }

  selectedFilter(){
    // selected filter on top of the Listbox
    for (let i of [0,1,2,3,4]) {
      let notSelected = this.listboxFilters[i].options.filter(ings => !this.listboxFilters[i].selected.includes(ings))
      this.listboxFilters[i].options = [...this.listboxFilters[i].selected.sort(), ...notSelected.sort()]
    }

    // create Tags in the Dialog
    let filterOhne = this.listboxFilters[this.ohne].selected.map(i => i = 'ohne '+ i)
    this.allSelectedFilters = [
      ...this.listboxFilters[this.dauer].selected, ...this.listboxFilters[this.ernährung].selected, 
      ...this.listboxFilters[this.nationalität].selected, ...this.listboxFilters[this.mit].selected, 
      ...filterOhne]

    // hide selected ingrdeient by other group (Wenn mit Zucchini gewählt, bei Ohne wird keine Zuccini angezeigt)
    for (let i of [[this.mit,this.ohne], [this.ohne,this.mit]]) {
      let removesValue = this.listboxFilters[i[0]].options.filter(val => !this.listboxFilters[i[1]].selected.includes(val))
      let addingValues = this.listboxFilters[i[1]].options.filter(v1 => !this.listboxFilters[i[0]].options.includes(v1)).filter(v2 => !this.listboxFilters[i[1]].selected.includes(v2))
      if (this.listboxFilters[i[0]].options.some(f => this.listboxFilters[i[1]].selected.includes(f))) {
        this.listboxFilters[i[0]].options = removesValue
      } else if (addingValues) {
        this.listboxFilters[i[0]].options = [...this.listboxFilters[i[0]].options, ...addingValues].sort()
      }
    }

    // selected filter on top of the Listbox
    for (let i of [0,1,2,3,4]) {
      let notSelected = this.listboxFilters[i].options.filter(ings => !this.listboxFilters[i].selected.includes(ings))
      this.listboxFilters[i].options = [...this.listboxFilters[i].selected.sort(), ...notSelected.sort()]
    }
  }

  saveFilter (){
    let filterTags : NewFiltersInterfaceTags [] = []
    for (let listbox of this.listboxFilters.slice(0, 3)){
      for (let filter of listbox.options) {
        filterTags.push({
          groups : listbox.label,
          value : filter,
          selected : listbox.selected.includes(filter)
        })
      }
    }

    let mit = this.listboxFilters[this.mit]
    let ohne = this.listboxFilters[this.ohne]    
    let filterIngs : NewFiltersInterfaceIngs [] = []

    for (let filter of mit.options) {
      let s : 'include' | 'neutral' | 'exclude' = 'neutral'
      if (mit.selected.includes(filter)) {
        s = 'include'
      }
      filterIngs.push({
        groups : 'Zutaten',
        value : filter,
        selected : s
      })
    }

    for (let filter of ohne.options) {
      let s : 'include' | 'neutral' | 'exclude' = 'neutral'
      if (ohne.selected.includes(filter)) {
        s = 'exclude'
      }

      if (!filterIngs.find(f => f.value === filter)){
        filterIngs.push({
          groups : 'Zutaten',
          value : filter,
          selected : s
        })}
      
      for (let f of filterIngs) {
        if (f.value === filter && s === 'exclude') {
          f = {
            groups : 'Zutaten',
            value : filter,
            selected : s
          }
        }
      }   
    }

    let filters : (NewFiltersInterfaceTags | NewFiltersInterfaceIngs) [] = [...filterTags, ...filterIngs.sort()]

    this.filterService.applyFilter(filters)

  }

  deleteFilter(){
    // entfernt eingefärbte Felder der Listbox
    for (let i of [0,1,2,3,4]){
      this.listboxFilters[i].selected = []
    }
    // entfernt Tags
    this.allSelectedFilters = []

    // entfernt Tags auf der Homepage (Search)
    this.filterService.allSelectedFilters = []

    // entfernt gespeichernte Filter
    let filters : (NewFiltersInterfaceTags | NewFiltersInterfaceIngs) [] = []
    for (let listbox of this.listboxFilters.slice(0, 3)){
      for (let filter of listbox.options) {
        filters.push({
          groups : listbox.label,
          value : filter,
          selected : false
        })
      }}
    for (let filter of this.listboxFilters[this.mit].options){
      filters.push({
        groups : 'Zutaten',
        value : filter,
        selected : 'neutral'
      })}

    for (let filter of this.listboxFilters[this.ohne].options){
      if (!filters.find(f => f.value === filter)){
        filters.push({
          groups : 'Zutaten',
          value : filter,
          selected : 'neutral'
        })}
      }

    this.filterService.applyFilter(filters.sort())
  }
}