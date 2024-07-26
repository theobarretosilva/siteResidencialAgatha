import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './SliderFotos.css';
import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';

export const SliderFotos = () => {
    const dataFotos = [
        'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/frente_casa.jpg?raw=true',
        'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa3.jpg?raw=true',
        'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/recepcao.jpg?raw=true',
        'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa2.jpg?raw=true',
        'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa1.jpg?raw=true'
    ];

    const { innerWidth: width } = window;
    const styleMobile = {width: '80vw', height: '18vh', zIndex: '0'};
    const styleDesktop = {width: '35vw', height: '45vh', zIndex: '0'};

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return(
        <>
            <Swiper
                effect={'cards'}
                modules={[EffectCards, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 1750,
                    disableOnInteraction: false,
                }}
                loop={true}
                style={width < 450 ? styleMobile : styleDesktop}
            >
                {dataFotos.map((foto, index) => (
                    <SwiperSlide key={index} onClick={() => openModal(foto)}>
                        <img src={foto} />
                    </SwiperSlide>
                ))} 
            </Swiper>
            {isOpen && (
                <ImageModal
                    imageUrl={selectedImage}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    altText="Descrição da imagem"
                />
            )}
        </>
    )
}