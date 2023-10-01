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
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/servicos_inclusos_na_mensalidade.jpg' />
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/servicos_garantidos_por_nossa_equipe_multiprofissional.jpg' />
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/equipe_especializada.jpg' />
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/cuidados_com_medicacao.jpg' /> 
                    </S.BoxVantagem>
                    <S.BoxVantagem>
                        <S.ImgDentroBoxVantagem src='../../src/assets/img/esforcos_fisicos_e_emocionais_para_ajudar.jpg' />
                    </S.BoxVantagem>
                </S.MainBoxVantagens>
            </DivMargem>
            
        </>
    )
}