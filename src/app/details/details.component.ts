import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepieService } from '../recepie.service';
import { RecepieInterface } from '../interfaces/recepie-interface';
import { timeUnit } from '../utils/timeUnit';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { nb } from '../utils/nb';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ButtonModule, TableModule, CommonModule, DividerModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recepieService = inject(RecepieService);
  recepie: RecepieInterface;
  timeUnit = timeUnit;
  cols! : {field : string, header : string} [];
  ing! : {quantitie:string, unit:string, ingredient:string} [];

  constructor () {
    const recepieId = Number(this.route.snapshot.params['id'])
    this.recepie = this.recepieService.getRecepiesById(recepieId)!;
  }

  ngOnInit() {
    this.cols = [
      { field: 'quantitie', header: 'Menge' },
      { field: 'unit', header: 'Einheit' },
      { field: 'ingredient', header: 'Zutat' },
    ];

    let ingredients = this.recepie.ingredients.food.map( i => {
      return {
        quantitie : nb(i.quantitie!.toString(), i.unit.unit! as string),  
        unit: i.unit.unit! as string, 
        ingredient : i.ingredient.rep! as string
      }
    }) ;

    let spices = this.recepie.ingredients.spice.map( i => {
      return {
        quantitie : nb(i.quantitie!.toString(), i.unit.unit! as string), 
        unit: i.unit.unit! as string, 
        ingredient : i.ingredient.rep! as string
      }
    });

    this.ing = [...ingredients, ...spices]

    // const index = Object.keys(Array.apply(1, Array(this.recepie.instruction.length))).map(Number)
    let index = new Array()
    for(var i = 1; i<=this.recepie.instruction.length; i++) {
      index[i] = i
    }
  }
}
