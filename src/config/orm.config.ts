import {ConfigModule, ConfigService} from '@nestjs/config';
import {KnexModuleAsyncOptions} from "nestjs-knex";

export const ormconfig: KnexModuleAsyncOptions = {
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (config: ConfigService) => {
		return {
			config: {
				client: 'pg',
				connection: {
					host: config.get<string>('DB_HOST'),
					port: config.get<number>('DB_PORT'),
					database: config.get<string>('DB_DATABASE'),
					user: config.get<string>('DB_USERNAME'),
					password: config.get<string>('DB_PASSWORD'),
				},
				pool: {
					min: 4,
					max: 10,
				},
				migrations: {
					directory: __dirname + "/src/database/migrations",
				}
			},
		};
	},
};