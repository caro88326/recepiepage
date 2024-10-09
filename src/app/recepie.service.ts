import { Injectable, signal } from '@angular/core';

import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';
import { item, ingredients, Unit } from './utils/ingredients';

@Injectable({
  providedIn: 'root'
})

export class RecepieService {

  readonly allRecepies = RecepiesData.recepieList
  // allRecepies = signal<RecepieInterface[]>(RecepiesData.recepieList) 
  cart = signal<RecepieInterface[]>([ 
    {
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
      item(ingredients.zitronensaft, 2, Unit.EL),
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
  }
])

  // all recepies
  getRecepiesById (id:number) : RecepieInterface | undefined {
    // this returns a deep copy of the object
    var obj = this.allRecepies.find(recepie => recepie.id === id);
    return JSON.parse(JSON.stringify(obj));
    
  }

  // cart
  addToCart(recepie : RecepieInterface) {
    if (!this.cart().find(r => r.id === recepie.id)) {
      this.cart.update(recepies => {
        recepies.push(recepie)
        return [...recepies]
      })
    }     
    if (this.cart().find(r => r.id === recepie.id && r.person !== recepie.person)) {
      this.cart.update(recepies => {
        let cartRecepie = recepies.find(r => r.id === recepie.id)
        cartRecepie = recepie
        return [...recepies]
      })
    }
    this.cartLength()
  }


  removeFromCart(recepie : RecepieInterface) {
    if (this.cart().find(r => r === recepie)) {
      this.cart.update(recepies => {
        recepies.splice(recepies.indexOf(recepie), 1)
        return [...recepies]}
      )
    }
  }

  removeAllFromCart() {
    this.cart.set([])
  }

  cartLength () {
    return this.cart().length
  }

  // // Change dataset
  // updateRecepie(newRecepie : RecepieInterface) {
  //   this.allRecepies.update( recepies => {  
  //     const index = recepies.findIndex(recepie => recepie.id === newRecepie.id);
  //     if (index === -1) {
  //       return recepies;
  //     } 
  //     recepies[index] = newRecepie;
  //     return [...recepies]
  //   });
  // }

  
  // -----------------------------------------------------------


  // changed = false
  // newQuantities : number [] = []
  // 
  // changeServings(recepieId : number, newQuantity : number) : RecepieInterface | undefined {
  //   let index = -1;
  //   this.data.update(recepies => {
  //     // find index
  //     index = recepies.findIndex( recepie => recepie.id === recepieId);
  //     if (index >= 0) {
  //       recepies[index].person = newQuantity;
  //     }
  //     return recepies;
  //   });

  //   if (index > -1) {
  //     return this.data()[index];
  //   }
  //   return undefined
  }
