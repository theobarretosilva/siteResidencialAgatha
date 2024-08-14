import styled from "styled-components";

export const ImgCasaInicial = styled.img`
    width: 99.2vw;
    height: 100vh;
    z-index: 0;
    top: 0;
    position: absolute;
    object-fit: cover;

    @media (max-width: 450px) {
        height: 30vh;
    }
`

export const TituloSectionInicial = styled.h1`
    color: #F8F4DE;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 3vw;
    font-style: normal;
    font-weight: 600;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 3vh;

    @media (max-width: 450px) {
        margin-top: 0;
        font-size: 6.5vw;
    }
`

export const LinhaStyled = styled.div`
    width: 17.3vw;
    height: 1.5px;
    background-color: white;
    position: absolute;
    left: 0;
`

export const PSubtituloInicial = styled.p`
    color: white;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;
    max-width: 36vw;
    margin-top: 13vh;

    @media (max-width: 450px) {
        font-size: 5vw;
        margin-top: 0;
    }
`

export const DivSaibaMais = styled.div`
    margin-top: 11vh;
`

export const TxtSaibaMais = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.19vw;
    color: white;
    margin-bottom: 2.5vh;
`

export const ImgSetaBaixo = styled.img`
    height: 1.8vh;
`

export const ImgElipseFundo = styled.img`
    width: 15vw;
    margin-top: 80vh;
    position: absolute;
`

export const SectionEntreContato = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8vw;
    margin-top: 25vh;
    z-index: 5;

    @media (max-width: 450px) {
        flex-wrap: wrap;
    }
`

export const DivSectionEntreContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const TituloSectionEntreContato = styled.h1`
    color: #383838;
    font-family: 'Inter', sans-serif;
    font-size: 2.3vw;
    font-style: normal;
    font-weight: 600;
    text-align: start;
    margin-bottom: 5vh;
    margin-top: 0;
    max-width: 30vw;

    @media (max-width: 450px) {
        font-size: 6vw;
        max-width: 90vw;
        text-align: center;
    }
`

export const SubtituloSectionEntreContato = styled.h2`
    color: #383838;
    font-family: 'Inter', sans-serif;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 300;
    text-align: start;
    max-width: 36vw;

    @media (max-width: 450px) {
        font-size: 5vw;
        max-width: 90vw;
        text-align: center;
    }
`

export const BtnEntreContato = styled.button`
    width: 21vw;
    height: 7.5vh;
    background-color: #825810;
    border-radius: 0 1.5rem 0 1.5rem;
    color: #F8F4DE;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 0;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: none;

    @media (max-width: 450px) {
        display: none;
    }
`

export const BtnEntreContatoMobile = styled(BtnEntreContato)`
    width: 90vw;
    height: 5vh;
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5vw;

    @media (min-width: 450px) {
        display: none;
    }
`

export const SectionMVV = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5vw;
    margin-bottom: 2rem;
    margin-top: 18vh;
    z-index: 5;

    @media (max-width: 450px) {
        flex-direction: column;
        gap: 3vh;
    }
`

export const BoxMVV = styled.article`
    width: 20vw;
    height: 38vh;
    border-radius: 1.25rem;
    background-color: #383838;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    box-shadow: 0px 4px 4px 0px #00000040;
    text-align: start;

    @media (max-width: 450px) {
        width: 89vw;
        height: 31vh;
    }
`

export const ImgIconesMVV = styled.img`
    width: 4vw;
    height: 10vh;
    margin-top: 2vh;
    fill: #F8F4DE;

    @media (max-width: 450px) {
        width: 16vw;
        height: 8vh;
    }
`

export const TituloBoxMVV = styled.h1`
    color: #F8F4DE;
    font-family: 'Inter', sans-serif;
    font-size: 1.8vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 1vh;
    margin-bottom: 0;
    text-align: start;
    max-width: 15vw;

    @media (max-width: 450px) {
        font-size: 7.5vw;
    }
`

export const SubtituloBoxMVV = styled.h2`
    color: #F8F4DE;
    font-family: 'Inter', sans-serif;
    font-size: 1.1vw;
    font-style: normal;
    font-weight: 300;
    text-align: start;

    @media (max-width: 450px) {
        margin-top: 0;
        font-size: 5vw;
    }
`