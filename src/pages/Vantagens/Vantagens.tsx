import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Vantagens.styles'

export function Vantagens() {
    const advantagesData = [
        {
            backgroundImage: '../../src/assets/img/vantagens/acompanhamento_nutricional.jpg',
            secondText: 'Refeições inclusas e preparadas com carinho e acompanhamento nutricional',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/serviços_inclusos.jpg',
            secondText: 'Despesas fixas, como luz, água, gás, internet e telefone',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/serviços_garantidos.jpg',
            secondText: 'Limpeza da casa, lavanderia e serviços de segurança para a residência',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/equipe_especializada.jpg',
            secondText: 'Equipe especializada e preparada para cuidados com idosos',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/cuidados_com_medicacao.jpg',
            secondText: 'Cuidados com medicação e segurança vitalícia de idosos',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/esforcos_fisicos_para_ajudar.jpg',
            secondText: 'Esforços físicos e emocionais para ajudar nos cuidados diários',
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/esforcos_fisicos_para_ajudar.jpg',
            secondText: 'Recebemos residentes para centro dia e residência 24h'
        },
        {
            backgroundImage: '../../src/assets/img/vantagens/app_ronda.jpg',
            secondText: 'Texto sobre app de rondas noturnas'
        }
    ];

    return(
        <>
            <S.ImgInicial src='../../src/assets/img/foto_pagina_vantagens.png' />
            <DivMargem>
                <S.SectionStyled>
                    <S.TituloDivImgInicial>Se você acredita que o Residencial Ágatha é a melhor escolha, mas tem dúvidas sobre o valor, veja as nossas vantagens:</S.TituloDivImgInicial>
                </S.SectionStyled>
                <S.TextoSection>Nossas vantagens</S.TextoSection>
                <S.ImgSetaBaixo src='../../src/assets/svg/seta_baixo_preta.svg' />
                <S.ImgElipseFundo style={{left: '0'}} src='../../src/assets/svg/elipse_fundo.svg' />
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