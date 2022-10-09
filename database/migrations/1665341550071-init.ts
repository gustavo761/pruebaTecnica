import { MigrationInterface, QueryRunner } from "typeorm";

export class init1665341550071 implements MigrationInterface {
    name = 'init1665341550071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "testnodejs"."usuario" ("usuarioCreacion" character varying NOT NULL, "usuarioActualizacion" character varying, "fechaCreación" date NOT NULL, "fechaActualizacion" date, "id" SERIAL NOT NULL, "nombres" character varying(100) NOT NULL, "apellidos" character varying(100) NOT NULL, "contrasena" character varying(255) NOT NULL, "correo_electronico" character varying(100) NOT NULL, "estado" character varying(15) NOT NULL DEFAULT 'ACTIVO', CONSTRAINT "UQ_656a48ae9eacaf9e820af18d24c" UNIQUE ("correo_electronico"), CONSTRAINT "CHK_d15a8cef35e8731743fa08e4b9" CHECK (estado in ('ACTIVO', 'INACTIVO')), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "testnodejs"."tareas" ("usuarioCreacion" character varying NOT NULL, "usuarioActualizacion" character varying, "fechaCreación" date NOT NULL, "fechaActualizacion" date, "id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" text NOT NULL, "estado" character varying(15) NOT NULL DEFAULT 'PENDIENTE', "id_usuario" integer, CONSTRAINT "PK_9370ac1b0569cacf8cda6815c97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "testnodejs"."tareas" ADD CONSTRAINT "FK_d18dd1a508cfe4d5ccef9ac9708" FOREIGN KEY ("id_usuario") REFERENCES "testnodejs"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "testnodejs"."tareas" DROP CONSTRAINT "FK_d18dd1a508cfe4d5ccef9ac9708"`);
        await queryRunner.query(`DROP TABLE "testnodejs"."tareas"`);
        await queryRunner.query(`DROP TABLE "testnodejs"."usuario"`);
    }

}
