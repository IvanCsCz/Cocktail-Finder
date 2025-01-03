import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))
const IndexPage = lazy(() => import("./pages/IndexPage"))

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={
            <Suspense fallback="Loading...">
              <IndexPage />
            </Suspense>
          } />
          <Route path="/favorites" element={
            <Suspense fallback="Loading...">
              <FavoritesPage />
            </Suspense>
          } />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter