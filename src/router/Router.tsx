import { Routes, Route } from "react-router-dom"
import { Inicio } from "../pages/Inicio/Inicio"
import { GeralLayout } from "../layouts/GeralLayout/GeralLayout"
import { Espaco } from "../pages/Espaco/Espaco"
import { Servicos } from "../pages/Servicos/Servicos"
import { Atividades } from "../pages/Atividades/Atividades"
import { Vantagens } from "../pages/Vantagens/Vantagens"
import { Contato } from "../pages/Contato/Contato"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<GeralLayout />}>
                <Route index element={<Inicio />} />
                <Route path="inicio" element={<Inicio />} />
                <Route path="espaco" element={<Espaco />} />
                <Route path="servicos" element={<Servicos />} />
                <Route path="atividades" element={<Atividades />} />
                <Route path="vantagens" element={<Vantagens />} />
                <Route path="contato" element={<Contato />} />
            </Route>
        </Routes>
    )
}