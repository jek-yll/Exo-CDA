import { useNavigate } from "react-router-dom"
import classes from './ProductItem.module.css'

const ProductItem = ({ product }) => {

    const navigate = useNavigate()

    const goToDetail = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div className={`col`}>
            <div className={`card ${classes.cardCustom}`}>
                <img src={product.image} alt="product" />
                <div className="card-body text-bg-dark">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Prix : {product.price} €</p>
                    <button
                        onClick={goToDetail}
                        className="btn btn-outline-light d-block ms-auto"
                    >
                        <i className="bi bi-eye"></i> Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem