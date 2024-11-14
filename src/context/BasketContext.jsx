import { createContext, useState } from "react"
export const BASKET = createContext(null)
function BasketContext({ children }) {
    const [sebet, setSebet] = useState([])
    const [caunt, setCount] = useState(0)

    function addBasket(img, name, quantity, price, id) {
        const newArr = [...sebet]
        const el = newArr.find(i => i.id == id)
        if (!el) {
            setSebet([...sebet, { img, name, quantity, price, id }])
        }
        else {
            el.quantity += quantity
            setSebet(newArr)
        }

    }
    function removeFromBasket(id) {
        setSebet( sebet.filter(i => i.id != id))
    }
    return (
        <BASKET.Provider value={{
            sebet, setSebet, addBasket,removeFromBasket
        }}>
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext