import "reflect-metadata"
import app from './app/app'
import { AppDataSource } from './database/db'

async function main () {
  try {
    await AppDataSource.initialize()
    console.log('Base de datos conectada')
    app.listen(3000)
    console.log('Servidor levantado en el puerto: 3000')
  } catch (error) {
    console.log(error)
  }
}

main()
