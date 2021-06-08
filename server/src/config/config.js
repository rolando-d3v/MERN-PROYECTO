import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT || '4000',

    db_host : process.env.DB_HOST  || 'localhost',
    db_name : process.env.DB_NAME  || 'dash-poke2',
    db_pass : process.env.DB_PASS  || 'jIjRdwT5uLjmCu2L',
    db_user : process.env.DB_USER  || 'abraham',

    secret : process.env.SECRET || 'TOP_SECRET'
}