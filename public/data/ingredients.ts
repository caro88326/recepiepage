import { Ingredient } from "../../src/app/interfaces/recepie-interface"; 

function sc (x :string, y: string) {
    return {rep: x ,  texture : y}
}

export class ISU {

    static ingredients =  {
        // Wasser 
        wasser :        sc('Wasser', 'fluid'),

        // Trockenprodukte
        mehl :          sc('Mehl','fine'),
        nudeln :        sc('Nudeln', ''),
        roteLinsen :    sc('Rote Linsen', ''),
        zucker :        sc('Zucker', 'grainy'),

        // Fleisch
        hackfleisch :   sc('Hackfleisch', ''),

        // Gemüse
        chinakohl :     sc('Chinakohl',  ''),
        karotten :      sc('Karotte(n)', ''),
        tomaten :       sc('Tomate(n)', ''),
        zucchini :      sc('Zucchini(s)', ''),
        zwiebeln :      sc('Zwiebel(n)', ''),

        // Fertigteig
        dumplingteig :  sc('TK-Dumplingteig', ''),

        // Dosenprodukte 
        kokosmilch :    sc('Kokosnussmilch', ''),
        passierteTomaten : sc('passierte Tomaten', ''),

        // Milchprodukte / Eier
        butter :        sc('Butter', 'BUTTER'),
        joghurt :       sc('Joghurt', ''),
        sahne :         sc('Sahne', ''),
        mozarella :     sc('Mozarella', ''),
        eier :          sc('Ei(er)', ''),
        geriebenerGratinkäse : sc('geriebener Gratinkäse', ''),

        // Nüsse und Kerne
        pinienkerne :   sc('Pinienkerne', ''),
    };

    static getIng(x : string) {
        let keys = Object.keys(this.ingredients)
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == x) {
                return Object.values(this.ingredients)[i]
            }
        }
        throw "wrong key"
    }

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
        trockenhefe :       sc('Trockenhefe', 'grainy'),
        backpulver :        sc('Backpulver', 'fine'),

        // Gewürze trocken
        curry :             sc('Currypulver', 'pulverSpices'), 
        garamMasala :       sc('Garam Masala', 'pulverSpices'), 
        gemüsebrühe :       sc('Gemüsebrühe', 'pulverSpices'), 
        italienischeKräuter : sc('italienische Kräuter', 'dried'), 
        koriander :         sc('Koriander', 'pulverSpices'),
        kreuzkümmel :       sc('Kreuzkümmel', 'pulverSpices'),
        kurkuma :           sc('Kurkuma', 'pulverSpices'),
        muskat:             sc('Muskat', 'pulverSpices'),
        paprikaEdelsüß :    sc('Paprikapulver edelsüß', 'pulverSpices'),
        pfeffer :           sc('Pfeffer', 'ground'),
        salz :              sc('Salz', 'grainy'),

        // Gewürze frisch
        basilikum :         sc('Basilikum', ''),
        ingwer :            sc('Ingwer', ''),
        knoblauchzehen :    sc('Knoblauchzehe(n)', ''),
        knoblauchknolle :   sc('Knoblauchknolle', ''),
        minze :             sc('Minze', ''),

        // Gewürze flüssig
        sojasauce :         sc('Sojasauce', 'fluid'),    
        zitronensaft :      sc('Zitronensaft', 'fluid'),

        // Öl
        öl :                sc('Öl', 'fluid'),
        olivenöl :          sc('Olivenöl', 'fluid'),
        sesamöl :           sc('Sesamöl', 'fluid'),

        // Essig
        balsamicoDunkel :   sc('Aceto Balsamico Essig', 'fluid'),
    }

    static getSpices(x : string) {
        let keys = Object.keys(this.spices)
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == x) {
                return Object.values(this.spices)[i]
            }
        }
        throw "wrong key"
    }


    static units = {
        g:     {unit: 'g'}, 
        kg:     {unit: 'kg'}, 
        ml:     {unit: 'ml'}, 
        l:      {unit: 'l'}, 
        EL:     {unit: 'EL'},
        TL:     {unit: 'TL'},
        Pr:     {unit: 'Pr'},
        stk:    {unit: 'Stk.'},
        pck:    {unit: 'Pck.'},
        dose:   {unit: 'Dose'},
        flasche: {unit: 'Fl'},
        glas:   {unit: 'Glas'},
        nb:     {unit: 'nb'},
        bund:   {unit: 'Bund'},
        stängel: {unit: 'Stängel'},
    }

    static getUnit(x : string) :string {
        let keys = Object.keys(this.units)
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == x) {
                return Object.values(this.units)[i].unit
            }
        }
        throw "wrong key"
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

