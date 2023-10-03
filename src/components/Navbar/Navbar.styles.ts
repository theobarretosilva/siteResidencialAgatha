import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

export const Header = styled.header`
    width: 100vw;
    height: 11.5vh;
    background: rgba(255, 255, 255, 0.77);
    backdrop-filter: blur(5px);
    padding-left: 4rem;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 19.23rem;
`

export const Navegacao = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2rem;
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