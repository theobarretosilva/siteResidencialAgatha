// import { useRef } from 'react';
import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Espaco.styles'
import { SliderFotosEstrutura } from '../../components/SliderFotosEstrutura/SliderFotosEstrutura';
// import ImageModal from '../../components/ImageModal/ImageModal';
// import { useState } from 'react';

export function Espaco() {
    const { innerWidth: width } = window;

    const acomodacoesData = [
        {
            titulo: 'Quarto Ágata Azul',
            subtitulo: 'Os Quartos de Ágata Azul são projetados para criar um refúgio de serenidade e comunicação. Inspirados na Ágata Azul, conhecida por suas propriedades de equilíbrio e harmonia, esses quartos são espaços onde a tranquilidade reina.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataAzul.jpg?raw=true',
            right: width <= 450 ? '12%' : '19.5vw',
            corFaixa: '#0075A7',
            side: 'right',
            photoMarginLeft: '0',
            divDescricaoMarginLeft: ''
        },
        {
            titulo: 'Suíte Ágata Verde',
            subtitulo: 'Os Quartos de Ágata Verde são santuários de harmonia e equilíbrio. Inspirados nas energias revigorantes e curativas da Ágata Verde, esses quartos foram projetados para oferecer um espaço que nutre sua vitalidade e bem-estar',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataVerde.jpg?raw=true',
            right: width <= 450 ? '8.9%' : '18.01vw',
            corFaixa: '#366059',
            side: 'left',
            photoMarginLeft: '6.2vw',
            divDescricaoMarginLeft: '7vw'
        },
        {
            titulo: 'Quarto Ágata Rosa',
            subtitulo: 'Os Quartos de Ágata Rosa são verdadeiras expressões de amor e carinho. Inspirados na suave e acolhedora energia da Ágata Rosa, esses quartos são projetados para oferecer um ambiente caloroso e afetuoso.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataRosa.jpg?raw=true',
            right: width <= 450 ? '11%' : '19vw',
            corFaixa: '#AF4F80',
            side: 'right',
            photoMarginLeft: '0',
            divDescricaoMarginLeft: ''
        },
        {
            titulo: 'Quarto Ágata Vermelha',
            subtitulo: 'Os Quartos de Ágata Vermelha são projetados para serem um oásis de vitalidade e paixão. Inspirados na energia estimulante da Ágata Vermelha, esses quartos são um convite para um ambiente cheio de energia e calor.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataVermelha.jpg?raw=true',
            right: width <= 450 ? '2%' : '14.4vw',
            corFaixa: '#B2362E',
            side: 'left',
            photoMarginLeft: '6.2vw',
            divDescricaoMarginLeft: '4.8vw'
        },
        {
            titulo: 'Quarto Ágata Cinza',
            subtitulo: 'Os Quartos Ágata Cinza são um espaço cuidadosamente projetado para transmitir uma atmosfera de tranquilidade e equilíbrio. Inspirado nas qualidades da ágata cinza, estes quartos são uma expressão de serenidade e estabilidade.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataCinza.jpg?raw=true',
            right: width <= 450 ? '9%' : '18.3vw',
            corFaixa: '#626262',
            side: 'right',
            photoMarginLeft: '0',
            divDescricaoMarginLeft: ''
        },
        {
            titulo: 'Suíte Ágata Roxa',
            subtitulo: 'Os Quartos Ágata Roxa são um santuário de tranquilidade, onde a energia suave e reconfortante da ágata roxa é celebrada. Este espaço convida à introspecção, à contemplação e à conexão espiritual.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_roxa.mp4?raw=true',
            right: width <= 450 ? '11%' : '19.1vw',
            corFaixa: '#754D7C',
            side: 'left',
            photoMarginLeft: '11.2vw',
            divDescricaoMarginLeft: '7vw'
        },
        {
            titulo: 'Suíte Ágata Marrom',
            subtitulo: 'A Suíte Ágata Marrom é um refúgio de estabilidade e conforto, onde a força e a serenidade da ágata marrom são celebradas. Este espaço acolhedor promove a sensação de segurança e conexão com a terra.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/suiteAgataMarrom.png?raw=true',
            right: width <= 450 ? '11%' : '19.1vw',
            corFaixa: '#ffb726',
            side: 'right',
            photoMarginLeft: '0',
            divDescricaoMarginLeft: ''
        },
        {
            titulo: 'Quarto Ágata Laranja',
            subtitulo: 'O Quarto Ágata Laranja é vibrante e cheio de energia revitalizante. Inspirado nas propriedades da ágata laranja, este ambiente estimula a criatividade, a alegria e a vitalidade, proporcionando uma atmosfera que inspira otimismo e bem-estar.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataLaranja.png?raw=true',
            right: width <= 450 ? '11%' : '19.1vw',
            corFaixa: '#ffa369',
            side: 'left',
            photoMarginLeft: '7.25vw',
            divDescricaoMarginLeft: '7vw'
        },
        {
            titulo: 'Quarto Ágata Amarela',
            subtitulo: 'O Quarto Ágata Amarela é banhado pela luz da positividade e clareza mental. A ágata amarela, com sua energia luminosa, promove a confiança e a harmonia, criando um ambiente perfeito para relaxar e rejuvenescer.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/quartoAgataAmarela.png?raw=true',
            right: width <= 450 ? '11%' : '19.1vw',
            corFaixa: '#b89d30',
            side: 'right',
            photoMarginLeft: '0',
            divDescricaoMarginLeft: ''
        }
        
    ]

    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedImage, setSelectedImage] = useState('');

    // const openModal = (imageUrl: string) => {
    //     setSelectedImage(imageUrl);
    //     setIsOpen(true);
    // };

    // const closeModal = () => {
    //     setIsOpen(false);
    // };

    return(
        <>
            <S.ImgCasaInicial src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/foto_pagina_espaco.png?raw=true' />
            <DivMargem>
                <S.SectionStyled>
                    <S.TituloDivImgInicial>Nossa estrutura cuidadosamente planejada</S.TituloDivImgInicial>
                    <S.LinhaStyled>‎</S.LinhaStyled>
                    <S.PSubtituloInicial>
                        Nossos espaços foram cuidadosamente projetadas para proporcionar conforto e tranquilidade. Cada espaço é pensado para atender às necessidades individuais dos nossos residentes, oferecendo um ambiente acolhedor e seguro.
                    </S.PSubtituloInicial>
                </S.SectionStyled>
                <S.TextoSection>Nossas acomodações</S.TextoSection>
                <S.ImgSetaBaixo src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d6dac166f92396f20bd2e16044f76c3abedf9f5b/src/assets/svg/seta_baixo_preta.svg' />
            </DivMargem>
            {acomodacoesData.map((acomodacao, index) => (
                <>
                    {width <= 450 ? (
                        <S.FaixaAcomodacao style={{backgroundColor: `${acomodacao.corFaixa}`}}>
                            <S.ImgQuartoMobile
                                    style={acomodacao.side == 'right' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse', marginLeft: `${acomodacao.photoMarginLeft}`}}
                                    src={acomodacao.srcVideo}
                                />
                            <S.TituloAcomodacaoMobile>{acomodacao.titulo}</S.TituloAcomodacaoMobile>
                            <S.SubtituloAcomodacaoMobile>{acomodacao.subtitulo}</S.SubtituloAcomodacaoMobile>
                        </S.FaixaAcomodacao>
                    ) : (
                        <DivMargem>
                            <S.DivAcomodacao2 
                                style={acomodacao.side == 'right' ? {
                                    flexDirection: 'row'
                                } : {
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'start'

                                }} 
                                key={index}
                            >
                                <S.ImgQuarto
                                    style={acomodacao.side == 'right' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse', marginLeft: `${acomodacao.photoMarginLeft}`}}
                                    src={acomodacao.srcVideo}
                                />
                                <S.DivDescricaoQuarto style={acomodacao.side == 'right' ? {marginLeft: '7.35vw'} : {marginLeft: `${acomodacao.divDescricaoMarginLeft}`}}>
                                    <S.TxtNomeQuarto style={acomodacao.side == 'right' ? {textAlign: 'start'} : {textAlign: 'end'}}>{acomodacao.titulo}</S.TxtNomeQuarto>
                                    <S.TxtDescriQuarto>{acomodacao.subtitulo}</S.TxtDescriQuarto>
                                </S.DivDescricaoQuarto>
                                <S.LinhaCorQuarto style={acomodacao.side == 'right' ? {
                                    right: '0', backgroundColor: `${acomodacao.corFaixa}`, borderRadius: '0px 0px 0px 25px'
                                } : {
                                    left: '0', backgroundColor: `${acomodacao.corFaixa}`, borderRadius: '0px 0px 25px 0px'
                                }}></S.LinhaCorQuarto>
                            </S.DivAcomodacao2>
                        </DivMargem>
                        
                        // <S.DivAcomodacao key={index}>
                        //     <S.FaixaAcomodacoes src={acomodacao.srcFaixa} />
                        //     <S.TituloAcomodacao style={{right: acomodacao.right}}>{acomodacao.titulo}</S.TituloAcomodacao>
                        //     <S.SubtituloAcomodacao>{acomodacao.subtitulo}</S.SubtituloAcomodacao>
                        //     <S.VideoAcomodacao controls autoPlay loop onClick={() => openModal(acomodacao.srcVideo)} >
                        //         <source src={acomodacao.srcVideo} />
                        //     </S.VideoAcomodacao>
                        // </S.DivAcomodacao>
                    )}
                    {/* {isOpen && selectedImage === acomodacao.srcVideo && (
                        <ImageModal
                            imageUrl={acomodacao.srcVideo}
                            isOpen={isOpen}
                            closeModal={closeModal}
                            altText="Descrição da imagem"
                        />
                    )} */}
                </>
            ))}
            <S.DivSliders>
                <S.TextoSectionAcomodacoes>Nossas acomodações</S.TextoSectionAcomodacoes>
                <SliderFotosEstrutura />
            </S.DivSliders>   
        </>
    )
}