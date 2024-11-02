import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function YalnizNeptunda() {
    return (
        <>
            <section className='container mx-auto px-4 sm:px-15 lg:px-20'>
                <div className='flex  resContainer '>
                    <div className='item-cat-image  flex justify-between'>
                        <img className='imgEnd' src="./src/assets/img/meyve-terevez.jpg" alt="" />
                        <img className='resImg resImg1' src="./src/assets/img/meyve-terevez.jpg" alt="" />
                        <img className='resImg resImg2' src="./src/assets/img/meyve-terevez.jpg" alt="" />

                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
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
                        modules={[Pagination]}
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

                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default YalnizNeptunda