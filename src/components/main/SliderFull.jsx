import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useContext } from 'react';
import { DATA } from '../../context/DataContext';
function SliderFull() {
    const { discount } = useContext(DATA)
console.log(discount);

    return (
        <section className='container mx-auto px-4 sm:px-15 lg:px-20'>
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
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1282: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}

                modules={[Navigation,Autoplay]} // Navigation burada
                className="mySwiper"
            >
                {
                    discount ? discount.products.map((item, i) => {
                       return (
                            <SwiperSlide id={item.id}>
                                <div  className='tabs-product group max-h-[375px]'>
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <div className='flex items-center justify-center py-[10px]'>
                                        <div className=' group-hover:bg-[#ff8300] group-hover:text-[#fff] duration-200 translate-y-[-7px] bg-[#ffd9c0] rounded-full w-[38px] h-[36px] text-[12px] text-[#4e4e4e] flex items-center justify-center font-bold '>{item.discount}%</div>
                                        <div>
                                            <span className=' line-through text-[16px] text-[#999] '>{item.price}₼</span>
                                            <h6 className='text-[22px] font-[600]'>{item.totalPrice.toFixed(2)}₼</h6>
                                        </div>
                                    </div>
                                    <div className='counter'>
                                        <i class="fa-solid fa-minus"></i>
                                        <span>1</span>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                    <button className='addBasketBtn' >Səbətə at</button>
                                </div>

                            </SwiperSlide>
                        )
                    }) : ''
                }


                <div className="custom-swiper-button-next"><IoIosArrowForward className='text-[#ff8300]' /> </div>
                <div className="custom-swiper-button-prev"><IoIosArrowBack className='text-[#ff8300]' /></div>
            </Swiper>
        </section>
    )
}

export default SliderFull