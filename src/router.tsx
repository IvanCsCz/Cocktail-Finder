import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import FavoritesPage from "./pages/FavoritesPage"
import IndexPage from "./pages/IndexPage"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter