import * as S from './Contato.styles'

export function Contato() {
    return(
        <S.DivFlex>
            <S.ImagemAside src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/idoso_aside.jpg?raw=true' />
            <S.MainForm>
                <S.FaixaDegrade>
                    <S.TituloFaixa>Entre em contato conosco!</S.TituloFaixa>
                    <S.SubtituloFaixa>Estamos prontos para ouvir você e ajudar no que for necessário.</S.SubtituloFaixa>
                </S.FaixaDegrade>
                <S.Form>
                    <S.Input placeholder='Nome completo' type='text' />
                    <S.Input placeholder='E-mail' type='email' />
                    <S.InputMaskStyled mask="(99) 99999-9999" placeholder='Telefone para contato' type='tel' />
                    <S.TextArea placeholder='Conte-nos o que você procura' />
                    <S.BtnEnviar>Enviar</S.BtnEnviar>
                </S.Form>
            </S.MainForm>
        </S.DivFlex>
    )
}