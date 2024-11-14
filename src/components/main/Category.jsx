import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSubCategory } from '../../services/api'
import { BASKET } from '../../context/BasketContext'

function Category() {
  const { subId } = useParams()
  const [catProduct, setCatProduct] = useState(null)
  const { addBasket,sebet } = useContext(BASKET)

  useEffect(() => {
    getSubCategory(subId).then(res => {
      const newRes = res.products.map(item => ({
        ...item, quantity: 1
      }))
      setCatProduct(newRes)
    })
  }, [subId])

  function updateCounter(id, a) {
    const newArr = [...catProduct];
    const ele = newArr.find(i => i.id === id);
    let x = ele.quantity + a
    if (x > 0) {
      ele.quantity = x
    }
    setCatProduct(newArr);
    console.log(sebet);
    
  }
  return ( 
    <main className=''>
      <div className='container mx-auto px-4 sm:px-15 lg:px-20'>
        <div id='catFelxContainer' className='flex  justify-center gap-[15px]	flex-wrap ml-[350px]'>
          {
            catProduct ? catProduct.map((item, i) => {
              return (
                <Link to={`/product/${item.id}`} key={i} className='tabs-productCat w-[23%]   tabs-product'>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <h5>{item.price}</h5>
                  <div className='counter'>
                    <i onClick={(e) => {
                      e.preventDefault()
                      updateCounter(item.id, -1)
                    }}
                      className="fa-solid fa-minus"></i>
                    <span>{item.quantity}</span>
                    <i onClick={(e) => {
                      e.preventDefault()
                      updateCounter(item.id, 1)
                    }} className="fa-solid fa-plus"></i>
                  </div>
                  <button onClick={(e) => {
                    e.preventDefault()
                    addBasket(item.img, item.name, item.quantity, item.price,item.id)

                  }}
                    className='addBasketBtn' >Səbətə at</button>
                </Link>

              )
            }) :

              Array(10).fill("").map((_, i) => {
                return (
                  <div key={i} className="flex m-8 rounded shadow-md   animate-pulse h-96  tabs-productCat w-[23%]   tabs-product">
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