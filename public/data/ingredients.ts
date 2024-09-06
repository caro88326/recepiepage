import { Ingredient } from "../../src/app/interfaces/ingredients-interface"; 

export class ISU {

    static ingredients =  {
        // Trockenprodukte
        mehl : {    rep : 'Mehl',    texture : 'fine'},
        nudeln : {rep: 'Nudeln'},
        roteLinsen : {rep : 'Rote Linsen'},
        zucker : {
            rep : 'Zucker',
            texture : 'grainy',
        },

        // Fleisch
        hackfleisch : {rep : 'Hackfleisch'},

        // Gemüse
        chinakohl : {rep : 'Chinakohl'},
        karotten : {rep: 'Karotte(n)'},
        tomaten : {rep : 'Tomate(n)'},
        zucchini : {rep : 'Zucchini(s)'},
        zwiebeln : {rep : 'Zwiebel(n)'},

        // Fertigteig
        dumplingteig : {rep : 'TK-Dumplingteig'},

        // Dosenprodukte 
        kokosmilch : {rep: 'Kokosnussmilch'},
        passierteTomaten : {rep : 'passierte Tomaten'},

        // Milchprodukte
        butter : {
            rep : 'Butter',
            texture : 'BUTTER'
        },
        joghurt : {rep : 'Joghurt'},
        sahne : {rep : 'Sahne'},
        mozarella : {rep : 'Mozarella'},

        // Nüsse und Kerne
        pinienkerne : {rep : 'Pinienkerne'}
    };

// fine: 1TL = 3g, 1El = 10g
// grainy: 1Tl = 5g, 1EL = 10 g 
// pulverSpices: 1TL = 4g, 1EL = 8g
// creamy: 1TL = 6g, 1EL = 15g (z.B. Honig)
// ground: 1TL = 6g, 1EL = 20g (z.B. Pfeffer)
// fluid: 1TL = 5ml, 1EL = 15ml
// dried: 1 TL = 2g, 1EL = 6g
// BUTTER: 1TL = 5g, 1EL = 10g

    static spices = {
        // Triebbackmittel
        trockenhefe : {
            rep : 'Trockenhefe',
            texture: 'grainy'
        },
        backpulver : {
            rep : 'Backpulver',
            texture : 'fine'
        }, 

        // Gewürze trocken
        curry : {
            rep : 'Currypulver',
            texture : 'pulverSpices'
        },
        garamMasala : {
            rep : 'Garam Masala',
            texture : 'pulverSpices'
        },
        gemüsebrühe : {
            rep : 'Gemüsebrühe',
            texture : 'pulverSpices'
        },
        italienischeKräuter : {
            rep : 'italienische Kräuter',
            texture : 'dried'
        },
        koriander : {
            rep : 'Koriander', 
            texture : 'pulverSpices'
        }, 
        kreuzkümmel : {
            rep: 'Kreuzkümmel',
            texture: 'pulverSpices',
        },
        kurkuma : {
            rep : 'Kurkuma',
            texture : 'pulverSpices'
        }, 
        paprikaEdelsüß : {
            rep : 'Paprikapulver edelsüß', 
            texture : 'pulverSpices',
        },
        pfeffer : {
            rep: 'Pfeffer',
            texture: 'ground'
        },
        salz : {
            rep : 'Salz',
            texture : 'grainy',
        },

        // Gewürze frisch
        basilikum : {rep : 'Basilikum'},
        ingwer : {rep : 'Ingwer'}, 
        knoblauchzehen : {rep : 'Knoblauchzehen'}, 
        knoblauchknolle : {rep : 'Knoblauchknolle'},
        minze : {rep : 'Minze'},


        // Gewürze flüssig
        sojasauce : {
            rep: 'Sojasauce',
            texture: 'fluid'
        },        
        zitronensaft : {
            rep : 'Zitronensaft',
            texture: 'fluid'
        },

        // Öl
        öl : {
            rep : 'Öl',
            texture : 'fluid'
        },
        olivenöl : {
            rep : 'Olivenöl',
            texture : 'fluid'
        },
        sesamöl : {
            rep : 'Sesamöl', 
            texture : 'fluid'
        },

        // Essig
        balsamicoDunkel : {
            rep : 'Aceto Balsamico Essig',
            texture : 'fluid'
        }
    }

    static units = {
        g : {unit: 'g'}, 
        kg: {unit: 'kg'}, 
        ml: {unit: 'ml'}, 
        l: {unit: 'l'}, 
        EL: {unit: 'EL'},
        TL: {unit: 'TL'},
        Pr: {unit: 'Pr'},
        stk: {unit: 'Stk.'},
        pck: {unit: 'Pck.'},
        dose: {unit: 'Dose'},
        flasche: {unit: 'Fl'},
        glas: {unit: 'Glas'},
        nb: {unit: 'nb'},
        bund: {unit: 'Bund'},
        stängel: {unit: 'Stängel'}
    }


    // static toSI(ing : Ingredient) : Ingredient {

        // if (unit === 'kg' && quantity <= 1) {
        //     return {quantity: quantity*1000, unit: 'g'}
        // }
        // else if (unit === 'ml' && quantity >= 1000) {
        //     return {quantity: quantity/1000, unit:'l'}
        // }



        // return {quantity: 0, unit: ''};
    // }
}

