import styled from "styled-components";

export const DivFaixaDegrade = styled.div`
    width: 100%;
    height: 26vh;
    background: linear-gradient(180deg, #383838 0%, rgba(56, 56, 56, 0.50) 100%);
    margin-top: 14vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PDentroFaixa = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 400;
    max-width: 87vw;
`

export const MainBoxVantagens = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

export const BoxVantagem = styled.section`
    width: 18vw;
    height: 26vh;
    border: 2px solid #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
`

export const ImgDentroBoxVantagem = styled.img`
    width: 18vw;
    height: 26vh;
    opacity: 16%;
`

export const IconBoxVantagem = styled.img`
    width: 6vw;
    height: 11vh;
    margin-top: 1vh;
`

export const TxtBoxVantagem = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    max-width: 17vw;
    margin-top: 1vh;
`