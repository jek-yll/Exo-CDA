import { useSelector } from "react-redux"
import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = useSelector(state => state.product.products)

    console.log(products);

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p, key) => (
                        <ProductItem key={key} product={p} />
                    ))
                }
            </tbody>
        </table>
     );
}
 
export default ProductList;