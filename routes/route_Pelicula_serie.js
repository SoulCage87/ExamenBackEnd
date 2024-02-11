import  express  from "express";

const pelicula = express()

import { getPelicula, postPelicula, putPelicula, dltPelicula } from "../controllers/ApiPelicula_serie.js";

pelicula.get('',getPelicula)
pelicula.post('', postPelicula)
pelicula.put('/:id', putPelicula)
pelicula.delete('/:id', dltPelicula)

export {pelicula}