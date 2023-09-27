import { recipes } from "./data/recipes.js";
import { Recipe } from "./interface/Recipe.js";

const recipesList = document.querySelector("#recipesList") as HTMLDivElement

const mesRecettes: Recipe[] = recipes

console.table(mesRecettes);

const displayRecipe = () => {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}

displayRecipe()
