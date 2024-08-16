import { Pool } from "pg";
import dotenv from "dotenv"


dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    ENV
} = process.env;


let client = new Pool();
if (ENV === 'dev') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: Number(POSTGRES_PORT)
    });
    console.log('database connected...')
}



export default client;

