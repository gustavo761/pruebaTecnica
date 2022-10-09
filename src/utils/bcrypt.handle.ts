import { hash, compare} from 'bcryptjs'

export const encriptar = async (contrasena: string) => {
  const passwordHash = await hash(contrasena, 8)
  return passwordHash
}

export const verificar = async (contrasena: string, contrasenaHash: string) => {
  const isEqual = await compare(contrasena, contrasenaHash)
  return isEqual
}