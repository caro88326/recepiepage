import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
// Dialog 
  @Input() FilterDialogSearch : boolean = false;
  @Output () FilterDialogSearchChange = new EventEmitter<boolean>();

  updateDialogVisible ():void {
    this.FilterDialogSearch = true;
    this.FilterDialogSearchChange.emit(this.FilterDialogSearch)
  }
}

