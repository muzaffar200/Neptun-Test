import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
    const {catId,subId}=useParams()
    console.log(subId,catId);
    
  return (
    <>

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

    </>
  )
}

export default Category