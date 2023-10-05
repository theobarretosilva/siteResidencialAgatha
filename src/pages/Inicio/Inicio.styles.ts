import styled from "styled-components";

export const ImgCasaInicial = styled.img`
    width: 99.67vw;
    height: 60vh;
    z-index: 0;
    top: 0;
    object-fit: cover;

    -webkit-mask-image: linear-gradient(to top, transparent 1%, black 35%);

    @media (max-width: 450px) {
        height: 30vh;
    }
`

export const TituloSectionInicial = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: 'Arbutus Slab', sans-serif;
    font-size: 2.9rem;
    font-style: normal;
    font-weight: 500;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 3vh;

    @media (max-width: 450px) {
        margin-top: 0;
        font-size: 1.6rem;
    }
`

export const PTituloSectionInicial = styled.p`
    color: #E1CA58;
    margin-top: 0.5rem;
    text-decoration: underline;
`

export const PSubtituloInicial = styled.p`
    color: white;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 1rem;
        margin-top: 0;
    }
`

export const SectionEntreContato = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const DivSectionEntreContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const TituloSectionEntreContato = styled.h1`
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 600;
    text-align: start;
    margin-bottom: 0;
    margin-top: 0;
    max-width: 35vw;

    @media (max-width: 450px) {
        font-size: 1.5rem;
        max-width: 90vw;
        text-align: center;
    }
`

export const SubtituloSectionEntreContato = styled.h2`
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    font-style: normal;
    font-weight: 300;
    text-align: start;
    width: 36rem;

    @media (max-width: 450px) {
        font-size: 1rem;
        max-width: 90vw;
        text-align: center;
    }
`

export const BtnEntreContato = styled.button`
    width: 19vw;
    height: 7vh;
    background-color: black;
    border-radius: 0.9375rem;
    color: #FFF;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 200;
    margin-top: 7vh;
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
    display: grid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SectionMVV = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media (max-width: 450px) {
        flex-direction: column;
        gap: 3vh;
    }
`

export const BoxMVV = styled.article`
    width: 27vw;
    height: 38vh;
    border-radius: 0.625rem;
    background-color: #F1F1F1;
    padding-left: 1vw;
    padding-right: 1vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 450px) {
        width: 89vw;
        height: 33vh;
    }
`

export const ImgIconesMVV = styled.img`
    width: 8vw;
    height: 10vh;
    margin-top: 2vh;

    @media (max-width: 450px) {
        width: 16vw;
        height: 8vh;
    }
`

export const TituloBoxMVV = styled.h1`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 1vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 2rem;
    }
`

export const SubtituloBoxMVV = styled.h2`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;

    @media (max-width: 450px) {
        margin-top: 0;
    }
`