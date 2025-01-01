import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, SearchFilters } from "../types"

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilters: SearchFilters) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks:{
    drinks: []
  },
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
    console.log(recipe)
  }
})