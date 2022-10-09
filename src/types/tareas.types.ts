export interface CrearTarea {
  nombre: string
  descripcion: string
}

type estadoTarea = 'PENDIENTE' | 'FINALIZADO'

export interface ActualizarTarea extends CrearTarea {
  idTarea: string
  estado: estadoTarea
}