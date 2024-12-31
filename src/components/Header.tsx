import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

function Header() {
  const {pathname} = useLocation()
  const isHome = useMemo(() => pathname === '/' , [pathname])
  
  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-8">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotype" />
          </div>

          <nav className="flex gap-4">
            <NavLink 
              to="/"
              className={({isActive}) =>
                 isActive ? 'text-orange-400 uppercase font-bold' : 'text-white uppercase font-bold'
            }>Home</NavLink>

            <NavLink 
              to="/favorites"
              className={({isActive}) =>
                isActive ? 'text-orange-400 uppercase font-bold' : 'text-white uppercase font-bold'
           }>Favorites</NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-24 p-6 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label 
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >Name or Ingredients</label>
              <input 
                id="ingredient"
                name="ingredient"
                type="text" 
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Name or Ingredient. E.g., Vodka, Tequila, Coffee."
              />
            </div>

            <div className="space-y-4">
              <label 
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >Category</label>
              <select 
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Select --</option>
                {categories.drinks.map(category => (
                  <option 
                    key={category.strCategory} 
                    value={category.strCategory}>
                      {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input 
              type="submit" 
              value="Find Cocktail" 
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold w-full p-2 rounded-lg"
            />
          </form>
        )}
      </div>
    </header>
  )
}

export default Header