import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Navbar.styles'

export const Navbar = () => {
    return(
        <S.Header>
            <LogoTexto />
            <S.ImgIconMenu src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/7c76764445c72523c6b4eb6a170e55d59d26bead/src/assets/svg/icon_menu.svg' />
            <S.Navegacao>
                <S.LinkNav to={'inicio'}>Início</S.LinkNav>
                <S.LinkNav to={'espaco'}>Espaço</S.LinkNav>
                <S.LinkNav to={'servicos'}>Serviços</S.LinkNav>
                <S.LinkNav to={'atividades'}>Atividades</S.LinkNav>
                <S.LinkNav to={'vantagens'}>Vantagens</S.LinkNav>
                <S.LinkNav to={'contato'}>Contato</S.LinkNav>
            </S.Navegacao>
        </S.Header>
    )
}