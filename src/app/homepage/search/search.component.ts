import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

import { RecepieService } from '../../recepie.service';




@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  recepieService = inject(RecepieService);
  searchFilter!: string;
 
// Dialog 
  @Input() FilterDialogSearch : boolean = false;
  @Output () FilterDialogSearchChange = new EventEmitter<boolean>();

  updateDialogVisible() : void {
    this.FilterDialogSearch = true;
    this.FilterDialogSearchChange.emit(this.FilterDialogSearch)
  }

  updateCurrentFilter (event: KeyboardEvent) {
      this.recepieService.currentFilters.searchTerm = this.searchFilter
      this.recepieService.applyFilter(this.recepieService.currentFilters)  
    }

  // applyFilter (event:KeyboardEvent) {
  //   this.recepieService.applyFilter(this.recepieService.currentFilters)
  // }
}

