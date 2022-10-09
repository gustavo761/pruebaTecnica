import { Usuario } from "../entities/usuario.entity"
import { UsuarioGuardar } from "../types/usuario.types"
import { AppDataSource } from "../database/db"
import { encriptar } from "../utils/bcrypt.handle"


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

export const buscarUsuarioPorCorreo = async (correo: string) => {
  return await AppDataSource
    .getRepository(Usuario)
    .createQueryBuilder('usuario')
    .select('usuario')
    .where('usuario.correoElectronico = :correo', { correo })
    .getOne()
}

export const guardarUsuariosService = async (usuario: UsuarioGuardar, usuarioAuditoria: string) => {
  const contrasenaHash = await encriptar(usuario.contrasena) 
  const newUsuario = new Usuario({
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    correoElectronico: usuario.correoElectronico,
    contrasena: contrasenaHash,
    usuarioCreacion: usuarioAuditoria,
    fechaCreación: new Date()
  })
  return await AppDataSource
   .getRepository(Usuario)
   .save(newUsuario)
}
