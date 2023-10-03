import styled from "styled-components";
import InputMask from "react-input-mask";

export const DivFlex = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const ImagemAside = styled.img`
    width: 60vw;
    height: 88.5vh;
    margin-top: 11.5vh;
    object-fit: cover;
`

export const MainForm = styled.main`
    width: 40vw;
    height: 88.5vh;
    margin-top: 11.5vh;
`

export const FaixaDegrade = styled.div`
    width: 40vw;
    height: 22vh;
    background: linear-gradient(180deg, #383838 0%, rgba(56, 56, 56, 0.50) 100%);
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TituloFaixa = styled.h1`
    color: #FFF;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
`

export const SubtituloFaixa = styled.h2`
    color: #FFF;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 200;
    max-width: 30vw;
    text-align: center;
    margin-top: 1vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.6vh;
    gap: 2vh;
`

export const InputMaskStyled = styled(InputMask)`
    width: 30vw;
    height: 5.2vh;
    border-radius: 0.625rem;
    background: #D9D9D9;
    border: none;
    padding-left: 0.8vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;

    ::placeholder {
        color: rgba(0, 0, 0, 0.75);
    }
`

export const Input = styled.input`
    width: 30vw;
    height: 5.2vh;
    border-radius: 0.625rem;
    background: #D9D9D9;
    border: none;
    padding-left: 0.8vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;

    ::placeholder {
        color: rgba(0, 0, 0, 0.75);
    }
`

export const TextArea = styled.textarea`
    width: 30vw;
    height: 25vh;
    border-radius: 0.625rem;
    background: #D9D9D9;
    border: none;
    padding-left: 0.8vw;
    padding-top: 1vh;
    color: black;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;
    font-family: 'Inter', sans-serif;
    outline: none;
    resize: none;
`

export const BtnEnviar = styled.button`
    width: 31vw;
    height: 5.5vh;
    border-radius: 0.625rem;
    background: #000;
    color: #FFF;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    border: none;
`