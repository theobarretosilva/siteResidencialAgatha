import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <S.DivLogo>
                <S.ImgLogo src='../../src/assets/svg/logo_residencial_agatha_preto.svg' alt='Logo do residencial ágatha' />
                <S.TituloLogo>Residencial <p style={{color:'red'}}>Ágatha</p></S.TituloLogo>
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