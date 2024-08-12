import * as S from './Inicio.styles'
import { DivMargem } from '../../components/DivMargem/DivMargem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderFotos } from '../../components/SliderFotos/SliderFotos';
import 'animate.css';
import { AutoMorphingText } from '../../components/AutoMorphingText/AutoMorphingText';
import { useNavigate } from 'react-router-dom';

export function Inicio() {
    const dataMVV = [
        {
            icon: '../../src/assets/svg/simbolo_missao.svg',
            alt: 'Icone do símbolo missão',
            titulo: 'Missão',
            descricao: 'Promover o bem-estar e a qualidade de vida dos idosos, oferecendo cuidados de alta qualidade e um ambiente acolhedor que respeita a individualidade.'
        },
        {
            icon: '../../src/assets/svg/simbolo_visao.svg',
            alt: 'Icone do símbolo visão',
            titulo: 'Visão',
            descricao: 'Ser um modelo de excelência em cuidados geriátricos, onde o envelhecimento é vivido com dignidade e alegria.'
        },
        {
            icon: '../../src/assets/svg/simbolo_valores.svg',
            alt: 'Icone do símbolo valores',
            titulo: 'Valores',
            descricao: 'Respeito, compaixão, qualidade, integridade, colaboração'
        }
    ]

    const navigate = useNavigate();

    const goTelaContato = () => {
        navigate('/contato');
    }

    return(
        <>
            <S.ImgCasaInicial src='../../src/assets/img/casa_dourado_tela_inicial.png' />
            <DivMargem>
                <section style={{marginTop: '20vh', zIndex: '5'}}>
                    <S.TituloSectionInicial>
                        Com a nossa equipe 
                        <br />
                        você tem todo o
                        <br />
                        cuidado que
                        <AutoMorphingText />
                    </S.TituloSectionInicial>
                    <S.LinhaStyled>‎</S.LinhaStyled>
                    <S.PSubtituloInicial>
                        No nosso Residencial Geriátrico, você encontrará mais do que cuidados de saúde excepcionais - encontrará uma família comprometida em enriquecer sua vida e tornar cada dia significativo.
                    </S.PSubtituloInicial>
                    <S.DivSaibaMais>
                        <S.TxtSaibaMais>Saiba Mais</S.TxtSaibaMais>
                        <S.ImgSetaBaixo src='../../src/assets/svg/seta_baixo.svg' />
                    </S.DivSaibaMais>
                </section>
                <S.ImgElipseFundo style={{left: '0'}} src='../../src/assets/svg/elipse_fundo.svg' />
                <S.SectionEntreContato>
                    <S.DivSectionEntreContato>
                        <S.TituloSectionEntreContato>
                            Garanta um futuro tranquilo e confortável! 
                        </S.TituloSectionEntreContato>
                        <S.SubtituloSectionEntreContato>
                            Se você busca um ambiente que promova o equilíbrio e a renovação, o Residencial Ágatha é a escolha perfeita. Aqui, você encontrará um espaço para relaxar, se revitalizar e encontrar a harmonia em sua jornada conosco.
                        </S.SubtituloSectionEntreContato>
                        <S.BtnEntreContato onClick={goTelaContato}>
                            Entre em contato conosco!
                        </S.BtnEntreContato>
                    </S.DivSectionEntreContato>
                    <SliderFotos />
                    <S.BtnEntreContatoMobile onClick={goTelaContato}>Entre em contato conosco!</S.BtnEntreContatoMobile>
                </S.SectionEntreContato>
                <S.ImgElipseFundo style={{rotate: '180deg', marginTop: '250vh', right: '0'}} src='../../src/assets/svg/elipse_fundo.svg' />
                <S.SectionMVV>
                    {dataMVV.map((mvv, index) => (
                        <S.BoxMVV key={index}>
                            <S.ImgIconesMVV src={mvv.icon} alt={mvv.alt} />
                            <S.TituloBoxMVV>{mvv.titulo}</S.TituloBoxMVV>
                            <S.SubtituloBoxMVV>{mvv.descricao}</S.SubtituloBoxMVV>
                        </S.BoxMVV>
                    ))}
                </S.SectionMVV>
            </DivMargem>
        </>
    )
}