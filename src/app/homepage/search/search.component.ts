import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

import { RecepieService } from '../../recepie.service';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, FormsModule, FilterDialogComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  recepieService = inject(RecepieService);
  ff = inject(FilterDialogComponent)
  searchFilter: string = '';
 
  FilterDialogVisible: boolean = false;

  updateDialogVisible() : void {
    this.FilterDialogVisible = true;
      }

  updateSearchFilter () {
    this.recepieService.applySearch(this.searchFilter)
  }

  

  // deleteFilter () {
  //   this.recepieService.applyFilter ({duration : [], tagN : [], tagE : [], includedIngredients : [], excludedIngredients : [] })
  //   this.recepieService.currentFilters.duration = []
  //   this.recepieService.currentFilters.tagE = []
  //   this.recepieService.currentFilters.tagN = []
  //   this.recepieService.currentFilters.includedIngredients = []
  //   this.recepieService.currentFilters.excludedIngredients = []
  // }
}

