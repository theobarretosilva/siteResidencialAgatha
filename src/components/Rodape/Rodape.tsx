import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Rodape.styles'

export const Rodape = () => {
    return(
        <S.Footer>
            <S.DivInicial>
                <section>
                    <LogoTexto />
                    <S.PDescricaoLogo>
                        No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo.
                    </S.PDescricaoLogo>
                    <S.DivRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='../../src/assets/svg/instagram.svg' />
                        </S.CircleRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='../../src/assets/svg/whatsapp.svg' />
                        </S.CircleRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='../../src/assets/svg/facebook.svg' />
                        </S.CircleRedesSociais>
                    </S.DivRedesSociais>
                </section>
                <S.SectionTopicos>
                    <S.TituloSection>O residencial</S.TituloSection>
                    <S.PSection style={{cursor:'pointer'}}>Início</S.PSection>
                    <S.PSection style={{cursor:'pointer'}}>Espaço</S.PSection>
                    <S.PSection style={{cursor:'pointer'}}>Serviços</S.PSection>
                    <S.PSection style={{cursor:'pointer'}}>Atividades</S.PSection>
                    <S.PSection style={{cursor:'pointer'}}>Vantagens</S.PSection>
                    <S.PSection style={{cursor:'pointer'}}>Contato</S.PSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Nossos serviços</S.TituloSection>
                    <S.PSection>Nossa missão é proporcionar um ambiente acolhedor e amoroso para idosos semi-dependentes ou dependentes, bem como aqueles que enfrentam desafios de saúde crônicos, como a doença de Alzheimer, derrame, doença de Parkinson e outras condições relacionadas.</S.PSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Informações de contato</S.TituloSection>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='../../src/assets/svg/map-pin.svg' />
                        <S.PSection>Rua Fernando Ferreira de Melo, 261 - Bom Abrigo</S.PSection>
                    </S.DivDentroInformacoes>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='../../src/assets/svg/mail.svg' />
                        <S.PSection>casageriatricaagatha@gmail.com</S.PSection>
                    </S.DivDentroInformacoes>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='../../src/assets/svg/phone.svg' />
                        <S.PSection>(48) 93287-4470</S.PSection>
                    </S.DivDentroInformacoes>
                </S.SectionTopicos>
            </S.DivInicial>
            <S.Linha />
            <S.DivCopyright>
                <S.PCopyright>© 2023 Residencial Ágatha</S.PCopyright>
            </S.DivCopyright>
        </S.Footer>
    )
}