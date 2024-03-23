import express from 'express'
import { personaje } from './routes/route_personaje.js'
import { actor } from './routes/route_Actor.js';
import { genero } from './routes/route_Genero.js';
import { pelicula } from './routes/route_Pelicula_serie.js';
import cors from 'cors'
import { user } from './routes/Route_user.js';
const port = 3000;
const app = express();
app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));
app.use('/api/personaje', personaje)
app.use('/api/actor', actor)
app.use('/api/genero', genero)
app.use('/api/pelicula', pelicula)
app.use('/api/user', user)

app.listen(port, () => {

 console.log(`Escuchando en el puerto ${port}`)

});