import Joi from "joi";

export const travelSchema = Joi.object({
    passegngerId:Joi.number().required(),
    flightId: Joi.number().required()
})