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
const allIngredientsSelect = document.querySelector("#allIngredientsSelect") as HTMLSelectElement
const filterBtn = document.querySelector("#filter") as HTMLButtonElement
const prepTimeVal = document.querySelector("#prepTimeVal") as HTMLSpanElement
const cookTimeVal = document.querySelector("#cookTimeVal") as HTMLSpanElement

const myRecipes: Recipe[] = []

for (const key in recipes) {
    myRecipes.push(recipes[key])
}
// console.table(myRecipes[1].instructions);
// console.log(myRecipes[1].name);

// Affichage de toutes mes recettes sous forme de Boutons (nom, tps prep, tps cook)
const displayRecipes = () => {
    for (const key  in myRecipes){
        const newButton = document.createElement("button") as HTMLButtonElement
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

const displayFilters = () => {
    prepTimeVal.textContent = preparationTime.value
    cookTimeVal.textContent = cookingTime.value
    listIngredientsSelect()
}

// Envoie des infos dans ma modal de Details des recettes
const modalRecipeDetail = (index: number) => {
    modalName.textContent = myRecipes[index].name
    prepTime.textContent = myRecipes[index].prepTime
    cookTime.textContent = myRecipes[index].cookTime
    serving.textContent = `${myRecipes[index].servings.toString()} serving(s)`
    listIngredients(index)
    listInstructions(index)
}

// Création de la liste des Ingrédients (pour la modal)
const listIngredients = (index: number) => {
    myRecipes[index].ingredients.forEach(
        ingredient => {
            const liIngredient = document.createElement("li") as HTMLLIElement
            liIngredient.textContent = `${ingredient.name} (${ingredient.amount})`
            ingredients.appendChild(liIngredient)
        } 
    )
}

// Création de la liste des Instructions (pour la modal)
const listInstructions = (index: number) => {
    myRecipes[index].instructions.forEach(
        instruction => {
            const liInstruction = document.createElement("li") as HTMLLIElement
            liInstruction.textContent = `${instruction}`
            instructions.appendChild(liInstruction)
        }
    )
}

// Création de la liste des Ingrédients (pour les filtres)
const listIngredientsSelect = () => {
    let allIngredients: String[] = []
    for (const key in myRecipes) {
        //console.log(myRecipes[key].ingredients)
        for (const ingredient in myRecipes[key].ingredients ){
            //console.log(myRecipes[key].ingredients[ingredient].name)
            const ingredientName = myRecipes[key].ingredients[ingredient].name
            !allIngredients.includes(ingredientName) ? allIngredients.push(ingredientName) : undefined;
            const newOption = document.createElement("option") as HTMLOptionElement
            newOption.value = `${ingredientName}`
            newOption.textContent = `${ingredientName}`
            newOption.addEventListener( 'click', (e) => {
                const selectedValue = (e.target as HTMLSelectElement).value
                // console.log(selectedValue)
            }) 
            allIngredientsSelect.appendChild(newOption)
        }
    }
    // console.log(allIngredients)
}


closeModal.addEventListener('click', () => {
    recipeDetail.style.display = "none";
    ingredients.textContent = ''
    instructions.textContent = ''
});


filterBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("test")
    console.log(cookingTime.value)
    console.log(preparationTime.value)
    console.log(recipeName.value)
})


displayRecipes()
displayFilters()


preparationTime.addEventListener('click', () => {
    displayFilters()
    return preparationTime.value
})

cookingTime.addEventListener('click', () => {
    displayFilters()
    return cookingTime.value
})

const nameRecipeValue = (): string => {
    recipeName.addEventListener('click', () => {})
    console.log(recipeName.value)
    return recipeName.value
}

/* const filter = (): string[] => {
    prepTimeValue()
    cookTimeValue()
    nameRecipeValue()
    let filter: string[] = [prepTimeValue(),cookTimeValue(),nameRecipeValue()]

    return filter
} */

// console.log(filter())


