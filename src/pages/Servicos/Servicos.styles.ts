import styled from "styled-components";

export const ImgCasaInicial = styled.img`
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
    width: 30vw;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 9vw;
        margin-top: 3vh;
    }
`

export const LinhaStyled = styled.div`
    width: 31vw;
    height: 1.5px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 42vh;
`

export const PSubtituloInicial = styled.p`
    color: white;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;
    max-width: 40vw;
    margin-top: 4.5vh;

    @media (max-width: 450px) {
        font-size: 5vw;
        margin-top: 0;
    }
`

export const FundoCor = styled.div`
    width: 100%;
    height: auto;
    background-color: #A17222;
`

export const ImgElipseFundo = styled.img`
    width: 15vw;
    margin-top: 13vh;
    position: absolute;
`

export const SectionBoxs = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100vw;
    margin-bottom: 2vh;
    margin-top: 30vh;
    z-index: 5;

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