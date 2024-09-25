import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	console.log("In async method attempting to create table documents");
	await knex.schema.createTable('documents', function (table) {
		table.increments('id').primary();
		table.string('title').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('documents');
}

