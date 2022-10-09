export interface UsuarioGuardar {
  nombres: string
  apellidos: string
  correoElectronico: string
  contrasena: string
}

export type UsuarioLogin = Pick<UsuarioGuardar, 'correoElectronico' | 'contrasena'>