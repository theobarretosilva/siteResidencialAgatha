import styled from "styled-components"

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
`

export const ImgLogo = styled.img`
    height: 10vh;
    width: 5vw;

    @media (max-width: 450px) {
        width: 14vw;
        height: 9vh;
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

    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`