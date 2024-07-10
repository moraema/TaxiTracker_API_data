import dotenv from 'dotenv';
import { ConnectionOptions } from 'mysql2/typings/mysql/lib/Connection';

dotenv.config();

export const config: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
}
