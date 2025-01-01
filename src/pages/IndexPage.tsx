import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

function IndexPage() {
  const drinks = useAppStore(state => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])
  
  return (
    <>
      <h1 className="text-6xl font-extrabold text-center">Recipes</h1>

      {
        hasDrinks ? (
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3  my-10 gap-10">
            {drinks.drinks.map( (drink) => (
              <DrinkCard 
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>
        ) : (
          <p>There are not drinks</p>
        )
      }
    </>
  )
}

export default IndexPage