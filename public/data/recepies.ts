import { RecepieInterface } from '../../src/app/interfaces/recepie-interface'; 
import { item, ingredients, Unit } from '../../src/app/utils/ingredients';

export class RecepiesData{
  static recepieList: RecepieInterface [] = [
    // {
    //   id: 000000,
    //   name: 'Name', 
    //   picture: '../assets/images/Beispielbild.jpg',
    //   time: 0000, //min
    //   person: 00,
    //   ingredients: [
    //    item(ingredients.zutat, 000),
    //   ],
    //   instruction: [
    //     'text', 
    //     'text',
    //   ],
    //   author: 'Aus...',
    //   tagE: 'Fleisch',
    //   tagN: 'chinesisch',
    //   duration: 'bis zu 30 min', 'über 30 min bis 1 h', 'über 1 h'
    // }, 

    {
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
      duration: 'über 1 h '
    }, 
    
    
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
    }, 
    {
      id: 2,
      name: 'Fusilli mit Zucchini', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 20, //min
      person: 4,
      ingredients: [
        item(ingredients.nudeln, 400),
        item(ingredients.zwiebeln, 1),
        item(ingredients.zucchini, 2),
        item(ingredients.butter, 2, Unit.EL),
        item(ingredients.sahne, 250),
        item(ingredients.pinienkerne, 50),

        item(ingredients.salz, 1, Unit.nb),
        item(ingredients.pfeffer, 1, Unit.nb),
        item(ingredients.curry, 1, Unit.nb),
        item(ingredients.minze, 5),
      ],
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
      duration: 'bis zu 30 min'
    }, {
      id: 3,
      name: 'Tomate-Mozarella-Salat', 
      picture: '../assets/images/Beispielbild.jpg',
      time: 10, //min
      person: 2,
      ingredients: [        
        item(ingredients.mozzarella, 1),
        item(ingredients.tomaten, 3),

        item(ingredients.olivenöl, 3, Unit.EL),
        item(ingredients.balsamicoDunkel, 3, Unit.EL),
        item(ingredients.salz, 1, Unit.nb),
        item(ingredients.pfeffer, 1, Unit.nb),
        item(ingredients.basilikum, 1, Unit.nb),
        item(ingredients.zucker, 1, Unit.nb),
      ], 
      instruction: [
        'Die Tomaten und den Mozarella in Würfel schneiden. Falls vorhanden, den frischen Balikilum klein hacken.', 
        'In einer kleinen Schüssel je 3 EL Olivenöl und Essig geben. Mit Salz, Pfeffer und frischem Basilikum oder italienischen Kräutern würzen.',
        'Die Salatsauce über die Tomaten und den Mozarella geben und gut vermischen.'
      ],
      author: 'Carolin Büchter',
      tagE: 'Vegetarisch',
      tagN: 'italienisch',
      duration: 'bis zu 30 min'
    }, 
    {
        id: 4,
        name: 'Kässpätzle', 
        picture: '../assets/images/Kässpätzle.jpg',
        time: 60, //min
        person: 4,
        ingredients: [        
          item(ingredients.mehl, 400),
          item(ingredients.eier, 4),
          item(ingredients.wasser, 220),
          item(ingredients.zwiebeln, 5),
          item(ingredients.geriebenerGratinkäse, 250),

          item(ingredients.salz, 1, Unit.TL),
          item(ingredients.muskat, 1, Unit.nb),
        ], 
        instruction: [
          'Mehl, Eier Wasser, Salz und Muskat zu einem glatten Teig verrühren. ', 
          'Den Teig durch eine Spätzlespresse pressen oder die Spätzle per Hand in heißes Wasser schaben. Nachdem sie an der Wasseroberfläche schwimmen, noch etwas länger warten und dann in ein Sieb hinausschöpfen. ',
          'Die Spätzle in einer Form mit Käse schichten und in dem Ofen bei Umluft 180 °C backen, bis der Käse geschmolzen ist und gold-gelbe Farbe annimmt. ',
          'Währenddessen die Zwiebeln schneiden und in einer Pfanne gold-braun anbraten. ',
          'Die Zwiebeln beim Servieren über die Kässpätzle verteilen.',
        ],
        author: 'Teigrezept aus "Emmi kocht einfach" "Omas Spätzle Rezept - Spätzleteig selber machen"',
        tagE: 'Vegetarisch',
        tagN: 'schwäbisch',
        duration: 'über 30 min bis 1 h'
      }, {
        id: 5,
        name: 'Zucchinisuppe', 
        picture: '../assets/images/Zucchinisuppe.jpg',
        time: 60, //min
        person: 4,
        ingredients: [
          item(ingredients.zucchini, 700, Unit.g),
          item(ingredients.kartoffeln, 200, Unit.g),
          item(ingredients.zwiebeln, 2),

          item(ingredients.knoblauchzehen, 2),
          item(ingredients.ingwer, 1),
          item(ingredients.gemüsebrühe, 600, Unit.ml),
          item(ingredients.weißwein, 1, Unit.nb),
          item(ingredients.salz, 1, Unit.nb),
          item(ingredients.pfeffer, 1, Unit.nb),
          item(ingredients.öl, 1, Unit.nb),
        ],
        instruction: [
          'Die Zucchini, wahlweise gelb oder grün, halbieren und, falls voranden, die großen Kerne entfernen. Die Zucchinis, Kartoffeln, Zwiebeln sowie der Knoblauch und Ingwer klein schneiden.', 
          'Die Kartoffeln in einem Topf mit etwas Öl anbraten. Nach ein paar Minuten die Zwiebeln und die Zucchini dazu geben. Kurz dannach auch noch den Knoblauch und Ingwer mit anbraten.',
          'Mit der Gemüsebrühe und dem Weißwein das angebratene Gemüse ablöschen und köcheln lassen.',
          'Wenn die Zutaten gar sind, die Suppe mit einem Pürierstab fein pürieren und mit Salz und Pfeffer abschmecken.', 
          'Zu der Suppe passen Backerbsen gut.'
        ],
        author: 'Von Gaby Amann',
        tagE: 'Vegan',
        tagN: '',
        duration: 'über 30 min bis 1 h'
      }, 
]}