import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { formatTime } from '../utils/recepieUtils';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';


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
  inputValue! : number 

  removeFromCart (recepie : RecepieInterface) {
    this.recepieService.removeFromCart(recepie)
  }
}
