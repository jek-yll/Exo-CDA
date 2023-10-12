import { useRef, useState } from "react"
import CartItem from './CartItem';

const Cart = () => {

    const myCartString = localStorage.getItem("myCart")
    const myCartTab = JSON.parse(myCartString)
    const [ myCart, setMyCart ] = useState(myCartTab)

    return(
        <>
            <h1>Mon Panier</h1>
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
                        <CartItem key={p.id} p={p}/>
                    ))}
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        </>
    )
}

export default Cart