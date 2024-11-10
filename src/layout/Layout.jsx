import React, { useState, useEffect } from 'react'; 
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer';

function Layout() {
 
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout