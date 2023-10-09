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
            </DivMargem>
        </>
    )
}