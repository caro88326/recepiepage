import { Component, inject } from '@angular/core';
import { RecepieService } from '../../recepie.service'; 
import { RecepieInterface } from '../../interfaces/recepie-interface';
import { timeUnit } from '../../utils/timeUnit'; 
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, RouterModule, NgFor, TagModule, ScrollTopModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recepieService = inject(RecepieService);
  recepieList : RecepieInterface [];
  timeUnit = timeUnit
  constructor() {
    this.recepieList = this.recepieService.getAllRecepies(); 
    }
}
