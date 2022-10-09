import { Router } from 'express'
import {
  obtenerTareas,
  crearTareas,
  actualizarTareas
} from '../controladores/tareas.controladores'

const router = Router()

// Peticiones de tipo GET
router.get('/tareas/:id', obtenerTareas)

// Peticiones de tipo POST
router.post('/tareas', crearTareas)

// Peticiones de tipo PATCH
router.patch('/tareas/:id', actualizarTareas)

export default router