import styled from "styled-components";

export const Footer = styled.footer`
    width: auto;
    background-color: #FFF;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 1.5rem;
`

export const DivInicial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1vh;
`

export const PDescricaoLogo = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 300;
    width: 22vw;
`

export const DivRedesSociais = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7vw;

    :hover{
        background-color: #A4A4A4;
    }
`

export const CircleRedesSociais = styled.div`
    border-radius: 50%;
    background-color: #D9D9D9;
    width: 2.6rem;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ImgRedesSociais = styled.img`
    width: 1.7rem;
    height: 1.7rem;
`

export const SectionTopicos = styled.div`
    max-width: 24vw;
`

export const Linha = styled.div`
    width: 100%;
    height: 0.2vh;
    background-color: black;
`

export const DivCopyright = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PCopyright = styled.p`
    color: #825810;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
`

export const TituloSection = styled.h1`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    width: fit-content;
`

export const PSection = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 0.98rem;
    font-style: normal;
    font-weight: 400;
    width: fit-content;
`

export const DivDentroInformacoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8vw;
`