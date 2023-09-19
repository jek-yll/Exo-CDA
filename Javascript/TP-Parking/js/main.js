import { Parking } from "./class/Parking.js";

const immatInput = document.getElementById("immatriculation")
const paid = document.getElementById("paid")
const ticket = document.getElementById("ticket")
const alert = document.getElementById("alert")

let parking = new Parking()

parking.addFakeVehiculeWithFakeDate('xx-123-xx', new Date("2023-09-18T10:30:00"))
parking.addFakeVehiculeWithFakeDate('yy-123-yy', new Date("2023-09-19T09:18:00"))

/* VEHICULES DEJA PRESENT :
xx-123-xx
yy-123-yy
*/

function immatIsValid(input) {
    let regex = /^[A-Z]{2}[-][0-9]{3}[-][A-Z]{2}$/i;
    return regex.test(input);
}

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
    if (immatInput.value !== ''){
        if (immatIsValid(immatInput.value)){
            if(parking.immatIsPresent(immatInput.value)){
                afficherAlert(`Un ticket a déjà été délivré pour le véhicule ${immatInput.value}`, 'alert-danger')
            } else {
                parking.addVehicule(immatInput.value)
                afficherAlert(`Veuillez prendre votre ticket pour le véhicule ${immatInput.value}`, 'alert-success')
            }
        } else {
            afficherAlert(`La plaque d'immatriculation n'est pas valide`, 'alert-danger')
        }
    } else {
        afficherAlert(`Plaque d'immatriculation invalide`)
    }
    immatInput.value = ''
})

paid.addEventListener ("click", () => {
    if(parking.immatIsPresent(immatInput.value)){
        const parkingTime = parking.parkingTime(immatInput.value)
        if (parkingTime > 45){
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 6€`, 'alert-warning')
            parking.vehiculeIsOut(immatInput.value)
        } else if (parkingTime >= 30) {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 1.70€`, 'alert-warning')
            parking.vehiculeIsOut(immatInput.value)
        } else if (parkingTime >= 15) {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 1.30€`, 'alert-warning')
            parking.vehiculeIsOut(immatInput.value)
        } else {
            afficherAlert(`Le prix à payer pour le véhicule ${immatInput.value} est de 0.80€`, 'alert-warning')
            parking.vehiculeIsOut(immatInput.value)
        }
    } else {
        afficherAlert(`Le véhicule ${immatInput.value} n'existe pas`, 'alert-danger')
    }
})

