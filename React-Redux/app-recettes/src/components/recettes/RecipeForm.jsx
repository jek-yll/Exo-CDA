import { useRef } from "react";
import { useDispatch } from "react-redux";
import { DB_URL } from "../../firebaseConfig";
import { addRecipe } from "./recipeSlice"

const RecipeForm = () => {

    const dispatch = useDispatch()

    //const user = useSelector(state => state.auth.user)
    const userToken = localStorage.getItem("token")

    //console.log(user);

    const titleRef = useRef()
    const instructionsRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
 
    const submitHandler = async (event) => {
        event.preventDefault()

        const newRecipe = {
            id: Date.now(),
            title: titleRef.current.value,
            instructions: instructionsRef.current.value,
            cookTime: cookTimeRef.current.value,
            prepTime: prepTimeRef.current.value,
        }

        if(userToken){
            try {
                const response = await fetch(`${DB_URL}/recipes.json?auth=${userToken}`,{
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newRecipe)
                })

                if(!response.ok){
                    throw new Error("Something went wrong during the POST request !")
                }

                const data = await response.json()
                console.log(data);

                dispatch(addRecipe(newRecipe))
            } catch(error) {
                console.error(error.message)
            }
        }

        

    }

    return (
        <div className="border my-3">
            <h2>Ajouter une recette</h2>
            <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                    <input 
                        type="title" 
                        className="form-control" 
                        id="floatingTitle" 
                        placeholder="Nom"
                        ref={titleRef} 
                    />
                    <label htmlFor="floatingTitle">Nom de la recette</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ref={instructionsRef}/* style="height: 100px" */></textarea>
                    <label htmlFor="floatingTextarea2">Instructions</label>
                </div>
                <div className="d-flex ">
                    <div className="form-floating mb-3">
                        <input type="cookTime" className="form-control" id="floatingCook" placeholder="cookTime" ref={cookTimeRef}/>
                        <label htmlFor="floatingCook">Temps de préparation</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="prepTime" className="form-control" id="floatingPrep" placeholder="prepTime" ref={prepTimeRef}/>
                        <label htmlFor="floatingPrep">Temps de cuisson</label>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default RecipeForm;