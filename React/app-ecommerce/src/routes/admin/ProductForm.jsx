import { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import { addProduct } from "../../services/api.js";
import Form from "../../shared/Form"

const ProductForm = () => {

    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    const priceInputRef = useRef()

    const navigate = useNavigate()

    const submitHandler = () => {
        const title = titleInputRef.current.value
        const description = descriptionInputRef.current.value
        const price = priceInputRef.current.value

        addProduct({
            title: title,
            description: description,
            price: price
        }).then(
            navigate("/admin")
        )
    }

    return (
        <Form onSubmit={submitHandler}>
            <h1>Add Product </h1>
            <div className="mb-3">
                <label
                    htmlFor="title"
                    className="form-label"
                >
                    Nom du produit :
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="produit"
                    ref={titleInputRef}
                    required
                />
            </div>
            <div className="mb-3 form-floating">
                <textarea
                    className="form-control"
                    placeholder="description"
                    id="description"
                    style={{ height: "100px" }}
                    ref={descriptionInputRef}
                    required
                />
                <label htmlFor="description">Description :</label>
            </div>
            <div className="mb-3">
                <label
                    htmlFor="price"
                    className="form-label"
                >
                    Prix :
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="prix"
                    ref={priceInputRef}
                    required
                />
            </div>
            <button className="btn btn-primary">créer un nouveau produit</button>
        </Form>
    )
}

export default ProductForm