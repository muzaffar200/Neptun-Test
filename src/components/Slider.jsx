import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Fade effekti üçün stil əlavə edirik
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

function Slider() {
    return (
        <>
            <Swiper
                effect="fade"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000, // Şəkillərin arasındakı fasilə
                    disableOnInteraction: false,
                }}
                speed={2000} // Keçidin sürətini tənzimləyirik
                fadeEffect={{
                    crossFade: true // Şəffaflığın tədricən itməsini təmin edir
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://neptun.az/image/cache/webp/catalog/08.09.2024/mainbanner65afaaf3ef334cb2f90f3816-1130x413.webp?v=9" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
