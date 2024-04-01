import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Atividades.styles'

export function Atividades() {
    return(
        <>
            <S.DivImgInicial>
                <S.TituloDivImgInicial>Atividades para o Bem-Estar</S.TituloDivImgInicial>
            </S.DivImgInicial>
            <DivMargem>
                <S.TextoInicial>
                    No nosso residencial, reconhecemos a importância de manter uma vida ativa e enriquecedora, independentemente da idade. É por isso que oferecemos uma ampla variedade de atividades cuidadosamente planejadas para promover o bem-estar físico, mental e emocional de nossos residentes.
                </S.TextoInicial>
                <Separador />
                <S.SectionAtividade>
                    <S.PointSeparador src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/43099dd4b1ecfdcb8177b9062ac303944cb2579d/src/assets/svg/point-seta.svg' />
                    <S.ImgAtividade src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/atividades_fisicas.png?raw=true' />
                    <S.DivDescricaoAtividade>
                        <S.TituloAtividade>Atividades Físicas</S.TituloAtividade>
                        <S.DescricaoAtividade>
                            Nossas atividades físicas são projetadas para atender a todos os níveis de mobilidade. Desde exercícios suaves de alongamento até programas de fortalecimento muscular, incentivamos a vitalidade e a saúde física em um ambiente seguro e supervisionado.
                        </S.DescricaoAtividade>
                    </S.DivDescricaoAtividade>
                </S.SectionAtividade>
                <S.SeparadorLinha />
                <S.SectionAtividade>
                    <S.PointSeparador src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/43099dd4b1ecfdcb8177b9062ac303944cb2579d/src/assets/svg/point-seta.svg' />
                    <S.ImgAtividade src='https://images.unsplash.com/flagged/photo-1570551502611-c590dc45f644?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <S.DivDescricaoAtividade>
                        <S.TituloAtividade>Atividades Cognitivas</S.TituloAtividade>
                        <S.DescricaoAtividade>
                            A mente também merece exercício! Oferecemos jogos mentais, quebra-cabeças e atividades de estimulação cognitiva que desafiam o intelecto e mantêm a mente afiada.
                        </S.DescricaoAtividade>
                    </S.DivDescricaoAtividade>
                </S.SectionAtividade>
                <S.SeparadorLinha />
                <S.SectionAtividade>
                    <S.PointSeparador src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/43099dd4b1ecfdcb8177b9062ac303944cb2579d/src/assets/svg/point-seta.svg' />
                    <S.ImgAtividade src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/img_arteterapia.png?raw=true' />
                    <S.DivDescricaoAtividade>
                        <S.TituloAtividade>Arteterapia</S.TituloAtividade>
                        <S.DescricaoAtividade>
                            A criatividade é celebrada em nosso residencial. As atividades de arte, música e expressão oferecem oportunidades para nossos residentes explorarem seu lado artístico e compartilharem suas paixões criativas.
                        </S.DescricaoAtividade>
                    </S.DivDescricaoAtividade>
                </S.SectionAtividade>
                <S.SeparadorLinha />
                <S.SectionAtividade style={{marginBottom: '5vh'}}>
                    <S.PointSeparador src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/43099dd4b1ecfdcb8177b9062ac303944cb2579d/src/assets/svg/point-seta.svg' />
                    <S.ImgAtividade src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/terapia_ocupacional.png?raw=true' />
                    <S.DivDescricaoAtividade>
                        <S.TituloAtividade>Terapia Ocupacional</S.TituloAtividade>
                        <S.DescricaoAtividade>
                            Para aqueles que podem se beneficiar, oferecemos terapia ocupacional, que ajuda os residentes a manter ou recuperar habilidades para realizar atividades da vida diária.
                        </S.DescricaoAtividade>
                    </S.DivDescricaoAtividade>
                </S.SectionAtividade>
            </DivMargem>
        </>
    )
}