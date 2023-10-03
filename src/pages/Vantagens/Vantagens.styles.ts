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
    font-family: 'Montserrat', sans-serif;
`

export const MainBoxVantagens = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 5vh;
    margin-bottom: 5vh;

    :nth-child(2){
        border-left: none;
    }
    :nth-child(3){
        border-right: none;
        border-left: none;
    }
    :nth-child(5){
        border-top: none;
    }
    :nth-child(6){
        border-top: none;
        border-left: none;
    }
`

export const BoxVantagem = styled.section`
    width: 18vw;
    height: 26vh;
    border: 2px solid #FFF;
    display: flex;
    flex-direction: column;
    background-size: cover;
    align-items: center;
`

export const ImgDentroBoxVantagem = styled.img`
    width: 18vw;
    height: 26vh;
    opacity: 16%;
`

export const IconBoxVantagem = styled.img`
    width: 5vw;
    height: 10vh;
    margin-top: 2vh;
    align-self: center;
    transition: align-self 0.6s;
`

export const TxtBoxVantagem = styled.h1`
    color: #FFF;
    font-size: 1.05rem;
    font-style: normal;
    font-weight: 300;
    max-width: 17vw;
    margin-top: 2vh;
`