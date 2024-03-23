import pg from 'pg-promise';
import dotenv from 'dotenv';

const pgp = pg();
dotenv.config();
 
const user=process.env.USER;
const pass = process.env.PASS;
const dataBase = process.env.DB;
const host = process.env.HOST;
const portDb = process.env.PORT_DB;

const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    })

export { db }