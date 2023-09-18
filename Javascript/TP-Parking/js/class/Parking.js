import { Vehicule } from "./Vehicule.js";

export class Parking {
    constructor() {
        this.vehiculeList = []
    }

    addVehicule(immat) {
        const newVehicule = new Vehicule(immat, new Date())
        this.vehiculeList.push(newVehicule)
    }

    immatIsPresent(immat) {
        return this.vehiculeList.some(vehicule => vehicule.immatriculation === immat);
    }

    parkingTime(immat) {
        const vehicule = this.vehiculeList.find(vehicule => vehicule.immatriculation === immat);
        const today = new Date()
        const dateArrival = new Date(vehicule.arrival)
        if (vehicule) {
            return (today-dateArrival)/60000
        } else {
            return console.log("Véhicule non trouvé");
        }
    }

} 