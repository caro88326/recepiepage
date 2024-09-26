import { FoodItem } from "../utils/ingredients";

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