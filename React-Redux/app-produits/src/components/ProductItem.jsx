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
            <td className="col-4">
                <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={product.title}
                    ref={titleRef}
                    disabled={updateMode ? false : true}
                />
            </td>
            <td className="col-4">
                <input
                    type="price"
                    name="price"
                    id="price"
                    defaultValue={product.price}
                    ref={priceRef}
                    disabled={updateMode ? false : true}
                />
            </td>
            <td className="col-4">
                <button onClick={() => dispatch(deleteProduct(product.id))} className="btn btn-danger me-1">Supprimer</button>
                {
                    updateMode ?
                        <>
                            <button
                                onClick={handlerSave}
                                className="btn btn-warning me-1"
                            >
                                Enregistrer
                            </button> 
                            <button 
                                onClick={handlerAbort}
                                className="btn btn-light me-1"
                            >
                                Annuler
                            </button>
                        </>
                        :
                        <button
                            onClick={handlerUpdateMode}
                            className="btn btn-success me-1"
                        >
                            Modifier
                        </button>    
                }
            </td>
        </tr>
    );
}

export default ProductItem;