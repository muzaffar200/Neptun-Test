import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ data }) {

    const [menu, setMenu] = useState(false)
    const [cate, setCate] = useState(false)

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
            <div className='container mx-auto px-4 sm:px-15 lg:px-20'>
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


                                    {data ? (
                                        data.map((item, i) => (
                                            <li key={i} className='flex items-center justify-between categoryBarApList'>
                                                <img src={`https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg`} alt="" />
                                                <span >{item.categoryName}</span>
                                                <i class="fa-solid fa-chevron-right arrowRight"></i>
                                                <div>
                                                    <ul>
                                                        {item.subcategory?.map(
                                                            ele => <li> <Link to={`/category/${item.id}/${ele.id}`}>{ele.categoryName}</Link> </li>)
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
                            <div id='triIco' className='flex items-center'>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-arrows-rotate"></i>
                                <i id='cartA' class="fa-solid fa-cart-shopping ">
                                    <div id='basketMiqdar' className='flex items-center justify-center '>
                                        <span class="">0</span>
                                    </div>
                                </i>
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
                        {data ? (
                            data.map((item, i) => (
                                <li key={i} className='flex items-center'>
                                    <img src="https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg" alt="" />
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