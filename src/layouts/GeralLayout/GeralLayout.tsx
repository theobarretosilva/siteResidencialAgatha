import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { Rodape } from '../../components/Rodape/Rodape'

export function GeralLayout() {
    return(
        <>
            <Navbar />
            <Outlet />
            <Rodape />
        </>
    )
}