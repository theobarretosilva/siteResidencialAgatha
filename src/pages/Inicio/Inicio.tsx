import * as S from './Inicio.styles'
import { DivMargem } from '../../components/Margem/DivMargem'
import { Separador } from '../../components/Separador/Separador'

export function Inicio() {
    return(
        <>
            <S.ImgCasaInicial src='../../src/assets/img/casa_inicial_tela_inicial.jpg' />
            <DivMargem>
                <section>
                    <S.TituloSectionInicial>
                        O cuidado que você merece, com os nossos melhores
                        <S.PTituloSectionInicial>Especialistas</S.PTituloSectionInicial>
                    </S.TituloSectionInicial>
                    <S.PSubtituloInicial>
                        No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo. Sua jornada conosco será guiada pelos melhores especialistas, proporcionando-lhe a tranquilidade de saber que está recebendo a atenção e o cuidado que merece.
                    </S.PSubtituloInicial>
                </section>
                <Separador />
                <S.SectionEntreContato>
                    <S.DivSectionEntreContato>
                        <S.TituloSectionEntreContato>
                            Garanta um futuro tranquilo e<br />confortável! 
                        </S.TituloSectionEntreContato>
                        <S.SubtituloSectionEntreContato>
                            No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo.
                        </S.SubtituloSectionEntreContato>
                        <S.BtnEntreContato>
                            Entre em contato conosco!
                        </S.BtnEntreContato>
                    </S.DivSectionEntreContato>
                </S.SectionEntreContato>
                <Separador style={{rotate:'180deg'}} />
            </DivMargem>
        </>
    )
}