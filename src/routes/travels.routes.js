import { Router } from "express";
import { postTravels } from "../controllers/travels.controllers.js";

const travelsRouter = Router()

travelsRouter.post("/travels", postTravels)

export default travelsRouter