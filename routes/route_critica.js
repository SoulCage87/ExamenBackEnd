import express from 'express'
const critica = express()

import { getCritica,postCritica,putCritica,dltCritica } from '../controllers/ApiCritica.js'

critica.get('', getCritica)
critica.post('', postCritica)
critica.put('/:id', putCritica)
critica.delete('/:id', dltCritica)

export {critica}