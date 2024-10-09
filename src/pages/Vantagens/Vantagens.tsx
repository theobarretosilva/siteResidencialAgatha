import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Vantagens.styles'

export function Vantagens() {
    const advantagesData = [
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/acompanhamento_nutricional.jpg?raw=true',
            secondText: 'Refeições inclusas e preparadas com carinho e acompanhamento nutricional',
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/servi%C3%A7os_inclusos.jpg?raw=true',
            secondText: 'Despesas fixas, como luz, água, gás, internet e telefone',
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/servi%C3%A7os_garantidos.jpg?raw=true',
            secondText: 'Limpeza da casa, lavanderia e serviços de segurança para a residência',
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/equipe_especializada.jpg?raw=true',
            secondText: 'Equipe especializada e preparada para cuidados com idosos',
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/cuidados_com_medicacao.jpg?raw=true',
            secondText: 'Cuidados com medicação e segurança vitalícia de idosos',
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/esforcos_fisicos_para_ajudar.jpg?raw=true',
            secondText: 'Esforços físicos e emocionais para ajudar nos cuidados diários',
        },
        {
            backgroundImage: 'https://images.unsplash.com/photo-1717500252780-036bfd89f810?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            secondText: 'Recebemos residentes para centro dia e residência 24h'
        },
        {
            backgroundImage: 'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/vantagens/app_ronda.jpg?raw=true',
            secondText: 'Texto sobre app de rondas noturnas'
        }
    ];

    return(
        <>
            <S.ImgInicial src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/foto_pagina_vantagens.png?raw=true' />
            <DivMargem>
                <S.SectionStyled>
                    <S.TituloDivImgInicial>Se você acredita que o Residencial Ágatha é a melhor escolha, mas tem dúvidas sobre o valor, veja as nossas vantagens:</S.TituloDivImgInicial>
                </S.SectionStyled>
                <S.TextoSection>Nossas vantagens</S.TextoSection>
                <S.ImgSetaBaixo src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d6dac166f92396f20bd2e16044f76c3abedf9f5b/src/assets/svg/seta_baixo_preta.svg' />
                <S.ImgElipseFundo style={{left: '0'}} src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d6dac166f92396f20bd2e16044f76c3abedf9f5b/src/assets/svg/elipse_fundo.svg' />
                <S.MainBoxVantagens>
                    {advantagesData.map((advantage, index) => (
                        <S.DivVantagem>
                            <S.ImgVantagem src={advantage.backgroundImage} />
                            <S.BoxVantagem key={index}>
                                <S.TxtBoxVantagem>
                                    {advantage.secondText}
                                </S.TxtBoxVantagem>
                            </S.BoxVantagem>
                        </S.DivVantagem>
                    ))}
                </S.MainBoxVantagens>
            </DivMargem>
            
        </>
    )
}