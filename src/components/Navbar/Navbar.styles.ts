import { styled } from "styled-components";

export const Header = styled.header`
    width: full;
    height: 5rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* padding-left: 2rem;
    padding-right: 2rem; */
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