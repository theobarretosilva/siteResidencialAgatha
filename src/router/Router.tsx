import { Routes, Route } from "react-router-dom"
import { Inicio } from "../pages/Inicio/Inicio"
import { GeralLayout } from "../layouts/GeralLayout/GeralLayout"
import { Espaco } from "../pages/Espaco/Espaco"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<GeralLayout />}>
                <Route index element={<Inicio />} />
                <Route path="inicio" element={<Inicio />} />
                <Route path="espaco" element={<Espaco />} />
            </Route>
        </Routes>
    )
}