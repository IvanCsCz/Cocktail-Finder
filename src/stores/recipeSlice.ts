import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilters } from "../types"

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks
  recipe: Recipe
  modal: boolean,
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilters: SearchFilters) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
  closeModal: () => void
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks:{
    drinks: []
  },
  recipe:{} as Recipe,
  modal: false,
  fetchCategories: async() => {
    const categories = await getCategories()
    set({
      categories
    })
  },
  searchRecipes: async(filters) => {
    const drinks =  await getRecipes(filters)
    set({
      drinks
    })
  },
  selectRecipe: async(id) => {
    const recipe = await getRecipeById(id)
    set({
      recipe,
      modal: true
    })
  },
  closeModal: () => {
    set({
      modal: false,
      recipe: {} as Recipe
    })
  }
})