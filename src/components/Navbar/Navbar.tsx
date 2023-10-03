import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Navbar.styles'
// import { AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
    return(
        <S.Header>
            <LogoTexto />
            {/* <AiOutlineMenu /> */}
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