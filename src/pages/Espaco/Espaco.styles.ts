import styled from "styled-components";

export const ImgCasaInicial = styled.img`
    width: 100%;
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
    width: 32vw;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 9vw;
        margin-top: 3vh;
    }
`

export const LinhaStyled = styled.div`
    width: 20vw;
    height: 1.5px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 51vh;
`

export const PSubtituloInicial = styled.p`
    color: white;
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;
    max-width: 39vw;
    margin-top: 4.5vh;

    @media (max-width: 450px) {
        font-size: 5vw;
        margin-top: 0;
    }
`

export const TextoSection = styled.h1`
    color: rgba(56, 56, 56, 1);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-top: 16vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 7.5vw;
        margin-bottom: 2vh;
    }
`

export const DivSliders = styled.div`
    background-color: rgba(161, 114, 34, 1);
    width: 99.2vw;
    padding-top: 1vh;
    padding-bottom: 3vh;
    margin-top: 10vh;
`

export const TextoSectionAcomodacoes = styled.h1`
    color: rgba(248, 244, 222, 1);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-top: 6vh;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 7.5vw;
        margin-bottom: 2vh;
    }
`

export const ImgSetaBaixo = styled.img`
    height: 1.8vh;
    margin-top: 1.5vh;
`

export const DivAcomodacao2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
`

export const ImgQuarto = styled.img`
    width: 40vw;
    height: 62vh;
    border-radius: 12px;
`

export const DivDescricaoQuarto = styled.div`
    margin-left: 6.18vw;
`

export const TxtNomeQuarto = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 3rem;
    color: #383838;
    margin-top: 0;
    width: fit-content;
`

export const TxtDescriQuarto = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 1.15rem;
    color: #383838;
    text-align: start;
    max-width: 28vw;
`

export const LinhaCorQuarto = styled.div`
    width: 10vw;
    height: 9vh;
    position: absolute;
`

export const DivAcomodacao = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 10vh;

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