import { Router } from 'express'
import {
  obtenerUsuarios,
  loginUsuario,
  registroUsuario
} from '../controladores/usuarios.controladores'

const router = Router()

// Peticiones de tipo GET
router.get('/usuario', obtenerUsuarios)

// Peticiones de tipo POST
router.post('/login', loginUsuario)
router.post('/register', registroUsuario)

export default router