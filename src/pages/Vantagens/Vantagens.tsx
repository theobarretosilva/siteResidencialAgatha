import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Vantagens.styles'

export function Vantagens() {
    const advantagesData = [
        {
            backgroundImage: '../../src/assets/img/acompanhamento_nutricional.png',
            iconSrc: '../../src/assets/svg/icon_nutricionista.svg',
            text: 'Acompanhamento nutricional',
            secondText: 'Refeições inclusas e preparadas com carinho e acompanhamento nutricional',
        },
        {
            backgroundImage: '../../src/assets/img/servicos_inclusos_na_mensalidade.png',
            iconSrc: '../../src/assets/svg/icon_servicos_inclusos.svg',
            text: 'Serviços inclusos na mensalidade',
            secondText: 'Despesas fixas, como luz, água, gás, TV por assinatura, internet e telefone',
        },
        {
            backgroundImage: '../../src/assets/img/servicos_garantidos_por_nossa_equipe_multiprofissional.png',
            iconSrc: '../../src/assets/svg/icon_servicos_garantidos.svg',
            text: 'Serviços garantidos por nossa equipe multiprofissional',
            secondText: 'Limpeza da casa, lavanderia e serviços de segurança para a residência',
        },
        {
            backgroundImage: '../../src/assets/img/equipe_especializada.png',
            iconSrc: '../../src/assets/svg/icon_equipe_especializada.svg',
            text: 'Equipe especializada',
            secondText: 'Equipe especializada e preparada para cuidados com idosos',
        },
        {
            backgroundImage: '../../src/assets/img/cuidados_com_medicacao.png',
            iconSrc: '../../src/assets/svg/icon_cuidados_medicacao.svg',
            text: 'Cuidados com medicação',
            secondText: 'Cuidados com medicação e segurança vitalícia de idosos',
        },
        {
            backgroundImage: '../../src/assets/img/esforcos_fisicos_e_emocionais_para_ajudar.png',
            iconSrc: '../../src/assets/svg/icon_esforcos_fisicos.svg',
            text: 'Esforços físicos e emocionais para ajudar',
            secondText: 'Esforços físicos e emocionais para ajudar nos cuidados diários',
        }
    ];

    // const [alignSelf, setalignSelf] = useState(Array(6).fill('center'));
    // const [showSecondText, setShowSecondText] = useState(Array(6).fill(false));

    // const hoverAdvantage = (index: number) => {
    //     const newalignSelf = [...alignSelf];
    //     newalignSelf[index] = 'start';
    //     setalignSelf(newalignSelf);

    //     const newShowSecondText = [...showSecondText];
    //     newShowSecondText[index] = true;
    //     setShowSecondText(newShowSecondText);
    // }

    // const outAdvantage = (index: number) => {
    //     const newalignSelf = [...alignSelf];
    //     newalignSelf[index] = 'center';
    //     setalignSelf(newalignSelf);

    //     const newShowSecondText = [...showSecondText];
    //     newShowSecondText[index] = false;
    //     setShowSecondText(newShowSecondText);
    // }

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
                            style={{ backgroundImage: `url('${advantage.backgroundImage}')` }}
                        >
                            <S.IconBoxVantagem src={advantage.iconSrc} />
                            <S.TxtBoxVantagem>
                                {advantage.secondText}
                            </S.TxtBoxVantagem>
                        </S.BoxVantagem>
                    ))}
                </S.MainBoxVantagens>
            </DivMargem>
            
        </>
    )
}