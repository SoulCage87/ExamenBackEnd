import express from 'express'
const user = express();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({storage : storage});

import { postUsuario, getUsuario, putUsuario, UserAuth } from '../controllers/ApiUser.js';

user.use(express.json());
user.post('', upload.single('imagen'), postUsuario);
user.get('/:nombre_usuario',getUsuario);
user.get('/auth/:nombre_usuario/:contrasena', UserAuth)
user.put('/:nombre_usuario', putUsuario);

export {user}