import { Route, Routes } from "react-router-dom"
import { CardList, Cart } from "../pages"


export const AppRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<CardList />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </main>
  )
}
    