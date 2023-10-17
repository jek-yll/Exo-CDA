import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {

    const recipes = useSelector(state => state.recipe.recipes)
    const navigate = useNavigate()

    const goToAdd = () => {
        navigate("/recipes/add")
    }

    return ( 
        <>
            <h1>Recipe List</h1>
            <button onClick={goToAdd}>Ajouter une recette</button>
            {
                recipes.map((recipe, key) => (
                    <RecipeItem key={key} recipe={recipe}/>
                ))
            }
        </>
     );
}
 
export default RecipeList;