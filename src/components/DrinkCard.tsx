import { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

function DrinkCard({drink}:DrinkCardProps) {
  return (
    <div className="w-80 h-96 border flex flex-col shadow-lg rounded-lg">
        <div className="overflow-hidden"> 
          <img 
            src={drink.strDrinkThumb} 
            alt={`Image of ${drink.strDrink}`} 
            className="hover:scale-125 transition-transform hover:rotate-2 rounded-t-lg"
          />
        </div>

        <div className="p-5">
          <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
          <button
            type="button"
            className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-2 font-bold text-white text-lg rounded-lg"
          >View Recipe</button>
        </div>
    </div>
  )
}

export default DrinkCard