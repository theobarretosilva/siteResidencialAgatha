import * as S from './Inicio.styles'
import { DivMargem } from '../../components/Margem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Inicio() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Tempo em milissegundos
    };

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
                    <Slider {...settings}>
                        <div style={{width:'500px', height:'500px'}}>
                            <img style={{width:'500px', height:'500px'}} src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" />
                        </div>
                        <div style={{width:'500px', height:'500px'}}>
                            <img style={{width:'500px', height:'500px'}} src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" alt="" />
                        </div>
                        <div style={{width:'500px', height:'500px'}}>
                            <img style={{width:'500px', height:'500px'}} src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="" />
                        </div>
                        <div style={{width:'500px', height:'500px'}}>
                            <img style={{width:'500px', height:'500px'}} src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" />
                        </div>
                        <div style={{width:'500px', height:'500px'}}>
                            <img style={{width:'500px', height:'500px'}} src="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80" alt="" />
                        </div>
                    </Slider>
                </S.SectionEntreContato>
                <Separador style={{rotate:'180deg'}} />
            </DivMargem>
        </>
    )
}