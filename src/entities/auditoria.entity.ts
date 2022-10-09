import { Column } from "typeorm";

export abstract class AuditoriaEntity {
  @Column()
  usuarioCreacion: string

  @Column({ nullable: true })
  usuarioActualizacion?: string

  @Column({ type: 'date'})
  fechaCreación: Date

  @Column({ nullable: true, type: 'date' })
  fechaActualizacion?: Date
}