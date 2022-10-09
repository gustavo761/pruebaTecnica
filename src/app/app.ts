import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import usuarioRutas from '../rutas/usuario.routes'
import tareasRutas from '../rutas/tareas.routes'

const app = express()

// Configuraciones extra
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Rutas para usuario
app.use('/api', usuarioRutas)

// Rutas para tareas
app.use('/api', tareasRutas)

export default app