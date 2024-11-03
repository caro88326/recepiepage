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
      duration: 'über 1 h'
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
        item(ingredients.geriebenerGratinkäse, 1, Unit.kg),// Test
        item(ingredients.geriebenerGratinkäse, 5, Unit.ml),//Test

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
          item(ingredients.wasserStill, 220),
          item(ingredients.zwiebeln, 5),
          item(ingredients.geriebenerGratinkäse, 250),
          item(ingredients.butter, 1, Unit.kg), //für tests, dannach löschen

          item(ingredients.salz, 1, Unit.TL),
          item(ingredients.muskat, 1, Unit.nb),
          item(ingredients.pfeffer,1 , Unit.kg) //für Test
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
      }, {
      id: 6,
      name: 'Baklava', 
      picture: '../assets/images/Baklava.jpg',
      time: 80, //min
      person: 4,
      ingredients: [
       item(ingredients.baklavateig, 0.5),
       item(ingredients.butter, 100),
       item(ingredients.pistazienGehackt, 125),
       item(ingredients.zucker, 300),
       item(ingredients.wasserStill, 250),
       item(ingredients.zitronensaft, 1, Unit.nb),
      ],
      instruction: [
        'Die Butter in einem Topf schmelzen, aber nicht zum kochen bringen. Der dabei entstandene weiße Schaum entfernen, entweder mit einem Löffel wegnehmen oder in einem mit Küchenpapier ausgelegten Sieb durchfließen lassen.', 
        'Eine rechteckige tiefe Form (am besten aus Glas) bereit stellen und den Teig (225-240g) passend dazu ausschneiden. Die Hälfte der Teigsblätter zur Seite legen und mit einem Küchentuch abdecken, dass sie nicht austrocknen.',
        'Die Form mit der geschmolzenen Butter einfetten und ein Teigblatt hineinlegen. Darüber etwas Butter geben und zwei Teigblätter darauf legen, auf welche wieder Butter kommt. Dies immer mit zwei Teigblättern wiederholen, bis die erste Hälfte verbraucht ist.',
        'Nun die gehackten Pistazien (nicht gesalzen) gleichmäßig darüber verteilen.',
        'Jetzt kommen die restlichen Teigblätter und ebenfalls in zweier Schichten abwechselnd mit der Butter darüber. Die übrig gebliebene Butter gleichmäßig darüber verteilen.',
        'Das Baklava in 16-20 Quadrate einschneiden und in dem vorgeheizten Backofen (170°C Ober-/Unterhitze) für ca. 45-50 Minuten leicht goldbraun ausbacken. Ist der Boden nach der backzeit noch nicht goldbraun (ist mit einer Glasform gut zu erkennen), kann man ihn für ca. 5-10 Minuten auf den Boden vom Backofen stellen und bei 170°C Unterhitze backen.',
        'Während den letzten 15 Minuten der Backzeit, wird der Sirup vorbereitet. Dafür den Zucker, das Wasser und einen Spritzer Zirtonensaft in einen Topf geben und bei mittlerer Hitze für ca. 12-15 Minuten köcheln lassen. Er sollte eine dickflüssige Konsistenz haben.',
        'Ist das Baklava gut durchgebacken, aus dem Ofen holen und den heißen Sirup gleichmäßig darübergießen. Dabei sollte es weiterhin köcheln und ein lautes Geräuch von sich geben.',
        'Den Sirup für ca. 3 Stunden durchziehen lassen. Es kann noch etwas gemalene oder gehackte Pistazien darübergestreut werden.',
        'Das Baklava hält sich an einem kühlen und trockenen Ort 4-5 Tage frisch. Wird es, vorallem wenn das Baklava noch warm ist, überdeckt, ist es nocht mehr kross.'
      ],
      author: 'Aus gruensteinKitchen Youtube Video : "Kuru Baklava / einfaches Baklava Rezept mit Pistazien | Antep Fistikli Kuru Baklava Tarifi"',
      tagE: 'Vegetarisch',
      tagN: 'türkisch',
      duration: 'über 1 h'
    }, {
      id: 7,
      name: 'Spinatknödel', 
      picture: '../assets/images/Spinatknödel.jpg',
      time: 35, //min
      person: 4,
      ingredients: [
        item(ingredients.spinatBlattTK, 500),
        item(ingredients.milch, 125),
        item(ingredients.brot, 240, Unit.g),
        item(ingredients.eier, 2),
        item(ingredients.zwiebeln, 1),
        item(ingredients.parmesan, 10),
        item(ingredients.paniermehl, 3, Unit.EL),
        item(ingredients.butter, 1, Unit.EL),

        item(ingredients.salz, 1, Unit.TL),
        item(ingredients.pfeffer, 1, Unit.nb),
        item(ingredients.muskat, 1, Unit.nb),
      ],
      instruction: [
        'Den TK-Blattspinat bei Zimmertemperatur auftauen lassen oder in 100 ml Wasser sanft für 3-5 Minuten dünsten und abkühlen lassen. Dannach den Spinat fest mit den Händen ausdrücken, damit er so viel Wasser wie möglich verliert und fein schneiden.',
        'Das Brot in ca 1 cm große Würfel schneiden und in eine große Schüssel geben.',
        'Die Zwiebel schälen und in feine Würfel schneiden. Dann in einem kleinen Topf mit der Butter glasig andünsten.',
        'Nun in den Topf die Milch dazugeben, mit dem Salz, Pfeffer und Muskat würzen und kurz heiß werden lassen.',
        'Die heiße Milchmasse über die Brotwürfel gießen und den Parmesan, das Paniermehl, den Spinat und die Eier hinzugeben.',
        'Im Anschluss alles vermischen. Ist die Masse zu weich, kann nochmals Paniermehl dazugegeben werden. Ist sie zu trocken, etwas Milch.',
        'In einem großen Topf Salzwasser erhitzen und währenddessen die Knödel mit nassen Händen formen.',
        'Die Knödel in siedendem Wasser ca. 15 Minuten ziehen lassen - das Wasser darf nicht kochen!', 
        'Zu den Knödeln passt beispielsweise eine Pilzsauce oder sind eine Beilage zu Fleischgerichten. Auch schmecken sie in Scheiben geschnitten und angebraten in einer Pfanne lecker.',
      ],
      author: 'Aus emmikochteinfach.de Spinatknödel schnell & einfach',
      tagE: 'Vegetarisch',
      tagN: '',
      duration: 'über 30 min bis 1 h'
    }, 
]}