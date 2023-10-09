// import { useRef } from 'react';
import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Espaco.styles'
import { SliderFotosEstrutura } from '../../components/SliderFotosEstrutura/SliderFotosEstrutura';

export function Espaco() {
    const acomodacoesData = [
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_azul.png?raw=true',
            titulo: 'Quarto Ágata Azul',
            subtitulo: 'Os Quartos de Ágata Azul são projetados para criar um refúgio de serenidade e comunicação. Inspirados na Ágata Azul, conhecida por suas propriedades de equilíbrio e harmonia, esses quartos são espaços onde a tranquilidade reina.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quarto_azul.png?raw=true',
            right: '19.7vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_verde.png?raw=true',
            titulo: 'Quarto Ágata Verde',
            subtitulo: 'Os Quartos de Ágata Verde são santuários de harmonia e equilíbrio. Inspirados nas energias revigorantes e curativas da Ágata Verde, esses quartos foram projetados para oferecer um espaço que nutre sua vitalidade e bem-estar',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quarto_verde.png?raw=true',
            right: '18.05vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_rosa.png?raw=true',
            titulo: 'Quarto Ágata Rosa',
            subtitulo: 'Os Quartos de Ágata Rosa são verdadeiras expressões de amor e carinho. Inspirados na suave e acolhedora energia da Ágata Rosa, esses quartos são projetados para oferecer um ambiente caloroso e afetuoso.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quarto_rosa.png?raw=true',
            right: '19.15vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_vermelha.png?raw=true',
            titulo: 'Quarto Ágata Vermelha',
            subtitulo: 'Os Quartos de Ágata Vermelha são projetados para serem um oásis de vitalidade e paixão. Inspirados na energia estimulante da Ágata Vermelha, esses quartos são um convite para um ambiente cheio de energia e calor.',
            srcImg: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_quarto_vermelho.png?raw=true',
            right: '14.3vw'
        }
    ]

    // const estruturaSliderData = [
    //     {
    //         titulo: 'Sala de televisão',
    //         srcImages: [
    //             'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHYlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //             'https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    //             'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80',
    //             'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    //         ]
    //     },
    //     {
    //         titulo: 'Espaço de leitura',
    //         srcImages: [
    //             'https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    //             'https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //             'https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //             'https://images.unsplash.com/photo-1585047402745-62c9c8cc3b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    //         ]
    //     },
    //     {
    //         titulo: 'Jardim',
    //         srcImages: [
    //             'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    //             'https://images.unsplash.com/photo-1601654253194-260e0b6984f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80',
    //             'https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    //             'https://images.unsplash.com/photo-1591383496652-db773e57b1d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    //         ]
    //     }
    // ]

    // const carousel = useRef<HTMLDivElement | null>(null);

    // const handleLeftClick = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     if (carousel.current) {
    //         if (typeof carousel.current.scrollLeft === 'number') {
    //             carousel.current.scrollLeft -= carousel.current.offsetWidth;
    //         }
    //     }
    // }

    // const handleRightClick = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     if (carousel.current) {
    //         if (typeof carousel.current.scrollLeft === 'number') {
    //             carousel.current.scrollLeft += carousel.current.offsetWidth;
    //         }
    //     }
    // }

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