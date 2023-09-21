import { Routes, Route } from "react-router-dom"
import { Inicio } from "../pages/Inicio/Inicio"
import { GeralLayout } from "../layouts/GeralLayout/GeralLayout"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<GeralLayout />}>
                <Route path="inicio" element={<Inicio />} />
            </Route>
        </Routes>
    )
}