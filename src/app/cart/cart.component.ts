import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatTime } from '../utils/recepieUtils';
import { item, ingredients, Unit } from '../utils/ingredients';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule,TagModule, DividerModule, OverlayPanelModule, InputNumberModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  formatTime = formatTime
  inputValue! : number 


  recepies = [{
    id: 0,
    name: 'Dumplings', 
    picture: '../assets/images/Dumplings.jpg',
    time: 120, //min
    person: 4,
    ingredients: [
      item(ingredients.dumplingteig, 1),
      item(ingredients.hackfleisch, 400),
      item(ingredients.chinakohl, 300),
      item(ingredients.karotten, 4),

      item(ingredients.knoblauchzehen, 2),
      item(ingredients.ingwer, 4, Unit.stk),
      item(ingredients.sojasauce, 1, Unit.nb),
      item(ingredients.sesamöl, 1, Unit.nb),
      item(ingredients.öl, 1, Unit.nb),
      item(ingredients.salz, 1, Unit.nb),
      item(ingredients.pfeffer, 1, Unit.nb),
    ],
    instruction: [
      'Den Dumplingteig auftauen lassen.',
      'Für die Füllung den Chinakohl waschen, trocken tupfen, fein hacken. Den gehackten Chinakohl in eine Schüssel geben, salzen und ca. 10 Minuten ziehen lassen. Den Kohl in ein Passier- oder Geschirrtuch geben und die Flüssigkeit ausdrücken.',
      'Die Karotten, den Knoblauch und den Ingwer schälen und mit dem Messer fein hacken.',
      'Alle Zutaten in einer Schüssel vermengen und mit Salz und Pfeffer abschmecken.', 
      'Die aufgetauen Dumplinglteigstücke an den Rändern mit etwas Wasser bestreichen und je ca 1 TL Füllung in die Mitte geben. Den Teig zu einem Halbkreis zusammenklappen, dabei die Enden einklappen und den Rand gut mit den Fingern andrücken.',
      'Etwas Öl in einer Pfanne erhitzen. Die Dumplings kreisförmig in die Pfanne geben und ca. 2 Minuten scharf anbraten. Die Hitze reduzieren und ca. 100 ml Wasser dazugeben. Den Deckel aufsetzen und die Dumplings ca. 10 Minuten dämpfen, bis das Wasser vollständig verdunstet ist. Den Deckel abnehmen und die Dumplings erneut bei hoher Hitze ca. 2 Minuten knusprig anbraten.',
      'Als Dip dazu werden die Sojasauce und das Sesamöl nach Bedarf gemischt.'
    ],
    author : 'Genius Rezeptewelt: Gastrezept - Klassische Dumplings von Ute',
    tagE: 'Fleisch',
    tagN: 'chinesisch',
    duration: 'über 1h'
  }, {
    id: 1,
    name: 'Indischer rote Linsen Dal', 
    picture: '../assets/images/Beispielbild.jpg',
    time: 30, //min
    person: 4,
    ingredients: [
      item(ingredients.roteLinsen, 300),
      item(ingredients.zwiebeln, 2),
      item(ingredients.kokosmilch, 250, Unit.ml),
      item(ingredients.passierteTomaten, 250, Unit.ml),
      item(ingredients.joghurt, 1, Unit.stk),

      item(ingredients.knoblauchzehen, 4),
      item(ingredients.ingwer, 2, Unit.stk),
      item(ingredients.kurkuma, 1, Unit.TL),
      item(ingredients.koriander, 1, Unit.TL),
      item(ingredients.kreuzkümmel, 1, Unit.TL),
      item(ingredients.paprikaEdelsüß, 1, Unit.TL),
      item(ingredients.garamMasala, 1, Unit.TL),
      item(ingredients.gemüsebrühe, 780, Unit.ml),
      item(ingredients.zitronensaft, 2||3, Unit.EL),
      item(ingredients.salz, 1, Unit.nb),
      item(ingredients.pfeffer, 1, Unit.nb),
      item(ingredients.olivenöl, 1, Unit.nb),
      item(ingredients.minze, 1, Unit.nb),
    ],
    instruction: [
      'Die Zwiebeln in kleine Würfel hacken, den Knoblauch pressen und den Ingwer reiben oder mit dem Messer fein hacken. Die Linsen in ein feines Sieb geben und unter fließendem kaltem Wasser abspülen.',
      'Das Olivenöl in einer Pfanne oder einem Topf erhitzen. Die gehackten Zwiebeln dazugeben und 2-3 Minuten glasig dünsten. Dann den Knoblauch und Ingwer hinzugeben und eine weitere Minute anbraten, bis es gut duftet. Zuletzt die Gewürze hinzugeben und einige Sekunden anschwitzen, damit sich die Aromen entfalten.',
      'Die Linsen mit in den Topf geben, mit der Gemüsebrühe aufgießen, umrühren und zum Kochen bringen. Zugedeckt 8-10 Minuten köcheln lassen, oder bis die Linsen den größten Teil der Flüssigkeit aufgenommen haben.',
      'Dann Kokosmilch und passierte Tomaten hinzufügen und weitere 5-10 Minuten köcheln lassen, oder bis die Linsen gar sind. (Wenn die Sauce zu dickflüssig ist, etwas mehr Brühe oder Kokosmilch hinzufügen, bis die gewünschte Konsistenz erreicht ist). Mit Salz, Pfeffer und Zitronensaft abschmecken.',
      'Dazu kann ein (veganer) Jogurthdip mit Minze, Salz Pfeffer und Zitronensaft gemacht werden.',
      'Am besten mit Naanbrot servieren.'
    ],
    author: 'unbekannt',
    tagE: 'Vegan',
    tagN: 'indisch',
    duration: 'bis zu 30 min',
  }]

}
