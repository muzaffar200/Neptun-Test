import React, { useState, useEffect } from 'react'; 
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('https://neptunbk.vercel.app/categories')
        .then(res => res.json())
        .then(res => {
          setData(res);
        });
    }, []);
  
  return (
    <>
    <Header data={data}/>
    <Outlet/>
    </>
  )
}

export default Layout