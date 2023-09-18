import { Parking } from "./class/Parking.js";

const immatInput = document.getElementById("immatriculation")
const paid = document.getElementById("paid")
const ticket = document.getElementById("ticket")
const alert = document.getElementById("alert")

let parking = new Parking()

function afficherAlert (message, alertType){
    alert.innerHTML = `
    <div class="alert ${alertType}" role="alert">
            ${message}
    </div>
    `;

    setTimeout( () => {
        alert.innerHTML = ''
    }, 5000)
}

ticket.addEventListener ("click", () => {
    if(parking.immatIsPresent(immatInput.value)){
        // Le vehicule est déjà dans mon parking
        afficherAlert(`Un ticket a déjà été délivré pour le véhicule ${immatInput.value}`, 'alert-danger')
    } else {
        if (immatInput.value !== ''){
        parking.addVehicule(immatInput.value)
        afficherAlert(`Veuillez prendre votre ticket pour le véhicule ${immatInput.value}`, 'alert-success')
        } else {
            // alert : entrez une immatriculation valide
        }
    }
    immatInput.value = ''
})

paid.addEventListener ("click", () => {
    if(parking.immatIsPresent(immatInput.value)){
        // le vehicule est dans le Parking
        const parkingTime = parking.parkingTime(immatInput.value)
        if (parkingTime > 45){
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 6€`, 'alert-warning')
        } else if (parkingTime >= 30) {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 1.70€`, 'alert-warning')
        } else if (parkingTime >= 15) {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 1.30€`, 'alert-warning')
        } else {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 0.80€`, 'alert-warning')
        }
    } else {
        afficherAlert(`Le véhicule ${immatInput.value} n'existe pas`, 'alert-danger')
    }
})

