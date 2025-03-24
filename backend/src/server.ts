import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import {db} from './config/db'
import cors from 'cors';

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green.bold( 'Conexion exitosa a la BD'));
    } catch (error) {
        console.log(colors.red.bold("Conexion fallida a la BD"));
        process.exit(1);
    }
}

connectDB()


const app = express()

app.use(morgan('dev'))

app.use(cors());

app.use(express.json())



export default app