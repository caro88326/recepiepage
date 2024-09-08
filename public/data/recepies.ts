import { RecepieInterface } from '../../src/app/interfaces/recepie-interface'; 
import { ISU } from './ingredients'; 

function sci (x: number, y:string ,z:string) {
  return { 
    quantitie : x,
    unit : ISU.getUnit(y),
    ingredient : ISU.getIng(z),
  }
}

function scs (x: number, y:string ,z:string) {
  return { 
    quantitie : x,
    unit : ISU.getUnit(y),
    ingredient : ISU.getSpices(z),
  }
}

export class RecepiesData{
  static recepieList: RecepieInterface [] = [
    // {
    //   id: 000000,
    //   name: 'Name', 
    //   picture: '../assets/images/Beispielbild.jpg',
    //   time: 0000, //min
    //   person: 00,
    //   ingredients: {
    //     food: [ sci(00, '', ''),], 
    //     spice: [scs(00, '', ''),], 
    //   },
    //   instruction: [
    //     'text', 
    //     'text',
    //   ],
    //   author: 'Aus...
    //   tagE: 'Fleisch',
    //   tagN: 'chinesisch',
    // }, 

    {
      id: 0,
      name: 'Dumplings', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 120, //min
      person: 4,
      ingredients: {
        food: [
          sci(1, 'pck', 'dumplingteig'),
          sci(400, 'g', 'hackfleisch'),
          sci(300, 'g', 'chinakohl'),
          sci(4, 'stk', 'karotten'),
        ],
        spice: [
          scs(2, 'stk', 'knoblauchzehen'),
          scs(4, 'stk', 'ingwer'),
          scs(1, 'nb', 'sojasauce'),
          scs(1, 'nb', 'sesamöl'),
          scs(1, 'nb', 'öl'),
          scs(1, 'nb', 'salz'),
          scs(1, 'nb', 'pfeffer'),
        ],
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
        food: [
          sci(300, 'g', 'roteLinsen'),
          sci(2, 'stk', 'zwiebeln'),
          sci(250, 'ml', 'kokosmilch'),
          sci(250, 'ml', 'passierteTomaten'),
          sci(1, 'stk', 'joghurt'),
        ],
        spice: [
          scs(4, 'stk', 'knoblauchzehen'),
          scs(2, 'stk', 'ingwer'),
          scs(1, 'TL', 'kurkuma'),
          scs(1, 'TL', 'koriander'),
          scs(1, 'TL', 'kreuzkümmel'),
          scs(1, 'TL', 'paprikaEdelsüß'),
          scs(1, 'TL', 'garamMasala'),
          scs(780, 'ml', 'gemüsebrühe'),
          scs(2 || 3, 'EL', 'zitronensaft'),
          scs(1, 'nb', 'salz'),
          scs(1, 'nb', 'pfeffer'),
          scs(1, 'nb', 'olivenöl'),
          scs(1, 'nb', 'minze'),],
      },
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
    }, 
    {
      id: 2,
      name: 'Fusilli mit Zucchini', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 20, //min
      person: 4,
      ingredients: {
        food: [
          sci(400, 'g', 'nudeln'),
          sci(1, 'stk', 'zwiebeln'),
          sci(2, 'stk', 'zucchini'),
          sci(2, 'EL', 'butter'),
          sci(250, 'g', 'sahne'),
          sci(50, 'g', 'pinienkerne')
        ], 
        spice: [
          scs(1, 'nb', 'salz'),
          scs(1, 'nb', 'pfeffer'),
          scs(1, 'nb', 'curry'),
          scs(5, 'stängel', 'minze'),
        ], 
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
        food: [
          sci(1, 'stk', 'mozarella'),
          sci(3, 'stk', 'tomaten'),
        ], 
        spice: [
          scs(3, 'EL', 'olivenöl'),
          scs(3, 'EL', 'balsamicoDunkel'),
          scs(1, 'nb', 'salz'),
          scs(1, 'nb', 'pfeffer'),
          scs(1, 'nb', 'basilikum'),
        ], 
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
]}