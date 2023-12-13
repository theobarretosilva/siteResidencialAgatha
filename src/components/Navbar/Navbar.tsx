import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Navbar.styles'
import { useState } from 'react'
import './Navbar.css'
import { LogoTextoBranco } from '../LogoTextBranco/LogoTextoBranco'

export const Navbar = () => {
    const [active, setMode] = useState(false);
    const toggleMode = () => {
        setMode(!active);
        window.scrollY;
    };

    return(
        <S.Header>
            <LogoTexto />
            <S.ImgIconMenu onClick={toggleMode} src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/7c76764445c72523c6b4eb6a170e55d59d26bead/src/assets/svg/icon_menu.svg' />
            <div className={active ? "menu menuOpen" : "menu menuClose" }>
                <S.DivInicialMenu>
                    <LogoTextoBranco />
                    <S.InnerIconMenu onClick={toggleMode} src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/95bd29bb86dde2f79b85911da61d58cb6bd8e26f/src/assets/svg/icon_menu_branco.svg' />
                </S.DivInicialMenu>
                <S.LinkNavMobile onClick={toggleMode} to={'inicio'}>Início</S.LinkNavMobile>
                <S.LinkNavMobile onClick={toggleMode} to={'espaco'}>Espaço</S.LinkNavMobile>
                <S.LinkNavMobile onClick={toggleMode} to={'servicos'}>Serviços</S.LinkNavMobile>
                <S.LinkNavMobile onClick={toggleMode} to={'atividades'}>Atividades</S.LinkNavMobile>
                <S.LinkNavMobile onClick={toggleMode} to={'vantagens'}>Vantagens</S.LinkNavMobile>
                <S.LinkNavMobile onClick={toggleMode} to={'contato'}>Contato</S.LinkNavMobile>
            </div>
            <S.Navegacao>
                <S.LinkNav to={'inicio'}>Início</S.LinkNav>
                <S.LinkNav to={'espaco'}>Espaço</S.LinkNav>
                <S.LinkNav to={'servicos'}>Serviços</S.LinkNav>
                <S.LinkNav to={'atividades'}>Atividades</S.LinkNav>
                <S.LinkNav to={'vantagens'}>Vantagens</S.LinkNav>
                <S.LinkNav to={'contato'}>Contato</S.LinkNav>
            </S.Navegacao>
        </S.Header>
    )
}