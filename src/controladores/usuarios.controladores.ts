import { Request, Response} from 'express'
import {
  obtenerUsuariosService,
  guardarUsuariosService
} from '../servicios/usuario.service'
import { UsuarioGuardar } from '../types/usuario.types'

const obtenerUsuarios = async (_req: Request, res: Response) => {
  try {
    const respuesta = await obtenerUsuariosService()
    console.log(respuesta)
    return res.status(200).json(respuesta)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}

const guardarUsuario = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const usuarioAuditoria = '1' // En caso de existir algun administrador se debe capturar su id
    const body: UsuarioGuardar = {
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      correoElectronico: req.body.correoElectronico,
      contrasena: req.body.contrasena
    }
    const respuesta = await guardarUsuariosService(body, usuarioAuditoria)
    return res.status(200).json(respuesta)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}

export {
  obtenerUsuarios,
  guardarUsuario
}