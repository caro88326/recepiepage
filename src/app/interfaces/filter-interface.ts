export interface FilterInterface {
  duration : string[]
  tagE : string[],
  tagN : string[], 
  includedIngredients : string[],
  excludedIngredients : string[],
}

export interface ListboxFiltersInterface { //F
  label : string,
  options : string[],
  selected : string []
} 