import { Check, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import dotenv from 'dotenv'
import { AuditoriaEntity } from "./auditoria.entity";
import { Tareas } from "./tareas.entity";

dotenv.config()

@Entity({ schema: process.env.DB_SCHEMA })
export class Usuario extends AuditoriaEntity{
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 100, type: 'varchar' })
  nombres: string

  @Column({ length: 100, type: 'varchar' })
  apellidos: string

  @Column({ length: 255, type: 'varchar' })
  contrasena: string

  @Column({ name: 'correo_electronico',length: 100, type: 'varchar', unique: true })
  correoElectronico: string

  @Check("estado in ('ACTIVO', 'INACTIVO')")
  @Column({ length: 15, type: 'varchar', default: 'ACTIVO' })
  estado: string

  @OneToMany(() => Tareas, (tareas) => tareas.usuario, {
    cascade:true
  })
  public tareas!: Tareas[]

  constructor(partial: Partial<Usuario> = {}) {
    super()
    Object.assign(this, partial)
  }
}