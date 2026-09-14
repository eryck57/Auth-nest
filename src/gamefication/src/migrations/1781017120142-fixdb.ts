import { MigrationInterface, QueryRunner } from 'typeorm';

export class Fixdb1781017120142 implements MigrationInterface {
  name = 'Fixdb1781017120142';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "stats" ("id" SERIAL NOT NULL, "attributes" jsonb DEFAULT '{"foco":0,"obsessao":0,"disciplina":0,"raciocinio":0,"mentalidade":0}', "rank" character varying(10) DEFAULT 'E', "level" integer DEFAULT 1, "currentXP" integer DEFAULT 0, "user_id" integer, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "stats_pkey" ON "stats"  ("id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_data" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" ADD CONSTRAINT "UQ_d0908c222cd42e53affdc86c0d4" UNIQUE ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" ALTER COLUMN "created_at" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ADD CONSTRAINT "FK_3adafadb37c6c021b46cd5edc20" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "stats" DROP CONSTRAINT "FK_3adafadb37c6c021b46cd5edc20"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."code_confirmation_email_key"`,
    );
    await queryRunner.query(`DROP INDEX "public"."users_email_key"`);
    await queryRunner.query(`DROP INDEX "public"."users_pkey"`);
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" ALTER COLUMN "created_at" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" DROP CONSTRAINT "UQ_d0908c222cd42e53affdc86c0d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_data" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(`DROP INDEX "public"."stats_pkey"`);
    await queryRunner.query(`DROP TABLE "stats"`);
  }
}
