import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RecepieService } from '../../recepie.service';
import { RecepieInterface } from '../../interfaces/recepie-interface';
import { ISU } from '../../../../public/data/ingredients';

@Component({
  selector: 'app-filter-dialog',
  standalone: true,
  imports: [ListboxModule, FormsModule, NgFor, ButtonModule, DialogModule],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent {
// Dialog 
@Input() FilterDialog : boolean = true;
@Output () FilterDialogChange = new EventEmitter<boolean>();

updateDialogVisible ():void {
  this.FilterDialog = false;
  this.FilterDialogChange.emit(this.FilterDialog)
}

// Data
recepieService = inject(RecepieService);
recepieList : RecepieInterface []; 
ingredients = {};

constructor () {
  this.recepieList = this.recepieService.allRecepies();
  this.ingredients = ISU.ingredients;
}
// Filter
tagN : string[] = [];
selectedTagN! : string;
tagE : string [] = [];
selectedTagE! : string;
eat : string [] = [];
selectedEat! : string;
notEat : string [] = [];
selectedNotEat! : string;
time : string [] = ['unter 30min', '30min bis 1h', 'über 1h']
selectedTime!: string;
tag : { pch : string; t: string[]; st: string; }[] = [];

ngOnInit() {
  const ing : {rep: string, texture:string} []= Object.values(this.ingredients);

  for (var recepie of this.recepieList) {
    const n = recepie.tagN
    if (n != '' && this.tagN.includes(n) === false) {this.tagN.push(n!)}
    const e = recepie.tagE
    if (e != '' && this.tagE.includes(e) === false) {this.tagE.push(e!)}
  }
  for (var i of ing) {
    const n = i.rep
    if (n != '' && this.eat.includes(n) === false) {this.eat.push(n!)}
    if (n != '' && this.notEat.includes(n) === false) {this.notEat.push('ohne ' + n!)}
  }

  this.tag = [{pch: 'Dauer', t: this.time, st: this.selectedTime}, {pch: 'Ernärung', t : this.tagE.sort(), st : this.selectedTagE}, {pch: 'Nationalität', t: this.tagN.sort(), st : this.selectedTagN}, {pch: 'Mit', t : this.eat.sort(), st : this.selectedEat}, {pch: 'Ohne', t : this.notEat.sort(), st : this.selectedNotEat}]
  
  }
}

