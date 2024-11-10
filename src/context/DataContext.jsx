import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getAllCategory, getSubCategory } from '../services/api';

export const DATA = createContext([])

function DataContext({ children }) {
    const [category, setCategory] = useState()


    useEffect(() => {
        getAllCategory().then(res=>setCategory(res))
    }, []);

    return (
        <DATA.Provider value={{
            category,
            setCategory, 
        }}>
            {children}
        </DATA.Provider>
    )
}

export default DataContext