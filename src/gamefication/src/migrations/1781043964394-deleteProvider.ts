import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteProvider1781043964394 implements MigrationInterface {
  name = 'DeleteProvider1781043964394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "provider"`);
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "level" SET DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "currentXP" SET DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."code_confirmation_email_key"`,
    );
    await queryRunner.query(`DROP INDEX "public"."users_email_key"`);
    await queryRunner.query(`DROP INDEX "public"."users_pkey"`);
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "currentXP" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "stats" ALTER COLUMN "level" SET DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "provider" character varying(10) NOT NULL`,
    );
  }
}
