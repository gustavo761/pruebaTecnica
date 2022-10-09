import { NextFunction, Request, Response } from "express";
import { verificarToken } from "../utils/jwt.handle";

export const verificaJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtusuario = req.headers.authorization || ''
    const jwt = jwtusuario.split(' ').pop()
    const verificacionJwt = verificarToken(`${jwt}`)
    if (!verificacionJwt) return res.status(401).json({finalizado: false, message: 'Token expirado'})
    next()
  } catch (error) {
    return res.status(400).json({
      finalizado: false,
      message: 'No tiene permisos para acceder a este recurso'
    })
  }
}
