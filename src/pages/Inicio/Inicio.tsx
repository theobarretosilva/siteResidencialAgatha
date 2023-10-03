import * as S from './Inicio.styles'
import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderFotos } from '../../components/SliderFotos/SliderFotos';
import 'animate.css';
import { AutoMorphingText } from '../../components/AutoMorphingText/AutoMorphingText';

export function Inicio() {
    return(
        <>
            <S.ImgCasaInicial src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/casa_inicial_tela_inicial.jpg?raw=true' />
            <DivMargem>
                <section>
                    <S.TituloSectionInicial className='animate__animated animate__backInLeft'>
                        Com os nossos especialistas, você tem o cuidado que
                        <AutoMorphingText />
                    </S.TituloSectionInicial>
                    <S.PSubtituloInicial>
                        No nosso Residencial, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo. Sua jornada conosco será guiada pelos melhores especialistas, proporcionando-lhe a tranquilidade de saber que está recebendo a atenção e o cuidado que merece.
                    </S.PSubtituloInicial>
                </section>
                <Separador />
                <S.SectionEntreContato>
                    <S.DivSectionEntreContato>
                        <S.TituloSectionEntreContato>
                            Garanta um futuro tranquilo e confortável! 
                        </S.TituloSectionEntreContato>
                        <S.SubtituloSectionEntreContato>
                            Se você busca um ambiente que promova o equilíbrio e a renovação, o Residencial Ágatha é a escolha perfeita. Aqui, você encontrará um espaço para relaxar, se revitalizar e encontrar a harmonia em sua jornada conosco.
                        </S.SubtituloSectionEntreContato>
                        <S.BtnEntreContato>
                            Entre em contato conosco!
                        </S.BtnEntreContato>
                    </S.DivSectionEntreContato>
                    <SliderFotos />
                    <S.BtnEntreContatoMobile>Entre em contato conosco!</S.BtnEntreContatoMobile>
                </S.SectionEntreContato>
                <Separador style={{rotate:'180deg'}} />
                <S.SectionMVV>
                    <S.BoxMVV>
                        <S.ImgIconesMVV src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/missao_icone.svg' alt='Icone do símbolo missão' />
                        <S.TituloBoxMVV>Missão</S.TituloBoxMVV>
                        <S.SubtituloBoxMVV>
                            Promover o bem-estar e a qualidade de vida dos idosos, oferecendo cuidados de alta qualidade e um ambiente acolhedor que respeita a individualidade.
                        </S.SubtituloBoxMVV>
                    </S.BoxMVV>
                    <S.BoxMVV>
                        <S.ImgIconesMVV src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/visao_icone.svg' alt='Icone do símbolo visão' />
                        <S.TituloBoxMVV>Visão</S.TituloBoxMVV>
                        <S.SubtituloBoxMVV>
                            Ser um modelo de excelência em cuidados geriátricos, onde o envelhecimento é vivido com dignidade e alegria.
                        </S.SubtituloBoxMVV>
                    </S.BoxMVV>
                    <S.BoxMVV>
                        <S.ImgIconesMVV src='https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/valores_icone.svg' alt='Icone do símbolo valores' />
                        <S.TituloBoxMVV>Valores</S.TituloBoxMVV>
                        <S.SubtituloBoxMVV>
                            Respeito, compaixão, qualidade, integridade, colaboração
                        </S.SubtituloBoxMVV>
                    </S.BoxMVV>
                </S.SectionMVV>
            </DivMargem>
        </>
    )
}