import { DataSource } from "typeorm";
import  { Usuario } from '../entities/usuario.entity'
import  { Tareas } from '../entities/tareas.entity'
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ||"localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSORD || "postgres",
  database: process.env.DB_DATABASE || "tareas_db",
  synchronize: false,
  entities: [Usuario, Tareas],
  logging: true,
})