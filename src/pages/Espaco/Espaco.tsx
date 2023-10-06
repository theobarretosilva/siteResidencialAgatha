import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Espaco.styles'

export function Espaco() {
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
            <S.FaixaAcomodacoes>
                <S.TituloAcomodacao>Quarto Ágata Azul</S.TituloAcomodacao>
            </S.FaixaAcomodacoes>
        </>
    )
}