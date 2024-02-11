import express from 'express';
const actor = express();

import { getActor, postActor, putActor, dltActor } from "../controllers/ApiActor.js";

actor.get('', getActor);
actor.post('', postActor);
actor.put('/:id', putActor);
actor.delete('/:id', dltActor);

 export {actor}