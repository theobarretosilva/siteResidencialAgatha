import styled from "styled-components";

export const DivImgInicial = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url('https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_pagina_espaco.png?raw=true');
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
        font-size: 9vw;
        margin-top: 3vh;
    }
`

export const TextoInicial = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6vw;
    font-style: normal;
    font-weight: 500;
    margin-top: 6vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        margin-top: 4vh;
        font-size: 5vw;
    }
`

export const TextoSection = styled.h1`
    color: black;
    font-size: 3vw;
    font-style: normal;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 7.5vw;
        margin-bottom: 2vh;
    }
`

export const DivAcomodacao = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 5vh;

    @media (max-width: 450px) {
        margin-top: 1vh;
    }
`

export const FaixaAcomodacoes = styled.img`
    width: 99.7vw;
    height: 60vh;

    @media (max-width: 450px) {
        height: 20vh;
    }
`

export const TituloAcomodacao = styled.h1`
    color: #FFF;
    font-size: 2.25vw;
    font-style: normal;
    font-weight: 500;
    position: absolute;
    top: 80px;
    right: 19.2vw;

    @media (max-width: 450px) {
        font-size: 6vw;
        right: 0vw;
        top: 10px;
        font-weight: 400;
    }
`

export const SubtituloAcomodacao = styled.h2`
    color: #FFF;
    font-size: 1.6vw;
    font-style: normal;
    font-weight: 200;
    max-width: 34vw;
    position: absolute;
    top: 140px;
    right: 5vw;

    @media (max-width: 450px) {
        top: 38px;
        font-size: 2vw;
        max-width: 44vw;
        right: 4vw;
        font-weight: 100;
    }
`

export const VideoAcomodacao = styled.video`
    width: 40vw;
    height: 50vh;
    position: absolute;
    top: 38px;
    left: 5vw;
    border-radius: 8px;

    @media (max-width: 450px) {
        height: 12vh;
        width: 40vw;
        left: 4vw;
    }
`

export const FaixaAcomodacao = styled.div`
    width: 100vw;
    position: relative;
    height: 45vh;
    margin-bottom: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VideoAcomodacaoMobile = styled.video`
    width: 76vw;
    height: 19vh;
    border-radius: 14px;
    margin-top: 2vh;
`

export const TituloAcomodacaoMobile = styled.h1`
    color: #FFF;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 2vh;
    margin-bottom: 1vh;
`

export const SubtituloAcomodacaoMobile = styled.p`
    color: #FFF;
    font-size: 4.7vw;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    margin-top: 0;
    max-width: 99vw;
`