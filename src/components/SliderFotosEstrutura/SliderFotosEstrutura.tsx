import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderFotosEstrutura.css'

export const SliderFotosEstrutura = () => {
    return(
        <>
            <h1 className="titulo">Sala de televisão</h1>
            <Swiper
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src='https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHYlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1611094016919-36b65678f3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' /></SwiperSlide>
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
                <SwiperSlide><img src='https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1585047402745-62c9c8cc3b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' /></SwiperSlide>
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
                <SwiperSlide><img src='https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1601654253194-260e0b6984f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1591383496652-db773e57b1d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' /></SwiperSlide>
            </Swiper>
        </>
    )
}