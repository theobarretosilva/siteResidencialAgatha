import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Rodape.styles'

export const Rodape = () => {
    return(
        <S.Footer>
            <S.DivInicial>
                <S.SectionLogoDescricao>
                    <LogoTexto />
                    <S.PDescricaoLogo>
                        No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo.
                    </S.PDescricaoLogo>
                </S.SectionLogoDescricao>
                <S.SectionTopicos>
                    <S.TituloSection>Endereço</S.TituloSection>
                    <S.PSection>Rua Fernando Ferreira de Melo, 261 - Bom Abrigo</S.PSection>
                    <S.PSection>Florianópolis, SC - 88085-260</S.PSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Contato</S.TituloSection>
                    <S.PSection>contato@residencialagatha.com</S.PSection>
                    <S.PSection>(48) 93287-4470</S.PSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Fale conosco</S.TituloSection>

                </S.SectionTopicos>
            </S.DivInicial>
            <S.Linha />
            <S.DivCopyright>

            </S.DivCopyright>
        </S.Footer>
    )
}