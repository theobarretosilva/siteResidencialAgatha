import { DivMargem } from '../../components/DivMargem/DivMargem'
import { Separador } from '../../components/Separador/Separador'
import * as S from './Servicos.styles'

export function Servicos() {
    const servicosData = [
        {
            cor: '#3888FF',
            numero: '01',
            titulo: 'Cuidados de enfermagem personalizados',
            descricao: 'Oferecemos cuidados de enfermagem personalizados, adaptados às suas necessidades individuais. Nossa equipe de enfermagem é altamente treinada e dedicada a garantir que você receba os cuidados de saúde de que precisa.'
        },
        {
            cor: '#20AA68',
            numero: '02',
            titulo: 'Atividades recreativas e sociais',
            descricao: 'Promovemos uma variedade de atividades recreativas e sociais para manter sua mente e corpo ativos e envolvidos. De exercícios a passeios culturais, há sempre algo emocionante acontecendo em nosso residencial.'
        },
        {
            cor: '#009C82',
            numero: '03',
            titulo: 'Supervisão médica geriátrica',
            descricao: 'Contamos com uma equipe médica experiente e qualificada, especializada em geriatria, que compreende as complexidades do envelhecimento e das condições de saúde comuns nesta fase da vida.'
        },
        {
            cor: '#FF9C41',
            numero: '04',
            titulo: 'Refeições deliciosas e nutritivas',
            descricao: 'Nossa equipe de cozinha prepara refeições deliciosas, nutritivas e personalizadas, levando em consideração suas preferências alimentares e necessidades dietéticas.'
        },
        {
            cor: '#FF7979',
            numero: '05',
            titulo: 'Segurança e conforto',
            descricao: 'Criamos um ambiente seguro e acolhedor, adaptando nossas instalações para minimizar riscos e prevenir acidentes, permitindo que você viva com independência e tranquilidade.'
        },
        {
            cor: '#A753A3',
            numero: '06',
            titulo: 'Assistência personalizada',
            descricao: 'Nossa equipe está disponível para atender às suas necessidades individuais e garantir que você receba a atenção e o cuidado que merece.'
        }
    ]

    return(
        <>
            <S.DivImgInicial>
                <S.TituloDivImgInicial>Nossos Serviços, Sua Tranquilidade</S.TituloDivImgInicial>
            </S.DivImgInicial>
            <DivMargem>
                <S.DivTextoInicial>
                    <S.TextoInicial>
                        No nosso residencial, abraçamos com uma abordagem holística para o cuidado dos idosos. Nossa missão é proporcionar um ambiente acolhedor e amoroso para idosos semi-dependentes ou dependentes, bem como aqueles que enfrentam desafios de saúde crônicos, como a doença de Alzheimer, derrame, doença de Parkinson e outras condições relacionadas.
                    </S.TextoInicial>
                </S.DivTextoInicial>
                <Separador />
                <S.SectionBoxs>
                    {servicosData.map((servico, index) => (
                        <S.DivBox key={index}>
                           <S.DivCorDentroBox style={{backgroundColor: servico.cor}}>
                               <S.NumeroDentroBoxCor>{servico.numero}</S.NumeroDentroBoxCor>
                               <S.TituloDentroBoxCor>{servico.titulo}</S.TituloDentroBoxCor>
                           </S.DivCorDentroBox>
                           <S.PDescBox>{servico.descricao}</S.PDescBox>
                       </S.DivBox> 
                    ))}
                    
                </S.SectionBoxs>
            </DivMargem>
        </>
    )
}