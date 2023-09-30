import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './SliderFotos.css';

export const SliderFotos = () => {
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
            >
                <SwiperSlide><img style={{width: '100%'}} src='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' /></SwiperSlide>
                <SwiperSlide><img style={{width: '100%'}} src='https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80' /></SwiperSlide>
                <SwiperSlide><img style={{width: '100%'}} src='https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80' /></SwiperSlide>
                <SwiperSlide><img style={{width: '100%'}} src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' /></SwiperSlide>
                <SwiperSlide><img style={{width: '100%'}} src='https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80' /></SwiperSlide>
            </Swiper>
        </>
    )
}