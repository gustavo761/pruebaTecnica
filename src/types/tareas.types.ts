import { Usuario } from "../entities/usuario.entity"

export interface CrearTarea {
  nombre: string
  descripcion: string
  usuario: string
}

type estadoTarea = 'PENDIENTE' | 'FINALIZADO'

export interface ActualizarTarea extends CrearTarea {
  idTarea: string
  estado: estadoTarea
}