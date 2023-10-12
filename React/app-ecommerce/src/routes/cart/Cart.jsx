import { useState } from "react"
import CartItem from './CartItem';

const Cart = () => {

    const myCartString = localStorage.getItem("myCart")
    const myCartTab = JSON.parse(myCartString)
    const [myCart, setMyCart] = useState(myCartTab)
    const [total, setTotal] = useState(0)

    return (
        <>
            <h1>Mon Panier</h1>
            {myCart.length === 0 ? <p>Votre panier est vide</p> :
                <table className="table">
                    <thead>
                        <tr>
                            <th>Produit :</th>
                            <th>Quantité :</th>
                            <th>Prix :</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCart.map((p) => (
                            <CartItem
                                key={p.id}
                                p={p}
                                setMyCart={setMyCart}
                                setTotal={setTotal}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total :</th>
                            <th></th>
                            <th>{Math.floor((total * 100)) / 100}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            }
        </>
    )
}

export default Cart