import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { Rodape } from '../../components/Rodape/Rodape'
import { Toaster } from 'react-hot-toast';

export function GeralLayout() {
    return(
        <>
            <Navbar />
            <Outlet />
            <Rodape />
            <Toaster />
        </>
    )
}