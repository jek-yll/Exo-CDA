// import { Pokemon } from "./class/Pokemon.js"
import { Pokemon } from './class/Pokemon.js';

const apiUrl = "https://pokeapi.co/api/v2/pokemon"

const pokeImg = document.getElementById("pokeImg")
const pokeName = document.getElementById("pokeName")
const pokeHeight = document.getElementById("pokeHeight")
const pokeWeight = document.getElementById("pokeWeight")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const surprise = document.getElementById("surprise")


let id = Math.floor(Math.random() * 1010)
let pokeUrl = apiUrl+`/${id}`


prev.onclick = () => {
    id--
    pokeUrl = apiUrl+`/${id}`
    display(pokeUrl)
}

next.onclick = () => {
    id++
    pokeUrl = apiUrl+`/${id}`
    display(pokeUrl)
}

surprise.onclick = () => {
    id = Math.floor(Math.random() * 1010)
    pokeUrl = apiUrl+`/${id}`
    display(pokeUrl)
}

const display = (pokeUrl) => {
    fetch(pokeUrl)
        .then(response => {
            // Verifier si la rsponse est OK (HTTP 200)
            if(!response.ok){
                throw new Error(`La requete a echoue avec un statut ${response.status}`)
            }
            // Parser la reponse en JSON
            return response.json()
        }).then(data => {
            // Traitement des donnees de la reponse
            // console.log(data);
            const pokemon = new Pokemon(data.id, data.name, data.sprites.front_default, data.height, data.weight )
            // console.log(pokemon);
            pokeImg.src = pokemon.img
            pokeName.textContent = pokemon.name
            pokeHeight.textContent = pokemon.height
            pokeWeight.textContent = pokemon.weight
    
    
        }).catch(error => {
            // Gestion des erreurs
            console.error("une erreur : "+ error)
        })
}

display(pokeUrl)