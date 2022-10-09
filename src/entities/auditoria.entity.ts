import { Column, Entity } from "typeorm";

@Entity()
export class AuditoriaEntity {
  @Column()
  usuarioCreacion: string

  @Column()
  usuarioActualizacion: string

  @Column()
  fechaCreación: string

  @Column()
  fechaActualizacion: string
}