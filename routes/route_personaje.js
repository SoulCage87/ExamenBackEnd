import express from 'express'

const personaje = express()
import { getPersonaje, postPersonaje, putPersonaje, dltPersonaje } from '../controllers/ApiPersonaje'

personaje.get('',getPersonaje);
personaje.post('', postPersonaje);
personaje.put('/:id', putPersonaje);
personaje.delete('/:id', dltPersonaje);

export {personaje};