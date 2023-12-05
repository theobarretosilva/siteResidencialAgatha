import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './SliderFotos.css';

export const SliderFotos = () => {
    const { innerWidth: width } = window;
    const styleMobile = {width: '80vw', height: '18vh', zIndex: '0'};
    const styleDesktop = {width: '38vw', height: '43vh', zIndex: '0'};

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
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/frente_casa.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa3.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/recepcao.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa2.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entradaCasa/entradaCasa1.jpg?raw=true' /></SwiperSlide>
            </Swiper>
        </>
    )
}