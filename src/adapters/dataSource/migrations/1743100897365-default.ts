import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1743100897365 implements MigrationInterface {
    name = 'Default1743100897365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "barcode" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "barcode"`);
    }

}
