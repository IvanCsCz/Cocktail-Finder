import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

function FavoritesPage() {
  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length, [favorites])
  
  return (
    <>
      <h1 className="text-6xl font-extrabold"></h1>

      {hasFavorites ? (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3  my-10 gap-10">
          {favorites.map(drink => (
            <DrinkCard 
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ): (
        <p className="my-10 text-center text-2xl">Favorites will be shown here</p>
      )}
      
    </>
  )
}

export default FavoritesPage