import { Component, OnInit, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { RecepieService } from '../../recepie.service';
import { RecepieInterface } from '../../interfaces/recepie-interface';
import { NgFor } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect'; //Wenn nicht ausgewählt löschen!!


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, DialogModule, ListboxModule, FormsModule, NgFor, MultiSelectModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  recepieService = inject(RecepieService);
  recepieList : RecepieInterface []; 
  ingredients = {};
  
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

  constructor () {
    this.recepieList = this.recepieService.getAllRecepies();
    this.ingredients = this.recepieService.getAllIngredients();

  }
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

