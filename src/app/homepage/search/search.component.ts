import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { RecepieService } from '../../recepie.service';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, FormsModule, FilterDialogComponent, TagModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  recepieService = inject(RecepieService);
  searchFilter: string = '';
 
  FilterDialogVisible: boolean = false;

  updateDialogVisible() : void {
    this.FilterDialogVisible = true;
      }

  updateSearchFilter () {
    this.recepieService.applySearch(this.searchFilter)
  }
}

