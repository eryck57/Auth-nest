import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateName1781017550374 implements MigrationInterface {
  name = 'UpdateName1781017550374';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "code_confirmation" RENAME COLUMN "created_at" TO "updated_at"`,
    );
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
      `ALTER TABLE "code_confirmation" RENAME COLUMN "updated_at" TO "created_at"`,
    );
  }
}
