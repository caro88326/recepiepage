import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recepiepage';
  constructor(private primengConfig : PrimeNGConfig) {}

  ngOnInit () {
    this.primengConfig.ripple = true;
  //   this.primengConfig.zIndex = {
  //     modal: 1100,    // dialog, sidebar
  //     overlay: 1000,  // dropdown, overlaypanel
  //     menu: 1000,     // overlay menus
  //     tooltip: 1100   // tooltip
  // };
  }
}
