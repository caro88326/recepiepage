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
    softdrinks = 'Softdrinks', 
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
    wasserStill :        createIngredient('Wasser still', Texture.fluid, FoodGroup.water, Unit.ml), 

    // Trockenprodukte
    lasangplatten : createIngredient('Lasangeplatte(n)', Texture.notDefined, FoodGroup.dryProducts),
    mehl :          createIngredient('Mehl', Texture.fine, FoodGroup.dryProducts),
    nudeln :        createIngredient('Nudeln', Texture.notDefined, FoodGroup.dryProducts),
    paniermehl :    createIngredient('Paniermehl', Texture.notDefined, FoodGroup.dryProducts),
    roteLinsen:     createIngredient('Rote Linsen', Texture.notDefined, FoodGroup.dryProducts),
    weizenmehl405 : createIngredient('Weizenmehl Typ 405', Texture.notDefined, FoodGroup.dryProducts),
    weizenmehl550 : createIngredient('Weizenmehl Typ 550', Texture.notDefined, FoodGroup.dryProducts),
    weizenmehl1050 : createIngredient('Weizenmehl Typ 1050', Texture.notDefined, FoodGroup.dryProducts),
    zucker :        createIngredient('Zucker', Texture.notDefined, FoodGroup.dryProducts),

    // Fleisch
    gulaschfleisch : createIngredient('Gulaschfleisch', Texture.notDefined, FoodGroup.meat),
    hackfleisch :   createIngredient('Hackfleisch', Texture.notDefined, FoodGroup.meat),
    hänchenbrust :  createIngredient('Hähnchenbrust', Texture.notDefined, FoodGroup.meat),
    ribeye :        createIngredient('Ribeyesteak', Texture.notDefined, FoodGroup.meat),

    // Fisch
    backfisch :     createIngredient('Backfisch', Texture.notDefined, FoodGroup.fish, Unit.stk),
    lachs :         createIngredient('Lachs', Texture.notDefined, FoodGroup.fish, Unit.stk),

    // Gemüse
    blumenkohl :    createIngredient('Blumenkohl(e)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    brokoli :       createIngredient('Brokolie(s)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    chinakohl :     createIngredient('Chinakohl', Texture.notDefined, FoodGroup.vegetables),
    gurke :         createIngredient('Gurke(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    karotten :      createIngredient('Karotte(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    kartoffeln :    createIngredient('Kartoffel(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    knollensellerie : createIngredient('Knollenselerie', Texture.notDefined, FoodGroup.vegetables),
    paprika :       createIngredient('Paprika(s)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    salat :         createIngredient('Salat', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    spinatBlattTK : createIngredient('TK-Blattspinat', Texture.notDefined, FoodGroup.vegetables),
    tomaten :       createIngredient('Tomate(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    zucchini :      createIngredient('Zucchini(s)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),
    zwiebeln :      createIngredient('Zwiebel(n)', Texture.notDefined, FoodGroup.vegetables, Unit.stk),

    // Obst
    apfel :         createIngredient('Apfel', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    banane :        createIngredient('Banane(n)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    blaubeere :     createIngredient('Blaubeere(n)', Texture.notDefined, FoodGroup.fruit),
    erdbeere :      createIngredient('Erdbeere(n)', Texture.notDefined, FoodGroup.fruit),
    himbeere :      createIngredient('Himbeere(n)', Texture.notDefined, FoodGroup.fruit),
    honigmelone :   createIngredient('Honigmelone(n)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    johannisbeere : createIngredient('Johannisbeere(n)', Texture.notDefined, FoodGroup.fruit),
    mango :         createIngredient('Mango(s)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    wassermelone :  createIngredient('Wassermelone(n)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    nektarine :     createIngredient('Nektarine(n)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    orange :        createIngredient('Orange(n)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    pfirsich :      createIngredient('Pfirsich(e)', Texture.notDefined, FoodGroup.fruit, Unit.stk),
    trauben :       createIngredient('Trauben', Texture.notDefined, FoodGroup.fruit),

    // Milchprodukte
    bergkäse :      createIngredient('Bergkäse', Texture.notDefined, FoodGroup.dairyProducts),
    butter :        createIngredient('Butter', Texture.butter, FoodGroup.dairyProducts),
    emmentaler :     createIngredient('Emmentaler', Texture.notDefined, FoodGroup.dairyProducts),
    feta :          createIngredient('Feta', Texture.notDefined, FoodGroup.dairyProducts),
    geriebenerGratinkäse : createIngredient('Geriebener Gratinkäse', Texture.notDefined, FoodGroup.dairyProducts),
    gouda :         createIngredient('Gouda', Texture.notDefined, FoodGroup.dairyProducts),
    hirtenkäse :    createIngredient('Hirtenkäse', Texture.notDefined, FoodGroup.dairyProducts),
    joghurt :       createIngredient('Joghurt', Texture.notDefined, FoodGroup.dairyProducts),
    milch :         createIngredient('Milch', Texture.fluid, FoodGroup.dairyProducts, Unit.ml),
    mozzarella :    createIngredient('Mozzarella', Texture.notDefined, FoodGroup.dairyProducts, Unit.pck),
    parmesan :      createIngredient('Parmesan', Texture.notDefined, FoodGroup.dairyProducts),
    pudding :       createIngredient('Pudding', Texture.notDefined, FoodGroup.dairyProducts),
    sahne :         createIngredient('Sahne', Texture.notDefined, FoodGroup.dairyProducts),

    // Eier
    eier :          createIngredient('Ei(er)', Texture.notDefined, FoodGroup.eggs, Unit.stk),
    eiweiß :        createIngredient('Eiweiß', Texture.notDefined, FoodGroup.eggs, Unit.stk),
    eigelb :        createIngredient('Eigelb', Texture.notDefined, FoodGroup.eggs, Unit.stk),

    // Konserven
    kokosmilch :    createIngredient('Kokosnussmilch', Texture.notDefined, FoodGroup.cans, Unit.dose),
    mais :          createIngredient('Mais', Texture.notDefined, FoodGroup.cans),
    passierteTomaten : createIngredient('Passierte Tomaten', Texture.notDefined, FoodGroup.cans),

    // Fertigteig
    baklavateig :   createIngredient('Baklavateig', Texture.notDefined, FoodGroup.readyMadeDough, Unit.pck),
    dumplingteig :  createIngredient('TK-Dumplingteig', Texture.notDefined, FoodGroup.readyMadeDough, Unit.pck),
    quicheteig : createIngredient('Quicheteig', Texture.notDefined, FoodGroup.readyMadeDough),

    // Nüsse und Kerne
    pinienkerne :   createIngredient('Pinienkerne', Texture.notDefined, FoodGroup.nutsAndSeeds),
    pistazien :     createIngredient('Pistazien', Texture.notDefined, FoodGroup.nutsAndSeeds),
    pistazienGehackt : createIngredient('Gehackte Pistazien', Texture.notDefined, FoodGroup.nutsAndSeeds),
    walnüsse :      createIngredient('Walnüsse', Texture.notDefined, FoodGroup.nutsAndSeeds),

    // Backprodukte
    braunerZucker : createIngredient('Brauner Zucker', Texture.grainy, FoodGroup.bakingProducts),
    konvitüre :     createIngredient('Konvitüre', Texture.notDefined, FoodGroup.bakingProducts),
    puddingpulver : createIngredient('Puddingpulver', Texture.fine, FoodGroup.bakingProducts),
    puderzucker :   createIngredient('Puderzucker', Texture.fine, FoodGroup.bakingProducts),
    
    // Süßigkeiten

    // salzige Snacks

    // Backwaren
    brot :          createIngredient('Brot', Texture.fluid, FoodGroup.juice),
    brötchen :      createIngredient('Brötchen', Texture.fluid, FoodGroup.juice),

    // Saft
    apfelsaft :     createIngredient('Apfelsaft', Texture.fluid, FoodGroup.juice),
    bananensaft :   createIngredient('Bananensaft', Texture.fluid, FoodGroup.juice),
    johannisbeersaft : createIngredient('Johannisbeersaft', Texture.fluid, FoodGroup.juice),
    pfirsichsaft :  createIngredient('Pfirsichsaft', Texture.fluid, FoodGroup.juice),
    traubensaft :   createIngredient('Traubensaft', Texture.fluid, FoodGroup.juice),      

    // ---------------------------------------------------------------------------------------
    // ----------------GEWÜRZE---------------------GEWÜRZE------------------------------------
    // ---------------------------------------------------------------------------------------
    // Backtriebmittel
    trockenhefe :   createIngredient('Trockenhefe', Texture.grainy, FoodGroup.spice),
    backpulver:     createIngredient('Backpulver', Texture.fine, FoodGroup.spice),

    // Gewürze trocken
    basilikumGetrocknet : createIngredient('Basilikum getrocknet', Texture.dried, FoodGroup.spice),
    chilli :        createIngredient('Chilli', Texture.dried, FoodGroup.spice),
    curry :         createIngredient('Currypulver', Texture.pulverSpices, FoodGroup.spice),
    garamMasala :   createIngredient('Garam Masala', Texture.pulverSpices, FoodGroup.spice),
    gemüsebrühe :   createIngredient('Gemüsebrühe', Texture.pulverSpices, FoodGroup.spice),
    hühnerbrühe :   createIngredient('Hühnerbrühe', Texture.pulverSpices, FoodGroup.spice),
    italienischeKräuter : createIngredient('Italienische Kräuter', Texture.dried, FoodGroup.spice),
    koriander :     createIngredient('Koriander', Texture.pulverSpices, FoodGroup.spice),
    kräuterDerProvance : createIngredient('Kräuter der Provance', Texture.dried, FoodGroup.spice),
    kreuzkümmel :   createIngredient('Kreuzkümmel', Texture.pulverSpices, FoodGroup.spice),
    kümmel :        createIngredient('Kümmel', Texture.notDefined, FoodGroup.spice),
    kurkuma :       createIngredient('Kurkuma', Texture.pulverSpices, FoodGroup.spice),
    lorbeerblätter : createIngredient('Lorbeerblätter', Texture.notDefined, FoodGroup.spice, Unit.stk),
    majoran :       createIngredient('Majoran', Texture.dried, FoodGroup.spice),
    muskat :        createIngredient('Muskat', Texture.pulverSpices, FoodGroup.spice),
    oregano :       createIngredient('Oregano', Texture.dried, FoodGroup.spice),
    paprikaEdelsüß : createIngredient('Paprikapulver edelsüß', Texture.pulverSpices, FoodGroup.spice),
    paprikaRosenscharf : createIngredient('Paprikapulver rosenscharf', Texture.pulverSpices, FoodGroup.spice),
    pfeffer :       createIngredient('Pfeffer', Texture.ground, FoodGroup.spice),
    rinderbrühe :   createIngredient('Rinderbrühe', Texture.pulverSpices, FoodGroup.spice),
    rosmarin :      createIngredient('Rosmarin', Texture.dried, FoodGroup.spice),
    salz :          createIngredient('Salz', Texture.grainy, FoodGroup.spice),
    thymian :       createIngredient('Thymian', Texture.dried, FoodGroup.spice),
    zimt :          createIngredient('Zimt', Texture.pulverSpices, FoodGroup.spice),

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
    apfelessig :       createIngredient('Apfelessig', Texture.fluid, FoodGroup.spice, Unit.ml),
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