import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/api"
import ProductItem from "./ProductItem"

const ProductsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then(
                response => setProducts(response.data)
            )
    }, [])

    return (
        <>
            {
                !products || products.length === 0 ? <p>Chargement des produits .....</p> :
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        {products.map(product =>
                            <ProductItem
                                key={product.id}
                                product={product}
                            />)}
                    </div>
            }
        </>
    )
}

export default ProductsList