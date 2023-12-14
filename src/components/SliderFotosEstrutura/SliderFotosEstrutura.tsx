import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderFotosEstrutura.css'
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

export const SliderFotosEstrutura = () => {
    const dataEstrutura = [
        {
            titulo: 'Sala de estar',
            imgs: [
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar1.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar2.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar3.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar4.jpg?raw=true'
            ],
        },
        {
            titulo: 'Espaço de leitura',
            imgs: [
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura1.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura2.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura3.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura4.jpg?raw=true'
            ]
        },
        {
            titulo: 'Jardim',
            imgs: [
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim1.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim2.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim3.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim4.jpg?raw=true',
            ]
        },
        {
            titulo: 'Refeitório',
            imgs: [
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio1.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio2.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio3.jpg?raw=true',
                'https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio4.jpg?raw=true'
            ]
        },
    ];

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
            {dataEstrutura.map((estrutura, index) => (
                <div key={index}>
                    <h1 className="titulo">{estrutura.titulo}</h1>
                    <Swiper
                        slidesPerView={3}
                        modules={[Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {estrutura.imgs.map((img, index) => (
                            <SwiperSlide onClick={() => openModal(img)} key={index}>
                                <img src={img} />
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
                </div>
            ))}
        </>
    )
}