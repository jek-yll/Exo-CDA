import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteProduct, updateProduct } from "./Products.Slice"

const ProductItem = ({ product }) => {
    const titleRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()

    const [updateMode, setUpdateMode] = useState(false)
    
    const prevPrice = product.price
    const prevTitle = product.title
    
    const handlerUpdateMode = () => {
        setUpdateMode(!updateMode)
    }

    const handlerSave = () => {
        dispatch(
            updateProduct(
                {
                    id: product.id,
                    title: titleRef.current.value ? titleRef.current.value : prevTitle,
                    price: priceRef.current.value ? priceRef.current.value : prevPrice
                }
            ))
        setUpdateMode(!updateMode)
        console.log(product);
    }

    const handlerAbort = () => {
        titleRef.current.value = prevTitle
        priceRef.current.value = prevPrice
        setUpdateMode(!updateMode)
    }
 
    return (
        <tr>
            <td className="col-4">
                <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={product.title}
                    placeholder={product.title}
                    ref={titleRef}
                    disabled={updateMode ? false : true}
                />
            </td>
            <td className="col-4">
                <input
                    type="text"
                    name="price"
                    id="price"
                    defaultValue={product.price}
                    placeholder={product.price}
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