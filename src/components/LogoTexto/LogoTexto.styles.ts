import styled from "styled-components"

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
`

export const ImgLogo = styled.img`
    width: 6vw;
    height: 8vh;

    @media (max-width: 450px) {
        width: 14vw;
        height: 7vh;
        object-fit: cover;
    }
`

export const TituloLogo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 400;
    margin: 0;

    @media (max-width: 450px) {
        font-size: 5vw;
    }
`

export const ImgTxtAgatha = styled.img`
    width: 8.5vw;

    @media (max-width: 450px) {
        width: 25vw;
    }
`