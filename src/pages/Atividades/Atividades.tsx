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
                {/* <S.SectionAtividade>
                    <S.SectionCor>
                        <S.ImgAtividade src='../../src/assets/img/atividades_fisicas.png' />
                        <S.DivDescricaoAtividade>
                            <S.TituloAtividade>Atividades Físicas</S.TituloAtividade>
                            <S.DescricaoAtividade>
                                Nossas atividades físicas são projetadas para atender a todos os níveis de mobilidade. Desde exercícios suaves de alongamento até programas de fortalecimento muscular, incentivamos a vitalidade e a saúde física em um ambiente seguro e supervisionado.
                            </S.DescricaoAtividade>
                        </S.DivDescricaoAtividade>
                    </S.SectionCor>
                </S.SectionAtividade> */}
                <S.SectionAtividade>
                    <S.PointSeparador src='../../src/assets/svg/point-seta.svg' />
                </S.SectionAtividade>
            </DivMargem>
        </>
    )
}