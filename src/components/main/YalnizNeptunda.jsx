import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function YalnizNeptunda() {
    return (
        <>
            <section className='container mx-auto px-4 sm:px-15 lg:px-20'>
                <div className='flex  resContainer '>
                    <div className='item-cat-image  flex justify-between  w-[30%] '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.custom-swiper-button2-next',
                                prevEl: '.custom-swiper-button2-prev',
                            }}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1282: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper w-full"
                        >
                            <SwiperSlide className='relative' >
                                <img className='w-full' src="/assets/meyve-terevez.jpg" alt="" />
                                <div className='absolute left-0 top-0 z-50  text-[#fff] p-[15px] bg-[#29292991] rounded-br-[15px]'>
                                    <h5 className='text-[18px] pb-[10px]'>Kateqoriyalar:</h5>
                                    <h5 className='text-[18px]'>Meyvə</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <img className='w-full' src="/assets/550x550reklam1.jpg" alt="" />
                                <div className='absolute left-0 top-0 z-50  text-[#fff] p-[15px] bg-[#29292991] rounded-br-[15px]'>
                                    <h5 className='text-[18px] pb-[10px]'>Kateqoriyalar:</h5>
                                    <h5 className='text-[18px]'>Səhər yeməkləri</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <img className='w-full' src="/assets/550x550reklam2.jpg" alt="" />
                                <div className='absolute left-0 top-0 z-50  text-[#fff] p-[15px] bg-[#29292991] rounded-br-[15px]'>
                                    <h5 className='text-[18px] pb-[10px]'>Kateqoriyalar:</h5>
                                    <h5 className='text-[18px]'>Yalnız Neptunda</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <img className='w-full' src="/assets/siyniyyat.jpg" alt="" />
                                <div className='absolute left-0 top-0 z-50  text-[#fff] p-[15px] bg-[#29292991] rounded-br-[15px]'>
                                    <h5 className='text-[18px] pb-[10px]'>Kateqoriyalar:</h5>
                                    <h5 className='text-[18px]'>NesCake</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <img className='w-full' src="/assets/cerez.jpg" alt="" />
                                <div className='absolute left-0 top-0 z-50  text-[#fff] p-[15px] bg-[#29292991] rounded-br-[15px]'>
                                    <h5 className='text-[18px] pb-[10px]'>Kateqoriyalar:</h5>
                                    <h5 className='text-[18px]'>Quru meyvələr</h5>
                                </div>
                            </SwiperSlide>
                            <div className="custom-swiper-button2-next"><IoIosArrowForward className='text-[#ff8300]' /> </div>
                            <div className="custom-swiper-button2-prev"><IoIosArrowBack className='text-[#ff8300]' /></div>
                        </Swiper>
                    </div>


                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.custom-swiper-button-next',
                            prevEl: '.custom-swiper-button-prev',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Navigation]} // Navigation burada
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='tabs-product'>
                                <img src="https://neptun.az/image/cache/webp/catalog/mvtturklimon-180x180.webp?v=9" alt="" />
                                <p>MVT.LIMON TURK EDED</p>
                                <h5>10.20₼</h5>
                                <div className='counter'>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>1</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <button className='addBasketBtn' >Səbətə at</button>
                            </div>

                        </SwiperSlide>
                        <div className="custom-swiper-button-next"><IoIosArrowForward className='text-[#ff8300]' /> </div>
                        <div className="custom-swiper-button-prev"><IoIosArrowBack className='text-[#ff8300]' /></div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default YalnizNeptunda