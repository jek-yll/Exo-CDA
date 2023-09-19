import Article from "./class/Article.js"

const newItem = document.getElementById("item")
const addItem = document.getElementById("add")
const list = document.getElementById("list")
const removeAll = document.getElementById("clear")

const articleList = []

const articleItem = (text) => {
    list.innerHTML +=`
        <li class="list-group-item d-flex justify-content-between">
        ${text} 
        <div>
        <i class="bi bi-pencil-square text-success"></i>
        <i class="bi bi-trash3 text-danger"></i>
        </div>
    </li>
    `
}

const init = () => {
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList'))

    shoppingList.forEach(article => {
        articleItem(article.title) 
    });
}

addItem.onclick = () => {
    const article = {id: Date.now(), title: newItem.value}
    articleList.push(article)
    // console.log(article);
    localStorage.setItem('shoppingList', JSON.stringify(articleList))
    articleItem(newItem.value)
    newItem.value = ''
}

removeAll.onclick = () => {
    localStorage.clear()
    list.innerHTML = ''
}

window.onload = init()


