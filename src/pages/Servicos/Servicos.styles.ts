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
`

export const TituloDivImgInicial = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;
`

export const DivTextoInicial = styled.div`
    width: 100%;
    height: 23vh;
    border-radius: 1.25rem;
    /* background: linear-gradient(193deg, #6A6A6A 9.58%, rgba(192, 192, 192, 0.50) 90.42%); */
    background-color: rgba(192, 192, 192, 0.50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
`

export const TextoInicial = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    max-width: 98%;
`

export const SectionBoxs = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2vh;
`

export const DivBox = styled.div`
    background-color: white;
    border-radius: 0.625rem;
    width: 26vw;
    height: 48vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 5vh;
`

export const DivCorDentroBox = styled.div`
    border-radius: 0.3125rem;
    margin-top: 1vh;
    margin-left: 1vh;
    margin-right: 1vh;
    height: 23vh;
    text-align: start;
    padding-left: 0.4vw;
`

export const NumeroDentroBoxCor = styled.p`
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    margin-top: 1vh;
`

export const TituloDentroBoxCor = styled.h1`
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
`

export const PDescBox = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    font-style: normal;
    font-weight: 400;
    text-align: start;
    margin-left: 1vh;
    margin-right: 1vh;
`