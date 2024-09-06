import { Ingredient } from "./ingredients-interface"

export interface RecepieInterface {
    id: number,
    name: string,
    picture: string,
    time: number,
    person: number,
    ingredients: {
        food: Ingredient[]
        spice: Ingredient[]
    },
    instruction: string [],
    author: string
    tagE: string,
    tagN: string,
}