import { Vehicule } from "./Vehicule.js";

export class Parking {
    constructor() {
        this.vehiculeList = []
    }

    addVehicule(immat) {
        const newVehicule = new Vehicule(immat, Date())
        this.vehiculeList.push(newVehicule)
    }

    paid() {

    }

    giveTicket () {

    }
} 