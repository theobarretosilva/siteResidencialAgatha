import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Atividades.styles'
import '../../assets/img/arteterapia.jpg'

export function Atividades() {

    const atividadesData = [
        {
            src: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/atividades_fisicas.jpg?raw=true',
            titulo: 'Atividades Físicas',
            descricao: 'Nossas atividades físicas são projetadas para atender a todos os níveis de mobilidade. Desde exercícios suaves de alongamento até programas de fortalecimento muscular, incentivamos a vitalidade e a saúde física em um ambiente seguro e supervisionado.'
        },
        {
            src: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/atividades_cognitivas.jpg?raw=true',
            titulo: 'Atividades Cognitivas',
            descricao: 'A mente também merece exercício! Oferecemos jogos mentais, quebra-cabeças e atividades de estimulação cognitiva que desafiam o intelecto e mantêm a mente afiada.'
        },
        {
            src: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/arteterapia.jpg?raw=true',
            titulo: 'Arteterapia',
            descricao: 'A criatividade é celebrada em nosso residencial. As atividades de arte, música e expressão oferecem oportunidades para nossos residentes explorarem seu lado artístico e compartilharem suas paixões criativas.'
        },
        {
            src: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/terapia_ocupacional.png?raw=true',
            titulo: 'Musicoterapia',
            descricao: 'Oferecemos musicoterapia, que utiliza a música para promover bem-estar emocional, cognitivo e físico. Nossos residentes podem expressar emoções, melhorar a memória e encontrar alegria na interação musical.'
        }
    ]

    return(
        <>
            <S.ImgInicial src='../../src/assets/img/foto_pagina_atividades.png' />
            <DivMargem>
                <S.SectionStyled>
                    <S.TituloDivImgInicial>Atividades para o bem-estar</S.TituloDivImgInicial>
                    <S.LinhaStyled>‎</S.LinhaStyled>
                    <S.PSubtituloInicial>
                        No nosso residencial, reconhecemos a importância de manter uma vida ativa e enriquecedora, independentemente da idade. É por isso que oferecemos uma ampla variedade de atividades cuidadosamente planejadas para promover o bem-estar físico, mental e emocional de nossos residentes.
                    </S.PSubtituloInicial>
                </S.SectionStyled>
                <S.ImgElipseFundo style={{left: '0'}} src='../../src/assets/svg/elipse_fundo.svg' />
                <S.DivSectionAtividades>
                    {atividadesData.map((atividade, index) => (
                        <S.SectionAtividade key={index}>
                            <S.ImgAtividade src={atividade.src} />
                            <S.DivDescricaoAtividade>
                                <S.TituloAtividade>{atividade.titulo}</S.TituloAtividade>
                                <S.DescricaoAtividade>{atividade.descricao}</S.DescricaoAtividade>
                            </S.DivDescricaoAtividade>
                        </S.SectionAtividade>
                    ))}
                </S.DivSectionAtividades> 
            </DivMargem>
        </>
    )
}