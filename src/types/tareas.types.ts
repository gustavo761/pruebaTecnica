export interface CrearTarea {
  nombre: string
  descripcion: string
}

type estadoTarea = 'PENDIENTE' | 'FINALIZADO' | 'ELIMINADO'

export interface ActualizarTarea extends CrearTarea {
  idTarea: string
  estado: estadoTarea
}