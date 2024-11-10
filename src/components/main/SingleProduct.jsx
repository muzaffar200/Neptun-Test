import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductId } from '../../services/api'
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { FaPlus, FaMinus, FaArrowsRotate } from "react-icons/fa6";

function SingleProduct() {
    const { productId } = useParams()
    const [soloProduct, setSoloProduct] = useState(null)
    useEffect(() => {
        getProductId(productId).then(res => setSoloProduct(res))
        console.log(soloProduct);

    }, [productId])

    return (
        <>
            <main>
                <div className='container mx-auto px-4 sm:px-15 lg:px-20'>

                    <div className='flex flex-wrap py-[70px]'>
                        <div className='md:w-[477px] md:h-[477px] w-full'>
                            <img className=' w-[100%] h-[100%] object-cover' src={soloProduct ? soloProduct.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZJyqqozDSEoAd2g9F-NNVU-UUEM0xrlLg&s"} alt="" />
                        </div>

                        <div className='md:ml-[40px]'>
                            <h5 className='text-[18px] font-bold capitalize'>{soloProduct && soloProduct.name}</h5>
                            <div className='flex my-[10px]'>
                                {Array(5).fill("").map(_ => <FaRegStar className='mr-[5px] w-[26px] h-[26px] text-[#ff8300]' />)}
                            </div>
                            <div className='text-[11px] text-[#7d7d7d] mb-[30px]'>
                                <a className=' mr-[5px]' href="">0şərh</a>
                                |
                                <a className=' ml-[5px]' href="">Şərh yaz</a>
                            </div>

                            <div className='text-[12px] text-[#525252] '>
                                <div className='mb-[10px]'>
                                    <span className='w-[129px] inline-block	'>İstehsalçı:</span> <span>CEREZ ALEMI</span>
                                </div>
                                <div className='mb-[10px]'>
                                    <span className='w-[129px] inline-block	'>Model:</span> <span>625441</span>
                                </div>
                                <div className='mb-[10px]'>
                                    <span className='w-[129px] inline-block	'>Bonus xalı ilə qiyməti:</span> <span>1555</span>
                                </div>
                                <div className='mb-[10px]'>
                                    <span className='w-[129px] inline-block	'>Mövcudluq:</span> <span>✓Anbarda</span>
                                </div>
                            </div>
                            <span className='font-bold text-[31px] text-[#ff8300] py-[25px] inline-block'>{soloProduct && soloProduct.price}₼</span>
                            <div className='flex items-center mb-[22px]'>
                                <FaMinus className='text-[#ff8300] ' />
                                <span className='mx-[25px] text-[12px]'>1</span>
                                <FaPlus className='text-[#ff8300] ' />
                            </div>
                            <div className='flex items-center'>
                                <button className='w-[120px] h-[33px] bg-[#ff8300] rounded-[18px] text-[#fff] text-[13px] ' >Səbətə At</button>
                                <FaRegHeart className='text-[#ff8300] mx-[13px]' />
                                <FaArrowsRotate className='text-[#ff8300]' />
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </>

    )
}

export default SingleProduct