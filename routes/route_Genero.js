import express from "express"
const genero = express();

import { getGenero, postGenero, putGenero, dltGenero } from "../controllers/ApiGenero.js";

genero.get('', getGenero)
genero.post('', postGenero)
genero.put('/:id', putGenero)
genero.delete('/:id', dltGenero)

export { genero}