import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getAllCategory, getFirstDiscount,  } from '../services/api';

export const DATA = createContext([])

function DataContext({ children }) {
    const [category, setCategory] = useState()
    const [discount, setDiscount] = useState(null)

    useEffect(() => {
        getAllCategory().then(res=>setCategory(res))
        getFirstDiscount().then(res=>setDiscount(res))
    }, []);

    return (
        <DATA.Provider value={{
            category,
            setCategory, 
            discount,
            setDiscount
        }}>
            {children}
        </DATA.Provider>
    )
}

export default DataContext