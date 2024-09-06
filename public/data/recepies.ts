import { RecepieInterface } from '../../src/app/interfaces/recepie-interface'; 
import { ISU } from './ingredients'; 

export class RecepiesData{
  static recepieList: RecepieInterface [] = [
    // {
    //   id: 000000,
    //   name: 'Name', 
    //   picture: '../assets/images/Beispielbild.jpg',
    //   time: 0000, //min
    //   person: 00,
    //   ingredients: {
    //     food: [{
    //       quantitie: 00,
    //       unit: ISU.units.u,
    //       ingredient: ISU.ingredients.i,
    //     }, ], 
    //     spice: [{
    //       quantitie: 00,
    //       unit: ISU.units.u,
    //       ingredient: ISU.spices.i
    //     },], 
    //   },
    //   instruction: [
    //     'text', 
    //     'text',
    //   ],
    //   tagE: 'Fleisch',
    //   tagN: 'chinesisch',
    // }, 

    {
      id: 0,
      name: 'Dumplings', 
      picture: '../assets/images/Dumplings.jpg',
      time: 120, //min
      person: 4,
      ingredients: {
        food: [{ 
          quantitie: 1,
          unit: ISU.units.pck,
          ingredient: ISU.ingredients.dumplingteig,
        }, {
          quantitie: 400,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.hackfleisch,
        }, {
          quantitie: 300,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.chinakohl,
        }, {
          quantitie: 4,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.karotten,
        }],
        spice: [{
          quantitie: 2,
          unit: ISU.units.stk,
          ingredient: ISU.spices.knoblauchzehen
        },{
          quantitie: 4,
          unit: ISU.units.stk,
          ingredient: ISU.spices.ingwer
        },{
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.sojasauce
        },{
          quantitie: 1, 
          unit: ISU.units.nb,
          ingredient: ISU.spices.sesamöl
        }, {
          quantitie: 1, 
          unit: ISU.units.nb,
          ingredient: ISU.spices.öl,
        },{
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.salz,
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.pfeffer,
        }, ],
      },
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
    }, 
    
    
    {
      id: 1,
      name: 'Indischer rote Linsen Dal', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 30, //min
      person: 4,
      ingredients: {
        food: [{
          quantitie: 300,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.roteLinsen,
        }, {
          quantitie: 2,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.zwiebeln
        },{
          quantitie: 250,
          unit: ISU.units.ml,
          ingredient: ISU.ingredients.kokosmilch,
        }, {
          quantitie: 250,
          unit: ISU.units.ml,
          ingredient: ISU.ingredients.passierteTomaten,
        }, {
          quantitie: 1,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.joghurt,
        }],
        spice: [{
          quantitie: 4,
          unit: ISU.units.stk,
          ingredient: ISU.spices.knoblauchzehen
        },{
          quantitie: 2,
          unit: ISU.units.stk,
          ingredient: ISU.spices.ingwer
        },{
          quantitie: 1,
          unit: ISU.units.TL,
          ingredient: ISU.spices.kurkuma
        },{
          quantitie: 1, 
          unit: ISU.units.TL,
          ingredient: ISU.spices.koriander
        }, {
          quantitie: 1, 
          unit: ISU.units.TL,
          ingredient: ISU.spices.kreuzkümmel,
        },{
          quantitie: 1,
          unit: ISU.units.TL,
          ingredient: ISU.spices.paprikaEdelsüß,
        }, {
          quantitie: 1,
          unit: ISU.units.TL,
          ingredient: ISU.spices.garamMasala,
        }, {
          quantitie: 780,
          unit: ISU.units.ml,
          ingredient: ISU.spices.gemüsebrühe,
        }, {
          quantitie: 2 || 3,
          unit: ISU.units.EL,
          ingredient: ISU.spices.zitronensaft
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.salz
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.pfeffer
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.olivenöl
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.minze
        }],
      },
      instruction: [
        'Die Zwiebeln in kleine Würfel hacken, den Knoblauch pressen und den Ingwer reiben oder mit dem Messer fein hacken. Die Linsen in ein feines Sieb geben und unter fließendem kaltem Wasser abspülen.',
        'Das Olivenöl in einer Pfanne oder einem Topf erhitzen. Die gehackten Zwiebeln dazugeben und 2-3 Minuten glasig dünsten. Dann den Knoblauch und Ingwer hinzugeben und eine weitere Minute anbraten, bis es gut duftet. Zuletzt die Gewürze hinzugeben und einige Sekunden anschwitzen, damit sich die Aromen entfalten.',
        'Die Linsen mit in den Topf geben, mit der Gemüsebrühe aufgießen, umrühren und zum Kochen bringen. Zugedeckt 8-10 Minuten köcheln lassen, oder bis die Linsen den größten Teil der Flüssigkeit aufgenommen haben.',
        'Dann Kokosmilch und passierte Tomaten hinzufügen und weitere 5-10 Minuten köcheln lassen, oder bis die Linsen gar sind. (Wenn die Sauce zu dickflüssig ist, etwas mehr Brühe oder Kokosmilch hinzufügen, bis die gewünschte Konsistenz erreicht ist). Mit Salz, Pfeffer und Zitronensaft abschmecken.',
        'Dazu kann ein (veganer) Jogurthdip mit Minze, Salz Pfeffer und Zitronensaft gemacht werden.',
        'Am besten mit Naanbrot servieren,'
      ],
      author: 'unbekannt',
      tagE: 'Vegan',
      tagN: 'indisch',
    }, 
    {
      id: 2,
      name: 'Fusilli mit Zucchini', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 20, //min
      person: 4,
      ingredients: {
        food: [{
          quantitie: 400,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.nudeln,
        }, {
          quantitie: 1,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.zwiebeln,
        }, {
          quantitie: 2,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.zucchini,
        }, {
          quantitie: 2,
          unit: ISU.units.EL,
          ingredient: ISU.ingredients.butter ,
        }, {
          quantitie: 250,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.sahne,
        }, {
          quantitie: 50,
          unit: ISU.units.g,
          ingredient: ISU.ingredients.pinienkerne,
        } ], 
        spice: [{
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.salz
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.pfeffer
        }, {
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.curry
        }, {
          quantitie: 5,
          unit: ISU.units.stängel,
          ingredient: ISU.spices.minze
        }], 
      },
      instruction: [
        'Die Fusilli nach Packungsanweisung in Salzwasser bissfest garen. ', 
        'Während die Nudeln kochen, die Zwiebeln schälen und klein würfeln. Zucchini waschen, putzen, längs vierteln und quer in dünne Scheiben schneiden.',
        'Die Pinienkerne kurz in der Pfanne anrösten, sodass sie goldbraun werden.',
        'Die Butter in der Pfanne schmelzen. Darin Zwiebeln und Zucchini bei mittlerer Hitze 3-4 min dünsten, dabei gelegentlich umrühren. Sahne dazugießen und mit Salz, Pfeffer und Currypulver würzen.',
        'Die Sauce unter Rühren in 5 min auf die Hälfte einköcheln lassen.',
        'Die Minze abbrausen und trocken schütteln, die Blättchen abzupfen und fein hacken.',
        'Die Nudeln in ein Sieb abgießen, gut abtropfen lassen und zur Sauce in die Pfanne geben. Pinienkerne und Minze darüberstreuen, alles miteinander vermischen. Perfekt dazu: frischgeriebener Parmesan.', 
      ],
      author: 'Aus "Die Familiencampingküche" von Sonja Stötzel (etwas abgeändert)',
      tagE: 'Vegetarisch',
      tagN: '',
    }, {
      id: 3,
      name: 'Tomate-Mozarella-Salat', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 10, //min
      person: 2,
      ingredients: {
        food: [{
          quantitie: 1,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.mozarella,
        }, {
          quantitie: 3,
          unit: ISU.units.stk,
          ingredient: ISU.ingredients.tomaten,
        }, ], 
        spice: [{
          quantitie: 3,
          unit: ISU.units.EL,
          ingredient: ISU.spices.olivenöl
        }, {      
          quantitie: 3,
          unit: ISU.units.EL,
          ingredient: ISU.spices.balsamicoDunkel
        }, { 
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.salz
        }, { 
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.pfeffer
        }, { 
          quantitie: 1,
          unit: ISU.units.nb,
          ingredient: ISU.spices.basilikum + 'oder' + ISU.spices.italienischeKräuter
        }], 
      },
      instruction: [
        'Die Tomaten und den Mozarella in Würfel schneiden. Falls vorhanden, den frischen Balikilum klein hacken.', 
        'In einer kleinen Schüssel je 3 EL Olivenöl und Essig geben. Mit Salz, Pfeffer und frischem Basilikum oder italienischen Kräutern würzen.',
        'Die Salatsauce über die Tomaten und den Mozarella geben und gut vermischen.'
      ],
      author: 'Carolin Büchter',
      tagE: 'Vegetarisch',
      tagN: 'italienisch',
    }
]
}


