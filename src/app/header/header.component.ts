import { Component, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BadgeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  recepieService = inject(RecepieService)

}
