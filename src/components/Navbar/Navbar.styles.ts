import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

export const Header = styled.header`
    width: 100vw;
    height: 14vh;
    background-color: #F8F4DE;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 14vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 450px) {
        height: 11vh;
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
    font-size: 1.4vw;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;

    &.active{
        text-decoration: underline;
        color: #825810;
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
    gap: 17vw;
    padding-left: 4vw;
    margin-bottom: 1vh;
    background-color: #F8F4DE;

    @media (min-width: 450px) {
        display: none;
    }
`

export const InnerIconMenu = styled.img`
    display: grid;
    width: 9vw;
    height: 9vh;

    @media (min-width: 450px) {
        display: none;
    }
`

export const LinkNavMobile = styled(NavLink)`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 6vw;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1.6vh;
    margin-left: 5vw;
    text-decoration: none;

    &.active{
        text-decoration: underline;
    }

    @media (min-width: 450px) {
        display: none;
    }
`

export const DivMenuMobile = styled.div`
    display: flex;
    gap: 10vw;
`