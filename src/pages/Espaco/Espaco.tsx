import { useRef } from 'react';
import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Espaco.styles'

export function Espaco() {
    const acomodacoesData = [
        {
            srcFaixa: '../../src/assets/img/faixa_torta_azul.png',
            titulo: 'Quarto Ágata Azul',
            subtitulo: 'Os Quartos de Ágata Azul são projetados para criar um refúgio de serenidade e comunicação. Inspirados na Ágata Azul, conhecida por suas propriedades de equilíbrio e harmonia, esses quartos são espaços onde a tranquilidade reina.',
            srcImg: '../../src/assets/img/img_quarto_azul.png',
            right: '19.7vw'
        },
        {
            srcFaixa: '../../src/assets/img/faixa_torta_verde.png',
            titulo: 'Quarto Ágata Verde',
            subtitulo: 'Os Quartos de Ágata Verde são santuários de harmonia e equilíbrio. Inspirados nas energias revigorantes e curativas da Ágata Verde, esses quartos foram projetados para oferecer um espaço que nutre sua vitalidade e bem-estar',
            srcImg: '../../src/assets/img/img_quarto_verde.png',
            right: '18.05vw'
        },
        {
            srcFaixa: '../../src/assets/img/faixa_torta_rosa.png',
            titulo: 'Quarto Ágata Rosa',
            subtitulo: 'Os Quartos de Ágata Rosa são verdadeiras expressões de amor e carinho. Inspirados na suave e acolhedora energia da Ágata Rosa, esses quartos são projetados para oferecer um ambiente caloroso e afetuoso.',
            srcImg: '../../src/assets/img/img_quarto_rosa.png',
            right: '19.15vw'
        },
        {
            srcFaixa: '../../src/assets/img/faixa_torta_vermelha.png',
            titulo: 'Quarto Ágata Vermelha',
            subtitulo: 'Os Quartos de Ágata Vermelha são projetados para serem um oásis de vitalidade e paixão. Inspirados na energia estimulante da Ágata Vermelha, esses quartos são um convite para um ambiente cheio de energia e calor.',
            srcImg: '../../src/assets/img/img_quarto_vermelho.png',
            right: '14.3vw'
        }
    ]

    const carousel = useRef<HTMLDivElement | null>(null);

    const handleLeftClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            if (typeof carousel.current.scrollLeft === 'number') {
                carousel.current.scrollLeft -= carousel.current.offsetWidth;
            }
        }
    }

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            if (typeof carousel.current.scrollLeft === 'number') {
                carousel.current.scrollLeft += carousel.current.offsetWidth;
            }
        }
    }

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
                <S.SectionEstrutura>
                    <S.TituloEstrutura>Sala de televisão</S.TituloEstrutura>
                    <S.DivSlider>
                        <S.ButtonNext onClick={handleLeftClick}>
                            <S.ImgDentroButton src='../../src/assets/img/seta_slider.png' />
                        </S.ButtonNext>
                        <S.DivImages ref={carousel}>
                            <S.ImgSlider src="../../src/assets/img/img_quarto_azul.png" alt="" />
                            <S.ImgSlider src="../../src/assets/img/img_quarto_verde.png" alt="" />
                            <S.ImgSlider src="../../src/assets/img/img_quarto_rosa.png" alt="" />
                            <S.ImgSlider src="../../src/assets/img/img_quarto_vermelho.png" alt="" />
                        </S.DivImages>
                        <S.ButtonPrevious onClick={handleRightClick}>
                            <S.ImgDentroButton style={{rotate: '180deg'}} src='../../src/assets/img/seta_slider.png' />
                        </S.ButtonPrevious>
                    </S.DivSlider>
                </S.SectionEstrutura>
            </DivMargem>
        </>
    )
}