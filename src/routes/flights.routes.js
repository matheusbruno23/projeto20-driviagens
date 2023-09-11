import { Router } from "express";
import { getFlights, postFlights } from "../controllers/flights.controllers.js";

const flightsRouter = Router()

flightsRouter.post("/flights", postFlights)
flightsRouter.get("/flights", getFlights)

export default flightsRouter