import { sign, verify } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || 'token.123456789'

export const generarToken = (id: string) => {
  const jwt = sign({id}, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}

export const verificarToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

export const extraerPayload = (jwt: string) => {
  return JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString())
}