import styled from "styled-components";

export const ImgInicial = styled.img`
    width: 99.67vw;
    height: 64.45vh;
    z-index: 0;
    top: 14vh;
    position: absolute;
    object-fit: cover;

    @media (max-width: 450px) {
        height: 30vh;
    }
`

export const SectionStyled = styled.section`
    margin-top: 18vh;
    z-index: 5;
`

export const TituloDivImgInicial = styled.h1`
    color: #F8F4DE;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 3vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 7vh;
    width: 23vw;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 9vw;
        margin-top: 3vh;
    }
`

export const LinhaStyled = styled.div`
    width: 23.5vw;
    height: 1.5px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 41vh;
`

export const PSubtituloInicial = styled.p`
    color: white;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;
    max-width: 38vw;
    margin-top: 4.5vh;

    @media (max-width: 450px) {
        font-size: 5vw;
        margin-top: 0;
    }
`

export const DivSectionAtividades = styled.div`
    margin-top: 10vh;
`

export const ImgElipseFundo = styled.img`
    width: 15vw;
    margin-top: 5vh;
    position: absolute;
`

export const SectionAtividade = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 20vh;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const ImgAtividade = styled.img`
    width: 44vw;
    height: 62vh;
    border-radius: 0.62rem;
    margin: 0;
    object-fit: cover;

    @media (max-width: 450px) {
        width: 100%;
        border-radius: 0.62rem;
        margin: 0;
        height: 25vh;
    }
`

export const DivDescricaoAtividade = styled.div`
    margin-left: 5vw;
    margin-top: 0;

    @media (max-width: 450px) {
        margin-left: 0;
    }
`

export const TituloAtividade = styled.h1`
    color: #383838;
    font-family: "Inter", sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    text-align: start;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 450px) {
        text-align: center;
        margin-bottom: 0;
        margin-top: 1.5vh;
    }
`

export const DescricaoAtividade = styled.p`
    color: #383838;
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