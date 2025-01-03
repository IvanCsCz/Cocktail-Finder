import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export type FavoritesSliceType = {
  favorites: Recipe[]
  handleClickAddFavorite: (recipe: Recipe) => void
  favoriteExists: (id: Recipe['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [],
  handleClickAddFavorite: (recipe) => {
    if(get().favoriteExists(recipe.idDrink)){
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: 'It was removed from favorites',
        error: false
      })

      // set({
      //   favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      // })
    } else {      
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: 'It was added to favorites',
        error: false
      })
    }

    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoriteExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites){
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
  }
})
