import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Slider2() {
  return (
    <>
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
    </>
  )
}

export default Slider2