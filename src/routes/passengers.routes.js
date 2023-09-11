import { Router } from "express";
import { getPassengers, postPassengers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router()

passengersRouter.post("/passengers", postPassengers)
passengersRouter.get("/passengers/travels", getPassengers)

export default passengersRouter