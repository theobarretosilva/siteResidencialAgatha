import styled from "styled-components";

export const ImgInicial = styled.img`
    width: 99.29vw;
    height: 64.45vh;
    z-index: 0;
    top: 14vh;
    position: absolute;
    object-fit: cover;

    @media (max-width: 450px) {
        height: 27vh;
        object-fit: cover;
        top: 11vh;
    }
`

export const SectionStyled = styled.section`
    margin-top: 27.1vh;
    z-index: 5;

    @media (max-width: 450px) {
        margin-top: 12vh;
    }
`

export const TituloDivImgInicial = styled.h1`
    color: #F8F4DE;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 3vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;
    width: 65vw;
    margin-bottom: 0;

    @media (max-width: 450px) {
        margin-top: 3vh;
        font-size: 1.3rem;
        width: 80vw;
    }
`

export const TextoSection = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-top: 25vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 1.8rem;
        margin-bottom: 2vh;
        margin-top: 7vh;
    }
`

export const ImgSetaBaixo = styled.img`
    height: 1.8vh;
    margin-top: 1.5vh;

    @media (max-width: 450px) {
        margin-top: 0;
    }
`

export const ImgElipseFundo = styled.img`
    width: 15vw;
    margin-top: 160vh;
    position: absolute;
`

export const MainBoxVantagens = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    row-gap: 6vh;
    margin-top: 8vh;
    margin-bottom: 5vh;
    z-index: 5;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const DivVantagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImgVantagem = styled.img`
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
    width: 20.3vw;
    height: 17.5vh;
    object-fit: cover;

    @media (max-width: 450px) {
        width: 90vw;
        height: 17.5vh;
    }
`

export const BoxVantagem = styled.section`
    width: 20.2vw;
    height: 18vh;
    border-left: 0.64px solid #885F1A;
    border-bottom: 0.64px solid #885F1A;
    border-right: 0.64px solid #885F1A;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(248, 244, 222, 0.6);
    backdrop-filter: blur(3px);

    @media (max-width: 450px) {
        width: 89.57vw;
        max-height: 26vh;
    }
`

export const TxtBoxVantagem = styled.h1`
    color: #383838;
    font-size: 1.15vw;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    max-width: 17vw;
    text-align: start;
    margin-left: 1vw;

    @media (max-width: 450px) {
        max-width: 90%;
        font-size: 1.3rem;
    }
`