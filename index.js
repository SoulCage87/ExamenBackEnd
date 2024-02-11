import express from 'express'
import { personaje } from './routes/route_personaje.js'
const port = 3000;
const app = express();
app.use(express.json());

app.use('/api/personaje', personaje)

app.listen(port, () => {

 console.log(`Escuchando en el puerto ${port}`)

});