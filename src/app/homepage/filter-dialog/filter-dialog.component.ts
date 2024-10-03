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
  // filters! : LocalFilterInterface[] 

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
  }
  // Filter
  ngOnInit() {

    // Dauer
    this.recepieService.filters[0].options = ['bis zu 30 min', 'über 30 min bis 1h', 'über 1h']

    // Ernährung
    let eTags = new Set(this.recepieList.map( recepie => recepie.tagE).filter( tag => tag !== ''))
    this.recepieService.filters[1].options = Array.from(eTags).sort()

    // Nationalität
    let nTags = new Set(this.recepieList.map( recepie => recepie.tagN).filter( tag => tag !== ''))
    this.recepieService.filters[2].options = Array.from(nTags).sort()

    // Mit
    const allIngredients = getAllIngredients().map(i => i.rep).sort()
    this.recepieService.filters[3].options = allIngredients
    
    // Ohne
    this.recepieService.filters[4].options = allIngredients
  }

  // updateCurrentFilter () {
  //   this.recepieService.applyFilter(
  //     // {
  //   //   duration : this.recepieService.filters[0].selected,
  //   //   tagE : this.recepieService.filters[1].selected,
  //   //   tagN : this.recepieService.filters[2].selected,
  //   //   includedIngredients : this.recepieService.filters[3].selected,
  //   //   excludedIngredients : this.recepieService.filters[4].selected
  //   // }
  // )
  // }  
  
}

