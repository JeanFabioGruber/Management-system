import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1743987925490 implements MigrationInterface {
    name = 'Default1743987925490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "barcode" character varying NOT NULL, "name" character varying NOT NULL, "quantity" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "ProfitPercentage" character varying NOT NULL, "Supplier" character varying NOT NULL, "urlImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0cb88e78eb2a2f34f41d2ee0b4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_group_group_product" ("productId" integer NOT NULL, "groupProductId" integer NOT NULL, CONSTRAINT "PK_66abd2051364047d3169251414f" PRIMARY KEY ("productId", "groupProductId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e6f653d0d8ca9c179cf7f42188" ON "product_group_group_product" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a0193ab24efaf3704fe1699085" ON "product_group_group_product" ("groupProductId") `);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" ADD CONSTRAINT "FK_e6f653d0d8ca9c179cf7f421880" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" ADD CONSTRAINT "FK_a0193ab24efaf3704fe16990851" FOREIGN KEY ("groupProductId") REFERENCES "group_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_group_group_product" DROP CONSTRAINT "FK_a0193ab24efaf3704fe16990851"`);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" DROP CONSTRAINT "FK_e6f653d0d8ca9c179cf7f421880"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a0193ab24efaf3704fe1699085"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6f653d0d8ca9c179cf7f42188"`);
        await queryRunner.query(`DROP TABLE "product_group_group_product"`);
        await queryRunner.query(`DROP TABLE "group_product"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
