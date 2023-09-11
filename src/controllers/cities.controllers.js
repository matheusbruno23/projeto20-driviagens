import citiesServices from "../services/cities.services.js"

export async function postCities(req,res){
    const {name} = req.body
    try {
        await citiesServices.postCity(name)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error.message)
    }
}