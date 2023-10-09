import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderFotosEstrutura.css'

interface SliderFotosEstruturaProps {
    index: number,
    titulo: string,
    srcImages: string[]
}

export const SliderFotosEstrutura = ({index, titulo, srcImages}: SliderFotosEstruturaProps) => {
    return(
        <>
            <h1 className="titulo">{titulo}</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                key={index}
            >
                {srcImages.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Image ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}