import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../services/api"

const ProductDetails = () => {

    const { id } = useParams()
    const [ product, setProduct ] = useState(null)
    // const [ myCart, setMyCart ] = useState([])

    useEffect(() => {
        getProductById(id).then(
            response => setProduct(response.data)
        )
    }, [id])


    const addToCart = () => {
      let myCart = JSON.parse(localStorage.getItem("myCart")) || [];
    
      if (myCart.length !== 0) {
        let productExists = false;
    
        myCart = myCart.map((p) => {
          if (p.id === product.id) {
            p.quantity += 1;
            productExists = true;
          }
          return p;
        });
    
        if (!productExists) {
          myCart.push({ ...product, quantity: 1 });
        }
      } else {
        myCart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("myCart", JSON.stringify(myCart));
    }

    return(
        <>
        <div className="card" style={{width: "15rem"}}>
            <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
                <p className="">{product?.price} €</p>
                <div>
                    <button className="btn btn-primary" onClick={addToCart} >Add to cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails