const dotenv = require('dotenv');
const knex = require('knex');
const path = require('path');

dotenv.config();

const dbConfig = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        ssl: {
            rejectUnauthorized: false,  // Добавляем SSL
        },
        schema: "public"
    },
    pool: {
        min: 4,
        max: 10,
    },
    migrations: {
        directory: path.resolve(__dirname, 'dist', 'database', 'migrations'),
        tableName: "migrations",
        loadExtensions: [".js"]
    },
};

module.exports = dbConfig;
