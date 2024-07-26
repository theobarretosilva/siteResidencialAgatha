import * as S from './LogoTexto.styles'

export const LogoTexto = () => {
    return(
        <S.DivLogo>
            <S.ImgLogo src='../../src/assets/img/logo_preta_sem_texto.png' alt='Logo do residencial ágatha' />
            <div>
                <S.TituloLogo>Residencial Geriátrico</S.TituloLogo>
                <S.ImgTxtAgatha src='../../src/assets/img/txt_agatha_lucy_rose.png' />
            </div>
        </S.DivLogo>
    )
}