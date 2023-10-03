import styled from "styled-components";

export const SeparadorStyled = styled.img`
    height: 90%;
    width: 100%;
    box-sizing: border-box;
    margin-top: 5vh;
    margin-bottom: 5vh;
    background-image: url("https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/separador.svg");

    @media (max-width: 450px) {
        margin-top: 3vh;
        margin-bottom: 3vh;
        object-position: 50% 50%;
        background-image: url("");
    }
`