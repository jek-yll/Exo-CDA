import { useEffect, useRef, useState } from "react"

const CartItem = ({ p }) => {

    let [product, setProduct] = useState(p)
    let [quantity, setQuantity] = useState(product.quantity)

    const quantityInputRef = useRef()
    const lessBtnRef = useRef()
    const moreBtnRef = useRef()

    useEffect(() => {
        quantityInputRef.current.value = quantity
    }, [quantity])

    const handlerLessBtn = () => {
        if ( quantity > 0 ) {
            setQuantity(quantity-1)  
        } 
    }

    const handlerMoreBtn = () => {
        setQuantity(quantity+1)
    }

    const handlerSupprBtn = () => {

    }

    return (
        <tr>
            <th>{p.title}</th>
            <td>
                <div>
                    <button 
                        onClick={handlerLessBtn}
                        ref={lessBtnRef}
                    >-</button>
                    <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        defaultValue={quantity}
                        ref={quantityInputRef}
                    />
                    <button 
                        onClick={handlerMoreBtn}
                        ref={moreBtnRef}
                    >+</button>
                </div>
            </td>
            <td>
                {Math.floor((quantity * p.price)*100)/100}
            </td>
            <td>
                <button onClick={handlerSupprBtn}>suppr</button>
            </td>
        </tr>
    )
}

export default CartItem