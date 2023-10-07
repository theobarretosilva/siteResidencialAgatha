import { motion } from "framer-motion";
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
`

export const TituloDivImgInicial = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;
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
`

export const TextoSection = styled.h1`
    color: black;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
`

export const DivAcomodacao = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 5vh;
`

export const FaixaAcomodacoes = styled.img`
    width: 99.7vw;
    height: 60vh;
`

export const TituloAcomodacao = styled.h1`
    color: #FFF;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 500;
    position: absolute;
    top: 80px;
    right: 19.2vw;
`

export const SubtituloAcomodacao = styled.h2`
    color: #FFF;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 200;
    max-width: 34vw;
    position: absolute;
    top: 140px;
    right: 5vw;
`

export const ImgAcomodacao = styled.img`
    width: 43vw;
    height: 50vh;
    position: absolute;
    top: 38px;
    left: 5vw;
`

export const SectionEstrutura = styled.section`

`

export const TituloEstrutura = styled.h1`
    color: black;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    text-align: start;
`

export const DivSlider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonNext = styled.button`
    border-radius: 0.625rem 0rem 0rem 0.625rem;
    background: rgba(217, 217, 217, 0.60);
    height: 35vh;
    width: 3vw;
    padding: 0;
    z-index: 1;
    cursor: pointer;
`

export const ButtonPrevious = styled.button`
    border-radius: 0rem 0.625rem 0.625rem 0rem;
    background: rgba(217, 217, 217, 0.40);
    height: 35vh;
    width: 3vw;
    padding: 0;
    z-index: 1;
    cursor: pointer;
`

export const ImgDentroButton = styled.img`
    width: 3vw;
    height: 7vh;
    margin: 0;
    padding: 0;
`

export const DivImages = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 35vh;
    overflow-x: auto;
    scroll-behavior: smooth;
    border-radius: 0.625rem;
    padding: 0;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const ImgSlider = styled.img`
    height: 100%;
    width: 40vw;

    ::-webkit-scrollbar {
        display: none;
    }
`