import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaArrowRightLong } from "react-icons/fa6";

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
function Endirimler() {
    return (

        <section id='endirimler' className='' >
            <div  className='container mx-auto px-4 sm:px-15 lg:px-20 '>
                <div id='endirimSlider' className='pb-[10px] '>
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
                        className="mySwiper1"
                    >
                        <SwiperSlide className=''><img className='w-full' src="https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9" alt="" /></SwiperSlide>
                        <SwiperSlide className=''><img className='w-full' src="https://neptun.az/image/cache/webp/catalog/08.09.2024/mainbanner65afaaf3ef334cb2f90f3816-1130x413.webp?v=9" alt="" /></SwiperSlide>
                        <SwiperSlide className=''><img className='w-full' src="https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9" alt="" /></SwiperSlide>
                    </Swiper>
                </div>

                <div id='endirimCart' className='flex justify-between gap-[15px]'>
                    <div className=''>
                        <img src="/assets/50-azn-50-bonus-1143x7272-370x225.png" alt="" />
                        <div className='flex justify-between items-center bg-[#fff] p-[6px] '><span className='custom-989:text-[12px]'>50 Azn 50 Bonus</span><FaArrowRightLong className='text-[22px]' /></div>
                    </div>
                    <div className=''>
                        <img src="/assets/nes-cake-banner-sayt-370x225.webp" alt="" />
                        <div className='flex justify-between items-center bg-[#fff] p-[6px] '><span className='custom-989:text-[12px]'>50 Azn 50 Bonus</span><FaArrowRightLong className='text-[22px]' /></div>
                    </div>
                    <div className='custom-989:hidden'>
                        <img src="/assets/heftesonu-banner2-19-20-oktyabr-tess-cay-perwoll-370x225.webp" alt="" />
                        <div className='flex justify-between items-center bg-[#fff] p-[6px] '><span className='custom-989:text-[12px]'>50 Azn 50 Bonus</span><FaArrowRightLong className='text-[22px]' /></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Endirimler