import Form from "../../shared/Form"

const ProductForm = () => {

    const submitHandler = () => {

    }

    return (
        <Form onSubmit={submitHandler}>
            <h1>Add Product </h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Nom du produit :</label>
                <input type="text" className="form-control" id="title" placeholder="produit" />
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="description" id="description" style={{height: "100px"}}></textarea>
                <label htmlFor="description">Description :</label>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Prix :</label>
                <input type="text" className="form-control" id="price" placeholder="prix" />
            </div>
            <button className="btn btn-primary">créer un nouveau produit</button>
        </Form>
    )
}

export default ProductForm