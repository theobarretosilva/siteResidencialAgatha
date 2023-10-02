import { useState } from 'react'
import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Vantagens.styles'

export function Vantagens() {
    const advantagesData = [
        {
            backgroundImage: '../../src/assets/img/acompanhamento_nutricional.png',
            iconSrc: '../../src/assets/svg/icon_nutricionista.svg',
            text: 'Acompanhamento nutricional',
        },
        {
            backgroundImage: '../../src/assets/img/servicos_inclusos_na_mensalidade.png',
            iconSrc: '../../src/assets/svg/icon_servicos_inclusos.svg',
            text: 'Serviços inclusos na mensalidade',
        },
        {
            backgroundImage: '../../src/assets/img/servicos_garantidos_por_nossa_equipe_multiprofissional.png',
            iconSrc: '../../src/assets/svg/icon_servicos_garantidos.svg',
            text: 'Serviços garantidos por nossa equipe multiprofissional',
        },
        {
            backgroundImage: '../../src/assets/img/equipe_especializada.png',
            iconSrc: '../../src/assets/svg/icon_equipe_especializada.svg',
            text: 'Equipe especializada',
        },
        {
            backgroundImage: '../../src/assets/img/cuidados_com_medicacao.png',
            iconSrc: '../../src/assets/svg/icon_cuidados_medicacao.svg',
            text: 'Cuidados com medicação',
        },
        {
            backgroundImage: '../../src/assets/img/esforcos_fisicos_e_emocionais_para_ajudar.png',
            iconSrc: '../../src/assets/svg/icon_esforcos_fisicos.svg',
            text: 'Esforços físicos e emocionais para ajudar',
        }
    ];

    const [alignItems, setAlignItems] = useState(Array(6).fill('center'));
    const hoverAdvantage = (index: number) => {
        const newAlignItems = [...alignItems];
        newAlignItems[index] = 'start';
        setAlignItems(newAlignItems);
      }
    
      const outAdvantage = (index: number) => {
        const newAlignItems = [...alignItems];
        newAlignItems[index] = 'center';
        setAlignItems(newAlignItems);
      }

    return(
        <>
            <S.DivFaixaDegrade>
                <S.PDentroFaixa>Se você acredita que o Residencial Ágatha é a melhor escolha, mas tem dúvidas sobre o valor, veja as nossas vantagens:</S.PDentroFaixa>
            </S.DivFaixaDegrade>
            {/* ------------------------------------------------------------------------------------------------ */}
            <DivMargem>
                <S.MainBoxVantagens>
                    {advantagesData.map((advantage, index) => (
                        <S.BoxVantagem
                            key={index}
                            style={{ alignItems: alignItems[index], backgroundImage: `url('${advantage.backgroundImage}')` }}
                            onMouseEnter={() => hoverAdvantage(index)}
                            onMouseOut={() => outAdvantage(index)}
                        >
                            <S.IconBoxVantagem src={advantage.iconSrc} />
                            <S.TxtBoxVantagem
                            onMouseEnter={() => hoverAdvantage(index)}
                            onMouseOut={() => outAdvantage(index)}
                            >
                            {advantage.text}
                            </S.TxtBoxVantagem>
                        </S.BoxVantagem>
                    ))}
                </S.MainBoxVantagens>
            </DivMargem>
            
        </>
    )
}