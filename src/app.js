import  Express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.routes.js";

dotenv.config()
const app = Express()
app.use(router)
app.use(cors())
app.use(Express.json())

const PORT = process.env.PORT || 5000
app.listen(5000, () => console.log(`Running server on ${PORT}`))