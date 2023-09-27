import { recipes } from "./data/recipes.js";
const recipesList = document.querySelector("#recipesList");
const mesRecettes = recipes;
console.table(mesRecettes);
const displayRecipe = () => {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
        }
    }
};
displayRecipe();
