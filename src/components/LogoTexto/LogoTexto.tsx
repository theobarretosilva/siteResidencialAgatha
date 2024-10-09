import * as S from './LogoTexto.styles'

export const LogoTexto = () => {
    return(
        <S.DivLogo>
            <S.ImgLogo src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/logo_preta_sem_texto.png?raw=true' alt='Logo do residencial ágatha' />
            <div>
                <S.TituloLogo>Residencial Geriátrico</S.TituloLogo>
                <S.ImgTxtAgatha src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/txt_agatha_lucy_rose.png?raw=true' />
            </div>
        </S.DivLogo>
    )
}