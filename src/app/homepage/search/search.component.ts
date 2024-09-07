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


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, ButtonModule, DialogModule, ListboxModule, FormsModule, NgFor],
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
  

  constructor () {
    this.recepieList = this.recepieService.getAllRecepies();
    this.ingredients = this.recepieService.getAllIngredients();
    console.log(this.ingredients)
  }


  tagN : string[] = [];
  selectedTagN! : string;
  tagE : string [] = [];
  selectedTagE! : string;
  eat : string [] = [];
  selectedEat! : string;
  notEat : string [] = [];
  selectedNotEat! : string;

  tag = [{t: this.tagN, st : this.selectedTagN}, {t : this.tagE, st : this.selectedTagE},]

    ngOnInit() {
      for (var recepie of this.recepieList) {
        const n = recepie.tagN
        if (n != '' && this.tagN.includes(n) === false) {this.tagN.push(n!)}
        const e = recepie.tagE
        if (e != '' && this.tagE.includes(e) === false) {this.tagE.push(e!)}
      }
      // for (var rep of this.ingredients) {

      // }
  }
  
}