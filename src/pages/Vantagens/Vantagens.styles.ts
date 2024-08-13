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
    margin-top: 27.1vh;
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
    width: 65vw;
    margin-bottom: 0;

    @media (max-width: 450px) {
        font-size: 9vw;
        margin-top: 3vh;
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
        font-size: 7.5vw;
        margin-bottom: 2vh;
    }
`

export const ImgSetaBaixo = styled.img`
    height: 1.8vh;
    margin-top: 1.5vh;
`

export const PDentroFaixa = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 400;
    max-width: 87vw;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 1.6rem;
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

// export const MainBoxVantagens = styled.main`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     align-content: center;
//     justify-content: center;
//     margin-top: 10vh;
//     margin-bottom: 5vh;

//     :nth-child(2){
//         border-left: none;
//     }
//     :nth-child(3){
//         border-right: none;
//         border-left: none;
//     }
//     :nth-child(5){
//         border-top: none;
//     }
//     :nth-child(6){
//         border-top: none;
//         border-left: none;
//     }
//     :nth-child(7){
//         border-top: none;
//         border-left: none;
//     }

//     @media (max-width: 450px) {
//         flex-direction: column;

//         :nth-child(2){
//             border-top: none;
//             border-bottom: none;
//             border-left: 2px solid #FFF;
//         }
//         :nth-child(3){
//             border-bottom: none;
//             border-left: 2px solid #FFF;
//             border-right: 2px solid #FFF;
//         }
//         :nth-child(5){
//             border-top: none;
//         }
//         :nth-child(6){
//             border-top: none;
//             border-left: 2px solid #FFF;
//         }
//         :nth-child(7){
//             border-top: none;
//             border-left: 2px solid #FFF;
//         }
//     }
// `

export const DivVantagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImgVantagem = styled.img`
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
    width: 20.3vw;
    height: 18vh;
    object-fit: cover;
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

    @media (max-width: 450px) {
        width: 100%;
        max-height: 26vh;
    }
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

    @media (max-width: 450px) {
        width: 30vw;
        height: 10vh;
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
        font-size: 6vw;
    }
`