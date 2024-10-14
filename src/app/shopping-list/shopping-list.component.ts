import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { RecepieService } from '../recepie.service';
import { numberOfRecepies } from '../utils/recepieUtils';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})

export class ShoppingListComponent {
  recepieService = inject(RecepieService)
  shoppingIngredients = this.recepieService.selectedIngredients
  numberOfRecepies = numberOfRecepies()
}
