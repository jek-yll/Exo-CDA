import { useEffect, useRef, useState } from "react"

const CartItem = ({ p, setMyCart, setTotal }) => {

    const [product, setProduct] = useState(p)
    const [quantity, setQuantity] = useState(product.quantity)

    const myCart = JSON.parse(localStorage.getItem("myCart"))

    const quantityInputRef = useRef()
    const lessBtnRef = useRef()
    const moreBtnRef = useRef()

    useEffect(() => {
        quantityInputRef.current.value = quantity
        setProduct({ ...product, quantity: +quantity })
    }, [quantity])

    useEffect(() => {
        const myCart = JSON.parse(localStorage.getItem("myCart")) || [];

        const updatedCart = myCart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity };
            }
            return item;
        });

        localStorage.setItem("myCart", JSON.stringify(updatedCart));
    }, [quantity, product.id]);

    useEffect(() => {
        const newTotal = myCart.reduce((sum, item) => {
            const productTotal = item.price * item.quantity;

            return sum + productTotal;
        }, 0);
        setTotal(newTotal)

    }, [myCart])

    const handlerLessBtn = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            // console.log(myCart) 
        }
    }

    const handlerMoreBtn = () => {
        setQuantity(quantity + 1)
    }

    const handlerSupprBtn = () => {
        const newCart = myCart.filter(p => p.id !== product.id)
        localStorage.setItem("myCart", JSON.stringify(newCart))
        setMyCart(newCart)
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
                {Math.floor((quantity * p.price) * 100) / 100}
            </td>
            <td>
                <button onClick={handlerSupprBtn}>suppr</button>
            </td>
        </tr>
    )
}

export default CartItem