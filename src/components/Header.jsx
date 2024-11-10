import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DATA } from '../context/DataContext'
import { LuTrash } from 'react-icons/lu'

function Header() {
    const { category } = useContext(DATA)
    const [menu, setMenu] = useState(false)
    const [cate, setCate] = useState(false)
    const [basketDisplay, setBasketDisplay] = useState(true)

    const iconData = [
        'https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg',
        'https://neptun.az/image/catalog/icon-menu/%C9%99t-v%C9%99-toyuq%20m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/Qastronom.svg',
        'https://neptun.az/image/catalog/icon-menu/%C9%99rzaq%20m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/%C5%9Eirniyyat-%C3%A7ay-v%C9%99%20q%C9%99hv%C9%99.svg',
        'https://neptun.az/image/catalog/icon-menu/%C4%B0%C3%A7kil%C9%99r.svg',
        'https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/U%C5%9Faq-m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/Yuyucu-vasit%C9%99l%C9%99r.svg',
        'https://neptun.az/image/catalog/icon-menu/Kosmetik-v%C9%99-gigiyenik.svg',
        'https://neptun.az/image/catalog/icon-menu/M%C9%99i%C5%9F%C9%99t-m%C9%99tb%C9%99x-v%C9%99-tekstil.svg',
        'https://neptun.az/image/catalog/icon-menu/Konselyariya.svg',
        'https://neptun.az/image/catalog/icon-menu/Heyvan-yeml%C9%99ri.svg',
        'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg  ',
        'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
        'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg'
    ]
    function openMenu() {
        setMenu(!menu)
        closedCate()
    }
    function closedMenu() {
        setMenu(false)

    }
    function openCate() {
        setCate(!cate)
        closedMenu()
    }
    function closedCate() {
        setCate(false)

    }
    return (
        <header >
            <div className='container mx-auto px-4 sm:px-15 lg:px-20 bg-[#fff]'>
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center boxx' >
                        <img id='logo' src="/src/assets/img/neptun logo.png" alt="" />
                        <div id='header-search' className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <i id='searchLogo' class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Məhsulu axtarın' />
                            </div>
                            <button>Axtar</button>
                        </div>
                    </div>
                    <div id='headerRight' className='flex items-center'>
                        <div id='test' className='flex items-center'>
                            <div id='flagAz' className='flex items-center'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png" alt="" />
                                <span>AZ</span>
                            </div>
                            <img id='call' src="./src/assets/img/Screenshot 2024-10-22 231621.png" alt="" />
                        </div>
                        <div id='barNavlist' onClick={openMenu} className='flex items-center justify-center'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='flex items-center'>
                <div id='cont' className='container mx-auto px-4 sm:px-15 lg:px-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center '>
                            <i id='barEnd' onClick={openCate} class="fa-solid fa-bars"></i>
                            <div id='ctegoryList'>
                                <div id='category'><i class="fa-solid fa-bars"></i> <span>Kateqoriyalar</span></div>
                                <ul id='categoryBarAp'>
                                    {category ? (
                                        category.map((item, i) => (
                                            <li key={i} className='flex items-center  categoryBarApList '>
                                                <img src={`${iconData[i]}`} alt="" />
                                                <span className='catName'>{item.categoryName}</span>
                                                <i class="fa-solid fa-chevron-right arrowRight  "></i>
                                                <div>
                                                    <ul>
                                                        {item.subcategory.map(
                                                            ele => <li className='catRootLi'> <NavLink className="catRootLink" to={`/category/${item.id}/${ele.id}`}>{ele.categoryName}</NavLink> </li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                        ))
                                    ) : 'Gozleyin'}
                                </ul>
                            </div>
                            <ul id='navList' className='flex items-center'>
                                <li>Ana səhifə</li>
                                <li>Haqqımızda</li>
                                <li>Aksiyalar</li>
                                <li>Supermarketlər</li>
                                <li>Karyera</li>
                                <li>Əlaqə</li>
                            </ul>
                        </div>
                        <div id='icons' className='flex items-center '>
                            <div className='flex items-center' >
                                <i id='lockIcon' class="fa-solid fa-lock"></i>
                                <span id='lock'>Giriş</span>
                                <a id='hesabEndicon' href="">
                                    <span id='textHesab'>Hesabım</span>
                                    <i id='navArrow' class="fa-solid fa-chevron-down"></i>
                                </a>
                            </div>
                            <div id='triIco' className='flex items-center relative'>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-arrows-rotate"></i>
                                <i onClick={() => { setBasketDisplay(!basketDisplay) }} id='cartA' className="fa-solid fa-cart-shopping cursor-pointer ">
                                    <div id='basketMiqdar' className='flex items-center justify-center '>
                                        <span class="">0</span>
                                    </div>
                                </i>
                                <div className={`w-[340px]  right-0 top-[32px] z-30  bg-[#fff] basketRes absolute ${basketDisplay ? 'hidden' : "block"} `}>
                                    <div className='    max-h-[300px]   overflow-y-scroll' >


                                        <hr className='text-[#000]' />
                                        <div className='flex items-center gap-[8px] h-[64px]'>
                                            <img className='w-[65px] h-[64px]' src="https://neptun.az/image/cache/catalog/50_vhed-oo-270x270.jpg?v=9" alt="" />
                                            <p className='text-[#555] text-[12px]'>MVT.MANDARIN YERLI KG</p>
                                            <p className='text-[13px]' >1x</p>
                                            <p className='text-[13px]' >11.50</p>
                                            <  LuTrash />
                                        </div>
                                        <hr className='text-[#000]' />        <div className='flex items-center gap-[8px] h-[64px]'>
                                            <img className='w-[65px] h-[64px]' src="https://neptun.az/image/cache/catalog/50_vhed-oo-270x270.jpg?v=9" alt="" />
                                            <p className='text-[#555] text-[12px]'>MVT.MANDARIN YERLI KG</p>
                                            <p className='text-[13px]' >1x</p>
                                            <p className='text-[13px]' >11.50</p>
                                            <  LuTrash />
                                        </div>
                                        <hr className='text-[#000]' />

                                    </div>
                                    <div className='w-full p-[10px]'>
                                        <span className=' !text-center !text-[#000] !text-[16px] font-bold !w-full inline-block pb-[10px]'>Ümumi məbləğ: <span className='!font-normal !text-[#000]  !text-[16px]'>2.15₼</span> </span>
                                        <div className='flex justify-between'>
                                            <button className='bg-[#555] py-[9px] px-[20px] inline-block rounded-[27px] text-[#fff] text-[14px]'>Səbət</button>
                                            <button className='bg-[#ff8300] py-[9px] px-[20px] inline-block rounded-[27px] text-[14px] text-[#fff]'>Sifarişi rəsmiləşdir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='barNavlist2' onClick={openMenu} className='flex items-center justify-center'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
                <div id='headerLinksResponsive' className={cate ? 'open' : 'closed'}>
                    <div className='flex items-center justify-end' >
                        <i onClick={closedCate} class="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                        {category ? (
                            category.map((item, i) => (
                                <li key={i} className='flex items-center'>
                                    <img src={`${iconData[i]}`} alt="" />
                                    <span>{item.categoryName}</span>

                                </li>
                            ))
                        ) : (
                            <li className='flex items-center'>
                                <img src="https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg" alt="" />
                                <span>Meyvə, tərəvəz, quru meyvə</span>
                            </li>
                        )}

                    </ul>
                </div>
            </nav>
            <img id='foto' src="https://neptun.az/image/footer_img/cash.svg" alt="" />
            <div id='navLinksResponsive' className={menu ? 'open' : 'closed'}>
                <div className='flex items-center justify-end' >
                    <i onClick={closedMenu} class="fa-solid fa-xmark"></i>
                </div>
                <ul >
                    <li >
                        <a href="">Ana səhifə</a>
                    </li>
                    <li className='flex items-center justify-between'>
                        <a href="">Haqqımızda</a>
                        <div className='flex items-center justify-center' id='plus'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </li>
                    <li className='flex items-center justify-between'>
                        <a href="">Aksiyalar</a>
                        <div className='flex items-center justify-center' id='plus'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </li>
                    <li className='flex items-center justify-between'>
                        <a href="">Supermarketlər</a>
                        <div className='flex items-center justify-center' id='plus'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </li>
                    <li className='flex items-center justify-between'>
                        <a href="">Karyera</a>
                        <div className='flex items-center justify-center' id='plus'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </li>
                    <li className='flex items-center justify-between'>
                        <a href="">Əlaqə</a>
                    </li>
                </ul>

            </div>
        </header >
    )
}

export default Header