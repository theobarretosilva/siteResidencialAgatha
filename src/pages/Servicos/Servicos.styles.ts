import styled from "styled-components";

export const DivImgInicial = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url('https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_pagina_servicos.png?raw=true');
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
    font-size: 4.1vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;

    @media (max-width: 450px) {
        font-size: 9.5vw;
        margin-top: 3vh;
    }
`

export const DivTextoInicial = styled.div`
    width: 100%;
    height: 23vh;
    border-radius: 1.25rem;
    background-color: rgba(192, 192, 192, 0.50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;

    @media (max-width: 450px) {
        margin-top: 4vh;
        height: 32vh;
    }
`

export const TextoInicial = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6vw;
    font-style: normal;
    font-weight: 500;
    max-width: 98%;

    @media (max-width: 450px) {
        font-size: 4.5vw;
        color: white;
    }
`

export const SectionBoxs = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100vw;
    margin-bottom: 2vh;
    background-color: #A17222;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const DivBox = styled.div`
    background-color: #F8F4DE;
    border-radius: 1.25rem;
    width: 26vw;
    height: 43vh;
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 450px) {
        width: 100%;
        height: 38vh;
    }
`

export const NumeroDentroBoxCor = styled.p`
    color: #A17222;
    font-family: 'Stint Ultra Condensed', sans-serif;
    font-size: 4.3rem;
    font-weight: 400;
    margin-top: 2vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        padding-top: 0.5vh;
        padding-left: 1.5vw;
        font-size: 7vw;
    }
`

export const TituloDentroBoxCor = styled.h1`
    color: #A17222;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 1vh;
    max-width: 19.3vw;

    @media (max-width: 450px) {
        font-size: 6.2vw;
        padding-left: 1.5vw;
    }
`

export const PDescBox = styled.p`
    color: #383838;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    text-align: center;
    margin-left: 1vh;
    margin-right: 1vh;
    max-width: 22vw;

    @media (max-width: 450px) {
        font-size: 4.6vw;
        margin-top: 1vh;
    }
`