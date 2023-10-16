import { useRef } from "react"
import {useDispatch} from "react-redux"
import { addProduct } from "./Products.Slice"

const AddProduct = () => {
    const titleRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addProduct(
            {
                title: titleRef.current.value,
                price: priceRef.current.value
            }
        ))
    }

    return ( 
        <form onSubmit={submitHandler}>
            <h2>Ajouter un produit</h2>
            <div className="my-3">
                <label className="form-label" htmlFor="title">Nom du produit</label>
                <input className="form-control" type="text" name="title" id="title" ref={titleRef}/>
            </div>
            <div className="my-3">
                <label className="form-lable" htmlFor="price">Prix du produit</label>
                <input className="form-control" type="number" name="price" id="price" ref={priceRef}/>
            <div className="my-3 d-flex justify-content-center">
                <button className="btn btn-success">Ajouter un produit</button>
            </div>
            </div>
        </form>
     );
}
 
export default AddProduct;