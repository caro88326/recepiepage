import { FoodGroup, FoodItem } from "../utils/ingredients";

export interface Ingredient {
    quantitie: number,
    unit: string,
    ingredient: { rep: string; texture: string; }
}

export interface RecepieInterface {
    id: number,
    name: string,
    picture: string,
    time: number,
    person: number,
    ingredients: FoodItem[]
    instruction: string [],
    author: string
    tagE: string,
    tagN: string,
    duration: string,
}