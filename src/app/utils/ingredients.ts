// TODO
export enum Unit {
    g = 'g',
    kg = 'kg',
    ml = 'ml',
    l ='l',
    EL = 'EL',
    TL = 'TL',
    pr = 'Pr',
    stk = 'Stk',
    pck = 'Pck',
    dose = 'Dose',
    flasche = 'Fl',
    glas = 'Glas',
    nb = 'nb',
    bund = 'Bund',
    stängel = 'Stängel',
}

export enum Texture {
    notDefined = 'nicht Definiert',
    fine = 'fein (z.B. Backpulver)',
    grainy = 'körnig (z.B. Salz/Trockenhefe)',
    pulverSpices = 'Gewürz-Pulver (z.B. Currypulver, Paprikapulver)', 
    creamy = 'cremig (z.B. Honig)',
    ground = 'gemahlen (z.B. Pfeffer)', 
    fluid = 'flüssig (z.B. Öl, Sojasauce)',
    dried = 'getrocknet (z.B. getrockneter Oregano)',
    butter = 'Butter',
}

export enum FoodGroup {
    water = 'Wasser', 
    dryProducts = 'Trockenprodukte', 
    meat = 'Fleisch',
    fish = 'Fisch', 
    vegetables = 'Gemüse',
    fruit = 'Obst',
    dairyProducts = 'Milchprodukte', 
    eggs = 'Eier', 
    cans = 'Konservendosen',
    readyMadeDough = 'Fertigteig',
    nutsAndSeeds = 'Nüsse und Kerne',
    bakingProducts = 'Backprodukte', 
    sweets = 'Süßigkeiten',
    saltySnacks = 'salzige Snacks',
    backedGoods = 'Backwaren', 
    juice = 'Saft', 
    // Maultaschen, Ravioli, ...
    spice = 'Gewürz',
}

export interface Ingredient {
    rep : string,
    texture : Texture,
    group : FoodGroup,
    defaultUnit : Unit,
}

export interface FoodItem {
    ingredient : Ingredient,
    quantity : number,
    unit : Unit,
}

function createIngredient(rep : string, tex : Texture, group : FoodGroup, defaultUnit : Unit = Unit.g) : Ingredient {
    return { rep : rep, texture : tex, group : group, defaultUnit : defaultUnit }
}

