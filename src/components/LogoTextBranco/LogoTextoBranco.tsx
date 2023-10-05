import * as S from './LogoTextoBranco.styles'

export const LogoTextoBranco = () => {
    return(
        <S.DivLogo>
            <S.ImgLogo src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/95bd29bb86dde2f79b85911da61d58cb6bd8e26f/src/assets/svg/logo_residencial_agatha.svg' alt='Logo do residencial ágatha' />
            <div>
                <S.TituloLogo>Residencial geriátrico</S.TituloLogo>
                <S.TituloLogo style={{color:'#825810'}}>Ágatha</S.TituloLogo>
            </div>
        </S.DivLogo>
    )
}