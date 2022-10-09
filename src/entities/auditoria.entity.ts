import { Column, Entity } from "typeorm";

@Entity()
export class AuditoriaEntity {
  @Column()
  usuarioCreacion: string

  @Column({ nullable: true })
  usuarioActualizacion?: string

  @Column()
  fechaCreación: string

  @Column({ nullable: true })
  fechaActualizacion?: string
}