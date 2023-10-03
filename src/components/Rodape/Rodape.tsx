import { LogoTexto } from '../LogoTexto/LogoTexto'
import * as S from './Rodape.styles'

export const Rodape = () => {
    return(
        <S.Footer>
            <S.DivInicial>
                <section>
                    <LogoTexto />
                    <S.PDescricaoLogo>
                        No Residencial Ágatha, além de cuidados de saúde, você encontrará uma família comprometida em enriquecer sua vida e tornar cada dia mais significativo.
                    </S.PDescricaoLogo>
                    <S.DivRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/instagram.svg' />
                        </S.CircleRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/whatsapp.svg' />
                        </S.CircleRedesSociais>
                        <S.CircleRedesSociais>
                            <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/facebook.svg' />
                        </S.CircleRedesSociais>
                    </S.DivRedesSociais>
                </section>
                <S.SectionTopicos>
                    <S.TituloSection>O residencial</S.TituloSection>
                    <S.NavlinkSection to={'inicio'} style={{marginTop: '1em'}}>Início</S.NavlinkSection>
                    <S.NavlinkSection to={'espaco'}>Espaço</S.NavlinkSection>
                    <S.NavlinkSection to={'servicos'}>Serviços</S.NavlinkSection>
                    <S.NavlinkSection to={'atividades'}>Atividades</S.NavlinkSection>
                    <S.NavlinkSection to={'vantagens'}>Vantagens</S.NavlinkSection>
                    <S.NavlinkSection to={'contato'}>Contato</S.NavlinkSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Nossos serviços</S.TituloSection>
                    <S.PSection>Nosso serviço é proporcionar um ambiente acolhedor e amoroso para idosos semi-dependentes ou dependentes, bem como aqueles que enfrentam desafios de saúde crônicos, como a doença de Alzheimer, derrame, doença de Parkinson e outras condições relacionadas.</S.PSection>
                </S.SectionTopicos>
                <S.SectionTopicos>
                    <S.TituloSection>Informações de contato</S.TituloSection>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/map-pin.svg' />
                        <S.PSection>Rua Fernando Ferreira de Melo, 261 - Bom Abrigo</S.PSection>
                    </S.DivDentroInformacoes>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/mail.svg' />
                        <S.PSection>residencialagatha@gmail.com</S.PSection>
                    </S.DivDentroInformacoes>
                    <S.DivDentroInformacoes>
                        <S.ImgRedesSociais src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/phone.svg' />
                        <S.PSection>(48) 3307-7295</S.PSection>
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