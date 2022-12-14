import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import dotenv from 'dotenv'
import { AuditoriaEntity } from "./auditoria.entity";
import { Usuario } from "./usuario.entity";

dotenv.config()

@Entity({ schema: process.env.DB_SCHEMA})
export class Tareas extends AuditoriaEntity{
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 100, type: 'varchar', nullable: false })
  nombre: string

  @Column({ type: 'text', nullable: false })
  descripcion: string

  @Column({ length: 15, type: 'varchar', default: 'PENDIENTE' })
  estado: string

  @ManyToOne(() => Usuario, (usuario) => usuario.tareas)
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
  })
  public usuario!: Usuario

  constructor(partial: Partial<Tareas> = {}) {
    super()
    Object.assign(this, partial)
  }
}