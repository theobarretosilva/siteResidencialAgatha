// import { useRef } from 'react';
import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Espaco.styles'
import { SliderFotosEstrutura } from '../../components/SliderFotosEstrutura/SliderFotosEstrutura';
const { innerWidth: width } = window;

export function Espaco() {
    const acomodacoesData = [
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_azul.png?raw=true',
            titulo: 'Quarto Ágata Azul',
            subtitulo: 'Os Quartos de Ágata Azul são projetados para criar um refúgio de serenidade e comunicação. Inspirados na Ágata Azul, conhecida por suas propriedades de equilíbrio e harmonia, esses quartos são espaços onde a tranquilidade reina.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataAzul.jpg?raw=true',
            right: width <= 450 ? '50px' : '19.5vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_verde.png?raw=true',
            titulo: 'Quarto Ágata Verde',
            subtitulo: 'Os Quartos de Ágata Verde são santuários de harmonia e equilíbrio. Inspirados nas energias revigorantes e curativas da Ágata Verde, esses quartos foram projetados para oferecer um espaço que nutre sua vitalidade e bem-estar',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quae.png?raw=true',
            right: width <= 450 ? '9.4vw' : '18.01vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_rosa.png?raw=true',
            titulo: 'Quarto Ágata Rosa',
            subtitulo: 'Os Quartos de Ágata Rosa são verdadeiras expressões de amor e carinho. Inspirados na suave e acolhedora energia da Ágata Rosa, esses quartos são projetados para oferecer um ambiente caloroso e afetuoso.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quaosa.png?raw=true',
            right: width <= 450 ? '11.15vw' : '19vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_vermelha.png?raw=true',
            titulo: 'Quarto Ágata Vermelha',
            subtitulo: 'Os Quartos de Ágata Vermelha são projetados para serem um oásis de vitalidade e paixão. Inspirados na energia estimulante da Ágata Vermelha, esses quartos são um convite para um ambiente cheio de energia e calor.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataVermelha.jpg?raw=true',
            right: width <= 450 ? '2.7vw' : '14.4vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_cinza.png?raw=true',
            titulo: 'Quarto Ágata Cinza',
            subtitulo: 'Os Quartos Ágata Cinza são um espaço cuidadosamente projetado para transmitir uma atmosfera de tranquilidade e equilíbrio. Inspirado nas qualidades da ágata cinza, estes quartos são uma expressão de serenidade e estabilidade.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataCinza.jpg?raw=true',
            right: width <= 450 ? '3.43vw' : '18.3vw'
        }
    ]

    return(
        <>
            <S.DivImgInicial>
                <S.TituloDivImgInicial>Nossa Estrutura Cuidadosamente Planejada</S.TituloDivImgInicial>
            </S.DivImgInicial>
            <DivMargem>
                <S.TextoInicial>
                    Nossos espaços foram cuidadosamente projetadas para proporcionar conforto e tranquilidade. Cada espaço é pensado para atender às necessidades individuais dos nossos residentes, oferecendo um ambiente acolhedor e seguro.
                </S.TextoInicial>
                <Separador />
            </DivMargem>
            <S.TextoSection>Nossas acomodações</S.TextoSection>
            {acomodacoesData.map((acomodacao, index) => (
                <S.DivAcomodacao key={index}>
                    <S.FaixaAcomodacoes src={acomodacao.srcFaixa} />
                    <S.TituloAcomodacao style={{right: acomodacao.right}}>{acomodacao.titulo}</S.TituloAcomodacao>
                    <S.SubtituloAcomodacao>{acomodacao.subtitulo}</S.SubtituloAcomodacao>
                    <S.ImgAcomodacao src={acomodacao.srcImg} />
                </S.DivAcomodacao>
            ))}
            <DivMargem>
                <Separador />
                <S.TextoSection>Nossa estrutura</S.TextoSection>
                <SliderFotosEstrutura />
            </DivMargem>
        </>
    )
}