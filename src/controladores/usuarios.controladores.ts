import { Request, Response} from 'express'
import {
  obtenerUsuariosService,
  guardarUsuariosService,
  buscarUsuarioPorCorreo
} from '../servicios/usuario.service'
import { verificar } from '../utils/bcrypt.handle'
import { generarToken } from '../utils/jwt.handle'

const obtenerUsuarios = async (_req: Request, res: Response) => {
  try {
    const respuesta = await obtenerUsuariosService()
    console.log(respuesta)
    return res.status(200).json({
      finalizado:true,
      message: 'Consulta realizada con éxito',
      data: {
        filas: respuesta[0],
        cantidad: respuesta[1]
      }
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}

const loginUsuario = async ({body}: Request, res: Response) => {
  try {
    const existenciaUsuario = await buscarUsuarioPorCorreo(body.correoElectronico)
    if ( !existenciaUsuario ) throw new Error('Los datos ingresados son inválidos, intente nuevamente')
    
    const contrasenaHash = existenciaUsuario.contrasena
    const isEqual = await verificar(body.contrasena, contrasenaHash)
    
    if(!isEqual) throw new Error('Los datos ingresados son inválidos, intente nuevamente')
    
    const token = generarToken(existenciaUsuario.id)

    return res.status(200).json({
      finalizado:true,
      message: 'Iniciando sesion',
      data: {
        token: token,
        usuario: existenciaUsuario.id
      }
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        finalizado: false,
        message: error.message
      })
    }
  }
}

const registroUsuario = async ({body}: Request, res: Response) => {
  try {
    const usuarioAuditoria = '1' // En caso de existir algun administrador se debe capturar su id
    const existenciaUsuario = await buscarUsuarioPorCorreo(body.correoElectronico)
    if ( existenciaUsuario ) {
      // throw new Error('Los datos ingresados son inválidos, intente nuevamente')
      return res.json({
        finalizado: false,
        messaje: 'Error en los datos ingresados'
      })
    }
    const respuesta = await guardarUsuariosService(body, usuarioAuditoria)
    return res.status(200).json({
      finalizado:true,
      message: 'Consulta realizada con éxito',
      data: respuesta
    })
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
  loginUsuario,
  registroUsuario
}