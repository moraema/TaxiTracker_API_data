import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    waitForConecctions: true,
    connectionLimit: 10,
}

const pool = mysql.createPool(config);

export async function query(sql:string, params: any[]) {
    
    try {
        const conn = await pool.getConnection();
        console.log('connection to the database was successful');
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch( error ){
        console.log('error connecting to the database')
    }
}