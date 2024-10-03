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

export interface NewFiltersInterfaceTags {
  groups : string, 
  value : string, 
  selected : boolean
  } 

export interface NewFiltersInterfaceIngs {
  groups : string, 
  value : string, 
  selected : 'include' | 'neutral' | 'exclude'  } 