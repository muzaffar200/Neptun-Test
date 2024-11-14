import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import DataContext from './context/DataContext.jsx'
import BasketContext from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <DataContext>
                <BasketContext>
                    <App />
                </BasketContext>
            </DataContext>
        </BrowserRouter>
    </>

)