import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1743710256621 implements MigrationInterface {
    name = 'Default1743710256621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "barcode" character varying NOT NULL, "name" character varying NOT NULL, "quantity" character varying NOT NULL, "group" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "ProfitPercentage" character varying NOT NULL, "Supplier" character varying NOT NULL, "urlImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
