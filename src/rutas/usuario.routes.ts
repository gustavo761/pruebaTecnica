import { Router } from 'express'
import { obtenerUsuarios, guardarUsuario } from '../controladores/usuarios.controladores'

const router = Router()

// Peticiones de tipo GET
router.get('/usuario', obtenerUsuarios)

// Peticiones de tipo POST
router.post('/usuario', guardarUsuario)

export default router