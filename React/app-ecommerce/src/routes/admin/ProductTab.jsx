import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { getAllProducts } from './../../services/api';

const ProductTab = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    const goToAdd = () => {
        navigate("/admin/products/add")
    }

    useEffect(() => {
        getAllProducts().then(
            response => setProducts(response.data)
        )
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Tableau des produits</h1>
                <button className="btn btn-success" onClick={goToAdd}>Créer un produit</button>
            </div>
            <ul>
                {products.map(p => (<li key={p.id}>{p.title}</li>))}
            </ul>
        </>
    )
}

export default ProductTab