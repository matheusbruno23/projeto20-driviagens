import { conflictError } from "../errors/errors.js";
import { getCityByNameDB } from "../repositories/cities.repositories.js";

async function postCity(name){
    try {
        const existingCity = await getCityByNameDB(name)
        if(existingCity) throw conflictError("Cidade")
        return "ok"
    } catch (error) {
        return console.log(error.message)
    }
}

const citiesService = {postCity}

export default citiesService