// BEI EINFÜHRUNG  NEUER KATEGORIEN, AUCH BEI CREATELIST ANPASSEN
export const ingredients = {
    // Wasser
    wasser :        createIngredient('Wasser', Texture.fluid, FoodGroup.water, Unit.ml), 

    // Trockenprodukte
    mehl :          createIngredient('Mehl', Texture.fine, FoodGroup.dryProducts),
    nudeln :        createIngredient('Nudeln', Texture.notDefined, FoodGroup.dryProducts),
    roteLinsen:     createIngredient('Rote Linsen', Texture.notDefined, FoodGroup.dryProducts),
    zucker :        createIngredient('Zucker', Texture.notDefined, FoodGroup.dryProducts),

    // Fleisch
    hackfleisch :   createIngredient('Hackfleisch', Texture.notDefined, FoodGroup.meat),

    // Fisch

    // Gemüse
    chinakohl :     createIngredient('Chinakohl', Texture.notDefined, FoodGroup.vegetables),
    karotten :      createIngredient('Karotte(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    kartoffeln :    createIngredient('Kartoffel(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    tomaten :       createIngredient('Tomate(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    zucchini :      createIngredient('Zucchini(s)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    zwiebeln :      createIngredient('Zwiebel(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),

    // Obst

    // Milchprodukte
    butter :        createIngredient('Butter', Texture.butter, FoodGroup.dairyProducts),
    joghurt :       createIngredient('Joghurt', Texture.notDefined, FoodGroup.dairyProducts),
    sahne :         createIngredient('Sahne', Texture.notDefined, FoodGroup.dairyProducts),
    mozzarella :    createIngredient('Mozzarella', Texture.notDefined, FoodGroup.dairyProducts, Unit.pck),
    geriebenerGratinkäse : createIngredient('Geriebener Gratinkäse', Texture.notDefined, FoodGroup.dairyProducts),

    // Eier
    eier :          createIngredient('Ei(er)', Texture.notDefined, FoodGroup.eggs, Unit.stk),
    eiweiß :        createIngredient('Eiweiß', Texture.notDefined, FoodGroup.eggs, Unit.stk),
    eigelb :        createIngredient('Eigelb', Texture.notDefined, FoodGroup.eggs, Unit.stk),

    // Konserven
    kokosmilch :    createIngredient('Kokosnussmilch', Texture.notDefined, FoodGroup.cans, Unit.dose),
    passierteTomaten : createIngredient('Passierte Tomaten', Texture.notDefined, FoodGroup.cans),

    // Fertigteig
    dumplingteig :  createIngredient('TK-Dumplingteig', Texture.notDefined, FoodGroup.readyMadeDough, Unit.pck),

    // Nüsse und Kerne
    pinienkerne :   createIngredient('Pinienkerne', Texture.notDefined, FoodGroup.nutsAndSeeds),

    // Backprodukte

    // Süßigkeiten

    // salzige Snacks

    // Backwaren

    // Saft

    // ---------------------------------------------------------------------------------------
    // ----------------GEWÜRZE---------------------GEWÜRZE------------------------------------
    // ---------------------------------------------------------------------------------------
    // Backtriebmittel
    trockenhefe :   createIngredient('Trockenhefe', Texture.grainy, FoodGroup.spice),
    backpulver:     createIngredient('Backpulver', Texture.fine, FoodGroup.spice),

    // Gewürze trocken
    curry :         createIngredient('Currypulver', Texture.pulverSpices, FoodGroup.spice),
    garamMasala :   createIngredient('Garam Masala', Texture.pulverSpices, FoodGroup.spice),
    gemüsebrühe :   createIngredient('Gemüsebrühe', Texture.pulverSpices, FoodGroup.spice),
    italienischeKräuter : createIngredient('Italienische Kräuter', Texture.dried, FoodGroup.spice),
    koriander :     createIngredient('Koriander', Texture.pulverSpices, FoodGroup.spice),
    kreuzkümmel :   createIngredient('Kreuzkümmel', Texture.pulverSpices, FoodGroup.spice),
    kurkuma :       createIngredient('Kurkuma', Texture.pulverSpices, FoodGroup.spice),
    muskat :        createIngredient('Muskat', Texture.pulverSpices, FoodGroup.spice),
    paprikaEdelsüß : createIngredient('Paprikapulver edelsüß', Texture.pulverSpices, FoodGroup.spice),
    pfeffer :       createIngredient('Pfeffer', Texture.ground, FoodGroup.spice),
    salz :          createIngredient('Salz', Texture.grainy, FoodGroup.spice),

    // Gewürze frisch
    basilikum :     createIngredient('Basilikum', Texture.notDefined, FoodGroup.spice),
    ingwer :        createIngredient('Ingwer', Texture.notDefined, FoodGroup.spice),
    knoblauchzehen : createIngredient('Knoblauchzehe(n)', Texture.notDefined, FoodGroup.spice, Unit.stk),
    knoblauchknolle : createIngredient('Knoblauchknolle', Texture.notDefined, FoodGroup.spice, Unit.stk),
    minze :         createIngredient('Minze', Texture.notDefined, FoodGroup.spice, Unit.stängel),

    // Gewürze flüssig
    sojasauce :     createIngredient('Sojasauce', Texture.fluid, FoodGroup.spice, Unit.ml),
    zitronensaft :  createIngredient('Zitronensaft', Texture.fluid, FoodGroup.spice, Unit.ml),
    rotwein :       createIngredient('Rotwein', Texture.fluid, FoodGroup.spice, Unit.ml),
    weißwein :       createIngredient('Weißwein', Texture.fluid, FoodGroup.spice, Unit.ml),

    // Öl
    öl :            createIngredient('Öl', Texture.fluid, FoodGroup.spice, Unit.ml),
    olivenöl :      createIngredient('Olivenöl', Texture.fluid, FoodGroup.spice, Unit.ml),
    sesamöl :       createIngredient('Sesamöl', Texture.fluid, FoodGroup.spice, Unit.ml),

    // Essig
    balsamicoDunkel :  createIngredient('Aceto Balsamico Essig', Texture.fluid, FoodGroup.spice, Unit.ml),
}

export function item(ing : Ingredient, quantity : number, unit : Unit | undefined = undefined) : FoodItem {
    if (!unit) {
        return { ingredient: ing, quantity : quantity, unit: ing.defaultUnit }
    } else {
        return { ingredient: ing, quantity : quantity, unit: unit }
    }
}

export function getAllIngredients(group : FoodGroup | undefined = undefined, inclueSpices = false) : Ingredient[] {
    const all = Object.values(ingredients).filter( ing => ing.group !== FoodGroup.spice || inclueSpices || group === FoodGroup.spice )

    if (group) {
        return all.filter( ing => ing.group === group )
    } else {
        return all
    }
}


export function changeUnit(item : FoodItem, newUnit : Unit) : FoodItem {
    throw "not implemented"
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