import { Vehicule } from "./Vehicule.js";

export class Parking {
    constructor() {
        this.vehiculeList = []
    }

    addVehicule(immat) {
        const newVehicule = new Vehicule(immat, new Date())
        this.vehiculeList.push(newVehicule)
    }

    addFakeVehiculeWithFakeDate(immat, fakeDate){
        const newVehicule = new Vehicule(immat, fakeDate)
        this.vehiculeList.push(newVehicule)
    }

    immatIsPresent(immat) {
        return this.vehiculeList.some(vehicule => vehicule.immatriculation === immat);
    }

    parkingTime(immat) {
        const vehicule = this.vehiculeList.find(vehicule => vehicule.immatriculation === immat);
        const today = new Date()
        const dateArrival = new Date(vehicule.arrival)
        // let madate2 = new Date("2023-09-19T10:30:00")
        if (vehicule) {
            return (today-dateArrival)/60000
        } else {
            return console.log("Véhicule non trouvé");
        }
    }

    vehiculeIsOut(immat) {
        this.vehiculeList = this.vehiculeList.filter(vehicule => vehicule.immatriculation !== immat)
    }
} 