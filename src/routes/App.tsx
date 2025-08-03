import { Route, Routes } from "react-router"
import Home from "../components/Home"
import Pokedex from "../components/Pokedex"
import Details from "../components/Details"
import ProtectedRoute from "./ProtectedRoute"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<ProtectedRoute />}>
        <Route index element={<Pokedex />} />
        <Route path=":name" element={<Details />} />
        </Route>
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
  )
}

export default App
