// import { useRef } from 'react';
import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Espaco.styles'
import { SliderFotosEstrutura } from '../../components/SliderFotosEstrutura/SliderFotosEstrutura';
import ImageModal from '../../components/ImageModal/ImageModal';
import { useState } from 'react';

export function Espaco() {
    const { innerWidth: width } = window;

    const acomodacoesData = [
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_azul.png?raw=true',
            titulo: 'Quarto Ágata Azul',
            subtitulo: 'Os Quartos de Ágata Azul são projetados para criar um refúgio de serenidade e comunicação. Inspirados na Ágata Azul, conhecida por suas propriedades de equilíbrio e harmonia, esses quartos são espaços onde a tranquilidade reina.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_azul.mp4?raw=true',
            right: width <= 450 ? '12%' : '19.5vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_verde.png?raw=true',
            titulo: 'Quarto Ágata Verde',
            subtitulo: 'Os Quartos de Ágata Verde são santuários de harmonia e equilíbrio. Inspirados nas energias revigorantes e curativas da Ágata Verde, esses quartos foram projetados para oferecer um espaço que nutre sua vitalidade e bem-estar',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_verde.mp4?raw=true',
            right: width <= 450 ? '8.9%' : '18.01vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_rosa.png?raw=true',
            titulo: 'Quarto Ágata Rosa',
            subtitulo: 'Os Quartos de Ágata Rosa são verdadeiras expressões de amor e carinho. Inspirados na suave e acolhedora energia da Ágata Rosa, esses quartos são projetados para oferecer um ambiente caloroso e afetuoso.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_rosa.mp4?raw=true',
            right: width <= 450 ? '11%' : '19vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_vermelha.png?raw=true',
            titulo: 'Quarto Ágata Vermelha',
            subtitulo: 'Os Quartos de Ágata Vermelha são projetados para serem um oásis de vitalidade e paixão. Inspirados na energia estimulante da Ágata Vermelha, esses quartos são um convite para um ambiente cheio de energia e calor.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_vermelha.mp4?raw=true',
            right: width <= 450 ? '2%' : '14.4vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_cinza.png?raw=true',
            titulo: 'Quarto Ágata Cinza',
            subtitulo: 'Os Quartos Ágata Cinza são um espaço cuidadosamente projetado para transmitir uma atmosfera de tranquilidade e equilíbrio. Inspirado nas qualidades da ágata cinza, estes quartos são uma expressão de serenidade e estabilidade.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_cinza.mp4?raw=true',
            right: width <= 450 ? '9%' : '18.3vw'
        },
        {
            srcFaixa: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/faixa_torta_roxa.png?raw=true',
            titulo: 'Quarto Ágata Roxa',
            subtitulo: 'Os Quartos Ágata Roxa são um santuário de tranquilidade, onde a energia suave e reconfortante da ágata roxa é celebrada. Este espaço convida à introspecção, à contemplação e à conexão espiritual.',
            srcVideo: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/video/quarto_agata_roxa.mp4?raw=true',
            right: width <= 450 ? '11%' : '19.1vw'
        }
        
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
                <>
                    <S.DivAcomodacao key={index}>
                        <S.FaixaAcomodacoes src={acomodacao.srcFaixa} />
                        <S.TituloAcomodacao style={{right: acomodacao.right}}>{acomodacao.titulo}</S.TituloAcomodacao>
                        <S.SubtituloAcomodacao>{acomodacao.subtitulo}</S.SubtituloAcomodacao>
                        <S.VideoAcomodacao controls autoPlay loop onClick={() => openModal(acomodacao.srcVideo)} >
                            <source src={acomodacao.srcVideo} />
                        </S.VideoAcomodacao>
                    </S.DivAcomodacao>
                    {isOpen && selectedImage === acomodacao.srcVideo && (
                        <ImageModal
                            imageUrl={acomodacao.srcVideo}
                            isOpen={isOpen}
                            closeModal={closeModal}
                            altText="Descrição da imagem"
                        />
                    )}
                </>
            ))}
            <DivMargem>
                <Separador />
                <S.TextoSection>Nossa estrutura</S.TextoSection>
                <SliderFotosEstrutura />
            </DivMargem>
        </>
    )
}