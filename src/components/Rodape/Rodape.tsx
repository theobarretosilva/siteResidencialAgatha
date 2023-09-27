import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Rodape.styles'

export const Rodape = () => {
    return(
        <S.Footer>
            <S.DivInicial>
                <S.DivLogoDescricao>
                    <LogoTexto />
                    <S.PDescricaoLogo>
                        No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo.
                    </S.PDescricaoLogo>
                </S.DivLogoDescricao>
            </S.DivInicial>
            <S.Linha />
            <S.DivCopyright>

            </S.DivCopyright>
        </S.Footer>
    )
}