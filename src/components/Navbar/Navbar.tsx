import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <LogoTexto />
            <S.Navegacao>
                <S.LinkNav to={'/inicio'}>Início</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/espaco'}>Espaço</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/servicos'}>Serviços</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/atividades'}>Atividades</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/vantagens'}>Vantagens</S.LinkNav>
                <S.LinkNav style={{ textDecoration: 'none' }} to={'/contato'}>Contato</S.LinkNav>
            </S.Navegacao>
        </S.Header>
    )
}