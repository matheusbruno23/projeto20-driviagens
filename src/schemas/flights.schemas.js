import JoiBase from "joi";
import JoiDate from "@joi/date"

const Joi = JoiBase.extend(JoiDate)

export const citySchema = Joi.object({
    destination: Joi.number().required(),
    origin: Joi.number().required(),
    date:  Joi.date().format('DD-MM-YYYY').required()
})