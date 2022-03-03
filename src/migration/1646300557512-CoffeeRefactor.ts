import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1646300557512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "title" to "name"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
