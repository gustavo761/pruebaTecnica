import { DataSource } from "typeorm"
import { Usuario } from "../entities/usuario.entity"
import { UsuarioGuardar } from "../types/usuario.types"
import { AppDataSource } from "../database/db"


export const obtenerUsuariosService = async () => {
  return await AppDataSource
    .getRepository(Usuario)
    .createQueryBuilder('usuarios')
    .select([
      'usuarios.id',
      'usuarios.nombres',
      'usuarios.apellidos',
      'usuarios.correoElectronico',
    ])
    .where('usuarios.estado = :estado', {estado: 'ACTIVO'})
    .getManyAndCount()
}

export const guardarUsuariosService = async (usuario: UsuarioGuardar, usuarioAuditoria: string) => {
  const contrasena = usuario.contrasena // Encriptar contrasena
  const newUsuario = new Usuario({
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    correoElectronico: usuario.correoElectronico,
    contrasena: contrasena,
    usuarioCreacion: usuarioAuditoria,
    fechaCreación: new Date()
  })
  return await AppDataSource
   .getRepository(Usuario)
   .save(newUsuario)
}
