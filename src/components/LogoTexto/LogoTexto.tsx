import * as S from './LogoTexto.styles'

export const LogoTexto = () => {
    return(
        <S.DivLogo>
            <S.ImgLogo src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/logo_residencial_agatha_preto.svg' alt='Logo do residencial ágatha' />
            <div>
                <S.TituloLogo>Residencial geriátrico</S.TituloLogo>
                <S.TituloLogo style={{color:'#825810'}}>Ágatha</S.TituloLogo>
            </div>
        </S.DivLogo>
    )
}