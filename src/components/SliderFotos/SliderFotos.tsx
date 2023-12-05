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
                <SwiperSlide><img src='https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/recepcao.jpg?raw=true' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/entrada_casa.jpg?raw=true' /></SwiperSlide>
            </Swiper>
        </>
    )
}