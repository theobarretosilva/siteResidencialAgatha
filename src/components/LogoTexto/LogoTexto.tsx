import * as S from './LogoTexto.styles'

export const LogoTexto = () => {
    return(
        <S.DivLogo>
            <S.ImgLogo src='../../src/assets/svg/logo_residencial_agatha_preto.svg' alt='Logo do residencial ágatha' />
            <S.DivTituloLogo>
                <S.TituloLogo>Residencial</S.TituloLogo>
                <S.TituloLogo style={{color:'#825810'}}>Ágatha</S.TituloLogo>
            </S.DivTituloLogo>
        </S.DivLogo>
    )
}