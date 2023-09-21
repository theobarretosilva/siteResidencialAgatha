import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const Header = styled.header`
    width: full;
    height: 5rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
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

export const TituloLogo = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
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