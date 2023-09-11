import { db } from "../database/database.connection.js";

export async function getCityByNameDB(name){
    return await db.query(`
    INSERT INTO cities (name) VALUES ($1)
    ;`, [name])
}