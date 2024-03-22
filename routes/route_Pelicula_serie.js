import  express  from "express";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({storage : storage});

const pelicula = express()

import { getPelicula, postPelicula, putPelicula, dltPelicula } from "../controllers/ApiPelicula_serie.js";

pelicula.get('',getPelicula)
pelicula.post('', upload.single('imagen'), postPelicula)
pelicula.put('/:id', putPelicula)
pelicula.delete('/:id', dltPelicula)

export {pelicula}