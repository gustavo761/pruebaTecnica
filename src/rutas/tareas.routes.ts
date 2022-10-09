import { Router } from 'express'
import {
  obtenerTareas,
  crearTareas,
  actualizarTareas
} from '../controladores/tareas.controladores'
import { verificaJWT } from '../middleware/session.middleware'

const router = Router()

// Peticiones de tipo GET
router.get('/tareas', verificaJWT, obtenerTareas)

// Peticiones de tipo POST
router.post('/tareas', verificaJWT, crearTareas)

// Peticiones de tipo PATCH
router.patch('/tareas/:id', verificaJWT, actualizarTareas)

export default router