import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <S.DivLogo>
                <S.ImgLogo src='../../src/assets/svg/logo_residencial_agatha_preto.svg' alt='Logo do residencial ágatha' />
                <S.DivTituloLogo>
                    <S.TituloLogo>Residencial</S.TituloLogo>
                    <S.TituloLogo style={{color:'#825810'}}>Ágatha</S.TituloLogo>
                </S.DivTituloLogo>
            </S.DivLogo>
            <S.Navegacao>
                <S.LinkNav to={'/inicio'}>Início</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/inicio'}>Espaço</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/inicio'}>Serviços</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/inicio'}>Atividades</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/inicio'}>Vantagens</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/inicio'}>Contato</S.LinkNav>
            </S.Navegacao>
        </S.Header>
    )
}