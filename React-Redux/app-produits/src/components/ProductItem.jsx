import { useDispatch } from "react-redux"
import { deleteProduct, updateProduct } from "./Products.Slice"
import { useRef, useState } from "react"

const ProductItem = ({ product }) => {
    const titleRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()

    const prevTitle = product.title
    const prevPrice = product.price

    const [updateMode, setupdateMode] = useState(false)

    const handlerUpdateMode = () => {
        setupdateMode(!updateMode)
    }

    const handlerSave = () => {
        dispatch(
            updateProduct(
                {
                    id: product.id,
                    title: titleRef.current.value,
                    price: priceRef.current.value
                }
            ))
        setupdateMode(!updateMode)
    }

    console.log(prevPrice);

    const handlerAbort = () => {
        titleRef.current.value = prevTitle
        priceRef.current.value = prevPrice
        setupdateMode(!updateMode)
    }
 
    return (
        <tr>
            <td scope="row">
                <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={product.title}
                    ref={titleRef}
                    disabled={updateMode ? false : true}
                />
            </td>
            <td>
                <input
                    type="price"
                    name="price"
                    id="price"
                    defaultValue={product.price}
                    ref={priceRef}
                    disabled={updateMode ? false : true}
                />
            </td>
            <td>
                <button onClick={() => dispatch(deleteProduct(product.id))} className="btn btn-danger">Supprimer</button>
                {
                    updateMode ?
                        <>
                            <button
                                onClick={handlerSave}
                                className="btn btn-warning"
                            >
                                Enregistrer
                            </button> 
                            <button 
                                onClick={handlerAbort}
                                className="btn btn-light"
                            >
                                Annuler
                            </button>
                        </>
                        :
                        <button
                            onClick={handlerUpdateMode}
                            className="btn btn-success"
                        >
                            Modifier
                        </button>    
                }
            </td>
        </tr>
    );
}

export default ProductItem;