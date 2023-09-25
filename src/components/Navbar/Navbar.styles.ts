import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const Header = styled.header`
    width: 100vw;
    height: 4.5rem;
    background: rgba(255, 255, 255, 0.77);
    backdrop-filter: blur(5px);
    padding-left: 3rem;
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20.5rem;
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
`

export const ImgLogo = styled.img`
    height: 4.3rem;
    width: 4.3rem;
`

export const DivTituloLogo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
`

export const TituloLogo = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 1.42rem;
    font-style: normal;
    font-weight: 600;
`

export const Navegacao = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`

export const LinkNav = styled(Link)`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.23rem;
    font-style: normal;
    font-weight: 500;
`