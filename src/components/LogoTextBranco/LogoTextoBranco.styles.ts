import styled from "styled-components"

export const DivLogo = styled.div`
    display: none;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.6rem;
    }
`

export const ImgLogo = styled.img`
    display: none;

    @media (max-width: 450px) {
        width: 14vw;
        height: 9vh;
        display: grid;
    }
`

// export const DivTituloLogo = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 0.4rem;
// `

export const TituloLogo = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 1.42rem;
    font-style: normal;
    font-weight: 500;
    margin: 0;
    color: white;
    display: none;

    @media (max-width: 450px) {
        font-size: 1.2rem;
        display: grid;
    }
`