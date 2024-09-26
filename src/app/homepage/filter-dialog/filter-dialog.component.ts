import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

import { RecepieService } from '../../recepie.service';
import { RecepieInterface } from '../../interfaces/recepie-interface';
import { getAllIngredients } from '../../utils/ingredients';

interface FilterInterface {
  label : string,
  options : string[],
  selected : string []
}

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
  recepieList : RecepieInterface [];

  // Filter
  filters! : FilterInterface[] 

  allSelected : string [] = []

  // Dialog 
  @Input() FilterDialog : boolean = true;
  @Output () FilterDialogChange = new EventEmitter<boolean>();

  updateDialogVisible ():void {
    this.FilterDialog = false;
    this.FilterDialogChange.emit(this.FilterDialog)
  }

  // Data
  constructor () {
    this.recepieList = this.recepieService.allRecepies();

    this.filters = [
      { label : 'Dauer', options : [], selected : [] },
      { label : 'Ernärung', options : [], selected : [] },
      { label : 'Nationalität', options : [], selected : [] },
      { label : 'Mit', options : [], selected : [] },
      { label : 'Ohne', options : [], selected : [] },
    ]
  }

  // Filter
  ngOnInit() {

    // Dauer
    this.filters[0].options = ['bis zu 30 min', 'über 30 min bis 1h', 'über 1h']

    // Ernährung
    let eTags = new Set(this.recepieList.map( recepie => recepie.tagE).filter( tag => tag !== ''))
    this.filters[1].options = Array.from(eTags)

    // Nationalität
    let nTags = new Set(this.recepieList.map( recepie => recepie.tagN).filter( tag => tag !== ''))
    this.filters[2].options = Array.from(nTags)

    // Mit
    const allIngredients = getAllIngredients().map(i => i.rep)
    this.filters[3].options = allIngredients
    
    // Ohne
    this.filters[4].options = allIngredients.map( ing => 'ohne ' + ing)
  }

  // updateCurrentFilter () {
  //   this.recepieService.applyFilter({
  //     time : this.filters[0].selected,
  //     tagN : this.filters[1].selected,
  //     tagE : this.filters[2].selected,
  //     includedIngredients : this.filters[3].selected,
  //     excludedIngredients : this.filters[4].selected
  //   })

  //   this.allSelected = [
  //     ...this.filters[0].selected, ...this.filters[1].selected, 
  //     ...this.filters[2].selected, ...this.filters[3].selected, 
  //     ...this.filters[4].selected]
  // }
}

