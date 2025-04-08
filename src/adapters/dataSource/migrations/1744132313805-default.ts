import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1744132313805 implements MigrationInterface {
    name = 'Default1744132313805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "cnpj" character varying NOT NULL, "situacao" character varying NOT NULL, "status" character varying NOT NULL, "nome" character varying NOT NULL, "fantasia" character varying NOT NULL, "atividade" text NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "logradouro" character varying NOT NULL, "numero" character varying NOT NULL, "municipio" character varying NOT NULL, "uf" character varying NOT NULL, "cep" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "barcode" character varying NOT NULL, "name" character varying NOT NULL, "quantity" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "ProfitPercentage" character varying NOT NULL, "urlImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0cb88e78eb2a2f34f41d2ee0b4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier_products_product" ("supplierId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_2fc6bc68b7400cb9a59bee155ce" PRIMARY KEY ("supplierId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d8d8411160d14f49ca085e8013" ON "supplier_products_product" ("supplierId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b255a39e6929dfb8dda1979d1b" ON "supplier_products_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "product_group_group_product" ("productId" integer NOT NULL, "groupProductId" integer NOT NULL, CONSTRAINT "PK_66abd2051364047d3169251414f" PRIMARY KEY ("productId", "groupProductId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e6f653d0d8ca9c179cf7f42188" ON "product_group_group_product" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a0193ab24efaf3704fe1699085" ON "product_group_group_product" ("groupProductId") `);
        await queryRunner.query(`ALTER TABLE "supplier_products_product" ADD CONSTRAINT "FK_d8d8411160d14f49ca085e80137" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier_products_product" ADD CONSTRAINT "FK_b255a39e6929dfb8dda1979d1b1" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" ADD CONSTRAINT "FK_e6f653d0d8ca9c179cf7f421880" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" ADD CONSTRAINT "FK_a0193ab24efaf3704fe16990851" FOREIGN KEY ("groupProductId") REFERENCES "group_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_group_group_product" DROP CONSTRAINT "FK_a0193ab24efaf3704fe16990851"`);
        await queryRunner.query(`ALTER TABLE "product_group_group_product" DROP CONSTRAINT "FK_e6f653d0d8ca9c179cf7f421880"`);
        await queryRunner.query(`ALTER TABLE "supplier_products_product" DROP CONSTRAINT "FK_b255a39e6929dfb8dda1979d1b1"`);
        await queryRunner.query(`ALTER TABLE "supplier_products_product" DROP CONSTRAINT "FK_d8d8411160d14f49ca085e80137"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a0193ab24efaf3704fe1699085"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6f653d0d8ca9c179cf7f42188"`);
        await queryRunner.query(`DROP TABLE "product_group_group_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b255a39e6929dfb8dda1979d1b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d8d8411160d14f49ca085e8013"`);
        await queryRunner.query(`DROP TABLE "supplier_products_product"`);
        await queryRunner.query(`DROP TABLE "group_product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
    }

}
