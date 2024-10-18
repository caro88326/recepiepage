import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';

import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';
import { formatTime, changeIngredientServings, numberOfRecepies } from '../utils/recepieUtils';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule,TagModule, DividerModule, OverlayPanelModule, InputNumberModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  recepieService = inject(RecepieService)
  formatTime = formatTime
  recepie! : RecepieInterface
  inputValue! : number 
  numberOfRecepies = numberOfRecepies()
  buttonD = true


  getSelectedRecepie(recepieData : RecepieInterface) {
    this.recepie = recepieData
    this.inputValue = this.recepie.person
  }

  updatePerson () {
    let ogRecepie : RecepieInterface =  this.recepieService.allRecepies.find(r => r.id === this.recepie.id)!
    this.recepie = changeIngredientServings(this.recepie, ogRecepie, this.inputValue)
    this.recepieService.addToCart(this.recepie)
  }

  removeFromCart (recepie : RecepieInterface) {
    this.recepieService.removeFromCart(recepie)
  }

  buttonDisabel(){
    if (this.recepieService.cart().length >0){
      this.buttonD = false
    } else {this.buttonD =  true}
    return this.buttonD
  }
}
