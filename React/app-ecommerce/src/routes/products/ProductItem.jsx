import { useNavigate } from "react-router-dom"

const ProductItem = ({ product }) => {

    const navigate = useNavigate()

    const goToDetail = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div className="d-flex my-3 justify-content-around">
            <h1>{product.title}</h1>
            <button onClick={goToDetail}>details</button>
        </div>

    )
}

export default ProductItem