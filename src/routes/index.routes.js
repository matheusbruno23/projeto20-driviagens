import { Router } from "express";
import flightsRouter from "./flights.routes.js";
import passengersRouter from "./passengers.routes.js";
import travelsRouter from "./travels.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router()

router.use(flightsRouter)
router.use(passengersRouter)
router.use(travelsRouter)
router.use(citiesRouter)

export default router