import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

export const Header = styled.header`
    width: 100vw;
    height: 11.5vh;
    background: rgba(255, 255, 255, 0.77);
    backdrop-filter: blur(5px);
    padding-left: 4.5vw;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 21vw;

    @media (max-width: 450px) {
        padding-left: 4vw;
        height: 9vh;
        gap: 15vw;
        width: 100vw;
    }
`

export const Navegacao = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 450px) {
        display: none;
    }
`

export const LinkNav = styled(NavLink)`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.23rem;
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
    &.active{
        text-decoration: underline;
    }
`

export const ImgIconMenu = styled.img`
    display: grid;
    width: 9vw;
    height: 18vh;

    @media (min-width: 450px) {
        display: none;
    }
`

export const DivInicialMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16vw;
`

export const InnerIconMenu = styled.img`
    display: grid;
    width: 9vw;
    height: 9vh;
    margin-right: 6.5vw;

    @media (min-width: 450px) {
        display: none;
    }
`