import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <S.DivLogo>
                <S.ImgLogo src='../../src/assets/svg/logo_residencial_agatha_preto.svg' alt='Logo do residencial ágatha' />
                <S.TituloLogo>Residencial Ágatha</S.TituloLogo>
            </S.DivLogo>
            
        </S.Header>
    )
}