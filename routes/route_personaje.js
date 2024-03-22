import express from 'express'
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({storage : storage});
const personaje = express()
import { getPersonaje, postPersonaje, putPersonaje, dltPersonaje } from '../controllers/ApiPersonaje.js'

personaje.use(express.json());
personaje.get('',getPersonaje);
personaje.post('', upload.single('imagen'), postPersonaje);
personaje.put('/:id', putPersonaje);
personaje.delete('/:id', dltPersonaje);

export {personaje}; 