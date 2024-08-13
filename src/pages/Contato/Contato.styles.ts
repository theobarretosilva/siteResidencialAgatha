import styled from "styled-components";
import InputMask from "react-input-mask";

export const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2vw;
    align-items: center;
    background-color: #A17222;
    height: 86vh;
    margin-top: 14vh;

    @media (max-width: 450px) {
        flex-direction: column-reverse;
    }
`

export const DivMaps = styled.div`
    margin-top: 0;
`

export const ImagemAside = styled.img`
    width: 60vw;
    height: 88.5vh;
    margin-top: 5vh;
    object-fit: cover;

    @media (max-width: 450px) {
        display: none;
    }
`

export const TituloFaixa = styled.h1`
    color: #FFF;
    font-size: 2.9rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-align: start;
    margin-bottom: 0;
    margin-top: 0;

    @media (max-width: 450px) {
        font-weight: 500;
        font-size: 1.7rem;
    }
`

export const SubtituloFaixa = styled.h2`
    color: #FFF;
    font-size: 1.4rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    max-width: 33vw;
    text-align: start;
    margin-top: 1vh;

    @media (max-width: 450px) {
        max-width: 95%;
        font-size: 1.4rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    width: 33vw;
    height: 78vh;
    background-color: rgba(248, 244, 222, 1);
    border-radius: 1rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 450px) {
        width: 100%;
    }
`

export const NameInput = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    color: rgba(56, 56, 56, 1);
    margin-bottom: 1vh;
    margin-top: 2vh;
`

export const InputMaskStyled = styled(InputMask)`
    width: 29vw;
    height: 5.2vh;
    border-radius: 0.3rem;
    background: rgba(248, 244, 222, 1);
    border: 1px solid rgba(173, 167, 167, 1);
    padding-left: 0.8vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;

    ::placeholder {
        color: rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 450px) {
        width: 90%;
        height: 5vh;
        padding-left: 2vw;
    }
`

export const Input = styled.input`
    width: 29vw;
    height: 5.2vh;
    border-radius: 0.3rem;
    background: rgba(248, 244, 222, 1);
    border: 1px solid rgba(173, 167, 167, 1);
    padding-left: 0.8vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;

    ::placeholder {
        color: rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 450px) {
        width: 90%;
        height: 5vh;
        padding-left: 2vw;
    }
`

export const TextArea = styled.textarea`
    width: 29vw;
    height: 25vh;
    border-radius: 0.3rem;
    background: rgba(248, 244, 222, 1);
    border: 1px solid rgba(173, 167, 167, 1);
    padding-left: 0.8vw;
    padding-top: 1vh;
    color: black;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;
    font-family: 'Inter', sans-serif;
    outline: none;
    resize: none;

    @media (max-width: 450px) {
        width: 90%;
        height: 25vh;
        padding-left: 2vw;
    }
`

export const BtnEnviar = styled.button`
    width: 30vw;
    height: 5.5vh;
    border-radius: 0.3rem;
    background: rgba(161, 114, 34, 1);
    color: #FFF;
    text-align: center;
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 1vh;

    @media (max-width: 450px) {
        width: 90%;
        height: 5vh;
        font-size: 1.3rem;
    }
`