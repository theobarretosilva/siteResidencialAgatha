import styled from "styled-components";

export const DivImgInicial = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url('https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_pagina_atividades.png?raw=true');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    margin-top: 11.5vh;

    @media (max-width: 450px) {
        height: 25vh;
        margin-top: 9vh;
    }
`

export const TituloDivImgInicial = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;

    @media (max-width: 450px) {
        font-size: 2.5rem;
        margin-top: 3vh;
    }
`

export const TextoInicial = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 6vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 1.2rem;
        margin-top: 4vh;
    }
`

// export const SectionAtividade = styled.section`
//     border-radius: 1.25rem;
//     background: #FFF;
//     width: 97%;
//     height: 44vh;
//     display: flex;
//     flex-direction: row;
//     padding: 3vh 1.5vw 3vh 1.5vw;
// `

export const ImgAtividade = styled.img`
    width: 38vw;
    border-radius: 0.62rem;
    margin: 0;
    height: 46vh;

    @media (max-width: 450px) {
        width: 100%;
        border-radius: 0.62rem;
        margin: 0;
        height: 25vh;
    }
`

export const DivDescricaoAtividade = styled.div`
    margin-left: 10vw;

    @media (max-width: 450px) {
        margin-left: 0;
    }
`

export const TituloAtividade = styled.h1`
    color: black;
    font-family: "Inter", sans-serif;
    font-size: 1.9rem;
    font-weight: 600;
    text-align: start;

    @media (max-width: 450px) {
        text-align: center;
        margin-bottom: 0;
        margin-top: 1.5vh;
    }
`

export const DescricaoAtividade = styled.p`
    color: black;
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    text-align: start;
    max-width: 35vw;

    @media (max-width: 450px) {
        text-align: center;
        max-width: 100%;
        font-size: 1.3rem;
        margin-top: 1vh;
    }
`

export const SectionCor = styled.section`
    border-radius: 0.62rem;
    padding: 0;
    background-color: #c4dcff;
    width: 100%;
    display: flex;
`

export const SectionAtividade = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const PointSeparador = styled.img`
    height: 12vh;
    width: 4vw;

    @media (max-width: 450px) {
        display: none;
    }
`

export const SeparadorLinha = styled.div`
    height: 0.1vh;
    width: 100%;
    background-color: black;
    margin-top: 5vh;
    margin-bottom: 5vh;
`