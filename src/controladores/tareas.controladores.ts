import { Request, Response} from 'express'
import { actualizarTareasService, creaTareaService, obtenerTareaService } from '../servicios/tareas.service'
import { ActualizarTarea, CrearTarea } from '../types/tareas.types'
import { extraerPayload } from '../utils/jwt.handle'

const obtenerTareas = async (req: Request, res: Response) => {
  try {
    const jwtusuario = req.headers.authorization || ''
    const jwt = jwtusuario.split(' ').pop()
    const { id } = extraerPayload(`${jwt}`)
    const respuesta = await obtenerTareaService(id)
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
        finalizado: false,
        message: error.message
      })
    }
  }
}

const crearTareas = async (req: Request, res: Response) => {
  try {
    console.log('data recibida', req.body)
    const jwtusuario = req.headers.authorization || ''
    const jwt = jwtusuario.split(' ').pop()
    const { id } = extraerPayload(`${jwt}`)
    const body: CrearTarea = req.body
    const respuesta =  await creaTareaService(body, id)
    return res.status(200).json({
      finalizado:true,
      message: 'Tarea Registrada correctamente',
      data: respuesta
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        finalizado: false,
        message: error.message
      })
    }
  }
}

const actualizarTareas = async (req: Request, res: Response) => {
  try {
    const usuarioAuditoria = req.body.idUsuario
    const { id } = req.params
    const body: ActualizarTarea = { id, ...req.body}
    const respuesta = await actualizarTareasService(body, usuarioAuditoria)
    return res.status(200).json({
      finalizado:true,
      message: 'Tarea actualizada correctamente',
      data: respuesta
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        finalizado: false,
        message: error.message
      })
    }
  }
}

export {
  obtenerTareas,
  crearTareas,
  actualizarTareas
}