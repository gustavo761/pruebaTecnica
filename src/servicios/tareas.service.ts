import { CrearTarea, ActualizarTarea } from "../types/tareas.types";
import { AppDataSource } from "../database/db";
import { Tareas } from "../entities/tareas.entity";
import { Usuario } from "../entities/usuario.entity";

export const obtenerTareaService = async (idUsuario: string) => {
  return await AppDataSource
    .getRepository(Tareas)
    .createQueryBuilder('tareas')
    .select([
      'tareas.id',
      'tareas.nombre',
      'tareas.descripcion',
      'tareas.estado'
    ])
    .where('tareas.usuario = :idUsuario', {idUsuario})
    .andWhere('tareas.estado != :estado', {estado:'ELIMINADO'})
    .getManyAndCount()
}

export const creaTareaService = async (tarea: CrearTarea, usuarioAuditoria: string) => {
  const newTarea = new Tareas({
    nombre: tarea.nombre,
    descripcion: tarea.descripcion,
    usuarioCreacion: usuarioAuditoria,
    fechaCreación: new Date(),
    usuario: new Usuario({ id: usuarioAuditoria})
  })
  console.log('NUEVA TAREA CREADA', newTarea)
  return await AppDataSource
    .getRepository(Tareas)
    .save(newTarea)
}

export const actualizarTareasService = async (tarea: ActualizarTarea, usuarioAuditoria: string) => {
  const tareaUpdate = new Tareas({
    nombre: tarea.nombre,
    descripcion: tarea.descripcion,
    estado: tarea.estado,
    usuarioActualizacion: usuarioAuditoria,
    fechaActualizacion: new Date()
  })
  return await AppDataSource
    .createQueryBuilder()
    .update(Tareas)
    .set(tareaUpdate)
    .where('id = :id', { id: tarea.idTarea })
    .execute()
}