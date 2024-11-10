import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSubCategory } from '../../services/api'

function Category() {
  const { subId } = useParams()
  const [catProduct, setCatProduct] = useState(null)
  useEffect(() => {
    getSubCategory(subId).then(res => setCatProduct(res))
  }, [subId])

  return (
    <main className='bg-[#f2f2f2]'>
      <div className='container mx-auto px-4 sm:px-15 lg:px-20'>
        <div id='catFelxContainer' className='flex  justify-center gap-[15px]	flex-wrap ml-[350px]'>
          {
            catProduct ? catProduct.products.map((item, i) => {
              return (
                <Link to={`/product/${item.id}`} key={i} className='tabs-productCat w-[23%]   tabs-product'>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <h5>{item.price}</h5>
                  <div className='counter'>
                    <i class="fa-solid fa-minus"></i>
                    <span>1</span>
                    <i class="fa-solid fa-plus"></i>
                  </div>
                  <button className='addBasketBtn' >Səbətə at</button>
                </Link>

              )
            }) :

              Array(10).fill("").map((_, i) => {
                return (
                  <div className="flex m-8 rounded shadow-md   animate-pulse h-96  tabs-productCat w-[23%]   tabs-product">
                    <div className="h-48 rounded-t bg-gray-400"></div> {/* Üst hissə biraz açıq tünd */}
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300"> {/* Arxa plan daha açıq */}
                      <div className="w-full h-6 rounded bg-gray-400"></div> {/* İç bloklar daha açıq tünd */}
                      <div className="w-full h-6 rounded bg-gray-400"></div>
                      <div className="w-3/4 h-6 rounded bg-gray-400"></div>
                    </div>
                  </div>
                )
              })


          }

        </div>
        <div className='flex justify-center py-[35px]'>
          {
            catProduct && Array(catProduct.totalPages).fill("").map((_, i) => (
              <div key={i} className='flex items-center justify-center w-[30px] h-[30px] border cursor-pointer bg-[#fff] hover:bg-[#ff8300] mx-[3px]'>{i + 1}</div>)
            )

          }
        </div>
      </div>

    </main>
  )
}

export default Category