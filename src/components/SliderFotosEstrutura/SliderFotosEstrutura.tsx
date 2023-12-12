import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderFotosEstrutura.css'

export const SliderFotosEstrutura = () => {
    return(
        <>
            <h1 className="titulo">Sala de estar</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar1.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar2.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar3.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/salaDeEstar/salaDeEstar4.jpg?raw=true' /></SwiperSlide>
            </Swiper>
            <h1 className="titulo">Espaço de leitura</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura1.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura2.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura3.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/espacoDeLeitura/espacoDeLeitura4.jpg?raw=true' /></SwiperSlide>
            </Swiper>
            <h1 className="titulo">Jardim</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim1.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim2.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim3.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/jardim/jardim4.jpg?raw=true' /></SwiperSlide>
            </Swiper>
            <h1 className="titulo">Refeitório</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio1.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio2.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio3.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/refeitorio/refeitorio4.jpg?raw=true' /></SwiperSlide>
            </Swiper>
        </>
    )
}