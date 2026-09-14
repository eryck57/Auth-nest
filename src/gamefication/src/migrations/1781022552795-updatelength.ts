import { MigrationInterface, QueryRunner } from 'typeorm';

export class Updatelength1781022552795 implements MigrationInterface {
  name = 'Updatelength1781022552795';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "level" SET DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "currentXP" SET DEFAULT 0`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" DROP COLUMN "code"`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" ADD "code" character varying(6) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."code_confirmation_email_key"`,
    );
    await queryRunner.query(`DROP INDEX "public"."users_email_key"`);
    await queryRunner.query(`DROP INDEX "public"."users_pkey"`);
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" DROP COLUMN "code"`,
    );
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" ADD "code" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "currentXP" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "level" SET DEFAULT '1'`,
    );
  }
}
