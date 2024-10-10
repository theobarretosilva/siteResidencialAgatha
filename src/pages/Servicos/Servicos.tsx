import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Servicos.styles'

export function Servicos() {
    const { innerWidth: width } = window;

    const servicosData = [
        {
            numero: '01',
            titulo: 'Cuidados de enfermagem personalizados',
            descricao: 'Oferecemos cuidados de enfermagem personalizados, adaptados às suas necessidades individuais. Nossa equipe de enfermagem é altamente treinada e dedicada a garantir que você receba os cuidados de saúde de que precisa.',
            tituloMaxWidth: '19.5vw',
            descricaoMarginTop: '',
            tituloMaxWidthMobile: '80vw'
        },
        {
            numero: '02',
            titulo: 'Atividades recreativas e sociais',
            descricao: 'Promovemos uma variedade de atividades recreativas e sociais para manter sua mente e corpo ativos e envolvidos. De exercícios à jogos em grupo, há sempre algo emocionante acontecendo em nosso residencial.',
            tituloMaxWidth: '16vw',
            descricaoMarginTop: '',
            tituloMaxWidthMobile: '80vw'
        },
        {
            numero: '03',
            titulo: 'Supervisão médica',
            descricao: 'Contamos com uma equipe médica experiente e qualificada, que compreende as complexidades do envelhecimento e das condições de saúde comuns nesta fase da vida.',
            tituloMaxWidth: '15vw',
            descricaoMarginTop: '6.3vh',
            tituloMaxWidthMobile: '80vw'
        },
        {
            numero: '04',
            titulo: 'Refeições deliciosas e nutritivas',
            descricao: 'Nossa equipe de cozinha prepara refeições deliciosas, nutritivas e personalizadas, levando em consideração suas preferências alimentares e necessidades dietéticas.',
            tituloMaxWidth: '16vw',
            descricaoMarginTop: '',
            tituloMaxWidthMobile: '80vw'
        },
        {
            numero: '05',
            titulo: 'Segurança e conforto',
            descricao: 'Criamos um ambiente seguro e acolhedor, adaptando nossas instalações para minimizar riscos e prevenir acidentes, permitindo que você viva com independência e tranquilidade.',
            tituloMaxWidth: '10vw',
            descricaoMarginTop: '',
            tituloMaxWidthMobile: '80vw'
        },
        {
            numero: '06',
            titulo: 'Assistência personalizada',
            descricao: 'Nossa equipe está disponível para atender às suas necessidades individuais e garantir que você receba a atenção e o cuidado que merece.',
            tituloMaxWidth: '11vw',
            descricaoMarginTop: '',
            tituloMaxWidthMobile: '90vw'
        }
    ]

    return(
        <>
            <S.ImgCasaInicial src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/foto_pagina_servicos.png?raw=true' />
            <DivMargem>
                <S.SectionStyled>
                    <S.TituloDivImgInicial>Nossos serviços, sua tranquilidade</S.TituloDivImgInicial>
                    <S.LinhaStyled>‎</S.LinhaStyled>
                    <S.PSubtituloInicial>
                        No nosso residencial, abraçamos com uma abordagem holística para o cuidado dos idosos. Nossa missão é proporcionar um ambiente acolhedor e amoroso para idosos semi-dependentes ou dependentes, bem como aqueles que enfrentam desafios de saúde crônicos.
                    </S.PSubtituloInicial>
                </S.SectionStyled>
            </DivMargem>
            <S.ImgElipseFundo style={{left: '0'}} src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d6dac166f92396f20bd2e16044f76c3abedf9f5b/src/assets/svg/elipse_clara_fundo.svg' />
            <S.FundoCor>
                <DivMargem>
                    <S.SectionBoxs>
                        {servicosData.map((servico, index) => (
                            <S.DivBox key={index}>
                                <S.NumeroDentroBoxCor>{servico.numero}</S.NumeroDentroBoxCor>
                                <S.TituloDentroBoxCor style={width <= 450 ? {maxWidth: `${servico.tituloMaxWidth}`} : {maxWidth: `${servico.tituloMaxWidthMobile}`}}>{servico.titulo}</S.TituloDentroBoxCor>
                                <S.PDescBox style={{marginTop: `${servico.descricaoMarginTop}`}}>{servico.descricao}</S.PDescBox>
                        </S.DivBox> 
                        ))}
                        
                    </S.SectionBoxs>
                    <S.ImgElipseFundo style={{right: '0', rotate: '180deg', marginTop: '50vh'}} src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d6dac166f92396f20bd2e16044f76c3abedf9f5b/src/assets/svg/elipse_clara_fundo.svg' />
                </DivMargem>
            </S.FundoCor>
        </>
    )
}