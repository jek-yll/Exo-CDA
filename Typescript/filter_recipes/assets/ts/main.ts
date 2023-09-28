import { recipes } from "./data/recipes.js";
import { Recipe } from "./interface/Recipe.js";

const recipesContainer = document.querySelector("#recipesList") as HTMLDivElement
const modalName = document.querySelector("#recipeName") as HTMLHeadingElement
const recipeDetail = document.querySelector(".myModal") as HTMLDivElement
const prepTime = document.querySelector("#prepTime") as HTMLSpanElement
const cookTime = document.querySelector("#cookTime") as HTMLSpanElement
const serving = document.querySelector("#servings") as HTMLSpanElement
const ingredients = document.querySelector("#ingredients") as HTMLUListElement
const instructions = document.querySelector("#instructions") as HTMLUListElement
const closeModal = document.querySelector("#editContactClose") as HTMLElement
const preparationTime = document.querySelector("#preparationTime") as HTMLInputElement
const cookingTime = document.querySelector("#cookingTime") as HTMLInputElement
const recipeName = document.querySelector("#recipeName") as HTMLInputElement

const myRecipes: Recipe[] = []

for (const key in recipes) {
    myRecipes.push(recipes[key])
}
// console.table(myRecipes[1].instructions);
// console.log(myRecipes[1].name);

const displayRecipes = () => {
    for (let key  in myRecipes){
        const newButton = document.createElement("button")
        newButton.innerHTML =
        `
        <span>${myRecipes[key].name}</span>
        <hr>
        <div class="d-flex justify-content-around">
            <div class="d-flex">
                <img src="./assets/img/chef-hat.svg" alt="chefHat">
                <span class="ms-2">${myRecipes[key].prepTime}</span>
            </div>
            <div class="d-flex">
                <img src="./assets/img/fire.svg" alt="fire">
                <span class="ms-2">${myRecipes[key].cookTime}</span>
            </div>
        </div>
        `
        newButton.className = "btn btn-outline-light w-100 my-2"
        newButton.addEventListener('click', () => {
            recipeDetail.style.display = "block"
            // console.log(myRecipes.indexOf(myRecipes[key]));
            modalRecipeDetail(myRecipes.indexOf(myRecipes[key]))
        })
        recipesContainer.appendChild(newButton)
    } 
}

const modalRecipeDetail = (index: number) => {
    modalName.textContent = myRecipes[index].name
    prepTime.textContent = myRecipes[index].prepTime
    cookTime.textContent = myRecipes[index].cookTime
    serving.textContent = `${myRecipes[index].servings.toString()} serving(s)`
    listIngredients(index)
    listInstructions(index)
}

const listIngredients = (index: number) => {
    myRecipes[index].ingredients.forEach(
        ingredient => {
            const liIngredient = document.createElement("li")
            liIngredient.textContent = `${ingredient.name} (${ingredient.amount})`
            ingredients.appendChild(liIngredient)
        } 
    )
}

const listInstructions = (index: number) => {
    myRecipes[index].instructions.forEach(
        instruction => {
            const liInstruction = document.createElement("li")
            liInstruction.textContent = `${instruction}`
            instructions.appendChild(liInstruction)
        }
    )
}

closeModal.addEventListener('click', () => {
    recipeDetail.style.display = "none";
    ingredients.textContent = ''
    instructions.textContent = ''
});

/* preparationTime.addEventListener('click', () => {
    console.log(preparationTime.value);
}) */

/* cookingTime.addEventListener('click', () => {
    console.log(cookingTime.value);
})  */

displayRecipes()
