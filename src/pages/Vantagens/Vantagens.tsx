import { DivMargem } from '../../components/DivMargem/DivMargem'
import * as S from './Vantagens.styles'

export function Vantagens() {
    return(
        <>
            <S.DivFaixaDegrade>
                <S.PDentroFaixa>Se você acredita que o Residencial Ágatha é a melhor escolha, mas tem dúvidas sobre o valor, veja as nossas vantagens:</S.PDentroFaixa>
            </S.DivFaixaDegrade>
            {/* ------------------------------------------------------------------------------------------------ */}
            <DivMargem>
                <S.MainBoxVantagens>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/acompanhamento_nutricional.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Acompanhamento nutricional</S.TxtBoxVantagem>
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/servicos_inclusos_na_mensalidade.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Serviços inclusos na mensalidade</S.TxtBoxVantagem>
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/servicos_garantidos_por_nossa_equipe_multiprofissional.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Serviços garantidos por nossa equipe multiprofissional</S.TxtBoxVantagem>
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/equipe_especializada.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Equipe especializada</S.TxtBoxVantagem>
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/cuidados_com_medicacao.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Cuidados com medicação</S.TxtBoxVantagem> 
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/esforcos_fisicos_e_emocionais_para_ajudar.jpg' />
                        <S.IconBoxVantagem src='../../src/assets/svg/icon_nutricionista.svg' />
                        <S.TxtBoxVantagem>Esforços físicos e emocionais para ajudar</S.TxtBoxVantagem>
                    </S.BoxVantagem>
                </S.MainBoxVantagens>
            </DivMargem>
            
        </>
    )
}