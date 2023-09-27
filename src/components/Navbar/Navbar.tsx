import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <LogoTexto />
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