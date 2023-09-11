import { Router } from "express";
import { postCities } from "../controllers/cities.controllers.js";

const citiesRouter = Router()

citiesRouter.post("/cities", postCities)

export default citiesRouter